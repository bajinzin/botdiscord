module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('meow');

  m.edit(`🐱 **Miau!**`
  );
};