export const types = {
  UPGRADE_AREA: "UPGRADE_AREA",
}


export function upgradeArea(upgradeWhat){
  return { type: types.UPGRADE_AREA, payload: upgradeWhat }
}


