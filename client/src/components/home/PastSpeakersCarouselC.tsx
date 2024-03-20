import { Image } from "primereact/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"


const PastSpeakersCarouselC = () => {
    return (
        <div className="grid grid-cols-5 grid-rows-2 overflow-x-auto bg-WAccentColor py-4">

                <div className="place-self-center self-start z-40 col-start-1 col-span-1 row-span-full row-start-2 bg-WAccentColor rounded-full flex items-center justify-center size-10 cursor-pointer drop-shadow-lg">
                    <FontAwesomeIcon icon={faChevronLeft} className="z-50 col-start-1 col-span-1 row-span-full row-start-2 place-content-center m-auto text-4xl text-SecondaryColor drop-shadow-lg"/>
                </div>
           

                <Image src="../../public/temp-hero-image.png" imageClassName="aspect-video" className="flex z-10 col-start-1 col-span-2 gap-x-0.5 row-span-full justify-center items-center" />
          

        
                <Image src="../../public/temp-hero-image.png" imageClassName="aspect-video" className=" z-50 flex col-start-2 row-span-full col-span-3 justify-center items-center py-0" />
            
                <div className="place-self-center self-start z-40 col-start-5  col-span-1 row-span-full row-start-2 bg-WAccentColor rounded-full flex items-center justify-center size-10 cursor-pointer drop-shadow-lg">
                    <FontAwesomeIcon icon={faChevronRight} className="z-50 col-start-1 col-span-1 row-span-full row-start-2 place-content-center m-auto text-4xl text-SecondaryColor drop-shadow-lg"/>
                </div>
        
            <Image src="../../public/temp-hero-image.png" imageClassName="aspect-video" className="flex z-20 col-start-4 col-span-3  row-span-full justify-center items-center"/>
    
        </div>
    )
}

export default PastSpeakersCarouselC