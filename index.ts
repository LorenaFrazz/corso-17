//Start project

/*
through type, choose add or minus
*/
const add = (a: number, b: number) => a + b;

const mins = (a: number, b: number) => a - b;

const genericFunction = (a: number, b: number, type: '+' | '-') =>
type === '+' ? a + b : a - b 