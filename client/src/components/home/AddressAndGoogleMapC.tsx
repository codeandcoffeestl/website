import { Card } from "primereact/card"
import { Map, Marker } from '@vis.gl/react-google-maps';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AddressAndGoogleMapC = () => {

    return (
        <section className="bg-SecondaryColor 
                            flex 
                            flex-col 
                            lg:flex-row 
                            justify-between 
                            items-center">
            <Card className="bg-GAccentColor 
                            text-PrimaryColor
                            m-10 
                            w-[568px] 
                            h-[363px]">
                <div className="flex 
                                items-center 
                                justify-center 
                                pb-3">
                    <FontAwesomeIcon icon={faLocationDot} className="text-OHighlightColor 
                                                                        fa-2xl 
                                                                        pr-2" />
                    <p className="text-4xl
                                lg:text-4xl  
                                xl:text-4xl 
                                font-bold "
                    >TechArtista UCity</p>
                </div>
                <div className="border-b-4 
                                border-dashed 
                                border-SecondaryColor">
                    <p className="pb-4 
                                text-black 
                                text-[20px]">
                        725 Kingsland Ave Suite 100 <br />
                        University City, MO 63130
                    </p>
                </div>
                <p className="pt-4 
                            text-[20px]
                            text-black"
                >We meet twice a month on Sunday at noon.</p>
            </Card>
            <Map
                defaultCenter={{ lat: 38.658276, lng: -90.309074 }}
                defaultZoom={15}
                gestureHandling={'cooperative'}
                disableDefaultUI={true}
                className="rounded-lg 
                            m-10 
                            min-w-[312px] 
                            min-h-[239px] 
                            w-[568px] 
                            h-[363px] 
                            border-4 
                            border-GAccentColor whitespace-normal "
            >
                <Marker position={{ lat: 38.658276, lng: -90.309074 }} />
            </Map>
        </section >
    )
}

export default AddressAndGoogleMapC

