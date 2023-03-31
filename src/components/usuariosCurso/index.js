import './styles.css';

const UsuariosCurso = ({ curso, usuarios, color }) => {
    return (
        <div className='boxUsuarios'>
            <span className={`${color} corCurso fontNormal fw700`}></span>
            <p className='fontNormal fw700'>{curso}: {usuarios}</p>
        </div>
    )
}

export default UsuariosCurso