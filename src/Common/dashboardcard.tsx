function DashboardCard(props: any) {
  const { title, image, children } = props;
  return (
    <div className="w-full card-item-des  p-3 rounded-xl shadow-xl bg-white lg:max-w-lg">
      <div className="carddashboard-detail text-center">
        <img
          className=" mt-1 mb-1 ml-auto mr-auto w-16 lg:w-16 "
          src={image}
          alt="image"
        />
        <h4 className="text-xl mt-1 mb-4 font-bold tracking-tight text-black">
          {title}
        </h4>
      </div>

      <div>
        <div className="htmelement-wrapper">{children}</div>
      </div>
    </div>
  );
}

export default DashboardCard;
