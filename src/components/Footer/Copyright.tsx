import Image from "next/image";

const Copyright = () => {
    return (
        <div className={'flex flex-col xl:flex-row justify-between items-center gap-2 border-t-2 pt-2 xl:pt-4'}>
            <p className={'text-xs text-center'}>PUFi Copyright 2024 - Todos los derechos reservados</p>
            <Image src={'https://dummyimage.com/100x30'} alt={'Logo Footer'} width={100} height={30}/>
        </div>
    )
}

export default Copyright;