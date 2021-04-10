import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/consoleReport';

const reader = MatchReader.fromCsv('football.csv');

reader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(reader.matches);


const summaryHtml = Summary.winsAnalysisWithHtmlReport('Man United');
summaryHtml.buildAndPrintReport(reader.matches);
