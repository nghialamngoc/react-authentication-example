import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { fakeApi, refreshTokenApi } from "../api/auth";

const LoginPage = () => {
  const { login, isLoading, user } = useAuth();
  const navigate = useNavigate();

  const onLogin = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      await login("user1", "password123");
    } catch (err) {}
  };

  const onRefreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        await refreshTokenApi(refreshToken);
      }
    } catch (err) {}
  };

  const onFake = () => {
    fakeApi();
  };

  return (
    <div>
      {JSON.stringify(user)}
      <button onClick={onLogin}>Fake Login</button>

      <button onClick={onRefreshToken}>Fake Refresh</button>
      <button onClick={onFake}>Fake Call</button>
    </div>
  );
};

export default LoginPage;
