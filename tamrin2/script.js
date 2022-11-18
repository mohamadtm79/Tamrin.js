const _button = document.getElementsByTagName('button')[0];

const _input = document.getElementsByTagName('input')[0];
const _span = document.getElementsByTagName('span')[0];
const _h1 = document.getElementsByTagName('h1')[0];
const _div = document.getElementsByClassName('mohamad')[0];
const _flag = document.getElementById('div');
let flag = true
_button.addEventListener("click",()=>{

    if(flag == true){
        _h1.style.animationName = 'none'
    }
    setTimeout(() => {
        _h1.style.animationName = 'anime'
    }, 100);

    let name = _input.value
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    .then(resposne => resposne.json())
    .then(item =>{
        _flag.style.display = 'block'
        _span.style.display = 'none'
        console.log(item);

        _h1.innerHTML = `${item[0].fifa}`

        _flag.innerHTML = `
            <img src="${item[0].flags.png}" alt="">
            <h4> پایتخت : ${item[0].capital[0]} </h4>
            <h4> منطقه : ${item[0].region} </h4>
            <h4> مرزها : ${item[0].borders} </h4>
            <h4> زبان : ${Object.values(item[0].languages)} </h4>
        `

    })
    .catch(() => {
        if (name.length == 0) {
            _span.style.display = 'block'
            _span.innerHTML = `فایلی وجود ندارد`;
            _flag.style.display = 'none'
            _h1.style.animationName = 'none'
            flag = true

        } else {
            _span.style.display = 'block'
            _span.innerHTML = `اسم را کامل وارد کنید`;
            _flag.style.display = 'none'
            _h1.style.animationName = 'none'
            flag = true


        }
      });

})