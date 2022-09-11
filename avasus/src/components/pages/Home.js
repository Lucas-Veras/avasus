import Slider from '../layouts/Slider'
import { useState, useEffect } from 'react'
import './Home.css';
import participantes from '../../assets/participantes.svg'
import relogio from '../../assets/relogio.svg';
import estrela from '../../assets/estrela.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [cursos, setCursos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3004/cursos?_sort=matriculados&_order=desc&_limit=3")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCursos(data)
      })
      .catch((err) => console.log(err))
  }, [])

  function maisPopoulares() {
    fetch("http://localhost:3004/cursos?_sort=matriculados&_order=desc&_limit=3")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCursos(data)
      })
      .catch((err) => console.log(err))
  }

  function melhoresAvaliados() {
    fetch("http://localhost:3004/cursos?_sort=avaliacao&_order=desc&_limit=3")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCursos(data)
      })
      .catch((err) => console.log(err))
  }

  function maisRecentes() {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCursos(data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Slider />
      <section className='containerPages mb-4'>
        <h1 className='red fontMediumLarge mb-4'>Módulos Educacionais</h1>
        <div className='filtrosModulos px-2 mb-3'>
          <button onClick={maisPopoulares} className='fontSmall ativo'>Mais populares</button>
          <button onClick={melhoresAvaliados} className='fontSmall'>Mais bem avaliados</button>
          <button onClick={maisRecentes} className='fontSmall'>Mais recentes</button>
        </div>
        <div>
          {cursos.length > 0 && cursos.map((curso) => (
            <div key={curso.id}>
              <img src={curso.capa} alt="capa do curso" />

              <h2>{curso.titulo}</h2>
              <p>{curso.parceiros}</p>

              <img src={participantes} alt="matriculados" />
              <p>{curso.matriculados}</p>

              <img src={relogio} alt="duração" />
              <p>{curso.duracao}</p>

              <Link to=''>Ver módulo</Link>
            </div>
          ))}
        </div>
        <Link to=''>Ver mais</Link>
      </section>
      <section className='containerPages mb-5'>
        <Link to='/parceiros' className='red fontMediumLarge parceirosTittle'>Parceiros</Link>
        <div className='bgGrey parceirosContainer'>
            <div className='parceiroContent'>
              <h2 className='fontMedium2 fw600 size40'>Governo do RN</h2>
              <p className='fontSmall2 fw600 size40'>Governo do Estado do Rio Grande do Norte.</p>
            </div>
            <div className='parceiroContent'>
              <h2 className='fontMedium2 fw600 size40'>SESAP</h2>
              <p className='fontSmall2 fw600 size40'>Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</p>
            </div>
            <div className='parceiroContent'>
              <h2 className='fontMedium2 fw600 size40'>UFRN</h2>
              <p className='fontSmall2 fw600 size40'>Universidade Federal do Rio Grande do Norte.</p>
            </div>
            <div className='parceiroContent'>
              <h2 className='fontMedium2 fw600 size40'>HUOL</h2>
              <p className='fontSmall2 fw600 size40'>Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte). </p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home