import DesignTeamwork from "../assets/svgs/DesignTeamwork.svg";
import Button from "../components/Button";
import TextField from "../components/Textfield";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gradientBlue-start to-gradientBlue-end">
      <div className="w-2/5 rounded-xl bg-white px-16 pt-12 pb-10 text-left shadow-lg">
        <h3 className="mb-4 pb-3 text-center text-2xl  font-bold text-zinc-900 ">
          Login
        </h3>

        <form action="">
          <div className="mt-4">
            <div>
              <input
                type="text"
                placeholder="Email"
                className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4 text-right">
              <input
                type="password"
                placeholder="Password"
                className="mt-2 mb-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="text-center">
              <input type="checkbox" />
              <label class="mr-44 text-sm"> Remember me</label>
              <a
                href="#"
                className=" my-5 text-sm text-blue-600 hover:underline "
              >
                Forget Password?
              </a>
            </div>

            <div className="mt-8 flex items-baseline justify-between">
              <Button
                onClick={() => navigate("/Login")}
                text="Login"
                bgcolor="bg-gradient-to-r from-gradientBlue-start to-gradientBlue-end"
              />
            </div>

            <div className="text-center">
              <p className="my-5 text-sm">
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
