import Image from 'next/image';
import ninjaIcon from '../public/images/ninja-icon.png';


export default function Top()
{



    return (
        <div
            className={` fixed z-[30] w-screen h-[33px] top-[19px] desktop:top-[40px] grid grid-cols-[1fr_32px_1fr]`}
        >
          <div
            className={``}
          >

          </div>
          <div
            className={`relative`}
          >
            <Image 
                src={`${ninjaIcon.src}`}
                priority={true}
                fill
                alt={''}                    
            />
          </div>
          <div
            className={``}
          >

          </div>
        </div>
      )
}