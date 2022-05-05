module.exports = xTimesPrint;

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