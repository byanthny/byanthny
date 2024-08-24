import Items from "@/components/Items";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-[25%] pt-[5%]">
      <main className="">
        <h1 className="text-2xl font-bold py-4">@byanthny</h1>
        <Items />
      </main>
    </div>
  );
}
