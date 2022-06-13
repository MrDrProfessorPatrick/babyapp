const axios = require('axios');

export async function setSectionNameList(sectionName) {
  console.log({ categoryReq: sectionName }, 'goodSection');
  let bodyRequest = { categoryReq: sectionName };
  return await axios.post('http://localhost:5000/addgoodsection', bodyRequest);
}
