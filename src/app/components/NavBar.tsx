import Image from "next/image";
import icon from "../../../public/icon.png";
import menu from "../../../public/menu.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const NavBar = () => {
    /* Navigation Bar */
    return (
        <nav className="p-3 flex justify-between items-center">
            <a href="#" className="flex gap-2 items-center">
            <Image width="50" height="50" src={icon} alt="main icon"></Image>
            <h1 className="font-mono text-white text-2xl">quick memo</h1>
            </a>
            <div className="font-sans">
                <Button asChild variant="outline">
                    <Link href="#">Star This Project</Link>
                </Button>
            </div>
            <button className="pr-3 md:hidden">
                <Image width="25" height="25" src={menu} alt="menu"></Image>
            </button>
        </nav>
    )
}

export default NavBar;