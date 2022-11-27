

function extractFile(input) {

    let path = input.split('\\');
    let file = path.pop();

    let lastDot = file.lastIndexOf('.');
    let fileName = file.substring(0,lastDot);
    let fileExtention = file.substring(lastDot+1)

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtention}`);


}

extractFile('C:\\Internal\\training-internal\\Template.pptx')