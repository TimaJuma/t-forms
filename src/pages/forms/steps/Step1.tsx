import React from "react";
import { useQuery } from "react-query";
// import { useFormState } from "@contexts/FormContext";

// import { FormikWrapper } from "../modules";
// import { FormikField, FormikSelect } from "@components/Fields";

// import { provinces } from "../../../dataSets/dataList";
// import { isNotEmpty } from "../../../dataSets/dataSetHelper";
// import { useStepData } from "#hooks/FormHooks";
// import { initialVal_step1 } from "../helpers/initialValues";
// import { validData_step1 } from "../helpers/validationData";

const Step1 = () => {
  const { data, error, isLoading } = useQuery("step1");

  return <h1>STEP1</h1>;
};

export default Step1;
