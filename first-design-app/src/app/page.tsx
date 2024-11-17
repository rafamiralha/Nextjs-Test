'use client'
import Image from "next/image";
import Hide from "@/app/assets/hide-eye.png"
import See from "@/app/assets/see-eye.png"
import bgImage from '@/app/assets/bg-image.png'
import btnGoogle from "@/app/assets/GoogleLogBtn.png"
import { useState } from "react";


export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const ShowOrHide = () => {
    setShowPassword(!showPassword);
  };
  const handlePassword = (e: any) => setPassword(e.target.value);

  return (
    <div className="w-screen h-screen flex-col justify-center items-center inline-flex relative">
      <Image src={bgImage}
        alt="An image showing ballons flying"
        className="z-[-1] h-screen w-screen"></Image>
      <form className=" absolute w-[974] h-[692px] rounded-3xl  flex-col justify-center items-center flex bg-white">
        <div className="  justify-center items-start inline-flex ">
          <div className=" self-stretch pl-10  justify-center items-center gap-[39px] inline-flex ">
            <div className="self-stretch flex-col justify-start items-end gap-2 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="pt-8 text-zinc-800 text-2xl font-medium font-['Poppins']">Sign in</div>
                <div className="flex-col justify-start items-end gap-2 flex">
                  <a href="" className="text-right text-neutral-900 text-[13px] font-normal font-['Poppins'] underline">Reset password</a>
                  <div className="flex-col justify-start items-start gap-2 flex h-[198px] w-[407px]">
                    <div className="h-[90px] flex-col justify-start items-start gap-1 flex">
                      <div className="w-[500px] pb-[3px] justify-start items-start inline-flex">
                        <label className="text-stone-500 text-base font-normal font-['Poppins']">Email</label>
                      </div>
                      <input
                        type='email'
                        id='email'
                        className="w-[407px] h-[56px] rounded-xl border border-stone-500/30  justify-start items-start inline-flex">
                      </input>
                    </div>

                    <div className="h-[87px] flex-col justify-start items-start gap-1 flex">
                      <div className="h-[90px] flex-col justify-start items-start gap-1 flex">
                        <div className="  justify-start items-start  inline-flex flex-col">
                          <div className="w-full pt-5  h-4 flex items-end justify-end ">
                            <button
                              type="button"
                              onMouseDown={ShowOrHide}
                              onMouseUp={ShowOrHide} >
                              {showPassword ? <Image src={See} alt="An Eye which incates that the password is hidden"></Image> : <Image src={Hide} alt="An Eye which indicates that the password is not hidden"></Image>}
                            </button>
                            <div className="text-stone-500/80 text-lg font-normal font-['Poppins']">Hide
                            </div>
                          </div>
                          <div className="text-stone-500 text-base font-normal font-['Poppins']">Password</div>
                          <input type={showPassword ? 'text' : 'password'}
                            onChange={handlePassword}
                            id="password"
                            value={password}
                            className=" blur-none w-[407px] h-[56px] rounded-xl border border-stone-500/30 justify-start items-start inline-flex">
                          </input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit"
                  className="w-[407px] h-16 pt-[15px] pb-4 opacity-25 bg-neutral-900 rounded-[32px] justify-center items-center inline-flex">
                  <div className="text-center text-white text-[22px] font-medium font-['Poppins']">Sign in </div>
                </button>
                <div className="w-[407px] justify-start items-center gap-[23px] inline-flex">
                  <div className="grow shrink basis-0 h-0.5 bg-stone-500/25" />
                  <div className="text-stone-500 text-base font-normal font-['Avenir']">OR</div>
                  <div className="grow shrink basis-0 h-0.5 bg-stone-500/25" />
                </div>
                <button type="button" className="w-[407px] h-16 pl-[85px] pr-[83px] pt-[18px] pb-[19px]  rounded-[40px] border border-zinc-800 justify-center items-center inline-flex">
                  <Image src={btnGoogle} alt="A button with google logo"></Image>
                </button>
                <div className="pr-2 py-2 justify-start items-start gap-2.5 inline-flex">
                  <div>              <span className="text-zinc-800 text-[15px] font-normal font-['Poppins']">By creating an account, you agree to the <span className="underline"> <a href="">Terms of use</a></span> <br /> and <span className="underline"><a href="">Privacy Policy</a></span>.</span></div>
                </div>
              </div>
            </div>
            <div className="w-px h-[692px] bg-stone-500/25" />
          </div>
          <div className="w-[484px] self-stretch px-14 py-12  flex-col justify-center items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-10 inline-flex">
              <div className="flex-col justify-start items-start flex">
                <div className="text-zinc-800 text-2xl font-medium font-['Poppins']">Create an account

                </div>
                <div className="flex items-start  gap-3 text-sm font-normal font-['Poppins']">
                  <div className="text-stone-500 text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus </div>
                </div>
              </div>
              <div className="flex-col justify-center items-center gap-4 flex w-[400px] text-stone-500 text-base font-normal font-['Poppins']">
                <div className="flex items-start  gap-4">
                  <div className="mt-2 w-2 h-1 bg-stone-500  rounded-full">
                  </div>
                  <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus </div>
                </div>
                <div className="flex items-start  gap-4">
                  <div className="mt-2 w-2 h-1 bg-stone-500  rounded-full">
                  </div>
                  <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus </div>
                </div>
                <div className="flex items-start  gap-4">
                  <div className="mt-2 w-2 h-1 bg-stone-500  rounded-full">
                  </div>
                  <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus </div>
                </div>
                <div className="flex items-start  gap-4">
                  <div className="mt-2 w-2 h-1 bg-stone-500  rounded-full">
                  </div>
                  <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus </div>
                </div>
                <div className="flex items-start  gap-4">
                  <div className="mt-2 w-2 h-1 bg-stone-500  rounded-full">
                  </div>
                  <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus </div>
                </div>
                <div className="flex items-start  gap-4">
                  <div className="mt-2 w-2 h-1 bg-stone-500  rounded-full">
                  </div>
                  <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus </div>
                </div>
              </div>
              <button className="w-[372px] h-16 bg-neutral-900 rounded-[32px] justify-center items-center inline-flex">
                <div className="text-center text-white text-xl font-normal font-['Poppins']">Create an account</div>
              </button>
            </div>
          </div>
        </div>
      </form>

    </div>



  );
}
