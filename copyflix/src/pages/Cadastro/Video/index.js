import React from 'react';
import { Link } from 'react-router-dom';

import TemplateBase from '../../../components/TemplateBase/index'

function CadastroVideo() {
    return (
        <TemplateBase>
            <h1>Cadastrar Video!</h1>
            <Link to="/cadastro/categoria">
                <h2>Cadastrar Categoria</h2>
            </Link>
        </TemplateBase>
    )
}

export default CadastroVideo;