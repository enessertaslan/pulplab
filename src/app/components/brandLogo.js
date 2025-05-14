import React from "react";
import Image from "next/image";

export default function BrandLogo() {
  const brandLogo = [
    "/images/partners/lemon.avif",
    "/images/partners/cls.avif",
    "/images/partners/bitbull.avif",
    "/images/partners/aiavatar.avif",
    "/images/partners/ariacoin.avif",
    "/images/partners/spunky.avif",
  ];
  return (
    <div className="container relative">
      <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-6">
        {brandLogo.map((item, index) => {
          return (
            <div className="mx-auto py-4" key={index}>
              <Image
                width={100}
                height={50}
                src={item}
                className="h-6"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
