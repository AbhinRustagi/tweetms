import { google, sheets_v4 } from "googleapis";

export class GoogleSheetClient {
  sheetsClient?: sheets_v4.Sheets;

  constructor() {
    const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;

    if (GOOGLE_CLIENT_EMAIL && GOOGLE_PRIVATE_KEY) {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: [
          "https://www.googleapis.com/auth/drive",
          "https://www.googleapis.com/auth/drive.file",
          "https://www.googleapis.com/auth/spreadsheets",
        ],
      });

      this.sheetsClient = google.sheets({ auth, version: "v4" });
    } else {
      throw Error("Google Client Email & Private Key not found!");
    }
  }

  async _connectToScheduledTweetsSheet() {
    const { SCHEDULED_TWEETS_SHEET_ID } = process.env;

    await this.sheetsClient?.spreadsheets.get({
      spreadsheetId: SCHEDULED_TWEETS_SHEET_ID,
    });
  }

  async _connectToArchivedTweetsSheet() {
    const { ARCHIVED_TWEETS_SHEET_ID } = process.env;

    await this.sheetsClient?.spreadsheets.get({
      spreadsheetId: ARCHIVED_TWEETS_SHEET_ID,
    });
  }
}
