import Slider from '../layouts/Slider'
import { useState, useEffect } from 'react'
import './Home.css';
import participantes from '../../assets/participantes.svg'
import relogio from '../../assets/relogio.svg';
import estrela from '../../assets/estrela.svg';
import { Link } from 'react-router-dom';
import Loading from '../layouts/Loading';
import { Rating } from 'react-simple-star-rating'

const Home = () => {
  const [cursos, setCursos] = useState([])
  const [selectedTab, setSelectedTab] = useState(1)
  const [removeLoading, setRemoveLoading] = useState(false)


  const selectTab = (index) => {
    setCursos([])
    setRemoveLoading(false)
    setSelectedTab(index)
    if (index === 1) {
      maisPopoulares()
    } else if (index === 2) {
      melhoresAvaliados()
    } else if (index === 3) {
      maisRecentes()
    }
  }

  useEffect(() => {
    fetch("http://localhost:3004/cursos?_sort=matriculados&_order=desc&_limit=3")
      .then((res) => res.json())
      .then((data) => {
        setCursos(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
  }, [])

  function maisPopoulares() {
    fetch("http://localhost:3004/cursos?_sort=matriculados&_order=desc&_limit=3")
      .then((res) => res.json())
      .then((data) => {

        setCursos(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
  }

  function melhoresAvaliados() {
    fetch("http://localhost:3004/cursos?_sort=avaliacao&_order=desc&_limit=3")
      .then((res) => res.json())
      .then((data) => {
        setCursos(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
  }

  function maisRecentes() {
    fetch("http://localhost:3004/cursos?_sort=criado_em&_order=desc&_limit=3")
      .then((res) => res.json())
      .then((data) => {
        setCursos(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Slider />
      <section className='containerPages mb100'>
        <h1 className='red fontMediumLarge mb-4'>Módulos Educacionais</h1>
        <div className='filtrosModulos px-2 mb-5'>
          <button onClick={() => selectTab(1)} className={selectedTab === 1 ? "fontSmall ativo" : "fontSmall"}>Mais populares</button>
          <button onClick={() => selectTab(2)} className={selectedTab === 2 ? "fontSmall ativo" : "fontSmall"}>Mais bem avaliados</button>
          <button onClick={() => selectTab(3)} className={selectedTab === 3 ? "fontSmall ativo" : "fontSmall"}>Mais recentes</button>
        </div>
        <div className='mb-5'>
          {!removeLoading && <Loading />}
          {cursos && cursos.map((curso) => (
            <div key={curso.id} className='cursoContainer px-2 bgGrey'>
              <img src={curso.capa} alt="capa do curso" className='cursoImagem' />

              <div className='cursoTitle'>
                <h2 className='fontSmall2 fw600'>{curso.titulo}</h2>
                <p className='fontUltraSmall fw600 red'>{curso.parceiros}</p>
              </div>

              <img src={participantes} alt="matriculados" />
              <p className='fw400 alignText'>{curso.matriculados}</p>

              <img src={relogio} alt="duração" />
              <p className='fw400 alignText'>{curso.duracao}</p>

              <Rating ratingValue={Number(curso.avaliacao) * 20} fillColor='#F6303F' id='mouseDefault' readonly={true} />
              <p className='fw400 alignText'>{(curso.avaliacao).replace('.', ',')}</p>
              <Link to='' className='cursoButton bgDarkGrey white fontSmall2 fw600'>Ver módulo</Link>
            </div>
          ))}
        </div>
        <Link to='' className='cursoButton bgDarkGrey white fontSmall2 fw600' id='verMais'>Ver mais</Link>
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