import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
// import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import MainPageLayout from "./components/MainPageLayout/MainPageLayout";
import { AuthProvider } from "./context/AuthContext";
import AdminLogin from "./AdminPannel/pages/AdminLogin/AdminLogin";
// import AllUsers from "./AdminPannel/pages/AdminAllUsers/AllUsers";
import UploadProduct from "./AdminPannel/pages/Product/UploadProduct";
import CreateCategory from "./AdminPannel/pages/Category/CreateCategory";
import OrderForm from "./components/OrderForm/OrderForm";
import { useSelector } from "react-redux";
import CartIcon from "./components/CartIcon/CartIcon";
import { ToastContainer } from "react-toastify";
import EditProduct from "./AdminPannel/pages/EditProduct/EditProduct";
import SameCategory from "./components/SameCategory/SameCategory";
import ImageUpload from "./AdminPannel/components/ImageUpload/ImageUpload";
import QuickView from "./components/QuickView/QuickView";
import OrderCollection from "./AdminPannel/components/OrderCollection/OrderCollection";
import ViewOrder from "./AdminPannel/pages/ViewOrder/ViewOrder";
import Control from "./AdminPannel/pages/Control/Control";
// import PaymentPage from "./components/PaymentPage/PaymentPage";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";
import ProductTable from "./AdminPannel/components/ProductTable/ProductTable";
import GarbageCollection from "./pages/GarbageCollection/GarbageCollection";
import Invoice from "./AdminPannel/pages/Invoice/Invoice";
// import AdminLayout from "./AdminPannel/AdminLayout/AdminLayout";
import ProductListSkeleton from "./components/ProductListSkeleton/ProductListSkeleton";
// import AdminRoute from "./AdminPannel/components/AdminRoute/AdminRoute";
import Payment2 from "./components/Payment2/Payment2";
import Category from "./category/Category";
import SizeModal from "./components/SizeModal/SizeModal";
import Overview from "./AdminPannel/Overview/Overview";
// import Category from "./category/Category";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const { formCondition } = useSelector((state) => state.cartHandler);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <ToastContainer />
      <AuthProvider>
        <MainPageLayout>
          {formCondition && <OrderForm></OrderForm>}
          <CartIcon></CartIcon>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/test" element={<QuickView />}></Route>
            <Route path="/image" element={<ImageUpload />}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            {/* <Route
              path="/category/:category"
              element={<CategoryPage></CategoryPage>}
            ></Route> */}
            <Route path="/test2" element={<ProductListSkeleton/>}></Route>
            <Route
              path="/productDetails/:id"
              element={<ProductDetails />}
            ></Route>
            {/* search by category start*/}
            <Route path='/category/:categoryName' element={<Category/>}></Route>
            {/* search by category end*/}
            <Route path="/categoryPage" element={<SameCategory />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
            <Route path="/paymentPage" element={<Payment2 />}></Route>
            {/* <Route path="/paymentPage" element={<PaymentPage />}></Route> */}
            <Route path="orderSuccess" element={<OrderSuccess />}></Route>
            <Route path="/adminLogin" element={<AdminLogin />}></Route>
            {/* //  admin and dashboard page start */}
             
            <Route path="/dashboard">
            <Route path="" element={<AdminLogin />}></Route>
            <Route path="overview" element={<Overview />}></Route>
              {/* <AdminLayout> */}
                {/* <Route path="users" element={<AllUsers />}></Route> */}
                <Route path="edit/:id" element={<EditProduct />}></Route>
                <Route path="upload" element={<UploadProduct />}></Route>
               
                <Route
                  path="orders"
                  element={<OrderCollection></OrderCollection>}
                />
                <Route path="orders/:orderId" element={<ViewOrder />}></Route>
                <Route path="control" element={<Control></Control>} />
                <Route
                  path="createCategory"
                  element={<CreateCategory />}
                ></Route>
                <Route path="allProducts" element={<ProductTable />}></Route>
                <Route path="garbage" element={<GarbageCollection />}></Route>
                <Route path="orders/invoice/:id" element={<Invoice />}></Route>
              {/* </AdminLayout> */}
            </Route>

            {/* //  admin and dashboard page end */}
            <Route path="/test3" element={<SizeModal/>}></Route>
          </Routes>
        </MainPageLayout>
      </AuthProvider>
    </div>
  );
};

export default App;

