// save local storage function
const addToDb = (data)=> {
    let arr = {};
    const exist = localStorage.getItem('selected-meal');
    if(exist){
        arr = JSON.parse(exist);
        if(arr[data.idMeal]){
            arr[data.idMeal] = arr[data.idMeal] + 1;
        }else {
            arr[data.idMeal] = 1;
        }
    }else {
        arr[data.idMeal] = 1;
    }
    localStorage.setItem('selected-meal', JSON.stringify(arr));
}

// get data from localstorage
const getfromDb = () => {
    const exist = localStorage.getItem('selected-meal');
    const addedMeal = JSON.parse(exist);
    return addedMeal;
}

export {addToDb, getfromDb};