import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useState, useEffect } from 'react'
import participantes from '../../assets/participantes.svg';
import relogio from '../../assets/relogio.svg';
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';
import Loading from '../layouts/Loading';
import Pagination from 'react-bootstrap/Pagination';
import './ModulosEducacionais.css';

const ModulosEducacionais = () => {
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
    } else if (index === 7) {
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
        setCurrentPage(0)
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
        <div className='filtrosModulos responsive mb-4'>
          <button onClick={() => selectTab(1)} className={selectedTab === 1 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Covid 19</button>
          <button onClick={() => selectTab(2)} className={selectedTab === 2 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Sífilis e outras Ist's</button>
          <button onClick={() => selectTab(3)} className={selectedTab === 3 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Preceptoria</button>
          <button onClick={() => selectTab(4)} className={selectedTab === 4 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Doenças raras</button>
          <button onClick={() => selectTab(5)} className={selectedTab === 5 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Web Palestras</button>
          <button onClick={() => selectTab(6)} className={selectedTab === 6 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Sistemas prisional</button>
          <button onClick={() => selectTab(7)} className={selectedTab === 7 ? "fontSmall ativo fw600" : "fontSmall fw600"}>OPAS</button>
        </div>
        <div className='text-start'>
          <p className='fw400 fst-italic colorQtdPages mb-4'>{currentPage != pages - 1 ? endIndex : cursos.length} de {cursos.length} resultados</p>
        </div>
        {!removeLoading && <Loading />}
        <div className='parceirosContainerPage gapCursos  mb-5'>
          {currentCursos && currentCursos.map((curso) => (
            <div key={curso.id} className='marginBoxCurso'>
              <img src={curso.capa} alt="capa do curso" className='parceiroImg mb-2' />

              <div className='cursoTitle mb-2'>
                <h2 className='fontMedium2 fw600 mb-2'>{curso.titulo}</h2>
                <p className='fontUltraSmall fw600 red'>{curso.parceiros}</p>
              </div>

              <div className='containerCursoInfo mb-3'>
                <div className='containerElementsInfo'>
                  <img src={participantes} alt="matriculados" />
                  <p className='fw400 alignText'>{curso.matriculados}</p>

                  <img src={relogio} alt="duração" />
                  <p className='fw400 alignText'>{curso.duracao}</p>
                </div>
                <div className='containerElementsInfo'>
                  <Rating ratingValue={Number(curso.avaliacao) * 20} fillColor='#F6303F' id='mouseDefault' readonly={true} size={22} />
                  <p className='fw400 alignText'>{(curso.avaliacao).replace('.', ',')}</p>
                </div>
              </div>
              <div className='text-start'>
                <p className='textResumo'>{curso.resumo}</p>
              </div>
              <div className='text-end'>
                <Link to={`${curso.id}`} className='DarkGrey linkCurso fw600'>Ver Curso</Link>
              </div>
            </div>
          ))}
        </div>
        <div className='mb-5 paginacao'>
          <Pagination>
            <Pagination.Prev onClick={() => {
              if (currentPage !== 0)
                setCurrentPage(Number(currentPage - 1))
            }} />

            <Pagination.Item className='ativoPaginacao' onClick={() => setCurrentPage(Number(currentPage))}>{currentPage + 1}</Pagination.Item>

            {currentPage + 2 <= pages && <Pagination.Item onClick={() => setCurrentPage(Number(currentPage + 1))}>{currentPage + 2}</Pagination.Item>}
            {currentPage + 3 <= pages && <Pagination.Item onClick={() => setCurrentPage(Number(currentPage + 2))}>{currentPage + 3}</Pagination.Item>}

            {currentPage + 1 !== pages && <Pagination.Next onClick={() => {
              if (currentPage !== pages - 1)
                setCurrentPage(Number(currentPage + 1))
            }} />}
          </Pagination>
        </div>
      </section>
    </section>
  )
}

export default ModulosEducacionais