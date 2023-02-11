# ipp5-bookshelf-reader-router

~~~~~ sh
npm install e53e04ac/ipp5-bookshelf-reader-router
~~~~~

~~~~~ mjs
import { Ipp5BookshelfReaderRouter } from 'e53e04ac/ipp5-bookshelf-reader-router';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-bookshelf-reader-router"]);
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
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  A --reference--> B_6;
  A --reference--> B_7;
  click B_0 "https://github.com/e53e04ac/date-time/tree/0aa67ba78d80875a0ff83b26e2183327890420b4";
  click B_1 "https://github.com/e53e04ac/event-emitter/tree/289e6320381f1be4d43177944eca0a12b665c4f7";
  click B_2 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_3 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_4 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_5 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_6 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_7 "https://github.com/e53e04ac/ipp5-types/tree/f66ddbd49c9601df9aea4cefdbb3e5c3e65427f5";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-bookshelf-reader-router"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "express"
    D0(["Router"]);
    D5(["RequestHandler"]);
  end;
  subgraph "joi"
    D1(["default"]);
  end;
  subgraph "date-time"
    D2(["DateTime"]);
  end;
  subgraph "event-emitter"
    D3(["EventEmitter"]);
  end;
  subgraph "hold"
    D4(["hold"]);
    D6(["Get"]);
  end;
  subgraph "ipp5-types"
    D7(["Ipp5DailySummaryData"]);
    D8(["Ipp5MenuData"]);
    D9(["Ipp5MonthlySummaryData"]);
    D10(["Ipp5YearlySummaryData"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D0 --import--> C1;
  D5 --import--> C1;
  D1 --import--> C1;
  D2 --import--> C1;
  D3 --import--> C1;
  D6 --import--> C1;
  D7 --import--> C1;
  D8 --import--> C1;
  D9 --import--> C1;
  D10 --import--> C1;
~~~~~
