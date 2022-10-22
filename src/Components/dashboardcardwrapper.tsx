import { useRecoilValue } from "recoil";
import { fetchCarDChart } from "../atoms/cars-atom";
import DashboardCard from "../Common/dashboardcard";
import SemiCircle from "../Common/semicircle";

function DashboardCardsWrapper(props: any) {
  const carSettings = useRecoilValue(fetchCarDChart);
 

  return (
    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
      {carSettings.map((carchart: any) => (
        <DashboardCard
          key={carchart.id}
          title={carchart.title}
          image={carchart.icon}
        >
          <div className=" flex justify-between ">
            <div className="block m-auto info-card-ride relative">
              <SemiCircle percent={carchart.percent} />
            </div>
          </div>
        </DashboardCard>
      ))}
    </div>
  );
}

export default DashboardCardsWrapper;
