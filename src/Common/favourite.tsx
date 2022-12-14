import fillheart from '../Assets/Images/lovecorrect.svg'
import fillempty from '../Assets/Images/love.svg'
const Favourite = (props: any) => {
  const { isFavourite,selectedFavorite} = props;
 
  return (
    <>
      <div onClick={selectedFavorite} className="bg-white border-0  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded ">
        {isFavourite ?  <img src={fillheart} alt=""/> :<img src={fillempty} alt=""/>}
     
      </div>
    </>
  );
};

export default Favourite;
