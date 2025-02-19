document.getElementById("inputText").addEventListener("input", () => {
    const result = document.getElementById("result");
    if (result.innerText === "Enter some text to predict personality.") {
        result.innerText = ""; // Clear the message as soon as user starts typing
    }
});

function predictPersonality() {
    const text = document.getElementById('inputText').value;
    const result = document.getElementById('result');

    if (!text) {
        result.innerText = "Enter some text to predict personality.";
        result.style.color = "brown";
        return;
    }
        // Dummy personality prediction (replace with actual logic)
        const personalities = {
            "INTJ": "The Mastermind - Strategic, logical, and ambitious.",
            "ENFP": "The Campaigner - Enthusiastic, creative, and free-spirited.",
            "ISTP": "The Virtuoso - Bold, practical, and experimental.",
            "INFJ": "The Advocate - Insightful, deep, and inspiring."
        };
    
        // Simulate a random prediction (replace with ML model response)
        const personalityTypes = Object.keys(personalities);
        const randomType = personalityTypes[Math.floor(Math.random() * personalityTypes.length)];
    
        // Display personality type in modal
        document.getElementById('personalityTitle').innerText = You are a ${randomType}!;
        document.getElementById('personalityDescription').innerText = personalities[randomType];
    
        // Show the modal
        document.getElementById('personalityModal').style.display = "flex";
    }
    
    // Function to close the modal
    function closeModal() {
        document.getElementById('personalityModal').style.display = "none";
    }



  