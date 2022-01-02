const counterValue = document.querySelector('#counter-value');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach(element => {
        element.addEventListener('click', () => {
         if(element.classList.contains('decrease')){count--;
         }else if(element.classList.contains('increase')){count++;  
         }else if(element.classList.contains('reset')){count = 0;
         }if(count < 0){
             counterValue.style.color = ('red');
         }if(count == 0){
             counterValue.style.color = ('pink');
         }if(count > 0){
             counterValue.style.color = ('green');
         }

         counterValue.innerHTML = count;

        });
})