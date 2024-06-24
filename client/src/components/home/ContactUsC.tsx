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
                    width="740"
                    height="776"
                    className='opacity-90'
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0">Loading…</iframe>
            </div>
        </div >
    )
}
