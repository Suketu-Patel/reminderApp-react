export const dateFormat = (fullDate, choice) => {
    const [day, month, date, year, time, timezone, ...standard] = fullDate.toString().split(" ");
    const dateMap = {
        day, month, date, year, time, timezone, standard
    }
    const splittedTime = time.split(":")
    dateMap.hour = splittedTime[0]
    dateMap.minute = splittedTime[1]
    dateMap.second = splittedTime[2]
    let choiceArray = choice.split(" ");
    let result = []
    for(let i in choiceArray){
        result.push(dateMap[choiceArray[i]])
    }
    return result.join(" ")
}