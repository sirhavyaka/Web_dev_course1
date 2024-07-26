let a = "Initializing Hacking"
let b = "Reading your files"
let c = "Passwords detected"
let d = "Commencing hack"
let e = "Cleaning up"

function blink() {

    setInterval(() => {
        document.getElementById("1").style.visibility = "visible"
    }, 1000);
    setInterval(() => {
        document.getElementById("2").style.visibility = "visible"
    }, 2000);
    setInterval(() => {
        document.getElementById("3").style.visibility = "visible"
    }, 3000);

}
var rand = Math.floor(Math.random() * (6)) + 0;
let arr = [2000, 3000, 4000, 5000, 6000]

async function one() {
    new Promise((resolve, reject) => {
        setInterval(() => {
            document.querySelector(".text").innerHTML = `${a}`;
            blink()
        }, arr[`${rand}`]);
    })
    
    await one()
}


async function two() {
    new Promise((resolve, reject) => {
        setInterval(() => {
            document.querySelector(".text").innerHTML = `${b}`;
            blink()
        }, arr[`${rand}`]);
    })

    await two()
}

async function three() {
    new Promise((resolve, reject) => {
        setInterval(() => {
            document.querySelector(".text").innerHTML = `${c}`;
            blink()
        }, arr[`${rand}`]);
    })

    await three()
}

async function four() {
    new Promise((resolve, reject) => {
        setInterval(() => {
            document.querySelector(".text").innerHTML = `${d}`;
            blink()
        }, arr[`${rand}`]);
    })
  
    await four()
}

async function five() {
    new Promise((resolve, reject) => {
        setInterval(() => {
            document.querySelector(".text").innerHTML = `${e}`;
            blink()
        }, arr[`${rand}`]);
    })
 
    await five()
}
one();

two();
three();
four();
five();