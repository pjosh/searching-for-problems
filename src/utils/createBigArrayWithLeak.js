window.objects = [];

function createBigArrayWithLeak() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 200000; i++) {
    window.objects.push({
      name: 'Jorge García',
      company: 'Jobandtalent'
    });
  }
}

export default createBigArrayWithLeak;
