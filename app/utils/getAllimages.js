// lib/loadImages.ts
'use server'
import fs from "fs";
import path from "path";

export const loadImages =  async () => {
  const dir = path.join(process.cwd(), "public/images");
  const files = fs.readdirSync(dir);

  return files
    .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
    .map((file) => ({
      src: `/images/${file}`,
      alt: file.replace(/\.[^/.]+$/, ""),
      caption: "Auto-loaded image",
    }));
};
