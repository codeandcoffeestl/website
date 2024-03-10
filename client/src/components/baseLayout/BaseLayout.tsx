import { ChildrenProps } from "../../interfaces/ChildrenProps"
import Footer from "./Footer"
import NavBar from "./NavBar"

const BaseLayout = ({ children }: ChildrenProps) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default BaseLayout