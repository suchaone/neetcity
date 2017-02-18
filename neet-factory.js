var _ = require('underscore');

var NATIONALITY = [ 'canadian', 'american', 'russian', 'ukrainian', 'european', 'german', 'uzbek', 'albanian', 'algerian', 'armenian', 'australian', 'brit', 'dane', 'finn', 'swede', 'filipino', 'georgian', 'greek', 'israeli', 'macedonian', 'mongol', 'polack', 'spaniard', 'turk', 'arab', 'palestinian', 'jew', 'serb', 'indonesian', 'korean', 'armenian', 'aramean', 'gypsy', 'goy', 'mexican', 'cuban', 'colombian', 'african american', 'black' ];
var OPINION = [ 'partial towards', 'likes', 'dislikes', 'does not care for', 'cares for', 'despises', 'fears', 'adores', 'abhors', 'often thinks about', 'rarely considers', 'inspired by', 'friendly towards', 'prefers the company of', 'uneasy around', 'triggered by', 'beats up', 'keeps a tab on', 'suspicious of', 'respects', 'looks up to', 'says "no" to', 'defender of', 'looks down on', 'pities', 'envious of', 'writes fan fiction about', 'writes about', 'writes poems about', 'dreams about', 'obsessed with', 'cannot cope with', 'placated by', 'soothed by', 'enraged by', 'ignores', 'can\'t ignore', 'meditates on', 'sings about', 'blogs about', 'has a blog about', 'tweets about', 'posts about', 'studies', 'adores', 'idolizes', 'disrespects', 'fawns over', 'talks to', 'faps to', 'laughs at', 'comfortable with', 'uncomfortable around', 'understands', 'does\'t understand', 'confused by', 'beguiled by', 'makes memes about', 'jokes about', 'won\'t stop talking about', 'whispers to', 'shrieks at', 'screams at', 'yells at', 'yells about', 'raves about', 'talks at', 'offended by', 'chortles at', 'giggles at', 'amused by', 'snorts at', 'sneers at', 'made peace with', 'prefers the company of', 'questions the existence of', 'believes in', 'not afraid of', 'says \'yes\' to', 'ambivalent towards', 'puzzled by', 'has a problem with', 'has no problem with', 'only likes', 'engages with', 'unfazed by', 'smiles at', 'can\'t resist', 'thirsts for', 'can\'t resist smiling at', 'stands up for', 'stands up to', 'has a theory about', 'theorizes about', 'still on the fence about', 'conspires against', 'believes in conspiracy theories about', 'lives for', 'only interested in', 'has views on', 'wrote a manifesto about', 'fetishizes', 'lost his faith in', 'still believes in', 'speaks on behalf of', 'has a pinterest board full of', 'can always count on', 'wrote a song about', 'wrote a poem about', 'writes thinkpieces about', 'wrote a thinkpiece about', 'worships', 'reveres', 'mocks', 'spits at', 'bites his thumb at', 'always at ease around', 'uneasy around', 'disgusted by', 'attracted to', 'complains about', 'wrote a phd dissertation on', 'wrote a paper on', 'investigates' ];
var PLURAL = [ 'cats', 'dogs', 'sheep', 'spheres', 'trees', 'rocks', 'trains' , 'hats', 'shoes', 'bread', 'cushions', 'pokemon', 'cattle', 'memes', 'rhymes', 'monkeys', 'marmosets', 'tarsiers', 'books', 'stds', 'd&d rulebooks', 'miniatures', 'gods', 'demons', 'angels', 'math textbooks', 'ears', 'feet', 'hands', 'nose hairs', 'spells', 'pebbles', 'memorabilia', 'stamps', 'faberge eggs', 'peaches', 'emoji', 'anime', 'newts', 'waves', 'tunes', 'stories', 'logs', 'atoms', 'particles', 'potions', 'scars', 'wheels', 'cogs', 'pipes', 'manifestos', 'archons', 'hamsters', 'birds', 'elders', 'voters', 'the people', 'platonic forms', 'dreams', 'visions', 'hallucinations', 'strategies', 'pugs', 'pogs', 'words', 'numbers', 'chords', 'violins', 'video games', 'runes', 'cyphers', 'riddles', 'stickers', 'thinkpieces', 'hot takes', 'whips', 'narcotics', 'gondolas', 'pepes', 'tights', 'butts', 'thighs', 'bulges', 'mandolins', 'guitars', 'harmonicas', 'balalaikas', 'roman coins', 'pokemon cards', 'magic cards', 'tarot cards', 'data', 'asuras', 'devas', 'owls', 'screenplays', 'diet tips', 'chaos emeralds', 'tulpas', 'glyphs', 'bees', 'ants' ];
var ADJECTIVE = [ 'friendly', 'benevolent', 'understanding', 'clever', 'rude', 'friendly', 'paranoid', 'anxious', 'neurotic', 'disgusting', 'abhorent', 'timid', 'lazy', 'autistic', 'irreverent', 'irritable', 'depressed', 'sad', 'emotional', 'nihilistic', 'hedonistic', 'vulgar', 'ironic', 'unironic', 'postironic', 'violent', 'anhedonic', 'promiscuous', 'cunning', 'bashful', 'prudish', 'well-dressed', 'soft-spoken', 'audacious', 'unruly', 'orderly', 'clean', 'respectful', 'clueless', 'dirty', 'shrewd', 'shril', 'loud', 'demented', 'misunderstood', 'deranged', 'deluded', 'fiery', 'sincere', 'sensitive', 'horny', 'broke', 'wise', 'educated', 'uneducated', 'wishful', 'cautious', 'obsessive', 'anonymous', 'famous', 'unapologetic', 'shameless', 'beautiful', 'handsome', 'glamorous', 'foxy', 'comely', 'cute', 'graceful','gorgeous', 'ravishing','noble', 'hideous', 'reclusive', 'reptilian', 'revolting', 'monstrous', 'belligerent', 'peaceful', 'combative', 'pretentious', 'flamboyant', 'sophomoric', 'patrician', 'masculine', 'feminine', 'alpha', 'beta', 'omega', 'TRAITLY TRAITADJ', 'worried', 'naive', 'ignorant', 'woke', 'swole', 'RELIGION', 'generous', 'real', 'powerful', 'mighty',  ];
var PERSON = [ 'person', 'bloke', 'chap', 'lad', 'bro', 'fellow', 'fella', 'character', 'individual', 'citizen', 'boy', 'man', 'person', 'guy', 'soul', 'being', 'beast', 'creature', 'autist', 'madman', 'manchild', 'incel', 'volcel', 'solipsist', 'communist', 'anarchist', 'redditor', 'furry', 'larper', 'feminist', 'paleofeminist', 'male feminist', 'ally', 'white knight', 'prophet', 'otaku', 'singularian', 'apprentice', 'seer', 'bolshevik', 'nihilist', 'ally', 'addict', 'autocrat', 'racist', 'narcissist', 'masochist', 'sadist', 'librarian', 'fan', 'lolcow', 'hipster', 'normie', 'sophist', 'contrarian', 'goon', 'btard', 'poser', 'cat', 'bastard', 'gent', 'gentleman', 'mortal', 'male', 'adult', 'pessimist', 'optimist', 'sjw', 'fetishist', 'nympho', 'nomad', 'psychonaut', 'DRUGhead', 'DRUG user', 'subgenius', 'robot', 'fashionista', 'prole', 'pleb', 'raver', 'goth', 'hobo', 'DRUG addict', 'DRUGhead', 'OCCUPATION', 'apologist', 'fuckboy', 'fool' ];
var OCCUPATION = [ 'engineer', 'troll', 'NEET', 'designer', 'magician', 'mathematician', 'researcher', 'ironist', 'author', 'shitposter', 'scientist', 'astrologist', 'alchemist', 'sage', 'philosopher', 'rapper', 'spy', 'prostitute', 'sex worker', 'poet', 'retiree', 'software developer', 'barista', 'marine', 'cop', 'wizard', 'makeup artist', 'artist', 'janitor', 'guitarist', 'journalist', 'blogger', 'camwhore', 'thief', 'DRUG dealer', 'grifter', 'truck driver', 'mercenary', 'doctor', 'mechanic', 'translator', 'florist', 'thought leader', 'consultant', 'ux designer', 'digital nomad', 'professor', 'dj', 'hacker', 'clown', 'politician', 'lawyer', 'product manager', 'haberdasher', 'soprano', 'educator', 'pedagogue', 'technocrat', 'startup founder', 'vp of PLURAL', 'director of PLURAL', 'master of PLURAL', 'necromancer', 'priest', 'druid', 'monk', 'occultist', 'blogger', 'vlogger', 'seasteader', 'venture capitalist', 'VIDYA player', 'playwright', 'linguist', 'pornstar', 'escort', 'falconer', 'intellectual', 'activist' ];
var PREFIX = [ 'hyper', 'uber', 'meta', 'paleo', 'anarcho', 'xeno', 'post', 'anti', 'geo', 'neo', 'reconstructionist ', 'liberal ', 'conservative ', 'ultra', 'eco', 'crypto', 'reactionary ', 'revisionist ', 'queer ', 'radical ', 'moderate ', 'cyber', 'intersectionalist ', 'esoteric ' ];
var IDEOLOGY = [ 'communist', 'capitalist', 'feminist', 'maoist', 'stalinist', 'primitivist', 'syndicalist', 'collectivist', 'egoist', 'platonist', 'realist', 'syndicalist','rationalist', 'modernist', 'singularian', 'fascist', 'natalist', 'naturist', 'democrat', 'conservative', 'liberal', 'nationalist', 'agrarian', 'federalist', 'isolationist', 'monarchist', 'libertarian', 'environmentalist', 'meninist', 'masculinist', 'progressivist', 'republican', 'socialist', 'islamist', 'zionist', 'radicalist', 'baathist', 'nasserist', 'arabist', 'jihadist', 'voluntarist', 'nazi' ];
var CELEBRITY = [ 'stirner', 'zizek', 'dawkins', 'marx', 'trotsky', 'mao', 'cher', 'beyonce', 'kanye', 'kim kardashian', 'dril', 'stirner', 'nietzsche', 'plato', 'spinoza', 'kant', 'hagel', 'obama', 'trump', 'kissinger', 'putin', 'harambe', 'trudeau', 'stalin', 'lenin', 'kurzweil', 'thiel', 'yudkowsky', 'dhh', 'steve jobs', 'stallman', 'herzl', 'arafat', 'hillary', 'oprah', 'bjork', 'bowie', 'kierkegaard', 'murakami', 'manson', 'kaczynski', 'foucault', 'goethe', 'derrida', 'adam sandler', 'bill cosby', 'bernie sanders', 'ron paul', 'pkd', 'weev', 'milo' ];
var VERY = [ 'very', 'fiercely', 'zealously', 'rather', 'singularly', 'distinctly', 'relatively', 'darn', 'mighty', 'devilishly', 'remarkably', 'highly', 'vaguely', 'faintly' ];
var WRT = [ 'when it comes to', 'with regard to', 'around' ];
var FAN = [ 'fan', 'fanboy', 'worshipper', 'admirer', 'acolyte', 'follower' ];
var PEOPLE = [ 'fascists', 'communists', 'redditors', 'sjws', 'anarchists', 'incels', 'volcels', 'pokemon', 'furries', 'men', 'women', 'druids', 'magi', 'thieves', 'rascals', 'trolls', 'autists', 'feminists', 'shitposters', 'twitter users', 'thots', 'tinder users', 'redditors', 'btards', 'progs', 'crowds', 'DRUGheads', 'DRUG users', 'politicians', 'mansplainers', 'manspreaders', 'friends', 'ghosts', 'ghouls', 'skeletons', 'spooks', 'bros', 'dudebros', 'fuckboys', 'fashionistas', 'wizards', 'witches', 'warlocks', 'magicians', 'sorcerers', 'barbarians', 'sex workers', 'prostitutes', 'camwhores', 'lolcows', 'maidens', 'dames', 'qts', 'monstergirls', 'hippies', 'sluts', 'crossfit enthusiasts' ];
var COMMON = [ 'your average', 'a common', 'just an ordinary', 'an ordinary', 'a garden variety', 'a retired', 'a burnt-out', 'a washed-out', 'your friendly neighborhood', 'not that kind of' ]
var FRAME = [ 'always blogs about the time he', 'always tweets about how he', 'keeps talking about the time he', 'fondly remembers the time he', 'can\'t forget the time he', 'hasn\'t been the same since he', 'changed when he', 'forgets that he', 'blocked out the time that he', 'denies that he', 'proud that he', 'ashamed that he', 'not ashamed that he' ];
var STORY = [ 'befriended', 'fought', 'punched', 'made love to', 'kissed', 'yelled at', 'was seduced by', 'was fooled by', 'was tricked into dating', 'dated', 'slapped', 'encountered', 'spoke to', 'was yelled at by', 'was lectured by', 'was educated by', 'had a heart-to-heart with', 'married', 'dated', 'divorced', 'broke up with', 'ran away from', 'ignored', 'loved', 'had a crush on', 'teamed up with', 'worked with', 'played with', 'talked to', 'laughted at', 'dreamed about', 'larped with', 'ran with', 'converted', 'won over', 'was won over by', 'made a deal with', 'slept with', 'rejected', 'interviewed', 'played VIDYA with', 'gaslighted', 'was gaslighted by', 'fucked', 'was fucked by', 'seduced', 'was seduced by', 'flirted with', 'winked at', 'barked at' ];
var DRUG = [ 'pot', 'meth', 'crack', 'coke', 'smack', 'skooma' ];
var TRAITLY = [ 'existentially', 'physically', 'mentally', 'linguistically', 'psychically', 'emotionally', 'spiritually', 'sexually', 'artistically', 'musically', 'mathematically', 'epistemically', 'ideologically', 'socially' ];
var TRAITADJ = [ 'challenged', 'gifted', 'inclined', 'driven', 'advanced', 'stunted', 'flexible', 'rigid', 'liberal', 'conservative', 'retarded' ];
var VIDYA = [ 'heroes of might and magic', 'pokemon', 'mario', 'mortal kombat', 'zelda', 'sim city', 'minecraft', 'civ3', 'dota', 'league', 'starcraft', 'diablo', 'quake', 'tic-tac-toe', 'd&d', 'undertale', 'portal', 'overwatch', 'warcraft', 'everquest', 'street fighter', 'contra', 'donkey kong', 'pong', 'halo', 'counter-strike', 'red alert' ];
var RELIGION = [ 'christian', 'jewish', 'zoroastrian', 'animist', 'atheist', 'agnostic', 'hindu', 'orthodox', 'catholic', 'protestant', 'baptist', 'satanist' ];
var XLY = [ 'gently', 'anxiously', 'ironically', 'unironically', 'exclusively', 'angrily', 'calmly', 'peacefully', 'expertly', 'ineptly', 'competently', 'incompetently', 'lazily', 'begrudgingly', 'professionally', 'religiously', 'occasionally', 'competitively', 'aggressively' ];
var WORK = [ 'works', 'plays', 'hangs out', 'meets PEOPLE', 'trolls PEOPLE', 'flirts with PEOPLE', 'bullies PEOPLE', 'chills', 'is only truly himself', 'writes songs about life', 'blogs about life', 'tweets about life', 'lives' ];
var PLACE = [ 'online', 'in world of warcraft', 'on twitter', 'on facebook', 'in starbucks', 'in the basement', 'at the gym', 'on the street', 'on myspace', 'on google plus', 'on reddit', 'in second life', 'in furcadia', 'on somethingawful' ];
var CLONE = [ 'a clone of', 'his tulpa of', 'a ghola of', 'a painting of', 'a hologram of', 'a simulation of', 'a strawman of', 'a puppet modelled after', 'a guy dressed up as' ];

