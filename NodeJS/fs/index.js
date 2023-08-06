const fs = require('fs');

console.log('READ START');
//Asynchronous Way to read files
fs.readFile('input.txt', function(err, data){
    if(err)
    {
        console.log('Error: ', err);
        return err;
    }
    console.log('Data: ', data.toString());
    console.log('READ END');
    return data;
})
console.log('OTHER STUFF');
// 
// 
//synchronous way to read file
console.log('READ START');
var data = fs.readFileSync('input.txt');
console.log('Data: ', data.toString());
console.log('READ END');
console.log('OTHER STUFF');
// 
// 
//Read - Open + read
// 
const buf = new Buffer(1024);
// 
fs.open('input.txt', 'r+', function(err, fd){
    if(err)
    {
        console.log('Error in opening file : ', err);
    }
    console.log('File opened successfully!');
// 
    fs.read(fd, buf, 0, buf.length, 0, function(er, bytes){
        if(er)
        {
            console.log('Error in reading file');
        }
        console.log('Data: ', bytes);
        console.log('Data: ', buf.slice(0, bytes).toString());
        fs.close(fd, function(err){
            if(err)
            {
                console.log('Error in closing');
            }
            else
            {
                console.log('Successfully closed file');
            }
        })
    });
})
// 
//Overwrite - writing to file
fs.writeFile('input.txt', 'PWSKILLS', function(err){
    if(err)
    {
        console.log('Error: ', err);
    }
})
// 
//Append to file
fs.appendFile('input.txt', 'Hope you are doing good :)' , function(err){
    if(err)
    {
        console.log("Error in appending");
    }
    else
    {
        console.log("Appended Successfully");
    }
})
// 
//Deleting File

fs.unlink('input.txt', function(err){
    if(err)
    {
        console.log('Error in deleting file');
    }
    else{
        console.log('File deleted successfully');
    }
})