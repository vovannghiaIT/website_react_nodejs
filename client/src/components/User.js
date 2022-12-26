import React, { useEffect } from "react";
import { useSelector } from "react-redux";


const User = () => {
  // const { currentData } = useSelector((state) => state.user);
  // console.log(currentData.firstName);
 
  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col">
        <span>
          Xin chào, <span className="font-semibold">name</span>
        </span>
        {/* <span>
          Mã tài khoản:{" "}
          <span className="font-medium">{`${currentData?.id?.slice(
            0,
            10
          )}...`}</span>
        </span> */}
      </div>
    </div>
  );
};

export default User;
