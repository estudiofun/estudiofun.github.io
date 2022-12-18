const defaultMessage = ' Using word of the day instead.'

export function getWordOfTheDay() {
  if (location.search) {
    try {
      const query = atob(location.search.slice(1))
      if (query.length !== 5) {
        alert(`Incorrect word length from encoded query. ${defaultMessage}`)
      } else {
        return query
      }
    } catch (e) {
      alert(`Malformed encoded word query. ${defaultMessage}`)
    }
  }

  const now = new Date()
  const start = new Date(2022, 0, 0)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > answers.length) {
    day -= answers.length
  }
  return answers[day]
}

// copied from Wordle source
const answers = [
  'aaron',
'abdon',
'abida',
'abiel',
'abihu',
'abiud',
'abner',
'abram',
'abyss',
'accad',
'achan',
'achar',
'achim',
'achor',
'addar',
'addon',
'adiel',
'adina',
'adino',
'adlai',
'admah',
'adnah',
'adria',
'aenon',
'agate',
'ahava',
'ahban',
'ahiam',
'ahian',
'ahira',
'ahlab',
'ahlai',
'ahoah',
'ahzai',
'aiath',
'akkub',
'aleph',
'algum',
'allon',
'almon',
'almug',
'altar',
'alush',
'alvah',
'alvan',
'amasa',
'ammah',
'ammon',
'amnon',
'amram',
'anani',
'anath',
'angel',
'anger',
'aniam',
'annas',
'aphek',
'aphik',
'apple',
'apron',
'ardon',
'areli',
'argob',
'arieh',
'ariel',
'armor',
'arnan',
'aroer',
'arpad',
'arrow',
'arvad',
'asaph',
'ashan',
'asher',
'ashes',
'asiel',
'asnah',
'assir',
'assos',
'attai',
'avith',
'avvim',
'azbuk',
'azgad',
'aziel',
'aziza',
'azmon',
'azzan',
'azzur',
'baana',
'baara',
'babel',
'balah',
'balak',
'barak',
'basin',
'beads',
'beard',
'bebai',
'bedad',
'bedan',
'beera',
'beeri',
'behth',
'belly',
'bered',
'beryl',
'besai',
'betah',
'beten',
'bezai',
'bezek',
'bezer',
'bible',
'binea',
'birds',
'birth',
'black',
'blood',
'bohan',
'bones',
'booth',
'bosom',
'bozez',
'brass',
'bread',
'bribe',
'brick',
'brier',
'brown',
'bukki',
'bunah',
'bunni',
'cabul',
'calah',
'caleb',
'calno',
'camel',
'canal',
'canon',
'carmi',
'cauda',
'cedar',
'chaff',
'chalk',
'charm',
'charm',
'cheek',
'chios',
'chloe',
'chuza',
'cloth',
'cloud',
'cobra',
'codex',
'coral',
'cosam',
'cozbi',
'cross',
'crown',
'cubit',
'cumin',
'curse',
'cushi',
'cyrus',
'dagon',
'daric',
'david',
'death',
'debir',
'dedan',
'deker',
'demas',
'demon',
'derbe',
'deuel',
'devil',
'dibon',
'dibri',
'dimon',
'dinah',
'dirge',
'divan',
'dodai',
'dread',
'dream',
'dregs',
'dress',
'dumah',
'eagle',
'earth',
'ebony',
'ebron',
'edrei',
'eglah',
'eglon',
'ekron',
'elath',
'eldad',
'elder',
'elead',
'eliab',
'eliam',
'eliel',
'elihu',
'elika',
'eliud',
'eloth',
'enaim',
'endor',
'enemy',
'enoch',
'enosh',
'ephah',
'ephah',
'ephai',
'epher',
'ephod',
'ephod',
'erech',
'eshan',
'eshek',
'etham',
'ethan',
'ether',
'ethni',
'exile',
'ezbai',
'ezbon',
'ezrah',
'fable',
'faith',
'feast',
'felix',
'fever',
'field',
'flesh',
'flint',
'flood',
'flour',
'flute',
'fraud',
'gaash',
'gaddi',
'gaham',
'gahar',
'gaius',
'galal',
'games',
'gamul',
'gareb',
'gatam',
'gazez',
'gebal',
'geber',
'gebim',
'gecko',
'geder',
'gedor',
'gerah',
'gerar',
'geuel',
'gezer',
'giant',
'gibea',
'gidom',
'gihon',
'giloh',
'gimel',
'gimzo',
'glass',
'glede',
'glory',
'goiim',
'golan',
'gomer',
'gourd',
'gozan',
'grape',
'grass',
'grave',
'greed',
'greek',
'green',
'grief',
'guard',
'guest',
'guilt',
'habor',
'hadad',
'hadar',
'hades',
'hadid',
'hagab',
'hagar',
'haggi',
'hagri',
'halah',
'haman',
'hamor',
'hamul',
'hanan',
'hanes',
'hanun',
'haran',
'harim',
'harod',
'harum',
'haruz',
'hazor',
'heart',
'heber',
'hedge',
'hegai',
'helah',
'helam',
'heleb',
'heled',
'helek',
'helem',
'helez',
'helon',
'hemam',
'heman',
'henna',
'heres',
'herod',
'heron',
'hesed',
'hezir',
'hezro',
'hilen',
'hirah',
'hiram',
'hizki',
'hobab',
'hobah',
'hoham',
'holon',
'homam',
'homer',
'honor',
'horam',
'horeb',
'horem',
'horse',
'hosah',
'hosea',
'house',
'hukok',
'hurai',
'huram',
'ibhar',
'ibsam',
'ibzan',
'iezer',
'image',
'imlah',
'immer',
'imnah',
'imrah',
'india',
'isaac',
'iscah',
'ishma',
'ishvi',
'italy',
'ithai',
'ithra',
'ittai',
'ivory',
'ivvah',
'izhar',
'jaasu',
'jabal',
'jabez',
'jabin',
'jacan',
'jacob',
'jadon',
'jagur',
'jahaz',
'jahdo',
'jakeh',
'jakim',
'jalam',
'jalon',
'james',
'jamin',
'janai',
'janim',
'jarah',
'jared',
'jarha',
'jarib',
'jason',
'javan',
'jazer',
'jaziz',
'jebus',
'jehud',
'jeiel',
'jerah',
'jered',
'jesse',
'jesus',
'jetur',
'jeuel',
'jeush',
'jezer',
'joash',
'jobab',
'jogli',
'jokim',
'jonah',
'jonam',
'joppa',
'jorah',
'jorai',
'joram',
'jorim',
'joses',
'jubal',
'jucal',
'judah',
'judas',
'judea',
'judge',
'julia',
'kamon',
'kanah',
'karka',
'kedar',
'kenan',
'kenaz',
'keros',
'kinah',
'kishi',
'knife',
'korah',
'laban',
'labor',
'ladan',
'lahad',
'lahmi',
'laish',
'lance',
'lasea',
'lasha',
'latin',
'lecah',
'leech',
'libni',
'libya',
'light',
'likhi',
'linen',
'linus',
'liver',
'loins',
'lotan',
'lycia',
'lydda',
'lydia',
'maath',
'machi',
'madai',
'madon',
'magog',
'mahli',
'mahol',
'makaz',
'malta',
'mamre',
'maneh',
'manna',
'maoch',
'marah',
'mason',
'massa',
'medad',
'medan',
'mehir',
'melea',
'menna',
'merab',
'mercy',
'mered',
'meres',
'meroz',
'mesha',
'micah',
'millo',
'minni',
'molid',
'money',
'month',
'moreh',
'moses',
'mound',
'mouth',
'mozah',
'mushi',
'music',
'myrrh',
'mysia',
'nabal',
'nacon',
'nadab',
'naham',
'nahbi',
'nahor',
'nahum',
'naomi',
'nebai',
'nebat',
'negeb',
'nehum',
'neiel',
'nezib',
'niger',
'night',
'nisan',
'nobah',
'noble',
'nodab',
'nogah',
'nohah',
'north',
'nurse',
'oboth',
'olive',
'omega',
'onion',
'ophel',
'ophir',
'ophni',
'ornan',
'orpah',
'othni',
'padon',
'palal',
'pallu',
'palti',
'paper',
'parah',
'paran',
'peace',
'pearl',
'pekah',
'pekod',
'peleg',
'pelet',
'peres',
'perez',
'perga',
'peter',
'piles',
'pilha',
'pinon',
'piram',
'pitch',
'plain',
'porch',
'pound',
'press',
'pride',
'punon',
'pupil',
'purah',
'purim',
'purse',
'puvah',
'qohph',
'quail',
'quart',
'queen',
'rabbi',
'racal',
'rahab',
'raham',
'ramah',
'rapha',
'raphu',
'raven',
'razor',
'recah',
'regem',
'rehob',
'rehsh',
'rehum',
'rekem',
'resen',
'reuel',
'rezin',
'rezon',
'rhesa',
'rhoda',
'ribai',
'river',
'rizia',
'roman',
'rufus',
'ruler',
'rumah',
'sacar',
'salem',
'salim',
'sallu',
'salma',
'samos',
'sarah',
'sarid',
'satan',
'sceva',
'sebam',
'segub',
'selah',
'seled',
'seneh',
'senir',
'serah',
'sered',
'serug',
'seven',
'shama',
'shank',
'shaul',
'sheal',
'sheba',
'sheep',
'sheik',
'shema',
'sheol',
'sheva',
'shion',
'shiza',
'shobi',
'shuah',
'shual',
'shuni',
'sidon',
'sihon',
'silas',
'silla',
'simon',
'sinai',
'sinew',
'sivan',
'slave',
'sleep',
'sling',
'smoke',
'snail',
'snake',
'snare',
'sodom',
'sotai',
'south',
'spain',
'spear',
'spell',
'spelt',
'spice',
'spies',
'spoil',
'staff',
'stake',
'stall',
'stone',
'stork',
'straw',
'sweat',
'swift',
'swine',
'sword',
'syene',
'syria',
'tabor',
'tahan',
'tamar',
'tarea',
'tebah',
'teeth',
'tehth',
'tekel',
'tekoa',
'telah',
'telam',
'telem',
'temah',
'teman',
'terah',
'thief',
'thigh',
'thorn',
'thumb',
'tibni',
'tidal',
'tilon',
'timna',
'timon',
'tiras',
'tiria',
'tithe',
'titus',
'tolad',
'topaz',
'torch',
'tower',
'trees',
'trial',
'tribe',
'troas',
'truth',
'tubal',
'tutor',
'ulcer',
'ummah',
'uncle',
'uphaz',
'uriah',
'uriel',
'uthai',
'uzzah',
'uzzia',
'vaheb',
'vapor',
'vedan',
'venom',
'viper',
'voice',
'wages',
'wagon',
'walls',
'watch',
'water',
'weeds',
'wheat',
'wheel',
'white',
'widow',
'woman',
'world',
'wrath',
'yeast',
'yiron',
'yohdh',
'zabad',
'zabdi',
'zabud',
'zadok',
'zaham',
'zattu',
'zayin',
'zebah',
'zebra',
'zebul',
'zedad',
'zelek',
'zenan',
'zenas',
'zepho',
'zerah',
'zeror',
'zibia',
'zimri',
'zizah',
'zobah',
'zohar',
'zorah',
'zuzim'
]

