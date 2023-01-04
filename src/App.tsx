import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        text="signin_with"
        onSuccess={async (response) => {
          console.log(response);
          const data = await fetch(
            "http://localhost:3000/auth/google-authentication",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ token: response.credential }),
            }
          );
          console.log(data);
        }}
      ></GoogleLogin>
    </GoogleOAuthProvider>
  );
}

export default App;
