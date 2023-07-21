let p = new Promise((resolve, reject) => {
    let a = 1 + 8
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((messege) => {
    console.log('This is in the then ' + messege)
}).catch((messege) => {
    console.log('This is in the catch ' + messege)
})





const userLeft = false
const userWatchingCatMeme = false

// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: 'User Left',
//             messege: ':('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             messege: 'webDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up and Subscribe')
//     }
// }

// watchTutorialCallback((messege) => {
//     console.log('Success: ' + messege)
// }, (error) => {
//     console.log(error.name + '' + error.messege)
// })






function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                messege: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                messege: 'webDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then((messege) => {
    console.log('Success: ' + messege)
}).catch((error) => {
    console.log(error.name + '' + error.messege)
})







const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messeges) => {
    console.log(messeges)
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messege) => {
    console.log(messege)
})

