function cutAndReverse(input) {
    let firstHalf = '';
    let secHalf = '';

    for(let i = 0; i < input.length / 2; i++) {
        firstHalf += input[i]
    }
    for(let i = input.length / 2; i < input.length; i++) {
        secHalf += input[i];
    }

    console.log(firstHalf.split('').reverse().join(''));
    console.log(secHalf.split('').reverse().join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');