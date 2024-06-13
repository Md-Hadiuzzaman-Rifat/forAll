// import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import Navbar2 from "../Navbar2/Navbar2";

// eslint-disable-next-line react/prop-types
const MainPageLayout = ({children}) => {

    return (
        <div>
            <Navbar></Navbar>
            {/* <Navbar2></Navbar2> */}
            
            {children}
        </div>
    );
};

export default MainPageLayout;