/* eslint-disable no-undef */
import Products from "../../components/Products/Products.jsx";
import Blogs from "../../components/Blogs/Blogs.jsx";
import Popup from "../../components/Popup/Popup.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import CategoryItem from "../../components/CategoryItem/CategoryItem.jsx";
// import CategoryItem2 from "../../components/CategoryItem/CategoryItem2.jsx";
import Services from "../../components/Services/Services.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Partners from "../../components/Partners/Partners.jsx";
import headphone from "../../assets/red-shirt.png";
import smartwatch2 from "../../assets/show.png";
import SampleProduct from "../../components/SampleProduct/SampleProduct.jsx";
// import AppStore from "../../components/AppStore/AppStore.jsx";
import FooterBanner from "../../components/FooterBanner/FooterBanner.jsx";
import ShoppingCartForm from "../../components/ShoppingCartForm/ShoppingCartForm.jsx";
// import NewCategory from "../../components/NewCategory/NewCategory.jsx";
import Bars from "../../components/Bars/Bars.jsx";
import RightCart from "../../components/RightCart/RightCart.jsx";
import Notice from "../../components/Notice/Notice.jsx";
import { useGetProductsQuery } from "../../features/product/productApi.js";
import ProductListSkeleton from "../../components/ProductListSkeleton/ProductListSkeleton.jsx";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Summer Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#ff848a",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Summer Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#cccccc",
};

const bars = [
  {
    style: "text-[#cc8119] bg-[#fcf4e9]",
    heading: "NEW ARRIVAL",
    text: "",
  },
  {
    style: "text-[#009688] bg-[#ccf7f1]",
    text: "THE BEST QUALITY OUTFIT",
    heading: "TOP RATED",
    textStyle: "mb-[-14px] mt-[4px]",
  },
  {
    style: "text-[#9059a1] bg-[#d5c1dc]",
    text: "THE BEST QUALITY OUTFIT",
    heading: "FLASH DEALS",
    textStyle: "mb-[-14px] mt-[4px]",
  },
];
const Home = () => {
  const { data, isSuccess, isLoading } = useGetProductsQuery();
  // console.log(import.meta.env.VITE_ROOT_API);
  return (
    <div>
      <RightCart></RightCart>
      <Hero />
      
      <Notice></Notice>
      <Bars item={bars[0]}></Bars> 
      {/* <NewCategory></NewCategory> */}
      <CategoryItem />
      <Services />
      <Bars item={bars[1]} id="top rated"></Bars>
       {/* top rated  */}
       {
        isLoading && <ProductListSkeleton/>
       }
      {
        !isLoading && isSuccess && data && <SampleProduct data={data}></SampleProduct>
      }
      <Banner data={BannerData} />
      <Bars item={bars[2]} id="flash deals"></Bars>
      {/* // flash deals   */}
      {
        !isLoading && isSuccess && data && <Products data={data}></Products>
      }
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      {/* <AppStore></AppStore> */}
      <FooterBanner></FooterBanner>
      <ShoppingCartForm></ShoppingCartForm>
      <Popup />
    </div>
  );
};
export default Home;
