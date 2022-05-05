module.exports = xTimes;

function xTimes(passedFunc, times){
    if(typeof(times) === "number"){
        for(let i = 0; i < times; i++){
            passedFunc();
        }
    }
    else{
        throw("Second argument doesn't seem to be a number.");
    }
}
function xTimesPrint(string, times){
    if(typeof(times) === "number"){
        for(let i = 0; i < times; i++){
            console.log(string);
        }
    }
    else{
        throw("Second argument doesn't seem to be a number.");
    }
}

//xTimes(() => console.log("TEST"), 2);