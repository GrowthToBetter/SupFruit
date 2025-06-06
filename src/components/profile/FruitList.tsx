import { Card, CardContent } from "@/components/ui/card";
import { supplyFruitGetPayload } from "@/utils/relationship";

export function FruitList({
  showVerificationStatus = false,
  fruits,
}: {
  showVerificationStatus?: boolean;
  fruits: supplyFruitGetPayload[];
}) {
  return (
    <Card>
      <CardContent className="space-y-2 p-4">
        <h3 className="text-lg font-medium">Daftar Produk Buah</h3>
        {fruits.map((fruit, i) => (
          <div key={i} className="border p-2 rounded-md">
            <p>
              <strong>Nama:</strong> {fruit.fruit.name}
            </p>
            <p>
              <strong>Stok:</strong> {fruit.fruit.stock}
            </p>
            <p>
              <strong>Price:</strong> {fruit.fruit.price.price} -{" "}
              {`${fruit.fruit.price.date.getDate()}/${
                fruit.fruit.price.date.getMonth() + 1
              }/${fruit.fruit.price.date.getFullYear()}`}
            </p>
            {showVerificationStatus && (
              <p>
                <strong>Status Verifikasi:</strong>{" "}
                {fruit.fruit.isVerif ? "Terverifikasi" : "Belum"}
              </p>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
