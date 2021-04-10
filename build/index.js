"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var consoleReport_1 = require("./reportTargets/consoleReport");
var reader = MatchReader_1.MatchReader.fromCsv('football.csv');
reader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new consoleReport_1.ConsoleReport());
summary.buildAndPrintReport(reader.matches);
var summaryHtml = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summaryHtml.buildAndPrintReport(reader.matches);