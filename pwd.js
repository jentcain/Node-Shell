const printWorkingDirectory = () => {
  process.stdout.write(`Current directory: ${process.cwd()}`);
  // process.stdout.write(__dirname);
  process.stdout.write("\nprompt > ");
};

module.exports = printWorkingDirectory;
