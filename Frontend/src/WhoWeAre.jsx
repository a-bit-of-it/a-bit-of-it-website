import './WhoWeAre.css'
import {getWeatherForecast} from "./services/contactService.js";

export default function WhoWeAre ()
{
    return (
        <div className="who-we-are" id="about">
            <button onClick={getWeatherForecast}>Get Weather Forecast</button>

            <h1>Who we are</h1>
        </div>
    );
}