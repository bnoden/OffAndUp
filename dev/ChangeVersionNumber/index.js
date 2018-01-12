const fs = require('fs');
const clArgs = require('command-line-args');
const { exit, stdin } = require('process');

const ChangeVersionNumber = () => {
  stdin.resume();
  stdin.setEncoding('utf8');
  const util = require('util');

  const definitions = [
    { name: 'current', type: String },
    { name: 'previous', type: String },
    { name: 'next', type: String }
  ];
  const options = clArgs(definitions);

  const getDB = fs.readFileSync('version.json');
  const data = JSON.parse(getDB);

  const dbWrite = () => {
    fs.writeFileSync('version.json', JSON.stringify(data));
  };

  console.log('Previous version number:', data.previous);
  console.log('Current version number:', data.current);
  console.log(
    `Enter new version number or press ENTER for default: (${data.next})`
  );

  stdin.on('data', text => {
    const versionInput = util
      .inspect(text)
      .split('\\')[0]
      .replace(/(['])/g, '');
    const inputSize = versionInput.length;
    defaultUpdate = (arr, num = 0, updatedStr) => {
      arr = inputSize ? versionInput.split('.') : data.current.split('.');
      num -= ~arr[2]; // Don't you judge me! I'm experimenting.
      arr.pop();
      updatedStr = `${arr.join('.')}.${num}`;
      return updatedStr;
    };

    data.previous = data.current;
    options.current = inputSize ? versionInput : defaultUpdate();
    data.current = options.current;
    options.next = defaultUpdate();
    data.next = options.next;

    dbWrite(data);

    console.log(
      `Version number changed from \n${data.previous} to \n${data.current}`
    );
    done();
  });

  const done = () => {
    console.log('Goodbye');
    exit();
  };
};

module.exports = { ChangeVersionNumber };
