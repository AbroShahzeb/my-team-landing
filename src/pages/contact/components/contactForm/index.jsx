import { useForm } from "react-hook-form";
import {
  Button,
  CustomInput,
  CustomTextArea,
} from "../../../../generalComponents";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <form
      className="lg:flex-1 flex flex-col gap-6 md:max-w-[540px] md:mx-auto lg:w-auto md:w-[540px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <CustomInput
          name="name"
          placeholder="Name"
          register={register}
          validationRules={{ required: "Can't be empty" }}
          error={errors?.name?.message}
        />
      </div>
      <div>
        <CustomInput
          name="email"
          placeholder="Email Address"
          register={register}
          validationRules={{
            required: "Can't be empty",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          }}
          error={errors?.email?.message}
        />
      </div>
      <div>
        <CustomInput
          name="company"
          placeholder="Company Name"
          register={register}
          validationRules={{ required: "Can't be empty" }}
          error={errors?.company?.message}
        />
      </div>
      <div>
        <CustomInput
          name="title"
          placeholder="Title"
          register={register}
          validationRules={{ required: "Can't be empty" }}
          error={errors?.title?.message}
        />
      </div>
      <div>
        <CustomTextArea
          name="message"
          placeholder="Message"
          register={register}
          validationRules={{ required: "Can't be empty" }}
          error={errors?.message?.message}
        />
      </div>
      <div>
        <Button type="submit" label="submit" variant="secondary" />
      </div>
    </form>
  );
};
