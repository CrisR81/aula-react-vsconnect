//rotas
import { Link, useParams } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

//estilização
import "./style.css";

import api from "../../utils/api";


function VisualizarServico() {

    const { idServicos } = useParams();

    const [nome, setNome ] = useState<string>("")
    const [titulo, setTitulo ] = useState<string>("")
    const [valor, setValor ] = useState<string>("")
    const [descricao, setDescricao ] = useState<string>("")
    const [techs, setTechs ] = useState<string>("")
    
    
    const [listaTechs, setListaTechs] = useState<string[]>([])

    useEffect(() => {


        document.title = "Visualizar Serviços - VSConnect"

        buscarServicoPorId()
    }, [])

    function buscarServicoPorId() {

        api.get("servicos/" + idServicos).then((response: any) => {
            setNome(response.data.nome)
            setTitulo(response.data.titulo)
            setValor(response.valor.valor)
            setDescricao(response.data.descricao)
            setTechs(response.data.techs)
    
        }).catch((error) => {
            console.log(error)
        })
    }



      return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{titulo}</h2>
                        <span>{valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">

                        {
                     listaTechs.map( (skill: any, index: number ) => {
                         return <span key={ index }>{ skill }</span>
                     })
                        }

                        <span>HTML</span>
                        <span>CSS</span>
                        <span>React</span>
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;