import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import units from "./routes/units.mjs";
import videoElementsRoutes from "./routes/video-elements.mjs";

//loggers?
import winston from  "winston";
import expressWinston from "express-winston";
import quizElementsRoutes from "./routes/quiz-elements.mjs";

const PORT = 5173;
const app = express();


/*logger
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
  ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
}));*/

app.use(cors());
app.use(express.json());


// Load the routes
app.use("/", units);
app.use("/", videoElementsRoutes);
app.use("/", quizElementsRoutes);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})


// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
