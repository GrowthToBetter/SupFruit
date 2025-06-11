"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { verifyAchievement } from "@/app/admin/actions";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Prisma } from "@/generated/prisma";
import {
  ExternalLink,
  Info,
  Check,
  X,
  Calendar,
  Trophy,
  Building,
  Filter,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

interface AchievementVerificationListProps {
  achievements: Prisma.AchievementGetPayload<{
    include: {
      studentProfile: {
        include: { user: true };
      };
    };
  }>[];
}

export function AchievementVerificationList({
  achievements,
}: Readonly<AchievementVerificationListProps>) {
  const [isLoading, setIsLoading] = useState(false);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [filteredAchievements, setFilteredAchievements] =
    useState(achievements);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const router = useRouter();

  useEffect(() => {
    let result = [...achievements];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (achievement) =>
          achievement.title.toLowerCase().includes(query) ||
          achievement.competitionName.toLowerCase().includes(query) ||
          achievement?.studentProfile?.user?.name
            ?.toLowerCase()
            .includes(query) ||
          achievement.organizer.toLowerCase().includes(query),
      );
    }

    if (filterBy !== "all") {
      result = result.filter((achievement) => achievement.level === filterBy);
    }

    setFilteredAchievements(result);
    setCurrentPage(1);
  }, [searchQuery, filterBy, achievements]);

  const totalPages = Math.ceil(filteredAchievements.length / itemsPerPage);
  const currentItems = filteredAchievements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleVerification = async (
    achievementId: string,
    action: "VERIFY" | "REJECT",
  ) => {
    try {
      setIsLoading(true);
      setProcessingId(achievementId);
      await verifyAchievement(achievementId, action, notes);
      toast.success(
        `Achievement ${
          action === "VERIFY" ? "verified" : "rejected"
        } successfully`,
        {
          duration: 3000,
          position: "bottom-right",
        },
      );
      setNotes("");
      router.refresh();
    } catch (error) {
      toast.error(
        "Failed to process: " +
          (error instanceof Error ? error.message : "Unknown error"),
        {
          duration: 5000,
          position: "bottom-right",
        },
      );
    } finally {
      setIsLoading(false);
      setProcessingId(null);
    }
  };

  const levels = Array.from(new Set(achievements.map((a) => a.level)));

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Achievement Verification
          </h2>
          <p className="text-muted-foreground">
            Review and verify student achievements (
            {filteredAchievements.length} pending)
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative w-full sm:w-auto">
            <Input
              placeholder="Search achievements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-[200px] lg:w-[300px]"
            />
          </div>
          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <SelectValue placeholder="Filter by level" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              {levels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredAchievements.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
            <Trophy className="h-10 w-10 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">
              No achievements found
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {searchQuery || filterBy !== "all"
                ? "Try adjusting your filters to find what you're looking for."
                : "No achievements are pending verification at this time."}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((achievement) => (
            <Card
              key={achievement.id}
              className="flex flex-col transition-all hover:shadow-md"
            >
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle className="text-lg">
                    {achievement.studentProfile.user.name}
                  </CardTitle>
                  <Badge variant="outline">{achievement.level}</Badge>
                </div>
                <CardDescription className="line-clamp-2 mt-1">
                  {achievement.title} - {achievement.competitionName}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                <div className="grid grid-cols-[20px_1fr] items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{achievement.organizer}</span>
                </div>
                <div className="grid grid-cols-[20px_1fr] items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    {achievement.month}/{achievement.year}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 pt-3">
                {achievement.proof && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-center gap-2 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                      >
                        <Info className="h-4 w-4" />
                        <span>Show Proof</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[90vh] overflow-y-auto w-[95vw] max-w-[1000px]">
                      <DialogHeader className="mb-4">
                        <DialogTitle className="text-xl font-bold">
                          {achievement.title}
                        </DialogTitle>
                        <DialogDescription className="text-base">
                          {achievement.competitionName} -{" "}
                          {achievement.studentProfile.user.name}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-2">
                        <div className="relative w-full aspect-auto min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-muted rounded-lg overflow-hidden">
                          <iframe
                            src={`${achievement.proof}#toolbar=0`}
                            title={`Proof for ${achievement.title}`}
                            className="absolute inset-0 w-full h-full rounded-lg border border-border"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <DialogFooter className="mt-4 flex flex-col sm:flex-row gap-2">
                        <Button
                          variant="outline"
                          className="w-full sm:w-auto order-2 sm:order-1"
                          asChild
                        >
                          <Link
                            href={achievement.proof}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Open in New Tab
                          </Link>
                        </Button>
                        <DialogClose asChild>
                          <Button className="w-full sm:w-auto order-1 sm:order-2">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                )}
                <div className="grid grid-cols-2 gap-2 w-full">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full"
                        disabled={isLoading && processingId === achievement.id}
                      >
                        {isLoading && processingId === achievement.id ? (
                          <Skeleton className="h-4 w-4 rounded-full animate-pulse" />
                        ) : (
                          <X className="mr-2 h-4 w-4" />
                        )}
                        Reject
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Reject Achievement</DialogTitle>
                        <DialogDescription>
                          Add a note explaining why this achievement is being
                          rejected.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="notes">
                            Notes <span className="text-red-500">*</span>
                          </Label>
                          <Textarea
                            id="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Enter rejection reason..."
                            className="min-h-[100px]"
                            required
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button
                          variant="destructive"
                          onClick={() =>
                            handleVerification(achievement.id, "REJECT")
                          }
                          disabled={isLoading || !notes.trim()}
                        >
                          Confirm Reject
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        className="w-full"
                        disabled={isLoading && processingId === achievement.id}
                      >
                        {isLoading && processingId === achievement.id ? (
                          <Skeleton className="h-4 w-4 rounded-full animate-pulse" />
                        ) : (
                          <Check className="mr-2 h-4 w-4" />
                        )}
                        Verify
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Verify Achievement</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to verify this achievement? This
                          action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() =>
                            handleVerification(achievement.id, "VERIFY")
                          }
                        >
                          Confirm Verify
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <div className="text-sm">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
