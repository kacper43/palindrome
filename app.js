
let checkBtn = document.querySelector('.btn');



checkBtn.addEventListener('click', () => {
    let inputText = document.getElementById('text').value;
    let text = inputText.replace(/[^A-Za-z]/g, "").toLowerCase();
    console.log(text);
    if(palindrome(text)){
        document.getElementById('resultInfo').innerHTML = inputText + " converted to " + text + " is a palindrome!";
    } else {
        document.getElementById('resultInfo').innerHTML = inputText + " converted to " + text + " is NOT a palindrome!";
    }
  
    
    });

    function palindrome(text){
        let iterations = Math.floor(text.length / 2);
        for(let i = 0; i < iterations; i++){
            console.log('For Loop #' + i + ': ' + text.charAt(i) + ' ' + text.charAt(text.length - i - 1));
            if(text[i] !== text[text.length - i - 1]){
                console.log("oops...");
                return false;
            }
        }
        console.log("ok");
        return true;
        
    }
