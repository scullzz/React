import elips from "../image/elips.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Slider from "react-slick";
export const Proj = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const myInfo = [
    {
      image: "#",
      forWhat: "По реквизитам",
      digits: "22030300202030",
    },
    {
      image: "#",
      forWhat: "По реквизитам",
      digits: "22230300202030",
    },
    {
      image: "#",
      forWhat: "По реквизитам",
      digits: "22032448020200",
    },
  ];
  return (
    <div className="carousel">
      <h3 className="text">Шаблоны</h3>
      <Slider {...settings}>
        {myInfo.map((info) => {
          return (
            <div className="main_flex">
              <div className="mini_flex">
                <img className="img1" src={info.image} />
                <img className="img2" src={elips} />
              </div>
              <div>
                <p className="text1">{info.forWhat}</p>
                <p className="text2">{info.digits}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
