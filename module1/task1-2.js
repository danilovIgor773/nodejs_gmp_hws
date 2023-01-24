import fs from 'fs';
import csv from 'csvtojson';

const handleError = (error) => {
    console.error('[CATCHED ERROR]', error);
}
const rStream = fs.createReadStream('./module1/csv/nodejs-hw1-ex1.csv', 'utf-8');
const wStream = fs.createWriteStream('./output.txt', {encoding: 'utf-8'});
rStream.on('error', handleError);
wStream.on('error', handleError);
rStream.pipe(csv()).pipe(wStream).on('finish', () => {
    console.log('[FINISHED EXPORTING CSV TO JSON...]');
});
