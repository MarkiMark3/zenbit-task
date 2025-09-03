import { useEffect } from "react";
import { authService } from "../services/authService";
import { useParams } from "react-router-dom";
import { accessTokenService } from "../services/accessTokenService";

const AccountActivationPage = () => {
  const { activationToken } = useParams<{ activationToken: string }>();

  const getToken = async (token: string): Promise<void> => {
    const response = await authService.activate(token);
    const { accessToken } = response.data;

    accessTokenService.save(accessToken);
  };

  useEffect(() => {
    if (activationToken) {
      getToken(activationToken);
    }
  }, [activationToken]);
  return (
    <div className="flex flex-col items-center justify-center mt-3 bg-green-600 text-white">
      <h1 className="text-4xl">Account activation</h1>

      <p className="notification is-success is-light">
        Your account is now active
      </p>
    </div>
  );
};

export default AccountActivationPage;
