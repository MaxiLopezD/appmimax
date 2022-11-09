import { useState } from "react";
import { Link } from "react-router-dom";
import { hamburgerMenu } from "../../img";
import CartWidget from "./CartWidget";
import {Header,Logo,HamburgerMenu,ShowHamburgerMenu,} from "./stylesNav";

const NavBar = () => {
    const [menuHide, setMenuHide] = useState(false);

    const handleClickMenu = () => {
        setMenuHide(!menuHide);
    };

    return (
        <Header>
            <Logo>
                <Link to="/"><img src="https://i.postimg.cc/nrGgxFJb/logomimax.png" alt="LOGO"/></Link>


            </Logo>

            <HamburgerMenu onClick={handleClickMenu}>
                <img src={hamburgerMenu} alt="menu" />
            </HamburgerMenu>

            <ShowHamburgerMenu menuHide={menuHide}>
                <Link to="/cart">
                    <CartWidget />
                </Link>

                <ul className="flex justify-center items-center h-full md:h-16 md:w-100">
                    <li className="flex flex-col gap-10 text-center w-full md:flex-row md:gap-3 md:relative md:right-14 font-bold text-my-rose font-Fredoka One text-xl">

                        <Link
                            to="/category/Chocolates"
                            className="hover:bg-my-warning  hover:shadow-red-50	  hover:shadow-md md:rounded md:px-3 md:py-1"
                            id="3"
                            onClick={handleClickMenu}
                        >
                            Chocolates
                        </Link>
                        <Link
                            to="/category/Filos"
                            className="hover:bg-my-warning  hover:shadow-red-50	  hover:shadow-md md:rounded md:px-3 md:py-1"
                            id="4"
                            onClick={handleClickMenu}
                        >
                            Filos
                        </Link>
                        <Link
                            to="/category/Varios"
                            className="hover:bg-my-warning  hover:shadow-red-50	  hover:shadow-md md:rounded md:px-3 md:py-1"
                            id="1"
                            onClick={handleClickMenu}
                        >
                            Varios
                        </Link>
                        <Link
                            to="/category/Pegamentos"
                            className="hover:bg-my-warning  hover:shadow-cyan-50	  hover:shadow-md md:rounded md:px-3 md:py-1"
                            id="2"
                            onClick={handleClickMenu}
                        >
                            Pegamentos
                        </Link>

                    </li>
                </ul>
            </ShowHamburgerMenu>
        </Header>
    );
};

export default NavBar;