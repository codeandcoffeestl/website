import { Image } from "primereact/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Button } from "primereact/button"
const images = [
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
    const [slides, setSlides] = useState(images);
    const [selectedSlide, setSelectedSlide] = useState(0);
    const handleLeftClick = () => {
        if (selectedSlide > 0) {
            setSlides(slides.map((slide, i) => {
                if (i === selectedSlide) {
                    return { ...slide, selected: false };
                } else if (i === selectedSlide - 1) {
                    return { ...slide, selected: true };
                }
                return slide;
            }))
            setSelectedSlide(selectedSlide - 1);
        } else {

            setSlides(slides.map((slide, i) => {
                if (i === selectedSlide) {
                    return { ...slide, selected: false };
                } else if (i === slides.length - 1) {
                    return { ...slide, selected: true };
                }
                return slide;
            }))
            setSelectedSlide(slides.length - 1);
        }
    }

    const handleRightClick = () => {
        if (selectedSlide < 4) {
           const newSlides = slides.map((slide, i) => {
                if (i === selectedSlide) {
                    return { ...slide, selected: false };
                } else if (i === selectedSlide + 1) {
                    console.log(selectedSlide + 1)
                    return { ...slide, selected: true };
                }
                return slide;
            })
            setSlides(newSlides);
            setSelectedSlide(selectedSlide + 1);
        } else {    
            setSlides(slides.map((slide, i) => {
                if (i === selectedSlide) {
                    return { ...slide, selected: false };
                } else if (i === 0) {
                    return { ...slide, selected: true };
                }
                return slide;
        }))
        setSelectedSlide(0);
        }
    }

    return (

        <div className="grid grid-cols-5 grid-rows-1 overflow-x-auto bg-WAccentColor py-4">
              {/* 
                renders images for carousel.
                if selected show the image in the middle.
                else if slide is one before selected slide show on the left.(if slide index is zero show last slide in array on left)
                else if slide is one after selected slide show on the right.(if slide index is last show first slide in array on right)
                else hide slide
             */}
               {slides.map((slide, i) => {
                    return slide.selected ? <Image src={slide.src} imageClassName="aspect-video" className=" z-50 flex col-start-2 row-span-full col-span-3 container justify-center items-center py-0 drop-shadow-2xl select-none" preview alt={slide.alt} key={`key-${i}a`}/> 
                    : (slides[i + 1] === undefined && slides[0].selected) || (slides[i + 1] && slides[i + 1].selected ) ? 
                    <Image src={slide.src} imageClassName="aspect-video" className="flex z-10 col-start-1 container col-span-2 gap-x-0.5 row-span-full justify-center items-center drop-shadow-2xl select-none" alt={slide.alt} key={`key-${i}a`}/> 
                    : (slides[i - 1] === undefined && slides[slides.length - 1].selected) || (slides[i - 1] && slides[i - 1].selected ) ?
                    <Image src={slide.src} imageClassName="aspect-video" className="flex z-20 col-start-4 col-span-3  row-span-full justify-center items-center drop-shadow-2xl select-none" key={`key-${i}a`}/> 
                    : <Image src={slide.src} imageClassName="aspect-video" className="z-20 col-start- col-span-3  row-span-full justify-center items-center drop-shadow-2xl hidden select-none" key={`key-${i}a`} />
                })}      
                
                <Button rounded className="hover:ring-2 hover:ring-SecondaryColor place-self-center self-center z-40 col-start-1 col-span-1 row-span-full row-start-1 !bg-WAccentColor flex items-center justify-center size-10 cursor-pointer drop-shadow-lg !rounded-full" onClick={handleLeftClick} >
                    <FontAwesomeIcon icon={faChevronLeft} className="z-50 text-4xl text-SecondaryColor drop-shadow-lg"/>
                </Button>
                  
                <Button rounded className=" focus-visible:animate-easeinout focus:outline-5 hover:ring-2 hover:ring-SecondaryColor place-self-center self-center z-40 col-start-5 col-span-1 row-span-full row-start-1 !bg-WAccentColor flex items-center justify-center size-10 cursor-pointer drop-shadow-lg !rounded-full" onClick={handleRightClick}>
                    <FontAwesomeIcon icon={faChevronRight} className="z-50 text-4xl text-SecondaryColor drop-shadow-lg"/>
                </Button>
        

        </div>
    )
}

export default PastSpeakersCarouselC