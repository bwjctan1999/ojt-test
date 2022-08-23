import DesignTeamwork from "../assets/svgs/DesignTeamwork.svg";
import Button from "../components/Button";
import TextField from "../components/Textfield";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className=" xl:w-4/12 lg:w-5/12 md:w-5/12 px-12 pt-12 pb-10 text-left ">
    <div className=" w-auto">

          <img src={DesignTeamwork} alt="team work svg" />
        </div>
        <h3 className="text-center text-h5 text-zinc-900 font-bold  mb-2 pb-3 ">Login</h3>
      
        <form action="">
            <div>
                <div className="mb-4">
                <TextField type="text" placeholder="Email"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                      
                </div>
                <div className="mb-4 text-right">
                <TextField
        
                 type="password" placeholder="Password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                </div>

                <div className="mb-8 mt-4 "> 
                     <input type="checkbox"/>
                     <label class="text-sm"> Remember me</label>
                     <span class="psw">
                      <a href="#" 
                      className=" text-sm float-right text-blue-600 hover:underline ">Forget Password?</a></span>
                     
                   
                </div>

                <div className="flex items-baseline justify-between ">
                <Button
                onClick={() => navigate("/Login")}
                text="Login"
                bgcolor="bg-gradient-to-r from-gradientBlue-start to-gradientBlue-end"
              />
                </div>

                <div className="text-center">
                <p className="text-sm mt-4">Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a></p>
                </div>
            </div>
        </form>
    </div>
</div>
  );
}

