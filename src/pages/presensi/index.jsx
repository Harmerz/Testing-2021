import { EmbedClusterGform, ButtonToGform } from '../../components/presensi';

export function PresensiIndexPage() {
    return <EmbedClusterGform />;
}

export function TestButton() {
    return (
        <div className='w-full h-full'>
            <ButtonToGform
                type='asinkron'
                expireDate={new Date(2021, 8, 5, 23, 59, 59)}
                position='top'
            />
        </div>
    );
}
