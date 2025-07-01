import React from "react";

const Register = () => {
  return (
    <section className="flex justify-center h-[calc(100vh-91px)] items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 border-2 border-zinc-300">
        <h2 className="font-bold text-[26px] text-center text-[#2f2f2f] mt-4">
          Register your account
        </h2>
        <form className="card-body">
          <fieldset className="fieldset font-semibold text-[14px]">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex p-3 border rounded-md cursor-pointer text-white bg-[#2f2f2f] hover:bg-black gap-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current text-white"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>

            <h1 className="text-center mt-2 font-bold text-[16px]">OR</h1>
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="name"
              className="input font-semibold"
              placeholder="Name"
              required
            />

            {/* {nameError && <p className="text-xs text-error">{}</p>} */}

            {/* Photo URL  */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input font-semibold"
              placeholder="Photo URL"
              required
            />
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input font-semibold"
              placeholder="Email"
              required
            />
            {/* passowrd  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input font-semibold"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="btn btn-neutral mt-3 bg-[#2f2f2f] hover:bg-black duration-300"
            >
              Register
            </button>
            <p className="font-semibold text-center pt-4">
              Already Have An Account ?
              <Link
                className="ml-1 hover:underline text-green-900"
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Register;
