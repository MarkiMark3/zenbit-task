import { useState, type FormEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { authService } from "../services/authService";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { email } = useParams();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!password.trim()) {
        window.alert("Please Fill The Form");
      } else {
        if (email) {
          await authService.resetPassword({
            password,
            confirmPassword,
            email,
          });
          window.location.href = "/login";
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="relative flex font-[Merriweather] ">
        <div className="flex  items-center justify-center w-full h-screen bg-white px-[100px] z-50">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  w-full max-w-sm  "
          >
            <h2 className="text-2xl text-black font-bold font-[Merriweather] mb-[20px] self-center lg:self-start">
              Enter Your New Password
            </h2>

            <label className="block mb-[20px] font-bold text-black">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                className="mt-1 font-light w-full h-[48px] px-3 py-2 rounded bg-[#E0E0E0] text-black  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </label>
            <label className="block mb-[20px] font-bold text-black">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Retype Your Password Again"
                className="mt-1 font-light w-full h-[48px] px-3 py-2 rounded bg-[#E0E0E0] text-black  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </label>

            <button
              type="submit"
              className="w-full h-[44px] mt-[30px]  mb-[10px] rounded bg-[#B29F7E]  text-black font-bold hover:bg-[#172234] hover:text-white  transition duration-500 cursor-pointer"
            >
              Save New Password
            </button>
            <div className="flex items-center justify-center gap-1 ">
              <span className="text-black text-[16px]">
                Don`t have an account?
              </span>
              <Link
                to={"/sign-up"}
                className="lg:text-[#B29F7E] text-[16px] text-black hover:text-[#172234] duration-500"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
