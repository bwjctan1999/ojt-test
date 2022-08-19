import { useNavigate } from "react-router-dom";
import DesignTeamwork from "../assets/svgs/DesignTeamwork.svg";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen px-36 py-8">
      <ul className="flex items-center justify-between">
        <li className="text-h6 flex gap-4">
          <div className="w-8 h-8 rounded-full bg-gradientBlue-start"></div>
          Something
        </li>
        <li className="bg-slate-100 ">
          <Button
            onClick={() => navigate("/Login")}
            text="Let's Go"
            bgcolor="bg-gradient-to-r from-gradientBlue-start to-gradientBlue-end"
          />
        </li>
      </ul>

      <div className="item-center flex h-full justify-around">
        <div className="flex w-1/2 flex-col justify-center gap-8 ">
          <h2>Lorem ipsum dolor sit amet</h2>
          <h5>
            onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </h5>
          <div className="w-52">
            <Button
              onClick={() => navigate("/Login")}
              text="Let's Go"
              bgcolor="bg-gradient-to-r from-gradientBlue-start to-gradientBlue-end"
            />
          </div>
        </div>

        <div className="m-auto w-1/2">
          <img src={DesignTeamwork} alt="team work svg" />
        </div>
      </div>
    </div>
  );
}
