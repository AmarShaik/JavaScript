// reverse a string and use try and catch
function reverseString(s) {
    try{
        let split_string = s.split('');
        split_string.reverse();
        console.log(split_string.join(''));
    }
    catch(e){
        console.log(e.message);
        console.log(s);
    }
}