import express from "express";
import expressWs from "express-ws";
import http from "http";

let port = 3000;

let app = express();
let server = http.createServer(app).listen(port);

// Apply expressWs
expressWs(app, server);

// Websocket
app.ws("/", async function (ws, req) {
  setTimeout(() => {
    ws.send(
      JSON.stringify({
        payload: {
          data: {
            stationStatusChanged: {
              id: "ad65c86f-df37-4398-87fa-4db1ddeecd4b",
              stationId: "a866afad-d365-4be7-93ed-6dd8b73ce412",
              isRunning: false,
              time: new Date().toISOString(),
              __typename: "StationAvailability",
            },
          },
        },
        id: "2",
        type: "data",
      })
    );
  }, 3000);

  ws.on("message", async function (msg) {
    console.log("message received", msg);
    if (JSON.stringify(msg).includes("_init")) {
      ws.send(JSON.stringify({ type: "connection_ack" }));
    }
  });

  //   setInterval(() => {
  //     ws.send(
  //       JSON.stringify([
  //         {
  //           station: "test",
  //           id: 2,
  //           status: "running",
  //         },
  //       ])
  //     );
  //   }, 5000);
});
