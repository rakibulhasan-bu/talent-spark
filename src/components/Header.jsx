import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // const [cart, setCart] = useContext(CartContext || []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="my-container flex items-center justify-between py-2 md:py-6">
      <h1 className="text-xl font-bold lg:text-3xl">Talent Spark</h1>
      <div className="hidden  gap-8 text-lg lg:flex  ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/statistics"}>Statistics</NavLink>
        <NavLink to={"/applied-jobs"}>Applied Jobs</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
      </div>
      <Link to={"/"} className="btn-primary py-1 md:py-3">
        Start Applying
      </Link>

      {/* mobile menu create  */}
      <div className="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 -mr-1 rounded p-2 transition duration-200 focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute left-0 top-0 z-10 w-full">
            <div className="rounded border bg-white p-5 shadow-sm">
              <div className=" flex items-center justify-end">
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="focus:shadow-outline -mr-2 -mt-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex  flex-col gap-1 text-lg  ">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/statistics"}>Statistics</NavLink>
                <NavLink to={"/applied-jobs"}>Applied Jobs</NavLink>
                <NavLink to={"/blog"}>Blog</NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    // <div>
    //   <div className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
    //     <div className="relative flex items-center justify-between">
    //       <Link
    //         to="/"
    //         aria-label="HeroGadget"
    //         title="HeroGadget"
    //         className="inline-flex items-center"
    //       >
    //         <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-200">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 32 32"
    //             fill="currentColor"
    //             className="h-5 w-5 flex-shrink-0 rounded-full text-cyan-600"
    //           >
    //             <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
    //           </svg>
    //         </div>
    //         <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
    //           HeroGadget
    //         </span>
    //       </Link>
    //       <ul className="hidden items-center space-x-8 lg:flex">
    //         <li>
    //           <NavLink
    //             to="/"
    //             aria-label="Home"
    //             title="Home"
    //             className={({ isActive }) => (isActive ? "active" : "default")}
    //           >
    //             Home
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink
    //             to="/shop"
    //             aria-label="Shop"
    //             title="Shop"
    //             className={({ isActive }) => (isActive ? "active" : "default")}
    //           >
    //             Shop
    //           </NavLink>
    //         </li>
    //         <li>
    //           <Link to="/cart" aria-label="Cart" title="Cart">
    //             <div className="relative py-3">
    //               <ShoppingCartIcon className="h-6 w-6 text-cyan-400" />
    //               <p className="absolute bottom-5 left-6">{cart.length}</p>
    //             </div>
    //           </Link>
    //         </li>
    //         <li>
    //           <NavLink
    //             to="/about"
    //             aria-label="About Us"
    //             title="About Us"
    //             className={({ isActive }) => (isActive ? "active" : "default")}
    //           >
    //             About Us
    //           </NavLink>
    //         </li>
    //       </ul>

    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
