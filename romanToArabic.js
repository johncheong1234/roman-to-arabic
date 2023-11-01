function validateRomanNumeralInField() {
    let field = document.getElementById('romanNumeral');
    let fieldValue = field.value
    if (!validateRomanNumeral(fieldValue)) {
        field.style.borderColor = "red";
    } else {
        field.style.borderColor = "black";
    }
}

function convertRomanToArabic() {

    let field = document.getElementById('romanNumeral');
    let fieldValue = field.value;
    let answerField = document.getElementById('arabicNumber');

    if (validateRomanNumeral(fieldValue)) {
        let postObj = JSON.stringify({
            word: fieldValue
        })

        fetch("https://daiso-backend-python.vercel.app/convert", {
            method: 'post',
            body: postObj,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            //handle response  
            return response.json()
        })
            .then(data => {
                //handle data
                console.log(data);
                let answer = data;
                answerField.value = answer;
            }).catch((error) => {
                console.log(error);
            })

    }else{
        let answerField = document.getElementById('arabicNumber');
        answerField.value = 'Not a roman numeral';
    }
}

function validateRomanNumeral(str) {
    // Regex to check valid
    // ROMAN NUMERAL
    let regex = new RegExp(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);

    // str
    // is empty return false
    if (str == null) {
        return false;
    }

    // Return true if the str
    // matched the ReGex
    if (regex.test(str) == true) {
        return true;
    }
    else {
        return false;
    }
}
