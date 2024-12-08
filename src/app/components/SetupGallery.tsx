import Image from "next/image"


export default function SetupGallery ( ){ 

    return ( 

        <div className="w-[1799] h-[780] border border-2px border-black">
         <Image src="/Share (12).png" alt="gallery" width={1799} height={780}/>
        </div>
    )
}