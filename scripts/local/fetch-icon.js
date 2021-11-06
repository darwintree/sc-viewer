const axios = require('axios')
const fs = require('fs-extra')
const path = require('path')
const stream = require('stream');
const {
  promisify
} = require('util');
const idol_info = require('../../public/assets/config/idol/idol-info.json')
const icon_info = require('../../public/assets/config/idol/icon-info.json')

const finished = promisify(stream.finished)
const pipeline = promisify(stream.pipeline)

const requestTimeoutInterceptor = config => {
  if (config.timeout === undefined || config.timeout === 0) {
    return config;
  }

  const source = axios.CancelToken.source();

  setTimeout(() => {
    source.cancel(`Cancelled request. Took longer than ${config.timeout}ms to get complete response.`);
  }, config.timeout);

  // If caller configures cancelToken, preserve cancelToken behaviour.
  if (config.cancelToken) {
    config.cancelToken.promise.then(cancel => {
      source.cancel(cancel.message);
    });
  }

  return { ...config, cancelToken: source.token };
};


axios.interceptors.request.use(requestTimeoutInterceptor);

async function downloadFile(url, filepath, name) {
  if (!fs.existsSync(filepath)) {
    fs.mkdirSync(filepath);
  }
  const mypath = path.resolve(filepath, name);
  if (fs.existsSync(mypath)) {
    // console.log(`${mypath} already exists, passed`)
    return
  }
  console.log(`Request for img from server: ${url}`)
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
    timeout: 10000
  });
  // const response = await axios({
  //   url,
  //   method: "GET",
  //   responseType: "blob",
  //   timeout: 10000
  // });
  // try {
  //   await pipeline(response.data, fs.createWriteStream(mypath));
  //   console.log("donwload pdf pipeline successfull");
  // } catch (error) {
  //   console.error("donwload pdf pipeline failed", error);
  // }
  // console.log(`Request get. Ready to create wstream`)

  // await fs.writeFile(mypath, response.data, { encoding: null })
  const writer = fs.createWriteStream(mypath);
  console.log(`Ready to pipe`)
  response.data.pipe(writer);
  console.log(`pipe finish`)
  return finished(writer)
}

async function downloadIdolIcon(iconUrl, iconId) {
  // let tmp = iconUrl.split('/')
  // let filename = tmp[tmp.length-1].split('?')[0]
  await downloadFile(iconUrl, 'public/assets/idol/icon', `${iconId}.png`)
}

async function downloadIdolCard(cardUrl, cardId) {
  // let tmp = iconUrl.split('/')
  // let filename = tmp[tmp.length-1].split('?')[0]
  await downloadFile(cardUrl, 'public/assets/idol/card', `${cardId}.png`)
}

async function downloadIdolMovie(url, id) {
  // let tmp = iconUrl.split('/')
  // let filename = tmp[tmp.length-1].split('?')[0]
  await downloadFile(url, 'public/assets/idol/movie', `${id}.mp4`)
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

  for (let idol of idol_info) {
    try {
      console.log(idol["id"])
      await downloadIdolCard(idol["card"], idol["id"])
      if (idol["fes_card"]) {
        await downloadIdolCard(idol["fes_card"], `${idol["id"]}_fes`)
      }
      if (idol["movie"]) {
        await downloadIdolMovie(idol["movie"], `${idol["id"]}`)
      }
      if (idol["m_movie"]) {
        await downloadIdolMovie(idol["m_movie"], `${idol["id"]}_fes`)
      }
    } catch (e) {
      console.log("error occurs")
      console.log(e)
    }
  }
  console.log("finished")

  // await downloadIdolIcon('https://shinycolors.enza.fun/assets/8a92c7c2570b1e9d4ea817b72dd7cb13d116224807275478bd324a9a824a6535?v=8')
  // await downloadFile('https://shinycolors.enza.fun/assets/8a92c7c2570b1e9d4ea817b72dd7cb13d116224807275478bd324a9a824a6535', 'public/idol/icon', '8a92c7c2570b1e9d4ea817b72dd7cb13d116224807275478bd324a9a824a6535.png')
}

main().catch(console.log)