//module.exports = xTimes;

export default function xTimes(passedFunc, times){
    if(typeof(times) === "number"){
        for(let i = 0; i < times; i++){
            passedFunc();
        }
    }
    else{
        throw("Second argument doesn't seem to be a number.");
    }
}