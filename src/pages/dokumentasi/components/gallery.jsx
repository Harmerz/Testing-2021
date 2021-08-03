import React from 'react';

export function Gallery() {
    function preview(source){
        const previewBox = document.querySelector('.preview-box');
        const previewImg = previewBox.querySelector('img');
        const shadow = document.querySelector('.shadow');
        previewBox.classList.add('show');
        previewImg.src = source;
        shadow.classList.add('show');
    }
    function closeIcon(){
        const previewBox = document.querySelector('.preview-box');
        const shadow = document.querySelector('.shadow');
        previewBox.classList.remove('show');
        shadow.classList.remove('show');
    }
    return(
    <div className='wrapper'>
        <nav>
            <div className='gallery'>
                <div className='picture' data-name='2019' onClick={() => preview('https://ppsmb.ft.ugm.ac.id/wp-content/uploads/sites/1314/IMG_0183.jpg')} aria-hidden='true'><span><img src='https://ppsmb.ft.ugm.ac.id/wp-content/uploads/sites/1314/IMG_0183.jpg' alt='' /></span></div>
                <div className='picture' data-name='2019' onClick={() => preview('https://ppsmb.ft.ugm.ac.id/wp-content/uploads/sites/1314/IMG_0120.jpg')} aria-hidden='true'><span><img src='https://ppsmb.ft.ugm.ac.id/wp-content/uploads/sites/1314/IMG_0120.jpg' alt='' /></span></div>
                <div className='picture' data-name='2019' onClick={() => preview('https://ppsmb.ft.ugm.ac.id/wp-content/uploads/sites/1314/DSC_2408.jpg')} aria-hidden='true'><span><img src='https://ppsmb.ft.ugm.ac.id/wp-content/uploads/sites/1314/DSC_2408.jpg' alt='' /></span></div>
                <div className='picture' data-name='2019' onClick={() => preview('https://ppsmb.ft.ugm.ac.id/wp-content/uploads/sites/1314/IMG_5688.jpg')} aria-hidden='true'><span><img src='https://ppsmb.ft.ugm.ac.id/wp-content/uploads/sites/1314/IMG_5688.jpg' alt='' /></span></div>
                <div className='picture' data-name='2019' onClick={() => preview('https://ppsmb.ft.ugm.ac.id/wp-content/uploads/sites/1314/IMG_1275.jpg')} aria-hidden='true'><span><img src='https://ppsmb.ft.ugm.ac.id/wp-content/uploads/sites/1314/IMG_1275.jpg' alt='' /></span></div>
            </div>
        </nav>
        <nav>
            <div className='preview-box'>
                <div className='details'>
                <span className='title'>Dokumentasi milik PPSMB Kesatria FT UGM. </span>
                <span className='icon fas fa-times rounded-full' onClick={closeIcon} aria-hidden='true'>x</span>
            </div>
            <div className='image-box'>
                <img src='' alt='' />
            </div>
            </div>
            <div className='shadow' />
        </nav>
    </div>
    );
}
