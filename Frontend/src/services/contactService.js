export async function getWeatherForecast() {
  const response = await fetch("https://localhost:7051/api/contact");
  const data = await response.json();
  console.log(data);
  return data;
}

export async function submitContact({ name, email, inquiry }) {
  const response = await fetch("https://localhost:7051/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, inquiry }),
  });

  if (!response.ok) {
    throw new Error(`Contact submission failed: ${response.status}`);
  }
}
