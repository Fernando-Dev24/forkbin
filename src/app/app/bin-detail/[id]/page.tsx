import { PropsById } from "@/interfaces";

export default async function BinDetailPage({ params }: PropsById) {
  const id = (await params).id;

  return (
    <div>
      <h1>Hello BinDetailPage - {id}</h1>
    </div>
  );
}
