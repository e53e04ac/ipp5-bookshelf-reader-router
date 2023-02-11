# ipp5-bookshelf-reader-router

~~~~~ sh
npm install e53e04ac/ipp5-bookshelf-reader-router
~~~~~

~~~~~ mjs
import { Ipp5BookshelfReaderRouter } from 'e53e04ac/ipp5-bookshelf-reader-router';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/date-time"]);
    B_1(["e53e04ac/event-emitter"]);
    B_2(["express"]);
    B_3(["e53e04ac/hold"]);
    B_4(["joi"]);
  end;
  subgraph "devDependencies";
    B_5(["@types/express"]);
    B_6(["@types/node"]);
    B_7(["e53e04ac/ipp5-types"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  A ----> B_7;
  click B_0 "https://github.com/e53e04ac/date-time/tree/4fd63ae52ea7346e85ed0a355f4c4b72c713345a";
  click B_1 "https://github.com/e53e04ac/event-emitter/tree/0c338d821268a5f0aaa42481216fd2e73c8734c9";
  click B_2 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_3 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_4 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_5 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_6 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_7 "https://github.com/e53e04ac/ipp5-types/tree/ef144d850d518b40703ea085cb940b3ec452bde2";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "express";
    B_0_0(["Router"]);
  end;
  subgraph "joi";
    B_1_0(["default"]);
  end;
  subgraph "date-time";
    B_2_0(["DateTime"]);
  end;
  subgraph "event-emitter";
    B_3_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_4_0(["hold"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
  B_4_0 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "express";
    B_0_0(["Router"]);
    B_0_1(["RequestHandler"]);
  end;
  subgraph "joi";
    B_1_0(["default"]);
  end;
  subgraph "date-time";
    B_2_0(["DateTime"]);
  end;
  subgraph "event-emitter";
    B_3_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_4_0(["Get"]);
  end;
  subgraph "ipp5-types";
    B_5_0(["Ipp5DailySummaryData"]);
    B_5_1(["Ipp5MenuData"]);
    B_5_2(["Ipp5MonthlySummaryData"]);
    B_5_3(["Ipp5YearlySummaryData"]);
  end;
  B_0_0 ----> A;
  B_0_1 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
  B_4_0 ----> A;
  B_5_0 ----> A;
  B_5_1 ----> A;
  B_5_2 ----> A;
  B_5_3 ----> A;
~~~~~
