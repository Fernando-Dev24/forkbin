import { PropsById } from "@/interfaces";

export default async function EditBinPage({ params }: PropsById) {
  const id = (await params).id;

  return (
    <div>
      <h1>Editing bin with id - {id} </h1>
    </div>
  );
}
