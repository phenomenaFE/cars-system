// if function repeated in this component 
export function filterByModel (DataItems,selectedItem){
     if(selectedItem==="All"){
        return DataItems.filter(filteredData => filteredData.car_model)
     }else{
        return DataItems.filter(filteredData => filteredData.car_model==selectedItem)
     }
 
}

export function filterByDate (DataItems,selectedDate){
    if(selectedDate==="All"){
       return DataItems.filter(filteredData => filteredData.car_model_year)
    }else{
       return DataItems.filter(filteredData => filteredData.car_model_year==selectedDate)
    }

}