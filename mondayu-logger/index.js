import { Console } from 'console';
import { createWriteStream } from 'fs';

// step 1: use this example: https://melvingeorge.me/blog/save-logs-to-files-nodejs
export const mondayuLogger = new Console({
    stdout: createWriteStream('log.txt', { flags: 'a' }),
});

// step 2: check your logger works
// mondayuLogger.log('hello mondayU! it works!');

// step 3: rename the package and publish 
