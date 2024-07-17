const resultElement = document.getElementById('result');
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", cleanScreenPasswordTyped);

function guessPassword() {
    let attempts = 0; // Number of attempts before reaching the password's value

    const passwordValue = document.getElementById("password").value;

    // Error treatment
    if (passwordValue.length !== 4 || isNaN(passwordValue)) {
        resultElement.textContent = "Please enter a valid 4-digit numeric password.";
        return;
    } else {
        const passwordValueAsArray = passwordValue.split("");
        const guessedPasswordArray = [];

        // Guessing 
        for (let i = 0; i < 4; i++) { // Iterate over each index of the password
            for (let o = 0; o <= 9; o++) { // Iterate over digits from 0 to 9
                if (o == passwordValueAsArray[i]) {
                    guessedPasswordArray.push(o); // Push the correct digit to the guessedPasswordArray
                    break; // Exit the inner loop once the correct digit is found
                } else {
                    attempts++; // Add 1 to attempts if 'o' is not equal to passwordValueAsArray[i]
                }
            }
        }
        
        // Display the number of attempts once the password is found
        resultElement.textContent = `${attempts}`;
    }
    
}

function cleanScreenPasswordTyped() {
    const passwordInput = document.getElementById("password");
    passwordInput.value = "";
    resultElement.textContent = "0";
    attempts = 0; // Reset attempts counter
}
