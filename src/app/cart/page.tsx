import Image from "next/image"
import Link from "next/link"
export default function Cart () { 

    return ( 
        <div>

            <div>
                <Image src="/Group 78 (5).png" alt="cart" width={1440} height={316}></Image>
            </div>
                      <div  className="w-[1440px] h-[525px]">

                      <div className="w-[1240px] h-[390px] mt-[100px] ml-[100px] flex">
  {/* Content section */}
  <div className="w-[817px] h-[215px] flex flex-col">
    {/* Header row */}
    <div className="w-[817px] h-[55px] flex bg-[#F9F1E7] p-4">
      <h1 className="ml-[170px] text-[16px] font-bold">Product</h1>
      <h1 className="ml-[100px] text-[16px] font-bold">Price</h1>
      <h1 className="ml-[80px] text-[16px] font-bold">Quantity</h1>
      <h1 className="ml-[55px] text-[16px] font-bold">Subtotal</h1>
    </div>

    {/* Product row */}
    <div className="flex ]">
      <div className="mt-[60px]">
        <Image src="/Group 146.png" alt="asgard sofa" height={105} width={108} />
      </div>
      <div className="w-[610px] h-[25px] ml-[60px] mt-[100px] flex">
        <p className="text-[16px] text-[#9F9F9F]">Asgaard sofa</p>
        <p className="ml-[60px] text-[16px] text-[#9F9F9F]">Rs 250,000.00</p>
        <div className="flex items-center justify-center border border-[#9F9F9F] h-[32px] w-[32px] rounded-[10px] ml-[60px]">
          <p className="text-black text-[16px]">1</p>
        </div>
        <p className="ml-[60px] text-[16px] text-black">Rs 250,000.00</p>
        <Image src="/ant-design_delete-filled.png" alt="trash" height={28} width={28} className="ml-[80px]" />
      </div>
    </div>
  </div>

 
  <div className="w-[393px] h-[390px] border border-1px bg-[#F9F1E7] ml-[auto]"> 
  <h1 className="text-center font-semibold text-3xl mt-[20px]">Cart Totals</h1>
  <div className="mt-[60px]">
      <div className="flex flex-col justify-between mt-[20px]"> {/* Ensuring 20px distance between the sections */}
    {/* Subtotal Row */}
    <div className="flex mt-[20px]"> 
      <p className="ml-[70px] font-semibold">Subtotal</p>
      <p className="ml-[100px] font-medium text-[#9F9F9F] text-[16px]">Rs 250,000.00</p>
    </div>
    
    {/* Total Row */}
    <div className="flex mt-[20px] gap-2"> 
      <p className="ml-[70px] font-semibold">Total</p>
      <p className="ml-[100px] text-xl text-[#B88E2F] font-semibold">Rs 250,000.00</p>
    </div>
  </div>
  <div className="mt-[60px] ml-[90px]"> 
    <Link href="/checkout">
    <button type="submit" className="border border-black border-1px rounded-[15px] text-semibold text-xl w-[222px] h-[59px] ">Check Out</button>
    </Link>
  </div>
</div>
</div>


</div>


                      </div> 
              <div className="w-[1440px] h-[270px]">  
                 <Image src="/Frame 161.png" alt="" height={270} width={1440}></Image>

              </div>
            


        </div>
    )
}