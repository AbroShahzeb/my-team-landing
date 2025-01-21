import { useForm } from "react-hook-form";
import { Button, CustomInput, CustomTextArea } from "../../generalComponents";

export const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return null;
};
