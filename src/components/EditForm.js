import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './Form';
import { useParams } from 'react-router-dom';

const EditForm = () => {
    
    const param = useParams();
    const [producto, setProducto] = useState(null);

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
            <div className="row">
                <div className="col-12">
                <h2>Edit Product</h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    {producto &&
                        <Form 
                            createNewProducto={false}
                            id_producto={producto._id}
                        /> 
                    }
                </div>
            </div>
        </div>
    )
}

export default EditForm