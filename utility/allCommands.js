export default [
    {
      syntax: 'announce <message>',
      description: 'You make an announcement'
    },
    {
      syntax: 'gif <search query>',
      description: 'A gif is sent into the chat'
    },
    {
      syntax: 'meme',
      description: 'A random meme is sent into the chat'
    },
    { syntax: 'report <user> <reason>', description: 'report a user' },
    {
      syntax: 'yt <query>',
      description: 'Outputs search results for a youtube search'
    },
    {
      syntax: 'ytchannel <query>',
      description: 'Displays a Youtube channel'
    },
    {
      syntax: 'clear <number of messages>',
      description: 'You clear an amount of messages from the text channel'
    },
    {
      syntax: 'join',
      description: 'I join the voice channel you are in'
    },
    { syntax: 'leave', description: "I leave the voice channel I'm in" },
    {
      syntax: 'play <youtube link/search query>',
      description: 'I play a song by name or youtube link'
    },
    { syntax: 'queue', description: 'I show the current song queue' },
    {
      syntax: 'restart',
      description: 'the currently playing song restarts'
    },
    { syntax: 'shuffle', description: 'Shuffles the song queue' },
    { syntax: 'skip', description: 'The current song is skipped' },
    {
      syntax: 'stop',
      description: 'The bot stops playing songs and the queue is cleared'
    },
    {
      syntax: 'loop',
      description: 'the currently playing song is set to loop after completion'
    },
    {
      syntax: 'pt <name/symbol/atomic number>',
      description: 'You can look up any element on the periodic table'
    },
    {
      syntax: 'transcribe <RNA>',
      description: 'You transcribe an RNA strand'
    },
    {
      syntax: 'translate <DNA>',
      description: 'You translate a DNA strand'
    },
    { syntax: 'bal <?user>', description: 'shows your currency balance' },
    {
      syntax: 'hack <user>',
      description: 'you steal currency from another user'
    },
    { syntax: 'mine', description: 'you mine an amount of currency' },
    {
      syntax: 'walletcreate',
      description: 'You create a wallet for currency'
    },
    {
      syntax: 'totalcurrency',
      description: 'Shows the total amount of TauCoin in circulation'
    },
    {
      syntax: 'baltop',
      description: 'Shows the user with the highest balance'
    },
    { syntax: 'mc', description: 'you play minecraft' },
    { syntax: 'stopgame', description: 'Stops the current game' },
    {
      syntax: 'currentgame',
      description: 'The current game is displayed'
    },
    { syntax: 'mute <userping>', description: 'A player is muted' },
    {
      syntax: 'tempmute <userping> <duration in ms> <unit (s/m/h)>',
      description: 'a user is temporarily muted'
    },
    {
      syntax: 'tempmutevc <userping> <duration> <unit (s/m/h)>',
      description: 'A user is temporarily muted from vc'
    },
    { syntax: 'unmute <userping>', description: 'a user is unmuted' }
  ]