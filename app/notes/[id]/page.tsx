export default async function page({ id }: { id: string }) {
  return (
    <div className="font-mono">
      <h1>CRUD APP WITH NEXT.JS SERVER ACTIONS</h1>
      <p>Simple nextjs app with server actions.</p>
      <form action="" className="">
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
        <button type="submit" className="p-2 bg-blue-400 block">
          Submit
        </button>
      </form>
    </div>
  );
}
