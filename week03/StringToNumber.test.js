const convertStringToNumber = require('./StringToNumber.js');

const expect = (testData, result = true) => {
  // console.log(convertStringToNumber(testData));
  // console.log(Number(testData));
  const converData = convertStringToNumber(testData);
  const compare = `${converData}` === `${Number(testData)}`;
  if (compare !== result) {
    console.log('error: expect', testData, ', but ', `${converData}`);
  } else {
    console.log('success:', testData);
  }
};

expect('0b100');
expect('     0b101    ');
expect('0b102');
expect('0o11');
expect('0o017');
expect('0O018');
expect('0xFFFF');
expect('0xFFFR');
expect('100');
expect('+100');
expect('-100');
expect('12345678');
expect('1e2');
expect('1e12');
expect('100.02');
expect('.2');
expect('2.');

expect('1e+1');
expect('1e-2');
expect('1e-8');
