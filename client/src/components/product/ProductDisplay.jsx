import React ,{ useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import policy from '../../assets/image/policy.png'
import {FaStar,FaStarHalfAlt} from 'react-icons/fa'
import {FiShoppingCart} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter,AiFillYoutube} from 'react-icons/ai'
import {FaLinkedinIn,FaFacebookF} from 'react-icons/fa'
import {SlHandbag} from 'react-icons/sl'
import product from '../../assets/products/product4.png'
import Feature1 from '../home/product/Feature'
import { FullModal } from '../common/Modal'





const ProductDisplay = () => {
    const [handleModal, setModal] = useState(false)
    const [scrollDirection, setScrollDirection] = useState(null);
    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        var  direction;
        direction = lastScrollY > 300 ? 'down' : 'up';
        setScrollDirection(direction);
        const updateScrollDirection = () => {
          const scrollY = window.pageYOffset;
          direction = scrollY > lastScrollY ? "down" : "up";
          setScrollDirection(direction);
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
          window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
      }, [scrollDirection]);
    return (
        <>
            {scrollDirection === 'down' && 
            <div className='bg-white fixed z-40 top-[16%] w-full px-24 md:flex hidden justify-between items-center' data-aos="fade-down">
                <div className='flex gap-4 font-bold p-3'>
                    <a href='#description' className='p-2 uppercase border-bottom-red text-black'>Product Description</a>
                    <a href='#review' className='p-2 uppercase text-black'>Ratings and Reviews</a>
                </div>

                <div>
                    <div className='flex gap-3'>
                        <button className='btn-default-small bg-blue-secondary text-lg flex items-center justify-center gap-2' onClick={() => setModal(!handleModal)}><FiShoppingCart /> Add to Cart</button>
                        <button className='btn-default-small bg-red-secondary text-lg flex items-center justify-center gap-2' onClick={() => setModal(!handleModal)}><SlHandbag/> Buy Now</button>
                    </div>
                </div>
            </div>
            }
            <div className='sm:px-32 px-2 py-8'>
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='md:w-[75%] w-full flex flex-col gap-4'>
                        <div className='flex flex-col md:flex-row gap-6 bg-white shadow-md rounded-md p-2'>
                            <div className='w-full md:w-[35%] py-2'>
                                <div className='w-full h-[374px] md:h-[295px] rounded-lg'>
                                    <img src={product} alt="" className='rounded-lg w-full h-full'/>
                                </div>
                                <div className='flex justify-center overflow-scroll w-full md:justify-start my-4 gap-4'>
                                    <div className='flex gap-4'>
                                        <div className='h-[60px] w-[60px]  rounded-lg'>
                                            <img src={product} alt="" className='rounded-lg w-full h-full'/>
                                        </div>

                                        <div className='h-[60px] w-[60px] rounded-lg'>
                                            <img src={product} alt="" className='rounded-lg w-full h-full'/>
                                        </div>

                                        <div className='h-[60px] w-[60px] rounded-lg'>
                                            <img src={product} alt="" className='rounded-lg w-full h-full'/>
                                        </div>

                                        <div className='h-[60px] w-[60px] rounded-lg'>
                                            <img src={product} alt="" className='rounded-lg w-full h-full'/>
                                        </div>
                                        <div className='h-[60px] w-[60px] rounded-lg'>
                                            <img src={product} alt="" className='rounded-lg w-full h-full'/>
                                        </div>

                                        <div className='h-[60px] w-[60px] rounded-lg'>
                                            <img src={product} alt="" className='rounded-lg w-full h-full'/>
                                        </div>

                                        <div className='h-[60px] w-[60px] rounded-lg'>
                                            <img src={product} alt="" className='rounded-lg w-full h-full'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-2 items-center justify-center'>
                                    <div className='w-[10px] h-[10px] rounded-full bg-red-600' />
                                    <div className='w-[10px] h-[10px] rounded-full bg-gray-200' />
                                    <div className='w-[10px] h-[10px] rounded-full bg-gray-200' />
                                    <div className='w-[10px] h-[10px] rounded-full bg-gray-200' />
                                    <div className='w-[10px] h-[10px] rounded-full bg-gray-200' />
                                    <div className='w-[10px] h-[10px] rounded-full bg-gray-200' />
                                    <div className='w-[10px] h-[10px] rounded-full bg-gray-200' />
                                    <div className='w-[10px] h-[10px] rounded-full bg-gray-200' />
                                    <div className='w-[10px] h-[10px] rounded-full bg-gray-200' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <span className='text-[12px]'>Share</span>
                                    <div className='flex gap-2'>
                                        <div className='um-footer-social um-footer-facebook'>
                                            <Link to="" className='text-white'>
                                              <FaFacebookF />
                                            </Link>
                                        </div>


                                        <div className='um-footer-social um-footer-twitter'>
                                          <Link to="" className='text-white'>
                                            <AiOutlineTwitter />
                                          </Link>
                                        </div>


                                        <div className='um-footer-social um-footer-instagram'>
                                          <Link to="" className='text-white'>
                                            <BsInstagram />
                                          </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='md:w-[65%] w-full flex flex-col gap-6'>
                                <h1 className='font-extrabold text-3xl h-[15px] md:h-[30px]'>Unisex sweatshirt</h1>
                                <div className='flex md:none items-center gap-2'>
                                    <div className='flex gap-4 items-center'>
                                        <span className='text-[#FFCD29]'> <FaStar size={20}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={20}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={20}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={20}/></span>
                                        <span className='text-[#FFCD29]'> <FaStarHalfAlt size={20}/></span>
                                    </div>
                                    <div className='flex  items-center font-normal text-[12px] text-tertiary' >
                                        <span>(20 reviews)</span>
                                    </div>
                                </div>
                                <div>
                                    <span>Price</span>
                                    <div className='flex items-end gap-4'>
                                        <h2 className='text-red-700 text-3xl font-extrabold'>₦12,500<span className='text-sm text-gray-200 font-light'>/pc</span></h2>
                                        <p className='text-sm text-gray-300'><del>₦25,000</del></p>
                                        <span className='um-top-product-promo'>
                                            -50%
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <span>Seller</span>
                                    <div className='flex items-end gap-4'>
                                        <div className='font-extrabold'>SAMUELKROWN</div>

                                    </div>
                                    <div className='underline decoration-1 text-blue-600'>Message Seller</div>
                                </div>

                                <div className='flex flex-col'>
                                    <span>Estimated Shipping Time</span>
                                    <span className='font-bold'>5 Days</span>
                                </div>

                                <div>
                                    <span>Size</span>
                                    <div className='flex items-end gap-4'>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center'>41</span>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center'>42</span>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center'>43</span>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center'>44</span>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center'>45</span>
                                    </div>
                                </div>

                                <div>
                                    <span>Colours Available</span>
                                    <div className='flex items-end gap-4'>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#ffffff] p-4'/>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#EF9F43] p-4' />
                                    </div>
                                </div>

                                <div className='flex gap-3'>
                                    <button className='btn-default bg-blue-secondary text-lg flex items-center justify-center gap-2' onClick={() => setModal(!handleModal)}><FiShoppingCart /> Add to Cart</button>
                                    <button className='btn-default bg-red-secondary text-lg flex items-center justify-center gap-2' onClick={() => setModal(!handleModal)}><SlHandbag/> Buy Now</button>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className='flex flex-col gap-2 bg-white shadow-md rounded-md p-2'>
                                {/* <div className='flex gap-4'>
                                    <button className='p-2 uppercase'>Product Description</button>
                                    <button className='p-2 uppercase'>Ratings and Reviews</button>
                                </div> */}

                                <div className='p-2'>
                                    <p>Elegance while worn</p>
                                    <p>Quality of material</p>
                                    <p>Durability</p>
                                </div>

                                <div>
                                    <b>Note that the store makes their products upon successful order and they are carefully made, going through the quality assurance department before being sent out for delivery.</b>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col md:flex-row gap-10 bg-white shadow-md rounded-md p-4'>
                                <div className='flex flex-col gap-2 w-full md:w-[40%]'>
                                    <h4 className='text-sm text-secondary font-bold'>Overview</h4>
                                    <div className='flex gap-2 items-center'>
                                        <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                        <span className='text-[#FFCD29]'> <FaStarHalfAlt size={24}/></span>
                                    </div>
                                    <div className='flex gap-4 items-end font-normal text-[12px] h-[30px] mb-4 text-tertiary' >
                                        <h2 className='text-xl font-extrabold text-secondary'>4.50<span className='text-sm font-normal text-blue-light'>/5.0</span></h2>
                                        <span>(80)</span>
                                        <span>(20 reviews)</span>
                                    </div>

                                    <div className='flex gap-4 items-end font-normal text-[12px]'>
                                        <h2 className='text-lg font-extrabold text-secondary'>Ratings</h2>
                                        <span className='text-tertiary'>(80 total ratings)</span>
                                    </div>

                                    <div className='flex flex-col gap-1 mb-2  font-normal text-[14px] text-tertiary'>
                                        <div className='flex gap-2'>
                                            <h2 className='text-md font-extrabold'>5.0</h2>
                                            <div className='flex gap-1 items-center'>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            </div>
                                            <span>(20 Buyers)</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <h2 className='text-md font-extrabold'>4.0</h2>
                                            <div className='flex gap-1 items-center'>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                            </div>
                                            <span>(20 Buyers)</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <h2 className='text-md font-extrabold'>4.0</h2>
                                            <div className='flex gap-1 items-center'>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            </div>
                                            <span>(20 Buyers)</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <h2 className='text-md font-extrabold'>3.0</h2>
                                            <div className='flex gap-1 items-center'>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            </div>
                                            <span>(20 Buyers)</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <h2 className='text-md font-extrabold'>2.0</h2>
                                            <div className='flex gap-1 items-center'>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            </div>
                                            <span>(20 Buyers)</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <h2 className='text-md font-extrabold'>1.0</h2>
                                            <div className='flex gap-1 items-center'>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            </div>
                                            <span>(20 Buyers)</span>
                                        </div>
                                        </div>
                                </div>

                                <div> 
                                    <div className='flex gap-4 items-end font-normal text-[14px] text-tertiary'>
                                        <h2 className='text-md font-extrabold text-secondary'>Reviews</h2>
                                        <span className='text-sm'>(20 total reviews)</span>
                                    </div>

                                    <div className='flex flex-col  gap-2  font-normal text-[10px]'>
                                        <div className='flex items-end gap-4'>
                                            <h2 className='text-sm font-extrabold text-tertiary'>Krown</h2>
                                            <span>25th Jan, 2023</span>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                        </div>
                                        <h2 className='text-lg font-extrabold text-tertiary'>Great Product</h2>
                                        <p className='text-[14px] text-secondary'>It is exactly what i ordered. I am glad that i ordered.</p>
                                    </div>

                                    <div className='flex flex-col  gap-2  font-normal text-[10px]'>
                                        <div className='flex items-end gap-4'>
                                            <h2 className='text-sm font-extrabold text-tertiary'>Krown</h2>
                                            <span>25th Jan, 2023</span>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                        </div>
                                        <h2 className='text-lg font-extrabold text-tertiary'>Great Product</h2>
                                        <p className='text-[14px] text-secondary'>It is exactly what i ordered. I am glad that i ordered. It is exactly what i ordered. I am glad that i ordered.It is exactly what i ordered. I am glad that i ordered.</p>
                                    </div>
                                    <div className='flex flex-col  gap-2  font-normal text-[10px]'>
                                        <div className='flex items-end gap-4'>
                                            <h2 className='text-sm font-extrabold text-tertiary'>Krown</h2>
                                            <span>25th Jan, 2023</span>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                        </div>
                                        <h2 className='text-lg font-extrabold text-tertiary'>Great Product</h2>
                                        <p className='text-[14px] text-secondary'>It is exactly what i ordered. I am glad that i ordered.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[20%] hidden md:flex flex-col gap-4'>
                        <div className='bg-white rounded-md'>
                            <h3 className='uppercase flex justify-start items-center font-bold pl-6 h-[40px]'>Refund Policy</h3>
                            <hr />
                            <div className='flex flex-col justify-start  font-bold pl-4 py-4'>
                                <img src={policy} alt="" srcset="" />
                                <Link to="/view-policy" className='text-red-400 font-normal text-[12px] mt-2'>View Policy</Link>
                            </div>
                        </div>

                        <div className='bg-white px-2 py-4 rounded-md'>
                            <h3 className='uppercase flex justify-start items-center font-bold pl-6 h-[40px]'>Ratings and Reviews</h3>
                            <hr />
                            <div className='flex flex-col justify-start font-bold pl-4 pr-6'>
                                <div className='py-2 flex gap-2 items-center'>
                                    <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                    <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                    <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                    <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                    <span className='text-[#FFCD29]'> <FaStarHalfAlt size={24}/></span>
                                </div>
                                <div className='flex gap-4 items-end font-normal text-[12px] h-[30px] mb-4 text-tertiary' >
                                    <h2 className='text-xl font-extrabold text-secondary'>4.50<span className='text-sm font-normal text-blue-light'>/5.0</span></h2>
                                    <span>(80)</span>
                                    <span>(20 reviews)</span>
                                </div>


                                <div className='flex gap-4 items-end font-normal text-[12px]'>
                                    <h2 className='text-lg font-extrabold text-secondary'>Ratings</h2>
                                    <span className='text-tertiary'>(80 total ratings)</span>
                                </div>

                                <div className='flex flex-col gap-1 mb-2  font-normal text-[14px] text-tertiary'>
                                    <div className='flex gap-2'>
                                        <h2 className='text-md font-extrabold'>5.0</h2>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        </div>
                                        <span>(20)</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <h2 className='text-md font-extrabold'>4.0</h2>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                        </div>
                                        <span>(20)</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <h2 className='text-md font-extrabold'>4.0</h2>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                        </div>
                                        <span>(20)</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <h2 className='text-md font-extrabold'>3.0</h2>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                        </div>
                                        <span>(20)</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <h2 className='text-md font-extrabold'>2.0</h2>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                        </div>
                                        <span>(20)</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <h2 className='text-md font-extrabold'>1.0</h2>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                        </div>
                                        <span>(20)</span>
                                    </div>
                                </div>


                                <div className='flex gap-4 items-end font-normal text-[14px] text-tertiary'>
                                    <h2 className='text-lg font-extrabold text-secondary'>Reviews</h2>
                                    <span>(20 total reviews)</span>
                                </div>

                                <div className='flex flex-col  gap-2  font-normal text-[10px]'>
                                    <div className='flex items-end gap-4'>
                                        <h2 className='text-sm font-extrabold text-tertiary'>Krown</h2>
                                        <span>25th Jan, 2023</span>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                    </div>
                                    <h2 className='text-lg font-extrabold text-tertiary'>Great Product</h2>
                                    <p className='text-[14px] text-secondary'>It is exactly what i ordered. I am glad that i ordered.</p>
                                </div>

                                <div className='flex flex-col  gap-2  font-normal text-[10px]'>
                                    <div className='flex items-end gap-4'>
                                        <h2 className='text-sm font-extrabold text-tertiary'>Krown</h2>
                                        <span>25th Jan, 2023</span>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                    </div>
                                    <h2 className='text-lg font-extrabold text-tertiary'>Great Product</h2>
                                    <p className='text-[14px] text-secondary'>It is exactly what i ordered. I am glad that i ordered.</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white px-2 h-full py-4 rounded-md'>
                            <h3 className='uppercase flex justify-start items-center font-bold pl-6 h-[50px]'>Store Information</h3>
                            <hr />

                            <span className='text-[10px]'>Store Name</span>
                            <div className='h-[40px]'>
                                <div className='font-extrabold'>SAMUELKROWN</div>
                            </div>

                            <span className='text-[10px]'>Store Address</span>
                            <h4 className='font-bold'>
                                15, Idi-Omo, Lagere, Ile-Ife, Osun State.
                            </h4>

                            <button className='btn-outline mt-6'>
                                <Link to="/">View store</Link>
                            </button>
                        </div>
                    </div>


                    
                </div>
                <Feature1 />
                <Feature1 />
            </div> 

            {handleModal ?  
                <FullModal Style="w-[60%]"  Label="Please select a variation" onclick={()=> setModal(!handleModal)}/>
            :
                <div className='fixed block md:hidden bottom-0 bg-white p-3 min-h-[100px] z-50 w-screen'>
                    <div className='flex justify-between w-full'>
                        <button className='bg-blue-secondary text-lg flex items-center justify-center gap-3 w-[45%] text-white h-[56px] rounded-md' onClick={() => setModal(!handleModal)}><FiShoppingCart /> Add to Cart</button>
                        <button className='bg-red-secondary text-lg flex items-center justify-center gap-3 w-[45%] text-white h-[56px] rounded-md' onClick={() => setModal(!handleModal)}><SlHandbag/> Buy Now</button>
                    </div>
                </div>
            }
            
           
        </>
    )
}

export default ProductDisplay