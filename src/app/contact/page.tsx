import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import Feature from "../components/Feature";

export default function Contact() {
  return (
    <div className="w-full">
      <div className="w-full h-auto">
        <Image
          src="/Group 78 (7).png"
          alt="contact"
          width={1440}
          height={316}
          className="w-full"
        />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 mt-16">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-semibold">Get in Touch With Us</h1>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our
            Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between mt-10 lg:mt-16">
          <div className="w-full lg:w-1/3 space-y-12">
            <div className="flex items-start space-x-4">
              <MapPin size={24} className="text-black mt-1" />
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone size={24} className="text-black mt-1" />
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock size={24} className="text-black mt-1" />
              <div>
                <h3 className="font-bold text-lg">Working Time</h3>
                <p className="text-gray-600">Monday–Friday: 9:00 – 22:00</p>
                <p className="text-gray-600">Saturday–Sunday: 9:00 – 21:00</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 mt-12 lg:mt-0">
            <div className="max-w-lg mx-auto space-y-6">
              <div>
                <label htmlFor="firstName" className="block text-base font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-base font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button className="w-full bg-[#B88E2F] text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Feature />
      </div>
    </div>
  );
}