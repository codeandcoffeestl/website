import { TieredMenu } from 'primereact/tieredmenu';
import { MenuItem } from 'primereact/menuitem';
import { Card } from 'primereact/card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faDiscord,
    faXTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    const itemRenderer = (item: MenuItem) => (
        <a className="flex p-menuitem-link text-white">
            <span className="mx-2 ">{item.label}</span>
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
            label: 'About',
            command: handleClick('about'),
            template: itemRenderer,
        },
        {
            label: 'Events',
            command: handleClick('events')
            ,
            template: itemRenderer,
        },
        {
            label: 'Contact',
            command: handleClick('contact'),
            template: itemRenderer,
        },
    ];

    const socials = [
        {
            icon: faDiscord,
            url: "https://discord.com/",
        },
        {
            icon: faLinkedin,
            url: "https://www.linkedin.com",
        },
        {
            icon: faXTwitter,
            url: "https://www.x.com",
        },
    ];




    return (
        <footer className="bg-PrimaryColor flex">
            <TieredMenu
                className="bg-PrimaryColor"
                model={items}
            />
            <Card className="bg-PrimaryColor text-white flex-grow">
                <h4>Visit Us</h4>
                <br />
                {socials.map((social) => (
                    <a href={social.url}>
                        <FontAwesomeIcon icon={social.icon} className="fa-2xl fa-fw fa-solid" />
                    </a>
                ))}
            </Card>
            <Card className="bg-PrimaryColor text-white">
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" width="100" className="mr-2 grid baseline"></img>
                <p className='text-xs place-content-baseline'>@2024 Code and Coffee Developers</p>
            </Card>
        </footer>
    )
}

export default Footer;