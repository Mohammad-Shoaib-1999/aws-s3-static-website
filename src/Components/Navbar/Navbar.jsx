import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" ">
      <nav className="flex justify-between items-center mx-auto p-4 bg-gray-300 shadow-2xl">
        <div className="logo-container">
          <a href="/" className="text-black text-lg font-bold">
            AWS Amplify
          </a>
        </div>

        <div className="hidden md:flex gap-4 lg:gap-20">
            
        </div>
        <div className="hidden md:flex">
          <a href="/login" className="text-black text-lg font-bold">
            Login/Logout
          </a>
        </div>

        <div className="md:hidden cursor-pointer" onClick={toggleMenuOpen}>
          {isMenuOpen ? (
            <span id="closeHam">&#x2716;</span>
          ) : (
            <span id="openHam">&#9776;</span>
          )}
        </div>
      </nav>

      <div
        className={`md:hidden absolute top-15 right-0 flex justify-center items-center  flex-col p-4 bg-white w-full ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* {navLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block text-black py-2 "
          >
            {item.label}
          </a>
        ))} */}
        <ul className="">
                        {
                            
                            window.location.href === '/' ?
                                <>
                                    <li className="">
                                        <a className="block text-black py-2" aria-current="page" href="/"><b>Home</b></a>
                                    </li>
                                    <li className="">
                                        <a className="block text-black py-2" href="/login">Login</a>
                                    </li>
                                </>
                            :
                            (
                                window.location.href === '/login' ? 
                                    <>
                                        <li className="">
                                            <a className="block text-black py-2" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="">
                                            <a className="block text-black py-2" href="/login"><b>Login</b></a>
                                        </li>
                                    </>
                                :
                                    <>
                                        <li className="">
                                            <a className="block text-black py-2" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="">
                                            <a className="block text-black py-2" href="/login">Login</a>
                                        </li>
                                    </>
                            )
                        }
                    </ul>
      </div>
    </header>
  );
};

export default Navbar;
