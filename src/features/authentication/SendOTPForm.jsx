import TextField from "../../ui/TextField";
// import { useMutation } from "@tanstack/react-query";
// import { getOtp } from "../../services/authService";
// import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

const SendOTPForm = ({ onSubmit , isSendingOtp, phoneNumber, onChange}) => {

  return (
    <div>
        <form className='space-y-8' onSubmit={onSubmit}>
            <TextField name='phoneNumber' label="شماره موبایل" value={phoneNumber}
            onChange={onChange}
             />
             <div>
              {isSendingOtp ?
               (
                <Loading />
               ) :
              (            
              <button type="submit" className='btn btn--primary w-full'>ارسال کد تایید</button>
            )
              }
             </div>
        </form>
    </div>
  )
}

export default SendOTPForm