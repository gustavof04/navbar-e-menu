import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Menu from "./subcomponents/menu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    const navbarRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        const navbar = navbarRef.current;
        const tl = gsap.timeline({ paused: true });
        tl.to(navbar, { y: -navbar.offsetHeight, duration: 0.6 });

        let prevScrollPos = window.scrollY;
        let isScrollingDown = false;
        let isScrollingUp = false;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            isScrollingUp = currentScrollPos < prevScrollPos;

            if (isScrollingUp) {
                tl.reverse();
            } else {
                isScrollingDown = currentScrollPos > prevScrollPos;
                if (isScrollingDown && !tl.isActive()) {
                    tl.play();
                }
            }
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY <= 100);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <Menu isOpen={isOpen} onClose={toggleMenu} />
            <nav 
                ref={navbarRef} 
                className={`fixed top-0 left-0 bg-gradient px-6 py-6 flex w-full z-20 text-white items-center justify-between ${!isAtTop && 'bg-slate-900 lg:backdrop-blur-sm lg:bg-slate-50/10'}`}
            >
                <div className="flex items-center">
                    <div className="text-white text-2xl font-semibold">logo</div>
                </div>
                
                <ul className="flex">
                    <li><a href="#" className="ml-6 hidden md:block">Opção 1</a></li>
                    <li><a href="#" className="ml-6 hidden md:block">Opção 2</a></li>
                    <li><a href="#" className="ml-6 hidden md:block">Opção 3</a></li>
                    <li><a href="#" className="ml-6 hidden md:block">Opção 4</a></li>
                    <li><a href="#" className="ml-6 hidden md:block">Opção 5</a></li>
                </ul>
                <div className="md:hidden"> {/* Esconda apenas o ícone em telas maiores que 768px */}
                <div className="cursor-pointer" onClick={toggleMenu}>
                    <Bars3Icon className="h-10" />
                </div>
            </div>
            </nav>
        </>
    );
};

export default Navbar;