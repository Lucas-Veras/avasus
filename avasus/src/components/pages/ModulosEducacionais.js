import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useState, useEffect } from 'react'
import participantes from '../../assets/participantes.svg'
import relogio from '../../assets/relogio.svg';
import { Link } from 'react-router-dom';
import Loading from '../layouts/Loading';
import { Rating } from 'react-simple-star-rating'

const ModulosEducacionais = () => {
  //http://localhost:3004/cursos?cateroria=Covid%2019
  const [cursos, setCursos] = useState([])
  const [selectedTab, setSelectedTab] = useState(1)
  const [removeLoading, setRemoveLoading] = useState(false)

  const [cursoPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(cursos.length / cursoPerPage);
  const startIndex = currentPage * cursoPerPage;
  const endIndex = startIndex + cursoPerPage;
  const currentCursos = cursos.slice(startIndex, endIndex);

  const url = "http://localhost:3004/cursos?cateroria="

  const selectTab = (index) => {
    setCursos([])
    setRemoveLoading(false)
    setSelectedTab(index)
    if (index === 1) {
      buscarCursos(`${url}Covid%2019`)
    } else if (index === 2) {
      buscarCursos(`${url}S%C3%ADflis%20e%20outras%20ist`)
    } else if (index === 3) {
      buscarCursos(`${url}Preceptoria`)
    } else if (index === 4) {
      buscarCursos(`${url}Doen%C3%A7as%20raras`)
    } else if (index === 5) {
      buscarCursos(`${url}WebPalestras`)
    } else if (index === 6) {
      buscarCursos(`${url}Sistema%20prisional`)
    } else if (index === 7){
      buscarCursos(`${url}OPAS`)
    }
  }

  useEffect(() => {
    fetch(`${url}Covid%2019`)
      .then((res) => res.json())
      .then((data) => {
        setCursos(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
  }, [])

  function buscarCursos(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCursos(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
  }

  return (
    <section className='containerPages' id='marginTopPages'>
      <Breadcrumb className='mb-4'>
        <Breadcrumb.Item href='/'>Início</Breadcrumb.Item>
        <Breadcrumb.Item href='/'>Cursos</Breadcrumb.Item>
        <Breadcrumb.Item active>Módulos</Breadcrumb.Item>
      </Breadcrumb>
      <section className='text-center'>
        <h1 className='red fontMediumLarge fw600 mb-5'>Módulos Educacionais</h1>
        <div className='filtrosModulos mb-4'>
          <button onClick={() => selectTab(1)} className={selectedTab === 1 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Covid 19</button>
          <button onClick={() => selectTab(2)} className={selectedTab === 2 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Sífilis e outras Ist's</button>
          <button onClick={() => selectTab(3)} className={selectedTab === 3 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Preceptoria</button>
          <button onClick={() => selectTab(4)} className={selectedTab === 4 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Doenças raras</button>
          <button onClick={() => selectTab(5)} className={selectedTab === 5 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Web Palestras</button>
          <button onClick={() => selectTab(6)} className={selectedTab === 6 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Sistemas prisional</button>
          <button onClick={() => selectTab(7)} className={selectedTab === 7 ? "fontSmall ativo fw600" : "fontSmall fw600"}>OPAS</button>
        </div>
        <div className='text-start'>
          <p className='fw400 fst-italic colorQtdPages mb-4'>{endIndex} de {cursos.length} resultados</p>
        </div>
        <div>
          {!removeLoading && <Loading />}
          {cursos && cursos.map((curso) => (
            <div key={curso.id} className='cursoContainer bgGrey'>
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
      </section>
    </section>
  )
}

export default ModulosEducacionais