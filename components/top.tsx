import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '../app/hooks';
import ninjaIcon from '../public/images/ninja-icon.png';
import { 
    UtilState,
    utilState as originUtilState
} from "../reducers/util";
import content from '../jsons/nav.content.json';
import { useRouter } from 'next/router';

export default function Top()
{
    const utilState:UtilState                   = useAppSelector(originUtilState);
    const {locale}                              = useRouter();

    return (
        <div
            className={` fixed z-[30] w-screen h-[33px] top-[19px] desktop:top-[40px] grid grid-cols-[1fr_32px_1fr]`}
        >
          <div
            className={`${utilState.isMobile? 'test1' : ''}`}
          >
            {!utilState.isMobile &&
                <nav className={`nav h-full flex flex-row`}>
                    <Link href={'/'}>
                        <span>{content.translations[locale].home}</span>
                    </Link>
                    <Link href={'/'}>
                        <span>{content.translations[locale].skills}</span>
                    </Link>
                    <Link href={'/'}>
                        <span>{content.translations[locale].portfolio}</span>
                    </Link>
                    <Link href={'/'}>
                        <span>{content.translations[locale].contact}</span>
                    </Link>
                </nav>
            }
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