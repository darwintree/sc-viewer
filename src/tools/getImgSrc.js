import { units } from '../assets/album-index.json'

let idolList = []

for (let unit of Object.keys(units)) {
  idolList = idolList.concat(units[unit])
}

function getIdolSrc(idol) {
  if (idolList.indexOf(idol) < 0) idol='dummy'
  // console.log(idolList)
  return "/assets/idol/thumb/" + idol + ".webp";
}

function getUnitSrc(unit) {
  let src;
  src = "/assets/unit/" + unit + ".png";
  return src;
}

function getIconSrc(cardId) {
  return `/assets/idol/icon/${cardId}.png`
}

export { getIdolSrc, getUnitSrc, getIconSrc }
