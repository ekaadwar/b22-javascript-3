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
  new Promise((resolve, reject) => {
    if (error == null) {
      resolve(data);
    } else {
      reject(error);
    }
  });
}

async function process() {
  try {
    const result = await getmonth(tampilData);
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("proses berakhir");
  }
}

process();
