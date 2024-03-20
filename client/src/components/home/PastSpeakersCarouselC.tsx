import { Image } from "primereact/image"

const PastSpeakersCarouselC = () => {
    return (
        <div className="container bg-WAccentColor p-4">

        <div className="grid grid-cols-4  m-4">
          
            <Image src="../../public/temp-hero-image.png" imageClassName="aspect-video" className="flex col-span-1 justify-center items-center max-w-33" />

        
            <Image src="../../public/temp-hero-image.png" imageClassName="aspect-video" className="flex col-span-2 justify-center items-center max-w-33 " />
        
        
            <Image src="../../public/temp-hero-image.png" imageClassName="aspect-video" className="flex col-span-1 justify-center items-center max-w-33 "/>
    
        </div>
        </div>
    )
}

export default PastSpeakersCarouselC