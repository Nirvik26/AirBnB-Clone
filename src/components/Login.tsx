import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import facebook from "../images/facebook.png";
import google from "../images/google.png";
import email from "../images/email.png";
import phone from "../images/basic-ui.png";
import { auth, facebookProvider, googleProvider } from "../firebase/setup";
import {
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

interface LogProps {
  setLog?: any;
}

function Signup(props: LogProps) {
  const [mail, setMail] = useState(false);
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState<any>(null);
  const [otp, setOtp] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      auth.currentUser?.email && toast.success("Logged in successfully");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      const err: any = error;
      toast.error(err);
    }
  };

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (error) {
      console.log(error);
      const err: any = error;
      toast.error(err);
    }
  };

  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      data.user.phoneNumber && toast.success("Logged in successfully");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      const err: any = error;
      toast.error(err);
    }
  };

  const emailLogin = async () => {
    try {
      const data = await signInWithEmailAndPassword(auth, emailId, password);
      data.user.emailVerified && toast.success("Logged in Successfully!!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
      console.log(data);
    } catch (error) {
      console.error(error);
      const err: any = error;
      toast.error(err);
    }
  };

  const facebookSignin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      toast.success("LoggedIn Successfully");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error(error);
      const err: any = error;
      toast.error(err);
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-stone-800 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="p-2 pb-8 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="p-4 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex">
                <h1
                  onClick={() => props.setLog(false)}
                  className="cursor-pointer"
                >
                  X
                </h1>
                <h3
                  className=" ml-28 text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  {phone ? "Confirm your ohone number" : "Log in or Sign up"}
                </h3>
              </div>
              <hr className="mt-4" />
              <h1 className="mt-4 font-semibold text-2xl ml-5">
                {!phone && "Welcome to Airbnb Clone"}
              </h1>
              {mail ? (
                <input
                  onChange={(e) => setEmailId(e.target.value)}
                  type="email"
                  className="ml-5 border-gray-300 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 block w-11/12 p-2.5 outline-none border border-spacing-1"
                  placeholder="Email"
                  required
                />
              ) : (
                <PhoneInput
                  value={phone}
                  onChange={() => setPhone("+" + phone)}
                  placeholder="Phone number"
                  inputStyle={{
                    width: "453px",
                    height: "50px",
                    fontSize: "17px",
                  }}
                  containerStyle={{ marginTop: "15px", marginLeft: "20px" }}
                />
              )}
              {mail && (
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="ml-5 border-gray-300 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 block w-11/12 p-2.5 outline-none border border-spacing-1"
                  placeholder="Password"
                  required
                />
              )}
              <div id="recaptcha" className="mt-3 ml-5"></div>

              <h1 className="text-xs ml-5 mt-3">
                We'll call or text you to confirm your number. Standard message
                and data rates apply. Privacy Policy{" "}
              </h1>
              {!phone && (
                <button
                  onClick={emailLogin}
                  className="ml-5 bg-rose-700 h-12 text-white font-bold py-2 px-4 mt-3 rounded w-11/12"
                >
                  {mail ? "Agree and Continue" : "Continue"}
                </button>
              )}
              {phone && (
                <button
                  onClick={sendOtp}
                  className="ml-5 bg-rose-700 h-12 text-white font-bold py-2 px-4 mt-3 rounded w-11/12"
                >
                  Send OTP
                </button>
              )}
              {user && (
                <input
                  type="email"
                  onChange={(e) => setOtp(e.target.value)}
                  className="ml-5 border-gray-300 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 block w-11/12 p-2.5 outline-none border border-spacing-1"
                  placeholder="Email"
                  required
                />
              )}
              {otp && (
                <button
                  onClick={verifyOtp}
                  className="ml-5 bg-rose-700 h-12 text-white font-bold py-2 px-4 mt-3 rounded w-11/12"
                >
                  Verify OTP
                </button>
              )}
              <h1 className="text-center mt-3">or</h1>
              {!phone && (
                <div
                  onClick={facebookSignin}
                  className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-3 flex items-center border border-spacing-1 rounded-xl border-black"
                >
                  <img src={facebook} alt="" className="w-6 h-6 ml-3" />
                  <h1 className="ml-24">Continue with Facebook</h1>
                </div>
              )}
              {!phone && (
                <div
                  onClick={googleSignin}
                  className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 mt-4 p-3 flex items-center border border-spacing-1 rounded-xl border-black"
                >
                  <img src={google} alt="" className="w-6 h-6 ml-3" />
                  <h1 className="ml-24">Continue with Google</h1>
                </div>
              )}
              {!mail ? (
                <div
                  onClick={() => setMail(true)}
                  className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 mt-4 p-3 flex items-center border border-spacing-1 rounded-xl border-black"
                >
                  <img src={email} alt="" className="w-6 h-6 ml-3" />
                  <h1 className="ml-24">Continue with Email</h1>
                </div>
              ) : (
                <div
                  onClick={() => setMail(false)}
                  className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 mt-4 p-3 flex items-center border border-spacing-1 rounded-xl border-black"
                >
                  <img src={phone} alt="" className="w-6 h-6 ml-3" />
                  <h1 className="ml-24">Continue with Phone</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
