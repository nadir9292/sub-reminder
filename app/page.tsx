import SubList from "@/src/components/SubList";

export default function Home() {
  return (
    <div className="w-[90vw] max-w-128 mx-auto mt-6 font-montserrat">
      <h1 className="text-center mb-16">Your Total : 0.00€</h1>
      <h1 className="text-center text-2xl font-bold">Select your Sub</h1>
      <SubList />
    </div>
  );
}
