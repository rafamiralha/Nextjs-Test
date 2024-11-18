import Image from "next/image"
import Vector from "@/app/assets/Vector.png"
import AppstoreBtn from "@/app/assets/appStoreBtn.png"
import GooglePlayBtn from "@/app/assets/GooglePlayBtn.png"
import FacebookLogo from "@/app/assets/facebookLogo.png"
import TwitterLogo from "@/app/assets/TwitterOldLogo.png"
import InstagramLogo from "@/app/assets/InstagramLogo.png"
function Footer() {
    return (
        <div className="self-stretch h-[440px] w-full  bg-white  justify-center items-center inline-flex">
            <div className="flex-col justify-center items-center gap-10 inline-flex  w-3/4">
                <div className="w-full h-px bg-stone-500/25" />
                <div className="justify-start items-start gap-[155px] inline-flex">
                    <div className="justify-start items-start gap-16 flex">
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-zinc-800 text-base font-normal font-['Poppins']">Product</div>
                            <div className="text-stone-500 text-sm font-normal font-['Poppins'] flex flex-col gap-2">
                                 <a href="">Pricing</a>
                                 <a href="">Solutions</a>
                                 <a href="">Education</a>
                                 <a href="">Team plans</a>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-zinc-800 text-base font-normal font-['Poppins']">About us</div>
                            <div className="text-stone-500 text-sm font-normal font-['Poppins'] flex flex-col gap-2">
                                 <a href="">About</a>
                                 <a href="">Branding</a>
                                 <a href="">Newsroom</a>
                                 <a href="">Partnerships</a>
                                 <a href="">Affiliates</a>
                                 <a href="">careers</a>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-zinc-800 text-base font-normal font-['Poppins']">Help and support</div>
                            <div className="text-stone-500 text-sm font-normal font-['Poppins'] flex flex-col gap-2">
                                 <a href="">Help center</a>
                                 <a href="">Contact us</a>
                                 <a href="">Privacy & Terms</a>
                                 <a href="">Safety information</a>
                                 <a href="">Sitemap</a>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-zinc-800 text-base font-normal font-['Poppins']">Community</div>
                            <div className="text-stone-500 text-sm font-normal font-['Poppins'] flex flex-col gap-2">
                                 <a href="">Angencies</a>
                                 <a href="">Freelancers</a>
                                 <a href="">Engineers</a>
                            </div>
                        </div>
                    </div>
                    <div className="ml-20 justify-start items-start gap-4 flex ">
                        <a href="" className="w-[180px] h-[52px] justify-center items-center flex border border-black/50 rounded-lg">
                            <Image src={AppstoreBtn} alt="The deafult button for Appstore"></Image>
                        </a>
                        <a href="" className="w-[180px] h-[52px] justify-center items-center flex border border-black/50 rounded-lg">
                            <Image src={GooglePlayBtn} alt="The deafult button for Appstore"></Image>
                        </a>
                    </div>
                </div>
                <div className="w-full h-px bg-stone-500/25" />
                <div className="w-full flex h-[50px]">
                    <div className=" pb-14 px-10 justify-start items-center gap-14 inline-flex w-2/4">
                        <div className="text-zinc-800 text-sm font-normal font-['Poppins']">@copyright 2022</div>
                        <div className="justify-start items-start gap-6 flex text-zinc-800 text-sm font-normal font-['Poppins']">
                             <a href="">Help</a>
                             <a href="">Privacy</a>
                             <a href="">Terms</a>
                        </div>
                    </div>
                    <div className="justify-end items-center gap-10 inline-flex w-2/4 ">
                        <div className="justify-center items-end gap-3 flex">
                            <a href=""><Image src={FacebookLogo} alt="The Icon from Facebook"></Image></a>
                            <a href=""><Image src={TwitterLogo} alt="The old Icon from Twitter"></Image></a>
                            <a href=""><Image src={InstagramLogo} alt="The Icon from Instagram"></Image></a>
                        </div>
                        <div className="pl-2 justify-center items-center mx-2 flex">
                            <div className="text-zinc-800 text-base font-normal font-['Poppins']">English (united States)</div>
                            <Image src={Vector} alt="a Vector pointing down"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer