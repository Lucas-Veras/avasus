import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';
import avasusSlider from '../../assets/avasusSlider.svg';
import sliderText from '../../assets/slider1Text.svg';
import barra from '../../assets/barra.svg';
import './Slider.css';

export default function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='mb-5'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption className='containerSlider marginSlider'>
                    <img src={avasusSlider} alt="avasus" className='imgSlider' />
                    <img src={barra} alt="barra" className='imgSlider2' />
                    <img src={sliderText} alt="Conhecimento aberto em saúde" className='imgSlider' />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption className='marginSlider'>
                    <h3 className='textShadow fontXL fw600'>Gente da Saúde</h3>
                    <p className='textShadow fontMedium'>aprendizado para todo profissional, estudante e usuário.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />
                <Carousel.Caption className='marginSlider'>
                    <h3 className='textShadow fontXL fw600'>Especialização PEPSUS</h3>
                    <p className='textShadow fontMedium'>Conheça o curso de especialização em saúde da familia</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

