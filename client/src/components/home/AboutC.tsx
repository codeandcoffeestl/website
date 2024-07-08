import React from "react";
import RolesPopup from "./aboutComponents/rolesPopup";
import { Button } from "primereact/button";

const AboutC = () => {
    const [showPopup, setShowPopup] = React.useState(false);
    const handlePopupToggle = () => {
        setShowPopup(!showPopup);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div id="about" className="bg-SecondaryColor p-10 flex justify-center">

            <div className="bg-WAccentColor py-4 px-6 md:py-10 md:px-20 max-w-3xl shadow-xl" 
            >
             
                <h2 className="text-black text-3xl font-bold mb-1 text-center md:text-left">
                    About Code & Coffee St.Louis</h2>

                <hr className="border-2 border-dashed border-SecondaryColor px-5" />

                <p className="text-black mt-5 mb-4 text-center md:text-left">
                    Code and Coffee is an inclusive, informal co-working session for anyone in the tech space! 
                    People of all skill level attend, and we love it that way.
                    Many people (optionally) bring projects ot work on, and many other people (optioonally) socialize the entire time.
                    It's completely up to you!
                </p>

                <Button 
                    label="Contributes List >>"
                    onClick={handlePopupToggle}
                />
                <RolesPopup trigger={showPopup} closePopup={closePopup}>
                    <div className="flex flex-col w-full"  style={{ paddingLeft: '1.2rem', paddingRight: '1.2rem' }}>
                        <h2 className="text-black text-3xl font-bold mb-1 text-center md:text-left">
                            Who Keep Code and Coffee St.Louis Running</h2>

                        <hr className="border-2 border-dashed border-SecondaryColor px-5 mb-1" />
                    </div>
                </RolesPopup>
            </div>
        </div>
    );
};

export default AboutC