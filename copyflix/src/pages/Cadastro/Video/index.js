import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TemplateBase from '../../../components/TemplateBase';
import useForm from '../../../hocks/useForm';
import FormField from '../../../components/FormField'
import './styles.css'
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/index'

function CadastrarVideo () {

  const history = useHistory();

  const [categorias, setCategorias] = useState ([]);

  const { handleChange, values } = useForm({

    titulo: '',
    url: '',
    categoria: '',

  });


  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (

    <TemplateBase>
      <h1> Cadastrar Video </h1>

    <form onSubmit = {(event) => {
        event.preventDefault();
        //alert('Video Cadastrado com Sucesso"');

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categorias;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
        .then(() => {
          console.log('Cadastrado');
          history.push('/'); //Envia user para Home, pós alerta
        });

    }}
    >
      
      <FormField 
        label = "Título Do Filme: "
        name = "titulo"
        type = "text"
        value = { values.titulo }
        onChange = {handleChange}
      />

      <FormField 
        label = "URL: "
        name = "url"
        type = "text"
        value = { values.url }
        onChange = {handleChange}
      />

      <FormField 
        label = "Categoria: "
        name = "categoria"
        type = "text"
        value = { values.categoriaId }
        onChange = {handleChange}
      />
    
      <button class="button">
        Cadastrar!
      </button>


    </form>
    <br/>

      
    <Link to = "/cadastro/categoria">
      Cadastrar Categoria
    </Link>

    </TemplateBase>
  );
}

export default CadastrarVideo;