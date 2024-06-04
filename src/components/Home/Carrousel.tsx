import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const Carrousel = () => {
    return (
        <div className={''}>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <Image src={'https://dummyimage.com/600x600'} alt={'Main'} width={600} height={600} className={'xl:hidden'}/>
                        <Image src={'https://dummyimage.com/1920x600'} alt={'Main'} width={1920} height={600} className={'hidden xl:flex'}/>
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={'https://dummyimage.com/600x600'} alt={'Main'} width={600} height={600} className={'xl:hidden'}/>
                        <Image src={'https://dummyimage.com/1920x600'} alt={'Main'} width={1920} height={600} className={'hidden xl:flex'}/>
                    </CarouselItem><CarouselItem>
                    <Image src={'https://dummyimage.com/600x600'} alt={'Main'} width={600} height={600} className={'xl:hidden'}/>
                    <Image src={'https://dummyimage.com/1920x600'} alt={'Main'} width={1920} height={600} className={'hidden xl:flex'}/>
                </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Carrousel;