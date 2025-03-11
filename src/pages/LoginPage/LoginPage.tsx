import background from "../../assets/images/monkey2.webp";
import { getDynamicInputs } from "../../api/services/generateInputs/inputsApiSerivce.ts";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { generateInputs } from "../../api/services/generateInputs/interface.ts";
import MultiStep from "react-multistep";

import StepOne from "../../components/Layouts/MultiStep/StepOne/StepOne.tsx";
import StepTwo from "../../components/Layouts/MultiStep/StepTwo/StepTwo.tsx";
const LoginPage = () => {
  const dispatch = useDispatch();
  const [data, setInputsData] = useState<generateInputs[]>([]);
  const [prevButton, setPrevButton] = useState<boolean>(false);
  const [nextButton, setNextButton] = useState<boolean>(false);

  // const getInputs = () => {
  //   getDynamicInputs(
  //     (response) => {
  //       setInputsData(response);
  //     },
  //     (error) => {
  //       console.error("Error fetching inputs", error);
  //     },
  //   );
  // };

  // useEffect(() => {
  //   getInputs();
  // }, []);
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
            width: "300px",
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

          <div>FOrma ce ici ovdeeee</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
