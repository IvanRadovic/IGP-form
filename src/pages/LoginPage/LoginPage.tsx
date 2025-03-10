import background from "../../assets/casinoImage.webp";

const LoginPage = () => {
  return (
    <div className="d-flex flex-row w-100">
      <div
        className="d-flex flex-6 justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <h1>Login Page</h1>
      </div>
      <div className="1-flex justify-content-center align-items-center flex-1">
        <div>forma</div>
      </div>
    </div>
  );
};

export default LoginPage;
