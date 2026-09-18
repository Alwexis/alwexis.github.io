import type { CVDownload } from "../types";

export const CORE_TECHNOLOGIES = [
  "React",
  "TailwindCSS",
  "Python",
  "FastAPI",
  "Docker",
  "PostgreSQL",
  "AWS",
];

export const cvDownloads: CVDownload[] = [
  {
    label: "English (PDF)",
    filename: "CV Ariel Silva - EN.pdf",
    url: "/cv_en.pdf",
  },
  {
    label: "Español (PDF)",
    filename: "CV Ariel Silva - ES.pdf",
    url: "/cv_es.pdf",
  },
];
