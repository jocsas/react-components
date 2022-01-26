import {useState} from 'react';
import Button from '../Button'

const Card = () => {

    const [valor, setValor] = useState(0)

    function add ()  {
       setValor(valor + 1)
    }

    function del ()  {
        setValor(valor - 1)
     }
    
    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro Card
            </div>
            <div className="card-body">
            <Button 
                className="btn btn-success"
                onClick={add}    
            >
                ADD
            </Button>
            <Button 
                className="btn btn-danger"
                onClick={del}    
            >
                DEL
            </Button>
            
            <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;