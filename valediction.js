const fs = require('fs');

exports.valedictionEnglish = function () {
    fs.appendFile('basic_node_answers.txt', 'Goodbye', (err) => {
        if (err) throw err;
    })
    console.log('Goodbye was added to file');
}

exports.valedictionJapanese = function () {
    fs.appendFile('basic_node_answers.txt', 'Sayonara', (err) => {
        if (err) throw err;
    })
    console.log('Sayonara was added to file');
}

exports.valedictionSpanish = function () {
    console.log('Adios');
}

exports.valedictionIcelandic = function () {
    console.log('Bless');
}