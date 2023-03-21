import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import {
  Navbar,
  MobileNav,
  IconButton,
} from "@material-tailwind/react";
import { auth } from "../config/firebase"; 
import { useAuthState } from 'react-firebase-hooks/auth'
 
export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const [isGuest, setIsGuest] = useState(true);
  const [user] = useAuthState(auth)
  useEffect(() => {
    if(user != null){
      setIsGuest(false)
    }
  }, [user])

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <Link to="/">
          <span className="block py-2 pl-3 pr-4 text-blue-700 md:p-0 text-blue-700" aria-current="page">
            Home
          </span>
        </Link>
      </li>
      {isGuest ? (
          <li>
            <Link to="/Login">
              <span className="block py-2 pl-3 pr-4 text-blue-700 md:p-0 text-blue-700" aria-current="page">
                Login
              </span>
            </Link>
          </li>
      ) : (
        <>
          <li>
            <Link to="/Profile">
              <span className="block py-2 pl-3 pr-4 text-blue-700 md:p-0 text-blue-700" aria-current="page">
                Profile
              </span>
            </Link>
          </li>
          <li>
            <span className="block rounded md:bg-transparent md:p-0 dark:text-white text-sm" aria-current="page">
              Hello, {user?.displayName}
            </span>
          </li>
        </>
      )}
    </ul>
  );
  
  return (
    <Navbar className="mx-auto py-2 px-4 lg:px-8 lg:py-4 dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <span className="mr-4 cursor-pointer py-1.5 font-normal text-white">Social Media</span>
        <div className="hidden lg:block">{navList}</div>
        <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)} >
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
}