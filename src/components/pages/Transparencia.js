import { useEffect, useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import participantes from '../../assets/participantes.svg';
import TransparenciaDado from '../layouts/TransparenciaDado';
import certificacao from '../../assets/certificacao.svg';
import cursos from '../../assets/cursos.svg';
import inscricoes from '../../assets/inscricoes.svg';
import investimento1 from '../../assets/investimento1.svg';
import investimento2 from '../../assets/investimento2.svg';
import './Transparencia.css';
import PieChart from '../layouts/PieChart';
import UsuariosCurso from '../layouts/UsuariosCurso';
import Map from '../layouts/Map'
const Transparencia = () => {
  const [transparencia, setTransparencia] = useState([]);
  const [usuariosCurso, setUsuariosCurso] = useState([]);

  const cor = ['bgWhite', 'bgRed', 'bgDarkGrey', 'bgDarkBlue']

  useEffect(() => {
    fetch("https://avasus-api.vercel.app/transparecia")
      .then((res) => res.json())
      .then(data => {
        setTransparencia(data.dados_gerais)
        setUsuariosCurso(data.usuarios_por_curso)
      })
  }, [])

  return (
    <section className='containerPages' id='marginTopPages'>
      <Breadcrumb className='mb-3'>
        <Breadcrumb.Item href='/'>Início</Breadcrumb.Item>
        <Breadcrumb.Item active>Transparência</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='red fontMediumLarge fw600 mb30'>Transparência</h1>
      <section className='transparenciaBox1 bgGrey mb30'>
        <h2 className='red fontMedium2 fw700 mb-xl-5 mb-3'>Dados Gerais</h2>
        <div className='containerDadosGerais'>
          <TransparenciaDado img={participantes} text="Total de usuários registrados" dado={(transparencia.usuarios_registrados)?.toLocaleString('de-DE')} />
          <TransparenciaDado img={inscricoes} text="Inscrições realizadas" dado={(transparencia.incricoes_realizadas)?.toLocaleString('de-DE')} />
          <TransparenciaDado img={cursos} text="Cursos ativos" dado={(transparencia.cursos_ativos)?.toLocaleString('de-DE')} />
          <TransparenciaDado img={certificacao} text="Direito à Certificação" dado={transparencia.direito_certificacao} />
          <TransparenciaDado img={investimento1} text="Investimento médio por curso" dado={transparencia.investimento_medio_curso} />
          <TransparenciaDado img={investimento2} text="Investimento médio por aluno" dado={transparencia.investimento_medio_aluno} />
        </div>
      </section>
      <section className='containerUsuarios mb-lg-5 mb-3'>
        <div className='singleContainerUsuarios bgGrey'>
          <h2 className='red fontMedium2 fw600 mb-md-4 mb-3'>Usuários por curso</h2>
          <div className='tamanho mb-md-5 mb-3'>
            <PieChart
              dado1={(usuariosCurso[1]?.usuarios)}
              dado2={(usuariosCurso[1]?.usuarios)}
              dado3={(usuariosCurso[2]?.usuarios)}
              dado4={(usuariosCurso[3]?.usuarios)}
            />
          </div>
          {usuariosCurso && usuariosCurso.map((curso, index) => (
            <UsuariosCurso key={curso.curso} curso={curso.curso} usuarios={(curso.usuarios)?.toLocaleString('de-DE')} color={cor[index]} />
          ))}
        </div>
        <div className='singleContainerUsuarios bgGrey'>
          <h2 className='red fontMedium2 fw600 mb-md-4 mb-3'>Usuários por Estado</h2>
          <div className='tamanho mb-md-5 mb-3'>
            <Map />
          </div>
          {usuariosCurso && usuariosCurso.map((curso, index) => (
            <UsuariosCurso key={curso.curso} curso={curso.curso} usuarios={(curso.usuarios)?.toLocaleString('de-DE')} color={cor[index]} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default Transparencia