async function ask() {
    const question = document.getElementById("question").value;
    const responseBox = document.getElementById("response");
    responseBox.innerText = "Загрузка...";

    try {
        const res = await fetch("https://genova-ai.genovasynergy.workers.dev", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                messages: [{ role: "user", content: question }]
            })
        });

        const data = await res.json();
        responseBox.innerText = data.choices?.[0]?.message?.content || "Нет ответа.";
    } catch (error) {
        responseBox.innerText = "Ошибка: " + error.message;
    }
}
