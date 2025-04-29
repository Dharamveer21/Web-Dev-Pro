// default import
import multiply from "./09_modules_export.js";
console.log(multiply(2, 2));

// named import
import { add, subtract } from "./09_modules_export.js";

console.log(add(2, 2));
console.log(subtract(2, 2));