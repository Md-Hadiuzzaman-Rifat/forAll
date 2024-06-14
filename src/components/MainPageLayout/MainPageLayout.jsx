// import Footer from "../Footer/Footer";
// import Navbar from "../Navbar/Navbar";
// import Navbar2 from "../Navbar2/Navbar2";

import Navbar3 from "../Navbar3/Navbar3";

// eslint-disable-next-line react/prop-types
const MainPageLayout = ({children}) => {

    return (
        <div>
            <Navbar3></Navbar3>
            {/* <Navbar></Navbar> */}
            {/* <Navbar2></Navbar2> */}
            
            {children}
        </div>
    );
};

export default MainPageLayout;