let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot != 5) {
    console.log("Angkot No. " + noAngkot + " sedang beroperasi.");
  } else if (noAngkot == 5 || noAngkot == 8 || noAngkot == 10) {
    console.log("Angkot No. " + noAngkot + " sedang lembur.");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang perbaikan.");
  }
}
