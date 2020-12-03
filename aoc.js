let day = parseInt(process.argv[process.argv.length - 1]);

try {
    require(`./${day}/solution`);
} catch (_e) {
    console.error("Only the below days are available:")
    const fs = require('fs');
    fs.readdir(__dirname, (err, files) => {
        files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
        files.forEach(file => {
            let fullPath = __dirname + '/' + file;
            var stat = fs.statSync(fullPath);
            if (stat && stat.isDirectory()) {
                console.log(file);
            }
        })
    });
}