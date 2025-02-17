import { envs } from "../../config";

export class DiscordService {
  private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;
  constructor() {}

  async notify(message: string) {
    const body = {
      content: message,
      embeds: [
        {
          image: {
            url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDBlcWtpM25ibWd1bnhpc3RnZjY1NG1ucHR4YTl0aXFpdjgwNGlmciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Sd8zKpVThbcuj86uLN/giphy.gif",
          },
        },
      ],
    };

    const response = await fetch(this.discordWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log("Error sending message to discord");
      return false;
    }
    return true;
  }
}
