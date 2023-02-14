const addToDb = (id)=> {
    let Obj = {};
    const exist = localStorage.getItem('cart-item');
    if(exist){
        Obj = JSON.parse(exist);
        if(Obj.hasOwnProperty(id)){
            const quantity = Obj[id];
            Obj[id] = quantity + 1;
        }else {
            Obj[id] = 1;
        }
    }else {
        Obj[id] = 1;
    }
    localStorage.setItem('cart-item', JSON.stringify(Obj))
}

const LoadfromDb = () => {
    let Obj = {};
    const exist = localStorage.getItem('cart-item');
    if(exist){
        Obj = JSON.parse(exist);
    }
    return Obj;
}

export {addToDb, LoadfromDb};