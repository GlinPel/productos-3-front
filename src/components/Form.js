import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Form = ({productos, setProductos, createNewProducto, id_producto}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();


    useEffect(() => {
      if(!createNewProducto){
        getProductoById();
      }
    }, [])

    function getProductoById(){
        axios.get(`http://localhost:8000/api/productos/${id_producto}`)
        .then( res => {
            console.log(res.data.producto);
            setTitle(res.data.producto.title);
            setPrice(res.data.producto.price);
            setDescription(res.data.producto.description);
        })
        .catch(err => console.log(err));
    }
    
    
    function onSubmitForm(e){
        e.preventDefault();
        if(title === "" || price === "" || description === ""){
            console.log("llenar todo el formulario")
            return;
        }
        if(createNewProducto){
            createProducto();
        }else{
            editProducto();
        }
    }
    function createProducto(){
        axios.post('http://localhost:8000/api/productos/new', {
            title,
            price,
            description
        }).then( res => {
            console.log(res.data);
            setProductos([...productos, res.data.producto])
            setTitle("");
            setPrice("");
            setDescription("");
        });
    }
    
    function editProducto(){
        axios.put(`http://localhost:8000/api/productos/update/${id_producto}`, {
            title,
            price,
            description
        }).then( res => {
            console.log(res.data);
            setTitle("");
            setPrice("");
            setDescription("");
            history.push("/");
        });
    }

    return (
        <form onSubmit={onSubmitForm}>
            <div className="row g-3 align-items-center mb-3">
                <div className="col-auto">
                    <label htmlFor="title" className="col-form-label">Title</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="title" className="form-control" name="title" value={title}
                        onChange={ (e) => setTitle(e.target.value)}
                    />
                </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
                <div className="col-auto">
                    <label htmlFor="price" className="col-form-label">Price</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="price" className="form-control" name="price" value={price}
                        onChange={ (e) => setPrice(e.target.value)}
                    />
                </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
                <div className="col-auto">
                    <label htmlFor="description" className="col-form-label">Description</label>
                </div>
                <div className="col-auto">
                    <textarea className="form-control" id="description" name="description" value={description}
                        onChange={ (e) => setDescription(e.target.value)}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">{createNewProducto ? "Create" : "Edit"}</button>
        </form>
     )
}

export default Form