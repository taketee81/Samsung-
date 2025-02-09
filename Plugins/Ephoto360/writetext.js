module.exports = {
  command: ["writetext"],
  operate: async ({ m, args, reply, Xploader, prefix, mess, ephoto }) => {
    let q = args.join(" ");
    if (!q) {
      return reply(`*Example: ${prefix}writetext Tylor*`);
    }

    const link = "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";

    try {
      let result = await ephoto(link, q);
      await Xploader.sendMessage(
        m.chat,
        { image: { url: result }, caption: `${mess.success}` },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in writetext command:", error);
      reply("*An error occurred while generating the effect.*");
    }
  },
};