import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signInWithGoogle } = UserAuth();
  
  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch(error) {
      console.log(error)
    }
  }

  //redirects signed in user to chatroom
  useEffect(() => {
    if(currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there 👋🏻</h1>
      <p className="py-6">Join the conversation, meet new people, and make connections in one shared room.</p>
      <button onClick={handleLogin} className="btn btn-accent">Get Started</button>
    </div>
  </div>
</div>
  )
}


