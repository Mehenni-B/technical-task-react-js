import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../components/blocks/_index";

const RootLayout: React.FC = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
}

export default RootLayout;