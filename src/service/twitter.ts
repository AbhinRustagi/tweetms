import { TwitterApi, TwitterApiReadWrite } from "twitter-api-v2";

export class TwitterApiClient {
  client: null | TwitterApi = null;
  twitterClient: null | TwitterApiReadWrite;

  constructor() {
    const {
      TWITTER_APP_KEY,
      TWITTER_APP_SECRET,
      TWITTER_ACCESS_SECRET,
      TWITTER_ACCESS_TOKEN,
    } = process.env;

    if (
      TWITTER_ACCESS_SECRET &&
      TWITTER_ACCESS_TOKEN &&
      TWITTER_APP_KEY &&
      TWITTER_APP_SECRET
    ) {
      this.client = new TwitterApi({
        appKey: TWITTER_APP_KEY,
        appSecret: TWITTER_APP_SECRET,
        accessSecret: TWITTER_ACCESS_SECRET,
        accessToken: TWITTER_ACCESS_TOKEN,
      });

      this.twitterClient = this.client.readWrite;
    } else {
      throw Error("Twitter Credentials not found.");
    }
  }

  async tweet(text: string) {
    const response = await this.twitterClient?.v2.tweet(text);
    return response?.data;
  }
}
