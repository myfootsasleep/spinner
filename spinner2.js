const arr = ['|','/','-','\\','|','/','-','\\','|'];
const done = function() {
  process.stdout.write('\n');
}
for (let i = 0; i < arr.length; i++) {
  setTimeout(()=> {
    process.stdout.write(`\r ${arr[i]}`);
  }, 200 + (i * 200));
}