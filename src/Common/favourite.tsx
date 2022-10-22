import fillheart from '../Assets/Images/lovecorrect.svg'
import fillempty from '../Assets/Images/love.svg'
const Favourite = (props: any) => {
  const { isFavourite,selectedFavorite} = props;
  console.log("props",props)
  return (
    <>
      <div onClick={selectedFavorite} className="bg-white border-0  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded ">
        {isFavourite ?  <img src={fillheart} alt=""/> :<img src={fillempty} alt=""/>}
     
      </div>
    </>
  );
};

export default Favourite;
