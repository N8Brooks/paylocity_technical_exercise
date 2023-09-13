import express, { Request, Response } from "express";
import bodyParser from "body-parser";

interface Dto {
  name: string;
  type: string;
  description: string;
  date: `${string}-${string}-${string}`;
}

const app = express();

app.use(bodyParser.json());

/** Store data in memory, not scalable, but used for example */
const DATA: Dto[] = [];

app.post("/api/v1/data", (req: Request, res: Response) => {
  if (!isValidDtoArr(req.body)) {
    res.status(400).send("invalid dto request");
    return;
  }
  DATA.push(...(req.body as Dto[]));
  DATA.sort(compareDto);
  res.status(201).send("created successfully");
});

function isValidDtoArr(arr: Record<string, any>): boolean {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every(isValidDto);
}

/** Test the validity of a request body against dto */
function isValidDto(dto: Record<string, any>): boolean {
  if (Object.keys(dto).length !== 4) {
    return false;
  }
  const { name, type, description: desc, date } = dto;
  return (
    isValidName(name) &&
    isValidType(type) &&
    isValidDesc(desc) &&
    isValidDate(date)
  );
}

function isValidName(name: any): boolean {
  return name && typeof name === "string" && name.length < 64;
}

function isValidType(type: any): boolean {
  return type && typeof type === "string" && type.length < 64;
}

function isValidDesc(desc: any): boolean {
  return desc && typeof desc === "string" && desc.length < 256;
}

function isValidDate(date: any): boolean {
  return date && typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/u.test(date);
}

/** Comparison function for Dtos by date in descending order */
function compareDto(a: Dto, b: Dto): number {
  if (a.date > b.date) {
    return -1;
  } else if (a.date < b.date) {
    return 1;
  } else {
    return 0;
  }
}

app.get("/api/v1/data", (_req: Request, res: Response) => {
  res.status(200).send({ results: DATA });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
