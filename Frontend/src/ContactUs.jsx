import { getWeatherForecast } from "./services/contactService";

export default function ContactUs ()
{
    return (
        <button onClick={getWeatherForecast}>Get Weather Forecast</button>
    );
}
