import { TieredMenu } from 'primereact/tieredmenu';
import { MenuItem } from 'primereact/menuitem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faInstagram,
    faMeetup
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    const itemRenderer = (item: MenuItem) => (
        <a className="flex p-menuitem-link text-WAccentColor">
            <span className="mx-5">{item.label}</span>
        </a>
    );

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

    const items: MenuItem[] = [
        {
            id: "Foot1",
            label: 'About',
            command: handleClick('about'),
            template: itemRenderer,
        },
        {
            id: "Foot2",
            label: 'Events',
            command: handleClick('events')
            ,
            template: itemRenderer,
        },
        {
            id: "Foot3",
            label: 'Contact',
            command: handleClick('contact'),
            template: itemRenderer,
        },
    ];

    const socials = [
        {
            id: "FootIcon1",
            icon: faDiscord,
            url: "https://discord.gg/RyA8cuu5Rq",
        },
        {
            id: "FootIcon2",
            icon: faInstagram,
            url: "https://www.instagram.com/codecoffeestl/",
        },
        {
            id: "FootIcon3",
            icon: faMeetup,
            url: "https://www.meetup.com/code-and-coffee-st-louis/",
        },
    ];

    return (
        <footer className="bg-PrimaryColor flex  justify-between items-center p-4 text-WAccentColor">
            <TieredMenu
                className="bg-PrimaryColor"
                model={items}
            />
            <div className="flex-grow">
                <br />
                <h4 className="text-lg font-medium">Visit Us</h4>
                <br />
                {socials.map((social, index) => (
                    <a key={index + "socialIconLink"} href={social.url} className="bg-transparent" style={{ backgroundColor: 'transparent'}}>
                        <FontAwesomeIcon icon={social.icon} className="fa-2xl fa-fw fa-solid fa-text m-1 md:m-3 
                        hover:text-SecondaryColor hover:shadow-white-lg rounded-sm text-WAccentColor hover:bg-slate-100" />
                    </a>
                ))}
            </div>
            
            <div className="bg-PrimaryColor text-WAccentColor">
                <br />
                <div className="flex flex-col items-end">
                    <a href='#'>
                        <img 
                            alt="logo" 
                            src="../../public/code&coffee-original.png" 
                            width="100" 
                            className="mb-2 mr-4 ml-[20px] h-12 w-30 md:h-20 md:w-48" 
                        />
                    </a>
                    <p className='text-xs mr-4 text-right'>@2024 Code and Coffee Developers </p>
                </div>
            </div>
        </footer >
    )
}

export default Footer;