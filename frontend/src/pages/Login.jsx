import DesignTeamwork from "../assets/svgs/DesignTeamwork.svg";
import Button from "../components/Button";
import TextField from "../components/Textfield";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gradientBlue-start to-gradientBlue-end">
    <div className="w-2/5 px-16 pt-12 pb-10 text-left bg-white shadow-lg rounded-xl">

        <h3 className="text-center text-2xl text-zinc-900 font-bold  mb-4 pb-3 ">Login</h3>
      
        <form action="">
            <div className="mt-4">
                <div>
                            <input type="text" placeholder="Email"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                            
                </div>
                <div className="mt-4 text-right">
        
                            <input type="password" placeholder="Password"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 mb-2"/>
                </div>

                <div className="text-center"> 
                     <input type="checkbox"/><label class="text-sm mr-44"> Remember me</label>
                     <a href="#" 
                     className=" text-sm my-5 text-blue-600 hover:underline ">Forget Password?</a>
                </div>

                <div className="flex items-baseline justify-between mt-8">
                <Button
                onClick={() => navigate("/Login")}
                text="Login"
                bgcolor="bg-gradient-to-r from-gradientBlue-start to-gradientBlue-end"
              />
                </div>

                <div className="text-center">
                <p className="text-sm my-5">Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a></p>
                </div>
            </div>
        </form>
    </div>
</div>
  );
}
