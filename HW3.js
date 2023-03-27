// Array kosong untuk diisikan angka acak
let angkaAcak = [];

// Buat 100 angka acak (1-50)
for (let i = 0; i < 100; i++) {
  angkaAcak.push(Math.floor(Math.random() * 50) + 1);
}
console.log("angka acak:", angkaAcak);

// Array untuk angka genap dan angka ganjil
let genap = [];
let ganjil = [];

// Dibagi menjadi 2 array terpisah berdasarkan index
for (let i = 0; i < angkaAcak.length; i++) {
  if (i % 2 == 0) {
    genap.push(angkaAcak[i]);
  } else {
    ganjil.push(angkaAcak[i]);
  }
}
console.log("angka genap:", genap);
console.log("angka ganjil:", ganjil);

// Untuk mencari nilai minimal dan maksimal dengan function
function findMax(angkaAcak) {
  let max = angkaAcak[0]
  for (let i = 0; i < angkaAcak.length; i++) {
    if (max < angkaAcak[i]) {
      max = angkaAcak[i]
    }
  }
  return max
}

function findMin(angkaAcak) {
  let min = angkaAcak[0]
  for (let i = 0; i < angkaAcak.length; i++) {
    if (min > angkaAcak[i]) {
      min = angkaAcak[i]
    }
  }
  return min
}

maxGenap = findMax(genap)
minGenap = findMin(genap)
console.log("Max genap", maxGenap)
console.log("Min genap:", minGenap)

maxGanjil = findMax(ganjil)
minGanjil = findMin(ganjil)
console.log("Max ganjil:", maxGanjil)
console.log("Min ganjil:", minGanjil)


// Menghitung total dengan function
function total(angkaAcak) {
  let total = 0
  for (let i = 0; i < angkaAcak.length; i++) {
    total += angkaAcak[i]
  }
  return total
}

totalGenap = total(genap)
console.log("Total genap:", totalGenap)

totalGanjil = total(ganjil)
console.log("Total ganjil:", totalGanjil)


// Menghitung rata - rata
let rataGenap = totalGenap / genap.length;
let rataGanjil = totalGanjil / ganjil.length;
let totalGenapGanjil = totalGenap + totalGanjil
let rata_rata = totalGenapGanjil / (genap.length + ganjil.length);

console.log("Rata-rata array genap", rataGenap);
console.log("Rata-rata array ganjil", rataGanjil);
console.log("Rata-rata kedua array", rata_rata);


// Mencari perbandingan min dan max
if (maxGanjil == maxGenap) {
  console.log("Nilai max sama")
} else if (maxGanjil > maxGenap) {
  console.log("Max ganjil lebih besar")
} else if (maxGanjil < maxGenap) {
  console.log("Max genap lebih besar")
}

if (minGanjil == minGenap) {
  console.log("Nilai min sama")
} else if (minGanjil > minGenap) {
  console.log("Min ganjil lebih besar")
} else if (minGanjil < minGenap) {
  console.log("Min genap lebih besar")
}


// Perbandingan total
if (totalGanjil == totalGenap) {
  console.log("Nilai total sama")
} else if (totalGanjil > totalGenap) {
  console.log("Total ganjil lebih besar")
} else if (totalGanjil < totalGenap) {
  console.log("Total genap lebih besar")
}


// Perbandingan rata - rata
if (rataGanjil == rataGenap) {
  console.log("Nilai rata-rata sama")
} else if (rataGanjil > rataGenap) {
  console.log("Rata-rata ganjil lebih besar")
} else if (rataGanjil < rataGenap) {
  console.log("Rata-rata genap lebih besar")
}