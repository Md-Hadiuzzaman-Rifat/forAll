// import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

// eslint-disable-next-line react/prop-types
const MainPageLayout = ({children}) => {

    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainPageLayout;