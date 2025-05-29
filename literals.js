/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

function sides(literals, ...expressions) {
    const str1 = literals[0];  
    const str2 = literals[1];  
    const str3 = literals[2];  
    const [A, P] = expressions;
    
    const s1 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
    const s2 = (P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
    
    return [s1, s2].sort();
}
