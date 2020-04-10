// var getMovie = function (name, start) {
//     return name + " " + start;
// }
// console.log(getMovie("Avengers", "2018"));


// var getMovie = (name, start) => {
//     return name + " " + start;
// }
// console.log(getMovie("Avengers", "2018"));



// var getMovie = (name, start) => name + " " + start;
// console.log(getMovie("Avengers", "2018"));


// var obj = {
//     width: 100
// };
// console.log(obj.width);



// var { width } = {
//     width: 100
// }


// var { width, height } = {
//     width: 100,
//     height: 200
// }


// function generateObj() {
//     return {
//         width: 100,
//         height: 200
//     }
// }
// var { width, height } = generateObj();



// function generateObj() {
//     return {
//         title: "Menu",
//         width: 100,
//         height: 200
//     }
// }
// var { width: containerWidth, height: containerHeight } = generateObj;
// console.log(containerWidth);
// console.log(containerHeight);



// var obj = {
//     id: "123",
//     attributes: {
//         width: 100,
//         height: 100
//     }
// }

// var { id, attributes: { width, height } } = obj;
// console.log(id);
// console.log(width);
// console.log(height);



// var obj = {
//     id: "123",
//     attributes: {

//     }
// }

// var { id, attributes: { width = 50, height = 50 } } = obj;
// console.log(id);
// console.log(width);
// console.log(height);




// Мы описали стрелочную функцию getText и использовали вместо аргумента ...args. Это значит возьми все аргументы, которые мы передали и засунь в переменную args. Если мы посмотрим в браузер, то увидим, что в консоли вывелось a,b,c наши три аргумента.
// const getText = (...args) => {
//     console.log(args);
// }
// getText("a", "b", "c")


// Если же мы укажем отдельно первый аргумент, в то args поместятся все оставшиеся аргументы.
// const getText = (a, ...args) => {
//     console.log(a, args);
// }
// getText("a", "b", "c")




// Второй вариант, когда spread удобен, это когда нам нужно подмерджить 2 массива. В ES5 обычно пишут
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// Array.prototype.push.apply(arr1, arr2);
// console.log(arr1);
// Этим самым мы помещаем все элементы второго массива в первый массив


// В ES6 мы можем написать
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// arr1.push(...arr2)
// console.log(arr1);
// Мы пушим spread второго массива. То есть мы превращаем массив в последовательность елементов и пушим их. Код намного проще для понимания


// class SimpleDate {
//     constructor(year, month, day) {
//         this.year = year;
//         this.month = month;
//         this.day = day;
//     }
// }
// const today = new SimpleDate(2020, 1, 28)
// console.log(today);




// class SimpleDate {
//     constructor(year, month, day) {
//         this.year = year;
//         this.month = month;
//         this.day = day;
//     }

//     toString() {
//         return `${this.day}/${this.month}/${this.year}`;
//     }
// }
// const today = new SimpleDate(2020, 01, 28)
// console.log(today.toString());


// class OtherDate extends SimpleDate {
//     constructor(year, month, day) {
//         super(year, month, day)
//     }

//     toString() {
//         return `${this.day}.${this.month}.${this.year}`
//     }
// }
// const tomorrow = new OtherDate(2020, 01, 29)
// console.log(tomorrow.toString());




// Зачем вообще придумали promises? Если какая-то операция выполняется долго, то есть асинхронно, то ее нельзя просто написать с помощью синхронного кода в Javascript ( Ожидание ответа от сервера - Ajax ). Поэтому для этого и используют промисы. По русски promises переводятся, как обещания. Самые частые примеры промисов это setTimeout, получение данных с сервера, запись в файл и другие.
// Итак как же выглядит промис?
// const promise = new Propmise((resolve, reject) => {
//     if (true) {
//         resolve("Hello world")
//     } else {
//         reject()
//     }
// })
// Resolve и reject - это тоже функции. Мы вызываем resolve внутри, когда говорим, что промис завершился успешно, а reject, когда мы хотим сказать, что случилось что-то неожиданное, например ошибка.
// Давай напишем условие, в котором вызовем функцию resolve с аргументом hello world. В else вызовем reject.




// Как вы понимаете у нас всегда вызывается resolve.
// Теперь нам нужно как то подписаться на то, что произошло внутри промиса. Для этого мы будем использовать then и catch. Then будет вызыватся на resolve, а catch на reject.
// Давайте добавим два обработчика
const promise = new Propmise((resolve, reject) => {
    if (true) {
        resolve("Hello world")
    } else {
        reject()
    }

}
)
promise.then(data => console.log("success: ", data));
promise.catch(error => console.log("error: ", error))
