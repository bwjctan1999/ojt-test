import DesignTeamwork from "../assets/svgs/DesignTeamwork.svg";
import Button from "../components/Button";
import TextField from "../components/Textfield";
import Navbar from "../components/Navbar";

export default function Product() {
  return (

<div> 
<Navbar/>
<div className="flex flex-row">

    

    <div className="flex flex-col pt-10 items-pt-10 min-h-screen bg-gray-50 px-32">
        <h4 className="text-sm">home/dessert/lasagna</h4>
       


        <div className="w-96 mt-5">
        <p className="text-sm text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus tempor sed commodo, scelerisque. Adipiscing bibendum pretium habitasse eget nisl tellus et amet nam. Ut quis et auctor vel, nullam tristique sit est. Et netus eu malesuada a quisque. Senectus vitae sagittis malesuada facilisis torto.
        </p>
        </div>
    </div>


    <div className="flex flex-col pt-10 min-h-screen bg-gray-50 px-32">
        <h1 className="text-lg font-semibold">Lasagna</h1>
        <h1 className="text-sm">Dessert</h1>

        <div className="w-96 mt-5">
        <p className="text-sm text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus tempor sed commodo, scelerisque. Adipiscing bibendum pretium habitasse eget nisl tellus et amet nam. Ut quis et auctor vel, nullam tristique sit est. Et netus eu malesuada a quisque. Senectus vitae sagittis malesuada facilisis torto.
        </p>
        </div>
    </div>

    </div>
</div>




  );
}
