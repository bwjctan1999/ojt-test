import DesignTeamwork from "../assets/svgs/DesignTeamwork.svg";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className=" h-screen px-36 py-8">
      <div className="flex h-16 w-full gap-4 just">
        <div className="block h-12 w-12 rounded-full bg-gradientBlue-start"></div>
        <h4>Service</h4>
      </div>

      <div className="flex h-full item-center justify-around">
        <div className="flex w-1/2 flex-col justify-center gap-8 ">
          <h2>Lorem ipsum dolor sit amet</h2>
          <h5>
            onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </h5>
          <div className="w-52">
            <Button
              text="Let's Go"
              bgcolor="bg-gradient-to-r from-gradientBlue-start to-gradientBlue-end"
            />
          </div>
        </div>

        <div className="w-1/2 m-auto">
          <img src={DesignTeamwork} alt="team work svg" />
        </div>
      </div>
    </div>
  );
}
