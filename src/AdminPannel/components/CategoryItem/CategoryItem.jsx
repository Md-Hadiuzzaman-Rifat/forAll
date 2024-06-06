/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useDeleteCategoryMutation } from "../../../features/category/categoryApi";

const CategoryItem = ({item}) => {
    const [deleteCategory, {isLoading, isSuccess}]=useDeleteCategoryMutation()

    const handleDelete=()=>{
        console.log(item?._id);
        deleteCategory(item?._id)
    }

    return (
        <p className="m-2 border-indigo-500 bg-indigo-200 border rounded-md px-4 py-2">{item?.name} <span className="cursor-pointer text-red-600 font-bold ml-2" onClick={handleDelete}>x</span></p>
    );
};

export default CategoryItem;