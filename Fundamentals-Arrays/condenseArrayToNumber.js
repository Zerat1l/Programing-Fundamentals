function condenseArrayToNumber(nums) {
    let con = [];
  
    let count = nums.length;
    isCondensed = false;
  
    if (count === 1) {
      console.log(`${nums[0]}`);
    } else {
      while (count > 1) {
        for (let i = 0; i < nums.length - 1; i++) {
          con[i] = nums[i] + nums[i + 1];
        }
        nums = con;
        con = [];
        count--;
      }
      isCondensed = true;
    }
    if (isCondensed) {
      console.log(Number(nums));
    }
  }
  
  condenseArrayToNumber([5]);
  
  //arr.length - kudeto .length e property