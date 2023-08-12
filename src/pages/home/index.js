
import { useState, useEffect } from 'react'
import './styles.css';
import participantes from '../../assets/participantes.svg'
import relogio from '../../assets/relogio.svg';
import { Link } from 'react-router-dom';
import Slider from '../../components/slider';
import Loading from '../../components/loading'
import ParceiroContent from '../../components/parceiroContent';
import RatingStarts from '../../components/ratingStars';

const Home = () => {
  const [cursos, setCursos] = useState([])
  const [selectedTab, setSelectedTab] = useState(1)
  const [removeLoading, setRemoveLoading] = useState(false)

  const urlMaisPopoulares = "https://avasus-api.vercel.app/cursos?_sort=matriculados&_order=desc&_limit=3"
  const urlMelhoresAvaliados = "https://avasus-api.vercel.app/cursos?_sort=avaliacao&_order=desc&_limit=3"
  const urlMaisRecentes = "s-api.vercel.app/cursos?_sort=criado_em&_order=desc&_limit=3"
// ensinando git

  const selectTab = (index) => {
    setCursos([])
    setRemoveLoading(false)
    setSelectedTab(index)
    if (index === 1) {
      buscarCursos(urlMaisPopoulares)
    } else if (index === 2) {
      buscarCursos(urlMelhoresAvaliados)
    } else if (index === 3) {
      buscarCursos(urlMaisRecentes)
    }
  }

  useEffect(() => {
    fetch(urlMaisPopoulares)
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
    <>
      <Slider />
      <section className='containerPages mb-lg-5 mb-3'>
        <h1 className='red fontMediumLarge fw600 mb-4'>Módulos Educacionais</h1>
        <div className='filtrosModulos mb-lg-5 mb-4'>
          <button onClick={() => selectTab(1)} className={selectedTab === 1 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Mais populares</button>
          <button onClick={() => selectTab(2)} className={selectedTab === 2 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Mais bem avaliados</button>
          <button onClick={() => selectTab(3)} className={selectedTab === 3 ? "fontSmall ativo fw600" : "fontSmall fw600"}>Mais recentes</button>
        </div>
        <div className='mb-5'>
          {!removeLoading && <Loading />}
          {cursos && cursos.map((curso) => (
            <div key={curso.id} className='cursoContainer bgGrey'>
              <div className='cursoTitleBox'>
                <img src={curso.capa} alt="capa do curso" className='cursoImagem' />
                <div className='cursoTitle'>
                  <h2 className='fontSmall2 fw600'>{curso.titulo}</h2>
                  <p className='fontUltraSmall mb-0 fw600 red'>{curso.parceiros}</p>
                </div>
              </div>

              <div className='cursoInfoBox'>
                <div className='boxSingleInfoBox'>
                  <img src={participantes} alt="matriculados" className='ajusteImg' />
                  <p className='fw400 alignText'>{(curso.matriculados)?.toLocaleString('de-DE')}</p>
                </div>
                <div className='boxSingleInfoBox'>
                  <img src={relogio} alt="duração" className='ajusteImg' />
                  <p className='fw400 alignText'>{curso.duracao}</p>
                </div>
                <div className='boxSingleInfoBox'>
                  <RatingStarts avg={curso.avaliacao} id='mouseDefault' className='ajusteImgStar' />
                  <p className='fw400 alignText'>{String((curso.avaliacao)).replace('.', ',')}</p>
                </div>
              </div>
              <Link to={`/modulosEducacionais/${curso.id}`} className='cursoButton bgDarkGrey white fontSmall2 fw600'>Ver módulo</Link>
            </div>
          ))}
        </div>
        <Link to='/modulosEducacionais' className='cursoButton bgDarkGrey white fontSmall2 fw600' id='verMais'>Ver mais</Link>
      </section>
      <section className='containerPages mb-lg-5'>
        <Link to='/parceiros' className='red fontMediumLarge parceirosTittle'>Parceiros</Link>
        <div className='bgGrey parceirosContainer'>
          <ParceiroContent
            title="Governo do RN"
            desc="Governo do Estado do Rio Grande do Norte."
          />
          <ParceiroContent
            title="SESAP"
            desc="Secretaria de Saúde Pública do Estado do Rio Grande do Norte."
          />
          <ParceiroContent
            title="UFRN"
            desc="Universidade Federal do Rio Grande do Norte."
          />
          <ParceiroContent
            title="HUOL"
            desc="Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte)."
          />
        </div>
      </section>
    </>
  )
}

export default Home