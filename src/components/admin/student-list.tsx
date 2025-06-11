"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Search, Eye } from "lucide-react";
import {
  getStudents,
  getStudentDetails,
  getAllSpecializations,
} from "@/app/admin/actions";
import { Prisma, VerificationLog } from "@/generated/prisma";
import ShowCV from "@/components/dashboard/show-cv";
import { toast } from "sonner";

type StudentListItem = {
  id: string;
  fullName: string;
  email: string;
  major: string;
  specialization: string[];
  achievements: number;
  batch: number;
};

type StudentDetail = Prisma.StudentProfileGetPayload<{
  include: {
    achievements: true;
  };
}>;

export function StudentList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState<StudentListItem[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState<{
    studentDetails: StudentDetail;
    verificationLog: VerificationLog | null;
  } | null>(null);
  const [showCV, setShowCV] = useState(false);
  const [specializations, setSpecializations] = useState<string[]>([]);
  const [loadingCV, setLoadingCV] = useState(false);

  const search = searchParams.get("search") || "";
  const specialization = searchParams.get("specialization") || "";
  const major = searchParams.get("major") || "";
  const batch = searchParams.get("batch") || "";
  const sortBy = searchParams.get("sortBy") || "";
  const page = Number(searchParams.get("page")) || 1;

  const extractBatchFromEmail = (email: string): number => {
    const match = RegExp(/(\d{2})(?:rpl|tkj|pg)/).exec(email);
    return match ? parseInt(match[1]) : 0;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [studentsResult, specializationsResult] = await Promise.all([
          getStudents({
            search,
            specialization,
            major,
            batch: batch ? parseInt(batch) : undefined,
            sortBy: sortBy as "achievements_asc" | "achievements_desc",
            page,
          }),
          getAllSpecializations(),
        ]);
        const studentsWithBatch = studentsResult.students.map((student) => ({
          ...student,
          batch: extractBatchFromEmail(student.user.email ?? student.email),
        }));
        setStudents(studentsWithBatch);
        setTotalPages(studentsResult.totalPages);
        setSpecializations(specializationsResult);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [search, specialization, major, batch, sortBy, page]);

  const handleShowCV = async (student: StudentListItem) => {
    setLoadingCV(true);
    toast.loading("Memuat data...", { id: "loading-cv" });
    try {
      const { student: studentDetails, verificationLog } =
        await getStudentDetails(student.id);

      setSelectedStudent({ studentDetails, verificationLog });
      setShowCV(true);
      toast.success("Data berhasil dimuat", { id: "loading-cv" });
    } catch (error) {
      console.error("Failed to fetch student details:", error);
      toast.error("Gagal memuat data", { id: "loading-cv" });
    }
    setLoadingCV(false);
  };

  const updateSearchParams = (params: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams.toString());
    Object.entries(params).forEach(([key, value]) => {
      if (value && value !== "all") {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari nama atau email..."
            value={search}
            onChange={(e) => updateSearchParams({ search: e.target.value })}
            className="pl-8"
          />
        </div>
        <Select
          value={batch}
          onValueChange={(value) => updateSearchParams({ batch: value })}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Angkatan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua</SelectItem>
            {Array.from(
              { length: new Date().getFullYear() - 2020 },
              (_, i) => 29 + i,
            ).map((year) => (
              <SelectItem key={year} value={year.toString()}>
                Angkatan {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={specialization}
          onValueChange={(value) =>
            updateSearchParams({ specialization: value })
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Spesialisasi" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua</SelectItem>
            {specializations.map((spec) => (
              <SelectItem key={spec} value={spec}>
                {spec}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={major}
          onValueChange={(value) => updateSearchParams({ major: value })}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Jurusan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua</SelectItem>
            <SelectItem value="RPL">RPL</SelectItem>
            <SelectItem value="TKJ">TKJ</SelectItem>
            <SelectItem value="PG">PG</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={sortBy}
          onValueChange={(value) => updateSearchParams({ sortBy: value })}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Urutkan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Terbaru</SelectItem>
            <SelectItem value="achievements_desc">
              Prestasi Terbanyak
            </SelectItem>
            <SelectItem value="achievements_asc">Prestasi Terdikit</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Angkatan</TableHead>
              <TableHead>Jurusan</TableHead>
              <TableHead>Spesialisasi</TableHead>
              <TableHead>Prestasi</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : students.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  Tidak ada data
                </TableCell>
              </TableRow>
            ) : (
              students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">
                    {student.fullName}
                  </TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.batch || "-"}</TableCell>
                  <TableCell>{student.major}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {student.specialization.map((spec, index) => (
                        <Badge key={index} variant="secondary">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{student.achievements}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleShowCV(student)}
                      disabled={loadingCV}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          onClick={() => updateSearchParams({ page: String(page - 1) })}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => updateSearchParams({ page: String(page + 1) })}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>

      <Dialog open={showCV} onOpenChange={setShowCV}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>CV Prestasi</DialogTitle>
          </DialogHeader>
          <div className="flex-1 pr-2 self-center">
            <div className="scale-[0.4] sm:scale-[0.55] origin-top">
              {selectedStudent && (
                <ShowCV
                  studentProfile={selectedStudent.studentDetails}
                  achievements={selectedStudent.studentDetails.achievements}
                  verificationLogs={selectedStudent.verificationLog}
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
