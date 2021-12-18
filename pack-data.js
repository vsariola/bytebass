// the data is in octal, i.e. 3 bits per symbol
// it is packed into a string with 6 bits, offset by 32, so the
// ascii codes are in the range 32-95

// you can replace the m function with the following two lines
// for easier development
data = [
    021043101, // pattern 1
    021143101, // pattern 2
    034033201, // pattern 3
    011010101, // pattern 4
    002121211, // orderlist chn 1
    003333000, // orderlist chn 2
    021212120, // orderlist chn 3
    044440440, // orderlist chn 4
    07500]; // chord progression
m = (h, j) => data[h] >> (j | 0) * 3 & 7;
str = "";
for (h = 0; h < 9; h++)
    for (j = 0; j < 8; j += 2)
        str += String.fromCharCode((m(h, j + 1) << 3) + m(h, j) + 32)
console.log("'" + str + "'"); // the empty spaces can be dropped
