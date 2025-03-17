import bunner1 from "../../../../assets/images/banner/banner1.png";

const Banner = () => (
  <img
    src={bunner1}
    className="w-100"
    style={{
      height: "350px",
      borderRadius: "10px",
      objectFit: "cover",
      objectPosition: "bottom",
    }}
    alt="banner"
  />
);

export default Banner;
