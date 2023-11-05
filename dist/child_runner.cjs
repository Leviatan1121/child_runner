const { exec } = require('child_process');

const runChild = async (file) => {
    const runFile = (file) => {
        return new Promise((resolve, reject) => {
            exec(`node ${file}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    reject(error);
                } else resolve(stdout);
            });
        });
    };

    try {
        const output = await runFile(file);
        console.log(output);
    } catch (error) {
        console.error(error);
    }
};

async function runChildren(files) {
    const runFile = (file) => {
        return new Promise((resolve, reject) => {
            exec(`node ${file}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    reject(error);
                } else resolve(stdout);
            });
        });
    };
    
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