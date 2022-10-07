const letterFrequency = (phrase) => {
    let frequency = {}

    const words = phrase.split(' ')
    for (const word of words){
        if (word in frequency){
            frequency[word] += 1
        } else {
        frequency[word] = 1
        }
    }
    return frequency
}
// console.log(letterFrequency("lol who are you lol lol are you"))


// let hour = 19

// if (hour >= 6 && hour < 12)
    // console.log('Goodmorning')
//  else if (hour >= 12 && hour < 18)
    // console.log('good afternoon')
// else
    // console.log('good evening')
    // const doubleMap = (numbers) => {
    //     return numbers.map(number => number * 2)
    // }
    // console.log(doubleMap([1, 2, 3, 4]))

    // let result = [1, 2, 3, 4, 5].map(number => number * 2)
    // console.log(result)


    const filter = (numbers, greaterThan) => {
        let result = []

        for (const number of numbers){
            if (number > greaterThan){
                result.push(number)
            }
        }
        return result
    }
    const nums = [1, 2, 3, 4, 5, 6]
    console.log(nums.filter(nums => nums > 3 || nums < 3))