function printDiamond(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = n; j > i; j--) {
      row += ' ';
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        row += '*';
      } else {
        row += ' ';
      }
    }
    console.log(row);
  }
  for (let i = 1; i <= n - 1; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += ' ';
    }
    for (let k = (n - i) * 2 - 1; k >= 1; k--) {
      if (k === 1 || k === (n - i) * 2 - 1) {
        row += '*';
      } else {
        row += ' ';
      }
    }
    console.log(row);
  }
}

// 调用函数并传入菱形的大小
printDiamond(5);