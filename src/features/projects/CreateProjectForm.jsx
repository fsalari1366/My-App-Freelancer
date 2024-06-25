import React, { useState } from 'react'
import TextField from "../../ui/TextField";
import { useForm } from 'react-hook-form';
import RHFSelect from '../../ui/RHFSelect';
import { TagsInput } from 'react-tag-input-component';
import DatePickerField from "../../ui/DatePickerField";
import useCategories from '../../hooks/useCategories';
import useCreateProject from './useCreateProject';
import Loading from "../../ui/Loading";

const CreateProjectForm = ({onClose}) => {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const {register, formState: { errors },
          reset,
         handleSubmit
} = useForm();

const { categories } = useCategories();
const { isCreating, createProject } = useCreateProject();
// const { editProject, isEditing } = useEditProject();

const onSubmit = (data) => {
  const newProject = {
    ...data,
    deadline: new Date(date).toISOString(),
    tags,
  };

  // if (isEditSession) {
  //   editProject(
  //     { id: editId, newProject },
  //     {
  //       onSuccess: () => {
  //         onClose();
  //         reset();
  //       },
  //     }
  //   );
  // } else {
    createProject(newProject, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
  // }
};

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
      <RHFSelect 
      label="دسته بندی"
      required
      name="category"
      register={register}
      options={categories}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      <div className="!mt-8">
        {isCreating ? ( 
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  )
}

export default CreateProjectForm