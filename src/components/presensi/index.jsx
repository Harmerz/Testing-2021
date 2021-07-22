/* eslint-disable dot-notation */
import { useRef } from 'react';
import Swal from 'sweetalert2';
import { db } from '../../utils/firebase';
import { teams } from './data';

export function Presensi({ title, collection }) {
    const formRef = useRef(null);

    const forumOptions = teams.map((team) => (
        <option key={team.name}>{team.name}</option>
    ));

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            name: formRef.current['name'].value,
            nim: formRef.current['nim'].value,
            noAbsen: formRef.current['no-absen'].value,
            noForum: formRef.current['no-forum'].value,
        };

        db.collection(collection)
            .add(data)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil Presensi',
                    text: 'Selamat menjalankan kegiatan PPSMB 😇😇',
                });

                formRef.current['name'].value = '';
                formRef.current['nim'].value = '';
                formRef.current['no-absen'].value = '';
                formRef.current['no-forum'].value = '';
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal Presensi',
                    text: error.message,
                });
            });
    };

    return (
        <div className='w-full'>
            <h1 className='text-3xl font-medium text-center'>{title}</h1>
            <form className='w-full' onSubmit={submitHandler} ref={formRef}>
                <label htmlFor='name' className='block mb-4'>
                    <div>Nama</div>
                    <input
                        className='form-input customized-form'
                        type='text'
                        name='name'
                        id='name'
                        required
                    />
                </label>
                <label htmlFor='nim' className='block mb-4'>
                    <div>NIM</div>
                    <input
                        className='form-input customized-form'
                        type='text'
                        name='nim'
                        id='nim'
                        required
                    />
                </label>
                <label htmlFor='no-absen' className='block mb-4'>
                    <div>No. Absen</div>
                    <input
                        className='form-input customized-form'
                        type='number'
                        name='no-absen'
                        id='no-absen'
                        required
                    />
                </label>
                <label htmlFor='no-forum'>
                    <div>No. Forum</div>
                    <input
                        className='form-select customized-form'
                        list='forums'
                        name='no-forum'
                        id='no-forum'
                        required
                    />
                    <datalist
                        className='form-select px-4 py-3 rounded-full'
                        name='forums'
                        id='forums'
                    >
                        {forumOptions}
                    </datalist>
                </label>
                <div className='grid place-items-center mt-8'>
                    <button
                        type='submit'
                        className='bg-brand-dark text-brand-light font-medium rounded-lg px-12 py-3 transform duration-150 hover:-translate-y-1 hover:shadow-lg'
                    >
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
}
