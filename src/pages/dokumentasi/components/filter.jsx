import { TabbedNav } from '../../../components/TabbedNav';
import '../index.css';

export function Filter() {
    function handleclick(ev) {
        const { year } = ev.target.dataset;
        const filterName = year;
        const filterImg = document.querySelectorAll('.picture');
        filterImg.forEach((picture) => {
            const filterImges = picture.getAttribute('data-name');
            if (filterImges === filterName) {
                picture.classList.add('show');
            } else if (filterName === 'all') {
                picture.classList.add('show');
            } else {
                picture.classList.add('hide');
                picture.classList.remove('show');
            }
        });

        // HACK, FIXME
        const navButtons = document.querySelectorAll(
            'nav > button[type=button][data-year]'
        );
        navButtons.forEach((element) => {
            if (element.dataset.year === year) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }
    return (
        <div className='wrapper'>
            <TabbedNav className='mx-auto max-w-max'>
                <button
                    type='button'
                    onClick={handleclick}
                    data-year='all'
                    className='active'
                >
                    All
                </button>
                <button type='button' onClick={handleclick} data-year='2020'>
                    2020
                </button>
                <button type='button' onClick={handleclick} data-year='2019'>
                    2019
                </button>
            </TabbedNav>
        </div>
    );
}
