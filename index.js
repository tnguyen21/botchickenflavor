require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

const reader = require("g-sheets-api");
const readerOptions = {
  sheetId: "", // replace this with published sheet ID
  // HOW-TO publish a google sheet https://www.npmjs.com/package/g-sheets-api#how-to-use
  returnAllResults: false,
  filter: {
    "key to filter on": "value to match",
  },
};

reader(readerOptions, (results) => {
  /* Do something amazing with the results */
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
    // if someone says “ping” then reply “Pong!” wow
  }

  if (msg.content === "$loop") {
    var interval = setInterval(function () {
      message.channel.send("this message is being sent every 1 second");
    }, 1 * 1000);
  }

  if (msg.content === "who is best girl") {
    msg.reply("ROBOCO DA YO!");
  }

  if (msg.content === "roboco marry me") {
    msg.reply("https://www.youtube.com/watch?v=PA5dPvmz_cg");
  }

  if (msg.content === "megane") {
    msg.reply(
      "Glasses are really versatile. First, you can have glasses-wearing girls take them off and suddenly become beautiful, or have girls wearing glasses flashing those cute grins, or have girls stealing the protagonist's glasses and putting them on like, 'Haha, got your glasses!' That's just way too cute! Also, boys with glasses! I really like when their glasses have that suspicious looking gleam, and it's amazing how it can look really cool or just be a joke. I really like how it can fulfill all those abstract needs. Being able to switch up the styles and colors of glasses based on your mood is a lot of fun too! It's actually so much fun! You have those half rim glasses, or the thick frame glasses, everything! It's like you're enjoying all these kinds of glasses at a buffet. I really want Luna to try some on or Marine to try some on to replace her eyepatch. We really need glasses to become a thing in hololive and start selling them for HoloComi. Don't. You. Think. We. Really. Need. To. Officially. Give. Everyone. Glasses?"
    );
  }

  if (msg.content === "imsa") {
    msg.reply(
      "To be fair, you have to have a very high IQ to understand IMSA. The application process is extremely subtle, and without a solid grasp of modern physics most of the essay prompts will go over a typical applicant's head. There's also Torres's nihilistic outlook, which is deftly woven into his characterisation- his personal philosophy draws heavily from Lee Eysturlid literature, for instance. The students understand this stuff; they have the intellectual capacity to truly appreciate the depths of the courses, to realise that they're not just educational- they say something deep about LIFE. As a consequence people who dislike IMSA truly ARE idiots- of course they wouldn't appreciate, for instance, the humor in Dennsa's existential catchphrase 'Sorry Brotha, Rules are Rules,' which itself is a cryptic reference to Turgenev's Russian epic Fathers and Sons. I'm smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as Jose Torres's genius wit unfolds itself on their 2-hour tour. What fools.. how I pity them."
    );
  }

  if (msg.content === "give me emojis") {
    msg.reply(":monkey_face:");
  }

  if (msg.content === "eyemoutheye") {
    msg.reply("👁👄👁");
  }
});

client.login(proces.env.DISCORD_TOKEN); // process.env.DISCORD_TOKEN

// HI AUSTIN
// MI MICHEAL
// HI TOMMY
// SHRIMP CHIPS
