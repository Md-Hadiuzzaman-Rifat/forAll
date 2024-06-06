/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../features/product/productApi";
import EditForm from "./EditForm";
import { useGetCategoryQuery } from "../../../features/category/categoryApi";
import AdminLayout from "../../AdminLayout/AdminLayout";


const EditProduct = () => {
  const { id } = useParams();

  const { data, isError, isLoading, isSuccess } = useGetSingleProductQuery(id);

  return (
    <div>
      <AdminLayout>
      {
        isLoading && "Sorry for loading..."
      }
      {
        !isLoading && isSuccess && data?.description && <EditForm data={data}/> 
      }
      </AdminLayout>
    </div>
  );
};

export default EditProduct;

