import React from "react";
import Input from "../../UI/Input";
import styled from "./MealsForm.module.css";
const MealsForm = () => {
  return (
    <form className={styled.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealsForm;
