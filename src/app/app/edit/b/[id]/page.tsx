import { getBinById } from "@/actions";
import { EditBinForm } from "@/components/app/edit-bin/form/form";
import { PropsById } from "@/interfaces";
import { redirect } from "next/navigation";

export default async function EditBinPage({ params }: PropsById) {
  const id = (await params).id;
  const { ok, bin } = await getBinById(id);

  if (!ok || !bin) redirect("/app/dashboard");

  return (
    <section className="md:px-10 space-y-10">
      <EditBinForm bin={bin} />
    </section>
  );
}
