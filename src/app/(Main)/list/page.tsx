import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@radix-ui/react-separator";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { generateWhatsAppBuyURL } from "@/components/dashboard/encodeMessage";
import { contact } from "@/components/landing-page/footer";
import Link from "next/link";
import Image from "next/image";

export default async function FruitListPage() {
  const list = await prisma.fruit
    .findMany({
      where: {
        isVerif: true,
        status_fruit: "ready_stock",
      },
      include: {
        supplier: {
          include: {
            user: true,
          },
        },
        price: true,
      },
    })
    .then((res) => res.filter((f) => f.supplier.member === true));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="w-full py-10 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">
          Jelajahi Buah Segar
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Temukan berbagai jenis buah dari para supplier terpercaya.
        </p>
      </section>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Daftar Buah</h2>

        {list.length === 0 ? (
          <div className="text-center text-slate-600 text-lg py-20">
            Tidak ada buah yang tersedia saat ini.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map((fruit) => (
              <Card key={fruit.id} className="shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between gap-6 rounded-xl border p-4 shadow-sm bg-white">
                    <div className="flex items-center gap-4">
                      <Avatar className="bg-emerald-100 text-emerald-600">
                        <AvatarFallback>
                          {fruit.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="text-lg font-semibold text-slate-900">
                          {fruit.name}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Harga:{" "}
                          <span className="font-medium">
                            Rp {fruit.price?.price || "-"}
                          </span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Stock:{" "}
                          <span className="font-medium">
                            {fruit.stock || "0"} Kg
                          </span>
                        </p>
                      </div>
                    </div>

                    {fruit.image && (
                      <div className="min-w-[100px] max-w-[150px]">
                        <Image
                          src={fruit.image}
                          alt={fruit.name}
                          width={150}
                          height={150}
                          className="rounded-md object-cover shadow"
                        />
                      </div>
                    )}
                  </div>

                  <Separator className="my-3 bg-slate-200 h-px" />
                  <div className="flex flex-wrap gap-2 text-sm mb-2">
                    <Badge variant="outline">Stock: {fruit.stock}</Badge>
                    <Badge variant="default">
                      Supplier: {fruit.supplier.user.name}
                    </Badge>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline" className="w-full">
                        Lihat Detail
                      </Button>
                    </DialogTrigger>
                    <Button
                      size="sm"
                      asChild
                      variant="default"
                      className="w-full mt-3">
                      <Link
                        href={generateWhatsAppBuyURL(
                          contact,
                          fruit.name,
                          fruit.price?.price
                        )}>
                        Pesan Sekarang
                      </Link>
                    </Button>
                    <DialogContent>
                      <DialogTitle>{fruit.name}</DialogTitle>
                      <DialogDescription>
                        Informasi tambahan mengenai buah.
                      </DialogDescription>
                      <Collapsible>
                        <CollapsibleTrigger className="text-sm text-emerald-700 underline">
                          Lihat Supplier
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-2 text-sm">
                          <Badge variant="default">
                            Supplier: {fruit.supplier.user.name}
                          </Badge>
                        </CollapsibleContent>
                      </Collapsible>
                      <DialogClose asChild>
                        <Button className="mt-4 w-full" variant="secondary">
                          Tutup
                        </Button>
                      </DialogClose>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
