import axios from 'axios'
import { useEffect, useState } from 'react'
import Form from './Form'
import { Link } from "react-router-dom";

const ProductForm = () => {

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        getProductos();
    }, [])

    async function getProductos(){
        await axios.get('http://localhost:8000/api/productos')
            .then( res => {
                console.log(res.data.productos);
                setProductos(res.data.productos);
            })
            .catch(err => console.log(err));
    }
    
    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-12">
            <h2>Product Manager</h2>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-12">
                <Form 
                    setProductos={setProductos} 
                    productos={productos}
                />
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-12">
                <h3>All productos</h3>
                {productos.map( producto => (
                    <p
                        key={producto._id}
                    ><Link to={`/${producto._id}`}>{producto.title}</Link></p>
                ))}
            </div>
        </div>
        </div>
    )
}

export default ProductForm