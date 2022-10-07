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


let hour = 19

if (hour >= 6 && hour < 12)
    console.log('Goodmorning')
 else if (hour >= 12 && hour < 18)
    console.log('good afternoon')
else
    console.log('good evening')