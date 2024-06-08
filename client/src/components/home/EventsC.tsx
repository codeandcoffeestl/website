import { Button } from "primereact/button"
import { Card } from "primereact/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const EventsC = () => {
    const fakeData = [
        {
            title: "Code & Coffee",
            date: "1/7, 2024 | Sunday",
            time: "12pm - 3pm CST"
        },
        {
            title: "Code & Coffee",
            date: "1/7, 2024 | Sunday",
            time: "12pm - 3pm CST"
        },
        {
            title: "Code & Coffee",
            date: "1/7, 2024 | Sunday",
            time: "12pm - 3pm CST"
        }
    ]

    return (
        <div id="events" >

            <div className="card relative bg-cover bg-center bg-coffeeBgImg">
                <div className="absolute inset-0 bg-gray-200 bg-opacity-70 z-0"></div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-10 pb-5 mb-3">
                    <h3 className="z-10 flex items-center text-black text-[36px] leading-tight font-bold mb-4 md:mb-0">
                        Upcoming Events
                    </h3>
                    <Button className="bg-OHighlightColor text-PrimaryColor font-semibold text-xl"
                        label="All Event Details"
                        link
                        onClick={() => window.open("https://www.meetup.com/code-and-coffee-st-louis/", '_blank')} />


                </div>


                <hr className="relative z-10 border-2 border-dashed border-SecondaryColor" />

                <div className="grid grid-cols-1 md:grid-cols-3 pt-2">
                    {fakeData.map((event, index) => (
                        <Card title={event.title} key={index} className="z-10">
                            <FontAwesomeIcon icon={faCalendarCheck} className="
                                                                        fa-xl 
                                                                        pr-2" />{event.date}
                            {event.time}
                        </Card>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default EventsC