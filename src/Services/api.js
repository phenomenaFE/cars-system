
import { envCars,envCarsDashboard } from "../Config/config"


export function getCarsList (){
    return fetch(envCars).then(res=>res.json())
}


export function getCarGraph (){
    return fetch(envCarsDashboard).then(res=>res.json())
}
