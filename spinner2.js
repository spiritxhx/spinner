process.stdout.write('hello from spinner2.js... \rheyyy\n');

// setTimeout(() => {
//   process.stdout.write("\r\n   ");
// }, 900);
const inputArr = ['|', '/', '-', '\\'];
for (let i = 0; i <= 4; i++) {
  setTimeout(() => {
    process.stdout.write(i === 4 ? `\r\n   ` : `\r${inputArr[i]}   `);
  }, 100 + i * 200);
}
