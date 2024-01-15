const os = require('os');

// Get platform information
const platform = os.platform();
console.log('Platform:', platform);

// Get CPU architecture
const architecture = os.arch();
console.log('Architecture:', architecture);

// Get information about CPU cores
const cpus = os.cpus();
console.log('CPU Cores:', cpus);

// Get total system memory
const totalMemory = os.totalmem();
console.log('Total Memory:', totalMemory);

// Get free system memory
const freeMemory = os.freemem();
console.log('Free Memory:', freeMemory);

// Get hostname of the operating system
const hostname = os.hostname();
console.log('Hostname:', hostname);

// Get network interfaces information
const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces);

// Get information about the current user
const userInfo = os.userInfo();
console.log('User Info:', userInfo);

// Get operating system name
const osType = os.type();
console.log('Operating System:', osType);

// Get operating system release version
const osRelease = os.release();
console.log('Release Version:', osRelease);

// Get system uptime
const uptime = os.uptime();
console.log('System Uptime:', uptime);

// is 19995.093 uptime in seconds or miliseconds? good?
