const fs = require('fs');
const clArgs = require('command-line-args');
const util = require('util');

const { exit, stdin } = require('process');
const versionJSON = (filename = 'version.json') => fs.readFileSync(filename);
const data = JSON.parse(versionJSON());

const change = () => {
  stdin.resume();
  stdin.setEncoding('utf8');

  const definitions = [
    { name: 'current', type: String },
    { name: 'previous', type: String },
    { name: 'next', type: String }
  ];
  const options = clArgs(definitions);

  const versionWrite = () => {
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

    const checkInput = versionInput.split('.');

    const inputSize = versionInput.length;

    defaultUpdate = (arr, num = 0, updatedStr) => {
      arr = inputSize ? versionInput.split('.') : data.current.split('.');
      num -= ~arr[2]; // Don't judge me. I'm experimenting.
      arr.pop();
      updatedStr = `${arr.join('.')}.${num}`;
      return updatedStr;
    };

    if (inputSize && checkInput.length !== 3) {
      console.log('invalid version number');
    } else {
      data.previous = data.current;
      options.current = inputSize ? versionInput : defaultUpdate();
      data.current = options.current;
      options.next = defaultUpdate();
      data.next = options.next;

      versionWrite(data);
      updateManifest('chrome');
      updateManifest('firefox');
      updateManifest('edge');
      fs.writeFileSync('.ver', data.current);

      console.log(
        `Version number changed from \n${data.previous} to \n${data.current}`
      );
    }

    done();
  });

  const done = () => {
    console.log('Goodbye');
    exit();
  };
};

const currentVersion = () => data.current;
const previousVersion = () => data.previous;

const updateManifest = (browser, manifestData, updated) => {
  const manifest = `oau_${browser}/src/manifest.json`;
  const getManifest = fs.readFileSync(manifest);
  manifestData = JSON.parse(getManifest);
  updated = JSON.stringify(manifestData).replace(data.previous, data.current);
  fs.writeFileSync(manifest, updated);
};

const versionUpdated = (dotVer = fs.readFileSync('.ver')) =>
  dotVer.toString() === data.current ? 0 : 1;

module.exports = {
  change,
  currentVersion,
  previousVersion,
  updateManifest,
  versionUpdated
};
