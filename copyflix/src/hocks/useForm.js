import { useState } from 'react';

function useForm(valoresIniciais){
    const [values, setValues] = useState (valoresIniciais);    

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infoDoEvento) {
        setValue(
            infoDoEvento.target.getAttribute('name'),
            infoDoEvento.target.value
        );
    }

     function ClearForm () {
        setValues(valoresIniciais);
    }

    return {
        values,
        ClearForm,
        handleChange,
    }
}


export default  useForm;