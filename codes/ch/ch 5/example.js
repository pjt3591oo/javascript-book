const fs = require('fs')
const newMetaPromise = async (v) => {
  // 비동기 처리 후 콜백에서 return을 하면 됨
  fs.readFile('test.txt', function(err, data) {
      return data.toString()
  })
};

async function another() {
  try {
    let result = await newMetaPromise(12);
    let result1 = await newMetaPromise(11);
    let result2 = await newMetaPromise(13);
    console.log(result);
    console.log(result1);
    console.log(result2);
  } catch (err) {
    console.error(err);
  }
}

another()
