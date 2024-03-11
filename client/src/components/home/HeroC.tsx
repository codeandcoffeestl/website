import { Button } from "primereact/button"

const HeroC = () => {
    return (

        <div className="p-hero bg-color-black">
            <div className="" >    
                <section className="">
                    <p className="p-hero-header text-6xl">
                        A Meetup community <br/>
                        for developers to grow <br/>
                        and make friends  - St Louis
                    </p>
                    <p className="p-hero-calltoaction text-SecondaryColor">
                        A central hub for digital space in the city
                    </p>
                    <div className="min-w-full flex ">
                    <Button>
                        Our Sponsors
                    </Button>
                    <Button>
                        Sign Up for Volunterer 
                    </Button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HeroC