import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMap from "highcharts/modules/map";
import proj4 from "proj4";
import mapDataIE from "@highcharts/map-collection/countries/br/br-all.geo.json";
import { useState, useEffect } from 'react'

highchartsMap(Highcharts);
const Map = () => {
    if (typeof window !== "undefined") {
        window.proj4 = window.proj4 || proj4;
    }

    const [usuariosEstado, setUsuariosEstado] = useState([]);
    const [localizacao, setLocalizacao] = useState([]);
    const data = []

    useEffect(() => {
        fetch("http://localhost:3004/transparecia")
            .then(res => res.json())
            .then(data => {
                setUsuariosEstado(data.usuarios_por_estado)
            })
    }, [])

    useEffect(() => {
        fetch("https://code.highcharts.com/mapdata/countries/br/br-all.geo.json")
            .then(res => res.json())
            .then(data => {
                setLocalizacao(data.features)
               
            })
    }, [])

    localizacao.forEach(estado => {
        usuariosEstado.forEach(usuarios => {
            if (estado.properties['hc-a2'] === usuarios.estados) {
                data.push({
                    z: usuarios?.usuarios_totais,
                    keyword: (usuarios?.usuarios_totais)?.toLocaleString('de-DE') + ' usuários',
                    lat: Number(estado?.properties.latitude),
                    lon: Number(estado?.properties.longitude)
                })
            }
        })
    })

    const mapOptions = {
        chart: {
            map: 'countries/br/br-all',
            backgroundColor: '#F5F5F7',
            width: 330
        },
        title: {
            text: ''
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        mapNavigation: {
            enabled: false
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.freq}</b><br><b>{point.keyword}</b>                      <br>lat: {point.lat}, lon: {point.lon}'
        },
        series: [{
            name: 'Basemap',
            mapData: mapDataIE,
            borderColor: '#FFFFFF',
            nullColor: '#CDCDCD',
            showInLegend: false,

        }, {
            type: 'mapbubble',
            name: 'Cities',
            color: '#4169E1',
            data: data,
            minSize: 4,
            maxSize: 25,
            cursor: 'pointer',
        }]
    }
    return (
        <div>
            <HighchartsReact
                constructorType={'mapChart'}
                highcharts={Highcharts}
                options={mapOptions}
            />
        </div>
    )
}

export default Map