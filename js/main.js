/* 
DEFINE HOROSCOPE VALUES WITH HTML CLASSES
DEFINE HOROSCOPES DATES 
CLICK EVENT CHECK DATE INPUT  ASSIGN PROPER HOROSCOPE 
TOGGLE HIDDEN CLASS ON PROPER HOROSCOPE 

*/

const aries        = document.querySelector('.aries');
const taurus       = document.querySelector('.taurus');
const gemini       = document.querySelector('.gemini');
const cancer       = document.querySelector('.cancer');
const leo          = document.querySelector('.leo');
const virgo        = document.querySelector('.virgo');
const libra        = document.querySelector('.libra');
const scorpio      = document.querySelector('.scorpio');
const sagittarius  = document.querySelector('.sagittarius');
const capricorn    = document.querySelector('.capricorn');
const aquarius     = document.querySelector('.aquarius');
const pisces       = document.querySelector('.pisces');
const failure      = document.querySelector('.failure')
let finalDate = [];



document.querySelector('#checkButton').addEventListener('click', dateCheck)
document.querySelector('#resetButton').addEventListener('click', reset)

function dateCheck(){
    finalDate.length = 0 ;
    failure.classList.add('hidden');
    aries.classList.add('hidden');
    taurus.classList.add('hidden');
    gemini.classList.add('hidden');
    cancer.classList.add('hidden');
    leo.classList.add('hidden');
    virgo.classList.add('hidden');
    libra.classList.add('hidden');
    scorpio.classList.add('hidden');
    sagittarius.classList.add('hidden');
    capricorn.classList.add('hidden');
    aquarius.classList.add('hidden');
    pisces.classList.add('hidden');

    
    m = document.querySelector('#month').value.toUpperCase().trim();
    finalDate.push(m);
    d = Number((document.querySelector('#day').value));
    finalDate.push(d);
    
    console.log(finalDate);
        if(finalDate[1] > 31){
            failure.classList.toggle('hidden')
        }else if(finalDate[1] < 0){
            failure.classList.toggle('hidden')        
        }else if(finalDate[0]== 'MARCH' && finalDate[1] >= 21 || finalDate[0] == 'APRIL' && finalDate[1] <= 19  ){
            aries.classList.toggle('hidden')
        }else if (finalDate[0] == 'APRIL' && finalDate[1] >= 20 || finalDate[0] == 'MAY' && finalDate[1] <=20 ){
            taurus.classList.toggle('hidden')
        }else if(finalDate[0] == 'MAY' && finalDate[1] >= 21 || finalDate[0] === 'JUNE' && finalDate[1] <= 20){
            gemini.classList.toggle('hidden')
        }else if(finalDate[0] == 'JUNE' && finalDate[1] >= 21 || finalDate[0] === 'JULY' && finalDate[1] <= 22){
            cancer.classList.toggle('hidden')
        }else if(finalDate[0] == 'JULY' && finalDate[1] >= 23 || finalDate[0] === 'AUGUST' && finalDate[1] <= 22){
            leo.classList.toggle('hidden')
        }else if(finalDate[0] == 'AUGUST' && finalDate[1] >= 23 || finalDate[0] === 'SEPTEMBER' && finalDate[1] <= 22){
            virgo.classList.toggle('hidden')
        }else if(finalDate[0] == 'SEPTEMBER' && finalDate[1] >= 23 || finalDate[0] === 'OCTOBER' && finalDate[1] <= 22){
            libra.classList.toggle('hidden')
        }else if(finalDate[0] == 'OCTOBER' && finalDate[1] >= 23 || finalDate[0] === 'NOVEMBER' && finalDate[1] <= 21){
            scorpio.classList.toggle('hidden')
        }else if(finalDate[0] == 'NOVEMBER' && finalDate[1] >= 22 || finalDate[0] === 'DECEMBER' && finalDate[1] <= 21){
            sagittarius.classList.toggle('hidden')
        }else if(finalDate[0] == 'DECEMBER' && finalDate[1] >= 22 || finalDate[0] === 'JANUARY' && finalDate[1] <= 19){
            capricorn.classList.toggle('hidden')
        }else if(finalDate[0] == 'JANUARY' && finalDate[1] >= 20 || finalDate[0] === 'FEBRUARY' && finalDate[1] <= 18){
            aquarius.classList.toggle('hidden')
        }else if(finalDate[0] == 'FEBRUARY' && finalDate[1] >= 19 || finalDate[0] === 'MARCH' && finalDate[1] <= 20){
            pisces.classList.toggle('hidden')
        }else{
            failure.classList.toggle('hidden')
    }
    
    
      
    return false;



}

function reset(){
    finalDate.length = 0 ;
    failure.classList.add('hidden');
    aries.classList.add('hidden');
    taurus.classList.add('hidden');
    gemini.classList.add('hidden');
    cancer.classList.add('hidden');
    leo.classList.add('hidden');
    virgo.classList.add('hidden');
    libra.classList.add('hidden');
    scorpio.classList.add('hidden');
    sagittarius.classList.add('hidden');
    capricorn.classList.add('hidden');
    aquarius.classList.add('hidden');
    pisces.classList.add('hidden');


    return false;

}