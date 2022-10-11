function loadingBar(percent) {
    let percents = "%".repeat(percent / 10);
    let dots = ".".repeat(10 - percent / 10);
  
    if (percent < 100) {
      console.log(`${percent}% [${percents}${dots}]`);
      console.log(`Still loading...`);
    } else {
      console.log(`100% Complete!`);
    }
  }
  
  loadingBar(100)