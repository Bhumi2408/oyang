"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images, alt }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100" style={{ height: "320px" }}>
        <Image src={images[active]} alt={alt} fill className="object-cover" />
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 mt-3">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className="relative rounded-lg overflow-hidden shrink-0"
              style={{
                width: "70px",
                height: "70px",
                border: active === i ? "2px solid #C6272C" : "2px solid transparent",
              }}
            >
              <Image src={img} alt={`${alt} ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}