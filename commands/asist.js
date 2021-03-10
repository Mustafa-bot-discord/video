const Discord = require('discord.js');


exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Yeterli Yetkin Yok :x:')
message.channel.send(new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setAuthor(client.user.username,client.user.avatarURL())
.setDescription(`${message.guild.roles.cache.map(role => `${role}`).join('\n',',')}`))
  //Synex
//PinkCode
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["roller"]
  };
  
  exports.help = {
    name: 'roller',
    description: 'geremez23',
    usage: 'rol'
  };