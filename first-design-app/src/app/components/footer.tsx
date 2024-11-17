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
                                <div>Pricing</div>
                                <div>Solutions</div>
                                <div>Education</div>
                                <div>Team plans</div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-zinc-800 text-base font-normal font-['Poppins']">About us</div>
                            <div className="text-stone-500 text-sm font-normal font-['Poppins'] flex flex-col gap-2">
                                <div>About</div>
                                <div>Branding</div>
                                <div>Newsroom</div>
                                <div>Partnerships</div>
                                <div>Affiliates</div>
                                <div>careers</div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-zinc-800 text-base font-normal font-['Poppins']">Help and support</div>
                            <div className="text-stone-500 text-sm font-normal font-['Poppins'] flex flex-col gap-2">
                                <div>Help center</div>
                                <div>Contact us</div>
                                <div>Privacy & Terms</div>
                                <div>Safety information</div>
                                <div>Sitemap</div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-zinc-800 text-base font-normal font-['Poppins']">Community</div>
                            <div className="text-stone-500 text-sm font-normal font-['Poppins'] flex flex-col gap-2">
                                <div>Angencies</div>
                                <div>Freelancers</div>
                                <div>Engineers</div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-20 justify-start items-start gap-4 flex ">
                        <button className="w-[180px] h-[52px] justify-center items-center flex border border-black/50 rounded-lg">
                            <Image src={AppstoreBtn} alt="The deafult button for Appstore"></Image>
                        </button>
                        <button className="w-[180px] h-[52px] justify-center items-center flex border border-black/50 rounded-lg">
                            <Image src={GooglePlayBtn} alt="The deafult button for Appstore"></Image>
                        </button>
                    </div>
                </div>
                <div className="w-full h-px bg-stone-500/25" />
                <div className="w-full flex h-[50px]">
                    <div className=" pb-14 px-10 justify-start items-center gap-14 inline-flex w-2/4">
                        <div className="text-zinc-800 text-sm font-normal font-['Poppins']">@copyright 2022</div>
                        <div className="justify-start items-start gap-6 flex text-zinc-800 text-sm font-normal font-['Poppins']">
                            <div>Help</div>
                            <div>Privacy</div>
                            <div>Terms</div>
                        </div>
                    </div>
                    <div className="justify-end items-center gap-10 inline-flex w-2/4 ">
                        <div className="justify-center items-end gap-3 flex">
                            <div><Image src={FacebookLogo} alt="The Icon from Facebook"></Image></div>
                            <div><Image src={TwitterLogo} alt="The old Icon from Twitter"></Image></div>
                            <div><Image src={InstagramLogo} alt="The Icon from Instagram"></Image></div>
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