import Image from "next/image";
import Logo from "@/app/assets/Logo.png"
import Vector from "@/app/assets/Vector.png"
import Profile from '@/app/assets/Profile.png'
function Header() {
    return (


        <header>
            <div className="w-screen h-[72px] bg-white flex-row justify-start items-center flex">
                <div className="m-10 items-center gap-10 inline-flex w-2/4">
                    <Image src={Logo}
                        alt="website's Logo"
                        width={40}
                        height={40}></Image>
                    <div className="text-neutral-900 text-base font-medium font-['Poppins']">Home</div>
                    <div className="text-stone-500/80 text-base font-normal font-['Poppins'] flex gap-10">
                        <a href="">Web designs</a>
                        <a href="">Mobile designs</a>
                        <a href="">Design principles</a>
                        <a href="">Illustrations</a>
                    </div>
                </div>
                <div className="mx-20 flex gap-4 w-2/4  justify-end">
                    <div className="justify-center items-center  flex">
                        <div className="text-zinc-800 text-base font-normal font-['Poppins']">English (united States)
                            <button
                                type="button">
                                <Image src={Vector} alt="a vector pointing down"></Image>
                            </button>
                        </div>
                    </div>
                    <div className="justify-center items-center gap-8 inline-flex">
                        <button  
                        type="button"
                        className="w-[283px] h-10 rounded-lg border border-neutral-900 justify-center items-center flex">
                            <div className="justify-center items-center gap-2 inline-flex">
                                <Image src={Profile} alt='a profile icon'></Image>
                                <div className="text-center text-neutral-900 text-base font-normal font-['Poppins']">Sign in or create an account</div>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;