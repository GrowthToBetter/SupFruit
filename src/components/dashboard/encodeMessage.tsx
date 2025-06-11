export function generateWhatsAppBookingURL(contactPhone: string): string {
  // Pastikan nomor telepon hanya angka (tanpa + atau spasi)
  const cleanedPhone = contactPhone.replace(/\D/g, "");

  const message = `
Halo, saya ingin memesan buah. Berikut data saya:

Nama Lengkap: [isi nama lengkap Anda]
Nomor Telepon: [isi nomor Anda]
Buah yang ingin dibeli: [isi buah yang ingin dibeli bisa lebih dari 1 jenis]
Jumlah: [isi jumlah buah yang ingin dibeli]
Tanggal: [isi tanggal]
Alamat: [isi alamat]
Pesan tambahan: [opsional]
Catatan spesial: [opsional]

Terima kasih.
  `.trim(); // .trim() agar tidak ada spasi di awal/paling akhir

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
}
export function generateWhatsInformation(contactPhone: string): string {
  // Pastikan nomor telepon hanya angka (tanpa + atau spasi)
  const cleanedPhone = contactPhone.replace(/\D/g, "");

  const message = `
Halo, saya ingin bertanya informasi mengenari [hal yang ingin ditanyakan]. 
Terima kasih.
  `.trim(); // .trim() agar tidak ada spasi di awal/paling akhir

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
}


export function generateWhatsAppBuyURL(contactPhone: string, fruitName: string, quantity: string): string {
  // Pastikan nomor telepon hanya angka (tanpa + atau spasi)
  const cleanedPhone = contactPhone.replace(/\D/g, "");

  const message = `
Halo, saya ingin memesan buah ${fruitName} dengan harga kiloan yaitu ${quantity}.. Berikut data saya:

Nama Lengkap: [isi nama lengkap Anda]
Nomor Telepon: [isi nomor Anda]
Jumlah: [isi jumlah buah yang ingin dibeli]
Tanggal: [isi tanggal]
Alamat: [isi alamat]
Pesan tambahan: [opsional]
Catatan spesial: [opsional]

Terima kasih.
  `.trim(); // .trim() agar tidak ada spasi di awal/paling akhir

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
}