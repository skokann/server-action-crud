import { createNote, deleteNote, verifyCaptcha } from "@/lib/actions";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SubmitButton from "./SubmitButton";

export default async function Home() {
  const data = await prisma.note.findMany({
    take: 20, // Limit the results to 20
  });

  return (
    <main className="p-10">
      <div className="font-mono">
        <h1>CRUD APP WITH NEXT.JS SERVER ACTIONS</h1>
        <p>Simple nextjs app with server actions.</p>
        <form action={createNote} className="">
          <label htmlFor="text" className="block">
            Note
          </label>
          <textarea
            name="text"
            id="text"
            cols={30}
            rows={10}
            className="border border-black p-2"
          />
          <SubmitButton />
        </form>

        {/*map the notes*/}
        <div className="mt-6 space-y-4">
          <h1 className="border-b">Notes.....</h1>
          {data.map((item) => {
            const deleteNoteWithId = deleteNote.bind(null, item?.id);
            console.log(item);
            return (
              <div key={item?.id} className="underline block">
                <div className="inline-flex justify-center items-center gap-2">
                  <Link href={`/notes/${item?.id}`}>
                    <p>{item?.text}</p>
                  </Link>
                  <form action={deleteNoteWithId}>
                    <button type="submit" className="bg-red-400 p-2 rounded-md">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
