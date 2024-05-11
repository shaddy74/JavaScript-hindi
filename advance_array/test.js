const myArr = []
// %DebugPrint(myArr)

// continous, Holey

// SMI (smallinteger)                     ex- [1, 2, 3, 4, 5]
// Packed elemnet                         ex- [1, 2, '3', 4, '5']
// Double (float, string, function)       ex- [1, 2, 3.2, 4, 5.9]

const arrTwo = [1, 2, 3, 4, 5]
// continous_SMI_Elements

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS


arrTwo[10] = 11
// HOLEY ELEMENTS
console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);



const arrThree = [1, 2, 3, 4, 5, 6]
console.log(arrThree[2]);



const arrFour = new Array(3)
// just 3 holes. 
arrFour[0] = '1'
arrFour[1] = '2'
arrFour[2] = '3'

const arrFive = []
arrFive.push('1')
arrFive.push('2')
arrFive.push('3')


const arrSix = [1, 2, 3, 4, 5]
arrSix.push(Infinity)