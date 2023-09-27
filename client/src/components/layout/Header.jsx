import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../../assets/logo/Vector.png";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCaretDown } from "react-icons/rx";
import {FaUserPlus,FaUserCheck, FaRegUserCircle} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { setGlobalState } from "../common/store";


const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 900px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const [toggleOption, setToggleOption] = useState(false);

  const [scrollDirection, setScrollDirection] = useState(null);
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    var direction;
    direction = lastScrollY > 100 ? "down" : "up";
    setScrollDirection(direction);
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      direction = scrollY > lastScrollY ? "down" : "up";
      setScrollDirection(direction);
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);
  return (
    <>
      <header
        className={`um-header ${
          scrollDirection === "down" && "fixed z-30"
        } w-full`}
        data-aos="fade-down"
      >
        {isTabletOrMobile && (
          <div className="um-header-box flex justify-between sm:px-24 px-4 items-center">
            <img src={logo} className="um-header-logo" />
            {/* Search Box */}
            <div className="um-header-search">
              <input
                type="text"
                className="um-header-input h-[70px] bg-red-400 w-[350px]"
                placeholder="I am searching for"
              />
              <span className="flex justify-center items-center text-2xl cursor-pointer">
                <AiOutlineSearch />
              </span>
            </div>

            {/* Options */}
            <div className="um-header-options">
              {/* <div className="flex gap-1 items-center px-2">
                <IoChatboxEllipsesOutline size={15} color="#1F3047" />
                <p className="font-semibold">Chat</p>
                <div className="w-[15px] h-[15px] bg-[#002C66] flex justify-center items-center text-white text-[8px] rounded-full">
                  2
                </div>
              </div> */}

              <div className="flex gap-1 items-center px-2">
                <FiShoppingCart size={20} color="#1F3047" />
                <p className="font-semibold">Cart</p>
                <div className="w-[15px] h-[15px] bg-[#002C66] flex justify-center items-center text-white text-[8px] rounded-full">
                  1
                </div>
              </div>

              {/* <div className="flex gap-1 items-center px-2">
                <FaRegUserCircle size={15} color="#1F3047" />
                <p>Account</p>
                <div>
                  <RxCaretDown size={18} />
                </div>
              </div> */}

              <div className="flex gap-1 items-center px-2">
                <IoMdNotificationsOutline
                  size={22}
                  color="#1F3047"
                  className="-rotate-12"
                />
                <p className="font-semibold">Notification</p>
                <div className="w-[15px] h-[15px] bg-[#002C66] flex justify-center items-center text-white text-[8px] rounded-full">
                  1
                </div>
              </div>
              <div className='relative um-header-button cursor-pointer flex items-center gap-2 justify-center h-[50px] rounded-md' onClick={() => setToggleOption(!toggleOption)}>
                <h4 className="text-[18px] font-bold">
                  Sign in
                </h4>
                <span className='font-bold'>
                    <RxCaretDown />
                </span>
                {toggleOption && (
                  <div className='absolute flex flex-col text-[#1F3047] gap-1 top-14  um-header-dropdown bg-white shadow-md'>
                    <span className='flex gap-2 p-2 px-4 items-center font-bold hover:bg-red-600 hover:text-white'>
                        <Link to="/user/login">Login</Link>
                    </span>
                    <span className='flex gap-2 p-2 px-4 text-[#1F3047] items-center font-bold hover:bg-red-600 hover:text-white'>
                        <Link to="/auth/buyer">Register</Link>
                    </span>
                  </div>
                )}
              </div>
              <div className="um-header-seller rounded-md flex justify-center items-center text-[20px] cursor-pointer">
                <Link to="/user/seller">Be a seller</Link>
              </div>
            </div>
          </div>
        )}
        {isPortrait && (
          <div className="um-header-box flex justify-between md:px-12 sm:px-24 px-4 items-center">
            <div className="flex items-center gap-4">
              <HiBars3BottomLeft size={24} className="cursor-pointer" onClick={() => setGlobalState('sideBar' , 'true')} />
              <img src={logo} alt="" />
            </div>

            <span>
              <AiOutlineSearch size={24} />
            </span>
          </div>
        )}

        {isTabletOrMobile && (
          <div className="um-header-box1 flex justify-between items-center px-24">
            <Link to="/">Wrist watches</Link>
            <Link to="/">Female Fashion & Clothing</Link>
            <Link to="/">Electronic & Accessories</Link>
            <Link to="/">Sport & Outdoor</Link>
            <Link to="/">Jewelry & Accessories</Link>
            <Link to="/">Beauty, Health & Hair</Link>
            <Link to="/">Others</Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
