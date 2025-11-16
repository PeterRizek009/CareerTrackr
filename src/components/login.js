import { GoogleLogin } from '@react-oauth/google';

function Login() {

  const handleSuccess = async (credentialResponse) => {

    const API = process.env.REACT_APP_API_URL;
    
    console.log("Google Response:", credentialResponse);  // NEW

    try {
      const googleToken = credentialResponse.credential;
      console.log("Google Token:", googleToken);  // NEW

      if (!googleToken) {
        alert("No Google token received");
        return;
      }

      const res = await fetch(`${API}/auth/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: googleToken })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      console.log("Backend Response:", data);

      alert("Login Success! Check Console");
      
    } catch (error) {
      console.log("Login Error:", error);
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => alert("Google Login Error")}
      />
    </div>
  );
}

export default Login;
