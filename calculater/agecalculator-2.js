let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');
let elClear = document.getElementById('clear');
let elResult2 = document.getElementById('result2');
const today = new Date();

function calculateZodiac()
{
    let birthDate = new Date(el.value);
    let sign = birthDate.getFullYear() % 12;
    let zodiac;

    switch (sign) {
        case 0:
            zodiac = "원숭이";
            break;
        case 1:
            zodiac = "닭";
            break;
        case 2:
            zodiac = "개";
            break;
        case 3:
            zodiac = "돼지";
            break;
        case 4:
            zodiac = "쥐";
            break;
        case 5:
            zodiac = "소";
            break;
        case 6:
            zodiac = "호랑이";
            break;
        case 7:
            zodiac = "토끼";
            break;
        case 8:
            zodiac = "용";
            break;
        case 9:
            zodiac = "뱀";
            break;
        case 10:
            zodiac = "말";
            break;
        case 11:
            zodiac = "양";
            break;
    }
    elResult2.innerText = `당신의 띠는 ${zodiac}띠 입니다.`

    return zodiac;
}

function calculateAge() {
    let birthDate = new Date(el.value);
    let age;
    

    if (today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() == birthDate.getMonth() && today.getDate() > birthDate.getDate())
    ) {
        age = today.getFullYear() - birthDate.getFullYear();
    } else {
        age = today.getFullYear() - birthDate.getFullYear() - 1;

    }
    if (el.value == "") {
        alert("생년월일을 입력해주세요!");
    }
    else {
        elResult.innerText = `당신의 만 나이는 ${age} 입니다.`
    }
    return age;
}

function clear() {
    age = 0;
    el.value = 0;
    elResult.innerText = "";
    elResult2.innerText="";
}

elSubmit.addEventListener('click', calculateAge);
elSubmit.addEventListener('click',calculateZodiac);
elClear.addEventListener('click', clear);