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
  click B_0 "https://github.com/e53e04ac/date-time/tree/bdcf01ee6506eacf5857ad340426e2befb2b3a64";
  click B_1 "https://github.com/e53e04ac/event-emitter/tree/93b9f205a7be92bb920d2d4f13efa78be7b4ba5d";
  click B_2 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_3 "https://github.com/e53e04ac/hold/tree/b0b5ef032800af76c6e7ae27472dbf25a04a947d";
  click B_4 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_5 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_6 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_7 "https://github.com/e53e04ac/ipp5-types/tree/86f5b3a08debb8d9d9e48753cecd00bfd5b4d6a2";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-bookshelf-reader-router";
    E_0(["Ipp5BookshelfReaderRouter"]);
  end;
  M(["index.mjs"])
  subgraph "express";
    I_0_0(["Router"]);
  end;
  subgraph "joi";
    I_1_0(["default"]);
  end;
  subgraph "date-time";
    I_2_0(["DateTime"]);
  end;
  subgraph "event-emitter";
    I_3_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_4_0(["hold"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-bookshelf-reader-router";
    E_0(["namespace Ipp5BookshelfReaderRouter"]);
    E_1(["type Ipp5BookshelfReaderRouter"]);
    E_2(["const Ipp5BookshelfReaderRouter"]);
  end;
  M(["index.d.ts"])
  subgraph "express";
    I_0_0(["Router"]);
    I_0_1(["RequestHandler"]);
  end;
  subgraph "joi";
    I_1_0(["default"]);
  end;
  subgraph "date-time";
    I_2_0(["DateTime"]);
  end;
  subgraph "event-emitter";
    I_3_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_4_0(["Get"]);
  end;
  subgraph "ipp5-types";
    I_5_0(["Ipp5DailySummaryData"]);
    I_5_1(["Ipp5MenuData"]);
    I_5_2(["Ipp5MonthlySummaryData"]);
    I_5_3(["Ipp5YearlySummaryData"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_5_1;
  M ----> I_5_2;
  M ----> I_5_3;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~
