
import { env } from "../Config/config"


export function getCarsList (){
    return fetch(env).then(res=>res.json())
}