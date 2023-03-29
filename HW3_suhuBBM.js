//Suhu air

const suhu = -99

const air = suhu <= 0 && suhu >= -100 ? "Membeku" 
: suhu >= 1 && suhu <= 100 ? "Cair" 
: suhu >= 101 && suhu <= 500 ? "Menguap" 
: "tidak terdefinisi"

console.log(air)


// BBM

let plat = "kuning"
let jenis_kendaraan = "mobil"
CC = 1500

let bbm = plat == "kuning" || jenis_kendaraan == "motor" ? "BBM Subsidi" 
: CC < 1500 ? "Pertamax"
: "Pertamax Turbo" 

console.log(bbm)