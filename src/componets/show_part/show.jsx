import './show.css'
import { Col } from 'react-bootstrap';
import image from '../../assets/icons/clear.svg'


export default function show() {
  return (
    <>

      <Col lg="3">
        <div className="allcard">
          <h4 className="Nick_name">Weather App</h4>

          <div className='line_001'></div>
          <div className='weather'>
            <img src={image} alt="" className='img_weather' />

            <h1 className="gradus">35 °C</h1>
            <h4 className="weathername">Clean</h4>

            <h3 className="location_name">Tashkent</h3>

            <div className='line_001'></div>
          </div>

          <div className="andwett">
            <div className="divfeels">
              <h4 className="gradus_002">24 °C</h4>
              <h6 className="weatherfeeds">Feels like</h6>
            </div>
            <div className="divwett">
              <h4 className="pratsend">45 %</h4>
              <h6 className="weatherhumidity">Humidity</h6>
            </div>
          </div>
          <div className='line_001'></div>
        </div>
      </Col>
    </>
  )
}
