"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

export default async function createNote(formData: FormData) {
  const text = formData.get("text") as string;
  await prisma.note.create({ data: { text } });
  revalidatePath("/");
}
