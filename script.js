
async function ask() {
  const input = document.getElementById("userInput").value;
  const responseArea = document.getElementById("response");
  responseArea.textContent = "Думаю...";

  try {
    const res = await fetch("https://tight-snow-bbc0.genovasynergy.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [{ role: "user", content: input }]
      })
    });
    const data = await res.json();
    responseArea.textContent = data.choices?.[0]?.message?.content || "Нет ответа.";
  } catch (e) {
    responseArea.textContent = "Ошибка: " + e.message;
  }
}
