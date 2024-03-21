import { Image } from "primereact/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

const slides = [
    {
        src: "https://picsum.photos/seed/img1/600/400",
        alt: "Slide 1",
        selected: true,
    },
    {
        src: "https://picsum.photos/seed/img2/600/400",
        alt: "Slide 2",
        selected: false,
    },   
    {
        src: "https://picsum.photos/seed/img3/600/400",
        alt: "Slide 3",
        selected: false,
    },
    {
        src: "https://picsum.photos/seed/img4/600/400",
        alt: "Slide 4",
        selected: false,
    },
    {
        src: "https://picsum.photos/seed/img5/600/400",
        alt: "Slide 5",
        selected: false,
    },
]

const PastSpeakersCarouselC = () => {
    return (

        <div className="grid grid-cols-5 grid-rows-1 overflow-x-auto bg-WAccentColor py-4">
               {slides.map((slide, i) => {
                    return slide.selected ? <Image src={slide.src} imageClassName="aspect-video" className=" z-50 flex col-start-2 row-span-full col-span-3 container justify-center  items-center py-0 drop-shadow-2xl" preview alt={slide.alt} key={`key-${i}`}/> : 
                    (slides[i + 1] === undefined && slides[0].selected) || (slides[i + 1] && slides[i + 1].selected ) ? 
                    <Image src={slide.src} imageClassName="aspect-video" className="flex z-10 col-start-1 container col-span-2 gap-x-0.5 row-span-full justify-center items-center drop-shadow-2xl" alt={slide.alt} key={`key-${i}`}/> 
                    : (slides[i - 1] === undefined && slides[5].selected) || (slides[i - 1] && slides[i - 1].selected ) ?
                    <Image src={slide.src} imageClassName="aspect-video" className="flex z-20 col-start-4 col-span-3  row-span-full justify-center items-center drop-shadow-2xl" key={`key-${i}`}/> 
                    : <Image src={slide.src} imageClassName="aspect-video" className="flex z-20 col-start- col-span-3  row-span-full justify-center items-center drop-shadow-2xl hidden" key={`key-${i}`} />
                })}

                <div className="place-self-center self-center z-40 col-start-1 col-span-1 row-span-full row-start-1 bg-WAccentColor rounded-full flex items-center justify-center size-10 cursor-pointer drop-shadow-lg">
                    <FontAwesomeIcon icon={faChevronLeft} className="z-50 col-start-1 col-span-1 row-span-full place-content-center m-auto text-4xl text-SecondaryColor drop-shadow-lg"/>
                </div>
           

                {/* <Image src={slides[0].src} imageClassName="aspect-video" className="flex z-10 col-start-1 container col-span-2 gap-x-0.5 row-span-full justify-center items-center drop-shadow-2xl" />
           */}

        
                {/* <Image src={slides[1].src} imageClassName="aspect-video" className=" z-50 flex col-start-2 row-span-full col-span-3 container justify-center  items-center py-0 drop-shadow-2xl" preview /> */}
            
                <div className="place-self-center self-center z-40 col-start-5 row-start-1 col-span-1 row-span-full row-start-1 bg-WAccentColor rounded-full flex items-center justify-center size-10 cursor-pointer drop-shadow-lg">
                    <FontAwesomeIcon icon={faChevronRight} className="z-50 col-start-1 col-span-1 row-span-full place-content-center m-auto text-4xl text-SecondaryColor drop-shadow-lg"/>
                </div>
        
            {/* <Image src={slides[2].src} imageClassName="aspect-video" className="flex z-20 col-start-4 col-span-3  row-span-full justify-center items-center drop-shadow-2xl"/> */}

        </div>
    )
}

export default PastSpeakersCarouselC