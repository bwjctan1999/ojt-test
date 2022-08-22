import DesignTeamwork from "../assets/svgs/DesignTeamwork.svg";
import Food from "../assets/imgs/food.jpg";

export default function FeatureCard() {
  const testdata = [
    {
      title: "Lorem Ipsum amet",
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
  ];

  return (
    <div className="h-2/3 w-full">
      <div className="flex aspect-square h-full w-full flex-col gap-6 lg:flex-row">
        <div className="w-1/2">
          <img
            src={Food}
            className="width-auto m-auto aspect-square h-full object-contain"
          />
        </div>
        <div className="my-auto w-1/2 p-5">
          <h3>Lorem Ipsum amet</h3>
          <h5>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
          </h5>
        </div>
      </div>
    </div>
  );
}
