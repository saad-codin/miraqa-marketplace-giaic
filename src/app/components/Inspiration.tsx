import Image from "next/image";

interface Room {
  imageUrl: string;
  name: string;
}

const rooms: Room[] = [
  {
    imageUrl: '/Image (6).png', 
    name: 'Inner Peace',
  },
  {
    imageUrl: '/Rectangle 25.png', 
    name: 'Cozy Vibes',
  },
  
];

export default function Inspiration() {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 mt-[100px]"> 
      <div className="flex flex-col md:flex-row gap-8 "> 
        <div className="md:w-[422px] mt-[200px]"> 
          <h1 className="text-3xl font-bold mb-2">50+ Beautiful rooms inspiration</h1>
          <p className="text-gray-600 mb-4">
            Our design category includes a lot of beautiful
            <br />
            picture of rooms that inspire you.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
            Explore More
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto"> 
          {rooms.map((room, index) => (
            <div key={index} className="flex-shrink-0"> 
              <div className="relative">
                <Image src={room.imageUrl} alt={room.name} width={404} height={582} />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 px-4 py-2 rounded-md">
                  <h3 className="text-lg font-medium">{room.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {rooms.map((_, index) => (
          <div key={index} className="w-4 h-4 rounded-full bg-gray-300"></div>
        ))}
      </div>
    </div>
  );
}