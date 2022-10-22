import React from 'react';
import { selector } from 'recoil';
import { getCarGraph, getCarsList } from '../Services/api'

export const fetchCarDetailList = selector({
    key: "carsList",
    get: async ({ get }) => {
        try {
            const carData = await getCarsList();
            const carsListItems = await carData.cars;
            return carsListItems
        } catch (error) {
            throw error
        }

    }
})


export const fetchCarDChart = selector({
    key: "carsGraph",
    get: async ({ get }) => {
        try {
            const carDataChart = await getCarGraph();
            const carsDashboardItems = await carDataChart.carsdesc;
            return carsDashboardItems
        } catch (error) {
            throw error
        }

    }
})
