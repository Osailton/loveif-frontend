import { useEffect, useState } from 'react';
import Slider from 'react-slick';

// Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import TurmaCard from './TurmaCard';

const apiUrl = process.env.REACT_APP_API_URL;

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    responsive: [
        {
            breakpoint: 3000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 464,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

const PointsCarousel = () => {
    const [turmas, setTurmas] = useState([]);

    const getTurmasAnoLetivo = async (url) => {

        // Asynchronously call the API for the result
        const res = await fetch(url);
        // JSON.parse(res);

        // Turns the result into js
        const data = await res.json();

        setTurmas(data);
    };

    useEffect(() => {

        // Build the URL
        const pointsURL = `${apiUrl}public/pontuacao`;

        // Execute once this component is builded
        getTurmasAnoLetivo(pointsURL);

    }, []);

    return (
        <Slider {...settings}>
            {turmas && turmas.map(t => { return <TurmaCard key={t} turma={t} /> })}
        </Slider>
    );
};

export default PointsCarousel;