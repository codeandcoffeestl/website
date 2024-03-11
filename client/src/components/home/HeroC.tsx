import { Button } from "primereact/button"


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
    return (
        
        <div className="p-hero" id="hero">
            <div className="p-4">
                <section className="">
                    <p className="p-hero-header lg:text-6xl md:text-5xl sm:text-4xl text-2xl">
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
                    <Button 
                    className="p-hero-buttons text-xl mr-3 bg-YHighlightColor text-PrimaryColor "
                    onClick={handleClick('oursponsors')}>
                        Our Sponsors
                    </Button>
                    <Button className="bg-YHighlightColor text-PrimaryColor font-semibold text-xl">
                        Sign Up for Volunterer 
                    </Button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HeroC