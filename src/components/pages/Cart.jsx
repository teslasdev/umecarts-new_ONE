import React, {useState} from 'react'
import { CartBadge } from '../common/Badge'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { HiOutlinePencil } from 'react-icons/hi2'
import { FormPopup } from '../common/Modal'

const Cart = () => {
    let product = 2;
    let product2 = 3;
    const [handleModal, setModal] = useState(false)
    const [handleClick,setClick] = useState(0);

    const onChange = (value) => {
        setClick(value)
    }
  return (
    <>
        <Layout>
            <CartBadge />
            <div className='py-6'>
                <div className='flex justify-center'>
                    <div className='bg-white rounded-md w-[50%] text-center p-6 shadow-md'>
                        <h3 className='font-extrabold text-2xl'>Your Cart is Empty!</h3>
                        <h5 className='border-gray-bottom text-[#2E486B] py-4 text-xl'>You do not have any product on your cart yet.</h5>

                        <div className='w-full flex justify-center items-center py-4'>
                            <Link className='btn-default-full bg-red-primary text-lg flex items-center justify-center gap-2'>Check Around</Link>
                        </div>
                    
                    </div>
                </div>

                <div className='flex justify-center mt-3'>
                    <div className='bg-white rounded-md w-[60%] text-center p-6 shadow-md'>
                        <div className='border-gray-bottom pb-2 flex justify-between items-center pr-12'>
                            <h3 className='flex justify-start font-bold text-[18px] w-[60%]'>Product</h3>

                            <div className='flex w-[40%] justify-around'>
                                <h3 className='font-bold text-[18px]'>Quantity</h3>
                                <h3 className='font-bold text-[18px]'>Price</h3>
                            </div>
                        </div>

                        <div className='border-gray-bottom flex justify-between'>
                            <div className='py-4 flex w-[60%] gap-2'>
                                <label htmlFor={product}>
                                <input
                                    className="radio-input"
                                    type="checkbox"
                                    name='product'
                                    id={product}
                                    value={product}
                                    hidden
                                    onChange={(e) => onChange(e.target.id)}
                                />
                                    <div className={`um-cart-border-outline cursor-pointer ${handleClick === product ? 'um-cart-border-outline-clicked' : '' }`} />
                                </label>
                                <div className='um-cart-img-small rounded-sm'>
                                    <img src="" className='w-full h-full rounded-sm' alt="" srcset="" />
                                </div>

                                <div className='flex flex-col items-start justify-start'>
                                    <h3 className='font-extrabold text-lg'>Louis Vuitton Pam slipper</h3>
                                    <p className='text-xs text-[#2E486B]'>41/Male/Green</p>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-xs text-gray-400'>Price</p>
                                        <h4 className='text-lg text-[#2E486B] font-extrabold'>₦12,500</h4>
                                    </div>
                                </div>
                            </div>

                            

                            <div className='flex justify-around my-3 w-[40%] items-center'>
                                <div className='flex flex-col gap-2 items-start'>
                                  <div className='flex gap-2 items-center'>
                                    <span className='um-product-reading text-[20px]'>-</span>
                                    <h4>01</h4>
                                    <span className='um-product-reading text-[20px]'>+</span>
                                  </div>
                                  <h3 className='font-extrabold text-[#017E4D]'>In Stock</h3>
                                </div>
                                <div>
                                    <h3 className='text-red-800 font-extrabold text-xl'>#12,500</h3>
                                </div>
                            </div>

                            <div className='self-center um-cart-delete'>
                                <RiDeleteBin6Line/>
                            </div>
                        </div>

                        <div className='border-gray-bottom flex justify-between'>
                            <div className='py-4 flex w-[60%] gap-2'>
                                <label htmlFor={product}>
                                <input
                                    className="radio-input"
                                    type="checkbox"
                                    name='product'
                                    id={product2}
                                    value={product2}
                                    hidden
                                    onChange={(e) => onChange(e.target.id)}
                                />
                                    <div className={`um-cart-border-outline cursor-pointer ${handleClick === product2 ? 'um-cart-border-outline-clicked' : '' }`} />
                                </label>
                                <div className='um-cart-img-small rounded-sm'>
                                    <img src="" className='w-full h-full rounded-sm' alt="" srcset="" />
                                </div>

                                <div className='flex flex-col items-start justify-start'>
                                    <h3 className='font-extrabold text-lg'>Louis Vuitton Pam slipper</h3>
                                    <p className='text-xs text-[#2E486B]'>41/Male/Green</p>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-xs text-gray-400'>Price</p>
                                        <h4 className='text-lg text-[#2E486B] font-extrabold'>₦12,500</h4>
                                    </div>
                                </div>
                            </div>

                            

                            <div className='flex justify-around my-3 w-[40%] items-center'>
                                <div className='flex flex-col gap-2 items-start'>
                                  <div className='flex gap-2 items-center'>
                                    <span className='um-product-reading text-[20px]'>-</span>
                                    <h4>01</h4>
                                    <span className='um-product-reading text-[20px]'>+</span>
                                  </div>
                                  <h3 className='font-extrabold text-[#017E4D]'>In Stock</h3>
                                </div>
                                <div>
                                    <h3 className='text-red-800 font-extrabold text-xl'>#12,500</h3>
                                </div>
                            </div>

                            <div className='self-center um-cart-delete'>
                                <RiDeleteBin6Line/>
                            </div>
                        </div>

                        <div className='border-gray-bottom flex justify-between py-3'>
                            <div className='flex gap-4 w-[60%] items-center'>
                                <p className='text-sm font-semibold text-gray-500'>Sold By</p>
                                <h3 className='text-md font-bold text-[#2E486B]'>SAMUEL CROWN</h3>
                            </div>

                            <div className='underline decoration-1 w-[40%] flex justify-start text-blue-600'>Message Seller</div>
                        </div>

                        <div className='py-3 flex justify-between items-center'>
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <h3 className='text-[#2E486B]'>Sub-total :</h3>
                                    <h3 className='text-red-800 font-extrabold text-xl'>#12,500</h3>
                                </div>

                                <div className='flex gap-2 items-center text-xs text-gray-400'>
                                    <AiOutlineExclamationCircle />
                                    <p>Excluding shipping fee</p>
                                </div>
                            </div>

                            <div className='w-[70%] flex justify-center items-center'>
                                <button className='h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2'>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>

                    
                </div>


                <div className='flex justify-center mt-3'>
                    <div className='bg-white rounded-md w-[60%] text-center p-6 shadow-md'>
                        <div className='border-gray-bottom pb-2 flex justify-between items-center pr-12'>
                            <h3 className='flex justify-start font-bold text-[18px] w-[60%]'>Product</h3>

                            <div className='flex w-[40%] justify-around'>
                                <h3 className='font-bold text-[18px]'>Quantity</h3>
                                <h3 className='font-bold text-[18px]'>Price</h3>
                            </div>
                        </div>

                        <div className='border-gray-bottom flex justify-between'>
                            <div className='py-4 flex w-[60%] gap-2'>
                                <div className='um-cart-border-outline cursor-pointer' />
                                <div className='um-cart-img-small rounded-sm'>
                                    <img src="" className='w-full h-full rounded-sm' alt="" srcset="" />
                                </div>

                                <div className='flex flex-col items-start justify-start'>
                                    <h3 className='font-extrabold text-lg'>Louis Vuitton Pam slipper</h3>
                                    <p className='text-xs text-[#2E486B]'>41/Male/Green</p>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-xs text-gray-400'>Price</p>
                                        <h4 className='text-lg text-[#2E486B] font-extrabold'>₦12,500</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-around my-3 w-[40%] items-center'>
                                <div className='flex flex-col gap-2 items-start'>
                                  <div className='flex gap-2 items-center'>
                                    <span className='um-product-reading text-[20px]'>-</span>
                                    <h4>01</h4>
                                    <span className='um-product-reading text-[20px]'>+</span>
                                  </div>
                                  <h3 className='font-extrabold text-[#017E4D]'>In Stock</h3>
                                </div>
                                <div>
                                    <h3 className='text-red-800 font-extrabold text-xl'>#12,500</h3>
                                </div>
                            </div>

                            <div className='self-center um-cart-delete'>
                                <RiDeleteBin6Line/>
                            </div>
                        </div>

                        <div className='border-gray-bottom flex justify-between'>
                            <div className='py-4 flex w-[60%] gap-2'>
                                <div className='um-cart-border-outline cursor-pointer' />
                                <div className='um-cart-img-small rounded-sm'>
                                    <img src="" className='w-full h-full rounded-sm' alt="" srcset="" />
                                </div>

                                <div className='flex flex-col items-start justify-start'>
                                    <h3 className='font-extrabold text-lg'>Louis Vuitton Pam slipper</h3>
                                    <p className='text-xs text-[#2E486B]'>41/Male/Green</p>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-xs text-gray-400'>Price</p>
                                        <h4 className='text-lg text-[#2E486B] font-extrabold'>₦12,500</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-around my-3 w-[40%] items-center'>
                                <div className='flex flex-col gap-2 items-start'>
                                  <div className='flex gap-2 items-center'>
                                    <span className='um-product-reading text-[20px]'>-</span>
                                    <h4>01</h4>
                                    <span className='um-product-reading text-[20px]'>+</span>
                                  </div>
                                  <h3 className='font-extrabold text-[#017E4D]'>In Stock</h3>
                                </div>
                                <div>
                                    <h3 className='text-red-800 font-extrabold text-xl'>#12,500</h3>
                                </div>
                            </div>

                            <div className='self-center um-cart-delete'>
                                <RiDeleteBin6Line/>
                            </div>
                        </div>

                        <div className='border-gray-bottom flex justify-between py-3'>
                            <div className='flex gap-4 w-[60%] items-center'>
                                <p className='text-sm font-semibold text-gray-500'>Sold By</p>
                                <h3 className='text-md font-bold text-[#2E486B]'>SAMUEL CROWN</h3>
                            </div>

                            <div className='underline decoration-1 w-[40%] flex justify-start text-blue-600'>Message Seller</div>
                        </div>

                        <div className='py-3 flex justify-between items-center'>
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <h3 className='text-[#2E486B]'>Sub-total :</h3>
                                    <h3 className='text-red-800 font-extrabold text-xl'>#12,500</h3>
                                </div>

                                <div className='flex gap-2 items-center text-xs text-gray-400'>
                                    <AiOutlineExclamationCircle />
                                    <p>Excluding shipping fee</p>
                                </div>
                            </div>

                            <div className='w-[70%] flex justify-center items-center'>
                                <button className='h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2'>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>

                    
                </div>


                <div className='flex justify-center mt-3'>
                    <div className='bg-white rounded-md w-[50%] text-center p-6 shadow-md'>
                        <h3 className='font-extrabold text-2xl'>No Saved Address!</h3>
                        <h5 className='border-gray-bottom text-[#2E486B] py-4 text-xl'>You do not have any address saved yet, add a new address to continue checkout.</h5>

                        <div className='border-gray-bottom flex justify-center py-3'>
                            <div className='underline decoration-1 flex justify-start text-blue-600 font-extrabold cursor-pointer' onClick={() => setModal(!handleModal)}>+ Add new Address</div>
                        </div>

                        <div className='py-3 flex justify-between items-center'>
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <h3 className='text-[#2E486B]'>Sub-total :</h3>
                                    <h3 className='text-red-800 font-extrabold text-xl'>#12,500</h3>
                                </div>

                                <div className='flex gap-2 items-center text-xs text-gray-400'>
                                    <AiOutlineExclamationCircle />
                                    <p>Excluding shipping fee</p>
                                </div>
                            </div>

                            <div className='w-[70%] flex justify-center items-center'>
                                <button className='h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2'>Proceed to Checkout</button>
                            </div>
                        </div>
                    
                    </div>
                </div>


                <div className='flex justify-center mt-3'>
                    <div className='bg-white rounded-md w-[50%] text-center p-6 shadow-md'>
                        <div className='flex border-gray-full p-6 rounded-md'>
                            <div className='flex items-center gap-6 w-[40%]'>
                                <div className='um-cart-border-rounded cursor-pointer rounded-full' />

                                <div className='flex flex-col gap-4 items-start'>
                                    <h5 className='text-gray-400 text-lg'>Address</h5>
                                    <h3 className='text-lg text-[#2E486B] font-extrabold'>5, Igbojaye</h3>
                                </div>
                            </div>

                            <div className='flex items-center gap-4 w-[60%]'>
                                <div className='flex flex-col gap-4 items-start'>
                                    <h5 className='text-gray-400 text-lg'>City</h5>
                                    <h3 className='text-lg text-[#2E486B] font-extrabold'>Ibadan</h3>
                                </div>

                                <div className='flex flex-col gap-4 items-start'>
                                    <h5 className='text-gray-400 text-lg'>State</h5>
                                    <h3 className='text-lg text-[#2E486B] font-extrabold'>Ondo</h3>
                                </div>


                                <div className='flex flex-col gap-4 items-start'>
                                    <h5 className='text-gray-400 text-lg'>Country</h5>
                                    <h3 className='text-lg text-[#2E486B] font-extrabold'>Nigeria</h3>
                                </div>

                                <div className='flex flex-col gap-4 items-start'>
                                    <h5 className='text-gray-400 text-lg'>Phone</h5>
                                    <h3 className='text-lg text-[#2E486B] font-extrabold'>08063786835</h3>
                                </div>

                                <div className='flex flex-col gap-4 justify-center items-center'>
                                    <div className='self-center um-cart-delete'>
                                        <RiDeleteBin6Line/>
                                    </div>
                                    <div className='self-center um-cart-delete'>
                                        <HiOutlinePencil />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border-gray-bottom-top mt-4 flex justify-center py-3'>
                            <div className='underline decoration-1 flex justify-start text-blue-600 font-extrabold cursor-pointer'>+ Add new Address</div>
                        </div>

                        <div className='py-3 flex justify-between items-center'>
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <h3 className='text-[#2E486B]'>Sub-total :</h3>
                                    <h3 className='text-red-800 font-extrabold text-xl'>#12,500</h3>
                                </div>

                                <div className='flex gap-2 items-center text-xs text-gray-400'>
                                    <AiOutlineExclamationCircle />
                                    <p>Excluding shipping fee</p>
                                </div>
                            </div>

                            <div className='w-[70%] flex justify-center items-center'>
                                <button className='h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2'>Proceed to Checkout</button>
                            </div>
                        </div>
                    
                    </div>
                </div>

            </div>
            { handleModal && <FormPopup Label='Add New Address' Style='w-[35%]'/> }
        </Layout>
    </>
  )
}

export default Cart