import { Card } from "primereact/card"
import { Map, Marker } from '@vis.gl/react-google-maps';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AddressAndGoogleMapC = () => {

    return (
        <section className="bg-SecondaryColor flex">
            <Card className="bg-GAccentColor text-PrimaryColor p-4 m-10 w-[568px] h-[363px]">
                <div className="flex items-center justify-center pb-3">
                    <FontAwesomeIcon icon={faLocationDot} className="fa-2xl pr-2 text-OHighlightColor" />
                    <p className="text-[40px] text-weight-bold ">TechArtista UCity</p>
                </div>
                <div className="border-b-4 border-dashed border-SecondaryColor">
                    <p className="pb-4 text-black text-[20px]">
                        725 Kingsland Ave Suite 100 <br />
                        University City, MO 63130
                    </p>
                </div>
                <p className="pt-4 text-[20px] text-black">We meet twice a month on Sunday at noon.</p>
            </Card>
            {/* <Card className="bg-GAccentColor p-4 m-10 w-[568px] h-[363px]"> */}
            <Map
                defaultCenter={{ lat: 38.658276, lng: -90.309074 }}
                defaultZoom={15}
                gestureHandling={'cooperative'}
                disableDefaultUI={true}
                className="p-4 rounded-lg m-10 w-[568px] h-[363px] border-4 border-GAccentColor"
            >
                <Marker position={{ lat: 38.658276, lng: -90.309074 }} />
            </Map>
            {/* </Card> */}
        </section >
    )
}

export default AddressAndGoogleMapC

