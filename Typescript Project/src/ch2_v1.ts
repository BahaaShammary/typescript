/**
 * Primitives and built-in types
 */

// Typescript will give x the type "number" - this is called type inference
let x = 5;

// if we don't want to intitate the value but define the variable we do:
let y: number;
let z: string;
let b: boolean;
let d: Date;
let a: string[];

// if we want to declare a variable that might have a different type later:
let n: any;
n = 123;
n = "hello!";

// if we declared an intial variable as a type but want to change it later:
a = "should be an array" as any;


