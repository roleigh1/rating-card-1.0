 
 /* Get out radio buttons based on the name attribue*/ 
 const allBtns = document.querySelectorAll('[name=rating]'); 
  /* Add the event litener */ 
 allBtns.forEach(btn =>{
  btn.addEventListener('click', function onClick(){
    document.querySelector("#rating").innerHTML = `Thanks for rating us ${this.value}!`;
  })
 }); 

 function ShowAndHide(){
  document.querySelector('.ratingbox').classList.toggle("hide");
  document.querySelector('.thankyou').classList.toggle("hide");; 
}