export const types = {
  EARN_CANDY: "EARN_CANDY",
  INCREASE_EARN_AMOUNT: "INCREASE_EARN_AMOUNT",
  SPEND_CANDY: "SPEND_CANDY",
  INCREMENT_PER_SEC: "INCREMENT_PER_SEC",
  INCREASE_INCREMENT_PER_SEC: "INCREASE_INCREMENT_PER_SEC",
}


export function earnCandy(){
  return { type: types.EARN_CANDY }
}

export function increaseEarnAmount(increaseBy){
  return { type: types.INCREASE_EARN_AMOUNT, payload: increaseBy }
}

export function spendCandy(amount){
  return { type: types.SPEND_CANDY, payload: amount }
}

export function incrementPerSec(){
  return { type: types.INCREMENT_PER_SEC }
}

export function increaseIncrementPerSec(increaseBy){
  return { type:types.INCREASE_INCREMENT_PER_SEC, payload: increaseBy }
}

