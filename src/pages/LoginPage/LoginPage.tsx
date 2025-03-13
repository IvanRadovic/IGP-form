/*========== COMPONENTS ===============*/
import background from "../../assets/images/monkey2.webp";
import MultiStepForm from "../../components/Layouts/MultiStep/MultiStepForm.tsx";

const LoginPage = () => {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <div
        className="d-flex justify-content-center align-items-end position-relative"
        style={{
          width: "100%",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          overflow: "hidden",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="position-absolute p-4"
          style={{
            left: "5%",
            top: "10%",
            width: "350px",
            background: "rgb(83 118 168 / 55%)",
            backdropFilter: "blur(8px)",
            borderRadius: "15px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            fontFamily: "'Poppins', sans-serif",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            style={{
              color: "#fff",
              fontSize: "2.5rem",
              fontWeight: 700,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              marginBottom: "1rem",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}
          >
            Monkey Business Just Got Wilder
          </h1>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "1.1rem",
              lineHeight: 1.5,
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              fontWeight: 300,
            }}
          >
            Join the primate party where slots are wilder than a rainforest
            storm—bet, spin, and snag vine-swinging jackpots!
          </p>

          <div>
            <MultiStepForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
