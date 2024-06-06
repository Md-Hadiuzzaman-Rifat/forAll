import AdminLayout from "../../AdminPannel/AdminLayout/AdminLayout";
import GarbageProduct from "../../components/GarbageProduct/GarbageProduct";
import { useGetGarbageQuery } from "../../features/garbage/garbageApi";

const GarbageCollection = () => {
  const { data, isSuccess, isError, isLoading } = useGetGarbageQuery();

  return (
    <AdminLayout>
    <div className="container">
      {
        !isLoading && data?.length == 0 && <h3>Garbage is Clear. Thank you.</h3> 
      }
      {!isLoading && isSuccess && data?.length > 0 && (
        <div className="grid lg:grid-cols-3 gap-2 grid-cols-1 md:grid-flow-col-2">
          {data?.map((item) => (
            <GarbageProduct data={item} key={item._id} />
          ))}
        </div>
      )}
      {isLoading && "Sorry for loading.."}
      {!isLoading && isError && "Error occurred"}
    </div>
    </AdminLayout>
  );
};

export default GarbageCollection;
