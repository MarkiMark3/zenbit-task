import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import imgBg from "../../public/loginImg.jpg";

const RecoverPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await authService.recover({ email });
      navigate("/check-email");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="relative flex font-[Merriweather] ">
        <div
          className="absolute top-0 left-0 h-screen w-full ${}  bg-cover bg-center lg:static lg:flex-2  "
          style={{ backgroundImage: `url(${imgBg})` }}
        />
        <div className="flex  items-center justify-center w-full h-screen bg-transparent px-[100px] z-50 lg:bg-white lg:flex-1">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  w-full max-w-sm  "
          >
            <h2 className="text-2xl text-black font-bold font-[Merriweather] mb-[20px] self-center lg:self-start">
              Enter Your Email
            </h2>

            <label className="block mb-[20px] font-bold text-black">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="mt-1 font-light w-full h-[48px] px-3 py-2 rounded bg-white/50 lg:bg-[#E0E0E0] text-black placeholder-white lg:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </label>

            <button
              type="submit"
              className="w-full h-[44px] mt-[30px]  mb-[10px] rounded bg-[#B29F7E]  text-black font-bold hover:bg-[#172234] hover:text-white  transition duration-500 cursor-pointer"
            >
              Send Recovery Email
            </button>
            <div className="flex items-center justify-center gap-1 ">
              <span className="lg:text-black text-white text-[16px]">
                Don`t have an account?
              </span>
              <Link
                to={"/sign-up"}
                className="lg:text-[#B29F7E] text-[16px] text-white hover:text-[#172234] duration-500"
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

export default RecoverPage;
