import { Button } from "primereact/button"


const HeroC = () => {


    return (
        <div className="p-hero" id="hero">
            <div className="p-4">
                <section>
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
                        link
                        label="Donate"

                    className="mr-3"
                    onClick={()=>window.open("https://donorbox.org/code-and-coffee-stl?utm_medium=qrcode&utm_source=qrcode")}
                    />

                    <Button
                        label="Volunteer"
                        link
                    onClick={()=>window.open("https://docs.google.com/forms/d/1bs_xMVCOpMkIdNAlsiEB1S6VPNS6BFrV461pRtyFieA/viewform?edit_requested=true")}
                    />


                    </div>
                </section>
            </div>
        </div>
    )
}

export default HeroC