const allowedGuesses = [
  'aaron',
'abdon',
'abida',
'abiel',
'abihu',
'abiud',
'abner',
'abram',
'abyss',
'accad',
'achan',
'achar',
'achim',
'achor',
'addar',
'addon',
'adiel',
'adina',
'adino',
'adlai',
'admah',
'adnah',
'adria',
'aenon',
'agate',
'ahava',
'ahban',
'ahiam',
'ahian',
'ahira',
'ahlab',
'ahlai',
'ahoah',
'ahzai',
'aiath',
'akkub',
'aleph',
'algum',
'allon',
'almon',
'almug',
'altar',
'alush',
'alvah',
'alvan',
'amasa',
'ammah',
'ammon',
'amnon',
'amram',
'anani',
'anath',
'angel',
'anger',
'aniam',
'annas',
'aphek',
'aphik',
'apple',
'apron',
'ardon',
'areli',
'argob',
'arieh',
'ariel',
'armor',
'arnan',
'aroer',
'arpad',
'arrow',
'arvad',
'asaph',
'ashan',
'asher',
'ashes',
'asiel',
'asnah',
'assir',
'assos',
'attai',
'avith',
'avvim',
'azbuk',
'azgad',
'aziel',
'aziza',
'azmon',
'azzan',
'azzur',
'baana',
'baara',
'babel',
'balah',
'balak',
'barak',
'basin',
'beads',
'beard',
'bebai',
'bedad',
'bedan',
'beera',
'beeri',
'behth',
'belly',
'bered',
'beryl',
'besai',
'betah',
'beten',
'bezai',
'bezek',
'bezer',
'bible',
'binea',
'birds',
'birth',
'black',
'blood',
'bohan',
'bones',
'booth',
'bosom',
'bozez',
'brass',
'bread',
'bribe',
'brick',
'brier',
'brown',
'bukki',
'bunah',
'bunni',
'cabul',
'calah',
'caleb',
'calno',
'camel',
'canal',
'canon',
'carmi',
'cauda',
'cedar',
'chaff',
'chalk',
'charm',
'charm',
'cheek',
'chios',
'chloe',
'chuza',
'cloth',
'cloud',
'cobra',
'codex',
'coral',
'cosam',
'cozbi',
'cross',
'crown',
'cubit',
'cumin',
'curse',
'cushi',
'cyrus',
'dagon',
'daric',
'david',
'death',
'debir',
'dedan',
'deker',
'demas',
'demon',
'derbe',
'deuel',
'devil',
'dibon',
'dibri',
'dimon',
'dinah',
'dirge',
'divan',
'dodai',
'dread',
'dream',
'dregs',
'dress',
'dumah',
'eagle',
'earth',
'ebony',
'ebron',
'edrei',
'eglah',
'eglon',
'ekron',
'elath',
'eldad',
'elder',
'elead',
'eliab',
'eliam',
'eliel',
'elihu',
'elika',
'eliud',
'eloth',
'enaim',
'endor',
'enemy',
'enoch',
'enosh',
'ephah',
'ephah',
'ephai',
'epher',
'ephod',
'ephod',
'erech',
'eshan',
'eshek',
'etham',
'ethan',
'ether',
'ethni',
'exile',
'ezbai',
'ezbon',
'ezrah',
'fable',
'faith',
'feast',
'felix',
'fever',
'field',
'flesh',
'flint',
'flood',
'flour',
'flute',
'fraud',
'gaash',
'gaddi',
'gaham',
'gahar',
'gaius',
'galal',
'games',
'gamul',
'gareb',
'gatam',
'gazez',
'gebal',
'geber',
'gebim',
'gecko',
'geder',
'gedor',
'gerah',
'gerar',
'geuel',
'gezer',
'giant',
'gibea',
'gidom',
'gihon',
'giloh',
'gimel',
'gimzo',
'glass',
'glede',
'glory',
'goiim',
'golan',
'gomer',
'gourd',
'gozan',
'grape',
'grass',
'grave',
'greed',
'greek',
'green',
'grief',
'guard',
'guest',
'guilt',
'habor',
'hadad',
'hadar',
'hades',
'hadid',
'hagab',
'hagar',
'haggi',
'hagri',
'halah',
'haman',
'hamor',
'hamul',
'hanan',
'hanes',
'hanun',
'haran',
'harim',
'harod',
'harum',
'haruz',
'hazor',
'heart',
'heber',
'hedge',
'hegai',
'helah',
'helam',
'heleb',
'heled',
'helek',
'helem',
'helez',
'helon',
'hemam',
'heman',
'henna',
'heres',
'herod',
'heron',
'hesed',
'hezir',
'hezro',
'hilen',
'hirah',
'hiram',
'hizki',
'hobab',
'hobah',
'hoham',
'holon',
'homam',
'homer',
'honor',
'horam',
'horeb',
'horem',
'horse',
'hosah',
'hosea',
'house',
'hukok',
'hurai',
'huram',
'ibhar',
'ibsam',
'ibzan',
'iezer',
'image',
'imlah',
'immer',
'imnah',
'imrah',
'india',
'isaac',
'iscah',
'ishma',
'ishvi',
'italy',
'ithai',
'ithra',
'ittai',
'ivory',
'ivvah',
'izhar',
'jaasu',
'jabal',
'jabez',
'jabin',
'jacan',
'jacob',
'jadon',
'jagur',
'jahaz',
'jahdo',
'jakeh',
'jakim',
'jalam',
'jalon',
'james',
'jamin',
'janai',
'janim',
'jarah',
'jared',
'jarha',
'jarib',
'jason',
'javan',
'jazer',
'jaziz',
'jebus',
'jehud',
'jeiel',
'jerah',
'jered',
'jesse',
'jesus',
'jetur',
'jeuel',
'jeush',
'jezer',
'joash',
'jobab',
'jogli',
'jokim',
'jonah',
'jonam',
'joppa',
'jorah',
'jorai',
'joram',
'jorim',
'joses',
'jubal',
'jucal',
'judah',
'judas',
'judea',
'judge',
'julia',
'kamon',
'kanah',
'karka',
'kedar',
'kenan',
'kenaz',
'keros',
'kinah',
'kishi',
'knife',
'korah',
'laban',
'labor',
'ladan',
'lahad',
'lahmi',
'laish',
'lance',
'lasea',
'lasha',
'latin',
'lecah',
'leech',
'libni',
'libya',
'light',
'likhi',
'linen',
'linus',
'liver',
'loins',
'lotan',
'lycia',
'lydda',
'lydia',
'maath',
'machi',
'madai',
'madon',
'magog',
'mahli',
'mahol',
'makaz',
'malta',
'mamre',
'maneh',
'manna',
'maoch',
'marah',
'mason',
'massa',
'medad',
'medan',
'mehir',
'melea',
'menna',
'merab',
'mercy',
'mered',
'meres',
'meroz',
'mesha',
'micah',
'millo',
'minni',
'molid',
'money',
'month',
'moreh',
'moses',
'mound',
'mouth',
'mozah',
'mushi',
'music',
'myrrh',
'mysia',
'nabal',
'nacon',
'nadab',
'naham',
'nahbi',
'nahor',
'nahum',
'naomi',
'nebai',
'nebat',
'negeb',
'nehum',
'neiel',
'nezib',
'niger',
'night',
'nisan',
'nobah',
'noble',
'nodab',
'nogah',
'nohah',
'north',
'nurse',
'oboth',
'olive',
'omega',
'onion',
'ophel',
'ophir',
'ophni',
'ornan',
'orpah',
'othni',
'padon',
'palal',
'pallu',
'palti',
'paper',
'parah',
'paran',
'peace',
'pearl',
'pekah',
'pekod',
'peleg',
'pelet',
'peres',
'perez',
'perga',
'peter',
'piles',
'pilha',
'pinon',
'piram',
'pitch',
'plain',
'porch',
'pound',
'press',
'pride',
'punon',
'pupil',
'purah',
'purim',
'purse',
'puvah',
'qohph',
'quail',
'quart',
'queen',
'rabbi',
'racal',
'rahab',
'raham',
'ramah',
'rapha',
'raphu',
'raven',
'razor',
'recah',
'regem',
'rehob',
'rehsh',
'rehum',
'rekem',
'resen',
'reuel',
'rezin',
'rezon',
'rhesa',
'rhoda',
'ribai',
'river',
'rizia',
'roman',
'rufus',
'ruler',
'rumah',
'sacar',
'salem',
'salim',
'sallu',
'salma',
'samos',
'sarah',
'sarid',
'satan',
'sceva',
'sebam',
'segub',
'selah',
'seled',
'seneh',
'senir',
'serah',
'sered',
'serug',
'seven',
'shama',
'shank',
'shaul',
'sheal',
'sheba',
'sheep',
'sheik',
'shema',
'sheol',
'sheva',
'shion',
'shiza',
'shobi',
'shuah',
'shual',
'shuni',
'sidon',
'sihon',
'silas',
'silla',
'simon',
'sinai',
'sinew',
'sivan',
'slave',
'sleep',
'sling',
'smoke',
'snail',
'snake',
'snare',
'sodom',
'sotai',
'south',
'spain',
'spear',
'spell',
'spelt',
'spice',
'spies',
'spoil',
'staff',
'stake',
'stall',
'stone',
'stork',
'straw',
'sweat',
'swift',
'swine',
'sword',
'syene',
'syria',
'tabor',
'tahan',
'tamar',
'tarea',
'tebah',
'teeth',
'tehth',
'tekel',
'tekoa',
'telah',
'telam',
'telem',
'temah',
'teman',
'terah',
'thief',
'thigh',
'thorn',
'thumb',
'tibni',
'tidal',
'tilon',
'timna',
'timon',
'tiras',
'tiria',
'tithe',
'titus',
'tolad',
'topaz',
'torch',
'tower',
'trees',
'trial',
'tribe',
'troas',
'truth',
'tubal',
'tutor',
'ulcer',
'ummah',
'uncle',
'uphaz',
'uriah',
'uriel',
'uthai',
'uzzah',
'uzzia',
'vaheb',
'vapor',
'vedan',
'venom',
'viper',
'voice',
'wages',
'wagon',
'walls',
'watch',
'water',
'weeds',
'wheat',
'wheel',
'white',
'widow',
'woman',
'world',
'wrath',
'yeast',
'yiron',
'yohdh',
'zabad',
'zabdi',
'zabud',
'zadok',
'zaham',
'zattu',
'zayin',
'zebah',
'zebra',
'zebul',
'zedad',
'zelek',
'zenan',
'zenas',
'zepho',
'zerah',
'zeror',
'zibia',
'zimri',
'zizah',
'zobah',
'zohar',
'zorah',
'zuzim',
]

export const allWords = [...answers, ...allowedGuesses]
