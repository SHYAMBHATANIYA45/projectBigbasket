import React, { useEffect } from "react";


// import Navbar from "../Root/Navbar";
import axios from "axios";
import { useState } from "react";
// import { useEffect } from "react";


function List() {
  let[products,setProducts]=useState([])
  
   useEffect(()=>{
    let url ='http://127.0.0.1:5000/api/product'
    axios.get(url).then((response)=>{
     console.log(response.data)
    setProducts(response.data.products)
    })
    .catch((error)=>{

    })
  },[])


  
  return (


 <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col animated zoomIn">
                            <p className="h3 text-success">Product List</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum magnam maxime? Ad aliquam aspernatur autem eligendi error exercitationem impedit, ipsa laboriosam magnam nam nesciunt quam quas. Culpa, error, libero.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {
                    products.length > 0 ?
                        <React.Fragment>
                            <div className="container animated zoomIn delay-1s">
                                <div className="row">
                                    {
                                        products.map(product => {
                                            return (
                                                <div className="col-md-3" key={product._id}>
                                                    <div className="card mt-2 mb-2">
                                                        <div className="card-header text-center bg-white">
                                                            <img src={product.image} alt="" width="150" height="150"/>
                                                        </div>

                                                        <div className="card-body">
                                                            <ul className="list-group">
                                                                <li className="list-group-item">
                                                                    NAME : {product.name}
                                                                </li>
                                                                <li className="list-group-item">
                                                                    Price : &#8377; {product.price.toFixed(2)}
                                                                </li>
                                                                <li className="list-group-item">
                                                                    Qty : {product.qty} Kgs
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </React.Fragment> : <React.Fragment>
                            <p className="h5 text-danger">----------- NO Products Found --------</p>
                        </React.Fragment>
                }
            </section>
        </React.Fragment>
    )
  };














      {/* <Navbar/>
      <div className="container-fluid mt-2  mb-5 " id="Product">
<pre>{JSON.stringify(products)}</pre>

        <h3 className="text-success text-start mx-3 mt-4">Product Page</h3>
        <p className="mx-3 mb-6 my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          temporibus optio quod, cupiditate porro vel dolorum voluptatum
          officia, nesciunt deserunt eveniet dolor neque? Esse sunt, unde
          eligendi repudiandae architecto libero.
        </p>

        <div className="row">
          
  {products.map((item, index) => (
    <div className="col-md-3 mb- mt-2" key={index}>
      <div className="card h-100">
        <div className="card-header d-flex">
          {item.name === "Onion" ? (
            <img
              src={item.image}
              className="card-img-top"
              alt={item.alt}
              height={178}
            />
          ) : (
            <img
              src={item.image}
              className="card-img-top"
              alt={item.alt}
            />
          )}
        </div>

        <div className="card-body">
          <p className="text-dark">Name:{item.name}</p>
          <p>Price: {item.price}</p>
          <p>Qty: {item.qty}</p>
        </div>
      </div>
    </div>
            
        ))
          
      }
         </div>
      </div> */}
  



      


export default List;
