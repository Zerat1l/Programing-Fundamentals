function solve(array) {

    let target = 45;
    let power = 1;
    array = array.map(Number);
    console.log(array);
    let index = 0;
    for (const el of array) {
        index++;
        if(el === target) {
            let startDel = (index - 1) - power;
            let endDel = (index) + power
            array.splice(startDel, endDel)
            
        }
        
    }

    console.log(array);
   
}

// solve(['1','2','3','45','33','18','1'])


function test(json) {

  let obj = JSON.parse(json);
  obj.eyes = 'Brown'
  let isTrue = obj.hasOwnProperty('age');
  if(isTrue) {
    obj.age = 33;
  }
  console.log(obj);
  let toJson = JSON.stringify(obj);
  console.log(toJson);
}

// test('{"name":"John", "age":30, "car":null}');

function asd() {

  let arr = ['Joro', 'Lora', 'Mariq'];
  let copyArr = arr.slice();
  for (const el of copyArr) {
    if(el === 'Joro') {
      let cutted = copyArr.splice(el,1)
      console.log(`Cutted element is - ${cutted}`);
    }
    
  }
  let afterIndex = copyArr.indexOf('Mariq');
  console.log(afterIndex);
  copyArr.splice(afterIndex + 1,0,'Dimitar');
 
  
  console.log(copyArr);
}
// asd()
