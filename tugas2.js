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

function process(error, data) {
  try {
    console.log(data.map((x) => "bulan " + x));
  } catch (error) {
    console.log(error);
  } finally {
    console.log("proses selesai");
  }
}

getmonth(process);
