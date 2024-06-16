import React from 'react'
import TextField from "../../ui/TextField";
import { useForm } from 'react-hook-form';

const CreateProjectForm = () => {
  const {register, formState: { errors },
         handleSubmit
} = useForm();

const onSubmit =(data) => {
  console.log(data);
}

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
        label="عنوان"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />

        <TextField label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "طول توضیحات نامعتبر است"
            }
          }}
          errors={errors}
         />

        <TextField
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        errors={errors}
      />
         <button type='submit' className='btn btn--primary w-full'>تایید</button>
    </form>
  )
}

export default CreateProjectForm