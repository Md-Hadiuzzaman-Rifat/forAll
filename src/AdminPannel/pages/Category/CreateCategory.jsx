/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useAddSubCategoryMutation, useGetSubCategoryQuery } from "../../../features/subCategory/subCategoryApi";
import SubCategory from "../../components/SubCategoryItem/SubCategoryItem";
import CategoryForm from "../../../components/CategoryForm/CategoryForm";
import Modal from "../../../components/Modal/Modal"
import AdminLayout from "../../AdminLayout/AdminLayout";

const CreateCategory = () => {
  const [addNewCategory, setAddNewCategory] = useState("");
  const [newSubCategory, setNewSubCategory] = useState("");


  const [addSubCategory, { data:subData, isError:subError, isLoading: subLoading, isSuccess:addSuccess }] =
    useAddSubCategoryMutation();

  const {data:getSubCatData, isSuccess:getSubCatSuccess }= useGetSubCategoryQuery()


  const handleSubCategory = (e) => {
    e.preventDefault();
    addSubCategory({name:newSubCategory?.toLowerCase()})
  };
  useEffect(()=>{
    if(addSuccess){
      setNewSubCategory("")
    }
  },[addSuccess])

  return (
    <AdminLayout>
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      {/* {
          addSuccess && <Modal></Modal>
      } */}
      <h1 className="text-3xl font-semibold">
        Create Category and SubCategory
      </h1>
    
      <CategoryForm></CategoryForm>

      <form onSubmit={handleSubCategory} className="flex gap-2 ">
        <div>
          <input
            onChange={(e) => setNewSubCategory(e.target.value)}
            value={newSubCategory}
            type="text"
            placeholder="Subcategory Name"
            name="subCategory"
            id="subCategory"
            autoComplete="family-name"
            className="block min-w-[200px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 font-semibold text-white rounded-lg px-4 text-base"
        >
          Add Subcategory
        </button>
      </form>
      <div className="my-4 text-gray-800 flex flex-wrap font-semibold">
        {
          subLoading && <p>Loading...</p>
        }
        {
          !subLoading && getSubCatData?.length == 0 && <p className="text-base font-abc">No Subcategory Added.</p>
        }
      {
          getSubCatSuccess && getSubCatData?.length > 0 && getSubCatData.map((item) => (
            <SubCategory key={item._id} item={item} />
          ))
        }
      </div>
    </div>
    </AdminLayout>
  );
};

export default CreateCategory;
