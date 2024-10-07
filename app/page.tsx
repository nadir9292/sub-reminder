import SubList from "@/src/components/SubList";

export default function Home() {
  return (
    <div className="w-[90vw] mx-auto mt-6 font-montserrat">
      <h1 className="text-center text-2xl font-bold">Select your Sub</h1>
      <SubList />
    </div>
  );
}
