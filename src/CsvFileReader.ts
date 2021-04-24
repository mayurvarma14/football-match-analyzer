import fs from 'fs';
import { DataReader } from './MatchReader';

export default class CsvFileReader implements DataReader {
    data: string[][] = [];

    constructor(public filename: string) { }

    read(): void {
        this.data = fs.readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map((row: string): string[] => row.split(','));
    }

}