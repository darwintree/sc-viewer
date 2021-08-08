import { units } from '../assets/album-index.json'

let idolList = []
let unitList = []

for (let unit of Object.keys(units)) {
  unitList.push(unit)
  idolList = idolList.concat(units[unit])
}

function getIdolSrc(idol, _default) {
  for (let shortName of idolList) {
    console.log(idol)
    console.log(shortName)
    if (idol.indexOf(shortName) >= 0) {
      return `/assets/idol/thumb/${shortName}.webp`
    } 
    
  }
  if (_default) return `/assets/idol/thumb/${_default}.webp`
  return `/assets/idol/thumb/dummy.webp`
  // if (idolList.indexOf(idol) < 0) idol='dummy'
  // // console.log(idolList)
  // return "/assets/idol/thumb/" + idol + ".webp";
}

function getUnitSrc(unit) {
  if (unit === "283_production") return "/assets/unit/rotating.gif"
  return "/assets/unit/" + unit + ".png"
}

function getIconSrc(cardId) {
  return `/assets/idol/icon/${cardId}.png`
}

function getCampaignCover(campaignName) {
  return `/assets/campaign/${campaignName}.webp`
}

export { getIdolSrc, getUnitSrc, getIconSrc, getCampaignCover }
