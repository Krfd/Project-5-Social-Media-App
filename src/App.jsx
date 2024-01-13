import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Messages from "./components/Messages";
import Notification from "./components/Notification";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import LandingPage from "./auth/LandingPage";
import "./Custom.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="./" element={<Layout />}>
                        <Route index path="home" element={<Home />} />
                        <Route path="messages" element={<Messages />} />
                        <Route path="notification" element={<Notification />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
