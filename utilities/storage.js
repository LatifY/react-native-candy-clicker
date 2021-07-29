import "localstorage-polyfill"


// export const setItem = (key, value) => {
//   try{
//     localStorage[key] = value
//   }
//   catch{
//     console.log("Cannot set item into local storage")
//   }
// }

// export const getItem = (key)  => {
//   try{
//     let value = localStorage.getItem(key)
//     if(value === null){
//       setItem(key, 0)
//       return 0
//     }
//     if(!isNaN(Number(value))){
//       return Number(value)
//     }
//     return value
//   }
//   catch{
//     console.log("Cannot get item from local storage")
//   }
// }

export const loadState = () => {
  try {
      const serializedState = localStorage.getItem("state")
      if (serializedState == null) return undefined
      return JSON.parse(serializedState)
  } catch (err) {
      return undefined
  }
}

export const saveState = (state) => {
  try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem("state", serializedState)
  } catch (err) {
      console.log(err)
  }
}