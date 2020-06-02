let args = process.argv.slice(2);
args = args.map((x) => +x);

args = args.sort((a, b) => a - b);

console.log('start');
for (let i = 0; i < args.length; i++) {
  setTimeout(() => {
    // process.stdout.write('\x07');
    process.stdout.write(`${args[i]} . `);
  }, args[i] * 1000);
}
console.log('end');