var forms = [
  'OPINION PLURAL',
  'OPINION certain PLURAL',
  'OPINION his PLURAL',
  'OPINION ADJECTIVE PEOPLE',
  'OPINION ADJECTIVE PEOPLE',
  'OPINION PEOPLE',
  'OPINION the PEOPLE',
  'OPINION VIDYA',
  'professional OCCUPATION',
  'amateur OCCUPATION',
  'career OCCUPATION',
  'full-time OCCUPATION',
  'part-time OCCUPATION',
  'tenured OCCUPATION',
  'unionized OCCUPATION',
  'XLY plays VIDYA',
  'plays VIDYA with PEOPLE',
  'ADJECTIVE VIDYA player',
  'OPINION PREFIXIDEOLOGYs',
  'OPINION IDEOLOGYs',
  'OPINION ADJECTIVE IDEOLOGYs',
  'COMMON IDEOLOGY',
  'COMMON PREFIXIDEOLOGY',
  'OPINION CELEBRITY FANs',
  'OPINION ADJECTIVE CELEBRITY FANs',
  'a VERY ADJECTIVE PERSON',
  'a VERY ADJECTIVE ' + nationality,
  'COMMON PERSON',
  'RELIGION PERSON',
  'COMMON PREFIXIDEOLOGY',
  'COMMON ' + nationality,
  'COMMON ' + nationality + ' PREFIXIDEOLOGY',
  'COMMON ' + nationality + ' IDEOLOGY',
  'ADJECTIVE CELEBRITY FAN',
  'IDEOLOGY CELEBRITY FAN',
  'ADJECTIVE CELEBRITY FAN',
  'FRAME STORY that ADJECTIVE PERSON',
  'FRAME STORY that ADJECTIVE IDEOLOGY',
  'FRAME STORY that ADJECTIVE NATIONALITY',
  'STORY CLONE CELEBRITY',
  'STORY a VERY ADJECTIVE PERSON PLACE',
  'STORY a VERY ADJECTIVE IDEOLOGY PLACE',
  'STORY a VERY ADJECTIVE NATIONALITY PLACE',
  'TRAITLY TRAITADJ PERSON',
  'TRAITLY TRAITADJ ' + nationality,
  'TRAITLY TRAITADJ IDEOLOGY',
  'TRAITLY TRAITADJ CELEBRITY FAN',
  'WORK PLACE',
];

