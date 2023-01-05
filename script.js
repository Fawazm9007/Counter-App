let counter = document.querySelector('.counter-value')
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')
const save = document.querySelector('.save')
const load = document.querySelector('.load')
const clear = document.querySelector('.clear')
var counterValue = 0

decrease.addEventListener('click',()=>{
   counterValue--
   counter.innerText = counterValue
   
})


increase.addEventListener('click',()=>{
   
   counterValue++
   counter.innerText = counterValue
   if (counterValue > 0) {
      console.log("on if qsjb");
      decrease.classList.remove('hidden')
   }
 
})
save.addEventListener('click' , () =>{
      
   localStorage.setItem('Value',counterValue)
   console.log(counterValue);
})
reset.addEventListener('click' , () =>{
   
   counter.innerText = 0
   counterValue=0
   if (counterValue == 0) {
      console.log("on if qsjb");
      decrease.classList.add('hidden')
   }
})

load.addEventListener('click' , () =>{
      
   let counterload = localStorage.getItem('Value')
   counter.innerText = counterload
   if(localStorage.getItem('Value')){
      let counterload = localStorage.getItem('Value')
   counter.innerText = counterload
   }else{
      counter.innerText = counterValue
   }
})
clear.addEventListener('click' , () =>{
   localStorage.removeItem('Value')
   counter.innerText = 0
})




