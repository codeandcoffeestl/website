import { Card } from "primereact/card"
import { Map, Marker } from '@vis.gl/react-google-maps';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AddressAndGoogleMapC = () => {

    return (
        <section className="bg-SecondaryColor 
                            flex
                            flex-col md:flex-row
                            justify-between
                            items-center">
            <Card className="bg-GAccentColor
                 text-PrimaryColor
                 m-4 sm:m-8 md:m-10
                 w-full max-w-[568px]
                 h-[250px] sm:h-[363px]
                 p-6 sm:p-8">

                <div className="flex
                    items-center
                    justify-center
                    pb-3">
                    <FontAwesomeIcon icon={faLocationDot}
                                     className="text-OHighlightColor
                                    text-2xl sm:text-3xl
                                    pr-2" />
                    <p className="text-2xl sm:text-3xl md:text-4xl
                     font-bold">
                        TechArtista UCity
                    </p>
                </div>

                <div className="border-b-2 sm:border-b-4
                    border-dashed
                    border-SecondaryColor">
                    <p className="pb-4
                     text-base sm:text-lg md:text-xl
                     text-black">
                        725 Kingsland Ave Suite 100 <br />
                        University City, MO 63130
                    </p>
                </div>

                <p className="pt-4
                 text-base sm:text-lg md:text-xl
                 text-black">
                    We meet on Sundays, bi-weekly at TechArtista UCity from 12:00 - 3:00pm
                </p>
            </Card>

            <Map
                defaultCenter={{ lat: 38.658276, lng: -90.309074 }}
                defaultZoom={15}
                gestureHandling={'cooperative'}
                disableDefaultUI={true}
                className="rounded-lg
                mx-4 my-6 sm:my-8
                w-full max-w-[568px]
                h-[250px] sm:h-[363px]
                border-4
                border-GAccentColor"
            >
                <Marker position={{ lat: 38.658276, lng: -90.309074 }} />
            </Map>


        </section >
    )
}

export default AddressAndGoogleMapC

