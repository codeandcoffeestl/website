import ContactUsPic from "../../assets/contactUs.png"

export default function ContactUsC() {


    return (
        <div id="contact" className='card' style={{
            backgroundImage: `url(${ContactUsPic})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
        }}>
            <div className="flex justify-center">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScsnMtCqoNHPxJy0v0y3Yw9OtWjiLwMXSKTRQVaUxBBS_g94Q/viewform?embedded=true"
                        width="720"
                        height="850"
                        className="opacity-90
                                    h-[1020px]
                                    sm:h-[830px]
                                    md:h-[830px]
                                    lg:h-[830px]"
                >Loading…</iframe>
            </div>
        </div >
    )
}
