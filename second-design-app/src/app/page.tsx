'use client'
import Image from "next/image";
import Logo from "@/app/assets/Logo.png"
import See from '@/app/assets/see-eye.png'
import Hide from '@/app/assets/hide-eye.png'
import React, { useState } from "react";




export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showMessage, setShowMessage] = useState(false);
  const ShowOrHide = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseEnter = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };

  const handlePassword = (e: any) => setPassword(e.target.value);
  const handleEmail = (e: any) => setEmail(e.target.value);
  const handlePhoneNumber = (e: any) => setPhoneNumber(e.target.value);
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="w-full flex justify-center flex-col items-end">
        <div className="font-['Poppins']">Already have an account?  <a href="" className="underline ">Log in</a>  </div>
        <div className="text-[#666666]"> Forget your user ID or password?</div>
      </div>
      <div className="h-[942px] w-[652px] flex-col justify-center items-center gap-10 inline-flex ">
        <div className="w-full flex justify-center">
          <Image src={Logo} alt="Logo da página"></Image>
        </div>
        <form className="h-[830px] w-full border border-[#666666]/50 rounded-3xl px-10 justify-center items-center flex flex-col gap-[40px]">
          <div className="flex-col justify-center items-center flex ">
            <div className="text-center text-zinc-800 text-[32px] font-medium font-['Poppins']">Create an account</div>
            <div className="w-[460px] text-center text-stone-500 text-base font-normal font-['Poppins']">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Morbi lobortis maximus</div>
          </div>
          <div className="h-[90px] flex-col justify-start items-start gap-1 flex">
            <div className="w-[500px] pb-[3px] justify-start items-start inline-flex">
              <label className="text-stone-500 text-base font-normal font-['Poppins']">Email</label>
            </div>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmail}
              onMouseEnter={handleMouseEnter}

              className="w-[550px] h-[56px] rounded-xl border border-stone-500 justify-start items-start inline-flex">
            </input>
            {showMessage && (
              <div className="absolute left-[60%] bottom-[53%] bg-black text-white rounded-md p-2">We will use your email as your user ID. </div>
            )}
          </div>
          <div className=" pl-3 h-[130px]  flex-col justify-start items-start gap-1 flex">
            <div className="w-[500px] pb-[3px] justify-start items-center inline-flex">
              <div className="text-stone-500 text-base font-normal font-['Poppins']">Phone</div>
            </div>
            <input type='tel'
              id="phone"
              value={phoneNumber}
              onChange={handlePhoneNumber}
              className="w-[550px] h-[56px] rounded-xl border border-stone-500 justify-start items-center inline-flex">
            </input>
            <div className="text-stone-500/80 text-[13px] font-normal font-['Poppins']">We strongly recommend adding a phone number. This will help verify your account and keep it safe.</div>
          </div>
          <div className="h-[165px] flex-col justify-start items-start gap-1 flex mb-3">
            <div className="h-[90px] flex-col justify-start items-start gap-1 flex">
              <div className=" pl-3 justify-start items-start  inline-flex flex-col">
                <div className="w-full  h-4 flex items-end justify-end ">
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
                  className=" blur-none w-[550px] h-[56px] rounded-xl border border-stone-500 justify-start items-start inline-flex">
                </input>
                <div className="w-[73px] self-stretch relative">
                  <div className="w-6 h-6 pl-[2.91px] pr-[2.90px] py-1 left-0 top-[3px] absolute justify-center items-center inline-flex">
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center items-center gap-[35px] flex ">
              <div className="self-stretch flex-col justify-start items-start inline-flex">
                <li className="list-none flex items-center gap-2 text-stone-500/60 text-sm font-normal font-['Poppins'] p-2">
                  <div className="w-2 h-2 bg-stone-500/60 rounded-full">
                  </div>
                  Use 8 or more characters
                </li>
                <li className="list-none flex items-center gap-2 text-stone-500/60 text-sm font-normal font-['Poppins'] p-2">
                  <div className="w-2 h-2 bg-stone-500/60 rounded-full">
                  </div>
                  Use a number (e.g. 1234)
                </li>
              </div>
              <div className="self-stretch flex-col justify-start items-start inline-flex">
                <li className="list-none flex items-center gap-2 text-stone-500/60 text-sm font-normal font-['Poppins'] p-2">
                  <div className="w-2 h-2 bg-stone-500/60 rounded-full">
                  </div>
                  Use upper and lower case letters (e.g. Aa)
                </li>
                <li className="list-none flex items-center gap-2 text-stone-500/60 text-sm font-normal font-['Poppins'] p-2">
                  <div className="w-2 h-2 bg-stone-500/60 rounded-full">
                  </div>
                  Use a symbol (e.g. !@#$)
                </li>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-2 flex">
            <button type="submit" className="w-[550px] h-[56px] bg-neutral-900 rounded-[40px] inline-flex justify-center items-center gap-2 ">
              <div className="text-center text-white text-lg font-normal font-['Poppins']">Sign in
              </div>
            </button>
            <div className="pr-2 py-2 justify-start items-start gap-2.5 inline-flex">
              <span className="text-zinc-800 text-[15px] font-normal font-['Poppins']">By creating an account, you agree to the <span className="underline"> <a href="">Terms of use</a></span> and <span className="underline"><a href="">Privacy Policy</a></span>.</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
