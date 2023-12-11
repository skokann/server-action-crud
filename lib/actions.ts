"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

export async function createNote(formData: FormData) {
  console.log("asdasda");
  const text = formData.get("text") as string;
  await prisma.note.create({ data: { text } });
  revalidatePath("/");
}

export async function updateNote(id: string, formData: FormData) {
  const text = formData.get("text") as string;
  await prisma.note.update({
    where: {
      id,
    },
    data: {
      text,
    },
  });
  revalidatePath("/");
}

export async function deleteNote(id: string) {
  console.log(id);
  const isExist = await prisma.note.findUnique({ where: { id } });
  if (!isExist) return;
  await prisma.note.delete({ where: { id } });
  revalidatePath("/");
}
