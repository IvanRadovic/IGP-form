import React, { useState } from "react";

/*========== COMPONENTS ===============*/
import background from "../../assets/images/background/monkey2.webp";
import MultiStepForm from "../../components/layouts/multiStep/MultiStepForm.tsx";
import LoginAnimation from "./components/animationLogin/AnimationLogin.tsx";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {loading ? (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgb(54, 18, 67) 30%, rgb(19, 6, 25) 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <LoginAnimation onFinish={() => setLoading(false)} />
          <h2
            style={{
              marginTop: "20px",
              fontSize: "2.2rem",
              fontWeight: "bold",
              color: "white",
              textShadow: "2px 2px 4px rgba(255, 255, 255, 0.3)",
            }}
          >
            Your adventure is about to begin...
          </h2>
          <p
            style={{
              fontSize: "1.8rem",
              marginTop: "10px",
              opacity: 0.8,
              maxWidth: "600px",
              color: "white",
            }}
          >
            Get ready to enter a world of high-stakes excitement, thrilling
            spins, and untamed jackpots. The jungle of fortune awaits you.
          </p>
        </div>
      ) : (
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
          <div className="position-absolute p-4 loginContainer">
            <h1
              style={{
                color: "#fff",
                fontSize: "4rem",
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
                fontSize: "2.2rem",
                lineHeight: 1.5,
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                fontWeight: 300,
              }}
            >
              Join the primate party where slots are wilder than a rainforest
              storm—bet, spin, and snag vine-swinging jackpots!
            </p>

            <div>
              <MultiStepForm setLoading={setLoading} />
            </div>
          </div>
        </div>
      )}
      {/*{loading ? <LoadingScreen onFinish={() => setLoading(false)} /> : <LoginContainer setLoading={setLoading} background={background} />}*/}
    </div>
  );
};

export default LoginPage;
