// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"

const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function getDayName(dateString) {
    let dayName;
    // Write your code here
    dayName = Days[new Date(dateString).getDay()];
    return dayName;
}
