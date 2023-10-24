import Skeleton from '@mui/material/Skeleton';

export default function articleLoading() {
    return (
        <div className='container mx-auto pt-5'>
            <Skeleton
                sx={{ bgcolor: 'grey.500' }}
                variant="rectangular"
                width={210}
                height={10}
            />
            <br/>
            <Skeleton
                sx={{ bgcolor: 'grey.500' }}
                variant="rectangular"
                width={210}
                height={10}
            />
        </div>
    );
}