import { updateNote } from "@/lib/actions";
import { prisma } from "@/lib/prisma";

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await prisma.note.findUnique({
    where: {
      id,
    },
  });
  const updateNoteWithId = updateNote.bind(null, params.id);
  return (
    <div className="font-mono p-2">
      <h1>CRUD APP WITH NEXT.JS SERVER ACTIONS</h1>
      <p>Simple nextjs app with server actions.</p>
      <form action={updateNoteWithId} className="">
        <label htmlFor="text" className="block">
          Note
        </label>
        <textarea
          name="text"
          id="text"
          cols={30}
          rows={10}
          className="border border-black p-2"
          defaultValue={data?.text}
        />
        <button type="submit" className="p-2 bg-blue-400 block">
          Submit
        </button>
      </form>
    </div>
  );
}
