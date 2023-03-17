import { useForm } from "react-hook-form";
import styled from "styled-components";

export default function Form({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <input {...register("valueFilter", { required: true })} />
      <button type="submit" className="button-submit bg-orange color-white">
        Submit
      </button>
      {errors.valueFilter && (
        <p className="font-size-14 warning">Bạn phải nhập userId hoặc title</p>
      )}
    </FormContainer>
  );
}

const FormContainer = styled.form`
  position: relative;
  /* display: flex; */
  align-items: center;

  input {
    width: calc(100% - 132px);
    height: 44px;
    padding: 0 12px 0 40px;
    background: #fff;
    border-radius: 6px;
    line-height: 22px;
    color: var(--gray);
    border: 1px solid #eaeced;
  }

  &::before {
    content: "";
    background: url(../../icon-search.svg) no-repeat;
    position: absolute;
    z-index: 999;
    left: 14px;
    top: 14px;
    height: 16px;
    width: 16px;
  }
`;
