document.getElementById("inputText").addEventListener("input", () => {
    const result = document.getElementById("result");
    if (result.innerText === "Enter some text to predict personality.") {
        result.innerText = ""; // Clear the message as soon as user starts typing
    }
});

function predictPersonality() {
    let resultDiv = document.getElementById("result");
    let infpCard = document.getElementById("infpCard");
    let text = document.getElementById('inputText').value.trim();
    let outputBox = document.getElementById("outputBox");

    // Hide the card when input is empty or default message is displayed
    if (!text || text === "Enter some text to predict personality.") {
        resultDiv.innerText = "Enter some text to predict personality.";
        resultDiv.style.color = "brown";
        infpCard.style.display = "none"; // Hide the card
        outputBox.innerHTML = "<p style='color: red;'>Please enter some text!</p>";
        return;
    }

    // Simulated model output (replace with actual model response)
    let predictedPersonality = "INFP"; // Assume model returns this

    resultDiv.innerText = "Predicted Personality: " + predictedPersonality;

    if (predictedPersonality === "INFP") {
        infpCard.style.display = "block"; // Show the INFP card
    } else {
        infpCard.style.display = "none"; // Hide if not INFP
    }

    // Call the backend to get the actual prediction
    fetch("/predict", {
        method: "POST",
        body: JSON.stringify({ Text: text }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        outputBox.innerHTML = `<div class="card">
            <p>Predicted Personality: ${data.personality}</p>
        </div>`;
        // Hide infpCard if the personality is not INFP
        if (data.personality !== "INFP") {
            infpCard.style.display = "none";
        }
    })
    .catch(error => console.error("Error:", error));
}

  
