var nama = "Ahmad";
var gajiktr = 4500000;
var pajak = gajiktr * 2.5 / 100;
var infak = 50000;
var uangt = 10000;
var bpjs = 250000;
var krja = 24;

var tunjanganTransport = uangt * 24;
var totalPot = pajak + infak + bpjs;
var gajihbrsh = (gajiktr - totalPot) + tunjanganTransport;


console.log("Gaji Kotor :"+gajiktr);
console.log("==========================")
console.log("Potongan BPJS :"+ bpjs);
console.log("Potongan Pajak 2,5 % :"+ pajak);
console.log("Potongan Infak :" + infak);
console.log("==========================")
console.log("Total Potongan :" + totalPot);
console.log("==========================");
console.log("Tunjangan Transport :"+ uangt);
console.log("Total Kerja : 24 Hari" );
console.log("==========================");
console.log("Total Tunjangan :" + tunjanganTransport);
console.log("==========================");
console.log("Perhitungan Gaji :");
console.log("(Gaji Kotor - Potongan) + Tunjangan" )
console.log("(" + gajiktr + "-" + totalPot + ")" + "+" + tunjanganTransport ); 
console.log("==========================");
console.log("Gaji Bersih : " + gajihbrsh);


