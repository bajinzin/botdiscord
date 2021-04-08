module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('zelda');

  m.edit(`🐱 O que você quer **Humano**?`
  );
};