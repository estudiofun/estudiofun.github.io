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

const answers = [
  'husim',
  'ribai',
  'atlai',
  'kidón',
  'medán',
  'telam',
  'piram',
  'jabés',
  'qadés',
  'sesán',
  'jabné',
  'noche',
  'riblá',
  'zefón',
  'parán',
  'misia',
  'sihor',
  'asimá',
  'recta',
  'jaasú',
  'luhit',
  'rocío',
  'ahavá',
  'bamot',
  'jabín',
  'sémer',
  'lanza',
  'ahzai',
  'áspid',
  'josué',
  'huram',
  'javán',
  'hamán',
  'jalón',
  'arumá',
  'sauce',
  'carpo',
  'ataya',
  'rabit',
  'nófah',
  'cobra',
  'ébano',
  'zabud',
  'asnah',
  'zenán',
  'libra',
  'haqoz',
  'niños',
  'eliam',
  'sefar',
  'guíah',
  'tumim',
  'temor',
  'kelal',
  'supim',
  'héfer',
  'janai',
  'mujer',
  'punón',
  'betún',
  'fuego',
  'marca',
  'heces',
  'jonás',
  'leche',
  'nodab',
  'suelo',
  'árbol',
  'gabai',
  'mirmá',
  'ánimo',
  'medad',
  'sélef',
  'ramot',
  'josec',
  'cozbí',
  'rimón',
  'anaya',
  'jagur',
  'jebús',
  'pispá',
  'ananí',
  'harum',
  'saraf',
  'zetar',
  'zidim',
  'zéret',
  'hades',
  'omega',
  'amram',
  'honda',
  'santo',
  'semaá',
  'judas',
  'asbea',
  'huldá',
  'bezai',
  'lasea',
  'qohat',
  'qamón',
  'safán',
  'simeí',
  'ahián',
  'caleb',
  'mólek',
  'reayá',
  'timná',
  'plata',
  'magog',
  'yirón',
  'ibhar',
  'tacha',
  'péleg',
  'ahlai',
  'gahar',
  'carro',
  'malta',
  'sobai',
  'pafos',
  'késed',
  'biztá',
  'béker',
  'tiqvá',
  'asjur',
  'jafet',
  'rubén',
  'gazez',
  'cesta',
  'joram',
  'adiná',
  'quisí',
  'zabdí',
  'braza',
  'rohgá',
  'rézef',
  'baruc',
  'maría',
  'abida',
  'abiud',
  'padón',
  'rizpá',
  'hasem',
  'nardo',
  'betel',
  'pavor',
  'señor',
  'valle',
  'jején',
  'hélef',
  'minit',
  'besai',
  'ésheq',
  'náhat',
  'hamón',
  'zeruá',
  'hotam',
  'guiló',
  'sarar',
  'bézeq',
  'ancla',
  'maacá',
  'hamul',
  'hatús',
  'jefté',
  'brote',
  'ficol',
  'nezib',
  'lésem',
  'moral',
  'amnón',
  'sitim',
  'marta',
  'ahbán',
  'tamar',
  'mehir',
  'sasaq',
  'nahás',
  'firma',
  'hoham',
  'hilar',
  'coser',
  'berea',
  'uriya',
  'vapor',
  'abner',
  'jubal',
  'asvat',
  'heres',
  'shión',
  'sinar',
  'zeres',
  'laqum',
  'nabot',
  'calle',
  'tejer',
  'isías',
  'trigo',
  'abihu',
  'ponto',
  'ezbón',
  'zefat',
  'betul',
  'raham',
  'homam',
  'golán',
  'jézer',
  'kitim',
  'sebat',
  'padán',
  'náham',
  'tinta',
  'freno',
  'siega',
  'arpad',
  'misal',
  'isaac',
  'akkad',
  'acaya',
  'peces',
  'datán',
  'libná',
  'paulo',
  'brazo',
  'mitqá',
  'cueva',
  'sobac',
  'bered',
  'salim',
  'mundo',
  'horam',
  'seirá',
  'tehth',
  'hagrí',
  'gaita',
  'bézer',
  'jesús',
  'hazor',
  'hadar',
  'sofac',
  'sacar',
  'kerán',
  'makir',
  'humtá',
  'galim',
  'sobeq',
  'bicrí',
  'helbá',
  'corzo',
  'bolsa',
  'simrí',
  'ladán',
  'muslo',
  'hodes',
  'troas',
  'jarro',
  'jaula',
  'lamec',
  'nagai',
  'labán',
  'hoglá',
  'isbah',
  'dedán',
  'lepra',
  'diqlá',
  'jarhá',
  'yohdh',
  'tófel',
  'izías',
  'mahlá',
  'simeá',
  'madai',
  'mosca',
  'rezón',
  'nebat',
  'ocrán',
  'héleb',
  'ibzán',
  'hanok',
  'nahbí',
  'zóhet',
  'canal',
  'siclo',
  'purim',
  'bavai',
  'zérah',
  'nacón',
  'eglón',
  'abdon',
  'teres',
  'adiel',
  'siene',
  'sélah',
  'záyin',
  'barba',
  'litro',
  'mélec',
  'honra',
  'zalaf',
  'rizía',
  'jasén',
  'raqón',
  'plomo',
  'perla',
  'salún',
  'samot',
  'dimná',
  'dagón',
  'ardón',
  'jadón',
  'jorai',
  'itrán',
  'méred',
  'apaim',
  'adria',
  'aarón',
  'pitom',
  'jotbá',
  'adaya',
  'haguí',
  'argob',
  'difat',
  'necio',
  'pared',
  'hotir',
  'imnah',
  'baalá',
  'reino',
  'mamré',
  'ayuno',
  'harim',
  'qartá',
  'sotai',
  'diván',
  'adino',
  'seres',
  'talón',
  'shaúl',
  'amigo',
  'mahlí',
  'hielo',
  'idbás',
  'arado',
  'tirzá',
  'pélet',
  'sagué',
  'aveos',
  'quiná',
  'resto',
  'sipai',
  'meres',
  'bokim',
  'calné',
  'abdón',
  'tébah',
  'paltí',
  'vaheb',
  'ester',
  'disán',
  'mente',
  'festo',
  'ahíya',
  'reumá',
  'pacto',
  'tabat',
  'ittai',
  'elasá',
  'sineo',
  'madre',
  'tiría',
  'keván',
  'amiel',
  'aczib',
  'sibmá',
  'barro',
  'izhar',
  'sasai',
  'peqod',
  'zebul',
  'rémet',
  'zacur',
  'rollo',
  'hosea',
  'nebai',
  'zaham',
  'jesúa',
  'tribu',
  'jahdó',
  'siván',
  'réfah',
  'teñir',
  'gaham',
  'adamá',
  'radai',
  'jetró',
  'jafía',
  'micrí',
  'jehúd',
  'oholá',
  'tabor',
  'haref',
  'rodas',
  'tilón',
  'tebez',
  'refán',
  'samir',
  'kerub',
  'hélem',
  'zofai',
  'jéred',
  'hanán',
  'uzías',
  'sarid',
  'ezbai',
  'hésed',
  'samai',
  'sehón',
  'sefam',
  'rueca',
  'jucal',
  'elihú',
  'isiya',
  'manto',
  'papel',
  'sitná',
  'emaús',
  'tomás',
  'ornán',
  'uziel',
  'josés',
  'siria',
  'sarón',
  'pérez',
  'baasá',
  'cerdo',
  'janim',
  'aziel',
  'libro',
  'zedad',
  'raqat',
  'baile',
  'jasón',
  'zipor',
  'haruz',
  'hidai',
  'pisón',
  'beulá',
  'eldaá',
  'sitrí',
  'janes',
  'césar',
  'gazam',
  'token',
  'llave',
  'moloc',
  'palal',
  'deuel',
  'pasac',
  'ahirá',
  'uriel',
  'jabal',
  'husai',
  'harán',
  'árabe',
  'laadá',
  'arete',
  'iftah',
  'tubal',
  'efrén',
  'india',
  'canto',
  'adlai',
  'lucas',
  'beten',
  'arena',
  'pisgá',
  'merab',
  'cabul',
  'bohán',
  'horno',
  'hatil',
  'sobal',
  'héleq',
  'sello',
  'tutor',
  'neiel',
  'gatam',
  'tirás',
  'puñal',
  'teqoa',
  'jarib',
  'mesec',
  'hobab',
  'jacob',
  'midín',
  'cetro',
  'helam',
  'nuera',
  'qarqá',
  'padre',
  'nadab',
  'asaya',
  'hagab',
  'asdod',
  'samos',
  'équer',
  'zéleq',
  'ágabo',
  'naará',
  'timeo',
  'milcá',
  'holón',
  'simón',
  'bétah',
  'aguja',
  'jabez',
  'amaná',
  'globo',
  'bedad',
  'peres',
  'halah',
  'flujo',
  'zorra',
  'jasub',
  'bilgá',
  'lotán',
  'horeb',
  'séber',
  'misam',
  'cinto',
  'darío',
  'verde',
  'pedro',
  'zofar',
  'hiram',
  'táhat',
  'husam',
  'ammón',
  'goyim',
  'azbuq',
  'torta',
  'hilel',
  'viuda',
  'grava',
  'sunem',
  'lidia',
  'pinón',
  'hadid',
  'harod',
  'bigtá',
  'hezró',
  'cabra',
  'aquim',
  'rezín',
  'jairo',
  'hamor',
  'somer',
  'éxodo',
  'primo',
  'idalá',
  'clavo',
  'safat',
  'amasá',
  'ángel',
  'sucot',
  'siyón',
  'behth',
  'safir',
  'horeo',
  'jakín',
  'jotán',
  'calnó',
  'baará',
  'abiel',
  'latín',
  'tisri',
  'pitón',
  'carga',
  'cielo',
  'dátil',
  'zafón',
  'mical',
  'rafah',
  'barac',
  'hormá',
  'trono',
  'tazón',
  'jeque',
  'saulo',
  'araña',
  'rahab',
  'sinab',
  'nabal',
  'seles',
  'iqués',
  'harif',
  'huqoq',
  'hatac',
  'témah',
  'selah',
  'tibní',
  'coral',
  'sinaí',
  'tolad',
  'ónice',
  'cebra',
  'bozrá',
  'silem',
  'gosén',
  'schin',
  'tafat',
  'maluc',
  'zóhar',
  'plaga',
  'bozal',
  'culpa',
  'ágata',
  'edrei',
  'ritmá',
  'hadad',
  'gueba',
  'gómer',
  'néfeg',
  'gamul',
  'julia',
  'kemós',
  'acbor',
  'noble',
  'félix',
  'zébah',
  'raamá',
  'acsaf',
  'maqaz',
  'censo',
  'tizón',
  'abeja',
  'cabón',
  'eliel',
  'nahúm',
  'jaqué',
  'mateo',
  'beryl',
  'bedán',
  'sebam',
  'hélez',
  'hegai',
  'oruga',
  'polvo',
  'jamín',
  'jaspe',
  'estón',
  'aaron',
  'tirio',
  'yahvé',
  'sérah',
  'rueda',
  'safam',
  'sakía',
  'savsá',
  'nóbah',
  'jehth',
  'zofah',
  'resen',
  'mozah',
  'pélez',
  'soham',
  'janaí',
  'abrán',
  'hofní',
  'falta',
  'laisa',
  'nayot',
  'aroer',
  'hijos',
  'palmo',
  'madón',
  'gallo',
  'éfeso',
  'héber',
  'pablo',
  'hofrá',
  'abiel',
  'cedro',
  'hacha',
  'jérah',
  'hurai',
  'duelo',
  'qatat',
  'niger',
  'jéser',
  'yelmo',
  'natán',
  'segub',
  'cauda',
  'elead',
  'peste',
  'burla',
  'jalam',
  'babel',
  'seerá',
  'ahiam',
  'perro',
  'jobab',
  'nerón',
  'negro',
  'helón',
  'perés',
  'jacán',
  'escol',
  'jeiel',
  'ibsam',
  'séred',
  'ahará',
  'meleá',
  'bebai',
  'derbe',
  'justo',
  'queso',
  'arioc',
  'esbán',
  'pilhá',
  'hezir',
  'jáhat',
  'aldea',
  'mirra',
  'aniam',
  'télah',
  'afeqá',
  'cisne',
  'kebar',
  'sisaq',
  'ʼálef',
  'mesac',
  'talla',
  'zabad',
  'lejía',
  'oseas',
  'julio',
  'cresa',
  'eldad',
  'sesai',
  'alfeo',
  'samlá',
  'horem',
  'binuí',
  'samah',
  'zarza',
  'grasa',
  'balac',
  'nariz',
  'noemí',
  'naamá',
  'urías',
  'olivo',
  'salai',
  'pesca',
  'zilpá',
  'zenas',
  'kelub',
  'arnán',
  'zetam',
  'petor',
  'torre',
  'garza',
  'siete',
  'media',
  'rehúm',
  'oeste',
  'télem',
  'vofsí',
  'dotán',
  'lahad',
  'joelá',
  'jatir',
  'galgo',
  'besai',
  'sobab',
  'podón',
  'hupim',
  'diblá',
  'junco',
  'arieh',
  'máhat',
  'senaá',
  'carmí',
  'perga',
  'ebrón',
  'zetán',
  'loida',
  'cardo',
  'asiel',
  'azgad',
  'hilén',
  'buquí',
  'zimrí',
  'sirte',
  'siloé',
  'nacor',
  'matán',
  'racal',
  'señal',
  'basán',
  'jetur',
  'harsá',
  'gaddí',
  'dodai',
  'itnán',
  'bekja',
  'arpón',
  'dibón',
  'zofim',
  'dibrí',
  'masal',
  'sesac',
  'tadeo',
  'abihú',
  'istob',
  'rifat',
  'nisán',
  'liqhí',
  'zacai',
  'david',
  'sudor',
  'cefas',
  'zizah',
  'reuel',
  'haroé',
  'demas',
  'héled',
  'accad',
  'sadoc',
  'eliud',
  'silhí',
  'abyss',
  'obras',
  'baaná',
  'juana',
  'zibía',
  'bineá',
  'abías',
  'bered',
  'zeror',
  'mesón',
  'isbaq',
  'regio',
  'afías',
  'tarso',
  'bilhá',
  'labio',
  'azote',
  'jorim',
  'molid',
  'salum',
  'vasti',
  'pesar',
  'ispán',
  'hemam',
  'lomos',
  'carne',
  'bozez',
  'zabai',
  'campo',
  'jeuel',
  'etnán',
  'quíos',
  'hores',
  'algum',
  'homer',
  'lirio',
  'qayín',
  'abram',
  'salmá',
  'jadúa',
  'sicar',
  'moria',
  'elías',
  'arvad',
  'eqrón',
  'licia',
  'gareb',
  'milla',
  'temán',
  'pirro',
  'muros',
  'adadá',
  'oveja',
  'nieve',
  'eliab',
  'malco',
  'abiud',
  'dolor',
  'qalai',
  'dofqá',
  'abaná',
  'silsá',
  'jéter',
  'hemán',
  'hanés',
  'beerí',
  'hanún',
  'péqah',
  'altar',
  'canon',
  'rehob',
  'mahol',
  'mirto',
  'pluma',
  'elisá',
  'azubá',
  'tebet',
  'setur',
  'zuzim',
  'meroz',
  'tófet',
  'serug',
  'itiel',
  'almón',
  'galal',
  'matat',
  'gozán',
  'sueño',
  'nehúm',
  'ninfa',
  'enaim',
  'jonam',
  'jáhaz',
  'hasub',
  'masah',
  'abidá',
  'lahmí',
  'jerbo',
  'senir',
  'marah',
  'alván',
  'belly',
  'jetet',
  'lagar',
  'judea',
  'casia',
  'atará',
  'zéker',
  'mismá',
  'séled',
  'belén',
  'sifrá',
  'birsá',
  'apfia',
  'eflal',
  'kesil',
  'azmón',
  'addar',
  'beerá',
  'marot',
  'secta',
  'eneas',
  'ariel',
  'jazer',
  'efrat',
  'setar',
  'reina',
  'debir',
  'jaziz',
  'ʽáyin',
  'vedán',
  'tidal',
  'zicrí',
  'sabtá',
  'dimón',
  'cnido',
  'hatat',
  'azeqá',
  'cusán',
  'efrón',
  'recab',
  'jared',
  'joglí',
  'hasum',
  'aserá',
  'libní',
  'danza',
  'tarea',
  'résef',
  'cálah',
  'nimrá',
  'samúa',
  'habor',
  'eliqá',
  'sémed',
  'mupim',
  'damán',
  'lucio',
  'abner',
  'trama',
  'sazón',
  'arabá',
  'tahas',
  'jadai',
  'ahlab',
  'parós',
  'nereo',
  'cosam',
  'adnah',
  'pulga',
  'azizá',
  'disón',
  'salem',
  'norte',
  'lakís',
  'iriya',
  'sakut',
  'yézer',
  'bocrú',
  'judit',
  'nimsí',
  'nafís'
]

