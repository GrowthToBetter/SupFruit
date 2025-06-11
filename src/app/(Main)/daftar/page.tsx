"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { addMember } from "@/utils/memberServerAction";
import { uploadImageToCloudinary } from "@/utils/cloudinary.utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// 1. Define schema
const formSchema = z.object({
  licence_number: z.string().min(3, "Nomor lisensi harus diisi"),
  omzet: z.string().min(2, "Omzet harus diisi"),
  image: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function randomString(length: number) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}
export default function DaftarPage() {
  const { data: session, status } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      licence_number: "",
      omzet: "",
      image: undefined,
    },
  });

  // Redirect manually if not logged in (client-safe)
  if (status === "loading") return null;
  if (!session?.user) {
    redirect("/auth/signin");
  }

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);

    try {
      let imageUrl: string | undefined;

      if (imageFile) {
        const base64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result as string); // ✅ jangan split, kirim full
          };
          reader.onerror = reject;
          reader.readAsDataURL(imageFile);
        });

        const result = await uploadImageToCloudinary({
          base64,
          publicId: `supplier-image-${randomString(10)}`,
        });

        imageUrl = result.url;
      }

      const formData = new FormData();
      formData.append("licence_number", values.licence_number);
      formData.append("omzet", values.omzet);
      if (imageUrl) {
        formData.append("image_url", imageUrl);
      }
      await addMember(formData);
      router.push("/profile");
      toast.success("Berhasil mendaftar sebagai supplier");
    } catch {
      toast.error("Gagal mendaftar. Terjadi kesalahan atau sudah terdaftar");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md mt-10 rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">
        Daftar Sebagai Supplier
      </h1>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="licence_number">Nomor Lisensi</Label>
          <Input id="licence_number" {...form.register("licence_number")} />
        </div>
        <div>
          <Label htmlFor="omzet">Omzet Bulanan</Label>
          <Textarea id="omzet" {...form.register("omzet")} rows={3} />
        </div>
        <div>
          <Label htmlFor="image">Foto Profil (Opsional)</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setImageFile(file);
            }}
          />
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Mengirim..." : "Daftar"}
        </Button>
      </form>
    </div>
  );
}
