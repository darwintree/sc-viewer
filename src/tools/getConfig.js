import axios from 'axios'

const urls = {
  configBase: 'https://raw.githubusercontent.com/darwintree/sc-viewer-config/main',
  translationBase: "https://raw.githubusercontent.com/ShinyGroup/SCTranslationData/master/data/story"
}

const fullnames = ["櫻木 真乃", "風野 灯織", "八宮 めぐる", "月岡 恋鐘", "田中 摩美々", "白瀬 咲耶", "三峰 結華", "幽谷 霧子", "小宮 果穂", "園田 智代子", "西城 樹里", "杜野 凛世", "有栖川 夏葉", "大崎 甘奈", "大崎 甜花", "桑山 千雪", "芹沢 あさひ", "黛 冬優子", "和泉 愛依", "浅倉 透", "樋口 円香", "福丸 小糸", "市川 雛菜", "七草 にちか", "緋田 美琴"]

function getIdolFullName(idolName) {
  for (let fn of fullnames) {
    if (fn.split(" ")[1] === idolName) {
      return fn.split(" ").join("")
    }
  }
  throw new Error(`Incorrect idol name: ${idolName}`)
}

async function getIdolStories(idolName) {
  axios.get(`${urls.configBase}/story/${getIdolFullName(idolName)}.json`).then((res) => {
    console.log(res.data)
  })
  // let res = await axios.get(idolNameUrl)
  console.log(res.data)
  return res.data
}

export {
  getIdolStories,
  urls,
  getIdolFullName
}
