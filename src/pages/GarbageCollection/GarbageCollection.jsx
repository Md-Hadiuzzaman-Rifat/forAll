import AdminLayout from "../../AdminPannel/AdminLayout/AdminLayout";
import GarbageProduct from "../../components/GarbageProduct/GarbageProduct";
import { useGetGarbageQuery } from "../../features/garbage/garbageApi";
import { FaRegTrashCan } from "react-icons/fa6";

const GarbageCollection = () => {
  const { data, isSuccess, isError, isLoading } = useGetGarbageQuery();

  return (
    <AdminLayout>
      <div className="container">
        {!isLoading && data?.length == 0 && (
          <div className="w-full h-screen flex justify-center items-center">
            <div className="mb-52 flex flex-col items-center gap-4">
              <FaRegTrashCan className="text-8xl  text-gray-200 font-bold" />

              <h3 className="font-abc text-2xl md:text-4xl font-bold text-gray-500">Garbage is Clear. Thank you.</h3>
            </div>
          </div>
        )}
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
