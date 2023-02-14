const Cart = (props) => {
    const {picture, name, balance} = props.randomObj;
    console.log(props.randomObj);
    
    
    return (
        <div className='cart'>
            <div className="random-board">
                <h2 style={{textAlign: 'center'}}>Random Books</h2>
                <div className="random-book">
                    <img src={picture} alt="" />
                    <div style={{lineHeight: '2px'}}>
                    <h5>{name}</h5>
                    <p>{balance}</p>
                    </div>
                </div>
            </div>
            <h2 style={{textAlign: 'center'}}>Selected Books</h2>
            {
                props.data.map(item=><div key={item.id}><li>{item.name} <i className="fa-solid fa-trash"></i></li></div>)
            }
            <button onClick={props.randomBtn}>Pick Randomly</button><br /><br />
            <button onClick={props.btn}>Clear All</button>
        </div>
    );
};

export default Cart;