
let counter;
let quest;
let n;

$('#o, #t, #modal').attr('style', 'display: none')
$('#modal').slideToggle(3000)
$('#modal').attr('style', 'height: 450px; background: url(fon1.png) center center no-repeat')
$('#close').attr('style', 'background: none; margin-top: 0; margin-left: calc(50% + 100px); font-size: 16px')
$('#close').on('click', (event) => {
    $('#modal').slideToggle(3000)
    $('#o').delay(3000).fadeIn(1000)
})

document.getElementById('b').onclick = function () {
    document.getElementById('o').style.display = "none";
    document.getElementById('t').style.display = "block";
    counter = 0;
    quest = Math.floor(Math.random() * 100 + 1);
    console.log(quest);
    document.getElementById('c').innerHTML = 'Попыток ' + counter;
    document.getElementById('i').value = " ";
}

document.getElementById('b2').onclick = function () {
    counter++;
    document.getElementById('c').innerHTML = 'Попыток ' + counter;
    n = document.getElementById('i').value;
    console.log(n);
    if (isNaN(n) | n == " ") {
        document.getElementById('ans').style.display = "block";
        document.getElementById('ans').innerHTML = "Надо ввести число";
        document.getElementById('i').value = " ";
    }
    else if (quest == n & counter == 2) {
        document.getElementById('ans').innerHTML = " ";
        document.getElementById('c').innerHTML = " ";
        document.getElementById('i').value = " ";
        document.getElementById('t').style.display = "none";
        document.getElementById('o').style.display = "block";
        document.getElementById('again').innerHTML = 'Вы угадали со ' + counter + ' попытки. Сыграем еще раз?';
    }
    else if (quest == n) {
        document.getElementById('ans').innerHTML = " ";
        document.getElementById('c').innerHTML = " ";
        document.getElementById('i').value = " ";
        document.getElementById('t').style.display = "none";
        document.getElementById('o').style.display = "block";
        document.getElementById('again').innerHTML = 'Вы угадали с ' + counter + ' попытки. Сыграем еще раз?';
    }
    else if (quest > n) {
        document.getElementById('ans').style.display = "block";
        document.getElementById('ans').innerHTML = "Надо больше";
    }
    else {
        document.getElementById('ans').style.display = "block";
        document.getElementById('ans').innerHTML = "Надо меньше";
    }
}