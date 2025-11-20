import { PropsById } from "@/interfaces";

export default async function MyInformationPage({ params }: PropsById) {
  const id = (await params).id;

  return (
    <div>
      <h1>Hello My Information under Profile route</h1>
      <p>User id - {id}</p>
    </div>
  );
}
