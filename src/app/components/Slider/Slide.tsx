import Image from 'next/image';
import Link from 'next/link';

export default function Slide({name, img, link}: SliderProps) {
    return (
        <Link href={`creche/${link}`} className='select-none flex xl:hover:scale-105 lg:hover:scale-105 h-[600px] min-w-[320px] max-w-[320px] sm:h-[500px] sm:min-w-[280px] sm:max-w-[280px] rounded-3xl m-3 p-6 cursor-grab active:cursor-grabbing relative overflow-hidden transition ease-in-out duration-300 w-full'>
            <div className='flex flex-col gap-1'>
                <p className='text-4xl z-[2]'>{name}</p>
            </div>       
            {img && 
                <Image src={img} fill alt={name} style={{objectFit:"cover"}} className='rounded-3xl select-none pointer-events-none' quality={100} sizes='70vw'/>
            }
            <div className='w-[35px] h-[35px] z-[2] absolute top-[550px] left-[270px] sm:top-[450px] sm:left-[230px] bg-[#FFF5E4] rounded-full z-[1] p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z" fill='#000'></path>
                </svg>
            </div>
        </Link> 
    )
}

type SliderProps = {
  name: string;
  img: string;
  description: string;
  shortDescription: string;
  link:string;
};