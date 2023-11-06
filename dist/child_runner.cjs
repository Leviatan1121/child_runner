const { exec } = require('child_process');

const runFile = (file) => {
    return new Promise((resolve, reject) => {
        exec(`node ${file}`, (error, stdout) => {
            if (error) {
                console.error(`exec error: ${error}`);
                reject(error);
            } else resolve(stdout);
        });
    });
};

const runChild = async (file) => {
    try {
        const output = await runFile(file);
        console.log(output);
    } catch (error) {
        console.error(error);
    }
};

const runChildren = async (files) => {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        try {
            const output = await runFile(file)
            console.log(output);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = { runChild, runChildren }