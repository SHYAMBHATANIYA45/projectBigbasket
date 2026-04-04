import React, { useState, useRef } from "react";
import Navbar from "../Root/Navbar";
import Admin from "./Admin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Create() {
  let Navigate = useNavigate()
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: "",
  });

  // updateImage
  let updateImage = async (event) => {
    let imageFile = event.target.files[0];
    let base64Image = await convertBase64String(imageFile);
    setProduct({
      ...product,
      image: base64Image,
    });
  };

  let convertBase64String = (imageFile) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(imageFile);
      fileReader.addEventListener("load", () => {
        if (fileReader.result) {
          resolve(fileReader.result);
        } else {
          reject("Error Occurred");
        }
      });
    });
  };

  
  let handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  let formSubmit = (event) => {
    event.preventDefault();

    let url = "http://127.0.0.1:5000/api/product";

    //product is body which we write in postman

    axios
      .post(url, product)
      .then((response) => {
        console.log("data has been submitted to server");
      })
      .catch((error) => {
        console.log(error);
      });
    Navigate("/admin");
  };

  return (
    <>
      {/* <Navbar /> */}
      {/** already in app.jsx we use it for visible in every page  */}
      {/* <Navbar /> */}
      <div className="container-fluid">
        <div className="">
          <p className="text-success fw-semibold fs-3 mt-3 mx-4">
            Create new Product
          </p>
        </div>

        <p className="mx-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nam
          fuga, architecto, dolore alias atque maxime at accusamus, recusandae
          autem quas repellat voluptate veritatis. Fugiat sunt quaerat laborum
          adipisci minima?
        </p>

        <div className="row mx-2">
          <div className="col-12 col-md-6">
            <div className="card mt-3">
              <div className="card-header">
                <p className="fs-3 text-success mx-2">New Product</p>
                <div className="card-body">
                  {" "}
                  <form onSubmit={formSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="product name"
                        className="form-control"
                        value={product.name}
                        name="name"
                        onChange={handleChange}
                        required
                      />

                      <div className="input-group">
                        <input
                          type="file" 
                          className="form-control mt-2"
                          placeholder="Product image"
                          // value={product.image}
                          name="image"
                          onChange={updateImage}
                          required
                        />
                        <button className="input-append d-flex btn btn-sm btn-danger mt-2">
                          Browse
                        </button>
                      </div>

                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="enter price"
                        value={product.price}
                        name="price"
                        onChange={handleChange}
                        required
                      />

                      <input
                        type="text"
                        className="form-control mt-2"
                        id="username"
                        placeholder="Qty Availability"
                        value={product.qty}
                        name="qty"
                        onChange={handleChange}
                      />

                      <textarea
                        typeof="text"
                        placeholder="General Info"
                        rows={3}
                        cols={67}
                        className="mt-2 px-2"
                        value={product.info}
                        name="info"
                        onChange={handleChange}
                      ></textarea>
                      <div>
                      
                         
                            <button
                            onSubmit ={formSubmit}
                            className="btn btn-sm btn-success m-1 ">
                             Create 
                         </button>
                        
                        

                       
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
