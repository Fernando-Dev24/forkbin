import { PropsById } from "@/interfaces";

export default async function MyStatsPage({ params }: PropsById) {
  const id = (await params).id;

  return (
    <div>
      <h1>Hello My Stats under Profile route</h1>
      <p>User id - {id}</p>
    </div>
  );
}
