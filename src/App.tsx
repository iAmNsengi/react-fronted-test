import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="">
      <GoogleLogin
        text="signin_with"
        onSuccess={(response) => {
          console.log(response);
          fetch("http://localhost:3000/auth/google-authentication", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: response.credential }),
          });
        }}
      ></GoogleLogin>
    </GoogleOAuthProvider>
  );
}

export default App;
