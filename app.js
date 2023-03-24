// set intial count
let count = 0;

// select value and buttons
const vaule = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
     const styles = e.currentTarget.classList;   
     if(styles.contains('decrease')){
        count--;
     }
     else if(styles.contains('increase')){
        count++;
     }
        else {
            count = 0;
        } 
        if (count > 0){
        vaule.style.color = 'green';
        }
        if (count < 0){
            vaule.style.color = 'red';
        }
        if (count === 0 ){
            vaule.style.color = "#222";
        }
     vaule.textContent = count; 
    });
}); 