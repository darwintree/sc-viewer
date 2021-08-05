const axios = require('axios')
const fs = require('fs-extra')
const path = require('path')
const idol_info = require('../../public/assets/config/idol/idol-info.json')
const icon_info = require('../../public/assets/config/idol/icon-info.json')

async function downloadFile(url, filepath, name) {
  if (!fs.existsSync(filepath)) {
    fs.mkdirSync(filepath);
  }
  const mypath = path.resolve(filepath, name);
  if (fs.existsSync(mypath)) {
    console.log(`${mypath} already exists, passed`)
    return
  }
  const writer = fs.createWriteStream(mypath);
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

async function downloadIdolIcon(iconUrl, iconId) {
  // let tmp = iconUrl.split('/')
  // let filename = tmp[tmp.length-1].split('?')[0]
  await downloadFile(iconUrl, 'public/assets/idol/icon', `${iconId}.png`)
}

async function main() {
  // const base = 'https://raw.githubusercontent.com/darwintree/sc-viewer-config/main'
  // const res = await axios.get(`${base}/idol/idol-info.json`)
  // const idol_info = res.data
  // console.log(`idol_info fetched`)
  // for (let obj of idol_info) {
  //   await downloadIdolIcon(obj.icon, obj.id)
  // }

  for (let id of Object.keys(icon_info)) {
    await downloadIdolIcon(icon_info[id], id)
  }

  // await downloadIdolIcon('https://shinycolors.enza.fun/assets/8a92c7c2570b1e9d4ea817b72dd7cb13d116224807275478bd324a9a824a6535?v=8')
  // await downloadFile('https://shinycolors.enza.fun/assets/8a92c7c2570b1e9d4ea817b72dd7cb13d116224807275478bd324a9a824a6535', 'public/idol/icon', '8a92c7c2570b1e9d4ea817b72dd7cb13d116224807275478bd324a9a824a6535.png')
}

main()