import { useEffect, useState } from "react"
import CardDev from "../../components/CardDev"
import "./style.css"

import api from "../../utils/api";

export default function listaDevs() {

    const [devs, setDevs] = useState<any[]>([]);

        // {
        //     img_perfil: "https://github.com/Thiago-Nascimento.png",
        //     nome: "Thiago Nascimento",
        //     email: "thiago@email.com",
        //     skills: ["HTML", "CSS", "REACT"]
        // },
        // {
        //     img_perfil: "https://github.com/JessicaSanto.png",
        //     nome: "Jessica Franzon",
        //     email: "jessica@email.com",
        //     skills: ["HTML", "CSS", "REACT"]
        // },
        // {
        //     img_perfil: "https://github.com/odirlei-assis.png",
        //     nome: "Odirlei Sabella",
        //     email: "odirlei@email.com",
        //     skills: ["HTML", "CSS", "ANGULAR"]
        // },
        // {
        //     img_perfil: "https://github.com/alexiamelhado18.png",
        //     nome: "Aléxia Vitória",
        //     email: "alexia@email.com",
        //     skills: ["PYTHON", "VUE", "REACT"]
        // } 
  
    //]);

    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [listaDevsFiltrados, setListaDevsFiltrados] = useState<any[]>(devs);


    useEffect( () => {
document.title = "VS Connect - Lista de Devs"

    listarDesenvolvedores()
    }, [] )

    function buscarPorSkill(event: any){
        event.preventDefault(); 

        const devsFiltrados = devs.filter((dev: any) => dev.skills.includes(skillDigitada.toLocaleUpperCase()) )

        if(devsFiltrados.length === 0){
            alert("Nenhum desenvolvedor com essa Skill foi encontrado")
        }else{
            setListaDevsFiltrados(devsFiltrados)
        }

    }

    function retornoDevsGeral(event: any){
        if(event.target.value === ""){
            setListaDevsFiltrados(devs)
        }
        setSkillDigitada(event.target.value)
    }

    function listarDesenvolvedores() {

        api.get("users").then((response: any) => {
            console.log(response.data)
            setDevs(response.data)
        } )

    }

    return (
        <main id="lista-devs">
            <div className="container container_lista_devs">
                <div className="lista_devs_conteudo">
                    <h1>Lista de Devs</h1>
                    <hr />
                    <form method="post" onSubmit={buscarPorSkill}>
                        <div className="wrapper_form">
                            <label htmlFor="busca">Procurar desenvolvedores</label>
                            <div className="campo-label">
                                <input type="search" name="campo-busca" id="busca" placeholder="Buscar desenvolvedores por tecnologias..." onChange={retornoDevsGeral}/>
                                <button type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                    <div className="wrapper_lista">
                        <ul>
                            {devs.map((dev: any, index: number) => {
                                return <li key={index}>
                                    <CardDev 
                                    id={dev.id}
                                     foto={dev.img_perfil}
                                     nome={dev.nome}
                                     email={dev.email}
                                     techs={dev.hardSkills}
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