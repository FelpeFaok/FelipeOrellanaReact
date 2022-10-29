import './FormCheckOut.css';
import Form from 'react-bootstrap/Form';

const FormCheckOut =()=>{
    
        return (
            <>
            <section className='sectionForm'>
            <div className='formDisplay'>
            <label className="floatingInputCustom">Nombre</label>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputName"
                type="text"
                placeholder="Nombre Apellido"
            />
            </Form.Floating>

            <label className="floatingInputCustom">Telefono</label>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputPhone"
                type="number"
                placeholder="Numero de Telefono"
            />
            </Form.Floating>

            <label className="floatingInputCustom">Email</label>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputEmail"
                type="email"
                placeholder="name@example.com"
            />
            </Form.Floating>
            </div>
            </section>
        </>
        
        );
    
    }

export default FormCheckOut
