module.exports = function toReadable (number){
let num='';
let h=' hundred ';
//var arrN = String(number)  ;
let n={
    0: 'zero',    1: 'one',    2: 'two',    3: 'three',
    4: 'four',    5: 'five',    6: 'six',    7: 'seven',
    8: 'eight',    9: 'nine',    10: 'ten',    11: 'eleven',
    12: 'twelve',    13: 'thirteen',    14: 'fourteen',
    15: 'fifteen',    16: 'sixteen',    17: 'seventeen',
    18: 'eighteen',    19: 'nineteen',    20: 'twenty',
    30: 'thirty',    40: 'forty',    50: 'fifty',
    60: 'sixty',    70: 'seventy',    80: 'eighty',
    90: 'ninety'
}
if (number < 20){
num = n[number]
} else if ((number % 10 ===0) && (number <100)){
  num = n[number]
} else if (number <100){
let arrN = String(number)  
  num = n[arrN[0]*10] + ' '+n[arrN[1]]
} else if ((number % 100 ===0) && (number <1000)){
num = n[number / 100] + h
} else if ((number % 10 === 0) && (number <1000)){
let arrN = String(number)   
num = n[arrN[0]] + h + n[arrN[1]*10]
} else if ((number % 100 < 20) && (number <1000)){
let arrN = String(number)
num = n[arrN[0]]+h+n[Number(arrN[1]*10)+Number(arrN[2])]
} else if ((number % 100 > 20) && (number <1000)){
let arrN = String(number)
num = n[arrN[0]]+h+n[arrN[1]*10]+' '+n[arrN[2]]
} else {num = number+' more than 1000'}
return num
}
