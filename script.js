let inputWeight = document.getElementById("weight")
let inputHeight = document.getElementById("height")
let form = document.querySelector("#form")
let hasil = document.getElementById("hasil")
let hasilBMI

function validasi(){
    if (inputHeight.value != "" || inputWeight.value != ""){
        return true
    }else{
        return alert("Form tidak boleh kosong")
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let weight = inputWeight.value
    let height = inputHeight.value

    if(validasi()){
        let BMI = weight/(Math.pow(height/100, 2))

        if (BMI < 18.5 ){
            hasilBMI = "Underweight"
        }else if(18.5 < BMI < 24.9){
            hasilBMI = "Normal"
        }else if(25 < BMI < 29.9){
            hasilBMI = "Overweight"
        }else {
            hasilBMI = "Obesity"
        }
    
        hasil.innerHTML = "Your BMI is " +  `<span style="font-weight: bold;"> ${BMI.toFixed(1)}</span>` + " which means you are " + `<span style="font-weight: bold;"> ${hasilBMI}</span>`
    }


})

