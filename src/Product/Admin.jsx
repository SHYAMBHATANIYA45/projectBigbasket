import React from "react";
import { details } from "../assets/product";
import Navbar from "../Root/Navbar";
import { Link } from "react-router-dom";
import "./Admin.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Admin() {
     
  let[products,setProducts]=useState([]);
  useEffect(()=>{
   getAllproduct()
  },[])

  let getAllproduct=()=>{
 let url = `http://127.0.0.1:5000/api/product/`
    axios.get(url).then((response)=>{
     setProducts(response.data.products);
    })
    .catch((error)=>{
  console.log(error);
    })
  }

let porductDelete=(_id)=>{
  let url  = `http://127.0.0.1:5000/api/product/${_id}`
  axios.delete(url).then((response)=>{
   getAllproduct();
  })
  .catch((error)=>{
    console.log(error)
  })
}

  return (
    <>
      {/* <Navbar /> */}
      <div className="container-fluid">
        <div className="product_detail">
          <p className="mt-3 m-1 text-success fs-3 fw-semibold">
            Product Details
          </p>
        </div>
        <button className="btn btn-sm btn-success mt-3 m-1 mb-3">
          <Link to="/create" className="text-white text-decoration-none ">
            Create new
          </Link>
        </button>
        <div className="row">
          <div className="col-12 mt-4">
            <div className="card p-3 shadow-sm ">
             <table className="table table-striped table-bordered table-hover align-middle text-center"> 
                 <thead className="table-light">
                  <tr className="p-4">
                    <th>id</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {products.length>0?(
                <tbody>
                  { products.map((item, index) => {
                    return (
                      <tr key={index} className="text-center h-90">
                        <td>{item._id}</td>
                        <td>
                          {" "}
                          <img
                            src={item.image}
                            className="image-thumbnail"
                            alt={item.alt}
                          />
                        </td>
                        
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td>
                          <button  className="btn btn-sm btn-success m-1 ">
                            <Link
                              to={`/update/${item._id}`}
                              className="text-white text-decoration-none"
                            >
                              Update
                            </Link>
                          </button>
                          <button onClick={porductDelete.bind(this,item._id)} className=" btn btn-sm btn-danger m-1">
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>):
                <tbody>
                   <tr>
                    <td colSpan="6">
                      item not foun
                      </td></tr>
                  </tbody>
                  }
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
