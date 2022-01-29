const block = document.querySelector('.block')
let posX    = 0
let posY    = 0

const getPosition = (x = 0, y = 0) => {
  return `translate(${ x }px, ${ y }px)`
}

const animation1 = () => new Promise((resolve) => {
  const timer = setInterval(() => {
    block.style.transform = getPosition(posX)
    block.innerHTML       = '1'
    posX++
    
    if (posX >= 300) {
      clearTimeout(timer)
      resolve()
    }
  }, 0)
})

const animation2 = () => new Promise((resolve) => {
  const timer = setInterval(() => {
    block.style.transform = getPosition(posX, posY)
    block.innerHTML       = '2'
    posY++
    
    if (posY >= 300) {
      clearTimeout(timer)
      resolve()
    }
  }, 0)
})

const animation3 = () => new Promise((resolve) => {
  const timer = setInterval(() => {
    block.style.transform = getPosition(posX, posY)
    block.innerHTML       = '3'
    posX--
    
    if (posX <= 0) {
      clearTimeout(timer)
      resolve()
    }
  }, 0)
})

const animation4 = () => new Promise((resolve) => {
  const timer = setInterval(() => {
    block.style.transform = getPosition(posX, posY)
    block.innerHTML       = '4'
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
      block.innerHTML             = '5'
      block.style.backgroundColor = 'GREEN'
    },
    error => {
      block.innerHTML             = 'ERROR'
      block.style.backgroundColor = 'red'
    })
  .finally(() => {
    setTimeout(() => {
      block.style.borderRadius    = '50%'
      block.style.backgroundColor = 'darkgreen'
      block.style.border          = '5px solid green'
      block.innerHTML             = 'FINAL'
    }, 0)
  })

//
// Promise.all([
//   animation1,
//   animation2,
//   animation3,
//   animation4,
// ]).then(() => {
//   console.log(promises)
//   block.style.borderRadius    = '50%'
//   block.style.backgroundColor = 'red'
//   block.style.border          = '5px solid #00FFA9'
//   block.innerHTML             = 'ALL'
// })

