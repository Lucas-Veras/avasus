const ParceiroContent = ({ title, desc }) => {
    return (
        <div className='parceiroContent'>
            <h2 className='fontMedium2 fw600 size40'>{title}</h2>
            <p className='fontSmall2 fw600 size40'>{desc}</p>
        </div>
    )
}

export default ParceiroContent