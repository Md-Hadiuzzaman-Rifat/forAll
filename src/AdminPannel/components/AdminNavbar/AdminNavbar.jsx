import { Link } from "react-router-dom";
import UploadProduct from "../../pages/Product/UploadProduct";
import GarbageCollection from "../../../pages/GarbageCollection/GarbageCollection";
import ProductTable from "../ProductTable/ProductTable";
import CreateCategory from "../../pages/Category/CreateCategory";
import OrderCollection from "../OrderCollection/OrderCollection";

const AdminNavbar = () => {
  return (
    <div>
      <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900">
        <div className="max-w-scree\n-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/dashboard/upload" element={<UploadProduct />}>
                  Upload
                </Link>
                <Link to="/dashboard/garbage" element={<GarbageCollection />}>
                  Garbage
                </Link>
                <Link to="/dashboard/allProducts" element={<ProductTable />}>
                  Products
                </Link>
                <Link
                  to="/dashboard/createCategory"
                  element={<CreateCategory />}
                >
                  Category
                </Link>
                <Link to="/dashboard/orders" element={<OrderCollection />}>
                  Category
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
