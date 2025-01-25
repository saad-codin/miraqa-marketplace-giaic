 import Image from "next/image" 
 
import BillingDetailsForm from "../components/BillingDetailsForm"

export default function Checkout (){ 

    return ( 

        <div>

            <div className="w-[1440px] h-[316px]" >
          <Image src = "/Group 78 (6).png" alt = " " height={316} width={1440}></Image> 
           </div> 

           <div className="w-[1440px] h-[1829px]">
  <div className="w-[1242px] h-[1714px] mt-10 ml-[100px] flex space-x-4 border-black border border-1px">
    {/* Billing Details Form */}
    <div className="w-[608px] h-[1714px] flex ml-10">
      <BillingDetailsForm />
    </div>

    {/* Second Div */}
          <div className="w-[608px] h-[789px] border border-black flex justify-items-end">
              <div className="w-[533px] h-[616px] border border-1px border-black ml-8 mt-24"> 
                <div className="flex justify-between p-2"> 
                <h1 className="text-2xl font-medium"> Product </h1> 
                <h1  className="text-2xl font-medium">Subtotal</h1> 
                </div> 
                <div className="flex justify-between mt-5 p-2">
                    <p>
                       <span className="text-xl text-[#9F9F9F]"> Asgaard sofa </span> x 1
                    </p>  
                    <p>Rs. 250,000.00</p>
                </div>  
                <div className="flex justify-between mt-2 p-2">
                    <p className="text-xl">
                       Subtotal
                    </p>  
                    <p>Rs. 250,000.00</p>
                </div>
                <div className="flex justify-between mt-2 p-2">
                    <p className="text-xl">
                       Total
                    </p>  
                    <p className="text-[#B88E2F] font-bold text-2xl">Rs. 250,000.00</p>
                </div> 

                <div className="border border-1px border-[#D9D9D9] w-[98%] ml-1 mt-8 "></div> 
                      <div className="mt-4 p-2"> 
                        <div className="flex">
                                            
             <Image src="/Ellipse 1.png" alt="" height={1} width={12}></Image> <h1 className="ml-2">Direct Bank Transfer</h1> 
             
              </div>

                      
                 </div>              
                 </div>
         </div>
  </div>
</div>
        
        </div>
    )
}