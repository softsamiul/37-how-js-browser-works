let sec = 0;
console.log('1');
console.log('2');
// setInterval(() => {
//     console.log('Tik tik');

// }, 1000);

const timeId = setInterval(() => {
    console.log(++sec);
    if (sec > 5) {
        clearInterval(timeId);
    }
}, 1000);
console.log('3');