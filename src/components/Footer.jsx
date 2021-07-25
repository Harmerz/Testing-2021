import { Link } from 'react-router-dom';
import styles from '../styles/footer.module.css';

import { ReactComponent as TwitterIcon } from '../assets/icons/socials/twitter.svg';
import { ReactComponent as InstagramIcon } from '../assets/icons/socials/instagram.svg';
import { ReactComponent as TiktokIcon } from '../assets/icons/socials/tiktok.svg';
import { ReactComponent as LineIcon } from '../assets/icons/socials/line.svg';
import { ReactComponent as YoutubeIcon } from '../assets/icons/socials/youtube.svg';

function SocialItem({ icon: IconComponent, targetBaseUrl, children }) {
    return (
        <a
            href={targetBaseUrl + children}
            className='flex items-center font-display-sm group my-2 max-w-max'
        >
            <div className='bg-white text-black w-4 h-4 p-0.5 rounded-full'>
                <IconComponent className='block w-full h-full fill-current' />
            </div>
            <span className='block text-xs group-hover:underline ml-2'>
                {children}
            </span>
        </a>
    );
}

export function Footer({ className }) {
    return (
        <footer
            className={`${styles.footerContainer} bg-black text-white flex flex-col md:flex-row font-display-sm p-8 ${className}`}
        >
            <div className='flex flex-row w-auto md:w-2/5'>
                <div className='text-xs'>
                    <p className='font-display font-bold uppercase text-xl mb-4'>
                        PPSMB Kesatria 2021
                    </p>
                    <p className='mb-4'>
                        Jalan Grafika
                        <br />
                        Mlati, Yogyakarta 55281, ID
                    </p>
                    <p>
                        <Link
                            to='/'
                            className='hover:underline'
                            title='Go to home page'
                        >
                            https://ppsmb.ft.ugm.ac.id
                        </Link>
                    </p>
                </div>
            </div>
            <div className='flex-grow flex flex-col flex-wrap md:max-h-24'>
                <SocialItem
                    icon={TwitterIcon}
                    targetBaseUrl='https://twitter.com/'
                >
                    ppsmb_kesatria
                </SocialItem>
                <SocialItem
                    icon={TiktokIcon}
                    targetBaseUrl='https://twitter.com/'
                >
                    ppsmb_kesatria
                </SocialItem>
                <SocialItem
                    icon={LineIcon}
                    targetBaseUrl='https://twitter.com/'
                >
                    NR82565A
                </SocialItem>
                <SocialItem
                    icon={InstagramIcon}
                    targetBaseUrl='https://twitter.com/'
                >
                    ppsmb_kesatria
                </SocialItem>
                <SocialItem
                    icon={YoutubeIcon}
                    targetBaseUrl='https://twitter.com/'
                >
                    PPSMB KESATRIA
                </SocialItem>
            </div>
        </footer>
    );
}
