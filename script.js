const submit_btn = document.querySelector('.submit-btn');
submit_btn.addEventListener('click',onSubmit);
const card_conten_1 = document.querySelector('.card-content-1');
const card_conten_2 = document.querySelector('.card-content-2');
const rating_btn = document.querySelectorAll('.rating-btn');
let score = document.querySelector('.score');
let star_score = 4;
rating_btn.forEach(btn=>{
    btn.addEventListener('click', handleRatingBtnClick);
})
function onSubmit(){
    card_conten_1.classList.add('hide');
    card_conten_2.classList.remove('hide');
    score.textContent = star_score;
}
function handleRatingBtnClick(event){
    rating_btn.forEach(btn=>{
        btn.classList.remove('active')
    });
    if(event.target.classList.contains('rating-btn')){
        event.target.classList.add('active');
    }else{
        event.target.parentElement.classList.add('active')
    }
    star_score = event.target.textContent;
    console.log(star_score)
}