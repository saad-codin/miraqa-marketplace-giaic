import Image from "next/image";

export default function SetupGallery() {
  return (
    <div className="w-full h-auto mt-12 sm:mt-16 mb-[100px]">
      <Image
        src="/Share (12).png"
        alt="gallery"
        layout="responsive"
        width={1799}
        height={780}
        className="w-full h-auto"
      />
    </div>
  );
}
