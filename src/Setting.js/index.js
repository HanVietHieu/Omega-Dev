import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

export default function Setting() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const formData = watch();

  const [color, setColor] = useState("#151515");
  const [isDisableButton, setIsDisableButton] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleChangeColor = (e) => {
    setIsDisableButton(true);
    setColor(e.target.value);
  };

  const onSubmit = (data) => {
    setIsDisableButton(false);
    console.log({ ...data, color, startDate });
  };

  const handleChangeDate = (date) => {
    setIsDisableButton(true);
    setStartDate(date);
  };

  const { email, title } = formData;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="row">
      <div className="col-6">
        {labelForm("Email:")}
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          type="email"
          className="email"
        />
        {errors.email && errorMess("Vui lòng kiểm tra lại email")}
      </div>
      <div className="col-6">
        {labelForm("Title:")}
        <input
          type="text"
          {...register("title", {
            required: true,
          })}
        />
        {errors.title && errorMess("Vui lòng kiểm tra lại Title")}
      </div>
      <ContainerBg className="col-6 mt-3">
        {labelForm("Background Color:")}
        <input
          type="color"
          value={color}
          onChange={handleChangeColor}
          className="onchange-color"
        />
        <input
          initialValue={color}
          value={color}
          onChange={handleChangeColor}
          className="input-color"
        />
      </ContainerBg>
      <div className="col-6 mt-3">
        {labelForm("Active Date:")}
        <DatePicker
          showIcon
          selected={startDate}
          onChange={(date) => handleChangeDate(date)}
        />
      </div>
      {(email !== "" || title !== "" || isDisableButton) && (
        <button
          type="submit"
          className="button-submit bg-orange color-white mt-4"
        >
          Submit
        </button>
      )}
    </Form>
  );
}

const errorMess = (content = "") => {
  return <p className="font-size-14 warning">{content}</p>;
};

const labelForm = (content) => {
  return (
    <>
      <label className="font-size-18 pb-2">{content}</label> <br />
    </>
  );
};

const ContainerBg = styled.div`
  position: relative;
  .input-color {
    height: 40px;
    width: 190px;
  }
  .onchange-color {
    position: absolute;
    width: 62px;
    left: 140px;
    height: 40px;
  }
`;

const Form = styled.form`
  input {
    border-radius: 6px;
    line-height: 22px;
    color: var(--gray);
    border: 1px solid rgb(234, 236, 237);
    height: 40px;
  }
  button {
    max-width: 170px;
  }
`;
