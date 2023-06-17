import { useEffect, useRef } from "react";
import gsap from "gsap";
import { XMarkIcon } from '@heroicons/react/24/solid'
import MenuItem from "./menuitem";

const Menu = ({isOpen, onClose}) => {
    const menuRef = useRef()

    useEffect(() => {
        gsap.to(menuRef.current, {
            height: isOpen ? '100vh' : '0vh',
            duration: .2,
            onComplete: () => {
                console.log('completed')
            }
        })
    }, [isOpen])

    return (
        <div ref={menuRef} className="fixed top-0 w-full bg-slate-950 z-30">
            {isOpen &&
                <>
                <div className="flex justify-between px-6 py-6 text-slate-400">
                    <div className="text-7xl">Menu</div>
                    <div className="cursor-pointer" onClick={onClose}><XMarkIcon height={45} /></div>
                </div>

                <div className="px-6 py-6 text-slate-400 text-5xl">
                    <MenuItem option={"Opção"} num={"01"} />
                    <MenuItem option={"Opção"} num={"02"} />
                    <MenuItem option={"Opção"} num={"03"} />
                    <MenuItem option={"Opção"} num={"04"} />
                    <MenuItem option={"Opção"} num={"05"} />
                </div>
                </>
            }
        </div>
    );
}

export default Menu;