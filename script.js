let attempt = 1;
let userNum = parseInt(document.getElementById('userNumber').value);
let lotNum = Math.floor(Math.random() * 10)

   function fn(){
   // console.log(lotNum)
   
   let userNum = parseInt(document.getElementById('userNumber').value);
   let num = Math.floor(userNum/lotNum);
   num = lotNum*num;
   num = userNum - num
   if(userNum < 1 || userNum > 100){
      alert('enter number in the range of 1 to 100')
      resetGame()
   }
   else if(attempt === num + 1 ){
     alert('You Won')
   }
   else{
      if(attempt == 10){
         alert('chances over')
         resetGame()
      }
      else{
      let chance = 10 - attempt;
      alert(`chances left : ${chance}`)
      }
      // if(chance == 0){
      //    document.getElementById('userNumber').value = ''
      //    attempt = 1
      // }
   }
   attempt++;
   } 
   function resetGame(){
      lotNum = Math.ceil(Math.random() * 10)
      attempt = 1;
      document.getElementById('userNumber').value = ''
   }