function randomTagline() {

  var form = _.sample(forms);
  form = form.replace('OPINION', _.sample(OPINION));
  form = form.replace('PERSON', _.sample(PERSON));
  form = form.replace('OCCUPATION', _.sample(OCCUPATION));
  form = form.replace('PLURAL', _.sample(PLURAL));
  form = form.replace('VERY', _.sample(VERY));
  form = form.replace('ADJECTIVE', _.sample(ADJECTIVE));
  form = form.replace('WRT', _.sample(WRT));
  form = form.replace('PLACE', _.sample(PLACE));
  form = form.replace('WORK', _.sample(WORK));
  form = form.replace('PEOPLE', _.sample(PEOPLE));
  form = form.replace('COMMON', _.sample(COMMON));
  form = form.replace('NATIONALITY', _.sample(NATIONALITY));
  form = form.replace('PREFIX', _.sample(PREFIX));
  form = form.replace('IDEOLOGY', _.sample(IDEOLOGY));
  form = form.replace('CELEBRITY', _.sample(CELEBRITY));
  form = form.replace('FAN', _.sample(FAN));
  form = form.replace('FRAME', _.sample(FRAME));
  form = form.replace('STORY', _.sample(STORY));
  form = form.replace('DRUG', _.sample(DRUG));
  form = form.replace('TRAITLY', _.sample(TRAITLY));
  form = form.replace('TRAITADJ', _.sample(TRAITADJ));
  form = form.replace('VIDYA', _.sample(VIDYA));
  form = form.replace('XLY', _.sample(XLY));
  form = form.replace('RELIGION', _.sample(RELIGION));
  form = form.replace('CLONE', _.sample(CLONE));
  form = form.replace('liberal liberal', 'liberal');
  form = form.replace('conservative conservative', 'conservative');
  if (gender === 'female') {
    form = form.replace(' his ', ' her '); //todo: all instances
    form = form.replace(' he ', ' she '); //todo: all instances
  }

  return form;
}

