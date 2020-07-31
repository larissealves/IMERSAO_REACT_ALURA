import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TemplateBase from '../../../components/TemplateBase/index'


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

            
            <div>
                <label>
                    Nome da Categoria:
                    <input
                        type = "text"
                        value = {values.nome}
                        name="nome"
                        onChange = {handleChange}
                    />
                </label>


            <div>
                <label>
                    Descrição:
                    <input
                        type = "text"
                        value = {values.descricao}
                        name="descricao"
                        onChange = {handleChange}
                    />
                </label>
            </div>


                <label>
                    Cor:
                    <input
                        type = "color"
                        value = {values.cor}
                        name="cor"
                        onChange = {handleChange}
                    />
                </label>


            </div>

    
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

            <Link to="/">
                <h2>aaaaaaaa</h2>
            </Link>
        </TemplateBase>
    )
}

export default CadastroCategoria;