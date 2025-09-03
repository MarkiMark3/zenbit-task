import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import { accessTokenService } from "../services/accessTokenService";
import type { User } from "../services/types";

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const logout = async () => {
    await authService.logout();

    accessTokenService.remove();
    setUser(null);
  };

  const fetchUser = async () => {
    try {
      const user = await authService.refresh();
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const location = useLocation();
  const isNotHome = location.pathname !== "/";

  return (
    <nav className="w-full inset-x-0 h-[80px] bg-[#172234] overflow-hidden flex items-center justify-center md:justify-end">
      <div className="flex  gap-3 mr-3 md:mr-[80px]   ">
        {user ? (
          <Link
            to={"/sign-up"}
            className="flex items-center justify-center gap-3"
          >
            <p className="text-[#B29F7E] text-[20px]">
              Welcome back {user.name}!
            </p>
            <button
              className="w-[160px] h-[44px]  bg-transparent rounded-md border border-[#B29F7E] font-[Merriweather] text-[20px] text-[#B29F7E] hover:bg-[#B29F7E] hover:border-white hover:text-white cursor-pointer z-50 duration-500"
              onClick={async () => {
                await logout();
                navigate("/login");
              }}
            >
              Sign-Out
            </button>
          </Link>
        ) : isNotHome ? (
          <Link to={"/"}>
            <button
              className="w-[160px] h-[44px] bg-transparent rounded-md border border-[#B29F7E] font-[Merriweather] text-[20px] text-[#B29F7E] hover:bg-[#B29F7E] hover:border-white hover:text-white cursor-pointer z-50 duration-500"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Home
            </button>
          </Link>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="w-[160px] h-[44px] bg-transparent rounded-md border border-[#B29F7E] font-[Merriweather] text-[20px] text-[#B29F7E] hover:bg-[#B29F7E] hover:border-white hover:text-white cursor-pointer z-50 duration-500">
                Login
              </button>
            </Link>
            <Link to={"/sign-up"}>
              <button className="w-[160px] h-[44px]  bg-transparent rounded-md border border-[#B29F7E] font-[Merriweather] text-[20px] text-[#B29F7E] hover:bg-[#B29F7E] hover:border-white hover:text-white cursor-pointer z-50 duration-500">
                Sign-Up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
