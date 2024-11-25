const axios = require('axios');
const cheerio = require('cheerio');
async function igdl(url,baseUrl) {
try {
let respon = await axios.post('https://social.ioconvert.com/instagram',{
      'url': decodeURIComponent(url),
      'obj':'reels',
      'language':'id'
    }, {
      'headers': {
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://igdownloader.net',
  'Referer': 'https://igdownloader.net/',
  'Sec-Ch-Ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
  'Sec-Ch-Ua-Mobile': '?1',
  'Sec-Ch-Ua-Platform': '"Android"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'cross-site',
  'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36'
}
})

if(respon.status == 200){
let file = `https://social.ioconvert.com/download?obj=reels&key=${respon.data.data.key}&type=video&id=item0&download=&file_prefix=igDownloader_`
return {status:"sukses",author:'iwan',result:{link:file,linkUnblock:`${baseUrl}/download/id?data=${encodeURIComponent(file)}`}}
}else{
return {status:'error',author:'iwan',message:'Konten tidak ditemukan'}
} 
}catch(e){
return {status:'error',author:'iwan',message:e.toString()}
}
}

module.exports = igdl;