import React from "react";

const indexs = [0];
const ItemsImg = ({ images }) => {
  return (
    <div>
      {images.length > 0 &&
        images
          .filter((i, index) => indexs.some((i) => i === index))
          ?.map((i, index) => {
            return (
              <img
                key={index}
                className="h-10 w-10 rounded-full"
                src={i}
                alt="anh category"
              />
            );
          })}
    </div>
  );
};

export default ItemsImg;
