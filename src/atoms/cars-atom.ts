import React from 'react';
import { atom, selector } from 'recoil';
import { filterByModel } from '../Pages/Home/util';
import {getCarsList}from '../Services/api'

export const fetchCarDetailCalc=selector({
    key:"carsList",
    get:async ({get})=>{
        try{
            const carData=await getCarsList();
            const carsListItems=await carData.cars;
            return carsListItems
        }catch(error){
            throw error
        }
      
    }
})
