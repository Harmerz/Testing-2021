import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

export function Filter() {
    function handleclick(year){
        const filterName = year;
        const filterImg = document.querySelectorAll('.picture');
        filterImg.forEach((picture)=>{
            const filterImges = picture.getAttribute('data-name');
            if(filterImges === filterName){
                picture.classList.add('show')
            }else if(filterName === 'all'){
                picture.classList.add('show')
            }else{
                picture.classList.add('hide')
                picture.classList.remove('show')
            }
        })
    }
    return(
        <div className='wrapper'>
            <nav>
                <h1 className='flex w-full justify-center text-3xl font-bold'>Kilas Balik</h1>
                    <div className='items'>
                        <button type='button' className='btn' onClick={() => handleclick('all')}>All</button>
                        <button type='button' className='btn' onClick={() => handleclick('2019')}>2019</button>
                        <button type='button' className='btn' onClick={() => handleclick('2020')}>2020</button>
                    </div>
            </nav>
        </div>
    );
}