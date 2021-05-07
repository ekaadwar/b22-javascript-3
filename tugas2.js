const getmonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry data not found"), []);
    }
  }, 4000);
};

function tampilData(error, data) {
  return new Promise((resolve, reject) => {
    if (error == null) {
      const result = data.map((x) => x);
      resolve(result);
    } else {
      reject(error);
    }
  });
}

getmonth(tampilData)
  .then((resolveValue) => {
    console.log(resolveValue);
  })
  .catch((err) => {
    console.log(err);
  });
