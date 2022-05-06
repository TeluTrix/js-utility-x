//module.exports = xTimesPrint;

export default function xTimesPrint(string, times){
    if(typeof(times) === "number"){
        for(let i = 0; i < times; i++){
            string = string.replace("{num}", i.toString());
            string = string.replace("{num}", i.toString());
            console.log(string);
        }
    }
    else{
        throw("Second argument doesn't seem to be a number.");
    }
}