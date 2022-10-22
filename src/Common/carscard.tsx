
import Favourite from "./favourite";
function CarsCard(props: any) {
  const { image, name, model, isFavourite, children } = props;

  return (
    <div className="w-full  p-3 rounded-xl shadow-xl bg-white lg:max-w-lg">
      <div className=" flex justify-between">
        <h4 className="text-xl font-bold tracking-tight text-black">{name}</h4>
        <Favourite isFavourite={isFavourite} />
      </div>
      <span className="text-slate-500">{model}</span>
      <img
        className="object-cover mt-4 mb-4 w-full lg:w-100 lg:h-40"
        src={image}
        alt="image"
      />
      <div>
        <div className="htmelement-wrapper">{children}</div>
      </div>
    </div>
  );
}

export default CarsCard;
