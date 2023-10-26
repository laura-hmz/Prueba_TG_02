import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="group border-solid border-2 border-gray-200 relative shadow-2xl h-12 w-48 overflow-hidden rounded-2xl bg-[#80CC29] text-lg font-bold text-white hover:text-white hover:border-white hover:border-solid hover:border-[1px] hover:bg-[#66a321]" onClick={() => loginWithRedirect()}>Acceder</button>;
};

export default LoginButton;