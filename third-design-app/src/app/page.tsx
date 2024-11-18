'use client'
import Image from "next/image";
import Hide from "@/app/assets/hide-eye.png"
import See from "@/app/assets/see-eye.png"
import bgImage from "@/app/assets/bg-image.png"
import FacebookIcon from "@/app/assets/facebookColoredLogo.png"
import ApppleIcon from "@/app/assets/AppleLogo.png"
import GoogleIcon from "@/app/assets/GoogleColoredLogo.png"
import TwitterIcon from "@/app/assets/twitterOldLogo.png"
import { useState } from "react";
export default function Home() {

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const ShowOrHide = () => {
    setShowPassword(!showPassword);
  };
  const handlePassword = (e: any) => setPassword(e.target.value);

  return (
    <div className=" h-[935px] relative flex-col justify-center items-center inline-flex text-base font-normal font-['Poppins']">
      <div className=" flex-col justify-center items-center flex">
        <Image src={bgImage} className="h-[935px] w-screen " alt="the Background img, an mix of pink and orange"></Image>
        <form className="absolute  w-[564px] h-[658px] rounded-3xl  flex-col justify-center items-center flex bg-white ">
          <div className="flex-col  gap-8 inline-flex">
            <div className="flex-col justify-center items-center gap-2 flex">
              <div className="text-center text-zinc-800 text-[40px] font-medium mb-8">Log in
              </div>
              <div className="justify-start items-start gap-2 inline-flex  text-base font-normal font-['Poppins']">
                <span className="text-stone-500/80">New to Design Space?
                </span>
                <span className="text-neutral-900  underline"><a href="">Sign up for free</a>
                </span>
              </div>
            </div>
            <div className="ml-10 flex-col justify-start items-start gap-4 flex">
              <div className=" h-[90px] flex-col justify-start items-start gap-1 flex">
                <div className="w-[500px] pb-[3px]  inline-flex">
                  <label className="text-stone-500 text-base font-normal font-['Poppins']">Email adress</label>
                </div>
                <input
                  type='email'
                  id='email'
                  className="w-[480px] h-[56px] rounded-xl border border-stone-500/30  justify-start items-start inline-flex">
                </input>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="h-[87px] flex-col justify-start items-start gap-1 flex">
                  <div className="  justify-start items-start  inline-flex flex-col">
                    <div className="w-full pt-5  h-4 flex items-end justify-end ">
                      <button
                        type="button"
                        onMouseDown={ShowOrHide}
                        onMouseUp={ShowOrHide} >
                        {showPassword ? <Image src={See} alt="An Eye which incates that the password is hidden"></Image> : <Image src={Hide} alt="An Eye which indicates that the password is not hidden"></Image>}
                      </button>
                      <div className="text-stone-500/80 text-lg font-normal ">Hide
                      </div>
                    </div>
                    <div className="text-stone-500 text-base font-normal ">Password</div>
                    <input type={showPassword ? 'text' : 'password'}
                      onChange={handlePassword}
                      id="password"
                      value={password}
                      className=" blur-none w-[480px] h-[56px] rounded-xl border border-stone-500/30 justify-start items-start inline-flex">
                    </input>
                  </div>
                </div>
                <a href="" className="text-neutral-900 text-base font-medium font-['Poppins'] underline">Forget password?</a>
              </div>
              <button type="submit" className="w-[480px] h-[56px] opacity-25 bg-neutral-900 rounded-[32px] justify-center items-center inline-flex">
                <div className="text-center text-white text-xl font-medium font-['Poppins']">Log in
                </div>
              </button>
              <div className="justify-start items-start gap-[13px] inline-flex">
                <button type="button" className="w-[110px] h-[56px]  rounded-[40px] border border-zinc-800 justify-center items-center flex">
                  <Image src={FacebookIcon} alt="The colored Icon from Faceebook"></Image>

                </button>
                <button type="button" className="w-[110px] h-[56px]  rounded-[40px] border border-zinc-800 justify-center items-center flex">
                  <Image src={ApppleIcon} alt="The default Icon from Apple"></Image>
                </button>
                <button type="button" className="w-[110px] h-[56px]  rounded-[40px] border border-zinc-800 justify-center items-center flex">
                  <Image src={GoogleIcon} alt="The colored Icon from Google"></Image>
                </button>
                <button type="button" className="w-[110px] h-[56px]  rounded-[40px] border border-zinc-800 justify-center items-center flex">
                  <Image src={TwitterIcon} alt="The colored Icon from Twitter"></Image>
                </button>
              </div>
              <button type="button" className="w-[480px] h-[56px]  rounded-[40px] border border-neutral-900 justify-center items-center inline-flex">
                <div className="text-center text-neutral-900 text-lg font-normal font-['Poppins']">Log in with SSO
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
}
