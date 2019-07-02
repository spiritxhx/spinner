//pair code with Robin

const spinnerArray = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
const spinner = function (time, arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      process.stdout.write('\r' + arr[i] + ' ');
    }, 100 + (i * time));
  }
};
spinner(100, spinnerArray);