import { Button } from "primereact/button"


const HeroC = () => {


    return (
        <div className="p-hero" id="hero">
            <div className="p-4">
                <section className="">
                    <p className="p-hero-header lg:text-6xl/[1.5em] md:text-5xl/[1.5em] sm:text-4xl/[1.5em] text-3xl/[1.5em]">
                        A Meetup community <br/> 
                        for developers to grow <br/>
                        and make friends  - St Louis
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <div className="min-w-full flex ">
                    <Button 
                    className="p-hero-buttons text-xl mr-3 bg-OHighlightColor text-PrimaryColor font-RockNROll One "
                    onClick={()=>window.open("https://donorbox.org/code-and-coffee-stl?utm_medium=qrcode&utm_source=qrcode")}>
                        Donate
                    </Button>
                    <Button className="bg-OHighlightColor text-PrimaryColor font-semibold text-xl"
                    onClick={()=>window.open("https://docs.google.com/forms/d/1bs_xMVCOpMkIdNAlsiEB1S6VPNS6BFrV461pRtyFieA/viewform?edit_requested=true")}
                    >
                        Volunterer
                    </Button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HeroC