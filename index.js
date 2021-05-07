
function introduction (name){
    return `Hi, my name is ${name}.`
}

// introduction(Josh)
function introductionWithLanguage (name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional (name="Gracie", language='JavaScript'){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguageOptional("Gracie", "Python"))
// introductionWithLanguageOptional("Gracie", "JavaScript")

