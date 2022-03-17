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

    function deleteProducto(id){
        axios.delete(`http://localhost:8000/api/productos/delete/${id}`)
        .then( res => {
            console.log(res);
            const newProductos = productos.filter( p => p._id !== id);
            setProductos(newProductos);
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
                        createNewProducto={true}
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <h3>All productos</h3>
                    {productos.map( producto => (
                        <div key={producto._id} className="d-flex m-3">
                            <Link to={`/${producto._id}`}><p className="m-1">{producto.title}</p></Link>
                            <Link to={`/${producto._id}/edit`}><button type="button" className="btn btn-secondary btn-sm m-1">Edit</button></Link>
                            <button type="button" className="btn btn-danger btn-sm m-1" onClick={ () => deleteProducto(producto._id)}>Delete</button>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductForm