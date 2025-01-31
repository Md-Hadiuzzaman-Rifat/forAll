/* eslint-disable no-undef */
import Products from "../../components/Products/Products.jsx";
import Blogs from "../../components/Blogs/Blogs.jsx";
import Popup from "../../components/Popup/Popup.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import CategoryItem from "../../components/CategoryItem/CategoryItem.jsx";
// import CategoryItem2 from "../../components/CategoryItem/CategoryItem2.jsx";
import Services from "../../components/Services/Services.jsx";
import Banner from "../../components/Banner/Banner.jsx";
// import Partners from "../../components/Partners/Partners.jsx";
import denim from "/public/images/demin/4.png"
import trouser from "/public/images/demin/5.png";
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
  discount: "10% OFF",
  title: "Fine Smile",
  date: "Year 2025",
  image: denim,
  title2: "Quality Demin",
  title3: "Biggest Sale",
  title4:
    "Country`s most selling denim brand. Best for budget friendly and the students.",
  bgColor: "#2953fdb7",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "Year 2025",
  image: trouser,
  title2: "Trousers",
  title3: "Biggest Sale",
  title4:
    "Best for exercise, gym and Prayer. High quality fabric. Unisex and vey much comfortable",
  bgColor: "#a9bbcc",
};

const bars = [
  {
    style: "text-[#009688] bg-[#ccf7f1]",
    heading: "NEW ARRIVAL",
    text: "KEEP YOUR SELF TRENDY",
    textStyle: "mb-[-14px] mt-[4px]",
  },
  {
    
    text: "THE BEST QUALITY OUTFIT",
    style: "text-[#cc8119] bg-[#fcf4e9]",
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

  return (
    <div>
      
      <RightCart></RightCart>
      <Hero />
      <Notice></Notice>
      <CategoryItem />
      <Services />
      <Bars item={bars[0]} id="new arrival"></Bars> 
      {/* <NewCategory></NewCategory> */}
      {/* // new ar   */}
      {
        !isLoading && isSuccess && data && <SampleProduct sub="new arrival" data={data}></SampleProduct>
      }
      {/* {
        !isLoading && isSuccess && data && <Products sub="new arrival" data={data}></Products>
      } */}
      
      <Bars item={bars[1]} id="top rated"></Bars>
       {/* top rated  */}
       {
        isLoading && <ProductListSkeleton/>
       }
      {
        !isLoading && isSuccess && data && <SampleProduct data={data} sub="top rated"></SampleProduct>
      }
      {
        !isLoading && isSuccess && data && <SampleProduct data={data}></SampleProduct>
      }
      <Banner data={BannerData} />
      <Bars item={bars[2]} id="flash deals"></Bars>
      {/* // flash deals   */}
      {
        !isLoading && isSuccess && data && <Products sub="flash deals" data={data}></Products>
      }
      <Banner data={BannerData2} />
      <Blogs />
      {/* <Partners /> */}
      {/* <AppStore></AppStore> */}
      <FooterBanner></FooterBanner>
      <ShoppingCartForm></ShoppingCartForm>
      <Popup />
    </div>
  );
};
export default Home;
