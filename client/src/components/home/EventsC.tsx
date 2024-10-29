import { Button } from "primereact/button"
import { Card } from "primereact/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Key, useEffect, useState } from "react";
import IEvent from "../../interfaces/IEvent";

const EventsC = () => {
    const [data, setData] = useState<IEvent[] | undefined>(undefined);

    useEffect(() => {
        try {
            const returnedData = fetch(" https://m2l5iuxis4pw3fegfg62vkgcfq0umloq.lambda-url.us-east-1.on.aws/api/event")
            returnedData.then(async r => setData(await r.json()))
        } catch (e) {
            console.log(e)
        }
    }, []);

    function formatDateTime(date: Date) {

        const endDate = new Date(date);
        endDate.setHours(date.getHours() + 3);

        const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }).format(date);

        const formattedDayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);

        const formattedStartTime = new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: true }).format(date);
        const formattedEndTime = new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: true }).format(endDate);

        const timeZone = 'CST';

        const formattedString = <span>{formattedDate} | {formattedDayOfWeek}<br /> {formattedStartTime} - {formattedEndTime} {timeZone}</span>;

        return formattedString;
    }

    function header(title: String) {
        return (
            <h3 className="text-SecondaryColor text-2xl font-bold pt-3">{title}</h3>
        )
    }

    return (
        <div id="events" >

            <div className="card relative bg-cover bg-center bg-coffeeBgImg">
                <div className="absolute inset-0 bg-gray-200 bg-opacity-70 z-0"></div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-10 pb-5 mb-3">
                    <h3 className="z-10 flex items-center text-black text-[36px] leading-tight font-black mb-4 md:mb-0">
                        Upcoming Events
                    </h3>
                    <Button className="bg-OHighlightColor text-PrimaryColor font-semibold text-xl"
                        label="All Events"
                        link
                        onClick={() => window.open("https://www.meetup.com/code-and-coffee-st-louis/", '_blank')} />
                </div>

                <hr className="relative z-10 border-2 border-dashed border-SecondaryColor" />

                {data && <div className="grid grid-cols-1 md:grid-cols-3 pt-2 gap-2">
                    {data.map((event: IEvent, index: Number) => (
                        <Card key={index as Key}
                            header={header(event.title)}
                            className="z-10 bg-PrimaryColor text-white">

                            <p><FontAwesomeIcon icon={faCalendarCheck}
                                className="fa-xl pr-2" />
                                {formatDateTime(new Date(event.dateTime))}
                            </p>

                            <br />

                            <Button label="See Event"
                                link
                                raised
                                size="small"
                                className=" bg-OHighlightColor text-PrimaryColor "
                                onClick={() => window.open(event.eventUrl, '_blank')} />
                        </Card>
                    ))}
                </div>}
            </div>
        </div >
    )
}

export default EventsC