export async function getWeatherForecast() {
  const response = await fetch("https://localhost:7051/api/weatherforecast");
  const data = await response.json();
  console.log(data);
  return data;
}
