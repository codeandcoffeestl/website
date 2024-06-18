import React, { useState } from "react";
import "../../index.css";

type ButtonStyle = React.CSSProperties & {
    ':hover'?: React.CSSProperties;
  };

const HeroC = () => {
    const handleClick = (anchor: string) => () => {
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    const buttonStyle: ButtonStyle = {
        fontFamily: 'Avenir, sans-serif',
        width: '200px', // Fixed width for both buttons
        padding: '10px', // Consistent padding
        transition: 'transform 0.1s ease-in-out',
    };

    const hoverStyle: React.CSSProperties = {
        fontWeight: 'bold',
        borderColor: '#FFA500',
        transform: 'scale(1.02)',
    };

    const handleMouseEnter = (buttonName: string) => {
        setHoveredButton(buttonName);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    return (
        <div className="p-hero " id="hero">
            <div className="p-4">
                <section className="">
                    <p className="p-hero-header lg:text-6xl/[1.5em] md:text-5xl/[1.5em] sm:text-4xl/[1.5em] text-3xl/[1.5em]">
                        A Meetup community <br/> 
                        for developers to grow <br/>
                        and make friends  - St Louis
                    </p>
                    <br/>
                    <p className="p-hero-calltoaction text-SecondaryColor lg:text-4xl md:text-3xl sm:text-2xl text-1xl ">
                        A central hub for digital space in the city
                    </p>
                    <br/>
                    <br/>
                    <div className="min-w-full flex ">
                    <button 
                        style={hoveredButton === 'oursponsors' ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
                        onMouseEnter={() => handleMouseEnter('oursponsors')}
                        onMouseLeave={handleMouseLeave}
                        className="mr-5"
                        onClick={handleClick('oursponsors')}
                    >
                        Our Sponsors
                    </button>
                    <button
                        style={hoveredButton === 'volunteer' ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
                        onMouseEnter={() => handleMouseEnter('volunteer')}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick('volunteer')}
                    >
                        Sign Up for Volunterer 
                    </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HeroC