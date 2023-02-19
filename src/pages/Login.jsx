import { UserAuth } from "../context/AuthContext";

export const Login = () => {
  const { currentUser, signInWithGoogle } = UserAuth();
  
  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there 👋🏻</h1>
      <p className="py-6">Join the conversation, meet new people, and make connections in one shared room.</p>
      <button onClick={handleLogin} className="btn">Get Started</button>
    </div>
  </div>
</div>
  )
}


