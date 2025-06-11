import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";

export async function RecentVerifications() {
  const recentLogs = await prisma.verificationLog.findMany({
    take: 5,
    include: {
      verifier: true,
      achievement: {
        include: {
          studentProfile: true,
        },
      },
      StudentProfile: {
        include: {
          user: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Verifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentLogs.map((log) => (
            <div key={log.id} className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {log.achievementId
                    ? log.achievement?.title
                    : "Profile Student"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {log.StudentProfile?.fullName ||
                    log.achievement?.studentProfile.fullName ||
                    "-"}{" "}
                  • {new Date(log.createdAt).toLocaleDateString()}
                </p>
              </div>
              <Badge
                variant={log.action === "VERIFY" ? "default" : "destructive"}
              >
                {log.action}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
