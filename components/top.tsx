import Image from 'next/image';
import { useAppSelector } from '../app/hooks';
import ninjaIcon from '../public/images/ninja-icon.png';
import { 
    UtilState,
    utilState as originUtilState
} from "../reducers/util";

export default function Top()
{
    const utilState:UtilState                   = useAppSelector(originUtilState);


    return (
        <div
            className={` fixed z-[30] w-screen h-[33px] top-[19px] desktop:top-[40px] grid grid-cols-[1fr_32px_1fr]`}
        >
          <div
            className={`${utilState.isMobile? 'test1' : 'test2'}`}
          >
            {/* {!utilState.isMobile &&

            } */}
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
            className={`test1`}
          >

          </div>
        </div>
      )
}