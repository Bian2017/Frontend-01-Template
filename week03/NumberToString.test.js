const convertNumberToString = require('./NumberToString.js');

const expect = (testData, result = true) => {
  const coverData = convertNumberToString(testData);

  const compare = coverData === String(testData);
  if (compare !== result) {
    console.log('error: expect', testData, ', but ', coverData);
  } else {
    console.log('success:', `${testData}`);
  }
};

expect(0b1100);
expect(0o1100);
expect(0xffff);
expect(12222);
expect(+10);
expect(-10);
expect(10e2);
expect(10e-4);
expect(22.012);
expect(0.1);
