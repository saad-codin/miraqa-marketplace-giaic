 import Image from "next/image" 
 import { Circle } from 'lucide-react';
 
import BillingDetailsForm from "../components/BillingDetailsForm"

export default function Checkout (){ 

    return ( 

        <div>

            <div className="w-[1440px] h-[316px]" >
          <Image src = "/Group 78 (6).png" alt = " " height={316} width={1440}></Image> 
           </div> 

           <div className="w-[1440px] h-[1829px]">
  <div className="w-[1242px] h-[1714px] mt-10 ml-[100px] flex space-x-4 ">
    {/* Billing Details Form */}
    <div className="w-[608px] h-[1714px] flex ml-10">
      <BillingDetailsForm />
    </div>

    {/* Second Div */}
          <div className="w-[608px] h-[789px]  flex justify-items-end">
              <div className="w-[533px] h-[648px]  ml-8 mt-24"> 
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
                        <div className="flex place-items-baseline space-x-3">
                                            
                  <Circle size={14}/><h1 className="ml-2 text-[16px] leading-[24px] font-normal mb-1">Direct Bank Transfer</h1>  
                 </div>

                  <p className="text-[#9F9F9F] text-[16px] font-light leading-[24px] tracking-[1px]">Make your payment directly into our bank account. Please use <br /> your Order ID as the payment reference. Your order will not be <br /> shipped until the funds have cleared in our account.</p> 
                  <div className="flex place-items-baseline mt-7 "><Circle size={14} /> <p className="ml-3 text-[#9F9F9F] text-[16px] font-medium leading-[24px]" > Direct Bank Transfer</p> </div>
                  <div className="flex place-items-baseline mt-4 "><Circle size={14} /> <p className="ml-3 text-[#9F9F9F] text-[16px] font-medium leading-[24px]" > Cash on Delivery</p> </div> 

                  <p className="mt-5  text-[16px] font-light leading-[24px] tracking-[1px]">Your personal data will be used to support your experience  <br />throughout this website, to manage access to your account, and for other purposes described in our <b className="text-black"> privacy policy. </b></p> 
                  <button className="w-[318px] h-[64px] rounded-[15px] border border-black border-1px ml-[100px] mt-5"> Place Order</button>
                 </div>              
                 </div>
         </div>
  </div>
</div>
        
        </div>
    )
}