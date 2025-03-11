import background from "../../assets/images/casinoImage.webp";

const LoginPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-end"
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
  );
};

export default LoginPage;
