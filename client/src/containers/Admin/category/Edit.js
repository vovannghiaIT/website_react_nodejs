import React, { useState, useEffect } from "react";
import icons from "../../../ultils/icons";
import { apiUploadImages } from "../../../services";
import { apiGetIdCategories } from "../../../services";

const { FaCamera, ImBin } = icons;
const Edit = ({ modalEdit, setmodalEdit, setsubmitEdit, submitEdit }) => {
  const [imagesPreview, setImagesPreview] = useState([]);

  const [categoryId, setCategoryId] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const id = submitEdit;
  const fetchData = async () => {
    console.log(id);

    //  setCategoryId(await apiGetIdCategories(submitEdit));
  };

  //console.log(categoryId);

  const [payloadEdit, setPayloadEdit] = useState({
    name: "",
    code: "",
    slug: "",
    images: "",
    parentid: "0",
    value: "",
    status: 1,
  });

  const handleDeleteImage = (image) => {
    setImagesPreview((prev) => prev?.filter((item) => item !== image));
    setPayloadEdit((prev) => ({
      ...prev,
      images: prev.images?.filter((item) => item !== image),
    }));
  };

  const handleFileEdit = async (e) => {
    // e.stopPropagation();
    // const files = e.target.files;
    // //biến imhg chứa link ảnh
    // let images = [];
    // const formData = new FormData();
    // for (let i of files) {
    //   formData.append("file", i);
    //   formData.append(
    //     "upload_preset",
    //     process.env.REACT_APP_UPLOAD_ASSETS_NAME
    //   );
    //   const response = await apiUploadImages(formData);
    //   // console.log(response);
    //   if (response.status === 200) {
    //     images = [...images, response.data?.secure_url];
    //   }
    //   setImagesPreview((prev) => [...prev, ...images]);
    //   setPayload((prev) => ({
    //     ...prev,
    //     images: [...prev.images, ...images],
    //   }));
    //   // setPayload((prev) => ({
    //   //   ...prev,
    //   //   images: JSON.stringify([...payload.images, ...images]),
    //   // }));
    // }
  };

  return (
    <>
      {modalEdit && (
        <>
          <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 ">
            <div className="flex items-center justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-900 opacity-75" />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                &#8203;
              </span>
              <div className="mt-[100px] inline-block align-center bg-white rounded-lg text-left  shadow-xl transform transition-all w-[70%]">
                <div className="bg-white flex gap-5  px-4 pt-5">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-100 p-2 mt-2 mb-3"
                      //  value={submitEdit.name}
                      onChange={(e) =>
                        setPayloadEdit((prev) => ({
                          ...prev,
                          ["name"]: e.target.value,
                        }))
                      }
                    />
                    <label>Values</label>
                    <input
                      type="text"
                      id="value"
                      // value={submitEdit.value}
                      className="w-full bg-gray-100 p-2 mt-2 mb-3"
                      onChange={(e) =>
                        setPayloadEdit((prev) => ({
                          ...prev,
                          ["value"]: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="w-[60%]">
                    <div className="w-full border-[3px] border-dashed  h-[150px] flex items-center justify-center   ">
                      <label
                        htmlFor="images"
                        className="p-5 cursor-pointer flex items-center flex-col  justify-center gap-2"
                      >
                        <FaCamera size={50} color="blue" />
                        <span>Thêm ảnh</span>
                      </label>
                      <input
                        type="file"
                        hidden
                        id="images"
                        className="w-full bg-gray-100 p-2 mt-2 mb-3"
                        onChange={handleFileEdit}
                        multiple
                      />
                    </div>
                    {/* multiple chọn được nhìu hình */}
                    <div className="mt-2 ">
                      {imagesPreview?.map((item) => {
                        return (
                          <div key={item} className="relative w-1/3 h-1/3 ">
                            <img
                              src={item}
                              alt="preview"
                              className="w-10 h-10 object-cover rounded-md"
                            />
                            <span
                              title="Xóa"
                              onClick={() => handleDeleteImage(item)}
                              className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full"
                            >
                              <ImBin />
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 px-4 py-3 text-right">
                  <button
                    type="button"
                    className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                    onClick={() => setmodalEdit(false)}
                  >
                    <i className="fas fa-times"></i> Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                  >
                    <i className="fas fa-plus"></i> Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Edit;
