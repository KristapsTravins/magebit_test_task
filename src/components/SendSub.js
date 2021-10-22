import React from 'react';
import LinkButtons from './LinkButtons';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";




const SendSub = () => {
// validation
const { register, formState:{errors}, handleSubmit } = useForm({criteriaMode: "all"});
  const onSubmit = (data) => console.log(data);
    const isCo = (val) =>{
        let str = "";
      for(let i = val.length-1;i>0;i--){
          str += val[i];
          if(str === "oc."){
              return false
          }
      }
      return true
    }
    return (
        <div className="text_box">
        <div className="text_main">
        <h1>Subscribe to newsletter</h1>
        </div>
       <div className="text_secondary">
       <h2>Subscribe to our newsletter and get 10% discount on pineapple glasses.</h2>
       </div>
       <div className="form_box">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form_inner" id="email_input">
                <input name="email" {...register("email",{
                    validate:{
                        isValidEmail:email =>
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                          email
                        ),
                    containsCo:value=>{return isCo(value)},
                    minChars:value=>{return value.length > 10 }
                }})} placeholder="Enter your email" />
                <div className="input_button"  style={{cursor:"pointer"}} >
                        <button>
                    <svg  width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M17.7071 0.2929C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.2929C15.9023 0.683403 15.9023 1.31658 16.2929 1.70708L20.5858 5.99999H1C0.447693 5.99999 0 6.44772 0 6.99999C0 7.55227 0.447693 7.99999 1 7.99999H20.5858L16.2929 12.2929C15.9023 12.6834 15.9023 13.3166 16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071L23.7071 7.70708C24.0977 7.31658 24.0977 6.6834 23.7071 6.2929L17.7071 0.2929Z" fill="#131821"/>
                    </svg>
                        </button>
                </div>
            </div>
            {errors.email && errors.email.type === "containsCo" && <p id="err">We dont accept .co domains</p>}
            {errors.email && errors.email.type === "isValidEmail" && <p id="err">You must enter email</p>}
            {errors.email && errors.email.type === "minChars" && <p id="err">Email must be longer than 10 characters</p>}
            <div className="check_box">
            <input type="checkbox" id="terms_and_conditions" name="terms_and_conditions" value="accept" required/>
            <label for="terms_and_conditions" id="terms_text" > I agree to <a href="/">terms of service</a></label>
            </div>
        </form>
    <LinkButtons />
    </div>
    </div>
    )
}

export default SendSub
