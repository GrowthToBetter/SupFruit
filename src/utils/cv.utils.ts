import { AchievementLevel, Major } from "@/generated/prisma";
import { toast } from "sonner";

/**
 * Downloads a file from the specified URL with the given filename
 * @param url The URL of the file to download
 * @param filename The name to save the file as
 * @returns void
 */
export function downloadFile(url: string, filename: string): void {
  const link: HTMLAnchorElement = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);

  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
  toast.loading("Mendownload Dokumen...", { id: "download-document" });

  if (new URL(url, window.location.href).origin !== window.location.origin) {
    fetch(url)
      .then((response: Response) => response.blob())
      .then((blob: Blob) => {
        const blobUrl: string = window.URL.createObjectURL(blob);
        link.href = blobUrl;
        document.body.appendChild(link);
        link.click();
        toast.dismiss("download-document");
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(blobUrl);
        }, 100);
      })
      .catch((e: Error) => console.error("Download failed:", e));
  } else {
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.dismiss("download-document");
  }
}

export function abbreviateName(name: string): string {
  const parts = name.split(" ");

  const combinedParts = [];
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].length <= 3 && i < parts.length - 1) {
      combinedParts.push(parts[i] + " " + parts[i + 1]);
      i++;
    } else {
      combinedParts.push(parts[i]);
    }
  }

  if (combinedParts.length > 4) {
    let abbreviatedName = `${combinedParts[0]} ${combinedParts[1]} ${combinedParts[2]}`;
    for (let i = 3; i < combinedParts.length; i++) {
      abbreviatedName += ` ${combinedParts[i][0]}.`;
    }
    return abbreviatedName;
  }

  return combinedParts.join(" ");
}
export const MAJOR_LABELS: Record<Major, string> = {
  RPL: "Rekayasa Perangkat Lunak",
  TKJ: "Teknik Jaringan Komputer dan Telekomunikasi",
  PG: "Pengembangan Gim",
};

export const ACHIEVEMENT_LEVEL_LABELS: Record<AchievementLevel, string> = {
  SCHOOL: "Sekolah",
  CITY: "Kota",
  PROVINCE: "Provinsi",
  NATIONAL: "Nasional",
  INTERNATIONAL: "Internasional",
};

const MONTHS_IN_INDONESIAN = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export function formatDate(date?: Date | null): string {
  if (!date) return "-";
  return `Malang, ${date.getDate()} ${
    MONTHS_IN_INDONESIAN[date.getMonth()]
  } ${date.getFullYear()}`;
}
