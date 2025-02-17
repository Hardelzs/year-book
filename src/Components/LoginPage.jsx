import Login from "../assets/Login.jpg";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex gap-20 max-w-5xl w-full p-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={Login}
            alt=""
            className="max-h-[80vh] rounded-md object-cover"
          />
        </div>

        {/* Login Form */}
        <div className="flex flex-col justify-center  w-full">
          <div className="text-center space-y-4">
            <h1 className="text-4xl">Welcome Back!</h1>
            <p className="text-sm">Continue with Google or enter your details.</p>
            <button className="border px-20 py-2 rounded-md mx-auto">
              Login with Google
            </button>
          </div>

          <div className="flex flex-col space-y-2 mt-6">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="example@gmail.com"
              className="border rounded-md bg-transparent p-2 w-full"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="border bg-transparent rounded-md p-2 w-full"
            />

            <p className="text-right">Forget Password</p>
          </div>

          <button className="border w-80 py-2 rounded-md mt-6 mx-auto">
            Login
          </button>
          <p className="mt-4 text-center">
            Doesn&apos;t have an account? <span>Sign Up for free</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;