/**
 * Create a function that maps a value to a range
 * @param  {Number}   inMin    Input range minimun value
 * @param  {Number}   inMax    Input range maximun value
 * @param  {Number}   outMin   Output range minimun value
 * @param  {Number}   outMax   Output range maximun value
 * @return {function}          A function that converts a value
 * 
 * @author Victor N. wwww.victorborges.com
 * @see https://gist.github.com/victornpb/51b0c17241ea483dee2c3a20d0f710eb/
 */
function createRemap(inMin, inMax, outMin, outMax) {
    return function remaper(x) {
        return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };
}
//Usage examples
var f2c = createRemap(32,212, 0,100); //fahrenheit to celsius
var c2f = createRemap(0,100, 32,212); //celsius to fahrenheit
var scale = createRemap(0,256, 0,1024); //celsius to fahrenheit

console.log(f2c(90))      //32.22222222222222
console.log(c2f(70))      //158
console.log(scale(199))
