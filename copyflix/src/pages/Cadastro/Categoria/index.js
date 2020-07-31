import React, { useState } from 'react';

import TemplateBase from '../../../components/TemplateBase/index'
import FormField from '../../../components/FormField';


function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
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

     /*
     Outra opc de como usar de maneira mais generica a função acima:
     function handleChange(infoDoEvento) {
         const  { getAttribute, value } = infoDoEvento.target;
        setValue(
            getAttribute('name'),
            value
        );
     }
     */

    return (

        <TemplateBase>
            <h1>Cadastro Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmite(infoDoEvento) {
                infoDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);

            }}>

            <FormField 
                label = "Nome Categoria: "
                name = "nome"
                type = "text"
                value = { values.nome }
                onChange = {handleChange}
            />

            <FormField 
                label = "Descrição: "
                name = "descricao"
                type = "textarea"
                value = { values.descricao }
                onChange = {handleChange}
            />

            <FormField 
                label = "Cor: "
                type = "color"
                name = "cor"
                value = { values.cor }
                onChange = {handleChange}
            />
            
            <button>
                Cadastrar!
            </button>
            

            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
        </TemplateBase>
    )
}

export default CadastroCategoria;