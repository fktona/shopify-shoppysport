import Link from "next/link";
import Image from "next/image";


export default function Hero() {
  return (
     
    <div className=" relative lg:min-h-[90vh] min-h-[70vh]  mx-auto  z-10
     max-w-7xl flex flex-col herobg  justify-center items-center py-8 px-4  text-center" id="hero">
      <div className="absolute -z-10 bottom-0  flex justify-center items-center w-fit h-full">
        <Image
          src="/bbp.png"
          alt="ball player in action"
          width={400}
          height={400}
          objectFit="cover"
          objectPosition="center"
          quality={100}
          className="relative h-[90%] -bottom-5 "
        />
        
      </div>
      <h1 className="font-extrabold z-20 text-gray-900">
        {/* <p className="text-xl sm:text-3xl md:text-4xl">Shop the latest in sports technology and performance gear</p> */}
        <p className="text-transparent stroke   text-7xl md:text-8xl">
               Greatness <br/>Awaits
  
         </p>
      </h1>
            <div className="mt-5 z-20 max-w-md  mx-auto flex-col gap-5 justify-center items-center md:mt-8">
        <p className=" font-bold text-xl text-white "> Socials</p>
        <div className="flex gap-8">
        <Image src="/socials/x.svg" alt="x" width={30} height={30} />
        <Image src="/socials/ig.svg" alt="x" width={40} height={40} />
        <Image src="/socials/mail.svg" alt="x" width={40} height={40} />
        </div>
      </div>
    </div>
    
  )
}
