"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

export async function verifyCaptcha(token: string | null) {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_SECRET_KEY}&response=${token}`
  );
  if (res.data.success) {
    return "success!";
  } else {
    throw new Error("Failed Captcha");
  }
}

export async function createNote(formData: FormData) {
  console.log("formData", formData);

  //const text = formData.get("text") as string;
  //  await prisma.note.create({ data: { text } });
  //revalidatePath("/");
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
