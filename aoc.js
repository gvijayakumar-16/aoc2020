let day = parseInt(process.argv[process.argv.length - 1]);

let availableDirs = [];

try {
    if (!isNaN(day)) {
        require(`./${day}/solution`);
    } else {
        const fs = require('fs');
        fs.readdir(__dirname, (_err, files) => {
            files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
            files.forEach(file => {
                let fullPath = __dirname + '/' + file;
                let stat = fs.statSync(fullPath);
                if (stat && stat.isDirectory()) {
                    availableDirs.push(parseInt(file));
                }
            });
            availableDirs.forEach(dir => {
                console.log(`Day ${dir}:`)
                require(`./${dir}/solution`)
            })
        });
    }
} catch (_e) {
    console.error("Only the below days are available:");
    availableDirs.forEach(console.log)
}