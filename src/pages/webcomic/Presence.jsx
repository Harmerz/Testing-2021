export function Presence() {
    return (
        <div className='w-full'>
            <h1 className='text-3xl font-medium text-center'>Presensi</h1>
            <form className='w-full'>
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
                <label htmlFor='absen' className='block mb-4'>
                    <div>No. Absen</div>
                    <input
                        className='form-input customized-form'
                        type='number'
                        name='absen'
                        id='absen'
                        required
                    />
                </label>
                <label htmlFor='no-forum'>
                    <div>No. Forum</div>
                    <input
                        className='form-select customized-form'
                        list='cars'
                        name='no-forum'
                        id='no-forum'
                        required
                    />
                    <datalist
                        className='form-select px-4 py-3 rounded-full'
                        name='cars'
                        id='cars'
                    >
                        <option>valve</option>
                        <option>Saab</option>
                        <option>Mercedes</option>
                        <option>Audi</option>
                        <option>1valve</option>
                        <option>1Saab</option>
                        <option>1Mercedes</option>
                        <option>1Audi</option>
                        <option>2valve</option>
                        <option>2Saab</option>
                        <option>2Mercedes</option>
                        <option>2Audi</option>
                        <option>3valve</option>
                        <option>3Saab</option>
                        <option>3Mercedes</option>
                        <option>3Audi</option>
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
