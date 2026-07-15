import winston from "winston";

const devLogger = winston.createLogger({
  level: "verbose",
  transports: [
    new winston.transports.Console({
      level: "verbose",
    }),
  ],
});

const prodLogger = winston.createLogger({
  level: "http",
  transports: [
    new winston.transports.Console({
      level: "http",
    }),
    new winston.transports.File({
      filename: "./errors.log",
      level: "warn",
    }),
  ],
});

export const addLogger = (req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    req.logger = devLogger;
  } else {
    req.logger = prodLogger;
  }

  req.logger.http(
    `${req.method} na ${req.url} - ${new Date().toLocaleDateString()}`
  );
  next();
};
