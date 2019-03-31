const fs = require('fs');

// Check if File Exists
fs.exists('test.txt', function (exists) {
  console.log(exists ? "File exists." : "File does not exist.");
});

// Reading File Contents
fs.readFile('test.txt', 'utf8', function(err, fileContents) {
    if (err) throw err;
    console.log(fileContents)
});

// Writing and Appending Files
fs.writeFile('test.txt', 'Hello, ', function(err) {
    if (err) {
        throw err;
    }
});

fs.appendFile('test.txt', 'World\n');

// Change File Permissions and Ownership
// Change permission to 777
fs.chmodSync('test.txt', '777');

// Change ownership to root:root.
// It wants user and group Id number not username
// To actually run this you would need root privileges
let userId = 0;
let groupId = 0;
fs.chownSync('test.txt', userId, groupId);

// Renaming/Moving Files
fs.rename('test.txt', 'test.txt.bak', function (err) {
    if (err) {
        throw err;
    }  console.log('Rename complete.');
});

fs.rename('/tmp/test.txt', '/home/dtron/testCopy.txt', function (err) {
    if (err) {
        throw err;
    }  console.log('Move complete.');
});

// Deleting Files
fs.unlink('test.txt', function (err) {
    if (err) {
        throw err;
    }  console.log('Deletion sucessful.');
});

//File Statistics
// Statistics include file size, inode, uid, gid, timestamps
fs.stat('test.txt', function (err, stats) {
    if (err) {
        throw err;
    }  console.log('stats: ' + JSON.stringify(stats));
});
