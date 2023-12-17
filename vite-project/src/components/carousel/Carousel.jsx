import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadingImage/img";
import PosterFallback from "../../assets/no-poster.png";
import "./style.scss";

const Carousel = ({ data, loading }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    console.log(dir);
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carouselItems">
            {data?.map((item) => {
            //   const posterUrl =PosterFallback;
              console.log(data);
              return (
                <div className="carouselItem" key={item.id}>
                  <div className="posterBlock">
                    <Img src={PosterFallback} />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
