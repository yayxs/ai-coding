import type { PathLike } from "fs";
import { readFile, type FileHandle } from "node:fs/promises";
export async function fsReadFile(filePath: PathLike | FileHandle) {
  try {
    const contents = await readFile(filePath, { encoding: "utf8" });
    console.log(contents);
    return contents;
  } catch (err: any) {
    console.error("err:", err.message);
  }
}
