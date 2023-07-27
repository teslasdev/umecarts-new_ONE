import React ,{useState , useEffect} from 'react'
import {useMediaQuery} from 'react-responsive'
import logo from '../../assets/logo/Vector.png';
import {AiOutlineSearch } from 'react-icons/ai'
import {RxCaretDown} from 'react-icons/rx'
import {FaUserPlus,FaUserCheck, FaRegUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {HiBars3BottomLeft} from 'react-icons/hi2'
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';

const Header = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 544px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const [toggleOption, setToggleOption] = useState(false)

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
        <header className={`um-header ${scrollDirection === 'down' && 'fixed z-30' } w-full`} data-aos="fade-down">
            {isTabletOrMobile &&
                <div className="um-header-box flex">
                    <img src={logo}  className='um-header-logo' />

                    {/* Search Box */}

                    <div className="um-header-search">
                        <input type="text" className='um-header-input w-[300px]' placeholder='I am searching for'/>
                        <span>
                            <AiOutlineSearch />
                        </span>
                    </div>

                    {/* Options */}
                    <div className="um-header-options">
                        <div className='flex gap-1 items-center px-2'>
                            <IoChatboxEllipsesOutline size={15} color='#1F3047'/>
                            <p>Chat</p>
                            <div className='w-[15px] h-[15px] bg-[#002C66] flex justify-center items-center text-white text-[8px] rounded-full'>2</div>
                        </div>

                        <div className='flex gap-1 items-center px-2'>
                            <FiShoppingCart size={15} color='#1F3047'/>
                            <p>Cart</p>
                            <div className='w-[15px] h-[15px] bg-[#002C66] flex justify-center items-center text-white text-[8px] rounded-full'>1</div>
                        </div>

                        <div className='flex gap-1 items-center px-2'>
                            <FaRegUserCircle size={15} color='#1F3047'/>
                            <p>Account</p>
                            <div><RxCaretDown  size={18}/></div>
                        </div>

                        <div className='flex gap-1 items-center px-2'>
                            <IoMdNotificationsOutline size={18} color='#1F3047' className='-rotate-12'/>
                            <p>Notification</p>
                            <div className='w-[15px] h-[15px] bg-[#002C66] flex justify-center items-center text-white text-[8px] rounded-full'>1</div>
                        </div>
                        {/* <div className='relative um-header-button cursor-pointer' onClick={() => setToggleOption(!toggleOption)}>
                            <span>
                                Sign In
                            </span>
                            <span className='font-bold'>
                                <RxCaretDown />
                            </span>
                            {toggleOption && (
                                <div className='absolute flex flex-col text-red-500 gap-1 top-14  um-header-dropdown bg-white rounded-sm'>
                                    <span className='flex gap-2 p-2 items-center hover:bg-red-600 hover:text-white'>
                                        <FaUserPlus/>
                                        <Link to="/user/buyer">Register</Link>
                                    </span>

                                    <span className='flex gap-2 p-2 items-center hover:bg-red-600 hover:text-white'>
                                        <FaUserCheck/>
                                        <Link to="/auth/login">Login</Link>
                                    </span>
                                </div>
                            )}
                        </div> */}
                        <div class="um-header-seller">
                            <Link to='/user/seller'>Be a seller</Link>
                        </div>
                    </div>
                </div>
            }

            {isPortrait && 

                <div className="um-header-box flex">
                    <div className='flex items-center gap-4'>
                        <HiBars3BottomLeft size={24}/>
                        <img src={logo} alt="" />
                    </div>

                    <span>
                        <AiOutlineSearch size={24}/>
                    </span>
                </div>


            }

            {isTabletOrMobile &&

                <div className="um-header-box1">
                    <Link to='/'>Wrist watches</Link>
                    <Link to='/'>Female Fashion & Clothing</Link>
                    <Link to='/'>Electronic & Accessories</Link>
                    <Link to='/'>Sport & Outdoor</Link>
                    <Link to='/'>Jewelry & Accessories</Link>
                    <Link to='/'>Beauty, Health & Hair</Link>
                    <Link to='/'>Others</Link>
                </div>
            }
        </header>
    </>
  )
}

export default Header