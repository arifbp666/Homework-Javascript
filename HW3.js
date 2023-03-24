// Array kosong untuk diisikan angka acak
let angkaAcak = [];

// Buat 100 angka acak (1-50)
for (let i = 0; i < 100; i++) {
  angkaAcak.push(Math.floor(Math.random() * 50) + 1);
}
console.log(angkaAcak);

// Array untuk angka genap dan angka ganjil
let genap = [];
let ganjil = [];

// Dibagi menjadi 2 array terpisah
for (let i = 0; i < angkaAcak.length; i++) {
  if (angkaAcak[i] % 2 == 0) {
    genap.push(angkaAcak[i]);
  } else {
    ganjil.push(angkaAcak[i]);
  }
}
console.log(genap);
console.log(ganjil);

// Untuk mencari nilai minimal dan maksimal
let minGenap = Math.min(...genap);
let maxGenap = Math.max(...genap);
let minGanjil = Math.min(...ganjil);
let maxGanjil = Math.max(...ganjil);

console.log("Minimum angka genap", minGenap);
console.log("Maksimum angka genap", maxGenap);
console.log("Minimum angka ganjil", minGanjil);
console.log("Maksimum angka ganjil", maxGanjil);

// Menghitung jumlah genap
let totalGenap = 0;
for (let i = 0; i < genap.length; i++) {
  totalGenap += genap[i];
}
console.log("Jumlah genap", totalGenap);

// Menghitung jumlah ganjil
let totalGanjil = 0;
for (let i = 0; i < ganjil.length; i++) {
  totalGanjil += ganjil[i];
}
console.log("Jumlah ganjil", totalGanjil);

// Total Genap dan Ganjil
total = totalGenap + totalGanjil;
console.log("Total keduanya", total);

// Menghitung rata - rata
let rataGenap = totalGenap / genap.length;
let rataGanjil = totalGanjil / ganjil.length;
let rata_rata = total / (genap.length + ganjil.length);

console.log("Rata-rata array genap", rataGenap);
console.log("Rata-rata array ganjil", rataGanjil);
console.log("Rata-rata kedua array", rata_rata);

// Mencari perbandingan genap dan ganjil
if (minGenap > minGanjil) {
  console.log(
    "Nilai minimum array genap lebih besar daripada nilai minimum array ganjil, yaitu",
    minGenap + " > " + minGanjil
  );
} else {
  console.log(
    "Nilai minimum array genap lebih kecil daripada nilai minimum array ganjil, yaitu",
    minGenap + " < " + minGanjil
  );
}

if (maxGenap > maxGanjil) {
  console.log(
    "Nilai maksimal array genap lebih besar daripada nilai maksimal array ganjil, yaitu",
    maxGenap + " > " + maxGanjil
  );
} else {
  console.log(
    "Nilai maksimal array genap lebih kecil daripada nilai maksimal array ganjil, yaitu",
    maxGenap + " < " + maxGanjil
  );
}

if (totalGenap === totalGanjil) {
  console.log(
    "Nilai total array genap dan ganjil sama, yaitu",
    totalGenap + " = " + totalGanjil
  );
} else {
  console.log(
    "Total nilai array genap dan ganjil beda, yaitu",
    totalGenap + " != " + totalGanjil
  );
}

if (rataGanjil > rataGenap) {
  console.log(
    "Rata-rata nilai array ganjil lebih besar daripada rata-rata nilai array genap, yaitu",
    rataGanjil + " > " + rataGenap
  );
} else if (rataGenap > rataGanjil) {
  console.log(
    "Rata-rata nilai array genap lebih besar daripada rata-rata nilai array ganjil, yaitu",
    rataGenap + " > " + rataGanjil
  );
} else {
  console.log(
    "Rata-rata nilai array ganjil sama dengan rata-rata nilai array genap, yaitu",
    rataGanjil + " = " + rataGenap
  );
}
