/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useState } from "react";

import useDummies from "@/hooks/useDummies";
import LoadingIndicator from "./loading-indicator";

const ImageDescriptionPair = () => {
  const { data, isLoading, error } = useDummies();
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (isLoading) return <LoadingIndicator />;
  if (error) return <div>Error...</div>;

  const selectedItem = data.data[selectedIndex];

  return (
    <div className="flex md:flex-row flex-col gap-10 w-2/5 justify-between">
      <div className="md:relative flex flex-col gap-4">
        <div className="md:absolute bottom-0 top-0 right-48 z-10 h-72 w-72 bg-red-600/80 rounded-full flex items-center justify-center text-white p-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              {selectedItem.buttonText}
            </h3>
            <p className="text-sm">{selectedItem.paragraph}</p>
          </div>
        </div>
        <div className="relative h-72 w-72">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${selectedItem.image.url}`}
            alt="Description Image"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {data.data.map((item: any, index: number) => (
          <button
            key={item.id}
            onClick={() => setSelectedIndex(index)} // Update selected index on click
            className={`w-full flex px-4 py-2 justify-between rounded-l-full transition-colors duration-300 hover:bg-red-600 hover:text-white ${
              index === selectedIndex
                ? "bg-red-600 text-white"
                : "bg-slate-200 text-black"
            }`}
          >
            <span className="mr-20">&lt;</span>
            <span>{item.buttonText}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageDescriptionPair;
