// In this challenge, we practice looping over the characters of string

function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    const letters = s.split('');
    letters.forEach(char => {
        if (vowels.includes(char)) {
            console.log(char);
        }
    });
    letters.forEach(char => {
        if (!vowels.includes(char)) {
            console.log(char);
        }
    });
}