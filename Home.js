import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import localizacion from '../assets/img/location.png';
import restaurantes from '../assets/img/restaurantes.png';
import mercados from '../assets/img/mercados.png';
import farmacias from '../assets/img/farmacias.png';
import licores from '../assets/img/licores.png';
import alkosto from '../assets/img/alkosto.jpg';
import qbano from '../assets/img/qbano.png';
import bbc from '../assets/img/bbc.png';
import la_rebaja from '../assets/img/la_rebaja.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaComment } from 'react-icons/fa';
import Navbar from '../Navegacion/Navbar'
import Card from './Card';
import Footer from '../Navegacion/Footer';
import Mapa from './mapa';

const Home = () => {
  return (
    <div className='home'>

      <Navbar />
      {/* <img
        src={localizacion}
        className='location_img'
        alt=''
      /> */}
      <div >
        <div className="row">
          <div className="col-sm-8 izq">
            <h2 className='ubi'>Ingresar mi ubicación</h2>
            <FontAwesomeIcon icon={faLocationDot} size="2x" transform="right-135"/>
            <input className="inp border" className='entrega' type="text" name="direccion" placeholder="Escribe la direccion de entrega" id="direccion"/>
            <div>
              <FontAwesomeIcon icon={faLocationArrow} pull="left" size='2x' transform="right-135"/>
              <h2 className='loc'>Usar mi ubicacion actual</h2>
            </div>
          </div>
          <div class="col-sm-4 position">
            <Mapa />
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <div className='linea1' />

        <Link to='/locales'>
          <img
            src={restaurantes}
            className='restaurantes_img'
            alt=''
          />
        </Link>

        <img
          src={mercados}
          className='mercados_img'
          alt=''
        />

        <img
          src={farmacias}
          className='farmacias_img'
          alt=''
        />

        <img
          src={licores}
          className='licores_img'
          alt=''
        />

        <div className='linea2' />

        <h1 className='cadenas'>Nuestras cadenas</h1>
        <h2 className='text_cadenas'>Estas son las cadenas mas reconocidas en Pance</h2>

        <a href='https://www.bbccerveceria.com/'>
          <img
            src={bbc}
            className='bbc_img'
            alt=''
          />
        </a>

        <a href='https://www.alkosto.com/'>
          <img
            src={alkosto}
            className='alkosto_img'
            alt=''
          />
        </a>

        <a href='https://www.larebajavirtual.com/'>
          <img
            src={la_rebaja}
            className='laRebaja_img'
            alt=''
          />
        </a>

        <a href='https://sandwichqbano.com/'>
          <img
            src={qbano}
            className='qbano_img'
            alt=''
          />
        </a>

        <div className='linea3' />

        <h1 className='unete'>Únete a <font color="#FF8351">Rappi</font> </h1>
        <Card />
        <Footer />

        {/* <Link to='/chat'>
        <button className='btn-flotante'>
          <i className="fa-solid fa-comments" style={{ paddingRight: "6px" }}></i>
          Chat</button>
      </Link> */}

      </div>
      )
}

      export default Home

