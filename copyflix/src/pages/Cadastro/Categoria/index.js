import React, { useState, useEffect } from 'react';

import TemplateBase from '../../../components/TemplateBase/index'
import FormField from '../../../components/FormField';
import './styles.css'
import useForm from '../../../hocks/useForm';


function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };

    const { handleChange, ClearForm, values } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);
    

    

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

    useEffect(() => {
        const URL = "http://localhost:3001/categorias"
        fetch(URL)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias ([
                    ...resposta
                ]);
            });
    }, []);


        /*setTimeout(() =>{
            setCategorias([
                ...categorias,
                {   
                        "id": 1,
                        "nome": "Front-End",
                        "descricao": "",
                        "cor": "#6bd1ff"
                    },
                    {   
                        "id": 2,
                        "nome": "Back-End",
                        "descricao": "",
                        "cor": "#6bd1ff"
                    },
            ]);
        }, 4 * 1000);
    }, []});*/
    


    return (

        <TemplateBase>
            <h1>Cadastro Categoria: {values.nome}</h1>

            <form onSubmit = {function handleSubmite(infoDoEvento) {
                infoDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values,
                ]);

                ClearForm();

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
            
            <button class="button">
                Cadastrar!
            </button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria) => (
                        <li key={`${categoria.nome}`}>
                            {categoria.nome}
                        </li>
                ))}
            </ul>
        </TemplateBase>
    )
}

export default CadastroCategoria;