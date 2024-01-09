import Image from 'next/image'
// import style 
import { TfiCheckBox } from "react-icons/tfi";

export default function Home() {
  return (
    <div className="flex-wrap h-screen flex items-center justify-center ">
   
    <div className="flex flex-col items-center justify-between px-8 mt-8 text-white">
    <div className="relative overflow" style={{ position: 'relative',}}>
      
      <div>
        <div className="mx-auto  max-w-4xl  text-center text-dark " style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="lg:text-6xl text-6xl lg:font-bold font-bold">Check your financial health</h1>
          <p className="mt-10 px-40 font-Poppins text-2xl font-extralight text-white leading-10">Use WeathoMeter to get a free report card for your finances- within minutes! </p>
          <div className="mt-10 flex items-center justify-center ">
          
            <a href="#" className="rounded-full bg-orange px-8 py-4 text-2xl font-Poppins font-semibold text-white  hover:shadow-md">Get Started </a>
          </div>
        </div>
        <div className='flex flex-wrap mt-4 pt-10 '>
          <div className='flex flex-col'>
            <div className='text-white flex flex-wrap gap-2 justify-center p-2 m-2'>
              <TfiCheckBox color="white"></TfiCheckBox>
              <p className='border-b-2 border-white mb-8'>Expected retirement Age</p>
            </div>
            <div className='text-white flex flex-wrap gap-2 justify-center p-2 m-2'>
              <TfiCheckBox color="white"></TfiCheckBox>
              <p className='underline-offset-2 '>Expected retirement Age</p>
            </div>
          </div>
          <Image
              src="/phone.png"
              className='-mt-6 justify-center'
              width={350}
              height={175}
              alt="Picture of the author"
              />
          <div className='flex flex-col'>
            <div className='text-white flex flex-wrap gap-2 justify-center p-2 m-2'>
              <TfiCheckBox color="white"></TfiCheckBox>
              <p className='underline-offset-2 '>Expected retirement Age</p>
            </div>
            <div className='text-white flex flex-wrap gap-2 justify-center p-2 m-2'>
              <TfiCheckBox color="white"></TfiCheckBox>
              <p className='underline-offset-2 '>Expected retirement Age</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div>
        <div className="mx-auto  max-w-4xl py-2 mt-10  text-center text-dark " style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="lg:text-6xl text-4xl lg:font-bold font-bold">How it works?</h1>
          <Image
              src="/down.png"
              className='-mt-20 ml-10 justify-center'
              width={800}
              height={200}
              alt="Picture of the author"
              />
          <div className='flex  gap-20 text-white lg:text-xl text-lg font-Poppins px-8'>
            <div className='flex flex-col p-2 px-4 '>
              <p>Answer few questions</p>
            </div>
            <div className='flex flex-col p-2 px-4 '>
              <p>Register using phone and OTP</p>
             </div>
            <div className='flex flex-col p-2 px-4 '>
              <p>Get report andpersonal roadmap</p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center ">
          
          <a href="#" className="rounded-full bg-orange px-8 py-4 text-2xl font-Poppins font-semibold text-white  hover:shadow-md">Get Started </a>
        </div>
        </div>
       
      </div>
    <div  >
    <svg
          className="absolute -mt-2 top-60 bottom-0 left-0 lg:max-w-full lg:w-full lg:h-auto "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1500 800"
          width="1500"
          height="800"
        
        >
          <path
            d="M0 617L50.5 612.5C101 608 202 599 302.8 553C403.7 507 504.3 424 605.2 391C706 358 807 375 907.8 407.8C1008.7 440.7 1109.3 489.3 1210.2 503.8C1311 518.3 1412 498.7 1462.5 488.8L1513 479L1513 801L1462.5 801C1412 801 1311 801 1210.2 801C1109.3 801 1008.7 801 907.8 801C807 801 706 801 605.2 801C504.3 801 403.7 801 302.8 801C202 801 101 801 50.5 801L0 801Z"
            fill="#0A5783"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
          <div>
            
          </div>
        </svg>
    </div>
    
    </div>
  </div>
  )
}
