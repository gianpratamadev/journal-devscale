import { FormCreate } from "./_components/form-create";
import { DataList } from "./_components/data-list";
import { FormUpdate } from "./_components/form-update";

export default async function Page() {
  return (
    <main className="mt-24 max-w-screen-md mx-auto p-4 space-y-24">
      <h1 className="font-bold text-3xl text-center">Journal o' Journey</h1>
      <FormCreate />
      <DataList />
    </main>
  );
}
