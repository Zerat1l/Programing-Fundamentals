function matchFullName(input) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let text = input;

    let matches = text.match(pattern);
    
    console.log(matches.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov")