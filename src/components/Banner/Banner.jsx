import logo1 from "../../assets/images/img-4.jpg";
import logo2 from "../../assets/images/img-5.jpg";
import logo3 from "../../assets/images/img-6.jpg";
import logo4 from "../../assets/images/img-1.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={logo1} className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/3">
            <h1 className="text-5xl font-bold">
              Where Imagination Takes Flight - Toys for Every Adventure!
            </h1>
            <p>
              Welcome to our magical toy wonderland! Discover joy and
              imagination with our enchanting collection of toys. Embrace the
              wonder, ignite the laughter, and create cherished memories that
              will last a lifetime
            </p>
            <div className="mt-5">
              <button className="btn btn-primary mr-5">Show Details</button>
              <button className="btn btn-outline btn-info">Learn More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={logo2} className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/3">
            <h1 className="text-5xl font-bold">
              Where Imagination Takes Flight - Toys for Every Adventure!
            </h1>
            <p>
              Welcome to our magical toy wonderland! Discover joy and
              imagination with our enchanting collection of toys. Embrace the
              wonder, ignite the laughter, and create cherished memories that
              will last a lifetime
            </p>
            <div className="mt-5">
              <button className="btn btn-primary mr-5">Show Details</button>
              <button className="btn btn-outline btn-info">Learn More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={logo3} className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/3">
            <h1 className="text-5xl font-bold">
              Where Imagination Takes Flight - Toys for Every Adventure!
            </h1>
            <p>
              Welcome to our magical toy wonderland! Discover joy and
              imagination with our enchanting collection of toys. Embrace the
              wonder, ignite the laughter, and create cherished memories that
              will last a lifetime
            </p>
            <div className="mt-5">
              <button className="btn btn-primary mr-5">Show Details</button>
              <button className="btn btn-outline btn-info">Learn More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={logo4} className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/3">
            <h1 className="text-5xl font-bold">
              Where Imagination Takes Flight - Toys for Every Adventure!
            </h1>
            <p>
              Welcome to our magical toy wonderland! Discover joy and
              imagination with our enchanting collection of toys. Embrace the
              wonder, ignite the laughter, and create cherished memories that
              will last a lifetime
            </p>
            <div className="mt-5">
              <button className="btn btn-primary mr-5">Show Details</button>
              <button className="btn btn-outline btn-info">Learn More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
