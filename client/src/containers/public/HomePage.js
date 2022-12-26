import React from "react";
import imgSlider from "../../assets/img/big_bn_slide.png";
import Slider from "react-slick";
import icons from "../../ultils/icons";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}
const { GrPrevious, GrNext } = icons;

const HomePage = () => {
  const slider = React.useRef(null);
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full border border-1 overflow-hidden bg-gray-200 h-[4000px]">
      <img src={imgSlider} alt="img slider " />
      <div className="w-4/5 mx-auto absolute top-[300px] left-32 rounded-lg overflow-hidden">
        <Slider ref={slider} {...settings}>
          <div>
            <h3 className="mr-2">
              <img
                src="./img/slide-img1.png"
                alt="anh"
                className="rounded-lg"
              />
            </h3>
          </div>
          <div>
            <h3 className="mr-2">
              <img
                src="./img/slide-img2.png"
                alt="anh"
                className="rounded-lg"
              />
            </h3>
          </div>
          <div>
            <h3 className="mr-2">
              <img
                src="./img/slide-img1.png"
                alt="anh"
                className="rounded-lg"
              />
            </h3>
          </div>
        </Slider>
        <div className="overflow-hidden w-4/5">
          <button
            onClick={() => slider?.current?.slickPrev()}
            className=" absolute top-10 left-0 pt-11 pr-4 pb-10 pl-0 text-left  clip__pathPrev  bg-gray-100"
          >
            <GrNext />
          </button>
          <button
            onClick={() => slider?.current?.slickNext()}
            className="absolute top-10 right-1 pt-10 pr-0 pb-11 pl-4 clip__pathNext  bg-gray-100"
          >
            <GrPrevious />
          </button>
        </div>
      </div>
      <div className="w-4/5   mx-auto mt-24 flex justify-center gap-3">
        <div className="w-[25%] bg-white py-6 text-[17px] px-2 flex items-center gap-3  justify-start rounded-lg font-light">
          <span>
            <img src="./img/img_protect.png" />
          </span>
          <span>Sản phẩm an toàn</span>
        </div>
        <div className="w-[25%] bg-white py-6 text-[17px] px-2 flex items-center gap-3  justify-start rounded-lg font-light">
          <span>
            <img src="./img/img_hand.png" />
          </span>
          <span>Chất lượng cam kết</span>
        </div>
        <div className="w-[25%] bg-white py-6 text-[17px] px-2 flex items-center gap-3  justify-start rounded-lg font-light">
          <span>
            <img src="./img/img_tick.png" />
          </span>
          <span>Dịch vụ vượt trội</span>
        </div>
        <div className="w-[25%] bg-white py-6 text-[17px] px-2 flex items-center gap-3  justify-start rounded-lg font-light">
          <span>
            <img src="./img/img_truck.png" />
          </span>
          <span>Giao hàng nhanh chóng</span>
        </div>
      </div>
      <div className="w-4/5 mt-7 mx-auto border p-3 border-orange-200 bg-white rounded-lg">
        <h1 className="font-medium uppercase"> Danh mục nổi bật</h1>
        <div className="flex gap-2 flex-wrap mt-4">
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer">
            <div className="w-[50%]">
              <img
                src="./img/dienthoai.png"
                className="object-cover"
                alt="anh danh muc san pham"
              />
            </div>
            <span>Điện thoại</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
