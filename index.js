const cariMobil = (data, cari) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let cek = data.filter((item) => {
        return item.type === cari;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Mobil tidak tersedia"));
      }
    }, 2000);
  });
};

async function process(data, cari) {
  try {
    const result = await cariMobil(data, cari);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

const lamborghini = [
  {
    type: "Lamborghini Gallardo",
    engine: "V10 5200cc",
    power: "652hp",
    harga: "Rp 3,7 Miliar",
  },
  {
    type: "Lamborghini Huracan Performante",
    engine: "V10 5204cc",
    power: "640hp",
    harga: "314,654 USD",
  },
  {
    type: "Lamborghini Huracan Performate Spyder",
    engine: "V10 5200cc",
    power: "640hp",
    harga: "308,859 USD",
  },
  {
    type: "Lamborghini Aventador S Coupe",
    engine: "V12 6498cc",
    power: "740hp",
    harga: "417,650 USD",
  },
  {
    type: "Lamborghini Centenario",
    engine: "V12 6500cc",
    power: "770hp",
    harga: "Rp 30 Miliar",
  },
  {
    type: "Lamborghini Veneno Roadster",
    engine: "V12 6498cc",
    power: "770hp",
    harga: "Rp 65,2 Miliar",
  },
];

// const lamborghini = ["Lamborghini Gallardo", "Lamborghini Huracan Performante", "Lamborghini Huracan Performate Spyder", "Lamborghini Aventador S Coupe", "Lamborghini Centenario", "Lamborghini Veneno Roadster"];

process(lamborghini, "Lamborghini Veneno Roadster");
