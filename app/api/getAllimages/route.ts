// src/pages/api/getallfolder.ts
import fs from 'fs';
import path from 'path';
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function GET(req: NextRequest , res: typeof NextResponse) {
  try {
    const dir = path.join(process.cwd(), "public/images");
  const files = fs.readdirSync(dir);

  const allfiles= files
    .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
    .map((file) => ({
      src: `/images/${file}`,
      alt: file.replace(/\.[^/.]+$/, ""),
      caption: "Auto-loaded image",
    }));
    return NextResponse.json(allfiles)
  } catch (err) {
     return NextResponse.json(
      { error: "Something went wrong during getting files"+err },
      { status: 500 }
    );
  }
}