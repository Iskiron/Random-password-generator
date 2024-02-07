document.getElementById("btn").onclick = () => {


    const passwordLength= Number(document.getElementById("passwordLength").value);
    const uppercasebox = document.getElementById("box1");
    const lowercasebox = document.getElementById("box2");
    const numberbox = document.getElementById("box3");
    const specialCharacterbox = document.getElementById("box4");


    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";    
    let specialCharacters = "!@#$%^&*()-+?_=";


    let password = "";
    let allcase = "";
    let random;


    allcase += (uppercasebox.checked)?uppercase:"";
    allcase += (lowercasebox.checked)?lowercase:"";
    allcase += (numberbox.checked)?number:"";
    allcase += (specialCharacterbox.checked)?specialCharacters:"";


    for (let i = 0; i < passwordLength; i++) {
        random = Math.floor(Math.random()*allcase.length);
        password +=  allcase[random];
    }


    document.getElementById('result').innerHTML = `Your  Password is : ${password}`;
    document.getElementById('result').style.animation="fade-in 2s ease-in-out";

}
