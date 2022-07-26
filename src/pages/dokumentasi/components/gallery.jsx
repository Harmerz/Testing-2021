import React from 'react';
import foto1 from '../../../assets/dokumentasi/1.jpg';
import foto2 from '../../../assets/dokumentasi/2.jpg';
import foto3 from '../../../assets/dokumentasi/3.jpg';
import foto4 from '../../../assets/dokumentasi/4.jpg';
import foto5 from '../../../assets/dokumentasi/5.jpg';
import foto6 from '../../../assets/dokumentasi/6.jpg';
import foto7 from '../../../assets/dokumentasi/7.jpg';
import foto8 from '../../../assets/dokumentasi/8.jpg';
import foto9 from '../../../assets/dokumentasi/9.jpg';
import foto10 from '../../../assets/dokumentasi/10.jpg';
import foto11 from '../../../assets/dokumentasi/11.jpg';
import foto12 from '../../../assets/dokumentasi/12.jpg';
import foto13 from '../../../assets/dokumentasi/13.jpg';
import foto14 from '../../../assets/dokumentasi/14.jpg';
import foto15 from '../../../assets/dokumentasi/15.jpg';
import foto16 from '../../../assets/dokumentasi/16.jpg';

export function Gallery() {
    function preview(source) {
        const previewBox = document.querySelector('.preview-box');
        const previewImg = previewBox.querySelector('img');
        const shadow = document.querySelector('.shadow');
        previewBox.classList.add('show');
        previewImg.src = source;
        shadow.classList.add('show');
    }
    function closeIcon() {
        const previewBox = document.querySelector('.preview-box');
        const shadow = document.querySelector('.shadow');
        previewBox.classList.remove('show');
        shadow.classList.remove('show');
    }
    return (
        <div className='wrapper'>
            <nav>
                <div className='gallery'>
                    <div
                        className='picture'
                        data-name='2019'
                        onClick={() => preview(foto1)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto1} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2019'
                        onClick={() => preview(foto2)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto2} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2019'
                        onClick={() => preview(foto3)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto3} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2020'
                        onClick={() => preview(foto7)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto7} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2020'
                        onClick={() => preview(foto8)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto8} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2020'
                        onClick={() => preview(foto9)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto9} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2019'
                        onClick={() => preview(foto4)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto4} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2019'
                        onClick={() => preview(foto5)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto5} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2019'
                        onClick={() => preview(foto6)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto6} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2021'
                        onClick={() => preview(foto10)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto10} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2021'
                        onClick={() => preview(foto11)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto11} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2021'
                        onClick={() => preview(foto12)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto12} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2021'
                        onClick={() => preview(foto13)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto13} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2021'
                        onClick={() => preview(foto14)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto14} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2021'
                        onClick={() => preview(foto15)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto15} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2021'
                        onClick={() => preview(foto16)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto16} alt='' />
                        </span>
                    </div>
                </div>
            </nav>
            <nav>
                <div className='preview-box'>
                    <div className='details'>
                        <span className='title'>
                            Dokumentasi milik PPSMB Kesatria FT UGM.{' '}
                        </span>
                        <span
                            className='icon fas fa-times rounded-full'
                            onClick={closeIcon}
                            aria-hidden='true'
                        >
                            x
                        </span>
                    </div>
                    <div className='image-box'>
                        <img src={foto1} alt='' />
                    </div>
                </div>
                <div className='shadow' />
            </nav>
        </div>
    );
}
