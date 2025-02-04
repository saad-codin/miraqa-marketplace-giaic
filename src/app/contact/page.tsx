import Image from "next/image"
import { MapPin , Phone , Clock} from 'lucide-react'; 
import Feature from "../components/Feature";


export default function Contact () { 

    return ( 

        <div> 

            <div className="w-[1440px] h-[316px]">
                   <Image src="/Group 78 (7).png" alt="contact" width={1440} height={316}></Image>

            </div> 
            <div className="w-[1440px] h-[1144px]"> 
            <div className="mt-24 flex flex-col items-center">
  <h1 className="text-[36px] font-semibold">Get in Touch With Us</h1>
  <p className="w-[644px] h-[48px] mt-2 text-center text-[#9F9F9F] text-[16px] font-semibold">
    For More Information About Our Product & Services.
    Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
  </p>
  <div className="w-[1058px] h-[923px] mt-6 flex justify-between"> 
     <div className="w-[393px] h-[537px]  mt-[191px]">  
     <div className="max-w-sm mx-auto space-y-[100px] text-black mt-[40px] ">
      {/* Address Section */}
      <div className="flex items-start space-x-4">
        <MapPin size={24} className="text-black mt-1" />
        <div>
          <h3 className="font-bold text-lg">Address</h3>
          <p className="text-gray-600 text-[16px] leading-[24px]">
            236 5th SE Avenue, New <br />York NY10000, United <br /> States
          </p>
        </div>
      </div>

      {/* Phone Section */}
      <div className="flex items-start space-x-4">
        <Phone size={24} className="text-black mt-1" />
        <div>
          <h3 className="font-bold text-lg ">Phone</h3>
          <p className="text-gray-600 text-[16px] leading-[24px]">Mobile: +(84) 546-6789</p>
          <p className="text-gray-600 text-[16px] leading-[24px]">Hotline: +(84) 456-6789</p>
        </div>
      </div>

      {/* Working Time Section */}
      <div className="flex items-start space-x-4">
        <Clock size={24} className="text-black mt-1" />
        <div>
          <h3 className="font-bold text-lg">Working Time</h3>
          <p className="text-gray-600 text-[16px] leading-[24px]">Monday–Friday: 9:00 – 22:00</p>
          <p className="text-gray-600 text-[16px] leading-[24px]">Saturday–Sunday: 9:00 – 21:00</p>
        </div>
      </div>
    </div>
         


         
     </div> 
     <div className="w-[635px] h-[923px]  flex flex-col items-center "> 

        <div className="w-[531px] h-[741px]   mt-[119px] flex flex-col justify-between  ">  
        <div className="flex flex-col space-y-[65px] p-1 flex-grow">
  <div>
    <label htmlFor="firstName" className="block text-base mb-4 font-medium text-gray-700">
      Your name
    </label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      className="mt-1 w-full p-2 border border-gray-300 h-  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-base font-medium mb-4 text-gray-700">
      Email address
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="mt-1 w-full p-2 border h-[75px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  
</div>

<div>
    <label htmlFor="subject" className="block text-base mb-4 font-medium text-gray-700">
      Subject
    </label>
    <input
      type="text"
      id="subject"
      name="subject"
      className="mt-1 w-full h-[75px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  
</div> 

<div>
            <label htmlFor="additionalInfo" className="block text-base mb-4 font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              className="mt-1 w-full h-[120px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div> 

          <div>
            <button
              type="submit"
              className="w-[237px] bg-[#B88E2F] text-white py-2 px-2 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>

</div>
        </div>
     </div>

  </div>
</div>
 
 </div> 
 <div >
    <Feature />
 </div>


        </div>
    )
}