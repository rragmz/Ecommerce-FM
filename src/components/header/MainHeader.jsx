import { useContext, useState } from "react";
import { useCartDetails } from "../../context/useCartDetails";
import LogoSneakers from "@/assets/images/logo.svg";
import Avatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import CartDetails from "@/components/header/CartDetails";

const MainHeader = () => {
  const[isOpenMenu, setIsOpenMenu] = useState(false)
  const[isOpenCart, setIsOpenCart] = useState(false)
  const {totalItems} = useContext(useCartDetails)

  const [navClass, setNavClass] = useState(
    "hidden text-gray-500 md:mr-auto md:flex md:flex-row md:gap-8 md:static md:p-0"
  );
  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-4 bg-white p-6 font-bold md:mr-auto md:flex md:flex-row md:gap-8 md:static md:p-0 z-10"
    );
  };
  const handleCloseMenu = () => {
    setNavClass(
      "hidden md:mr-auto md:flex md:flex-row md:gap-8 md:static md:p-0"
    );
  };
  return (
    <>
      <header className="container mx-auto flex items-center gap-8 px-4 py-10 md:p-4">
      <button className="md:hidden" onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      {/* Este lo ponemos en midDevice: 0, y el de abajo va a tener el margin right */}
      <img
        src={LogoSneakers}
        alt="Logo Sneakers"
        className="mr-auto mb-1 md:mr-0"
      />
      <nav className={navClass}>
        <a href="#" className="mb-12 md:hidden" onClick={handleCloseMenu}>
          <CloseIcon />
        </a>
        <NavLinkHeader text="Collections"/>
        <NavLinkHeader text="Men"/>
        <NavLinkHeader text="Women"/>
        <NavLinkHeader text="About"/>
        <NavLinkHeader text="Contact"/>
      </nav>
      <div className="flex gap-4">
        <button className="relative" onClick={() => setIsOpenCart(!isOpenCart)}>
          <CartIcon className="hover:fill-orange-500"/>
          <span className="bg-orange-primary px-1 text-xs rounded-full text-white absolute right-0 translate-x-1 top-0">{totalItems}</span>
        </button>
        <img src={Avatar} alt="Imagen perfil" className="w-10 hover:outline hover:outline-2 hover:outline-orange-primary rounded-full cursor-pointer" />
        {
          isOpenCart && <CartDetails />
        }
        
      </div>
    </header>
    <span className="container hidden mx-auto h-0.5 w-full bg-gray-100 md:block "></span>
    </>
  );
};

export default MainHeader;
