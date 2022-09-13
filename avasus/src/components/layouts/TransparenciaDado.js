import './TransparenciaDado.css';

const TransparenciaDado = ({img, text, dado}) => {
    return (
        <div className='dadoBox'>
            <div className='dadoTitle mb-md-4 mb-2'>
                <img src={img} alt="imagem total de usuários registrados" />
                <h3 className='fontNormal fw700 alignText'>{text}</h3>
            </div>
            <p className='fw600 red fontLarge'>{dado}</p>
        </div>
    )
}

export default TransparenciaDado