import InfoCards from '@/components/Home/Cards/info'
import Image from "next/image";

const Cards = () => {

    console.log('InfoCard', InfoCards)

    return (
        <div className={'grid xl:grid-cols-1 w-full max-w-full'}>
            {
                InfoCards?.map((infoCard) => (
                    <div key={infoCard.nameCard} className={'container-cards-home xl:flex w-full'}>
                        <div className={'xl:w-3/6'}>
                            <Image src={infoCard.imageMobile} alt={infoCard.nameCard} width={400} height={400} className={'xl:hidden'}/>
                            <Image src={infoCard.imageDesktop} alt={infoCard.nameCard} width={800} height={800} className={'hidden xl:flex'}/>
                        </div>
                        <div className={'flex flex-col items-center p-8 gap-8 xl:w-3/6'}>
                            <Image src={infoCard.imageCard} alt={infoCard.nameCard} width={100} height={100}/>
                            <p>{infoCard.nameCard}</p>
                            <p className={'text-center'}>{infoCard.descriptionCard}</p>
                            <a href={infoCard.href} className={'uppercase tracking-wider'}>{infoCard.seeMore}</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards;