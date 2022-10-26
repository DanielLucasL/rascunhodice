/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {TokenPlayer} from './TokenPlayer.js';
export class Gameplay {
  constructor(arg, add) {
    this.array = arg;
    this.add = add;
  }
}
function add(called_array) {
    if (Array.isArray(this.array) && Array.isArray(called_array.array)) {
        if (this.array.length === called_array.array.length) {
            let result = [];
            for (let i = 0; i < this.array.length; i++) {
                if (typeof(this.array[i]) == "TokenPlayer" && typeof(called_array.array[i]) == "TokenPlayer") {
                    result.push(this.array[i] + called_array.array[i]);
                } else {
                    result.push("Invalid vector value");
                }
            }
            return new Vector(result);
        } else {
            return new Vector("The vectors are not the same length.");
        }
    } else {
        return new Vector("One of your arguments or both of them is not an array.");
    }
}


