import { google } from "googleapis";
import path from "path";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SHEET_ID = "1JC0J7w6U42HtGG63vb0DHxnvaz9v_MaAHi0RCuXY3bI"; // Cseréld a sajátodra

async function appendToSheet(data) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
    scopes: SCOPES,
  });

  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: "Munkalap1!A:B",
    valueInputOption: "RAW",
    requestBody: {
      values: [[data.name, data.email]],
    },
  });

  return response.data;
}

export async function POST(req) {
  try {
    const body = await req.json(); // A request body JSON formátumának feldolgozása
    const { name, email } = body;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ message: "Name and email are required" }),
        { status: 400 }
      );
    }

    await appendToSheet({ name, email });

    return new Response(
      JSON.stringify({ message: "Data added successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error appending to sheet:", error);
    return new Response(
      JSON.stringify({ message: "Failed to add data to sheet" }),
      { status: 500 }
    );
  }
}
