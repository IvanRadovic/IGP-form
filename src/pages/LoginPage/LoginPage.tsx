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
          className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center text-white"
          style={{
            background:
              "linear-gradient(180deg, rgb(54, 18, 67) 30%, rgb(19, 6, 25) 100%)",
          }}
        >
          <LoginAnimation onFinish={() => setLoading(false)} />
          <h2 className="mt-3 fs-1 fw-bold text-white text-shadow">
            Your adventure is about to begin...
          </h2>
          <p
            className="fs-3 mt-2 opacity-75 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Get ready to enter a world of high-stakes excitement, thrilling
            spins, and untamed jackpots. The jungle of fortune awaits you.
          </p>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-end position-relative w-100"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            overflow: "hidden",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="position-absolute p-4 loginContainer">
            <h1 className="text-white display-1 fw-bold text-shadow mb-3">
              Monkey Business Just Got Wilder
            </h1>
            <p className="text-white-50 fs-2 text-shadow fw-light">
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
