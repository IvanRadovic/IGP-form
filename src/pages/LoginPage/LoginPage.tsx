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
            left: "10%",
            top: "20%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "8px",
            width: "300px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoginPage;
