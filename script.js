function addMessage(message, type) {

    const chat = document.getElementById("chat");

    const messageBox = document.createElement("div");

    if (type === "user") {
        messageBox.className = "user-message";
    } else {
        messageBox.className = "bot-message";
    }

    messageBox.innerHTML = message;

    chat.appendChild(messageBox);

    chat.scrollTop = chat.scrollHeight;
}


function checkSymptoms() {

    const input = document.getElementById("symptoms");

    const symptoms = input.value.trim().toLowerCase();

    if (symptoms === "") {
        return;
    }


    // User message

    addMessage(
        symptoms,
        "user"
    );

    input.value = "";


    let response = "";


    /* FEVER */

    if (
        symptoms.includes("fever") ||
        symptoms.includes("temperature")
    ) {

        response = `
        🌡️ <strong>Fever</strong>

        <p>
        Fever can occur with infections and other conditions.
        </p>

        <p>
        💧 Drink enough fluids and get adequate rest.
        </p>

        <p>
        💊 Paracetamol is commonly used to reduce
        fever and pain. Follow the product label or
        advice of a healthcare professional.
        </p>

        <p>
        🚨 Seek medical care if the fever is severe,
        persistent, or accompanied by serious symptoms.
        </p>
        `;
    }


    /* COLD */

    else if (
        symptoms.includes("cold") ||
        symptoms.includes("runny nose") ||
        symptoms.includes("sneezing")
    ) {

        response = `
        🤧 <strong>Common Cold</strong>

        <p>
        A common cold often improves with time.
        </p>

        <p>
        💧 Stay hydrated<br>
        🛌 Get enough rest<br>
        🍵 Warm fluids may help soothe symptoms.
        </p>

        <p>
        Consult a healthcare professional if symptoms
        become severe or persistent.
        </p>
        `;
    }


    /* COUGH */

    else if (
        symptoms.includes("cough")
    ) {

        response = `
        😷 <strong>Cough</strong>

        <p>
        A cough can have many causes including
        infections, allergies and irritation.
        </p>

        <p>
        💧 Drink fluids<br>
        🛌 Rest<br>
        🍵 Warm fluids may soothe the throat.
        </p>

        <p>
        🚨 Difficulty breathing, chest pain or
        coughing blood requires urgent medical attention.
        </p>
        `;
    }


    /* HEADACHE */

    else if (
        symptoms.includes("headache") ||
        symptoms.includes("head pain")
    ) {

        response = `
        🤕 <strong>Headache</strong>

        <p>
        Headaches can have many different causes.
        </p>

        <p>
        💧 Drink water<br>
        🛌 Rest<br>
        😴 Get adequate sleep.
        </p>

        <p>
        🚨 A sudden, extremely severe headache or
        headache with neurological symptoms requires
        urgent medical attention.
        </p>
        `;
    }


    /* STOMACH PAIN */

    else if (
        symptoms.includes("stomach pain") ||
        symptoms.includes("stomach ache") ||
        symptoms.includes("abdominal pain")
    ) {

        response = `
        🩺 <strong>Stomach Pain</strong>

        <p>
        Stomach pain can have many different causes.
        </p>

        <p>
        💧 Stay hydrated<br>
        🍚 Eat light foods if tolerated<br>
        🛌 Rest.
        </p>

        <p>
        🚨 Severe or worsening abdominal pain,
        repeated vomiting, or blood in stool requires
        medical attention.
        </p>
        `;
    }


    /* SORE THROAT */

    else if (
        symptoms.includes("sore throat") ||
        symptoms.includes("throat pain")
    ) {

        response = `
        🗣️ <strong>Sore Throat</strong>

        <p>
        Sore throat can occur with infections,
        allergies or irritation.
        </p>

        <p>
        💧 Drink fluids<br>
        🍵 Warm liquids may help<br>
        🛌 Rest.
        </p>

        <p>
        Consult a healthcare professional if symptoms
        are severe or persistent.
        </p>
        `;
    }


    /* EMERGENCY */

    else if (
        symptoms.includes("chest pain") ||
        symptoms.includes("difficulty breathing") ||
        symptoms.includes("can't breathe") ||
        symptoms.includes("unconscious")
    ) {

        response = `
        🚨 <strong>Emergency Warning</strong>

        <p>
        These symptoms can require urgent medical attention.
        </p>

        <p>
        Please contact your local emergency service
        or go to the nearest emergency department immediately.
        </p>

        <p>
        Do not rely on Dr. AI for emergency care.
        </p>
        `;
    }


    /* UNKNOWN */

    else {

        response = `
        🤖 <strong>Dr. AI</strong>

        <p>
        I can provide general health information,
        but I cannot diagnose a disease.
        </p>

        <p>
        Try describing symptoms such as:
        </p>

        <p>
        🌡️ Fever<br>
        🤧 Cold<br>
        😷 Cough<br>
        🤕 Headache<br>
        🩺 Stomach pain<br>
        🗣️ Sore throat
        </p>

        <p>
        For diagnosis and treatment decisions,
        please consult a qualified healthcare professional.
        </p>
        `;
    }


    // Small delay to make it feel like a chatbot

    setTimeout(function () {

        addMessage(
            "🤖 <strong>Dr. AI</strong><br>" + response,
            "bot"
        );

    }, 500);
}


/* Quick buttons */

function quickSearch(problem) {

    document.getElementById("symptoms").value = problem;

    checkSymptoms();
}


/* Enter key */

function handleEnter(event) {

    if (event.key === "Enter") {

        checkSymptoms();

    }
}