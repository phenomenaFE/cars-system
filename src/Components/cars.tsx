import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchCarDetailList } from "../atoms/cars-atom";
import CarsCard from "../Common/carscard";
import PersonCounter from "../Common/personscounter";
import rideType from "../Assets/Images/manual.svg";
import grid from "../Assets/Images/Line.svg";
import linesystem from "../Assets/Images/linesystem.svg"
import { filterByDate, filterByModel } from "../Pages/Home/util";

function Cars() {
  const carsList = useRecoilValue(fetchCarDetailList);
  const [filteredproduct, setFilteredproduct] = useState(carsList);
  const setFilterHandle = (event: any, filterType: string) => {
    if (filterType === "bymodel") {
      setFilteredproduct(filterByModel(carsList, event));
    } else {
      setFilteredproduct(filterByDate(carsList, event));
    }
  };
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-black mb-3">
        Booking
      </h1>

      <div className="mt-4 mb-4 ">
        <div className="w-full flex justify-between">
          <div className="filter_Wrapper flex">
            <select
              id="modeltype"
              onChange={(e) => setFilterHandle(e.target.value, "bymodel")}
              className="bg-white border w-40 border-gray-300 text-gray-900 text-sm  rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={"All"}>All</option>
              {carsList.map((carItem: any) => (
                <option value={carItem.car_model}>{carItem.car_model}</option>
              ))}
            </select>
            <select
              id="modeltype"
              onChange={(e) => setFilterHandle(e.target.value, "bydate")}
              className="bg-white ml-3 mr-3 w-40  border border-gray-300 text-gray-900 text-sm  rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={"All"}>All</option>
              {carsList.map((carItem: any) => (
                <option value={carItem.car_model_year}>
                  {carItem.car_model_year}
                </option>
              ))}
            </select>
          </div>
          <div className="grid_System flex">
            <button className="bg-white ml-1 mr-1  hover:bg-gray-100 text-gray-800 rounded-full font-semibold py-2 px-4     shadow">
               <img src={grid} alt=""/>
            </button>
            <button className="bg-violet-800  ml-1 mr-1 hover:bg-violet-400 rounded-full text-gray-800 font-semibold py-2 px-4     shadow">
               <img src={linesystem} alt=""/>
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
        {filteredproduct.map((car: any) => (
          <CarsCard
            key={car.id}
            name={car.car}
            image={car.imgCar}
            model={car.car_model}
            isFavourite={car.favourite}
          >
            <div className=" flex justify-between">
              <div className="block info-card-ride">
                <span className="flex content-between">
                  <PersonCounter numberofpersons={car.numberofpersons} />
                  <span className="text-slate-500 flex items-center">
                    <img src={rideType} alt="" className="ml-2 mr-2" />
                    {car.ridecontrol}
                  </span>
                </span>
              </div>
              <div className="info-rent-car">
                <span className="text-slate-500 ">{car.price}/day</span>
              </div>
            </div>
          </CarsCard>
        ))}
      </div>
    </>
  );
}

export default Cars;
