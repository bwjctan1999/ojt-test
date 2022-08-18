import DesignTeamwork from "../assets/svgs/DesignTeamwork.svg";
import Button from "../components/Button";
import TextField from "../components/Textfield";

export default function Login() {
  return (
    <div className="flex h-screen w-screen flex-col-reverse bg-BGblue lg:flex-row">
      <div className="flex h-3/5 w-full max-w-lg flex-col justify-center gap-6 rounded-2xl bg-white p-4 lg:h-auto lg:p-12">
        <h4 className="gap-6 font-bold text-black">Login</h4>
        <TextField placeholder="Email" type="email" />
        <TextField placeholder="Password" type="password" />
        <a className="ml-auto block">Forgot Password?</a>
        <Button text="Login" />
      </div>
      <div className="grow h-2/5 flex justify-center lg:h-full lg:p-28">
        <img src={DesignTeamwork} alt="teamwork svg" />
      </div>
    </div>
  );
}