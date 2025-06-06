"use client";

import { useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { upsertFruit, deleteFruit } from "@/utils/fruitServerAction";

const formSchema = z.object({
  id: z.string().optional(),
  fruit: z.string().min(1, "Nama buah wajib diisi"),
  stock: z.coerce.number().int().min(0, "Stok tidak valid"),
  price: z.string().min(1, "Harga wajib diisi"),
});

export function AddFruitForm({ supplierId }: { supplierId: string }) {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { id: undefined, fruit: "", stock: 0, price: "" },
  });

  const onSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("fruit", data.fruit);
        formData.append("stock", String(data.stock));
        formData.append("price", data.price);
        if (data.id) formData.append("id", data.id);

        await upsertFruit(formData, supplierId);
        toast.success("Buah berhasil disimpan");
        form.reset();
      } catch {
        toast.error("Gagal menyimpan buah");
      }
    });
  });

  return (
    <Card>
      <CardContent className="space-y-3 p-4">
        <h3 className="text-lg font-medium">Tambah / Edit Buah</h3>
        <form onSubmit={onSubmit} className="space-y-3">
          <Input
            placeholder="Nama buah"
            {...form.register("fruit")}
            disabled={isPending}
          />
          <Input
            type="number"
            placeholder="Stok"
            {...form.register("stock")}
            disabled={isPending}
          />
          <Input
            placeholder="Harga"
            {...form.register("price")}
            disabled={isPending}
          />
          <div className="flex gap-2">
            <Button type="submit" disabled={isPending}>
              Simpan
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => {
                const id = prompt("ID buah yang ingin dihapus:");
                if (!id) return;
                startTransition(async () => {
                  try {
                    await deleteFruit(id);
                    toast.success("Buah berhasil dihapus");
                  } catch {
                    toast.error("Gagal menghapus buah");
                  }
                });
              }}
              disabled={isPending}>
              Hapus
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
