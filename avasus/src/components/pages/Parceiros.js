import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './Parceiros.css';
import { useState, useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Loading from '../layouts/Loading';

const Parceiros = () => {
  const [parceiros, setParceiros] = useState([]);
  const [parceiroPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [removeLoading, setRemoveLoading] = useState(false);

  const pages = Math.ceil(parceiros.length / parceiroPerPage);
  const startIndex = currentPage * parceiroPerPage;
  const endIndex = startIndex + parceiroPerPage;
  const currentParceiros = parceiros.slice(startIndex, endIndex);

  const qtdAtualParceiros = endIndex < currentParceiros.length ? currentParceiros.length : endIndex

  useEffect(() => {
    fetch("http://localhost:3004/parceiros")
      .then((res) => res.json())
      .then((data) => {
        setParceiros(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <section className='containerPages' id='marginTopPages'>
      <Breadcrumb className='mb-3'>
        <Breadcrumb.Item href='/'>Início</Breadcrumb.Item>
        <Breadcrumb.Item active>Parceiros</Breadcrumb.Item>
      </Breadcrumb>
      <section className='text-start'>
        <h1 className='red fontMediumLarge fw600 mb-2'>Nossos parceiros</h1>
        <p className='fw400 fst-italic colorQtdPages mb-2'>{qtdAtualParceiros} de {parceiros.length} resultados</p>

        {!removeLoading &&
          <div className='text-center'>
            <Loading />
          </div>
        }

        <div className='parceirosContainerPage gapParceiros mb-5'>
          {currentParceiros.map((parceiro) => (
            <div key={parceiro.id} className='text-center box'>
              <img src={parceiro.capa} alt={parceiro.titulo} className='parceiroImg' />
              <h2 className='fontMedium2 fw600 barraCima'>{parceiro.titulo}</h2>
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

export default Parceiros