export default function StoreCard({ title, desc }) {
  return (
    <div className="h-full w-full rounded-lg shadow-md">
      <div className="h-2/5 w-full rounded-t-lg bg-slate-500 pl-6 pt-6 pb-14 pr-14">
        <div className="h-12 w-12 rounded-lg bg-white"></div>
      </div>
      <div className="px-6 py-4">
        <h6 className="text-h6 font-medium">{title}</h6>
        <p className="text-s1 mt-2">
          {desc}
        </p>
      </div>
    </div>
  );
}
