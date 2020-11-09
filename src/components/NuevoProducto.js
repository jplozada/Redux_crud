import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
// Actions de redux
import {crearNuevoProductoAction} from '../actions/productoActions';

const NuevoProducto = () => {

    // Utilizar useDispatch y te crea una función
    const dispatch = useDispatch();
  
    // Mandar a llamar el action de productoAction
    const agregarProducto = () => dispatch(crearNuevoProductoAction());

    // Cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();
        // Validar formulario
        // Si no hay errores
        // Crear el nuevo producto
        agregarProducto();
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        <form
                             onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary mt-3 font-weight-bold text-uppercase d-block w-100"
                                >
                                    Agregar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NuevoProducto;