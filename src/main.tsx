import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, Routes, BrowserRouter } from 'react-router-dom'

// import App from './App'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import CadastroDev from './pages/CadastroDev'
import ListaDevs from './pages/ListaDevs'

// import Home from './pages/Home'
import ListaServicos from './pages/ListaServicos'
import PerfilUsuario from './pages/PerfilUsuario'
import CadastroUsuario from './pages/CadastroUsuario'
import VisualizarServico from './pages/VisualizarServico'
import CadastroServico from './pages/CadastroServico'


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Header/>

        <Routes>

          <Route path='/' element={ < Home/> }    />
          <Route path='cadastroDev' element={ < CadastroDev/> }    />  
          <Route path='listaServicos' element={ < ListaServicos/> }    />
          <Route path='listaDevs' element={ < ListaDevs/> }    />
          <Route path='perfil/:idUsuario' element={ <PerfilUsuario />} />
          <Route path='servicos/:idServico' element={ <VisualizarServico />} /> 
          <Route path='cadastrousuario' element={ <CadastroUsuario /> } />
          <Route path='cadastroservico' element={ <CadastroServico /> } />


        </Routes>
        <Footer/>

      
    </BrowserRouter>
  </React.StrictMode>,
)

