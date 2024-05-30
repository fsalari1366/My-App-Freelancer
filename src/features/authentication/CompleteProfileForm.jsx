import React, { useState } from 'react'
import TextField from '../../ui/TextField'
import RadioInput from '../../ui/RadioInput';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../ui/Loading';
import { completeProfile } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const CompleteProfileForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    const {isPending, mutateAsync} = useMutation({
      mutationFn: completeProfile,
    });

    const handleSubmit = async (e) => {
     e.preventDefault();
     try {
      const {message, user} = await mutateAsync({name, email, role})
      toast.success(message);
      if (Number(user.status) !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      } catch (error) {
       toast.error(error?.response?.data?.message);
      }
    }

  return (
    <div className='flex justify-center pt-10'>
    <div className='w-full sm:max-w-sm'>
    <form className='space-y-8' onSubmit={handleSubmit}>
        <TextField label="نام و نام خانوادگی" value={name}
        name="name" onChange={(e) => setName(e.target.value)} />
        <TextField label="ایمیل" name="email" value={email} 
        onChange={(e) => setEmail(e.target.value)} />
        <div className='flex items-center justify-center gap-x-8'>
            <RadioInput label='کارفرما' name="role" id='OWNER' onChange={(e) => setRole(e.target.value)} value='OWNER' checked={role === "OWNER"} />
            <RadioInput label='فریلنسر' name="role" id='FREELANCER' onChange={(e) => setRole(e.target.value)} value='FREELANCER' checked={role === "FREELANCER"} />
        </div>
        <div>
              {isPending ?
               (
                <Loading />
               ) :
              (            
              <button type="submit" className='btn btn--primary w-full'>تایید</button>
            )
              }
             </div>
    </form>
    </div>
    </div>
  )
}

export default CompleteProfileForm