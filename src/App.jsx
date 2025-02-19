import { Routes, Route, useNavigate, useActionData } from "react-router-dom";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";
import Profile from "./pages/profile/profile";
import { ToastContainer, toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AddContext";

const App = () => {
  const navigate = useNavigate();
  const { loadUserData } = useContext(AppContext);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/chat");
        await loadUserData(user.uid);
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
