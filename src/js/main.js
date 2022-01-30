const ghost = document.querySelector('.ghost')
const count = document.querySelector('.count')
let posX = 0
let posY = 0

const getPosition = (x = 0, y = 0) => {
  return `translate(${ x }px, ${ y }px)`
}

const animation1 = () => new Promise((resolve) => {
  const timer = setInterval(() => {
    ghost.style.transform = getPosition(posX)
    count.innerHTML       = '1'
    posX++

    if (posX >= 300) {
      clearTimeout(timer)
      resolve()
    }
  }, 0)
})

const animation2 = () => new Promise((resolve) => {
  const timer = setInterval(() => {
    ghost.style.transform = getPosition(posX, posY)
    count.innerHTML       = '2'
    posY++

    if (posY >= 300) {
      clearTimeout(timer)
      resolve()
    }
  }, 0)
})

const animation3 = () => new Promise((resolve) => {
  const timer = setInterval(() => {
    ghost.style.transform = getPosition(posX, posY)
    count.innerHTML       = '3'
    posX--

    if (posX <= 0) {
      clearTimeout(timer)
      resolve()
    }
  }, 0)
})

const animation4 = () => new Promise((resolve, reject) => {
  const timer = setInterval(() => {
    ghost.style.transform = getPosition(posX, posY)
    count.innerHTML       = '4'
    posY--

    if (posY <= 0) {
      clearTimeout(timer)
      resolve()
    }
  }, 0)
})

animation1()
  .then(() => animation2())
  .then(() => animation3())
  .then(() => animation4())
  .then(
    done => {
      count.innerHTML             = '5'
      ghost.style.backgroundColor = 'GREEN'
    },
    error => {
      count.innerHTML             = 'ERROR'
      ghost.style.backgroundColor = 'red'
    })
  .finally(() => {
    setTimeout(() => {
      ghost.style.borderRadius    = '50%'
      ghost.style.backgroundColor = 'darkgreen'
      ghost.style.border          = '5px solid green'
      count.innerHTML             = 'FINAL'
    }, 0)
  })

//
// Promise.all([
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(1)
//       resolve(1)
//     }, 3000)
//   }), // 1
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(2)
//       resolve(2)
//     }, 2000)
//   }), // 2
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(3)
//       resolve(3)
//     }, 1000)
//   })  // 3
// ]).then(console.log);
