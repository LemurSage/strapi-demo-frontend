"use client";

import ImageDescriptionPair from "@/components/image-description-pair";
import useDummies from "@/hooks/useDummies";

export default function Home() {
  const { data } = useDummies();
  if (!data) return <div>Loading...</div>;

  return (
    <div className="py-24 flex flex-col gap-6 container min-w-full text-center items-center justify-center">
      <h2 className="text-gray-600 text-lg">WHY CHOOSE US</h2>
      <h1 className="text-4xl font-bold text-gray-800">
        We Are Different From Others
      </h1>
      <p className="text-gray-600 md:w-1/2 w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate
        accusantium recusandae soluta explicabo hic! Facere unde nam accusantium
        natus?
      </p>
        <ImageDescriptionPair />
    </div>
  );
}
