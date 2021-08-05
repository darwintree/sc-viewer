function getIdolSrc(idol) {
  let src;
  src = "/assets/idol/thumb/" + idol + ".webp";
  return src;
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
