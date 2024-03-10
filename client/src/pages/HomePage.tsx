import AboutC from "../components/home/AboutC"
import AddressAndGoogleMapC from "../components/home/AddressAndGoogleMapC"
import ContactUsC from "../components/home/ContactUsC"
import EventsC from "../components/home/EventsC"
import HeroC from "../components/home/HeroC"
import OurSponsorsC from "../components/home/OurSponsorsC"
import PastSpeakersCarouselC from "../components/home/PastSpeakersCarouselC"

const HomePage = () => {
    return (
        <>
            <HeroC />
            <AboutC />
            <EventsC />
            <AddressAndGoogleMapC />
            <PastSpeakersCarouselC />
            <OurSponsorsC />
            <ContactUsC />
        </>
    )
}

export default HomePage