const allowedGuesses = [
  "guerá",
  "nieve",
  "hueso",
  "titan",
  "flujo",
  "disco",
  "raz\xf3n",
  "mural",
  "abril",
  "vejez",
  "falso",
  "ca\xf1\xf3n",
  "obeso",
  "metal",
  "avena",
  "rubia",
  "pieza",
  "cuero",
  "noche",
  "bingo",
  "corto",
  "multa",
  "nieto",
  "dieta",
  "mosca",
  "nadal",
  "lider",
  "cerco",
  "rocio",
  "apoyo",
  "secta",
  "ganar",
  "besar",
  "novio",
  "albur",
  "litio",
  "llaga",
  "rueda",
  "corta",
  "feliz",
  "miope",
  "mojar",
  "cesta",
  "soplo",
  "nueve",
  "radio",
  "sexto",
  "sucio",
  "papel",
  "huevo",
  "polar",
  "rotar",
  "fuego",
  "lucir",
  "macho",
  "braza",
  "serio",
  "libra",
  "enano",
  "salsa",
  "ciego",
  "mujer",
  "sauna",
  "malta",
  "civil",
  "flota",
  "chile",
  "acudo",
  "modas",
  "criar",
  "hurto",
  "latir",
  "risas",
  "ganso",
  "suiza",
  "oto\xf1o",
  "suelo",
  "\xe9xito",
  "caber",
  "\xe9pica",
  "perra",
  "juego",
  "\xedgneo",
  "ingle",
  "mango",
  "ca\xedda",
  "doler",
  "\xe1lbum",
  "sudar",
  "duque",
  "curro",
  "musgo",
  "var\xf3n",
  "crear",
  "carne",
  "ovulo",
  "nivel",
  "villa",
  "moral",
  "parte",
  "anexo",
  "tapiz",
  "fecha",
  "sesgo",
  "ligar",
  "chino",
  "patio",
  "votar",
  "torso",
  "avi\xf3n",
  "dudar",
  "forja",
  "odiar",
  "\xfatero",
  "cauce",
  "hogar",
  "relax",
  "yelmo",
  "regla",
  "marzo",
  "cairo",
  "a\xe9reo",
  "negro",
  "modal",
  "caldo",
  "museo",
  "abrir",
  "l\xe1ser",
  "signo",
  "nariz",
  "peine",
  "turno",
  "coche",
  "pleno",
  "fibra",
  "faena",
  "sitio",
  "balsa",
  "\xe1mbar",
  "recta",
  "aquel",
  "impar",
  "tonto",
  "tirar",
  "caras",
  "fluir",
  "jap\xf3n",
  "lugar",
  "coger",
  "traza",
  "tibio",
  "tenis",
  "monto",
  "curva",
  "oveja",
  "rumor",
  "sobra",
  "helio",
  "\xe1baco",
  "gallo",
  "trama",
  "moler",
  "barro",
  "bando",
  "lista",
  "terna",
  "claro",
  "burla",
  "salir",
  "magia",
  "boxeo",
  "combo",
  "arepa",
  "d\xf3lar",
  "rifar",
  "ideal",
  "cinco",
  "cenar",
  "selva",
  "ray\xf3n",
  "tigre",
  "\xf3pera",
  "clave",
  "arp\xf3n",
  "karma",
  "subir",
  "banda",
  "cavar",
  "tenaz",
  "prima",
  "cerda",
  "arder",
  "pa\xf1al",
  "mixta",
  "lim\xf3n",
  "buena",
  "esp\xeda",
  "horno",
  "aguda",
  "polea",
  "sif\xf3n",
  "\xe1tomo",
  "cisne",
  "sufro",
  "sorda",
  "quedo",
  "te\xf1ir",
  "novia",
  "sordo",
  "tes\xf3n",
  "curso",
  "suena",
  "queso",
  "frase",
  "flaco",
  "rubio",
  "drama",
  "traje",
  "calvo",
  "suero",
  "ebrio",
  "\xe1rbol",
  "gasto",
  "golfo",
  "cacho",
  "primo",
  "rombo",
  "falsa",
  "diosa",
  "flaca",
  "bah\xeda",
  "dupla",
  "minar",
  "ilesa",
  "\xfanica",
  "viaje",
  "anual",
  "gansa",
  "muela",
  "zorro",
  "nuevo",
  "sutil",
  "dogma",
  "rimar",
  "mente",
  "libro",
  "chula",
  "rev\xe9s",
  "campo",
  "chico",
  "causa",
  "perro",
  "junto",
  "fauno",
  "digno",
  "tabla",
  "tocar",
  "culta",
  "piojo",
  "p\xedvot",
  "droga",
  "cifra",
  "monte",
  "zurda",
  "cromo",
  "kayak",
  "frita",
  "marea",
  "\xf3xido",
  "salmo",
  "fresa",
  "nadar",
  "presa",
  "bamb\xfa",
  "arena",
  "acoso",
  "b\xf3xer",
  "panda",
  "siega",
  "siete",
  "junio",
  "india",
  "marca",
  "abajo",
  "vac\xedo",
  "andes",
  "decir",
  "flama",
  "helar",
  "tarea",
  "danza",
  "poeta",
  "negra",
  "pacto",
  "pollo",
  "noble",
  "rat\xf3n",
  "bolsa",
  "lirio",
  "turco",
  "buz\xf3n",
  "fut\xf3n",
  "perla",
  "firme",
  "amado",
  "hinc\xf3",
  "plaza",
  "cabra",
  "regio",
  "cedro",
  "turba",
  "polio",
  "tropa",
  "luego",
  "cargo",
  "canal",
  "grama",
  "sabio",
  "viudo",
  "cocoa",
  "\xfanico",
  "jaula",
  "peral",
  "pulpa",
  "gripe",
  "cielo",
  "capta",
  "m\xf3vil",
  "icono",
  "canoa",
  "valle",
  "mixto",
  "t\xfanel",
  "marco",
  "ba\xf1ar",
  "vista",
  "troya",
  "hecho",
  "meter",
  "obvio",
  "palma",
  "guiar",
  "regia",
  "robot",
  "bar\xf3n",
  "brujo",
  "rotor",
  "messi",
  "punta",
  "pedir",
  "tarde",
  "nobel",
  "sidra",
  "pegar",
  "caoba",
  "reina",
  "seg\xfan",
  "sue\xf1o",
  "hielo",
  "feria",
  "mamba",
  "abeja",
  "carta",
  "baila",
  "pausa",
  "error",
  "rumbo",
  "culto",
  "panel",
  "leona",
  "pelar",
  "sucia",
  "polvo",
  "cruel",
  "amiga",
  "padre",
  "traga",
  "liana",
  "acera",
  "samba",
  "color",
  "fumar",
  "andar",
  "cacao",
  "norma",
  "sanar",
  "texto",
  "dicta",
  "dosis",
  "seria",
  "veloz",
  "toque",
  "l\xe1tex",
  "zurdo",
  "blusa",
  "arp\xeda",
  "cerca",
  "reino",
  "honor",
  "abono",
  "mando",
  "grasa",
  "so\xf1ar",
  "caida",
  "magro",
  "copia",
  "guion",
  "v\xeddeo",
  "cesto",
  "oxido",
  "m\xf3dem",
  "circo",
  "cegar",
  "coral",
  "erizo",
  "chica",
  "huida",
  "plano",
  "\xe1cido",
  "antro",
  "total",
  "bajar",
  "broma",
  "carga",
  "remar",
  "bella",
  "monje",
  "lenta",
  "rural",
  "arroz",
  "costa",
  "fruto",
  "cauto",
  "folio",
  "mansa",
  "roble",
  "oeste",
  "mundo",
  "pulpo",
  "caj\xf3n",
  "gnomo",
  "lucho",
  "armar",
  "bruja",
  "visto",
  "cazar",
  "ruina",
  "vello",
  "falla",
  "\xe1nimo",
  "bicho",
  "calma",
  "letra",
  "placa",
  "tecla",
  "acuso",
  "f\xe1cil",
  "misil",
  "forro",
  "rival",
  "sue\xf1a",
  "a\xe9rea",
  "furor",
  "duelo",
  "buf\xf3n",
  "sacar",
  "se\xf1or",
  "cari\xe9",
  "racha",
  "prisa",
  "due\xf1a",
  "clavo",
  "cerdo",
  "flora",
  "piano",
  "panal",
  "radar",
  "cueva",
  "bidet",
  "pesca",
  "tumor",
  "plomo",
  "beber",
  "local",
  "guapo",
  "hebra",
  "yerba",
  "rapel",
  "silla",
  "himno",
  "monja",
  "clara",
  "api\xf1o",
  "recto",
  "burro",
  "volar",
  "acaso",
  "rusia",
  "valla",
  "cruce",
  "quien",
  "ansia",
  "oasis",
  "nadie",
  "fetal",
  "fre\xedr",
  "pesar",
  "se\xf1al",
  "magno",
  "firma",
  "colmo",
  "viral",
  "menta",
  "pizza",
  "tengo",
  "ileso",
  "gamba",
  "canon",
  "man\xeda",
  "cameo",
  "vivir",
  "furia",
  "rompe",
  "fallo",
  "oruga",
  "julio",
  "alzar",
  "altar",
  "llama",
  "calor",
  "cobra",
  "salvo",
  "l\xe1piz",
  "playa",
  "crema",
  "medir",
  "ducha",
  "acida",
  "fisco",
  "fl\xfaor",
  "palmo",
  "tango",
  "cobre",
  "ninja",
  "censo",
  "apodo",
  "esqu\xed",
  "hojea",
  "magra",
  "rompo",
  "agria",
  "chulo",
  "al\xeden",
  "bueno",
  "tejer",
  "vaci\xf3",
  "grano",
  "jugar",
  "deseo",
  "ostra",
  "apaga",
  "hotel",
  "tener",
  "ictus",
  "exijo",
  "toldo",
  "metro",
  "d\xf3nut",
  "atroz",
  "\xe1ngel",
  "hongo",
  "fot\xf3n",
  "golpe",
  "pu\xf1al",
  "ronda",
  "fuera",
  "lat\xedn",
  "cofre",
  "talar",
  "tilde",
  "canto",
  "hueco",
  "rezar",
  "calle",
  "pluma",
  "orden",
  "vieja",
  "humor",
  "fusil",
  "f\xf3sil",
  "usual",
  "favor",
  "enero",
  "leche",
  "calza",
  "fruta",
  "comer",
  "p\xedxel",
  "usted",
  "rango",
  "pitar",
  "bomba",
  "bamba",
  "manco",
  "robar",
  "punto",
  "preso",
  "poder",
  "alero",
  "gotea",
  "doblo",
  "rabia",
  "nunca",
  "dulce",
  "tribu",
  "forma",
  "agudo",
  "rollo",
  "rugby",
  "jab\xf3n",
  "torta",
  "hiato",
  "diodo",
  "obvia",
  "riego",
  "temor",
  "trozo",
  "lunar",
  "motor",
  "cable",
  "cagar",
  "pase\xf3",
  "banal",
  "union",
  "media",
  "mamut",
  "tedio",
  "labio",
  "bombo",
  "rasgo",
  "l\xedder",
  "reloj",
  "raz\xf3n",
  "torre",
  "jarra",
  "laica",
  "ocaso",
  "amigo",
  "d\xe9bil",
  "sabor",
  "menor",
  "indio",
  "dolor",
  "honra",
  "obesa",
  "techo",
  "ajeno",
  "tinte",
  "l\xe9mur",
  "plana",
  "caigo",
  "quema",
  "bat\xf3n",
  "f\xe9mur",
  "bolso",
  "rodar",
  "cabal",
  "ata\xfad",
  "agrio",
  "atril",
  "pelea",
  "donar",
  "feroz",
  "linda",
  "d\xe1til",
  "farol",
  "norte",
  "rasta",
  "da\xf1ar",
  "mot\xedn",
  "negar",
  "gorra",
  "mafia",
  "letal",
  "lepra",
  "\xe1rabe",
  "lat\xf3n",
  "angel",
  "p\xe1del",
  "pauta",
  "legua",
  "freno",
  "logro",
  "goteo",
  "rigor",
  "pizca",
  "magma",
  "\xf3valo",
  "virgo",
  "cursi",
  "batir",
  "momia",
  "aleta",
  "plaga",
  "apa\xf1a",
  "llen\xf3",
  "vigor",
  "adobo",
  "junta",
  "pagar",
  "ajena",
  "rodeo",
  "\xe1cida",
  "plena",
  "palco",
  "asado",
  "ayuda",
  "magna",
  "vibra",
  "citar",
  "pulso",
  "mayor",
  "termo",
  "mes\xf3n",
  "fondo",
  "tesis",
  "mueca",
  "calca",
  "solar",
  "prado",
  "pista",
  "sudor",
  "praga",
  "polen",
  "aroma",
  "nuera",
  "plata",
  "orina",
  "libre",
  "h\xe1bil",
  "barba",
  "f\xe9nix",
  "fiera",
  "hiena",
  "cloro",
  "legal",
  "jaque",
  "ozono",
  "caspa",
  "brazo",
  "act\xfaa",
  "azada",
  "cup\xf3n",
  "sedar",
  "queja",
  "peaje",
  "manta",
  "alg\xfan",
  "poema",
  "bruto",
  "lucha",
  "pinza",
  "ruido",
  "barca",
  "joder",
  "litro",
  "lento",
  "bello",
  "capaz",
  "floja",
  "pasta",
  "encia",
  "clase",
  "ciega",
  "congo",
  "pez\xf3n",
  "motel",
  "ara\xf1a",
  "gorda",
  "enana",
  "venda",
  "estoy",
  "oigan",
  "chivo",
  "aliar",
  "tinta",
  "pecho",
  "ocupa",
  "mambo",
  "barco",
  "casco",
  "kenia",
  "creer",
  "plato",
  "mudar",
  "apnea",
  "manso",
  "crudo",
  "busto",
  "bromo",
  "ritmo",
  "banco",
  "simio",
  "deber",
  "\xe9tica",
  "viejo",
  "labor",
  "tarot",
  "fauna",
  "china",
  "liceo",
  "sismo",
  "d\xf3cil",
  "acero",
  "horda",
  "salud",
  "l\xednea",
  "carpa",
  "celta",
  "sushi",
  "tonta",
  "parto",
  "virar",
  "pecar",
  "falta",
  "narco",
  "guapa",
  "miedo",
  "fugar",
  "medio",
  "tenor",
  "regar",
  "choca",
  "pared",
  "arden",
  "pasar",
  "genia",
  "herir",
  "savia",
  "posar",
  "segar",
  "vapor",
  "falda",
  "bel\xe9n",
  "tramo",
  "corre",
  "madre",
  "zorra",
  "koala",
  "cerro",
  "lecho",
  "romeo",
  "morir",
  "aguja",
  "viuda",
  "botar",
  "rifle",
  "serie",
  "canje",
  "\xe9tico",
  "bravo",
  "capto",
  "\xe9pico",
  "ameba",
  "muero"
]

export const allWords = [...answers, ...allowedGuesses]