function randomName (nationality, gender) {
  var vowels = "aaaaaeeeeeeiiiooouuu";
  var consonants = "bbcddfghhjklmnprstvxzwwy";
  var name = "";
  var surname = "";

  for (var i = 0; i < Math.random() * 4; i++) {
    name += _.sample(consonants);
    name += _.sample(vowels);
  }
  for (var i = 0; i < Math.random() * 5; i++) {
    surname += _.sample(consonants);
    surname += _.sample(vowels);
  }

  function russifyName (name) {
    name = name.replace("w","v"); //todo replaceall
    name = name.replace("h","kh");
    name = name.replace("j","zh");
    name = name.replace("c","k");
    name = name.replace("x","ks");
    if (gender === 'female')
      return name + _.sample(["na", "ya"]);
    else
      return name + _.sample(["", "slav", "nik"]);
  }

  function russifySurname (name) {
    name = name.replace("w","v"); //todo replaceall
    name = name.replace("h","kh");
    name = name.replace("j","zh");
    name = name.replace("c","k");
    name = name.replace("x","ks");
    return name + _.sample(["nov", "novsky", "novich"]);
  }

  if (typeof nationality !== 'undefined' && (nationality === 'russian' || nationality === 'ukrainian')) {
    name = russifyName(name);
    surname = russifySurname(surname);
  } else if (typeof nationality !== 'undefined' && (nationality === 'jew' || nationality === 'israeli')) {
    if (gender === 'male')
      name = _.sample(['amos', 'ariel', 'ari', 'avigdor', 'benyamin', 'boaz', 'chaim', 'david', 'eli', 'moshe']);
    else
      name = _.sample(['avital', 'carmel', 'deborah', 'efrat', 'ilana', 'maya', 'naama', 'rache', 'sarah', 'tal']);
    surname = russifySurname(surname);
  } else if (typeof nationality !== 'undefined' && (nationality === 'german' || nationality === 'bavarian')) {
    name = _.sample(['jan', 'jannik', 'stefan', 'jorg', 'klaus', 'peter', 'gunter', 'hans', 'wolfgang', 'heinz', 'herbert', 'karl', 'ernst', 'friedrich', 'wilhelm', 'otto']);
    surname = _.sample(['muller', 'schmidt', 'schneider', 'fischer', 'weber', 'meyer', 'wagner', 'becker', 'schulz', 'hoffman', 'schafer', 'koch', 'bauer', 'richter', 'klein', 'wolf', 'schoder', 'neumann', 'schwartz', 'zimmerman', 'braun', 'kruger', 'lange', 'schmitt', 'krause', 'lehmann']);
  } else if (typeof nationality !== 'undefined' && (nationality === 'algerian' || nationality === 'arab' || nationality === 'palestian' )) {
    name = _.sample(['abbas', 'abdul', 'abid', 'amir', 'arif', 'aziz', 'bakr', 'bashir', 'falah', 'faisal', 'habib', 'ibrahim', 'ismail', 'ilias', 'kazim', 'muhammad', 'mustafa', 'nadir', 'nasir', 'sahir', 'talib', 'nasim', 'yasir']);
    if (Math.random() > .3)
      surname = _.sample(['abbas', 'abdul', 'ahmad', 'Al-Mubarak', 'Al-Bariqi', 'alavi', 'ali', 'amri', 'Al-Asiri', 'ata', 'awad', 'ayad', 'badawi', 'ghali', 'gaddafi', 'Al Hamdan', 'hamid', 'hussein']);
  } else if (typeof nationality !== 'undefined' && (nationality === 'korean' )) {
    name = _.sample(['jun', 'jung-hoon', 'sung-ho', 'joon-ho', 'sang-hoon' ]);
    surname = _.sample(['kim', 'pak', 'yi', 'ri', 'chong', 'cho', 'kang', 'chang', 'yung', 'han', 'so', 'song', 'chu', 'kwak', 'ki']);
  } else if (typeof nationality !== 'undefined' && (nationality === 'american' || nationality === 'brit' || nationality === 'canadian' || nationality === 'australian')) {
    if (gender === 'male')
      name = _.sample(['james', 'john', 'robert', 'michael', 'david', 'richard', 'daniel', 'paul', 'mark', 'donald', 'george', 'steve', 'jecff', 'larry', 'josh', 'dennis', 'carl', 'harold', 'doug', 'joe', 'justin', 'harry', 'bruce', 'aaron', 'jesse', 'craig', 'leonard', 'stanley', 'nate', 'alex', 'leo', 'tim', 'zack', 'brad', 'neil', 'jim', 'bob', 'bobby', 'xander', 'ethan', 'adam', 'baxter', 'caleb', 'matt', 'robert', 'robin', 'gabriel', 'gabe', 'ray', 'raymond', 'phil', 'toby', 'bart', 'arlo', 'abel', 'ace', 'adir', 'aidan', 'aiden', 'al', 'alvin', 'andre', 'ansel', 'anthony', 'tony', 'antoine', 'aric', 'arnie', 'arnold', 'arthur', 'austin', 'barney', 'barry', 'benjamin', 'ben', 'brandon', 'brent', 'chad', 'bryan', 'buster', 'calvin', 'casey', 'cecil', 'cedric', 'chase', 'chandler', 'charlie', 'chip', 'chris', 'christopher', 'claude', 'cletus', 'cliff', 'cody', 'cyril', 'cyrus', 'damion', 'dan', 'darcy', 'darian', 'darren', 'daryl', 'dean', 'shawn', 'dominic', 'douggie', 'drew', 'dudley', 'dustin', 'ed', 'dylan', 'elliot', 'zeke' ]);
    else
      name = _.sample(['ashley', 'emma', 'emily', 'emma', 'madison', 'olivia', 'isabella', 'samantha', 'hannah', 'liz', 'alexis', 'sarah', 'lily', 'jen', 'kaylee', 'alison', 'zoe', 'paige', 'andrea', 'leah', 'claire', 'molly', 'amy', 'natalie', 'elise', 'lindsay', 'monica']);
    
    if (Math.random() > .3)
      surname = _.sample(['smith', 'johnson', 'williams', 'jones', 'brown', 'miller', 'wilson', 'moore', 'tayor', 'anderson', 'thomas', 'jackson', 'white', 'harris', 'martin', 'thompson', 'garcia', 'martinez', 'robinson', 'clark', 'lewis', 'lee', 'walker', 'hall', 'allen', 'young', 'king', 'wright', 'lopez', 'hill', 'scott', 'green', 'edwards', 'turner', 'parker', 'stewart', 'roger', 'perez', 'carter', 'baker', 'adams', 'morris', 'rogers', 'gray', 'jenkins', 'coleman', 'addison', 'akers', 'albertson', 'appleton', 'arrington', 'arthur', 'atkinson', 'atwood', 'banks', 'barker', 'barton', 'bates', 'beck', 'becket', 'bell', 'bennet', 'beverly', 'blake', 'blackwood', 'bonner', 'booth', 'bourne', 'branson', 'brant', 'bryant', 'brown' ]);
    else if (Math.random() > .5)
      surname += 'son';
    else {
      surname = surname[0].toUpperCase() + surname.slice(1);
      surname = 'O\'' + surname;
    }
  }

  name = name[0].toUpperCase() + name.slice(1);
  surname = surname[0].toUpperCase() + surname.slice(1);

  return name + " " + surname;
}

module.exports = {
  neets: [],
  spawnNeet: function () {
    newNeet = {
      nationality: Math.random() > 0.5 ? _.sample(NATIONALITY) : 'american'; ,
      gender: 'male',
      location: 0,
      tagline: randomTagline(),
      name: randomName()
    };
    this.neets.push(newNeet);
    newNeet.index = neets.length;
    // TODO: save the NEET to DB
    return newNeet;
  }
}
