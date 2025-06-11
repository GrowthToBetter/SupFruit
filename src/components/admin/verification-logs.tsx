"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Prisma } from "@/generated/prisma";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

interface VerificationLogsProps {
  logs: Prisma.VerificationLogGetPayload<{
    include: {
      verifier: true;
      achievement: {
        include: {
          studentProfile: true;
        };
      };
      StudentProfile: {
        include: {
          user: true;
        };
      };
    };
  }>[];
  currentPage: number;
  totalPages: number;
  perPage: number;
}

export function VerificationLogs({
  logs,
  currentPage,
  totalPages,
}: Readonly<VerificationLogsProps>) {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Verifier</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>
                  {new Date(log.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>{log.verifier.name}</TableCell>
                <TableCell>
                  {log.StudentProfile?.user.name ||
                    log.achievement?.studentProfile.fullName ||
                    "-"}
                </TableCell>
                <TableCell>
                  {log.achievementId ? "Achievement" : "Student Profile"}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      log.action === "VERIFY" ? "default" : "destructive"
                    }
                  >
                    {log.action}
                  </Badge>
                </TableCell>
                <TableCell>{log.notes || "-"}</TableCell>
                <TableCell>
                  {log.achievementId && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          View Achievement
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Achievement Details</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium">Achievement</h4>
                            <p>{log.achievement?.title}</p>
                          </div>
                          <div>
                            <h4 className="font-medium">Level</h4>
                            <p>{log.achievement?.level}</p>
                          </div>
                          <div>
                            <h4 className="font-medium">Competition</h4>
                            <p>{log.achievement?.competitionName}</p>
                          </div>
                          <div>
                            <h4 className="font-medium">Organizer</h4>
                            <p>{log.achievement?.organizer}</p>
                          </div>
                          <div>
                            <h4 className="font-medium">Date</h4>
                            <p>{`${log.achievement?.month}/${log.achievement?.year}`}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={createPageURL(currentPage - 1)}
              className={
                currentPage <= 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    href={createPageURL(page)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            }

            if (page === 2 || page === totalPages - 1) {
              return (
                <PaginationItem key={page}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }

            return null;
          })}

          <PaginationItem>
            <PaginationNext
              href={createPageURL(currentPage + 1)}
              className={
                currentPage >= totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
