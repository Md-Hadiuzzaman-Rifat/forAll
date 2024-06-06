/* eslint-disable no-unused-vars */
//  eslint-disable no-unused-vars
import axios from "axios";
import { useEffect, useState } from "react";

function Test() {
  const [file, setFile] = useState();
  const [category, setCategory] = useState("");
  const [find, setFind] = useState(null);
  console.log(find);

  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);
    axios
      .post(`${import.meta.env.VITE_ROOT_API}/upload`, formData)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((er) => console.log(er));
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ROOT_API}/get-upload`)
      .then((res) => res.json())
      .then((data) => setFind(data));
  }, []);

  const handleDelete = (imageName) => {
    console.log(imageName);
    fetch(`${import.meta.env.VITE_ROOT_API}/${imageName}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="container mx-auto max-w-2xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input type="text" onChange={(e) => setCategory(e.target.value)} />
      <button type="button" onClick={upload}>
        Upload
      </button>

      <div className="grid mt-4 p-4 bg-gray-100 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {find?.map((item) => (
          <div key={item._id} className="border-2  overflow-hidden">
            <div className="flex justify-between font-semibold bg-white px-4 text-xl items-center">
              <p className="">{item?.category}</p>
              <p
                onClick={() => handleDelete(item?.image)}
                className="cursor-pointer text-red-500"
              >
                x
              </p>
            </div>
            <div className="max-w-[300px]">
              <img
                key={item._id}
                src={`${import.meta.env.VITE_ROOT_API}/Images/${item.image}`}
                className="object-cover"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Test;
