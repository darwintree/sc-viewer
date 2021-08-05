import axios from 'axios'

async function get(url) {
  let res = await axios.get(url)
  console.log(res.data)
  return res.data
}

export {
  get
}