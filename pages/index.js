import React from "react";
import { signIn } from "next-auth/react";
import Auth from "layouts/Auth";

export default function LoginPage() {
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signIn("google", { callbackUrl: `${window.location.origin}/dashboard` });
  };

  return (
    <Auth>
      <div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h2 className="text-dark-500 font-bold">LOGIN</h2>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <button onClick={handleGoogleLogin} className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mt-3 mb-1 w-full ease-linear transition-all duration-150">
                    LOGIN WITH GOOGLE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Auth>
  );
}
