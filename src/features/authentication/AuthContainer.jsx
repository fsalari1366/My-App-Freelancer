import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

const AuthContainer = () => {
    const [step, setStep] = useState(2);
    const [phoneNumber, setPhoneNumber] = useState("");

    const {isPending: isSendingOtp, mutateAsync, data: otpResponse} = useMutation({
        mutationFn: getOtp,
       });
    
        const sendOtpHandler = async (e) => {
           e.preventDefault();
           try {
           const data = await mutateAsync({phoneNumber});
           setStep(2);
           toast.success(data.message);
           } catch (error) {
             toast.error(error?.response?.data?.message);
           }
        }

    const renderStep = () => {
        switch (step) {
            case 1:
                return <SendOTPForm setStep={setStep}
                phoneNumber={phoneNumber} onSubmit={sendOtpHandler}
                onChange={e => setPhoneNumber(e.target.value)}
                isSendingOtp={isSendingOtp}
                 />;
            case 2:
                return <CheckOTPForm phoneNumber={phoneNumber} 
                onBack={(s) => s - 1 } 
                onReSendOtp={sendOtpHandler}
                otpResponse={otpResponse}
                />;
            default:
                return null;
        }
    }

  return (
    <div className='w-full sm:max-w-sm'>
        {renderStep()}
    </div>
  )
}

export default AuthContainer