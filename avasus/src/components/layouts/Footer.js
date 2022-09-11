import './Footer.css';
import lais from '../../assets/lais.svg';
import ufrn from '../../assets/ufrn.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='containerFooter bgDarkBlue'>
            <section className='bgRed sectionFooter'>
                <h1 className='white mb60 fontLarge'>Realização</h1>
                <div className='containerLogos'>
                    <img src={lais} alt="Lais" className='logosFooter' />
                    <img src={ufrn} alt="UFRN" className='logosFooter' />
                </div>
            </section>
            <section className='containerFooter2'>
                <section>
                    <img src={lais} alt="Lais" width={120} className='mb20' />
                    <p className='white fw400'>Laboratório de Inovação Tecnológica em Saúde.</p>
                </section>
                <section>
                    <h1 className='white fw600 fontMediumLarge mb20'>Links Úteis</h1>
                    <div className='footerLinks'>
                        <Link to='/' className='white'>Início</Link>
                        <Link to='/' className='white'>Sobre Nós</Link>
                        <Link to='/' className='white'>Módulos</Link>
                        <Link to='/' className='white'>Parceiros</Link>
                        <Link to='/' className='white'>Transparência</Link>
                    </div>
                </section>
                <section>
                    <h1 className='white fw600 fontMediumLarge mb25'>Redes sociais</h1>
                    <div className='socialLinks'>
                        <a href="https://www.facebook.com/LAIS.HUOL/"><img src={facebook} alt="Facebook"/></a>
                        <a href="https://www.instagram.com/laishuol/"><img src={instagram} alt="Instagram" /></a>
                        <a href="https://www.instagram.com/laishuol/"><img src={twitter} alt="Twitter" /></a>
                    </div>
                </section>
            </section>
            <section className='mt60 pb20'>
                <p className='white fontSmall'>2022 © LAIS (HUOL). Todos os direitos reservados</p>
            </section>
        </footer>
    )
}

export default Footer