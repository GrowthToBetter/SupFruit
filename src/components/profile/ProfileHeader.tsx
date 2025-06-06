/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/components/ui/card";

export function ProfileHeader({ user }: { user: any }) {
  return (
    <Card>
      <CardContent className="p-4 space-y-2">
        <h2 className="text-xl font-semibold">Profil Umum</h2>
        <p><strong>Nama:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Alamat:</strong> {user.address ?? "Belum diisi"}</p>
        <p><strong>Peran:</strong> {user.role}</p>
      </CardContent>
    </Card>
  );
}
