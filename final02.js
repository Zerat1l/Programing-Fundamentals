function registration(input) {

    // let pattern = /([U$]+)(?<name>[A-Z][a-z]{2,})([U$]+)([P@$]{3})(?<pass>[A-Za-z]{5,}\d+)([P@$]{3})/g
    let pattern = /([U$]{2})(?<name>[A-Z]{1}[a-z]{2,})\1([P@$]{3})(?<pass>[A-Za-z]{5,}\d+)\3/g
    let sucsessReg = 0;
    let inputsCount = Number(input.shift());

    for(let i = 0; i < inputsCount; i++) {
        let line = input[i];
        let matches = line.matchAll(pattern);

        let match = line.match(pattern);

        if(match === null) {
            console.log('Invalid username or password');
        } else {
            for (let match of matches) {
                sucsessReg++;
                console.log('Registration was successful');
                console.log(`Username: ${match.groups.name}, Password: ${match.groups.pass}`);
               
                
            }
        }
    }
    console.log(`Successful registrations: ${sucsessReg}`);
}

registration(["3",
"U$MichaelU$P@$asdqwe123P@$",
"U$NameU$P@$PasswordP@$",
"U$UserU$P@$ad2P@$"])