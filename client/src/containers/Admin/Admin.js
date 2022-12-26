import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomeAdmin from "./HomeAdmin";
import HomeCategory from "./category/HomeCategory";
import { path } from "../../ultils/constant";
import HomeProduct from "./product/HomeProduct";

const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<HomeAdmin />} />
          <Route path={path.CATEGORY} element={<HomeCategory />} />
          <Route path={path.PRODUCT} element={<HomeProduct />} />
        </Route>
      </Routes>
    </>
  );
};

export default Admin;
