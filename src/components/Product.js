import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";

const Product = () => {

    const param = useParams();
    const [producto, setProducto] = useState({})

    useEffect(() => {
        getProductoById();
    }, [])

    async function getProductoById(){
        await axios.get(`http://localhost:8000/api/productos/${param.id_producto}`)
            .then( res => {
                console.log(res.data.producto);
                setProducto(res.data.producto);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col-12">
                <h2>{producto.title}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                   <p>Price: {producto.price}$</p>
                   <p>Description: {producto.description}</p>
                </div>
            </div>
            <Link to="/"><button className="btn btn-primary">Return</button></Link>
        </div>
    )
}

export default Product