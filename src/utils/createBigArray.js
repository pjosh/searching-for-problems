function createBigArray() {
  return new Array(200000000).map(() => ({
    name: 'Jorge García',
    company: 'Jobandtalent'
  }));
}

export default createBigArray;
