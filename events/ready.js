module.exports = client => {
  client.user.setStatus("dnd");
  console.log(`${client.user.username} adı ile giriş yapıldı!`)
client.user.setActivity(`discord.gg/kurdistan`, { type: "LISTENING"});
};
