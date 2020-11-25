            var fs = require('fs');
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            
            readline.question('Input the Name of the module', name => {
            readline.question('Name of the second module if none type null', name2 =>{
                console.log(`Installing ${name} And ${name2}`);
                readline.close();
                var logger = fs.createWriteStream('download.bat', {
                    flags: 'a' // 'a' means appending (old data will be preserved)
                  })
                  logger.write(`npm i ${name}
npm i ${name2}
echo downloading Modules Always delete the download.bat after running it!`)
            console.log('Run Download.bat for it to install everything that you need!');

            })});
