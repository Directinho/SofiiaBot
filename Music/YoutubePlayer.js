const bot = require("lavaplayer") // required module
const Discord = require("discord.js") //required module
const ytdl = require('ytdl-core');
const {
	AudioPlayerStatus,
	StreamType,
	createAudioPlayer,
	createAudioResource,
	joinVoiceChannel,
} = require('@discordjs/voice');

// ...

const connection = joinVoiceChannel({
	channelId: voiceChannel.id,
	guildId: guild.id,
	adapterCreator: guild.voiceAdapterCreator,
});

const stream = ytdl('youtube link', { filter: 'audioonly' });
const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
const player = createAudioPlayer();

player.play(resource);
connection.subscribe(player);

module.exports = {
	a: '🇦', b: '🇧', c: '🇨', d: '🇩',
	e: '🇪', f: '🇫', g: '🇬', h: '🇭',
	i: '🇮', j: '🇯', k: '🇰', l: '🇱',
	m: '🇲', n: '🇳', o: '🇴', p: '🇵',
	q: '🇶', r: '🇷', s: '🇸', t: '🇹',
	u: '🇺', v: '🇻', w: '🇼', x: '🇽',
	y: '🇾', z: '🇿', 0: '0️⃣', 1: '1️⃣',
	2: '2️⃣', 3: '3️⃣', 4: '4️⃣', 5: '5️⃣',
	6: '6️⃣', 7: '7️⃣', 8: '8️⃣', 9: '9️⃣',
	10: '🔟', '#': '#️⃣', '*': '*️⃣',
	'!': '❗', '?': '❓',
};

if(message.content === "!play") {
    music.play("Im on my way", message.author) // bot join the voice channel and play song 
     return message.channel.send("Im now playing I'm on my way")
}