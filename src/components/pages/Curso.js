import './Curso.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import participantes from '../../assets/participantes.svg';
import relogio from '../../assets/relogio.svg';
import { Rating } from 'react-simple-star-rating';
import calendario from '../../assets/calendario.svg'

const Curso = () => {
    const { id } = useParams()
    const [curso, setCurso] = useState([])
    const [creditos, setCreditos] = useState([])

    useEffect(() => {
        fetch(`https://avasus-api.vercel.app/cursos/${id}`)
            .then(res => res.json())
            .then((data) => {
                setCurso(data)
                setCreditos(data.creditos)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <section className='marginCurso'>
            <section className='cursoTitles'>
                <section className='containerPages mb-sm-3  text-start' >
                    <Breadcrumb className='mb-xl-5 mb-4 mt20 breadcrumbColor'>
                        <Breadcrumb.Item href='/'>Início</Breadcrumb.Item>
                        <Breadcrumb.Item href='/'>Cursos</Breadcrumb.Item>
                        <Breadcrumb.Item href='/modulosEducacionais'>Módulos</Breadcrumb.Item>
                        <Breadcrumb.Item active className='white'>{curso.titulo}</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className='mb-4 fontLarge  white fw700'>{curso.titulo}</h1>
                    <p className='white fontSmall fw600'>{curso.parceiros}</p>
                </section>
            </section>
            <section className='containerPages mb100'>
                <h2 className='red fontLarge fw600 mb-5'>Informações Gerais do Curso</h2>

                <div className='containerElementsInfo centralizar mb-xxl-5 mb-3'>
                    <div className='boxSingleInfo'>
                        <img src={relogio} alt="duração" />
                        <p className='fw700 fontSmall2 alignText'>{curso.duracao} horas</p>
                    </div>
                    <div className='boxSingleInfo'>
                        <img src={calendario} alt={`criado em ${curso.criado_em}`} />
                        <p className='fw700 fontSmall2 alignText'>Desde {curso.criado_em}</p>
                    </div>
                    <div className='boxSingleInfo'>
                        <img src={participantes} alt="matriculados" />
                        <p className='fw700 fontSmall2 alignText'>{curso.matriculados} alunos matriculados</p>
                    </div>
                    <div className='boxSingleInfo'>
                        <Rating ratingValue={Number(curso.avaliacao) * 20} fillColor='#F6303F' id='mouseDefault' className='alignStar' readonly={true} size={25} />
                        <p className='fw700 fontSmall2 alignText'>{String((curso.avaliacao)).replace('.', ',')} ({curso.numero_avaliacoes} avaliações)</p>
                    </div>

                </div>


                <h2 className='red fontMedium2 fw600 mb-4'>Sobre o curso</h2>
                <div>
                    <p className='mb-4 textJustify'>{curso.sobre ? curso.sobre : "Não informado"}</p>
                </div>
                <h2 className='red fontMedium2 fw600 mb-4'>Objetivos</h2>
                <div className='text-start'>
                    <h3 className='mb-2 fw700 fontNormal'>Objetivo Geral</h3>
                    <p className='mb-4 fontNormal'>{curso.objetivo_geral ? curso.objetivo_geral : "Não informado"}</p>
                    <h3 className='mb-2 fw700 fontNormal'>Objetivos Específicos</h3>
                    <p>{curso.objetivo_especifico ? curso.objetivo_especifico : "Não informado"}</p>
                </div>
                <h2 className='red fontMedium2 fw600 mb-4'>Recursos educacionais</h2>
                <p className='mb-5 fontNormal'>{curso.recursos_educacionais ? curso.recursos_educacionais : "Não informado"}</p>
                <h2 className='red fontMedium2 fw600 mb-4'>Créditos</h2>
                <div className='containerCreditos'>
                    {creditos.length ? creditos.map((credito) => (
                        <div className='creditoBox' key={credito.titulo}>
                            <img src={credito.capa} alt={credito.titulo} className='imgCredito' />
                        </div>
                    )) : <p>Não possui</p>}
                </div>
            </section>
        </section>
    )
}

export default Curso