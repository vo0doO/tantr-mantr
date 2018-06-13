var defaultText = document.getElementById("eight");
var answer = document.getElementById("answer");
var button = document.getElementById("button");
var input = document.getElementById("input");
var mant = "";
var options = [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    " ",
    ".",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    " ",
    ".",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я",
];

// слушатель и инициатор события кнопки логина
$("#sign-in-button").click(function () {
    $("#splash").css({"display": "none",});
    $("#def").css({"display": "flex",});
})

// генератор рандомных индексов
function getIndex(min, max){
    let index = Math.floor(Math.random() * (max - min) + min);
    return index
};
// функция добавляющая букву в мантру
function strForAdd () {
    // получаем индекс
    let index = getIndex(0, options.length)
    // записываем букву по индексу из массива в переменную
    var char = options[index]
    // удаляем из массива 1 букву, начиная с позиции индекса
    options.splice(index, 1)
    // печатаем массив в консоль
    console.log(options)
    // возвращаем переменную ы которую записана буква
    return char
}

// слушатель и инициатор событий кнопки создать
button.addEventListener("click", function() {
    // если в поле ввода ничено не введено
    if (input.value.length == 0) {
        // выводим сообщение
        alert("Пожалуйста введите свое имя")
        // иначе
    } else {
        // записываем ввод в переменную
        var name = input.value

        function get(url) {
            // Return a new promise.
            return new Promise(function(resolve, reject) {
                // Do the usual XHR stuff
                var req = new XMLHttpRequest();
                req.open('GET', url);

                req.onload = function() {
                    // This is called even on 404 etc
                    // so check the status
                    if (req.status == 200) {
                        // Resolve the promise with the response text
                        resolve(req.response);
                    }
                    else {
                        // Otherwise reject with the status text
                        // which will hopefully be a meaningful error
                        reject(Error(req.statusText));
                    }
                };

                // Handle network errors
                req.onerror = function() {
                    reject(Error("Network Error"));
                };

                // Make the request
                req.send();
            });
        }

//-------------------------------------------------------------------------------------------
//========================НАЧАЛО ЛОГИКИ ДЛЯ СОЗДАНИЯ МАНТРЫ==================================
//-------------------------------------------------------------------------------------------

        // если в мантре есть точка переменная comma равна "ложь" а если есть "правда"
        var comma = ~mant.indexOf(".") ? true:false
        //  если длина мантры меньше 3 символов
        if (mant.length < 2) {
            // переменная n равна слуайной букве из массива
            let n = strForAdd();
            // если переменная n равна точке, то переменная g равна слуайной букве из массива,
            // если нет, то переменная g равна переменной n
            let g = (n == ".") ? strForAdd():n;
            // если переменная g равна точке, то переменная b равна слуайной букве из массива,
            // если нет, то переменная b равна переменной g
            let b = (g ==".") ? strForAdd():g;
            // показываем переменную не равную точке в интерфейсе
            defaultText.innerText = b;
            //  добавляем переменную не равную точке в мантру
            mant = mant + b
            // иначе если переменная comma равна "правда"
        } else if (comma) {
            // скрываем интерфейс вводаd
            $("#def").toggle();
            // составляем финальный текст
            var mantra = mant;

            console.log(mantra)
            var finalText= "<p>"+name +", ваша мантра: "+ "\"" + mant+"\""+"</p>" + "<p>Запишите её перед тем как продолжите...</p>"
            // добовляем финальный текст в html
            // показываем интерфейс оплаты
            $("#pay").toggle();
            // иначе(переменная comma равна "ложь" и длина мантры больше 3 символов)
        } else {
            // переменная n равна слуайной букве из массива
            let n = strForAdd();
            // показываем выбранну букву в интерфейсе
            defaultText.innerText = n;
            //  добавляем выбранную букву в мантр
            mant = mant + n
        }
    }
});
//-------------------------------------------------------------------------------------------
//========================КОНЕЦ ЛОГИКИ ДЛЯ СОЗДАНИЯ МАНТРЫ===================================
//-------------------------------------------------------------------------------------------

