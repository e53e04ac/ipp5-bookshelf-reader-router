# ipp5-bookshelf-reader-router

~~~~~ sh
npm install e53e04ac/ipp5-bookshelf-reader-router
~~~~~

~~~~~ mjs
import { Ipp5BookshelfReaderRouter } from 'e53e04ac/ipp5-bookshelf-reader-router';
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-bookshelf-reader-router"]);
  B0(["e53e04ac/date-time"]);
  B1(["e53e04ac/event-emitter"]);
  B2(["express"]);
  B3(["e53e04ac/hold"]);
  B4(["joi"]);
  C0(["@types/express"]);
  C1(["@types/node"]);
  C2(["e53e04ac/ipp5-types"]);
  click B0 href "https://github.com/e53e04ac/date-time";
  click B1 href "https://github.com/e53e04ac/event-emitter";
  click B3 href "https://github.com/e53e04ac/hold";
  click C2 href "https://github.com/e53e04ac/ipp5-types";
  subgraph "e53e04ac/ipp5-bookshelf-reader-router";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
    B4 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
    C2 --import--> A;
  end;
~~~~~
