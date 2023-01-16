//Fastq files mapping starts here
var fastqhtml = ["01.FastqQualityCheck/1729D-17-01_S1_L001_R1_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-01_S1_L001_R2_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-02_S2_L001_R1_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-02_S2_L001_R2_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-03_S3_L001_R1_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-03_S3_L001_R2_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-04_S4_L001_R1_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-04_S4_L001_R2_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-05_S5_L001_R1_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-05_S5_L001_R2_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-06_S6_L001_R1_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-06_S6_L001_R2_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-07_S7_L001_R1_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-07_S7_L001_R2_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-08_S8_L001_R1_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-08_S8_L001_R2_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-09_S9_L001_R1_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-09_S9_L001_R2_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-10_S10_L001_R1_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-10_S10_L001_R2_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-11_S11_L001_R1_001_fastqc.html",
"01.FastqQualityCheck/1729D-17-11_S11_L001_R2_001_fastqc.html",
"01.FastqQualityCheck/multiqc_report.html"];

/*fs.readFile("./fastq.txt", function(text){
    var textByLine = text.split("\n")
	document.write(textByLine);
});*/

//Sample1
function S1R1() {
	document.getElementById("S1R1").href = fastqhtml[0];
	refresh();
	return false;
}

function S1R2() {
    document.getElementById("S1R2").href = fastqhtml[1];
	refresh();
	return false;
}
//Sample2
function S2R1() {
    document.getElementById("S2R1").href = fastqhtml[2];
	refresh();
	return false;
}

function S2R2() {
    document.getElementById("S2R2").href = fastqhtml[3];
	refresh();
	return false;
}

//Sample2
function S3R1() {
    document.getElementById("S3R1").href = fastqhtml[4];
	refresh();
	return false;
}
function S3R2() {
    document.getElementById("S3R2").href = fastqhtml[5];
	refresh();
	return false;
}

//Sample4
function S4R1() {
    document.getElementById("S4R1").href = fastqhtml[6];
	refresh();
	return false;
}

function S4R2() {
    document.getElementById("S4R2").href = fastqhtml[7];
	refresh();
	return false;
}


//Sample 5
function S5R1() {
    document.getElementById("S5R1").href = fastqhtml[8];
	refresh();
	return false;
}

function S5R2() {
    document.getElementById("S5R2").href = fastqhtml[9];
	refresh();
	return false;
}


//Sample 6
function S6R1() {
    document.getElementById("S6R1").href = fastqhtml[10];
	refresh();
	return false;
}

function S6R2() {
    document.getElementById("S6R2").href = fastqhtml[11];
	refresh();
	return false;
}


//Sample 7
function S7R1() {
    document.getElementById("S7R1").href = fastqhtml[12];
	refresh();
	return false;
}

function S7R2() {
    document.getElementById("S7R2").href = fastqhtml[13];
	refresh();
	return false;
}

//Sample 8 
function S8R1() {
    document.getElementById("S8R1").href = fastqhtml[14];
	refresh();
	return false;
}

function S8R2() {
    document.getElementById("S8R2").href = fastqhtml[15];
	refresh();
	return false;
}

//Sample 9

function S9R1() {
    document.getElementById("S9R1").href = fastqhtml[16];
	refresh();
	return false;
}

function S9R2() {
    document.getElementById("S9R2").href = fastqhtml[17];
	refresh();
	return false;
}

//Sample 10
function S10R1() {
    document.getElementById("S10R1").href = fastqhtml[18];
	refresh();
	return false;
}

function S10R2() {
    document.getElementById("S10R2").href = fastqhtml[19];
	refresh();
	return false;
}


//Sample 11

function S11R1() {
    document.getElementById("S11R1").href = fastqhtml[20];
	refresh();
	return false;
}

function S11R2() {
    document.getElementById("S11R2").href = fastqhtml[21];
	refresh();
	return false;
}

//MultiQC

function multiQC() {
    window.open(fastqhtml[22]);
	refresh();
	return false;
}