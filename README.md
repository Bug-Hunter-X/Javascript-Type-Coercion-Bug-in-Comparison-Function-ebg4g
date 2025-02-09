# Javascript Type Coercion Bug
This repository demonstrates a common Javascript bug related to type coercion in comparison functions.

## Bug Description
The `myFunc` function intends to return the larger of two numbers. However, due to Javascript's loose typing and automatic type coercion, unexpected results occur when non-numeric inputs are provided.

## Bug Reproduction
1. Clone this repository.
2. Run `bug.js` using Node.js or a similar Javascript runtime.
3. Observe the unexpected outputs when non-numeric values are passed as arguments.

## Solution
The solution involves explicitly checking the data types of the inputs and handling non-numeric cases appropriately (e.g., by throwing an error or returning a default value).