import Discord from "discord.js";
const client = new Discord.Client();

client.on("ready", () => {
  console.log("AWS LP eliminator started");
});

const leadershipPrinciples = [
  "customer obsession",
  "ownership",
  "invent and simplify",
  "are right, a lot",
  "learn and be curious",
  "hire and develop the best",
  "insist on the highest standards",
  "think big",
  "bias for action",
  "frugality",
  "earn trust",
  "dive deep",
  "have backbone",
  "disagree and commit",
  "deliver results",
];

client.on("message", async (msg) => {
  const content = msg.content.toLowerCase();
  for (const lp of leadershipPrinciples) {
    if (content.includes(lp)) {
      await msg.channel.send(
        ":warning: AWS Leadership Principle Detected :warning:"
      );
      return;
    }
  }
});

client.login(process.env.DISCORD_TOKEN)