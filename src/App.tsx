import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import AccountActivationPage from "./components/AccountActivationPage";
import RecoverPage from "./components/RecoverPage";
import ResetPasswordPage from "./components/ResetPasswordPage";
import CheckEmailPage from "./components/CheckEmailPage";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/recover-password" element={<RecoverPage />} />
          <Route path="resetPassword/:email" element={<ResetPasswordPage />} />
          <Route path="check-email" element={<CheckEmailPage />} />
          <Route
            path="activate/:activationToken"
            element={<AccountActivationPage />}
          ></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
