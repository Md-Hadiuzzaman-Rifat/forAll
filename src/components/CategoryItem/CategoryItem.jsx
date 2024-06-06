// import Image1 from "../../assets/formal.png";
import Image3 from "../../assets/fullsleeve.png";
import Image2 from "../../assets/tshirt.png";
import Image1 from "../../assets/hoodie.png";
import { Link } from "react-router-dom";

const CategoryItem = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/30 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Hoodie
                </p>
                <Link to="category/hoodie">
                  <button
                    className="cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-primary
                text-white"
                  >
                    Browse
                  </button>
                </Link>
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[280px] absolute bottom-0 right-[-3rem]"
            />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/50 to-black/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Jersey
                </p>
                <Link to="category/jersey">
                  <button
                    className="cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-primary
                text-white"
                  >
                    Browse
                  </button>
                </Link>
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[280px] absolute bottom-0 right-[-3rem]"
            />
          </div>
          {/* third col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-black/70 to-black/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Drop <br /> Shoulder
                </p>
                <Link to="category/drop shoulder">
                  <button
                    className="cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10  bg-white
                text-primary"
                  >
                    Browse
                  </button>
                </Link>
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[255px] absolute top-1/2 -translate-y-1/2 right-[-1rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
