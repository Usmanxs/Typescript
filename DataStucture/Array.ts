// An array is a common data structure that holds items of the same type, in TypeScript, unlike other languages, an array doesn't have a fixed length. Also, in TypeScript, you don't have to re-organize all elements of an array when makings operations like insert or delete.

const numbers: number[] = [1, 2, 3, 4]
const names :string [] = ['Snake', 'Ocelot', 'Otacon', 'Naomi']

/** Also can be written using a generic array type, Array<elemType> **/

let   num : Array<number> = [1, 2, 3, 4]
let str: Array<string> = ['Snake', 'Ocelot', 'Otacon', 'Naomi']

let array :number[] = [1, 2, 3, 4]
array.push(5)

/** add to the beginning **/
array.unshift(0)

/** add in a specific index position **/
array.splice(3, 0, 8) // add 8 in the index 3