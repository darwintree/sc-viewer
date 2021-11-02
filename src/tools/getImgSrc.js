import { units } from '../assets/album-index.json'

let idolList = []
let unitList = []

let prefix = "/sc-viewer"

for (let unit of Object.keys(units)) {
  unitList.push(unit)
  idolList = idolList.concat(units[unit])
}

function getIdolSrc(idol, _default) {
  for (let shortName of idolList) {
    if (idol.indexOf(shortName) >= 0) {
      return `${prefix}/assets/idol/thumb/${shortName}.webp`
    } 
    
  }
  if (_default) return `${prefix}/assets/idol/thumb/${_default}.webp`
  return `${prefix}/assets/idol/thumb/dummy.webp`
  // if (idolList.indexOf(idol) < 0) idol='dummy'
  // // console.log(idolList)
  // return "/assets/idol/thumb/" + idol + ".webp";
}

function getUnitSrc(unit) {
  if (unit === "283_production") return `${prefix}/assets/unit/rotating.gif`
  return `${prefix}/assets/unit/${unit}.png`
}

function getIconSrc(cardId) {
  return `${prefix}/assets/idol/icon/${cardId}.png`
}

function getCampaignCover(campaignName) {
  return `${prefix}/assets/campaign/${campaignName}.webp`
}

export { getIdolSrc, getUnitSrc, getIconSrc, getCampaignCover }
