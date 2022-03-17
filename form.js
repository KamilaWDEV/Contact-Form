



const form = document.querySelector("form");

const input = form.querySelector("input");
const inputName = document.querySelector("input[name=name]");
const inputPrenome = document.querySelector("input[name=prenome]");
const inputTelephone = document.querySelector("input[name=telephone]");
console.log(inputTelephone)
const inputEmail = document.querySelector("input[name=email]");
const inputMessage = document.querySelector("textarea[name=message]");
console.log(inputMessage)





 






let isValidationOn = false;

 // resetElm i invalidElm to zmienne pomocnicze ktore dotycza walidacji wszytkich pol edycyjnych

// resetElm dotyczy pokazania sie tekstu ze pole jest wymagane
 const resetElm = (elm) =>{
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden"); 
};

// invalideElm dotyczy podwietlania sie pola na czerwono
const invalidateElm = (elm) =>{
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");  
}



  const validateInputs = () => {
      if(!isValidationOn) return;   // to sprawia ze podczas wpisywania pozostale pola sie nie podswietlaja jako blad
      resetElm(inputName);
      resetElm(inputPrenome);
      resetElm(inputEmail);
      resetElm(inputTelephone);
      resetElm(inputMessage);
     
      


    
  

    const val = inputName.value;
      const reg = /^[a-zA-Z ]{3,}$/g;
      if (!reg.test(val) || !inputName.value) {  // jezeli nie ma value to mam jakis problem
              invalidateElm(inputName);
      };

     const valPrenome = inputPrenome.value;
      const regPrenome = /^[a-zA-Z ]{3,}$/g;
      if (!regPrenome.test(valPrenome) || !inputPrenome.value) {  // jezeli nie ma value to mam jakis problem
              invalidateElm(inputPrenome);        
      };

      const isValidEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };
      
      if(!isValidEmail(inputEmail.value)){
          invalidateElm(inputEmail);
      };

      const isValidPhone = (telephone) => {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(String(telephone).toLowerCase());
      };

      if(!isValidPhone(inputTelephone.value)){
          invalidateElm(inputTelephone)
      }
    
      const valMessage = inputMessage.value;
      if(!valMessage || valMessage.lenght <= 3){
        invalidateElm(inputMessage);
        
    }; 
    
    };


//   blokuje wysyłanie formularza
 form.addEventListener("submit", (e) => {
       e.preventDefault();
       isValidationOn = true;
       validateInputs();  
        
       console.log("here"); 
 });

// mozemy te wszystkie funkcje obrac w petlę : inputs.forEach() = {input.addEvenListener("input", () => {validadeInputs();});
    

inputName.addEventListener("input", () => {
    validateInputs();  // chcemy zeby rozwy czarwnoy kwadrat zniknal jak ktros wpisze nowe value
});

inputPrenome.addEventListener("input", () => {
    validateInputs();  // chcemy zeby rozwy czarwnoy kwadrat zniknal jak ktros wpisze nowe value
});

inputEmail.addEventListener("input", () => {
    validateInputs();  // chcemy zeby rozwy czarwnoy kwadrat zniknal jak ktros wpisze nowe value
});
inputTelephone.addEventListener("input", () => {
    validateInputs();  // chcemy zeby rozwy czarwnoy kwadrat zniknal jak ktros wpisze nowe value

});


inputMessage.addEventListener("input", () => {
    validateInputs();  // chcemy zeby rozwy czarwnoy kwadrat zniknal jak ktros wpisze nowe value

});



