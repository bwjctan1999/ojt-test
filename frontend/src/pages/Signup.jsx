import DesignTeamwork from "../assets/svgs/DesignTeamwork.svg";
import Button from "../components/Button";
import TextField from "../components/Textfield";

export default function Signup() {
  return (
    <div className="flex flex-wrap gap-9 min-h-screen items-center justify-center bg-gray-50">
      <div className=" px-12 pt-12 pb-10 text-left md:w-5/12 lg:w-5/12 xl:w-4/12 ">
        
        <h3 className="mb-2 pb-3 text-h5  font-bold text-zinc-900 ">
          Create New Account
        </h3>

        <p className="text-sm mb-4">
          Already A Member? 
          <a  
            onClick={() => navigate("/Login")} 
            className="text-blue-600 hover:underline">
          Login
          </a>
        </p>

        <form action="">
          <div className="flex gap-3 mb-4">
            <TextField
              type="text"
              placeholder="First Name"
              className="mt-2 w-10 rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"/>
            <TextField
              type="text"
              placeholder="Last Name"
              className="mt-2 w-12 rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"/>
          </div>

        <div className= "mb-4">
          <TextField
            type="text"
            placeholder="Email"
            className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"/>
          </div>

        <div className="flex gap-3 mb-4">
          <TextField
            type="password"
            placeholder="Password"
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"/>
          <TextField
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"/>
        </div>

        <div className="mb-8">
          <input type="checkbox" />
          <label class="text-sm">     I agree with the <a
              href="#"
              className="text-sm text-blue-600 hover:underline "
            >
            Terms and Conditions
            </a></label>
        </div>

          <div className="flex items-baseline justify-between ">
            <Button
              onClick={() => navigate("/Login")}
              text="Create Account"
              bgcolor="bg-gradient-to-r from-gradientBlue-start to-gradientBlue-end"
            />
          </div>

        </form>
      </div>
      <div className="w-1/2">
          <img src={DesignTeamwork} alt="team work svg" />
        </div>
    </div>

    
  );
}
