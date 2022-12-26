import React, { useState } from "react";
import { Link } from "react-router-dom";
import icons from "../../ultils/icons";
import { path } from "../../ultils/constant";
const Header = () => {
  const [menuCategories, setMenuCategories] = useState(false);

  const handleSubmitMenu = () => {
    menuCategories ? setMenuCategories(false) : setMenuCategories(true);
  };

  const { FiList, BsList, RiArrowDropDownLine, MdNavigateNext } = icons;
  return (
    <div>
      <div className="fixed  shadow-md w-full  shadow-gray-500 ">
        <div className="flex justify-between">
          <div className="w-[20%] py-4  "> Admin</div>
          <div className="bg-white w-[80%] py-4 "> Admin</div>
        </div>
      </div>
      <div className="flex flex-col gap-3  ">
        <div className="mt-16  flex flex-col ">
          <div className="bg-[#1d2531]  px-4 py-2">
            <button
              className="text-[16px] text-start flex  items-center `"
              onClick={() => handleSubmitMenu()}
            >
              <span className="ml-2">
                <BsList size={20} />
              </span>
              <span className="px-2 mr-6  bg-[#1d2531]">Quản lý sản phẩm</span>
              {menuCategories ? (
                <span className="">
                  <RiArrowDropDownLine size={20} color="white" />
                </span>
              ) : (
                <span className="  ">
                  <MdNavigateNext size={16} color="white" />
                </span>
              )}
            </button>
          </div>
          {menuCategories && (
            <div className=" bg-[#1d2531]">
              <Link
                to="/admin/category"
                className="text-start flex  items-center  ml-4"
              >
                <span className="p-2">
                  <MdNavigateNext size={14} color="white" />
                </span>
                <span className="capitalize"> loại sản phẩm</span>
              </Link>
              <Link
                to="/admin/product"
                className="text-start flex  items-center  ml-4 "
              >
                <span className="p-2">
                  <MdNavigateNext size={14} color="white" />
                </span>
                <span className="capitalize"> sản phẩm</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
