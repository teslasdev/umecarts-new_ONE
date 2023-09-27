import { HiBars3BottomLeft } from "react-icons/hi2";
import logo from "../../assets/logo/Vector.png";
import { CgClose } from "react-icons/cg";
import { PrimaryButton } from "../common/Button";
import { Link } from "react-router-dom";
import { BiCloudDownload, BiDotsVertical, BiHome } from "react-icons/bi";
import { BsChat, BsWallet } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
export const AuthBar = ({
   className,
   onClick
}) => {
   return (
      <div className={`fixed overflow-hidden z-20 w-full h-screen blur-bg`}>
         <div className={`${className} bg-white transition-transform delay-700  w-[75%] h-full relative z-50`}>
            <div className="h-[63px] shadow-sm flex justify-between md:px-12 sm:px-24 px-4 items-center">
               <div className="flex items-center gap-4">
                 <CgClose size={24} className="cursor-pointer" onClick={onClick} />
                 <img src={logo} alt="" />
               </div>
            </div>

            <div className="p-6">
               <div className="flex justify-between">
               <PrimaryButton name="Log in" classNameButton="w-[124px] h-[48px] bg-[#004399] rounded-md text-white font-bold text-[18px]" type="false" />
               <PrimaryButton name="Sign up" classNameButton="w-[124px] h-[48px] border border-[#004399] rounded-md font-bold text-[18px]" type="false" />
               </div>

               <div className="py-2">
                  <div>
                     <Link className='flex items-center py-4 gap-5 text-lg'>
                        <BiHome size={24} color='#1F3047'/>
                        <p className='pt-1 font-semibold'>Home</p>
                     </Link>
                  </div>

                  <div>
                     <Link className='flex items-center py-4 gap-5 text-lg'>
                        <BiDotsVertical size={24} color='#1F3047'/>
                        <p className='pt-1 font-semibold'>Categories</p>
                     </Link>
                  </div>

                  <div>
                     <Link className='flex items-center py-4 gap-5 text-lg'>
                        <FiShoppingCart size={24} color='#1F3047'/>
                        <p className='pt-1 font-semibold'>Orders</p>
                     </Link>
                  </div>

                  <div>
                     <Link className='flex items-center py-4 gap-5 text-lg'>
                        <BsChat size={24} color='#1F3047'/>
                        <p className='pt-1 font-semibold'>Messages</p>
                     </Link>
                  </div>

                  <div>
                     <Link className='flex items-center py-4 gap-5 text-lg'>
                        <BsWallet size={24} color='#1F3047'/>
                        <p className='pt-1 font-semibold'>Payment</p>
                     </Link>
                  </div>

                  <div>
                     <Link className='flex items-center py-4 gap-5 text-lg'>
                        <BiCloudDownload size={24} color='#1F3047'/>
                        <p className='pt-1 font-semibold'>Track Orders</p>
                     </Link>
                  </div>
               </div>

              
            </div>
            <div className="w-full bg-[#f5f5f5] font-bold h-[50px] absolute bottom-10 flex justify-center items-center">
               Be A Seller
            </div>
         </div>
      </div>
   )
}

export const guestBar = () => {

}
