import React from "react";
import RolesPopup from "./aboutComponents/rolesPopup";
import { Button } from "primereact/button";
import BenefitsPopup from "./aboutComponents/BenefitsPopup.tsx";

const AboutC = () => {
    const [showRolesPopup, setShowRolesPopup] = React.useState(false);
    const [showBenefitsPopup, setShowBenefitsPopup] = React.useState(false);
    const handlePopupToggle = (popup:string) => {
    if(popup==="role")
        setShowRolesPopup(!showRolesPopup);
    if(popup==="benefits"){
        setShowBenefitsPopup(!showBenefitsPopup);
    }
    };

    const closeRolesPopup= () => {
        setShowRolesPopup(false);
    };
    const closeBenefitsPopup= () => {
        setShowBenefitsPopup(false);
    };

    return (
        <div id="about" className="bg-SecondaryColor p-10 flex justify-center">

            <div className="bg-WAccentColor py-4 px-6 md:py-10 md:px-20 max-w-3xl shadow-xl">
             
                <h2 className="text-black text-3xl font-bold mb-1 text-center md:text-left">
                    About Code & Coffee St.Louis</h2>

                <hr className="border-2 border-dashed border-SecondaryColor px-5" />

                <p className="text-black mt-5 mb-4 text-center md:text-left">
                    Code & Coffee - STL is a meetup that focuses on building the St. Louis development community in ways that put our members and their interests first. Whether a student, highly experienced professional or tech entrepreneur, we create opportunities for our members to network, gain access to mentorship and collaborate to push their individual and collective projects forward. We address the need to keep up with the rapid advancements in technology by supporting the people in their businesses, industries and careers.
                </p>

                <div className="flex justify-center items-center gap-2 flex-col sm:flex-row mb-0">
                    <div className="button-wrapper">
                        <Button
                            className="p2"
                            label="Contributors List"
                    onClick={()=>handlePopupToggle("role")}
                        />
                    </div>
                    <div className="button-wrapper">
                        <Button
                            className="p2"
                            label="Member Benefits"
                    onClick={()=>handlePopupToggle("benefits")}
                        />
                    </div>
                </div>               
                
                <RolesPopup trigger={showRolesPopup} closePopup={closeRolesPopup}>
                    <div className="flex flex-col w-full"  style={{ paddingLeft: '1.2rem', paddingRight: '1.2rem' }}>
                        <h2 className="text-black text-3xl font-bold mb-1 text-center md:text-left">
                            Code and Coffee St.Louis Volunteers</h2>

                        <hr className="border-2 border-dashed border-SecondaryColor px-5 mb-1" />
                    </div>
                </RolesPopup>
                <BenefitsPopup trigger={showBenefitsPopup} closePopup={closeBenefitsPopup} />
            </div>
        </div>
    );
};

export default AboutC