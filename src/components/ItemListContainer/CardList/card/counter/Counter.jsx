import React,{useState,useEffect} from 'react'

function Counter({stock}) {

    const [count, setCount] = useState(1);

    function handleClickMas(){
        if (count < stock){
            setCount(count + 1);
        }
    }

    function handleClickMenos(){
        if(count > 1){
            setCount(count -1)
        }
    }

    useEffect(() => {
        console.log("Se actualizo a", {count})
    }, [count])

    const onAdd = () => {
        console.log('Se han agregado', {count}, 'al carrito')
        swal({
            title: "Good job!",
            text: "Se agregaron " + {count} + " al carrito!",
            icon: "success",
          });
    }

    return (
        <div class="container">
            <div class="d-flex">
                <button onClick={handleClickMas}>+</button>
                <h3>{count}</h3>
                <button onClick={handleClickMenos}>-</button>
            </div>
                
        </div>
    )
}

export default Counter