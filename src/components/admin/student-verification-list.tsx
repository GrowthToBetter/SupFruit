"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { verifyStudent } from "@/app/admin/actions";
import { toast } from "sonner";
import { Prisma } from "@/generated/prisma";
import {
  Search,
  X,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Phone,
  User,
  Sparkles,
  School,
  BookOpen,
  Github,
  Contact,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface StudentVerificationListProps {
  students: Prisma.StudentProfileGetPayload<{
    include: {
      user: true;
    };
  }>[];
}

export function StudentVerificationList({
  students,
}: Readonly<StudentVerificationListProps>) {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {},
  );
  const [studentNotes, setStudentNotes] = useState<Record<string, string>>({});
  const [openDialogs, setOpenDialogs] = useState<
    Record<string, "VERIFY" | "REJECT" | null>
  >({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecialization, setFilterSpecialization] = useState<
    string | null
  >(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [highlightedStudent, setHighlightedStudent] = useState<string | null>(
    null,
  );
  const itemsPerPage = 6;

  const extractBatchFromEmail = (email: string): string => {
    const match = RegExp(/(\d{2})/).exec(email);
    return match ? `${match[1]}` : "-";
  };

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        searchTerm === "" ||
        student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student?.user?.email
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        student.expertise?.some((exp) =>
          exp.toLowerCase().includes(searchTerm.toLowerCase()),
        ) ||
        student.specialization.some((spec) =>
          spec.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesSpecialization =
        !filterSpecialization ||
        student.specialization.includes(filterSpecialization);

      return matchesSearch && matchesSpecialization;
    });
  }, [students, searchTerm, filterSpecialization]);

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const paginatedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredStudents.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredStudents, currentPage, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterSpecialization]);

  const handleOpenDialog = (studentId: string, action: "VERIFY" | "REJECT") => {
    setOpenDialogs((prev) => ({ ...prev, [studentId]: action }));
  };

  const handleCloseDialog = (studentId: string) => {
    setOpenDialogs((prev) => ({ ...prev, [studentId]: null }));
  };

  const handleNoteChange = (studentId: string, note: string) => {
    setStudentNotes((prev) => ({ ...prev, [studentId]: note }));
  };

  const handleVerification = async (
    studentId: string,
    action: "VERIFY" | "REJECT",
  ) => {
    try {
      setLoadingStates((prev) => ({ ...prev, [studentId]: true }));
      await verifyStudent(studentId, action, studentNotes[studentId] || "");

      toast.success(
        action === "VERIFY" ? "Siswa berhasil diverifikasi" : "Siswa ditolak",
        {
          description: studentNotes[studentId]
            ? `Catatan: ${studentNotes[studentId]}`
            : undefined,
          action: {
            label: "Tutup",
            onClick: () => {},
          },
        },
      );

      handleCloseDialog(studentId);

      setStudentNotes((prev) => {
        const newNotes = { ...prev };
        delete newNotes[studentId];
        return newNotes;
      });

      setHighlightedStudent(studentId);
      setTimeout(() => setHighlightedStudent(null), 1500);
    } catch {
      toast.error("Gagal memproses verifikasi", {
        description:
          "Silakan coba lagi atau hubungi dukungan jika masalah berlanjut.",
      });
    } finally {
      setLoadingStates((prev) => ({ ...prev, [studentId]: false }));
    }
  };

  const resetFilters = () => {
    setSearchTerm("");
    setFilterSpecialization(null);
    setCurrentPage(1);
  };

  if (students.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-muted/20 rounded-xl shadow-sm my-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-medium mb-2">
          Tidak ada siswa yang menunggu verifikasi
        </h3>
        <p className="text-muted-foreground max-w-md">
          Pengajuan perubahan profil siswa akan muncul di sini untuk ditinjau.
          Saat ini semua sudah diproses.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative w-full sm:w-auto sm:min-w-[280px]">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Cari nama atau email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9 w-full bg-white border-muted"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
        {(searchTerm || filterSpecialization) && (
          <Button
            variant="outline"
            size="sm"
            onClick={resetFilters}
            className="gap-1 bg-white"
          >
            <X className="h-4 w-4" /> Reset Filter
          </Button>
        )}
      </div>

      <div className="text-sm text-muted-foreground">
        {filteredStudents.length === 0 ? (
          <p>Tidak ada siswa yang cocok dengan filter Anda</p>
        ) : (
          <p>
            Menampilkan {paginatedStudents.length} dari{" "}
            {filteredStudents.length} siswa
          </p>
        )}
      </div>

      {filteredStudents.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {paginatedStudents.map((student) => (
            <div
              key={student.id}
              className={`h-full transition-all duration-300 ${
                highlightedStudent === student.id
                  ? "transform scale-[1.02]"
                  : ""
              }`}
            >
              <Card
                className={`flex flex-col h-full transition-all duration-300 hover:shadow-md ${
                  highlightedStudent === student.id
                    ? "ring-2 ring-primary ring-offset-2"
                    : ""
                }`}
              >
                <CardHeader className="pb-2 flex flex-row items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold line-clamp-1">
                      {student.fullName}
                    </CardTitle>
                    <CardDescription className="truncate max-w-[200px] sm:max-w-[250px]">
                      {student?.user?.email}
                    </CardDescription>
                  </div>
                  <div className="flex-shrink-0">
                    {student.profileImage ? (
                      <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                        <Image
                          src={student.profileImage}
                          alt="Profile"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User size={24} />
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow pt-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <h4 className="text-sm font-medium">
                          Jurusan & Angkatan
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary" className="text-xs">
                          {student.major}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-xs bg-primary/5"
                        >
                          Angkatan{" "}
                          {extractBatchFromEmail(student?.user?.email ?? "")}
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <School className="h-4 w-4 text-primary" />
                        <h4 className="text-sm font-medium">Kelas</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div className="bg-muted/60 px-2 py-1 rounded text-xs">
                          X:{" "}
                          <span className="font-medium">{student.classX}</span>
                        </div>
                        {student.classXI && (
                          <div className="bg-muted/60 px-2 py-1 rounded text-xs">
                            XI:{" "}
                            <span className="font-medium">
                              {student.classXI}
                            </span>
                          </div>
                        )}
                        {student.classXII && (
                          <div className="bg-muted/60 px-2 py-1 rounded text-xs">
                            XII:{" "}
                            <span className="font-medium">
                              {student.classXII}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <h4 className="text-sm font-medium">Spesialisasi</h4>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {student.specialization.map((spec) => (
                          <Badge
                            key={spec}
                            variant="outline"
                            className="text-xs bg-primary/5 hover:bg-primary/10"
                          >
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Contact className="h-4 w-4 text-primary" />
                        <h4 className="text-sm font-medium">Kontak</h4>
                      </div>
                      <div className="flex flex-col gap-1 text-sm">
                        {student.phone && (
                          <p className="text-muted-foreground flex items-center gap-1.5">
                            <Phone className="h-3 w-3" />
                            {student.phone}
                          </p>
                        )}
                        <div className="flex gap-2 mt-1">
                          {student.github && (
                            <a
                              href={student.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-md transition-colors"
                            >
                              <Github className="h-3 w-3" /> GitHub
                            </a>
                          )}
                          {student.linkedin && (
                            <a
                              href={student.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-md transition-colors"
                            >
                              <Linkedin className="h-3 w-3" /> LinkedIn
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-2 flex flex-wrap gap-2 border-t mt-4">
                  <Button
                    variant="outline"
                    className="flex-1 min-w-[80px] border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                    onClick={() => handleOpenDialog(student.id, "REJECT")}
                    disabled={loadingStates[student.id]}
                  >
                    {loadingStates[student.id] &&
                    openDialogs[student.id] === "REJECT" ? (
                      <>
                        <span className="loading loading-spinner loading-xs mr-2"></span>
                        Menolak...
                      </>
                    ) : (
                      <>
                        <AlertCircle className="mr-1 h-4 w-4" /> Tolak
                      </>
                    )}
                  </Button>
                  <Button
                    className="flex-1 min-w-[80px] bg-green-600 hover:bg-green-700"
                    onClick={() => handleOpenDialog(student.id, "VERIFY")}
                    disabled={loadingStates[student.id]}
                  >
                    {loadingStates[student.id] &&
                    openDialogs[student.id] === "VERIFY" ? (
                      <>
                        <span className="loading loading-spinner loading-xs mr-2"></span>
                        Memverifikasi...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="mr-1 h-4 w-4" /> Verifikasi
                      </>
                    )}
                  </Button>

                  <Dialog
                    open={openDialogs[student.id] === "REJECT"}
                    onOpenChange={(open) =>
                      !open && handleCloseDialog(student.id)
                    }
                  >
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-red-500" />
                          Tolak Siswa
                        </DialogTitle>
                        <DialogDescription>
                          Tambahkan catatan yang menjelaskan mengapa siswa ini
                          ditolak.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label
                            htmlFor={`notes-${student.id}`}
                            className="font-medium"
                          >
                            Catatan Penolakan
                          </Label>
                          <Textarea
                            id={`notes-${student.id}`}
                            value={studentNotes[student.id] || ""}
                            onChange={(e) =>
                              handleNoteChange(student.id, e.target.value)
                            }
                            placeholder="Masukkan alasan penolakan..."
                            rows={4}
                            className="resize-none"
                          />
                          <p className="text-xs text-muted-foreground">
                            Catatan ini akan dikirimkan ke siswa tersebut.
                          </p>
                        </div>
                      </div>
                      <DialogFooter className="flex flex-col sm:flex-row gap-2">
                        <Button
                          variant="outline"
                          onClick={() => handleCloseDialog(student.id)}
                          className="sm:order-1"
                        >
                          Batal
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() =>
                            handleVerification(student.id, "REJECT")
                          }
                          disabled={loadingStates[student.id]}
                          className="sm:order-2"
                        >
                          {loadingStates[student.id] ? (
                            <>
                              <span className="loading loading-spinner loading-xs mr-2"></span>
                              Menolak...
                            </>
                          ) : (
                            "Konfirmasi Penolakan"
                          )}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Dialog
                    open={openDialogs[student.id] === "VERIFY"}
                    onOpenChange={(open) =>
                      !open && handleCloseDialog(student.id)
                    }
                  >
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          Verifikasi Siswa
                        </DialogTitle>
                        <DialogDescription>
                          Anda akan memverifikasi profil {student.fullName}.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="my-4 p-3 bg-muted/30 rounded-md">
                        <div className="flex items-center gap-3">
                          {student.profileImage ? (
                            <div className="h-12 w-12 rounded-full overflow-hidden">
                              <Image
                                src={student.profileImage}
                                alt="Profile"
                                width={48}
                                height={48}
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                              <User className="h-6 w-6 text-primary" />
                            </div>
                          )}
                          <div>
                            <h3 className="font-medium">{student.fullName}</h3>
                            <p className="text-sm text-muted-foreground">
                              {student.major}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 text-sm">
                          <p className="mb-1 font-medium">Email:</p>
                          <p className="text-muted-foreground">
                            {student?.user?.email}
                          </p>
                        </div>
                      </div>
                      <DialogFooter className="flex flex-col sm:flex-row gap-2">
                        <Button
                          variant="outline"
                          onClick={() => handleCloseDialog(student.id)}
                          className="sm:order-1"
                        >
                          Batal
                        </Button>
                        <Button
                          onClick={() =>
                            handleVerification(student.id, "VERIFY")
                          }
                          disabled={loadingStates[student.id]}
                          className="sm:order-2 bg-green-600 hover:bg-green-700"
                        >
                          {loadingStates[student.id] ? (
                            <>
                              <span className="loading loading-spinner loading-xs mr-2"></span>
                              Memverifikasi...
                            </>
                          ) : (
                            "Konfirmasi Verifikasi"
                          )}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 bg-muted/30 rounded-lg text-center my-8">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-yellow-600" />
          </div>
          <h3 className="text-lg font-medium mb-2">
            Tidak ada siswa yang cocok dengan pencarian Anda
          </h3>
          <p className="text-muted-foreground mb-4 max-w-md">
            Coba sesuaikan istilah pencarian atau filter Anda
          </p>
          <Button onClick={resetFilters} className="gap-2">
            <X className="h-4 w-4" /> Reset Filter
          </Button>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination className="mx-auto">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.max(1, prev - 1));
                  }}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <Button
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={`w-9 h-9 ${
                        currentPage === page ? "bg-primary" : ""
                      }`}
                    >
                      {page}
                    </Button>
                  </PaginationItem>
                ),
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
