import Image from "next/image";

const Instagram = () => {
    const images = [
        'https://dummyimage.com/300x300/000/fff',
        'https://dummyimage.com/300x300/BBC744/fff',
        'https://dummyimage.com/300x300/AADEFF/fff',
        'https://dummyimage.com/300x300/HD47CA/fff',
        'https://dummyimage.com/300x300/TY45CL/fff',
        'https://dummyimage.com/300x300/BCMNGN/fff'
    ];

    const shuffledImages = images.sort(() => Math.random() - 0.5);

    return (
        <div className={'flex flex-col justify-center items-center my-12 xl:my-20'}>
            <span className={'uppercase text-sm text-[#bfc2c7]'}>Instagram</span>
            <h2 className={'uppercase mt-2 mb-8 xl:mb-20 text-4xl'}>#ESPUFI</h2>
            <div className={'flex overflow-hidden overflow-x-scroll gap-1 xl:grid grid-cols-3 xl:overflow-hidden'}>
                {shuffledImages.map((src, index) => (
                    <Image key={index} src={src} alt={'Ig'} width={300} height={300} />
                ))}
            </div>
        </div>
    );
}

export default Instagram;
