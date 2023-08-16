import { useState } from "react"
import CardServ from "../../components/CardServ"
import "./style.css"

export default function ListaServicos() {

    //Aqui vai os comandos de typescript

    const [servs, setServs] = useState<any[]>([

        {
            titulo: "DESENVOLVIMENTO DE SITE INSTITUCIONAL - GATEWAY DE PAGAMENTO / FINTECH",
            valor: "R$ 1300,00",
            descricao: "DESENVOLVER UM SITE RESPONSIVO QUE SEJA UTILIZADO COMO UMA PLATAFORMA DE APRESENTAÇÃO DO NOSSO GATEWAY DE PAGAMENTO. O OBJETIVO PRINCIPAL DESTE PROJETO É CRIAR UM SITE ATRAENTE E INFORMATIVO, QUE DEMONSTRE AS FUNCIONALIDADES E BENEFÍCIOS DO NOSSO GATEWAY DE PAGAMENTO PARA POTENCIAIS CLIENTES.",
            skills: ["HTML", "CSS", "REACT"]
        },
        {
            titulo: "BOT TELEGRAM PAGAMENTO",
            valor: "R$ 2400,00",
            descricao: "PRECISO FAZER UM CÓDIGO EM PYTHON PARA UM BOT DO TELEGRAM. O BOT SERÁ PARA SOLICITAÇÃO DE PAGAMENTO.",
            skills: ["PYTHON"]
        },
        {
            titulo: "CAIXA RÁPIDO",
            valor: "R$ 1200,00",
            descricao: "PRECISO FAZER UM SOFTWARE QUE PERMITA AO USUÁRIO FAZER O UPLOAD DE SEU EXTRATO BANCÁRIO EM FORMATO( OFX). DENTRO DO SOFTWARE O MESMO PODERÁ CATEGORIZAR TODAS AS SUAS RECEITAS E DESPESAS, TENDO CATEGORIAS SUGERIDAS PELO SOFTWARE E PERMITINDO TAMBÉM PERSONALIZAÇÕES. APÓS O LANÇAMENTO DE VÁRIOS EXTRATOS O SOFTWARE IRÁ ENTENDER QUE SÃO LANÇAMENTOS PARECIDOS E FARÁ A CATEGORIZAÇÃO DE MANEIRA AUTOMÁTICA, CABENDO AO USUÁRIO SOMENTE CATEGORIZAR AS RECEITAS E DESPESAS QUE NÃO SE REPETEM. APÓS A CATEGORIZAÇÃO O SOFTWARE IRÁ EMITIR GRÁFICOS E RELATÓRIOS BASEADOS NA CATEGORIZAÇÃO DAS CONTAS.",
            skills: ["PYTHON"]
        }

    ]);

    const [servicoDigitado, setServicoDigitado] = useState<string>("");

    const [listaServFiltrados, setListaServFiltrados] = useState<any[]>(servs);

    function buscarPorServico(event: any){
        event.preventDefault(); 

        const servFiltrados = servs.filter((serv: any) => serv.skills.includes(servicoDigitado.toLocaleUpperCase()))

        if(servFiltrados.length === 0){
            alert("Nenhum servico com essa caracteristica foi encontrado")
        }else{
            setListaServFiltrados(servFiltrados)
        }
    }

    function retornoServicoGeral(event: any){
        if(event.target.value === ""){
            setListaServFiltrados(servs)
        }
        setServicoDigitado(event.target.value)
    }

    
    return (
        

            <main id="lista-servicos">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr/>
                            <form method="post" onSubmit={buscarPorServico}>
                                <div className="wrapper_form">
                                    <label htmlFor="busca">Procurar serviços</label>
                                    <div className="campo-label">
                                        <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." onChange={retornoServicoGeral} />
                                            <button type="submit">Buscar</button>
                                    </div>
                                </div>
                            </form>
                            <div className="wrapper_lista">
                                <ul>
                                    {listaServFiltrados.map((serv: any, index: number) => {
                                        return <li>
                                            <CardServ
                                            titulo={serv.titulo}
                                            valor={serv.valor}
                                            descricao={serv.descricao}
                                            techs={serv.skills}
                                            />

                                        </li>
                                    }
                                    )}

                                </ul>
                            </div>
                    </div>
                </div>
            </main>
 
        
    )
}
