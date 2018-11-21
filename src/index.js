function fn() {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve('hello')
    })
  })
}
fn().then(value => {
  console.log(value)
  return '1'
}).then(value=> {
  console.log(value)
})