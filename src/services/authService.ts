import { authClient } from "../http/authClient";

interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

function register({ name, email, password }: RegisterProps) {
  return authClient.post("/sign-up", { name, email, password });
}

function activate(activationToken: string) {
  return authClient.get(`/activation/${activationToken}`);
}

function login({ email, password }: { email: string; password: string }) {
  return authClient.post("/login", { email, password });
}
function recover({ email }: { email: string }) {
  return authClient.post("/recover", { email });
}

function resetPassword({
  password,
  confirmPassword,
  email,
}: {
  password: string;
  confirmPassword: string;
  email: string;
}) {
  return authClient.post(`/resetPassword/${email}`, {
    password,
    confirmPassword,
  });
}
function logout() {
  return authClient.post("/logout");
}

function getUser() {
  return authClient.get("users/user");
}

const refresh = async () => {
  const response = await authClient.get("/refresh", {
    withCredentials: true,
  });
  const normalize = JSON.stringify(response);

  return JSON.parse(normalize);
};

function getData() {
  return authClient.get("/data");
}

export const authService = {
  getData,
  login,
  refresh,
  register,
  activate,
  logout,
  getUser,
  recover,
  resetPassword,
};
