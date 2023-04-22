import db from "../db";
import generateRandomCode from "../utils/generateRandomCode";

export async function storeFile(fileId: string) {
  const randomCode = generateRandomCode(8);
  await db.set(randomCode, {
    fileId: fileId,
  });
  return randomCode;
}

export async function getFile(code: string) {
  return await db.get(code);
}
