import React from 'react'

function Cart(props) {
    
    var total = 0;
    props.data.map((product)=>{
        return(
            total= total+product.data.price
        )
        })

    console.log(props)

    return (
        <div className="row">
            {
                props.data.map((Cartitem) => {
                    return (
                        <div className="col-sm-3" >
                            <div class="card" style={{ width: "18rem", margin: "2%",backgroundColor:"silver" }}>
                                <img src={Cartitem.data.img} class="card-img-top" alt="..." style={{ height: "200px" }} />
                                <div class="card-body">
                                    <h5 class="card-title">{Cartitem.data.name}</h5>
                                    <h5 class="card-title">{Cartitem.data.price}</h5>
                                    <p class="card-text">{Cartitem.data.desc}</p>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <p style={{color:'white',fontSize:30,fontFamily:"cursive"}}>Total Cart value is :{total}</p>
        </div>
        
    )
}

export default Cart
