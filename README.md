# ipp5-bookshelf-reader-router

~~~~~ sh
npm install e53e04ac/ipp5-bookshelf-reader-router
~~~~~

~~~~~ mjs
import { Ipp5BookshelfReaderRouter } from 'ipp5-bookshelf-reader-router';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["date-time"]);
    B_1(["event-emitter"]);
    B_2(["express"]);
    B_3(["hold"]);
    B_4(["joi"]);
  end;
  subgraph "devDependencies";
    B_5(["@types/express"]);
    B_6(["@types/node"]);
    B_7(["ipp5-types"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/date-time\n0ddc9488f948d37708bf2db4b9aeb4f37dabb5fd"]);
    C_1(["e53e04ac/event-emitter\n63f34d0c90cbecf2b424b38c0615e67fd7ba6594"]);
    C_3(["e53e04ac/hold\n050a2db413598fe87670b5b6bd34b804776a3657"]);
    C_7(["e53e04ac/ipp5-types\n77007f82947cc0eb20ebd9c346c7ee980eb41787"]);
  end;
  subgraph "npmjs";
    C_2(["express\n4.18.2"]);
    C_4(["joi\n17.8.3"]);
    C_5(["@types/express\n4.17.17"]);
    C_6(["@types/node\n18.14.6"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  A ----> B_7;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  B_6 ----> C_6;
  B_7 ----> C_7;
  click C_0 "https://github.com/e53e04ac/date-time/tree/0ddc9488f948d37708bf2db4b9aeb4f37dabb5fd";
  click C_1 "https://github.com/e53e04ac/event-emitter/tree/63f34d0c90cbecf2b424b38c0615e67fd7ba6594";
  click C_2 "https://www.npmjs.com/package/express/v/4.18.2";
  click C_3 "https://github.com/e53e04ac/hold/tree/050a2db413598fe87670b5b6bd34b804776a3657";
  click C_4 "https://www.npmjs.com/package/joi/v/17.8.3";
  click C_5 "https://www.npmjs.com/package/@types/express/v/4.17.17";
  click C_6 "https://www.npmjs.com/package/@types/node/v/18.14.6";
  click C_7 "https://github.com/e53e04ac/ipp5-types/tree/77007f82947cc0eb20ebd9c346c7ee980eb41787";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-bookshelf-reader-router";
    E_0(["namespace Ipp5BookshelfReaderRouter"]);
    E_1(["type Ipp5BookshelfReaderRouter"]);
    E_2(["const Ipp5BookshelfReaderRouter"]);
  end;
  M["index.d.ts"]
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

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-bookshelf-reader-router";
    E_0(["Ipp5BookshelfReaderRouter"]);
  end;
  M["index.mjs"]
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
