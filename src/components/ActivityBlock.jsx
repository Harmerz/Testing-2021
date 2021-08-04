import { Link } from 'react-router-dom';
import { cnJoin } from '../utils/classnames-joiner';

import styles from '../styles/ActivityBlock.module.css';

import { ReactComponent as GoIcon } from '../assets/icons/go.svg';

export function ActivityBlock({ title, id, items, className }) {
    return (
        <section
            id={id}
            className={`${styles.container} flex-1 sm:max-w-lg ${className}`}
        >
            <div
                className={cnJoin([
                    styles.cornerCutHeading,
                    'flex',
                    'items-center',
                    'justify-center',
                    'bg-current',
                    'p-5',
                ])}
            >
                <h1 className='text-white font-display font-bold uppercase text-2xl'>
                    {title}
                </h1>
            </div>
            <ul className={styles.itemsContainer}>
                {items.map((item) => (
                    <li key={item.url} className='block mt-4'>
                        <Link
                            to={item.url}
                            className={`${styles.item} bg-white flex group`}
                        >
                            <div className='flex-grow p-4'>
                                <p className='font-display font-bold text-lg leading-tight mb-1'>
                                    {item.title}
                                </p>
                                <p className='text-black font-display font-semilight text-xs'>
                                    {item.description}
                                </p>
                            </div>
                            <div className='flex-shrink-0 flex items-center justify-center p-4 group-hover:bg-current transition-colors'>
                                <GoIcon className='block fill-current h-6 w-auto group-hover:text-white transition-colors' />
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
