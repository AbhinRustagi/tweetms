interface ConfigItem {
  key: string;
  value: string;
  id: string;
}

interface ScheduledTweet {
  id: string;
  scheduledDate: string;
  scheduledTime: string;
  content: string;
}

interface ArchivedTweet {
  id: string;
  scheduledDate: string;
  scheduledTime: string;
  content: string;
  postedAt: string;
  posted: boolean;
}
