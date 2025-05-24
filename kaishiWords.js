const kaishiWords = [
    {
        "japanese": "私",
        "romaji": "watashi",
        "meaning": "I (polite, general)"
    },
    {
        "japanese": "あなた",
        "romaji": "anata",
        "meaning": "you (usually when one doesn't know the person)"
    },
    {
        "japanese": "さん",
        "romaji": "san",
        "meaning": "san"
    },
    {
        "japanese": "彼",
        "romaji": "kare",
        "meaning": "he, him"
    },
    {
        "japanese": "好き",
        "romaji": "suki",
        "meaning": "like, fond of"
    },
    {
        "japanese": "人",
        "romaji": "hito",
        "meaning": "person"
    },
    {
        "japanese": "いい",
        "romaji": "ii",
        "meaning": "good"
    },
    {
        "japanese": "人",
        "romaji": "jin",
        "meaning": "person from (nationality)"
    },
    {
        "japanese": "日本語",
        "romaji": "nihongo",
        "meaning": "Japanese language"
    },
    {
        "japanese": "勉強",
        "romaji": "benkyou",
        "meaning": "study"
    },
    {
        "japanese": "本",
        "romaji": "hon",
        "meaning": "book"
    },
    {
        "japanese": "これ",
        "romaji": "kore",
        "meaning": "this"
    },
    {
        "japanese": "何",
        "romaji": "nani",
        "meaning": "what"
    },
    {
        "japanese": "それ",
        "romaji": "sore",
        "meaning": "that"
    },
    {
        "japanese": "あれ",
        "romaji": "are",
        "meaning": "that over there"
    },
    {
        "japanese": "どれ",
        "romaji": "dore",
        "meaning": "which, what"
    },
    {
        "japanese": "毎日",
        "romaji": "mainichi",
        "meaning": "every day"
    },
    {
        "japanese": "兄",
        "romaji": "ani",
        "meaning": "older brother"
    },
    {
        "japanese": "いる",
        "romaji": "iru",
        "meaning": "have, exist (animate)"
    },
    {
        "japanese": "ある",
        "romaji": "aru",
        "meaning": "have, exist (inanimate)"
    },
    {
        "japanese": "あまり",
        "romaji": "amari",
        "meaning": "(not) very, (not) much"
    },
    {
        "japanese": "今",
        "romaji": "ima",
        "meaning": "now"
    },
    {
        "japanese": "時間",
        "romaji": "jikan",
        "meaning": "time, hour"
    },
    {
        "japanese": "無い",
        "romaji": "nai",
        "meaning": "to not be"
    },
    {
        "japanese": "この",
        "romaji": "kono",
        "meaning": "this one"
    },
    {
        "japanese": "その",
        "romaji": "sono",
        "meaning": "that one"
    },
    {
        "japanese": "あの",
        "romaji": "ano",
        "meaning": "that one there"
    },
    {
        "japanese": "どの",
        "romaji": "dono",
        "meaning": "which one"
    },
    {
        "japanese": "見る",
        "romaji": "miru",
        "meaning": "see, look at"
    },
    {
        "japanese": "全然",
        "romaji": "zenzen",
        "meaning": "(not) at all"
    },
    {
        "japanese": "面白い",
        "romaji": "omoshiroi",
        "meaning": "interesting, amusing"
    },
    {
        "japanese": "する",
        "romaji": "suru",
        "meaning": "do, make"
    },
    {
        "japanese": "なる",
        "romaji": "naru",
        "meaning": "become, result in, come (to do)"
    },
    {
        "japanese": "先生",
        "romaji": "sensei",
        "meaning": "teacher"
    },
    {
        "japanese": "ください",
        "romaji": "kudasai",
        "meaning": "please give..., please do..."
    },
    {
        "japanese": "名前",
        "romaji": "namae",
        "meaning": "name"
    },
    {
        "japanese": "教える",
        "romaji": "oshieru",
        "meaning": "teach, tell"
    },
    {
        "japanese": "ここ",
        "romaji": "koko",
        "meaning": "here"
    },
    {
        "japanese": "そこ",
        "romaji": "soko",
        "meaning": "there"
    },
    {
        "japanese": "あそこ",
        "romaji": "asoko",
        "meaning": "over there"
    },
    {
        "japanese": "どこ",
        "romaji": "doko",
        "meaning": "where"
    },
    {
        "japanese": "置く",
        "romaji": "oku",
        "meaning": "put, place"
    },
    {
        "japanese": "家",
        "romaji": "ie",
        "meaning": "house, home"
    },
    {
        "japanese": "帰る",
        "romaji": "kaeru",
        "meaning": "return, go back"
    },
    {
        "japanese": "話",
        "romaji": "hanashi",
        "meaning": "talk, story"
    },
    {
        "japanese": "知る",
        "romaji": "shiru",
        "meaning": "know"
    },
    {
        "japanese": "彼女",
        "romaji": "kanojo",
        "meaning": "she, her, girlfriend"
    },
    {
        "japanese": "ちゃん",
        "romaji": "chan",
        "meaning": "chan"
    },
    {
        "japanese": "はい",
        "romaji": "hai",
        "meaning": "yes (polite)"
    },
    {
        "japanese": "いいえ",
        "romaji": "iie",
        "meaning": "no (polite)"
    },
    {
        "japanese": "日本",
        "romaji": "nihon",
        "meaning": "Japan"
    },
    {
        "japanese": "学校",
        "romaji": "gakkou",
        "meaning": "school"
    },
    {
        "japanese": "行く",
        "romaji": "iku",
        "meaning": "go"
    },
    {
        "japanese": "明日",
        "romaji": "ashita",
        "meaning": "tomorrow"
    },
    {
        "japanese": "来る",
        "romaji": "kuru",
        "meaning": "come"
    },
    {
        "japanese": "また",
        "romaji": "mata",
        "meaning": "again, also"
    },
    {
        "japanese": "いつ",
        "romaji": "itsu",
        "meaning": "when"
    },
    {
        "japanese": "思う",
        "romaji": "omou",
        "meaning": "think"
    },
    {
        "japanese": "こう",
        "romaji": "kou",
        "meaning": "like this, this kind of"
    },
    {
        "japanese": "そう",
        "romaji": "sou",
        "meaning": "in such manner, that way"
    },
    {
        "japanese": "どう",
        "romaji": "dou",
        "meaning": "how, what"
    },
    {
        "japanese": "会う",
        "romaji": "au",
        "meaning": "meet"
    },
    {
        "japanese": "次",
        "romaji": "tsugi",
        "meaning": "next, subsequent"
    },
    {
        "japanese": "方",
        "romaji": "hou",
        "meaning": "direction, side"
    },
    {
        "japanese": "方",
        "romaji": "kata",
        "meaning": "person (polite form)"
    },
    {
        "japanese": "聞く",
        "romaji": "kiku",
        "meaning": "hear"
    },
    {
        "japanese": "聞く",
        "romaji": "kiku",
        "meaning": "ask"
    },
    {
        "japanese": "お願いします",
        "romaji": "onegaishimasu",
        "meaning": "please"
    },
    {
        "japanese": "分かる",
        "romaji": "wakaru",
        "meaning": "understand"
    },
    {
        "japanese": "よく",
        "romaji": "yoku",
        "meaning": "well"
    },
    {
        "japanese": "よく",
        "romaji": "yoku",
        "meaning": "often"
    },
    {
        "japanese": "考える",
        "romaji": "kangaeru",
        "meaning": "think, consider"
    },
    {
        "japanese": "ありがとうございます",
        "romaji": "arigatougozaimasu",
        "meaning": "thank you (formal)"
    },
    {
        "japanese": "話す",
        "romaji": "hanasu",
        "meaning": "talk, speak"
    },
    {
        "japanese": "もっと",
        "romaji": "motto",
        "meaning": "more, a bit more"
    },
    {
        "japanese": "ゆっくり",
        "romaji": "yukkuri",
        "meaning": "slowly"
    },
    {
        "japanese": "言う",
        "romaji": "iu",
        "meaning": "say"
    },
    {
        "japanese": "友達",
        "romaji": "tomodachi",
        "meaning": "friend, companion"
    },
    {
        "japanese": "待つ",
        "romaji": "matsu",
        "meaning": "wait"
    },
    {
        "japanese": "昨日",
        "romaji": "kinou",
        "meaning": "yesterday"
    },
    {
        "japanese": "町",
        "romaji": "machi",
        "meaning": "town, city"
    },
    {
        "japanese": "高い",
        "romaji": "takai",
        "meaning": "expensive"
    },
    {
        "japanese": "高い",
        "romaji": "takai",
        "meaning": "high, tall"
    },
    {
        "japanese": "一番",
        "romaji": "ichiban",
        "meaning": "(the) most"
    },
    {
        "japanese": "ちょっと",
        "romaji": "chotto",
        "meaning": "a little"
    },
    {
        "japanese": "もう",
        "romaji": "mou",
        "meaning": "already, yet"
    },
    {
        "japanese": "もう",
        "romaji": "mou",
        "meaning": "another, again"
    },
    {
        "japanese": "父",
        "romaji": "chichi",
        "meaning": "(speaker's) father"
    },
    {
        "japanese": "大好き",
        "romaji": "daisuki",
        "meaning": "love"
    },
    {
        "japanese": "母",
        "romaji": "haha",
        "meaning": "(speaker's) mother"
    },
    {
        "japanese": "あげる",
        "romaji": "ageru",
        "meaning": "give (receiver is not in the speaker's group)"
    },
    {
        "japanese": "くれる",
        "romaji": "kureru",
        "meaning": "give (receiver is in the speaker's group)"
    },
    {
        "japanese": "もらう",
        "romaji": "morau",
        "meaning": "receive"
    },
    {
        "japanese": "物",
        "romaji": "mono",
        "meaning": "thing, object"
    },
    {
        "japanese": "君",
        "romaji": "kimi",
        "meaning": "you (to someone of equal or lower status)"
    },
    {
        "japanese": "中",
        "romaji": "naka",
        "meaning": "inside, middle"
    },
    {
        "japanese": "出来る",
        "romaji": "dekiru",
        "meaning": "can do, be good at"
    },
    {
        "japanese": "本当",
        "romaji": "hontou",
        "meaning": "truth, reality"
    },
    {
        "japanese": "立つ",
        "romaji": "tatsu",
        "meaning": "stand, rise"
    },
    {
        "japanese": "前",
        "romaji": "mae",
        "meaning": "front, before"
    },
    {
        "japanese": "入る",
        "romaji": "hairu",
        "meaning": "enter"
    },
    {
        "japanese": "家族",
        "romaji": "kazoku",
        "meaning": "family"
    },
    {
        "japanese": "住む",
        "romaji": "sumu",
        "meaning": "live, reside"
    },
    {
        "japanese": "大きな",
        "romaji": "ookina",
        "meaning": "big, large"
    },
    {
        "japanese": "大きい",
        "romaji": "ookii",
        "meaning": "big, large"
    },
    {
        "japanese": "声",
        "romaji": "koe",
        "meaning": "voice, sound"
    },
    {
        "japanese": "目",
        "romaji": "me",
        "meaning": "eye"
    },
    {
        "japanese": "手",
        "romaji": "te",
        "meaning": "hand"
    },
    {
        "japanese": "上げる",
        "romaji": "ageru",
        "meaning": "raise, increase"
    },
    {
        "japanese": "嫌い",
        "romaji": "kirai",
        "meaning": "dislike"
    },
    {
        "japanese": "おじいさん",
        "romaji": "ojiisan",
        "meaning": "grandfather"
    },
    {
        "japanese": "おばあさん",
        "romaji": "obaasan",
        "meaning": "grandmother"
    },
    {
        "japanese": "元気",
        "romaji": "genki",
        "meaning": "energetic, healthy"
    },
    {
        "japanese": "いつも",
        "romaji": "itsumo",
        "meaning": "always, usually"
    },
    {
        "japanese": "持つ",
        "romaji": "motsu",
        "meaning": "have, hold"
    },
    {
        "japanese": "みんな",
        "romaji": "minna",
        "meaning": "all, everybody"
    },
    {
        "japanese": "使う",
        "romaji": "tsukau",
        "meaning": "use"
    },
    {
        "japanese": "大丈夫",
        "romaji": "daijoubu",
        "meaning": "alright, OK"
    },
    {
        "japanese": "始める",
        "romaji": "hajimeru",
        "meaning": "start"
    },
    {
        "japanese": "今日",
        "romaji": "kyou",
        "meaning": "today"
    },
    {
        "japanese": "部屋",
        "romaji": "heya",
        "meaning": "room"
    },
    {
        "japanese": "悪い",
        "romaji": "warui",
        "meaning": "bad"
    },
    {
        "japanese": "まあ",
        "romaji": "maa",
        "meaning": "well..."
    },
    {
        "japanese": "食べる",
        "romaji": "taberu",
        "meaning": "eat"
    },
    {
        "japanese": "沢山",
        "romaji": "takusan",
        "meaning": "a lot, plenty"
    },
    {
        "japanese": "場所",
        "romaji": "basho",
        "meaning": "place, location"
    },
    {
        "japanese": "呼ぶ",
        "romaji": "yobu",
        "meaning": "call, name"
    },
    {
        "japanese": "動く",
        "romaji": "ugoku",
        "meaning": "move"
    },
    {
        "japanese": "気持ち",
        "romaji": "kimochi",
        "meaning": "feeling, sensation"
    },
    {
        "japanese": "誰",
        "romaji": "dare",
        "meaning": "who"
    },
    {
        "japanese": "子",
        "romaji": "ko",
        "meaning": "child, kid"
    },
    {
        "japanese": "どんな",
        "romaji": "donna",
        "meaning": "what kind of..."
    },
    {
        "japanese": "意味",
        "romaji": "imi",
        "meaning": "meaning, significance"
    },
    {
        "japanese": "言葉",
        "romaji": "kotoba",
        "meaning": "word, language"
    },
    {
        "japanese": "心配",
        "romaji": "shinpai",
        "meaning": "worry"
    },
    {
        "japanese": "様子",
        "romaji": "yousu",
        "meaning": "appearance, state"
    },
    {
        "japanese": "信じる",
        "romaji": "shinjiru",
        "meaning": "to&nbsp;believe, to&nbsp;trust"
    },
    {
        "japanese": "自分",
        "romaji": "jibun",
        "meaning": "self, oneself"
    },
    {
        "japanese": "調べる",
        "romaji": "shiraberu",
        "meaning": "look up, search"
    },
    {
        "japanese": "事",
        "romaji": "koto",
        "meaning": "thing, incident"
    },
    {
        "japanese": "同じ",
        "romaji": "onaji",
        "meaning": "same, identical"
    },
    {
        "japanese": "申し訳ない",
        "romaji": "moushiwakenai",
        "meaning": "sorry, inexcusable"
    },
    {
        "japanese": "もちろん",
        "romaji": "mochiron",
        "meaning": "of course, no doubt"
    },
    {
        "japanese": "とても",
        "romaji": "totemo",
        "meaning": "very"
    },
    {
        "japanese": "楽しい",
        "romaji": "tanoshii",
        "meaning": "fun, enjoyable"
    },
    {
        "japanese": "失礼します",
        "romaji": "shitsureishimasu",
        "meaning": "pardon me, excuse me (e.g. when leaving)"
    },
    {
        "japanese": "手伝う",
        "romaji": "tetsudau",
        "meaning": "to&nbsp;help"
    },
    {
        "japanese": "忙しい",
        "romaji": "isogashii",
        "meaning": "busy, occupied"
    },
    {
        "japanese": "仕事",
        "romaji": "shigoto",
        "meaning": "work, job"
    },
    {
        "japanese": "続ける",
        "romaji": "tsuzukeru",
        "meaning": "to continue, to keep up"
    },
    {
        "japanese": "見せる",
        "romaji": "miseru",
        "meaning": "to&nbsp;show"
    },
    {
        "japanese": "うち",
        "romaji": "uchi",
        "meaning": "one's household"
    },
    {
        "japanese": "約束",
        "romaji": "yakusoku",
        "meaning": "promise, appointment"
    },
    {
        "japanese": "忘れる",
        "romaji": "wasureru",
        "meaning": "to&nbsp;forget"
    },
    {
        "japanese": "守る",
        "romaji": "mamoru",
        "meaning": "to&nbsp;protect, to&nbsp;observe"
    },
    {
        "japanese": "変える",
        "romaji": "kaeru",
        "meaning": "to&nbsp;change, to&nbsp;alter"
    },
    {
        "japanese": "さっき",
        "romaji": "sakki",
        "meaning": "(only) a moment ago"
    },
    {
        "japanese": "今度",
        "romaji": "kondo",
        "meaning": "next time"
    },
    {
        "japanese": "これから",
        "romaji": "korekara",
        "meaning": "from now on, after this"
    },
    {
        "japanese": "止める",
        "romaji": "tomeru",
        "meaning": "to&nbsp;stop (at some place)"
    },
    {
        "japanese": "止める",
        "romaji": "yameru",
        "meaning": "to&nbsp;stop (doing something)"
    },
    {
        "japanese": "頼む",
        "romaji": "tanomu",
        "meaning": "to&nbsp;ask, to&nbsp;request"
    },
    {
        "japanese": "許す",
        "romaji": "yurusu",
        "meaning": "to&nbsp;forgive, to&nbsp;permit"
    },
    {
        "japanese": "嬉しい",
        "romaji": "ureshii",
        "meaning": "happy, glad"
    },
    {
        "japanese": "頑張る",
        "romaji": "ganbaru",
        "meaning": "to&nbsp;persevere, to&nbsp;do one's best"
    },
    {
        "japanese": "なるほど",
        "romaji": "naruhodo",
        "meaning": "I see, really"
    },
    {
        "japanese": "つまり",
        "romaji": "tsumari",
        "meaning": "in short, basically"
    },
    {
        "japanese": "国",
        "romaji": "kuni",
        "meaning": "country"
    },
    {
        "japanese": "優しい",
        "romaji": "yasashii",
        "meaning": "gentle, kind"
    },
    {
        "japanese": "嫌",
        "romaji": "iya",
        "meaning": "disliking, unwilling (to do)"
    },
    {
        "japanese": "そんなに",
        "romaji": "sonnani",
        "meaning": "that much"
    },
    {
        "japanese": "今回",
        "romaji": "konkai",
        "meaning": "this time"
    },
    {
        "japanese": "夜",
        "romaji": "yoru",
        "meaning": "evening, night"
    },
    {
        "japanese": "買う",
        "romaji": "kau",
        "meaning": "to&nbsp;buy"
    },
    {
        "japanese": "今まで",
        "romaji": "imamade",
        "meaning": "until now"
    },
    {
        "japanese": "奴",
        "romaji": "yatsu",
        "meaning": "that guy, (s)he (usu. derogatory)"
    },
    {
        "japanese": "あいつ",
        "romaji": "aitsu",
        "meaning": "that guy"
    },
    {
        "japanese": "もし",
        "romaji": "moshi",
        "meaning": "if, in the event of..."
    },
    {
        "japanese": "理解",
        "romaji": "rikai",
        "meaning": "understanding, comprehension"
    },
    {
        "japanese": "夢",
        "romaji": "yume",
        "meaning": "dream"
    },
    {
        "japanese": "俺",
        "romaji": "ore",
        "meaning": "I (male)"
    },
    {
        "japanese": "難しい",
        "romaji": "muzukashii",
        "meaning": "difficult"
    },
    {
        "japanese": "今度",
        "romaji": "kondo",
        "meaning": "this time"
    },
    {
        "japanese": "おかしい",
        "romaji": "okashii",
        "meaning": "strange, suspicious"
    },
    {
        "japanese": "男の子",
        "romaji": "otokonoko",
        "meaning": "boy"
    },
    {
        "japanese": "女の子",
        "romaji": "onnanoko",
        "meaning": "girl"
    },
    {
        "japanese": "寝る",
        "romaji": "neru",
        "meaning": "sleep"
    },
    {
        "japanese": "伝える",
        "romaji": "tsutaeru",
        "meaning": "to&nbsp;convey, to&nbsp;transmit"
    },
    {
        "japanese": "小さい",
        "romaji": "chiisai",
        "meaning": "small"
    },
    {
        "japanese": "選ぶ",
        "romaji": "erabu",
        "meaning": "to&nbsp;choose, to&nbsp;elect"
    },
    {
        "japanese": "座る",
        "romaji": "suwaru",
        "meaning": "to&nbsp;sit"
    },
    {
        "japanese": "簡単",
        "romaji": "kantan",
        "meaning": "simple, easy"
    },
    {
        "japanese": "お願い",
        "romaji": "onegai",
        "meaning": "favor"
    },
    {
        "japanese": "進む",
        "romaji": "susumu",
        "meaning": "to&nbsp;move forward"
    },
    {
        "japanese": "全く",
        "romaji": "mattaku",
        "meaning": "entirely, truly"
    },
    {
        "japanese": "なぜ",
        "romaji": "naze",
        "meaning": "why"
    },
    {
        "japanese": "僕",
        "romaji": "boku",
        "meaning": "I (male)"
    },
    {
        "japanese": "水",
        "romaji": "mizu",
        "meaning": "water"
    },
    {
        "japanese": "飲む",
        "romaji": "nomu",
        "meaning": "drink"
    },
    {
        "japanese": "暇",
        "romaji": "hima",
        "meaning": "free, not busy"
    },
    {
        "japanese": "時",
        "romaji": "toki",
        "meaning": "time, occasion"
    },
    {
        "japanese": "時",
        "romaji": "ji",
        "meaning": "hour, o'clock"
    },
    {
        "japanese": "一",
        "romaji": "ichi",
        "meaning": "one"
    },
    {
        "japanese": "二",
        "romaji": "ni",
        "meaning": "two"
    },
    {
        "japanese": "三",
        "romaji": "san",
        "meaning": "three"
    },
    {
        "japanese": "四",
        "romaji": "yon",
        "meaning": "four"
    },
    {
        "japanese": "五",
        "romaji": "go",
        "meaning": "five"
    },
    {
        "japanese": "六",
        "romaji": "roku",
        "meaning": "six"
    },
    {
        "japanese": "七",
        "romaji": "nana",
        "meaning": "seven"
    },
    {
        "japanese": "八",
        "romaji": "hachi",
        "meaning": "eight"
    },
    {
        "japanese": "九",
        "romaji": "kyuu",
        "meaning": "nine"
    },
    {
        "japanese": "十",
        "romaji": "juu",
        "meaning": "ten"
    },
    {
        "japanese": "くん",
        "romaji": "kun",
        "meaning": "kun (usu. used with men younger or of the same age)"
    },
    {
        "japanese": "すみません",
        "romaji": "sumimasen",
        "meaning": "sorry, excuse me"
    },
    {
        "japanese": "やる",
        "romaji": "yaru",
        "meaning": "to&nbsp;do"
    },
    {
        "japanese": "顔",
        "romaji": "kao",
        "meaning": "face"
    },
    {
        "japanese": "今朝",
        "romaji": "kesa",
        "meaning": "this morning"
    },
    {
        "japanese": "出る",
        "romaji": "deru",
        "meaning": "to&nbsp;go out, to&nbsp;leave"
    },
    {
        "japanese": "そして",
        "romaji": "soshite",
        "meaning": "and, and then"
    },
    {
        "japanese": "まだ",
        "romaji": "mada",
        "meaning": "yet, more"
    },
    {
        "japanese": "じゃ",
        "romaji": "ja",
        "meaning": "then, well"
    },
    {
        "japanese": "ため",
        "romaji": "tame",
        "meaning": "sake, purpose"
    },
    {
        "japanese": "ご飯",
        "romaji": "gohan",
        "meaning": "cooked rice, meal"
    },
    {
        "japanese": "ところ",
        "romaji": "tokoro",
        "meaning": "place"
    },
    {
        "japanese": "少し",
        "romaji": "sukoshi",
        "meaning": "a bit, a little while"
    },
    {
        "japanese": "見える",
        "romaji": "mieru",
        "meaning": "be visible"
    },
    {
        "japanese": "違う",
        "romaji": "chigau",
        "meaning": "to&nbsp;differ, to&nbsp;be wrong"
    },
    {
        "japanese": "男",
        "romaji": "otoko",
        "meaning": "man, male"
    },
    {
        "japanese": "ただ",
        "romaji": "tada",
        "meaning": "free"
    },
    {
        "japanese": "ただ",
        "romaji": "tada",
        "meaning": "simply"
    },
    {
        "japanese": "人間",
        "romaji": "ningen",
        "meaning": "human being, people"
    },
    {
        "japanese": "作る",
        "romaji": "tsukuru",
        "meaning": "to&nbsp;make, to&nbsp;create"
    },
    {
        "japanese": "感じる",
        "romaji": "kanjiru",
        "meaning": "to&nbsp;feel, to&nbsp;sense"
    },
    {
        "japanese": "上",
        "romaji": "ue",
        "meaning": "up, above"
    },
    {
        "japanese": "強い",
        "romaji": "tsuyoi",
        "meaning": "strong"
    },
    {
        "japanese": "出す",
        "romaji": "dasu",
        "meaning": "to&nbsp;take out"
    },
    {
        "japanese": "笑う",
        "romaji": "warau",
        "meaning": "laugh, smile"
    },
    {
        "japanese": "毎月",
        "romaji": "maitsuki",
        "meaning": "every month"
    },
    {
        "japanese": "毎年",
        "romaji": "maitoshi",
        "meaning": "every year"
    },
    {
        "japanese": "多く",
        "romaji": "ooku",
        "meaning": "many, much"
    },
    {
        "japanese": "くらい",
        "romaji": "kurai",
        "meaning": "approximately, about"
    },
    {
        "japanese": "姉",
        "romaji": "ane",
        "meaning": "older sister"
    },
    {
        "japanese": "弟",
        "romaji": "otouto",
        "meaning": "younger brother"
    },
    {
        "japanese": "妹",
        "romaji": "imouto",
        "meaning": "younger sister"
    },
    {
        "japanese": "力",
        "romaji": "chikara",
        "meaning": "strength, power"
    },
    {
        "japanese": "世界",
        "romaji": "sekai",
        "meaning": "world"
    },
    {
        "japanese": "相手",
        "romaji": "aite",
        "meaning": "partner, opponent"
    },
    {
        "japanese": "姿",
        "romaji": "sugata",
        "meaning": "figure, appearance"
    },
    {
        "japanese": "死ぬ",
        "romaji": "shinu",
        "meaning": "to&nbsp;die"
    },
    {
        "japanese": "早い",
        "romaji": "hayai",
        "meaning": "early"
    },
    {
        "japanese": "早い",
        "romaji": "hayai",
        "meaning": "fast (in terms of time)"
    },
    {
        "japanese": "頭",
        "romaji": "atama",
        "meaning": "head"
    },
    {
        "japanese": "戻る",
        "romaji": "modoru",
        "meaning": "to&nbsp;return, to&nbsp;go back"
    },
    {
        "japanese": "ずっと",
        "romaji": "zutto",
        "meaning": "continuously, the whole time"
    },
    {
        "japanese": "どうして",
        "romaji": "doushite",
        "meaning": "why"
    },
    {
        "japanese": "やっぱり",
        "romaji": "yappari",
        "meaning": "just as I thought, after all"
    },
    {
        "japanese": "つもり",
        "romaji": "tsumori",
        "meaning": "intention, purpose"
    },
    {
        "japanese": "必要",
        "romaji": "hitsuyou",
        "meaning": "necessary, needed"
    },
    {
        "japanese": "終わる",
        "romaji": "owaru",
        "meaning": "to&nbsp;finish, to&nbsp;end"
    },
    {
        "japanese": "者",
        "romaji": "mono",
        "meaning": "person"
    },
    {
        "japanese": "後",
        "romaji": "ato",
        "meaning": "after"
    },
    {
        "japanese": "こちら",
        "romaji": "kochira",
        "meaning": "here, this way"
    },
    {
        "japanese": "向かう",
        "romaji": "mukau",
        "meaning": "to&nbsp;face, to&nbsp;head toward"
    },
    {
        "japanese": "きっと",
        "romaji": "kitto",
        "meaning": "surely, certainly"
    },
    {
        "japanese": "変わる",
        "romaji": "kawaru",
        "meaning": "to&nbsp;change"
    },
    {
        "japanese": "凄い",
        "romaji": "sugoi",
        "meaning": "wonderful, great, a lot"
    },
    {
        "japanese": "女",
        "romaji": "onna",
        "meaning": "woman, girl"
    },
    {
        "japanese": "ちゃんと",
        "romaji": "chanto",
        "meaning": "properly"
    },
    {
        "japanese": "音",
        "romaji": "oto",
        "meaning": "sound"
    },
    {
        "japanese": "体",
        "romaji": "karada",
        "meaning": "body"
    },
    {
        "japanese": "掛ける",
        "romaji": "kakeru",
        "meaning": "to&nbsp;hang, to&nbsp;put on"
    },
    {
        "japanese": "歩く",
        "romaji": "aruku",
        "meaning": "to&nbsp;walk, to&nbsp;go on foot"
    },
    {
        "japanese": "存在",
        "romaji": "sonzai",
        "meaning": "existence, being"
    },
    {
        "japanese": "過ぎる",
        "romaji": "sugiru",
        "meaning": "to&nbsp;exceed, to&nbsp;pass by"
    },
    {
        "japanese": "聞こえる",
        "romaji": "kikoeru",
        "meaning": "can hear"
    },
    {
        "japanese": "受ける",
        "romaji": "ukeru",
        "meaning": "to&nbsp;receive, to&nbsp;accept"
    },
    {
        "japanese": "今年",
        "romaji": "kotoshi",
        "meaning": "this year"
    },
    {
        "japanese": "去年",
        "romaji": "kyonen",
        "meaning": "last year"
    },
    {
        "japanese": "来年",
        "romaji": "rainen",
        "meaning": "next year"
    },
    {
        "japanese": "殺す",
        "romaji": "korosu",
        "meaning": "to&nbsp;kill"
    },
    {
        "japanese": "まさか",
        "romaji": "masaka",
        "meaning": "by no means, never!"
    },
    {
        "japanese": "絶対",
        "romaji": "zettai",
        "meaning": "absolutely"
    },
    {
        "japanese": "理由",
        "romaji": "riyuu",
        "meaning": "reason, cause"
    },
    {
        "japanese": "口",
        "romaji": "kuchi",
        "meaning": "mouth"
    },
    {
        "japanese": "外",
        "romaji": "soto",
        "meaning": "outside"
    },
    {
        "japanese": "逃げる",
        "romaji": "nigeru",
        "meaning": "to&nbsp;escape, to&nbsp;run away"
    },
    {
        "japanese": "誰か",
        "romaji": "dareka",
        "meaning": "someone"
    },
    {
        "japanese": "まるで",
        "romaji": "marude",
        "meaning": "just like, completely"
    },
    {
        "japanese": "他",
        "romaji": "hoka",
        "meaning": "another, somewhere else"
    },
    {
        "japanese": "他",
        "romaji": "ta",
        "meaning": "other (esp. people and abstract matters)"
    },
    {
        "japanese": "問題",
        "romaji": "mondai",
        "meaning": "problem, question"
    },
    {
        "japanese": "今後",
        "romaji": "kongo",
        "meaning": "after this, in the future"
    },
    {
        "japanese": "普通",
        "romaji": "futsuu",
        "meaning": "normal, regular, average"
    },
    {
        "japanese": "心",
        "romaji": "kokoro",
        "meaning": "heart, mind"
    },
    {
        "japanese": "春",
        "romaji": "haru",
        "meaning": "spring"
    },
    {
        "japanese": "夏",
        "romaji": "natsu",
        "meaning": "summer"
    },
    {
        "japanese": "秋",
        "romaji": "aki",
        "meaning": "fall"
    },
    {
        "japanese": "冬",
        "romaji": "fuyu",
        "meaning": "winter"
    },
    {
        "japanese": "以上",
        "romaji": "ijou",
        "meaning": "... or more, beyond"
    },
    {
        "japanese": "それで",
        "romaji": "sorede",
        "meaning": "then, so"
    },
    {
        "japanese": "生きる",
        "romaji": "ikiru",
        "meaning": "to&nbsp;live, to&nbsp;exist"
    },
    {
        "japanese": "最初",
        "romaji": "saisho",
        "meaning": "first, beginning"
    },
    {
        "japanese": "最後",
        "romaji": "saigo",
        "meaning": "last, final"
    },
    {
        "japanese": "日",
        "romaji": "hi",
        "meaning": "day"
    },
    {
        "japanese": "間",
        "romaji": "aida",
        "meaning": "interval"
    },
    {
        "japanese": "間",
        "romaji": "ma",
        "meaning": "interval, duration of time"
    },
    {
        "japanese": "について",
        "romaji": "nitsuite",
        "meaning": "concerning, regarding"
    },
    {
        "japanese": "左",
        "romaji": "hidari",
        "meaning": "left"
    },
    {
        "japanese": "右",
        "romaji": "migi",
        "meaning": "right"
    },
    {
        "japanese": "感じ",
        "romaji": "kanji",
        "meaning": "feeling, impression"
    },
    {
        "japanese": "胸",
        "romaji": "mune",
        "meaning": "chest"
    },
    {
        "japanese": "表情",
        "romaji": "hyoujou",
        "meaning": "expression, look"
    },
    {
        "japanese": "多い",
        "romaji": "ooi",
        "meaning": "a lot"
    },
    {
        "japanese": "初めて",
        "romaji": "hajimete",
        "meaning": "for the first time"
    },
    {
        "japanese": "無理",
        "romaji": "muri",
        "meaning": "unreasonable, impossible"
    },
    {
        "japanese": "欲しい",
        "romaji": "hoshii",
        "meaning": "wanting, wishing for"
    },
    {
        "japanese": "ごめん",
        "romaji": "gomen",
        "meaning": "sorry"
    },
    {
        "japanese": "覚える",
        "romaji": "oboeru",
        "meaning": "to&nbsp;memorize"
    },
    {
        "japanese": "別に",
        "romaji": "betsuni",
        "meaning": "(not) particularly"
    },
    {
        "japanese": "思い出す",
        "romaji": "omoidasu",
        "meaning": "to&nbsp;recollect, to&nbsp;recall"
    },
    {
        "japanese": "入れる",
        "romaji": "ireru",
        "meaning": "to&nbsp;put in"
    },
    {
        "japanese": "開く",
        "romaji": "aku",
        "meaning": "to&nbsp;open"
    },
    {
        "japanese": "開く",
        "romaji": "hiraku",
        "meaning": "to&nbsp;open"
    },
    {
        "japanese": "残る",
        "romaji": "nokoru",
        "meaning": "to&nbsp;remain, to&nbsp;be left over"
    },
    {
        "japanese": "答える",
        "romaji": "kotaeru",
        "meaning": "to&nbsp;answer"
    },
    {
        "japanese": "怖い",
        "romaji": "kowai",
        "meaning": "fearful, be afraid, fearsome"
    },
    {
        "japanese": "年",
        "romaji": "nen",
        "meaning": "counter for years"
    },
    {
        "japanese": "年",
        "romaji": "toshi",
        "meaning": "year"
    },
    {
        "japanese": "取る",
        "romaji": "toru",
        "meaning": "to&nbsp;take, to get"
    },
    {
        "japanese": "全て",
        "romaji": "subete",
        "meaning": "all, entirely"
    },
    {
        "japanese": "助ける",
        "romaji": "tasukeru",
        "meaning": "to&nbsp;help, to&nbsp;save"
    },
    {
        "japanese": "状況",
        "romaji": "joukyou",
        "meaning": "state of affairs, conditions"
    },
    {
        "japanese": "確認",
        "romaji": "kakunin",
        "meaning": "confirmation"
    },
    {
        "japanese": "消える",
        "romaji": "kieru",
        "meaning": "to&nbsp;turn off, to&nbsp;disappear"
    },
    {
        "japanese": "長い",
        "romaji": "nagai",
        "meaning": "long"
    },
    {
        "japanese": "驚く",
        "romaji": "odoroku",
        "meaning": "to&nbsp;be surprised, to&nbsp;be astonished"
    },
    {
        "japanese": "腕",
        "romaji": "ude",
        "meaning": "arm"
    },
    {
        "japanese": "以外",
        "romaji": "igai",
        "meaning": "except for"
    },
    {
        "japanese": "困る",
        "romaji": "komaru",
        "meaning": "to&nbsp;be at a loss, to&nbsp;be in trouble"
    },
    {
        "japanese": "離れる",
        "romaji": "hanareru",
        "meaning": "to&nbsp;be separated, to&nbsp;be apart"
    },
    {
        "japanese": "気",
        "romaji": "ki",
        "meaning": "spirit, temperament"
    },
    {
        "japanese": "書く",
        "romaji": "kaku",
        "meaning": "to&nbsp;write"
    },
    {
        "japanese": "光",
        "romaji": "hikari",
        "meaning": "light, flash"
    },
    {
        "japanese": "走る",
        "romaji": "hashiru",
        "meaning": "to&nbsp;run"
    },
    {
        "japanese": "戦う",
        "romaji": "tatakau",
        "meaning": "to&nbsp;wage war, to&nbsp;fight"
    },
    {
        "japanese": "余り",
        "romaji": "amari",
        "meaning": "remainder, leftover"
    },
    {
        "japanese": "全部",
        "romaji": "zenbu",
        "meaning": "all, everything"
    },
    {
        "japanese": "瞬間",
        "romaji": "shunkan",
        "meaning": "instant, moment"
    },
    {
        "japanese": "説明",
        "romaji": "setsumei",
        "meaning": "explanation"
    },
    {
        "japanese": "決める",
        "romaji": "kimeru",
        "meaning": "to decide"
    },
    {
        "japanese": "女性",
        "romaji": "josei",
        "meaning": "woman, female"
    },
    {
        "japanese": "頂く",
        "romaji": "itadaku",
        "meaning": "to&nbsp;receive, to&nbsp;take (humble form)"
    },
    {
        "japanese": "敵",
        "romaji": "teki",
        "meaning": "enemy"
    },
    {
        "japanese": "起きる",
        "romaji": "okiru",
        "meaning": "to&nbsp;occur"
    },
    {
        "japanese": "起きる",
        "romaji": "okiru",
        "meaning": "to&nbsp;get up, to&nbsp;get out of bed"
    },
    {
        "japanese": "落ちる",
        "romaji": "ochiru",
        "meaning": "to&nbsp;fall"
    },
    {
        "japanese": "足",
        "romaji": "ashi",
        "meaning": "leg, foot"
    },
    {
        "japanese": "それに",
        "romaji": "soreni",
        "meaning": "in addition"
    },
    {
        "japanese": "先に",
        "romaji": "sakini",
        "meaning": "before, ahead"
    },
    {
        "japanese": "魔法",
        "romaji": "mahou",
        "meaning": "magic"
    },
    {
        "japanese": "探す",
        "romaji": "sagasu",
        "meaning": "to&nbsp;look for, to&nbsp;search"
    },
    {
        "japanese": "子供",
        "romaji": "kodomo",
        "meaning": "child, kid"
    },
    {
        "japanese": "怒る",
        "romaji": "okoru",
        "meaning": "to&nbsp;get angry, to&nbsp;scold"
    },
    {
        "japanese": "笑顔",
        "romaji": "egao",
        "meaning": "smile"
    },
    {
        "japanese": "先輩",
        "romaji": "senpai",
        "meaning": "senior (at work, school, etc.)"
    },
    {
        "japanese": "続く",
        "romaji": "tsuzuku",
        "meaning": "to&nbsp;continue, to&nbsp;keep up"
    },
    {
        "japanese": "こんなに",
        "romaji": "konnani",
        "meaning": "this much, such"
    },
    {
        "japanese": "変",
        "romaji": "hen",
        "meaning": "strange, funny"
    },
    {
        "japanese": "読む",
        "romaji": "yomu",
        "meaning": "to&nbsp;read"
    },
    {
        "japanese": "当然",
        "romaji": "touzen",
        "meaning": "natural, as a matter of course"
    },
    {
        "japanese": "情報",
        "romaji": "jouhou",
        "meaning": "information"
    },
    {
        "japanese": "見つける",
        "romaji": "mitsukeru",
        "meaning": "to&nbsp;find"
    },
    {
        "japanese": "少女",
        "romaji": "shoujo",
        "meaning": "girl"
    },
    {
        "japanese": "大変",
        "romaji": "taihen",
        "meaning": "terrible, serious, grave"
    },
    {
        "japanese": "かなり",
        "romaji": "kanari",
        "meaning": "fairly, rather"
    },
    {
        "japanese": "下",
        "romaji": "shita",
        "meaning": "under, below"
    },
    {
        "japanese": "下",
        "romaji": "moto",
        "meaning": "under (the supervision of)"
    },
    {
        "japanese": "かかる",
        "romaji": "kakaru",
        "meaning": "to&nbsp;take (e.g. time or money)"
    },
    {
        "japanese": "掛かる",
        "romaji": "kakaru",
        "meaning": "to&nbsp;hang, to&nbsp;be hung"
    },
    {
        "japanese": "一度",
        "romaji": "ichido",
        "meaning": "once"
    },
    {
        "japanese": "完全",
        "romaji": "kanzen",
        "meaning": "perfect, complete"
    },
    {
        "japanese": "後ろ",
        "romaji": "ushiro",
        "meaning": "back, behind"
    },
    {
        "japanese": "泣く",
        "romaji": "naku",
        "meaning": "to&nbsp;cry"
    },
    {
        "japanese": "状態",
        "romaji": "joutai",
        "meaning": "state, condition"
    },
    {
        "japanese": "関係",
        "romaji": "kankei",
        "meaning": "relation(ship)"
    },
    {
        "japanese": "向ける",
        "romaji": "mukeru",
        "meaning": "to&nbsp;turn toward, to&nbsp;point at"
    },
    {
        "japanese": "奥",
        "romaji": "oku",
        "meaning": "inner part, back (of...)"
    },
    {
        "japanese": "軽い",
        "romaji": "karui",
        "meaning": "light"
    },
    {
        "japanese": "返す",
        "romaji": "kaesu",
        "meaning": "to&nbsp;return, to&nbsp;repay"
    },
    {
        "japanese": "現れる",
        "romaji": "arawareru",
        "meaning": "to&nbsp;appear, to&nbsp;emerge"
    },
    {
        "japanese": "痛い",
        "romaji": "itai",
        "meaning": "hurt, ouch"
    },
    {
        "japanese": "どうやら",
        "romaji": "douyara",
        "meaning": "(seems) likely, seems like"
    },
    {
        "japanese": "点ける",
        "romaji": "tsukeru",
        "meaning": "to&nbsp;switch on"
    },
    {
        "japanese": "付ける",
        "romaji": "tsukeru",
        "meaning": "to&nbsp;attach, to&nbsp;set, to&nbsp;add"
    },
    {
        "japanese": "一瞬",
        "romaji": "isshun",
        "meaning": "instant, for a moment"
    },
    {
        "japanese": "隠す",
        "romaji": "kakusu",
        "meaning": "to&nbsp;hide"
    },
    {
        "japanese": "準備",
        "romaji": "junbi",
        "meaning": "preparation, arrangements"
    },
    {
        "japanese": "そろそろ",
        "romaji": "sorosoro",
        "meaning": "soon, about time"
    },
    {
        "japanese": "落ち着く",
        "romaji": "ochitsuku",
        "meaning": "to&nbsp;calm down,&nbsp;to&nbsp;settle in"
    },
    {
        "japanese": "恥ずかしい",
        "romaji": "hazukashii",
        "meaning": "embarrassing, shy"
    },
    {
        "japanese": "場合",
        "romaji": "baai",
        "meaning": "situation, case"
    },
    {
        "japanese": "しっかり",
        "romaji": "shikkari",
        "meaning": "tightly, firmly"
    },
    {
        "japanese": "しっかり",
        "romaji": "shikkari",
        "meaning": "mature, responsible"
    },
    {
        "japanese": "髪",
        "romaji": "kami",
        "meaning": "hair(style)"
    },
    {
        "japanese": "元",
        "romaji": "moto",
        "meaning": "former, ex-"
    },
    {
        "japanese": "得る",
        "romaji": "eru",
        "meaning": "to&nbsp;obtain, to&nbsp;gain"
    },
    {
        "japanese": "すぐ",
        "romaji": "sugu",
        "meaning": "at once, right away"
    },
    {
        "japanese": "来月",
        "romaji": "raigetsu",
        "meaning": "next month"
    },
    {
        "japanese": "昔",
        "romaji": "mukashi",
        "meaning": "a long time ago, the old days"
    },
    {
        "japanese": "近い",
        "romaji": "chikai",
        "meaning": "near"
    },
    {
        "japanese": "動き",
        "romaji": "ugoki",
        "meaning": "movement, motion"
    },
    {
        "japanese": "見つめる",
        "romaji": "mitsumeru",
        "meaning": "to&nbsp;stare"
    },
    {
        "japanese": "幸せ",
        "romaji": "shiawase",
        "meaning": "happiness, good fortune"
    },
    {
        "japanese": "記憶",
        "romaji": "kioku",
        "meaning": "memory"
    },
    {
        "japanese": "反応",
        "romaji": "hannou",
        "meaning": "reaction, response"
    },
    {
        "japanese": "私たち",
        "romaji": "watashitachi",
        "meaning": "we"
    },
    {
        "japanese": "とにかく",
        "romaji": "tonikaku",
        "meaning": "in any case, anyway"
    },
    {
        "japanese": "勝手",
        "romaji": "katte",
        "meaning": "selfish, self-centered"
    },
    {
        "japanese": "攻撃",
        "romaji": "kougeki",
        "meaning": "attack, assault, criticism"
    },
    {
        "japanese": "開ける",
        "romaji": "akeru",
        "meaning": "to&nbsp;open, to&nbsp;unlock"
    },
    {
        "japanese": "黙る",
        "romaji": "damaru",
        "meaning": "to&nbsp;become silent, to&nbsp;shut one's mouth"
    },
    {
        "japanese": "最近",
        "romaji": "saikin",
        "meaning": "recently"
    },
    {
        "japanese": "全員",
        "romaji": "zen'in",
        "meaning": "all members, (the) entire staff"
    },
    {
        "japanese": "せい",
        "romaji": "sei",
        "meaning": "cause, fault"
    },
    {
        "japanese": "深い",
        "romaji": "fukai",
        "meaning": "deep, profound"
    },
    {
        "japanese": "別",
        "romaji": "betsu",
        "meaning": "another, different"
    },
    {
        "japanese": "決まる",
        "romaji": "kimaru",
        "meaning": "to&nbsp;be decided"
    },
    {
        "japanese": "しばらく",
        "romaji": "shibaraku",
        "meaning": "for a while, for the time being"
    },
    {
        "japanese": "行う",
        "romaji": "okonau",
        "meaning": "to&nbsp;perform, to&nbsp;do"
    },
    {
        "japanese": "上がる",
        "romaji": "agaru",
        "meaning": "to&nbsp;go up, to&nbsp;rise"
    },
    {
        "japanese": "隣",
        "romaji": "tonari",
        "meaning": "next to, adjacent"
    },
    {
        "japanese": "扉",
        "romaji": "tobira",
        "meaning": "door"
    },
    {
        "japanese": "指",
        "romaji": "yubi",
        "meaning": "finger, toe"
    },
    {
        "japanese": "結果",
        "romaji": "kekka",
        "meaning": "result, outcome"
    },
    {
        "japanese": "与える",
        "romaji": "ataeru",
        "meaning": "to&nbsp;give"
    },
    {
        "japanese": "道",
        "romaji": "michi",
        "meaning": "road"
    },
    {
        "japanese": "乗る",
        "romaji": "noru",
        "meaning": "to&nbsp;ride, to&nbsp;take"
    },
    {
        "japanese": "特に",
        "romaji": "tokuni",
        "meaning": "specially, particularly"
    },
    {
        "japanese": "形",
        "romaji": "katachi",
        "meaning": "shape"
    },
    {
        "japanese": "さあ",
        "romaji": "saa",
        "meaning": "I'm not sure, Hmm..."
    },
    {
        "japanese": "血",
        "romaji": "chi",
        "meaning": "blood"
    },
    {
        "japanese": "更に",
        "romaji": "sarani",
        "meaning": "furthermore, even more"
    },
    {
        "japanese": "用意",
        "romaji": "youi",
        "meaning": "preparation, getting ready"
    },
    {
        "japanese": "負ける",
        "romaji": "makeru",
        "meaning": "to&nbsp;lose"
    },
    {
        "japanese": "神",
        "romaji": "kami",
        "meaning": "god, spirit"
    },
    {
        "japanese": "実は",
        "romaji": "jitsuha",
        "meaning": "actually, the truth is"
    },
    {
        "japanese": "服",
        "romaji": "fuku",
        "meaning": "clothes"
    },
    {
        "japanese": "不思議",
        "romaji": "fushigi",
        "meaning": "strange, wonderful"
    },
    {
        "japanese": "意識",
        "romaji": "ishiki",
        "meaning": "consciousness, awareness"
    },
    {
        "japanese": "一体",
        "romaji": "ittai",
        "meaning": "what on earth, what the…"
    },
    {
        "japanese": "とりあえず",
        "romaji": "toriaezu",
        "meaning": "for now, first of all"
    },
    {
        "japanese": "送る",
        "romaji": "okuru",
        "meaning": "to&nbsp;send"
    },
    {
        "japanese": "では",
        "romaji": "deha",
        "meaning": "then"
    },
    {
        "japanese": "安心",
        "romaji": "anshin",
        "meaning": "peace of mind, relief"
    },
    {
        "japanese": "失う",
        "romaji": "ushinau",
        "meaning": "to&nbsp;lose, to&nbsp;miss"
    },
    {
        "japanese": "行動",
        "romaji": "koudou",
        "meaning": "action, conduct"
    },
    {
        "japanese": "触れる",
        "romaji": "fureru",
        "meaning": "to&nbsp;touch, to&nbsp;come in contact with"
    },
    {
        "japanese": "そもそも",
        "romaji": "somosomo",
        "meaning": "in the first place"
    },
    {
        "japanese": "少ない",
        "romaji": "sukunai",
        "meaning": "few, little"
    },
    {
        "japanese": "結局",
        "romaji": "kekkyoku",
        "meaning": "after all, finally"
    },
    {
        "japanese": "空",
        "romaji": "sora",
        "meaning": "sky, weather"
    },
    {
        "japanese": "済む",
        "romaji": "sumu",
        "meaning": "to&nbsp;be settled, to&nbsp;complete"
    },
    {
        "japanese": "任せる",
        "romaji": "makaseru",
        "meaning": "to&nbsp;entrust to, to&nbsp;leave it to"
    },
    {
        "japanese": "赤い",
        "romaji": "akai",
        "meaning": "red"
    },
    {
        "japanese": "大事",
        "romaji": "daiji",
        "meaning": "important, precious"
    },
    {
        "japanese": "残す",
        "romaji": "nokosu",
        "meaning": "to&nbsp;leave, to&nbsp;reserve"
    },
    {
        "japanese": "止まる",
        "romaji": "tomaru",
        "meaning": "to&nbsp;stop, to&nbsp;come to a stop"
    },
    {
        "japanese": "朝",
        "romaji": "asa",
        "meaning": "morning"
    },
    {
        "japanese": "命",
        "romaji": "inochi",
        "meaning": "life"
    },
    {
        "japanese": "不安",
        "romaji": "fuan",
        "meaning": "uneasiness, anxiety"
    },
    {
        "japanese": "結構",
        "romaji": "kekkou",
        "meaning": "all right, no thank you"
    },
    {
        "japanese": "結構",
        "romaji": "kekkou",
        "meaning": "quite"
    },
    {
        "japanese": "新しい",
        "romaji": "atarashii",
        "meaning": "new"
    },
    {
        "japanese": "程度",
        "romaji": "teido",
        "meaning": "degree, extent"
    },
    {
        "japanese": "壁",
        "romaji": "kabe",
        "meaning": "wall, partition"
    },
    {
        "japanese": "用",
        "romaji": "you",
        "meaning": "things to do, (as a suffix) to do..., made for..."
    },
    {
        "japanese": "背中",
        "romaji": "senaka",
        "meaning": "back"
    },
    {
        "japanese": "気付く",
        "romaji": "kizuku",
        "meaning": "to&nbsp;realize, to&nbsp;notice"
    },
    {
        "japanese": "いきなり",
        "romaji": "ikinari",
        "meaning": "all of a sudden, without warning"
    },
    {
        "japanese": "渡す",
        "romaji": "watasu",
        "meaning": "to&nbsp;carry across, to&nbsp;hand over"
    },
    {
        "japanese": "喜ぶ",
        "romaji": "yorokobu",
        "meaning": "to&nbsp;be happy, to&nbsp;be delighted"
    },
    {
        "japanese": "可愛い",
        "romaji": "kawaii",
        "meaning": "cute"
    },
    {
        "japanese": "始まる",
        "romaji": "hajimaru",
        "meaning": "to&nbsp;begin"
    },
    {
        "japanese": "色",
        "romaji": "iro",
        "meaning": "color"
    },
    {
        "japanese": "認める",
        "romaji": "mitomeru",
        "meaning": "to&nbsp;recognize, to&nbsp;approve, to&nbsp;accept"
    },
    {
        "japanese": "急",
        "romaji": "kyuu",
        "meaning": "suddenly"
    },
    {
        "japanese": "向こう",
        "romaji": "mukou",
        "meaning": "the other side, the other party, opponent"
    },
    {
        "japanese": "求める",
        "romaji": "motomeru",
        "meaning": "to&nbsp;seek, to&nbsp;wish for"
    },
    {
        "japanese": "肩",
        "romaji": "kata",
        "meaning": "shoulder"
    },
    {
        "japanese": "仲間",
        "romaji": "nakama",
        "meaning": "comrade, peer"
    },
    {
        "japanese": "ようやく",
        "romaji": "youyaku",
        "meaning": "at last"
    },
    {
        "japanese": "思わず",
        "romaji": "omowazu",
        "meaning": "unintentionally, involuntarily"
    },
    {
        "japanese": "ほとんど",
        "romaji": "hotondo",
        "meaning": "almost, hardly"
    },
    {
        "japanese": "突然",
        "romaji": "totsuzen",
        "meaning": "abruptly, suddenly"
    },
    {
        "japanese": "自身",
        "romaji": "jishin",
        "meaning": "self"
    },
    {
        "japanese": "再び",
        "romaji": "futatabi",
        "meaning": "again, a second time"
    },
    {
        "japanese": "静か",
        "romaji": "shizuka",
        "meaning": "quiet"
    },
    {
        "japanese": "飛ぶ",
        "romaji": "tobu",
        "meaning": "to&nbsp;fly"
    },
    {
        "japanese": "白い",
        "romaji": "shiroi",
        "meaning": "white, blank"
    },
    {
        "japanese": "届く",
        "romaji": "todoku",
        "meaning": "to&nbsp;reach, to&nbsp;be received"
    },
    {
        "japanese": "生む",
        "romaji": "umu",
        "meaning": "to&nbsp;have children"
    },
    {
        "japanese": "倒す",
        "romaji": "taosu",
        "meaning": "to&nbsp;bring down, to&nbsp;overthrow"
    },
    {
        "japanese": "似る",
        "romaji": "niru",
        "meaning": "to&nbsp;look similar to, to&nbsp;resemble"
    },
    {
        "japanese": "空気",
        "romaji": "kuuki",
        "meaning": "atmosphere, air"
    },
    {
        "japanese": "腰",
        "romaji": "koshi",
        "meaning": "hip, lower back"
    },
    {
        "japanese": "名",
        "romaji": "na",
        "meaning": "name, reputation"
    },
    {
        "japanese": "危険",
        "romaji": "kiken",
        "meaning": "danger, dangerous"
    },
    {
        "japanese": "付く",
        "romaji": "tsuku",
        "meaning": "to&nbsp;attach itself to, to&nbsp;be connected with, to&nbsp;come in contact with"
    },
    {
        "japanese": "つく",
        "romaji": "tsuku",
        "meaning": "to&nbsp;be on, to be switched on"
    },
    {
        "japanese": "熱い",
        "romaji": "atsui",
        "meaning": "hot (things, touch)"
    },
    {
        "japanese": "ただいま",
        "romaji": "tadaima",
        "meaning": "I'm back (said when arriving home)"
    },
    {
        "japanese": "頂きます",
        "romaji": "itadakimasu",
        "meaning": "let's eat!, thank you for the meal"
    },
    {
        "japanese": "慌てる",
        "romaji": "awateru",
        "meaning": "to&nbsp;be flustered, to&nbsp;hurry"
    },
    {
        "japanese": "周囲",
        "romaji": "shuui",
        "meaning": "circumference, surroundings"
    },
    {
        "japanese": "気分",
        "romaji": "kibun",
        "meaning": "mood, feeling"
    },
    {
        "japanese": "事実",
        "romaji": "jijitsu",
        "meaning": "fact, truth"
    },
    {
        "japanese": "まず",
        "romaji": "mazu",
        "meaning": "first (of all), to begin with"
    },
    {
        "japanese": "本気",
        "romaji": "honki",
        "meaning": "seriousness"
    },
    {
        "japanese": "頷く",
        "romaji": "unazuku",
        "meaning": "to&nbsp;nod"
    },
    {
        "japanese": "通り",
        "romaji": "toori",
        "meaning": "street"
    },
    {
        "japanese": "想像",
        "romaji": "souzou",
        "meaning": "imagination"
    },
    {
        "japanese": "店",
        "romaji": "mise",
        "meaning": "shop, store"
    },
    {
        "japanese": "何だか",
        "romaji": "nandaka",
        "meaning": "somehow, for some reason"
    },
    {
        "japanese": "目的",
        "romaji": "mokuteki",
        "meaning": "purpose, aim, object"
    },
    {
        "japanese": "眠る",
        "romaji": "nemuru",
        "meaning": "to&nbsp;sleep"
    },
    {
        "japanese": "確か",
        "romaji": "tashika",
        "meaning": "certainly, surely, if I'm not mistaken..."
    },
    {
        "japanese": "十分",
        "romaji": "juubun",
        "meaning": "plenty"
    },
    {
        "japanese": "料理",
        "romaji": "ryouri",
        "meaning": "cooking, cuisine"
    },
    {
        "japanese": "頃",
        "romaji": "koro",
        "meaning": "approximate time"
    },
    {
        "japanese": "なかなか",
        "romaji": "nakanaka",
        "meaning": "rather, fairly"
    },
    {
        "japanese": "正直",
        "romaji": "shoujiki",
        "meaning": "honest, upright"
    },
    {
        "japanese": "身",
        "romaji": "mi",
        "meaning": "body, one's own person"
    },
    {
        "japanese": "いっぱい",
        "romaji": "ippai",
        "meaning": "full, a lot"
    },
    {
        "japanese": "美しい",
        "romaji": "utsukushii",
        "meaning": "beautiful"
    },
    {
        "japanese": "甘い",
        "romaji": "amai",
        "meaning": "sweet"
    },
    {
        "japanese": "むしろ",
        "romaji": "mushiro",
        "meaning": "rather"
    },
    {
        "japanese": "首",
        "romaji": "kubi",
        "meaning": "neck"
    },
    {
        "japanese": "感情",
        "romaji": "kanjou",
        "meaning": "feeling, emotion"
    },
    {
        "japanese": "周り",
        "romaji": "mawari",
        "meaning": "around, surroundings"
    },
    {
        "japanese": "方法",
        "romaji": "houhou",
        "meaning": "method, way"
    },
    {
        "japanese": "もう一度",
        "romaji": "mouichido",
        "meaning": "once more"
    },
    {
        "japanese": "遅い",
        "romaji": "osoi",
        "meaning": "slow, late"
    },
    {
        "japanese": "会話",
        "romaji": "kaiwa",
        "meaning": "conversation"
    },
    {
        "japanese": "合う",
        "romaji": "au",
        "meaning": "to&nbsp;fit"
    },
    {
        "japanese": "やって来る",
        "romaji": "yattekuru",
        "meaning": "to&nbsp;come around, to&nbsp;come along"
    },
    {
        "japanese": "森",
        "romaji": "mori",
        "meaning": "thick woods, forest"
    },
    {
        "japanese": "動かす",
        "romaji": "ugokasu",
        "meaning": "to&nbsp;move, to&nbsp;make a move"
    },
    {
        "japanese": "能力",
        "romaji": "nouryoku",
        "meaning": "ability, capacity"
    },
    {
        "japanese": "震える",
        "romaji": "furueru",
        "meaning": "to&nbsp;tremble, to&nbsp;shake"
    },
    {
        "japanese": "期待",
        "romaji": "kitai",
        "meaning": "expectation, anticipation"
    },
    {
        "japanese": "無事",
        "romaji": "buji",
        "meaning": "safely, peacefully"
    },
    {
        "japanese": "起こす",
        "romaji": "okosu",
        "meaning": "to&nbsp;bring about, to&nbsp;cause"
    },
    {
        "japanese": "起こす",
        "romaji": "okosu",
        "meaning": "to&nbsp;wake up"
    },
    {
        "japanese": "耳",
        "romaji": "mimi",
        "meaning": "ear, hearing"
    },
    {
        "japanese": "生まれる",
        "romaji": "umareru",
        "meaning": "to&nbsp;be born"
    },
    {
        "japanese": "移動",
        "romaji": "idou",
        "meaning": "movement, shift"
    },
    {
        "japanese": "邪魔",
        "romaji": "jama",
        "meaning": "obstacle, hindrance"
    },
    {
        "japanese": "遊ぶ",
        "romaji": "asobu",
        "meaning": "to&nbsp;play"
    },
    {
        "japanese": "要る",
        "romaji": "iru",
        "meaning": "to&nbsp;need, to&nbsp;require"
    },
    {
        "japanese": "無くなる",
        "romaji": "nakunaru",
        "meaning": "to be lost, to be used up"
    },
    {
        "japanese": "唇",
        "romaji": "kuchibiru",
        "meaning": "lip"
    },
    {
        "japanese": "着る",
        "romaji": "kiru",
        "meaning": "to&nbsp;wear, to&nbsp;put on"
    },
    {
        "japanese": "色々",
        "romaji": "iroiro",
        "meaning": "various, in various ways"
    },
    {
        "japanese": "どうぞ",
        "romaji": "douzo",
        "meaning": "go ahead"
    },
    {
        "japanese": "立ち上がる",
        "romaji": "tachiagaru",
        "meaning": "to&nbsp;stand up"
    },
    {
        "japanese": "思い",
        "romaji": "omoi",
        "meaning": "thought"
    },
    {
        "japanese": "以前",
        "romaji": "izen",
        "meaning": "before, ago"
    },
    {
        "japanese": "もう少し",
        "romaji": "mousukoshi",
        "meaning": "a little more, a bit more"
    },
    {
        "japanese": "襲う",
        "romaji": "osou",
        "meaning": "to&nbsp;assault, to&nbsp;attack"
    },
    {
        "japanese": "見つかる",
        "romaji": "mitsukaru",
        "meaning": "to&nbsp;be found, to&nbsp;be caught"
    },
    {
        "japanese": "急ぐ",
        "romaji": "isogu",
        "meaning": "to&nbsp;hurry"
    },
    {
        "japanese": "せっかく",
        "romaji": "sekkaku",
        "meaning": "with (much) trouble, specially"
    },
    {
        "japanese": "降りる",
        "romaji": "oriru",
        "meaning": "to&nbsp;get off, to&nbsp;go down"
    },
    {
        "japanese": "下りる",
        "romaji": "oriru",
        "meaning": "to&nbsp;go down, to&nbsp;come down"
    },
    {
        "japanese": "切る",
        "romaji": "kiru",
        "meaning": "to&nbsp;cut"
    },
    {
        "japanese": "事件",
        "romaji": "jiken",
        "meaning": "affair, case"
    },
    {
        "japanese": "返事",
        "romaji": "henji",
        "meaning": "reply"
    },
    {
        "japanese": "酷い",
        "romaji": "hidoi",
        "meaning": "terrible, cruel"
    },
    {
        "japanese": "重い",
        "romaji": "omoi",
        "meaning": "heavy"
    },
    {
        "japanese": "起こる",
        "romaji": "okoru",
        "meaning": "to&nbsp;occur, to&nbsp;happen"
    },
    {
        "japanese": "逆",
        "romaji": "gyaku",
        "meaning": "reverse, inverse"
    },
    {
        "japanese": "納得",
        "romaji": "nattoku",
        "meaning": "consent, accept"
    },
    {
        "japanese": "楽しむ",
        "romaji": "tanoshimu",
        "meaning": "to&nbsp;enjoy"
    },
    {
        "japanese": "叫ぶ",
        "romaji": "sakebu",
        "meaning": "to&nbsp;shout, to&nbsp;yell, to&nbsp;cry out"
    },
    {
        "japanese": "集まる",
        "romaji": "atsumaru",
        "meaning": "to&nbsp;gather, to&nbsp;be collected"
    },
    {
        "japanese": "構う",
        "romaji": "kamau",
        "meaning": "to&nbsp;mind, to&nbsp;care for"
    },
    {
        "japanese": "王",
        "romaji": "ou",
        "meaning": "king"
    },
    {
        "japanese": "途中",
        "romaji": "tochuu",
        "meaning": "on the way, half way"
    },
    {
        "japanese": "慣れる",
        "romaji": "nareru",
        "meaning": "to&nbsp;grow accustomed to"
    },
    {
        "japanese": "終わり",
        "romaji": "owari",
        "meaning": "end"
    },
    {
        "japanese": "一応",
        "romaji": "ichiou",
        "meaning": "for the time being, more or less"
    },
    {
        "japanese": "引く",
        "romaji": "hiku",
        "meaning": "to&nbsp;draw, to&nbsp;pull"
    },
    {
        "japanese": "海",
        "romaji": "umi",
        "meaning": "sea, ocean"
    },
    {
        "japanese": "諦める",
        "romaji": "akirameru",
        "meaning": "to&nbsp;give up, to&nbsp;abandon"
    },
    {
        "japanese": "必ず",
        "romaji": "kanarazu",
        "meaning": "without exception, always, certainly"
    },
    {
        "japanese": "狙う",
        "romaji": "nerau",
        "meaning": "to&nbsp;aim, to&nbsp;be after"
    },
    {
        "japanese": "いくら",
        "romaji": "ikura",
        "meaning": "how much"
    },
    {
        "japanese": "落とす",
        "romaji": "otosu",
        "meaning": "to&nbsp;drop"
    },
    {
        "japanese": "部分",
        "romaji": "bubun",
        "meaning": "part, section"
    },
    {
        "japanese": "必死",
        "romaji": "hisshi",
        "meaning": "frantic, desperate"
    },
    {
        "japanese": "珍しい",
        "romaji": "mezurashii",
        "meaning": "rare, uncommon"
    },
    {
        "japanese": "意外",
        "romaji": "igai",
        "meaning": "unexpected, unforeseen"
    },
    {
        "japanese": "報告",
        "romaji": "houkoku",
        "meaning": "report"
    },
    {
        "japanese": "握る",
        "romaji": "nigiru",
        "meaning": "to&nbsp;grasp, to&nbsp;grip"
    },
    {
        "japanese": "結婚",
        "romaji": "kekkon",
        "meaning": "marriage"
    },
    {
        "japanese": "戦い",
        "romaji": "tatakai",
        "meaning": "war, battle"
    },
    {
        "japanese": "感謝",
        "romaji": "kansha",
        "meaning": "appreciation, thanks"
    },
    {
        "japanese": "激しい",
        "romaji": "hageshii",
        "meaning": "intense, violent"
    },
    {
        "japanese": "倒れる",
        "romaji": "taoreru",
        "meaning": "to&nbsp;collapse, to&nbsp;fall down"
    },
    {
        "japanese": "既に",
        "romaji": "sudeni",
        "meaning": "already, too late"
    },
    {
        "japanese": "疲れる",
        "romaji": "tsukareru",
        "meaning": "to&nbsp;get tired"
    },
    {
        "japanese": "生活",
        "romaji": "seikatsu",
        "meaning": "life, lifestyle"
    },
    {
        "japanese": "場",
        "romaji": "ba",
        "meaning": "opportunity, occasion"
    },
    {
        "japanese": "愛する",
        "romaji": "aisuru",
        "meaning": "to&nbsp;love, to&nbsp;care for"
    },
    {
        "japanese": "冷たい",
        "romaji": "tsumetai",
        "meaning": "cold (to the touch)"
    },
    {
        "japanese": "捨てる",
        "romaji": "suteru",
        "meaning": "to&nbsp;throw away"
    },
    {
        "japanese": "過ごす",
        "romaji": "sugosu",
        "meaning": "to&nbsp;spend (time), to&nbsp;pass"
    },
    {
        "japanese": "食事",
        "romaji": "shokuji",
        "meaning": "meal, dinner"
    },
    {
        "japanese": "働く",
        "romaji": "hataraku",
        "meaning": "to&nbsp;work"
    },
    {
        "japanese": "答え",
        "romaji": "kotae",
        "meaning": "answer, response"
    },
    {
        "japanese": "風",
        "romaji": "kaze",
        "meaning": "wind"
    },
    {
        "japanese": "黒い",
        "romaji": "kuroi",
        "meaning": "black, dark"
    },
    {
        "japanese": "助かる",
        "romaji": "tasukaru",
        "meaning": "to&nbsp;be saved, to&nbsp;survive"
    },
    {
        "japanese": "受け取る",
        "romaji": "uketoru",
        "meaning": "to&nbsp;receive, to&nbsp;take (someone's words or behavior)"
    },
    {
        "japanese": "足りる",
        "romaji": "tariru",
        "meaning": "to&nbsp;be enough, to&nbsp;be sufficient"
    },
    {
        "japanese": "判断",
        "romaji": "handan",
        "meaning": "judgment, decision"
    },
    {
        "japanese": "未来",
        "romaji": "mirai",
        "meaning": "future"
    },
    {
        "japanese": "食う",
        "romaji": "kuu",
        "meaning": "to&nbsp;eat, to&nbsp;live on"
    },
    {
        "japanese": "分",
        "romaji": "bun",
        "meaning": "amount, share"
    },
    {
        "japanese": "そっち",
        "romaji": "sotchi",
        "meaning": "there"
    },
    {
        "japanese": "上手い",
        "romaji": "umai",
        "meaning": "skilled, good"
    },
    {
        "japanese": "合わせる",
        "romaji": "awaseru",
        "meaning": "to&nbsp;adjust, to&nbsp;match"
    },
    {
        "japanese": "大切",
        "romaji": "taisetsu",
        "meaning": "important, valuable"
    },
    {
        "japanese": "花",
        "romaji": "hana",
        "meaning": "flower"
    },
    {
        "japanese": "謝る",
        "romaji": "ayamaru",
        "meaning": "to&nbsp;apologize"
    },
    {
        "japanese": "奪う",
        "romaji": "ubau",
        "meaning": "to&nbsp;snatch, to&nbsp;take by force"
    },
    {
        "japanese": "勢い",
        "romaji": "ikioi",
        "meaning": "vigor, momentum"
    },
    {
        "japanese": "涙",
        "romaji": "namida",
        "meaning": "tear"
    },
    {
        "japanese": "雰囲気",
        "romaji": "fun'iki",
        "meaning": "atmosphere, mood"
    },
    {
        "japanese": "嘘",
        "romaji": "uso",
        "meaning": "lie"
    },
    {
        "japanese": "望む",
        "romaji": "nozomu",
        "meaning": "to&nbsp;desire, to&nbsp;hope"
    },
    {
        "japanese": "緊張",
        "romaji": "kinchou",
        "meaning": "tension, strain, be nervous"
    },
    {
        "japanese": "一緒",
        "romaji": "issho",
        "meaning": "together"
    },
    {
        "japanese": "救う",
        "romaji": "sukuu",
        "meaning": "to&nbsp;save"
    },
    {
        "japanese": "自ら",
        "romaji": "mizukara",
        "meaning": "oneself"
    },
    {
        "japanese": "地面",
        "romaji": "jimen",
        "meaning": "surface, ground"
    },
    {
        "japanese": "失敗",
        "romaji": "shippai",
        "meaning": "failure, blunder"
    },
    {
        "japanese": "避ける",
        "romaji": "sakeru",
        "meaning": "to&nbsp;avoid,&nbsp;to&nbsp;evade"
    },
    {
        "japanese": "窓",
        "romaji": "mado",
        "meaning": "window"
    },
    {
        "japanese": "素直",
        "romaji": "sunao",
        "meaning": "honest, straightforward"
    },
    {
        "japanese": "肉",
        "romaji": "niku",
        "meaning": "flesh, meat"
    },
    {
        "japanese": "冗談",
        "romaji": "joudan",
        "meaning": "joke"
    },
    {
        "japanese": "余裕",
        "romaji": "yoyuu",
        "meaning": "room, leeway"
    },
    {
        "japanese": "連絡",
        "romaji": "renraku",
        "meaning": "connection, communication"
    },
    {
        "japanese": "人生",
        "romaji": "jinsei",
        "meaning": "(human) life"
    },
    {
        "japanese": "放つ",
        "romaji": "hanatsu",
        "meaning": "to&nbsp;emit, to&nbsp;set free, to&nbsp;shoot (e.g. an arrow or bullet)"
    },
    {
        "japanese": "流れる",
        "romaji": "nagareru",
        "meaning": "to&nbsp;flow, to&nbsp;pass"
    },
    {
        "japanese": "特別",
        "romaji": "tokubetsu",
        "meaning": "special, extraordinary"
    },
    {
        "japanese": "連中",
        "romaji": "renchuu",
        "meaning": "party, this bunch"
    },
    {
        "japanese": "両手",
        "romaji": "ryoute",
        "meaning": "both hands"
    },
    {
        "japanese": "増える",
        "romaji": "fueru",
        "meaning": "to&nbsp;increase, to&nbsp;accrue"
    },
    {
        "japanese": "出会う",
        "romaji": "deau",
        "meaning": "to&nbsp;meet (by chance), to&nbsp;come across"
    },
    {
        "japanese": "少年",
        "romaji": "shounen",
        "meaning": "boy"
    },
    {
        "japanese": "繰り返す",
        "romaji": "kurikaesu",
        "meaning": "to&nbsp;repeat"
    },
    {
        "japanese": "我慢",
        "romaji": "gaman",
        "meaning": "patience, bearing with"
    },
    {
        "japanese": "我々",
        "romaji": "wareware",
        "meaning": "we (formal)"
    },
    {
        "japanese": "感覚",
        "romaji": "kankaku",
        "meaning": "sensation"
    },
    {
        "japanese": "響く",
        "romaji": "hibiku",
        "meaning": "to&nbsp;reverberate"
    },
    {
        "japanese": "何とか",
        "romaji": "nantoka",
        "meaning": "somehow, please"
    },
    {
        "japanese": "山",
        "romaji": "yama",
        "meaning": "mountain"
    },
    {
        "japanese": "当たり前",
        "romaji": "atarimae",
        "meaning": "of course, obvious"
    },
    {
        "japanese": "予定",
        "romaji": "yotei",
        "meaning": "schedule, plan"
    },
    {
        "japanese": "残念",
        "romaji": "zannen",
        "meaning": "regretful, disappointing"
    },
    {
        "japanese": "追う",
        "romaji": "ou",
        "meaning": "to&nbsp;chase, to&nbsp;pursue"
    },
    {
        "japanese": "綺麗",
        "romaji": "kirei",
        "meaning": "beautiful, clean"
    },
    {
        "japanese": "いらっしゃる",
        "romaji": "irassharu",
        "meaning": "to&nbsp;be, to&nbsp;come, to&nbsp;go (honorific form)"
    },
    {
        "japanese": "若い",
        "romaji": "wakai",
        "meaning": "young"
    },
    {
        "japanese": "どうしても",
        "romaji": "doushitemo",
        "meaning": "by any means, really"
    },
    {
        "japanese": "考え",
        "romaji": "kangae",
        "meaning": "thought, view"
    },
    {
        "japanese": "過去",
        "romaji": "kako",
        "meaning": "the past"
    },
    {
        "japanese": "気配",
        "romaji": "kehai",
        "meaning": "indication, sign"
    },
    {
        "japanese": "本人",
        "romaji": "honnin",
        "meaning": "the person in question"
    },
    {
        "japanese": "現実",
        "romaji": "genjitsu",
        "meaning": "reality, actuality"
    },
    {
        "japanese": "決して",
        "romaji": "kesshite",
        "meaning": "never, by no means"
    },
    {
        "japanese": "いつか",
        "romaji": "itsuka",
        "meaning": "some time, some day"
    },
    {
        "japanese": "床",
        "romaji": "yuka",
        "meaning": "floor"
    },
    {
        "japanese": "横",
        "romaji": "yoko",
        "meaning": "side, width across"
    },
    {
        "japanese": "休む",
        "romaji": "yasumu",
        "meaning": "to&nbsp;rest, to&nbsp;take time off"
    },
    {
        "japanese": "振り返る",
        "romaji": "furikaeru",
        "meaning": "to&nbsp;turn one's head, to&nbsp;look back on"
    },
    {
        "japanese": "わざわざ",
        "romaji": "wazawaza",
        "meaning": "go out of one's way"
    },
    {
        "japanese": "質問",
        "romaji": "shitsumon",
        "meaning": "question"
    },
    {
        "japanese": "興味",
        "romaji": "kyoumi",
        "meaning": "interest"
    },
    {
        "japanese": "距離",
        "romaji": "kyori",
        "meaning": "distance, interval"
    },
    {
        "japanese": "内容",
        "romaji": "naiyou",
        "meaning": "contents"
    },
    {
        "japanese": "つい",
        "romaji": "tsui",
        "meaning": "inadvertently, carelessly"
    },
    {
        "japanese": "回る",
        "romaji": "mawaru",
        "meaning": "to&nbsp;rotate, to&nbsp;go around"
    },
    {
        "japanese": "並ぶ",
        "romaji": "narabu",
        "meaning": "line up"
    },
    {
        "japanese": "終える",
        "romaji": "oeru",
        "meaning": "to&nbsp;end, to&nbsp;finish"
    },
    {
        "japanese": "態度",
        "romaji": "taido",
        "meaning": "attitude, manner"
    },
    {
        "japanese": "金",
        "romaji": "kane",
        "meaning": "money"
    },
    {
        "japanese": "今夜",
        "romaji": "konya",
        "meaning": "tonight, this evening"
    },
    {
        "japanese": "昨夜",
        "romaji": "yuube",
        "meaning": "last night, last evening"
    },
    {
        "japanese": "さすが",
        "romaji": "sasuga",
        "meaning": "just as expected, true to one's reputation"
    },
    {
        "japanese": "自然",
        "romaji": "shizen",
        "meaning": "nature"
    },
    {
        "japanese": "眺める",
        "romaji": "nagameru",
        "meaning": "to&nbsp;look out, to&nbsp;gaze"
    },
    {
        "japanese": "向く",
        "romaji": "muku",
        "meaning": "to&nbsp;face, to&nbsp;look"
    },
    {
        "japanese": "相変わらず",
        "romaji": "aikawarazu",
        "meaning": "as usual, as before"
    },
    {
        "japanese": "普段",
        "romaji": "fudan",
        "meaning": "usual, ordinary"
    },
    {
        "japanese": "どうも",
        "romaji": "doumo",
        "meaning": "for some reason, somehow"
    },
    {
        "japanese": "運ぶ",
        "romaji": "hakobu",
        "meaning": "to&nbsp;carry"
    },
    {
        "japanese": "やっと",
        "romaji": "yatto",
        "meaning": "at last, finally"
    },
    {
        "japanese": "弱い",
        "romaji": "yowai",
        "meaning": "weak"
    },
    {
        "japanese": "どうせ",
        "romaji": "douse",
        "meaning": "anyway"
    },
    {
        "japanese": "離す",
        "romaji": "hanasu",
        "meaning": "to&nbsp;separate, to&nbsp;detach"
    },
    {
        "japanese": "貴族",
        "romaji": "kizoku",
        "meaning": "noble"
    },
    {
        "japanese": "広がる",
        "romaji": "hirogaru",
        "meaning": "to&nbsp;spread out, to&nbsp;extend"
    },
    {
        "japanese": "頬",
        "romaji": "hoo",
        "meaning": "cheek"
    },
    {
        "japanese": "寂しい",
        "romaji": "sabishii",
        "meaning": "lonely, sad"
    },
    {
        "japanese": "正しい",
        "romaji": "tadashii",
        "meaning": "correct"
    },
    {
        "japanese": "自由",
        "romaji": "jiyuu",
        "meaning": "freedom, free"
    },
    {
        "japanese": "全身",
        "romaji": "zenshin",
        "meaning": "the whole body"
    },
    {
        "japanese": "武器",
        "romaji": "buki",
        "meaning": "weapon, arms"
    },
    {
        "japanese": "それぞれ",
        "romaji": "sorezore",
        "meaning": "each, respective"
    },
    {
        "japanese": "語る",
        "romaji": "kataru",
        "meaning": "to&nbsp;tell, to&nbsp;talk"
    },
    {
        "japanese": "持ってくる",
        "romaji": "mottekuru",
        "meaning": "to&nbsp;bring"
    },
    {
        "japanese": "息子",
        "romaji": "musuko",
        "meaning": "son"
    },
    {
        "japanese": "娘",
        "romaji": "musume",
        "meaning": "daughter"
    },
    {
        "japanese": "一気に",
        "romaji": "ikkini",
        "meaning": "in one go"
    },
    {
        "japanese": "そっと",
        "romaji": "sotto",
        "meaning": "softly, gently"
    },
    {
        "japanese": "伝わる",
        "romaji": "tsutawaru",
        "meaning": "to&nbsp;be transmitted, to&nbsp;be handed down"
    },
    {
        "japanese": "当たる",
        "romaji": "ataru",
        "meaning": "to&nbsp;hit, to&nbsp;strike"
    },
    {
        "japanese": "痛み",
        "romaji": "itami",
        "meaning": "pain, ache"
    },
    {
        "japanese": "妙",
        "romaji": "myou",
        "meaning": "strange"
    },
    {
        "japanese": "影",
        "romaji": "kage",
        "meaning": "shadow, shade"
    },
    {
        "japanese": "死",
        "romaji": "shi",
        "meaning": "death"
    },
    {
        "japanese": "多分",
        "romaji": "tabun",
        "meaning": "probably, perhaps"
    },
    {
        "japanese": "協力",
        "romaji": "kyouryoku",
        "meaning": "cooperation, collaboration"
    },
    {
        "japanese": "見上げる",
        "romaji": "miageru",
        "meaning": "to&nbsp;look up"
    },
    {
        "japanese": "覚悟",
        "romaji": "kakugo",
        "meaning": "readiness, resolution"
    },
    {
        "japanese": "連れる",
        "romaji": "tsureru",
        "meaning": "to&nbsp;take along, to&nbsp;bring along"
    },
    {
        "japanese": "低い",
        "romaji": "hikui",
        "meaning": "low, short (height)"
    },
    {
        "japanese": "木",
        "romaji": "ki",
        "meaning": "tree"
    },
    {
        "japanese": "面倒",
        "romaji": "mendou",
        "meaning": "annoying, troublesome"
    },
    {
        "japanese": "闇",
        "romaji": "yami",
        "meaning": "darkness"
    },
    {
        "japanese": "広い",
        "romaji": "hiroi",
        "meaning": "wide, big"
    },
    {
        "japanese": "告げる",
        "romaji": "tsugeru",
        "meaning": "to&nbsp;tell, to&nbsp;notify"
    },
    {
        "japanese": "叩く",
        "romaji": "tataku",
        "meaning": "tap, hit"
    },
    {
        "japanese": "自信",
        "romaji": "jishin",
        "meaning": "self-confidence"
    },
    {
        "japanese": "集める",
        "romaji": "atsumeru",
        "meaning": "to&nbsp;gather, to&nbsp;collect"
    },
    {
        "japanese": "振る",
        "romaji": "furu",
        "meaning": "wave, shake"
    },
    {
        "japanese": "余計",
        "romaji": "yokei",
        "meaning": "excess, needless"
    },
    {
        "japanese": "他に",
        "romaji": "hokani",
        "meaning": "else, in addition"
    },
    {
        "japanese": "誘う",
        "romaji": "sasou",
        "meaning": "to&nbsp;invite, to&nbsp;ask out"
    },
    {
        "japanese": "付き合う",
        "romaji": "tsukiau",
        "meaning": "to&nbsp;socialize with, to&nbsp;see someone"
    },
    {
        "japanese": "村",
        "romaji": "mura",
        "meaning": "village"
    },
    {
        "japanese": "人物",
        "romaji": "jinbutsu",
        "meaning": "character, person"
    },
    {
        "japanese": "数",
        "romaji": "kazu",
        "meaning": "number"
    },
    {
        "japanese": "危ない",
        "romaji": "abunai",
        "meaning": "dangerous, uncertain"
    },
    {
        "japanese": "事情",
        "romaji": "jijou",
        "meaning": "circumstances, conditions"
    },
    {
        "japanese": "本当に",
        "romaji": "hontouni",
        "meaning": "really, truly"
    },
    {
        "japanese": "噂",
        "romaji": "uwasa",
        "meaning": "gossip, rumor"
    },
    {
        "japanese": "断る",
        "romaji": "kotowaru",
        "meaning": "to&nbsp;refuse, to&nbsp;turn down"
    },
    {
        "japanese": "どうか",
        "romaji": "douka",
        "meaning": "if possible, somehow"
    },
    {
        "japanese": "巨大",
        "romaji": "kyodai",
        "meaning": "huge, gigantic"
    },
    {
        "japanese": "最高",
        "romaji": "saikou",
        "meaning": "best, supreme"
    },
    {
        "japanese": "お金",
        "romaji": "okane",
        "meaning": "money"
    },
    {
        "japanese": "傷",
        "romaji": "kizu",
        "meaning": "wound, cut"
    },
    {
        "japanese": "怒り",
        "romaji": "ikari",
        "meaning": "anger, rage"
    },
    {
        "japanese": "どうやって",
        "romaji": "douyatte",
        "meaning": "how, in what way"
    },
    {
        "japanese": "効果",
        "romaji": "kouka",
        "meaning": "effect, result"
    },
    {
        "japanese": "取り出す",
        "romaji": "toridasu",
        "meaning": "to&nbsp;take out, to&nbsp;pull out"
    },
    {
        "japanese": "黒",
        "romaji": "kuro",
        "meaning": "black"
    },
    {
        "japanese": "愛",
        "romaji": "ai",
        "meaning": "love"
    },
    {
        "japanese": "直接",
        "romaji": "chokusetsu",
        "meaning": "directly"
    },
    {
        "japanese": "浮かぶ",
        "romaji": "ukabu",
        "meaning": "to float"
    },
    {
        "japanese": "抜ける",
        "romaji": "nukeru",
        "meaning": "to fall out, to leave"
    },
    {
        "japanese": "暗い",
        "romaji": "kurai",
        "meaning": "dark"
    },
    {
        "japanese": "息",
        "romaji": "iki",
        "meaning": "breath"
    },
    {
        "japanese": "駄目",
        "romaji": "dame",
        "meaning": "no good"
    },
    {
        "japanese": "点",
        "romaji": "ten",
        "meaning": "point, mark"
    },
    {
        "japanese": "参加",
        "romaji": "sanka",
        "meaning": "participation"
    },
    {
        "japanese": "はっきり",
        "romaji": "hakkiri",
        "meaning": "clearly"
    },
    {
        "japanese": "描く",
        "romaji": "kaku",
        "meaning": "to depict, to describe, to draw"
    },
    {
        "japanese": "描く",
        "romaji": "egaku",
        "meaning": "to depict, to describe, to draw"
    },
    {
        "japanese": "無視",
        "romaji": "mushi",
        "meaning": "ignoring, disregarding"
    },
    {
        "japanese": "生徒",
        "romaji": "seito",
        "meaning": "pupil, student"
    },
    {
        "japanese": "詳しい",
        "romaji": "kuwashii",
        "meaning": "detailed"
    },
    {
        "japanese": "触る",
        "romaji": "sawaru",
        "meaning": "to touch"
    },
    {
        "japanese": "これまで",
        "romaji": "koremade",
        "meaning": "until now, until here"
    },
    {
        "japanese": "半分",
        "romaji": "hanbun",
        "meaning": "half"
    },
    {
        "japanese": "耐える",
        "romaji": "taeru",
        "meaning": "to withstand, to endure"
    },
    {
        "japanese": "立場",
        "romaji": "tachiba",
        "meaning": "standpoint, position"
    },
    {
        "japanese": "石",
        "romaji": "ishi",
        "meaning": "stone, small rock"
    },
    {
        "japanese": "挨拶",
        "romaji": "aisatsu",
        "meaning": "greeting"
    },
    {
        "japanese": "相談",
        "romaji": "soudan",
        "meaning": "consultation, advice"
    },
    {
        "japanese": "受け入れる",
        "romaji": "ukeireru",
        "meaning": "to accept, to accommodate"
    },
    {
        "japanese": "練習",
        "romaji": "renshuu",
        "meaning": "practice, training"
    },
    {
        "japanese": "無駄",
        "romaji": "muda",
        "meaning": "wasteful, useless"
    },
    {
        "japanese": "抱える",
        "romaji": "kakaeru",
        "meaning": "to hold in one's arms"
    },
    {
        "japanese": "示す",
        "romaji": "shimesu",
        "meaning": "to show, to indicate"
    },
    {
        "japanese": "成功",
        "romaji": "seikou",
        "meaning": "success"
    },
    {
        "japanese": "抱く",
        "romaji": "daku",
        "meaning": "to hug, to hold in one's arms"
    },
    {
        "japanese": "味",
        "romaji": "aji",
        "meaning": "taste, flavor"
    },
    {
        "japanese": "男性",
        "romaji": "dansei",
        "meaning": "male, man"
    },
    {
        "japanese": "否定",
        "romaji": "hitei",
        "meaning": "denial, negation"
    },
    {
        "japanese": "致す",
        "romaji": "itasu",
        "meaning": "do (humble form)"
    },
    {
        "japanese": "現在",
        "romaji": "genzai",
        "meaning": "present time, now"
    },
    {
        "japanese": "輝く",
        "romaji": "kagayaku",
        "meaning": "to glitter, to shine"
    },
    {
        "japanese": "熱",
        "romaji": "netsu",
        "meaning": "fever"
    },
    {
        "japanese": "始め",
        "romaji": "hajime",
        "meaning": "beginning, origin"
    },
    {
        "japanese": "厳しい",
        "romaji": "kibishii",
        "meaning": "strict"
    },
    {
        "japanese": "匂い",
        "romaji": "nioi",
        "meaning": "smell, odor"
    },
    {
        "japanese": "席",
        "romaji": "seki",
        "meaning": "seat"
    },
    {
        "japanese": "売る",
        "romaji": "uru",
        "meaning": "to sell"
    },
    {
        "japanese": "暮らす",
        "romaji": "kurasu",
        "meaning": "to live, to make a living"
    },
    {
        "japanese": "利用",
        "romaji": "riyou",
        "meaning": "usage, utilization"
    },
    {
        "japanese": "ふと",
        "romaji": "futo",
        "meaning": "suddenly, unintentionally"
    },
    {
        "japanese": "経験",
        "romaji": "keiken",
        "meaning": "experience"
    },
    {
        "japanese": "変化",
        "romaji": "henka",
        "meaning": "change, variation"
    },
    {
        "japanese": "王子",
        "romaji": "ouji",
        "meaning": "prince"
    },
    {
        "japanese": "満足",
        "romaji": "manzoku",
        "meaning": "satisfaction"
    },
    {
        "japanese": "どんどん",
        "romaji": "dondon",
        "meaning": "steadily"
    },
    {
        "japanese": "命令",
        "romaji": "meirei",
        "meaning": "order, command"
    },
    {
        "japanese": "主",
        "romaji": "omo",
        "meaning": "main, chief"
    },
    {
        "japanese": "美味しい",
        "romaji": "oishii",
        "meaning": "tasty"
    },
    {
        "japanese": "手紙",
        "romaji": "tegami",
        "meaning": "letter"
    },
    {
        "japanese": "掴む",
        "romaji": "tsukamu",
        "meaning": "to grip, to grab"
    },
    {
        "japanese": "他人",
        "romaji": "tanin",
        "meaning": "another person, stranger"
    },
    {
        "japanese": "格好",
        "romaji": "kakkou",
        "meaning": "shape, appearance"
    },
    {
        "japanese": "光景",
        "romaji": "koukei",
        "meaning": "sight, spectacle"
    },
    {
        "japanese": "すっかり",
        "romaji": "sukkari",
        "meaning": "all, completely"
    },
    {
        "japanese": "どちら",
        "romaji": "dochira",
        "meaning": "which"
    },
    {
        "japanese": "親",
        "romaji": "oya",
        "meaning": "parent"
    },
    {
        "japanese": "時代",
        "romaji": "jidai",
        "meaning": "period, age"
    },
    {
        "japanese": "作戦",
        "romaji": "sakusen",
        "meaning": "tactic, strategy"
    },
    {
        "japanese": "もしかしたら",
        "romaji": "moshikashitara",
        "meaning": "possibly, perhaps"
    },
    {
        "japanese": "苦しい",
        "romaji": "kurushii",
        "meaning": "painful, difficult"
    },
    {
        "japanese": "明るい",
        "romaji": "akarui",
        "meaning": "bright"
    },
    {
        "japanese": "原因",
        "romaji": "gen'in",
        "meaning": "cause, origin"
    },
    {
        "japanese": "廊下",
        "romaji": "rouka",
        "meaning": "hallway"
    },
    {
        "japanese": "そいつ",
        "romaji": "soitsu",
        "meaning": "that person, that guy"
    },
    {
        "japanese": "先ほど",
        "romaji": "sakihodo",
        "meaning": "some time ago"
    },
    {
        "japanese": "大人",
        "romaji": "otona",
        "meaning": "adult"
    },
    {
        "japanese": "人々",
        "romaji": "hitobito",
        "meaning": "people"
    },
    {
        "japanese": "撫でる",
        "romaji": "naderu",
        "meaning": "to pat, to stroke"
    },
    {
        "japanese": "立てる",
        "romaji": "tateru",
        "meaning": "to put up, to erect"
    },
    {
        "japanese": "たまに",
        "romaji": "tamani",
        "meaning": "occasionally, by chance"
    },
    {
        "japanese": "押す",
        "romaji": "osu",
        "meaning": "to push, to press down"
    },
    {
        "japanese": "平気",
        "romaji": "heiki",
        "meaning": "calm, all right"
    },
    {
        "japanese": "悲しい",
        "romaji": "kanashii",
        "meaning": "sad"
    },
    {
        "japanese": "隠れる",
        "romaji": "kakureru",
        "meaning": "to hide, to disappear"
    },
    {
        "japanese": "まだまだ",
        "romaji": "madamada",
        "meaning": "still, not there yet"
    },
    {
        "japanese": "皆さん",
        "romaji": "minasan",
        "meaning": "everyone"
    },
    {
        "japanese": "戻す",
        "romaji": "modosu",
        "meaning": "to return"
    },
    {
        "japanese": "戦闘",
        "romaji": "sentou",
        "meaning": "battle, fight"
    },
    {
        "japanese": "火",
        "romaji": "hi",
        "meaning": "fire"
    },
    {
        "japanese": "炎",
        "romaji": "honoo",
        "meaning": "flame, blaze"
    },
    {
        "japanese": "恐怖",
        "romaji": "kyoufu",
        "meaning": "fear"
    },
    {
        "japanese": "迷う",
        "romaji": "mayou",
        "meaning": "to be perplexed, to get lost"
    },
    {
        "japanese": "よろしい",
        "romaji": "yoroshii",
        "meaning": "all right"
    },
    {
        "japanese": "機会",
        "romaji": "kikai",
        "meaning": "chance, opportunity, occasion"
    },
    {
        "japanese": "恐ろしい",
        "romaji": "osoroshii",
        "meaning": "terrible, frightening"
    },
    {
        "japanese": "借りる",
        "romaji": "kariru",
        "meaning": "to borrow"
    },
    {
        "japanese": "外す",
        "romaji": "hazusu",
        "meaning": "to remove"
    },
    {
        "japanese": "地",
        "romaji": "chi",
        "meaning": "ground, place"
    },
    {
        "japanese": "速い",
        "romaji": "hayai",
        "meaning": "fast (in terms of speed)"
    },
    {
        "japanese": "短い",
        "romaji": "mijikai",
        "meaning": "short, brief"
    },
    {
        "japanese": "気に入る",
        "romaji": "kiniiru",
        "meaning": "to like, to be pleased with"
    },
    {
        "japanese": "改めて",
        "romaji": "aratamete",
        "meaning": "once again"
    },
    {
        "japanese": "うるさい",
        "romaji": "urusai",
        "meaning": "noisy, annoying"
    },
    {
        "japanese": "当てる",
        "romaji": "ateru",
        "meaning": "to hit, to guess"
    },
    {
        "japanese": "包む",
        "romaji": "tsutsumu",
        "meaning": "to wrap, to pack"
    },
    {
        "japanese": "位置",
        "romaji": "ichi",
        "meaning": "position, place"
    },
    {
        "japanese": "打つ",
        "romaji": "utsu",
        "meaning": "to hit, to strike"
    },
    {
        "japanese": "目指す",
        "romaji": "mezasu",
        "meaning": "to aim for"
    },
    {
        "japanese": "秘密",
        "romaji": "himitsu",
        "meaning": "secret, privacy"
    },
    {
        "japanese": "屋敷",
        "romaji": "yashiki",
        "meaning": "mansion"
    },
    {
        "japanese": "限界",
        "romaji": "genkai",
        "meaning": "boundary, limit"
    },
    {
        "japanese": "勝負",
        "romaji": "shoubu",
        "meaning": "match, contest"
    },
    {
        "japanese": "星",
        "romaji": "hoshi",
        "meaning": "star, planet"
    },
    {
        "japanese": "明らか",
        "romaji": "akiraka",
        "meaning": "clear, obvious"
    },
    {
        "japanese": "悩む",
        "romaji": "nayamu",
        "meaning": "to be troubled, to worry"
    },
    {
        "japanese": "集中",
        "romaji": "shuuchuu",
        "meaning": "concentration, convergence"
    },
    {
        "japanese": "間違う",
        "romaji": "machigau",
        "meaning": "to be mistaken, to be incorrect"
    },
    {
        "japanese": "裏",
        "romaji": "ura",
        "meaning": "rear, reverse"
    },
    {
        "japanese": "薄い",
        "romaji": "usui",
        "meaning": "weak, pale"
    },
    {
        "japanese": "願う",
        "romaji": "negau",
        "meaning": "to wish, to ask a favor, to pray"
    },
    {
        "japanese": "回復",
        "romaji": "kaifuku",
        "meaning": "recovery"
    },
    {
        "japanese": "流す",
        "romaji": "nagasu",
        "meaning": "to let flow, to set adrift"
    },
    {
        "japanese": "じっと",
        "romaji": "jitto",
        "meaning": "without moving, still"
    },
    {
        "japanese": "本物",
        "romaji": "honmono",
        "meaning": "real thing, genuine article"
    },
    {
        "japanese": "正に",
        "romaji": "masani",
        "meaning": "exactly, surely, truly"
    },
    {
        "japanese": "取り戻す",
        "romaji": "torimodosu",
        "meaning": "to take back, to recover"
    },
    {
        "japanese": "何より",
        "romaji": "naniyori",
        "meaning": "above all, most important"
    },
    {
        "japanese": "身体",
        "romaji": "shintai",
        "meaning": "body"
    },
    {
        "japanese": "方向",
        "romaji": "houkou",
        "meaning": "direction, course"
    },
    {
        "japanese": "通る",
        "romaji": "tooru",
        "meaning": "to pass, to take, to go through"
    },
    {
        "japanese": "空間",
        "romaji": "kuukan",
        "meaning": "space, room"
    },
    {
        "japanese": "着く",
        "romaji": "tsuku",
        "meaning": "to arrive"
    },
    {
        "japanese": "可能",
        "romaji": "kanou",
        "meaning": "possible, potential"
    },
    {
        "japanese": "新た",
        "romaji": "arata",
        "meaning": "new"
    },
    {
        "japanese": "随分",
        "romaji": "zuibun",
        "meaning": "extremely, considerably"
    },
    {
        "japanese": "尋ねる",
        "romaji": "tazuneru",
        "meaning": "to inquire, to search for"
    },
    {
        "japanese": "椅子",
        "romaji": "isu",
        "meaning": "chair"
    },
    {
        "japanese": "城",
        "romaji": "shiro",
        "meaning": "castle"
    },
    {
        "japanese": "恐らく",
        "romaji": "osoraku",
        "meaning": "probably (usually negative), I'm afraid ..."
    },
    {
        "japanese": "お茶",
        "romaji": "ocha",
        "meaning": "tea (polite)"
    },
    {
        "japanese": "雨",
        "romaji": "ame",
        "meaning": "rain"
    },
    {
        "japanese": "いやいや",
        "romaji": "iyaiya",
        "meaning": "reluctantly"
    },
    {
        "japanese": "そのもの",
        "romaji": "sonomono",
        "meaning": "the very thing, the picture of"
    },
    {
        "japanese": "教室",
        "romaji": "kyoushitsu",
        "meaning": "classroom"
    },
    {
        "japanese": "馬鹿",
        "romaji": "baka",
        "meaning": "fool, nonsense"
    },
    {
        "japanese": "遠慮",
        "romaji": "enryo",
        "meaning": "reserve, refraining"
    },
    {
        "japanese": "まずい",
        "romaji": "mazui",
        "meaning": "problematic, troublesome"
    },
    {
        "japanese": "まずい",
        "romaji": "mazui",
        "meaning": "bad-tasting, bad"
    },
    {
        "japanese": "せめて",
        "romaji": "semete",
        "meaning": "at least"
    },
    {
        "japanese": "迎える",
        "romaji": "mukaeru",
        "meaning": "to welcome, to go out to meet, to invite"
    },
    {
        "japanese": "少なくとも",
        "romaji": "sukunakutomo",
        "meaning": "at least"
    },
    {
        "japanese": "魂",
        "romaji": "tamashii",
        "meaning": "soul, spirit"
    },
    {
        "japanese": "消す",
        "romaji": "kesu",
        "meaning": "to&nbsp;turn off"
    },
    {
        "japanese": "調子",
        "romaji": "choushi",
        "meaning": "condition, state of health"
    },
    {
        "japanese": "お互い",
        "romaji": "otagai",
        "meaning": "each other"
    },
    {
        "japanese": "似合う",
        "romaji": "niau",
        "meaning": "to suit, to match well"
    },
    {
        "japanese": "猫",
        "romaji": "neko",
        "meaning": "cat"
    },
    {
        "japanese": "犬",
        "romaji": "inu",
        "meaning": "dog"
    },
    {
        "japanese": "お礼",
        "romaji": "orei",
        "meaning": "gratitude"
    },
    {
        "japanese": "後悔",
        "romaji": "koukai",
        "meaning": "regret"
    },
    {
        "japanese": "希望",
        "romaji": "kibou",
        "meaning": "hope, wish"
    },
    {
        "japanese": "下がる",
        "romaji": "sagaru",
        "meaning": "to come down, to hang down, to fall"
    },
    {
        "japanese": "訪れる",
        "romaji": "otozureru",
        "meaning": "to visit, to call on"
    },
    {
        "japanese": "褒める",
        "romaji": "homeru",
        "meaning": "to praise, to commend"
    },
    {
        "japanese": "性格",
        "romaji": "seikaku",
        "meaning": "character, personality"
    },
    {
        "japanese": "写真",
        "romaji": "shashin",
        "meaning": "photograph"
    },
    {
        "japanese": "薬",
        "romaji": "kusuri",
        "meaning": "drug, remedy"
    },
    {
        "japanese": "友人",
        "romaji": "yuujin",
        "meaning": "friend"
    },
    {
        "japanese": "かつて",
        "romaji": "katsute",
        "meaning": "once, formerly"
    },
    {
        "japanese": "確実",
        "romaji": "kakujitsu",
        "meaning": "certain, secure"
    },
    {
        "japanese": "もはや",
        "romaji": "mohaya",
        "meaning": "already, no longer"
    },
    {
        "japanese": "去る",
        "romaji": "saru",
        "meaning": "to go away, to pass"
    },
    {
        "japanese": "一部",
        "romaji": "ichibu",
        "meaning": "(one) part"
    },
    {
        "japanese": "遠く",
        "romaji": "tooku",
        "meaning": "far (away)"
    },
    {
        "japanese": "腹",
        "romaji": "hara",
        "meaning": "belly"
    },
    {
        "japanese": "階段",
        "romaji": "kaidan",
        "meaning": "stairs"
    },
    {
        "japanese": "適当",
        "romaji": "tekitou",
        "meaning": "suitable, appropriate"
    },
    {
        "japanese": "舌",
        "romaji": "shita",
        "meaning": "tongue"
    },
    {
        "japanese": "予想",
        "romaji": "yosou",
        "meaning": "prospect, expectation"
    },
    {
        "japanese": "興奮",
        "romaji": "koufun",
        "meaning": "excitement, agitation"
    },
    {
        "japanese": "関わる",
        "romaji": "kakawaru",
        "meaning": "to involve, to concern"
    },
    {
        "japanese": "白",
        "romaji": "shiro",
        "meaning": "white"
    },
    {
        "japanese": "進める",
        "romaji": "susumeru",
        "meaning": "to advance, to promote"
    },
    {
        "japanese": "真剣",
        "romaji": "shinken",
        "meaning": "serious, sincere"
    },
    {
        "japanese": "迫る",
        "romaji": "semaru",
        "meaning": "to press, to close in on"
    },
    {
        "japanese": "ほぼ",
        "romaji": "hobo",
        "meaning": "almost, nearly"
    },
    {
        "japanese": "ちょうど",
        "romaji": "choudo",
        "meaning": "just, as if"
    },
    {
        "japanese": "疑問",
        "romaji": "gimon",
        "meaning": "question, doubt"
    },
    {
        "japanese": "指示",
        "romaji": "shiji",
        "meaning": "instruction, indication"
    },
    {
        "japanese": "揺れる",
        "romaji": "yureru",
        "meaning": "to shake, to sway"
    },
    {
        "japanese": "相当",
        "romaji": "soutou",
        "meaning": "correspondence, suitability"
    },
    {
        "japanese": "楽",
        "romaji": "raku",
        "meaning": "easy, comfortable"
    },
    {
        "japanese": "勘違い",
        "romaji": "kanchigai",
        "meaning": "misunderstanding"
    },
    {
        "japanese": "警戒",
        "romaji": "keikai",
        "meaning": "vigilance, precaution"
    },
    {
        "japanese": "確かめる",
        "romaji": "tashikameru",
        "meaning": "to check, to make sure of"
    },
    {
        "japanese": "月",
        "romaji": "tsuki",
        "meaning": "moon"
    },
    {
        "japanese": "疑う",
        "romaji": "utagau",
        "meaning": "to doubt, to be suspicious"
    },
    {
        "japanese": "電話",
        "romaji": "denwa",
        "meaning": "telephone"
    },
    {
        "japanese": "成長",
        "romaji": "seichou",
        "meaning": "growth"
    },
    {
        "japanese": "鋭い",
        "romaji": "surudoi",
        "meaning": "acute, sharp"
    },
    {
        "japanese": "証拠",
        "romaji": "shouko",
        "meaning": "proof, evidence"
    },
    {
        "japanese": "紹介",
        "romaji": "shoukai",
        "meaning": "introduction, referral"
    },
    {
        "japanese": "実際",
        "romaji": "jissai",
        "meaning": "reality, actuality"
    },
    {
        "japanese": "何でも",
        "romaji": "nandemo",
        "meaning": "anything, whatever"
    },
    {
        "japanese": "作業",
        "romaji": "sagyou",
        "meaning": "work, operation"
    },
    {
        "japanese": "重要",
        "romaji": "juuyou",
        "meaning": "important, essential"
    },
    {
        "japanese": "鍵",
        "romaji": "kagi",
        "meaning": "key"
    },
    {
        "japanese": "衝撃",
        "romaji": "shougeki",
        "meaning": "impact, shock"
    },
    {
        "japanese": "巻き込む",
        "romaji": "makikomu",
        "meaning": "to roll up, to involve"
    },
    {
        "japanese": "差し出す",
        "romaji": "sashidasu",
        "meaning": "to&nbsp;submit"
    },
    {
        "japanese": "軍",
        "romaji": "gun",
        "meaning": "army, troops"
    },
    {
        "japanese": "そちら",
        "romaji": "sochira",
        "meaning": "there, that way"
    },
    {
        "japanese": "悔しい",
        "romaji": "kuyashii",
        "meaning": "vexing, frustrating"
    },
    {
        "japanese": "抜く",
        "romaji": "nuku",
        "meaning": "to pull out"
    },
    {
        "japanese": "破壊",
        "romaji": "hakai",
        "meaning": "breaking, destruction"
    },
    {
        "japanese": "運命",
        "romaji": "unmei",
        "meaning": "fate, fortune"
    },
    {
        "japanese": "案内",
        "romaji": "annai",
        "meaning": "guide, show around"
    },
    {
        "japanese": "努力",
        "romaji": "doryoku",
        "meaning": "endeavor, effort"
    },
    {
        "japanese": "いずれ",
        "romaji": "izure",
        "meaning": "eventually, sometime"
    },
    {
        "japanese": "一言",
        "romaji": "hitokoto",
        "meaning": "single word, a few words"
    },
    {
        "japanese": "ついに",
        "romaji": "tsuini",
        "meaning": "at last, finally"
    },
    {
        "japanese": "心臓",
        "romaji": "shinzou",
        "meaning": "heart"
    },
    {
        "japanese": "荷物",
        "romaji": "nimotsu",
        "meaning": "baggage, load"
    },
    {
        "japanese": "伸びる",
        "romaji": "nobiru",
        "meaning": "to stretch, to grow"
    },
    {
        "japanese": "両親",
        "romaji": "ryoushin",
        "meaning": "(both) parents"
    },
    {
        "japanese": "量",
        "romaji": "ryou",
        "meaning": "amount, portion"
    },
    {
        "japanese": "払う",
        "romaji": "harau",
        "meaning": "to pay"
    },
    {
        "japanese": "二度と",
        "romaji": "nidoto",
        "meaning": "never again"
    },
    {
        "japanese": "辺り",
        "romaji": "atari",
        "meaning": "vicinity, around"
    },
    {
        "japanese": "開始",
        "romaji": "kaishi",
        "meaning": "beginning"
    },
    {
        "japanese": "解放",
        "romaji": "kaihou",
        "meaning": "release, setting free"
    },
    {
        "japanese": "仲良く",
        "romaji": "nakayoku",
        "meaning": "harmoniously, amicably"
    },
    {
        "japanese": "獣",
        "romaji": "kemono",
        "meaning": "beast, brute"
    },
    {
        "japanese": "取れる",
        "romaji": "toreru",
        "meaning": "to come off, to be removed"
    },
    {
        "japanese": "建物",
        "romaji": "tatemono",
        "meaning": "building, structure"
    },
    {
        "japanese": "本来",
        "romaji": "honrai",
        "meaning": "originally, essentially"
    },
    {
        "japanese": "扱う",
        "romaji": "atsukau",
        "meaning": "to handle, to deal with"
    },
    {
        "japanese": "真面目",
        "romaji": "majime",
        "meaning": "serious, earnest"
    },
    {
        "japanese": "影響",
        "romaji": "eikyou",
        "meaning": "influence, effect"
    },
    {
        "japanese": "真っ赤",
        "romaji": "makka",
        "meaning": "deep red"
    },
    {
        "japanese": "発見",
        "romaji": "hakken",
        "meaning": "discovery, revelation"
    },
    {
        "japanese": "支える",
        "romaji": "sasaeru",
        "meaning": "to support, to maintain"
    },
    {
        "japanese": "第一",
        "romaji": "daiichi",
        "meaning": "number one, first"
    },
    {
        "japanese": "お父さん",
        "romaji": "otousan",
        "meaning": "father"
    },
    {
        "japanese": "お母さん",
        "romaji": "okaasan",
        "meaning": "mother"
    },
    {
        "japanese": "お兄さん",
        "romaji": "oniisan",
        "meaning": "older brother"
    },
    {
        "japanese": "お姉さん",
        "romaji": "oneesan",
        "meaning": "older sister"
    },
    {
        "japanese": "おじさん",
        "romaji": "ojisan",
        "meaning": "uncle"
    },
    {
        "japanese": "おばさん",
        "romaji": "obasan",
        "meaning": "aunt"
    },
    {
        "japanese": "いとこ",
        "romaji": "itoko",
        "meaning": "cousin"
    },
    {
        "japanese": "机",
        "romaji": "tsukue",
        "meaning": "desk, table"
    },
    {
        "japanese": "同士",
        "romaji": "doushi",
        "meaning": "of the same kind, each other, fellow"
    },
    {
        "japanese": "遅れる",
        "romaji": "okureru",
        "meaning": "to be late"
    },
    {
        "japanese": "車",
        "romaji": "kuruma",
        "meaning": "car, automobile"
    },
    {
        "japanese": "飛び出す",
        "romaji": "tobidasu",
        "meaning": "to&nbsp;fly out, to&nbsp;dash out"
    },
    {
        "japanese": "事態",
        "romaji": "jitai",
        "meaning": "situation, state of affairs"
    },
    {
        "japanese": "味方",
        "romaji": "mikata",
        "meaning": "friend, ally"
    },
    {
        "japanese": "展開",
        "romaji": "tenkai",
        "meaning": "unfolding, development"
    },
    {
        "japanese": "学園",
        "romaji": "gakuen",
        "meaning": "educational institution, school"
    },
    {
        "japanese": "怪しい",
        "romaji": "ayashii",
        "meaning": "suspicious, dubious"
    },
    {
        "japanese": "型",
        "romaji": "kata",
        "meaning": "type, model"
    },
    {
        "japanese": "流れ",
        "romaji": "nagare",
        "meaning": "flow, stream"
    },
    {
        "japanese": "残り",
        "romaji": "nokori",
        "meaning": "rest, leftover"
    },
    {
        "japanese": "偶然",
        "romaji": "guuzen",
        "meaning": "chance, accident"
    },
    {
        "japanese": "柔らかい",
        "romaji": "yawarakai",
        "meaning": "soft"
    },
    {
        "japanese": "感触",
        "romaji": "kanshoku",
        "meaning": "feeling, touch"
    },
    {
        "japanese": "女子",
        "romaji": "joshi",
        "meaning": "woman, girl"
    },
    {
        "japanese": "無し",
        "romaji": "nashi",
        "meaning": "naught, nothing"
    },
    {
        "japanese": "壊れる",
        "romaji": "kowareru",
        "meaning": "to break, to fall apart"
    },
    {
        "japanese": "苦手",
        "romaji": "nigate",
        "meaning": "hard to deal with, weak point"
    },
    {
        "japanese": "試す",
        "romaji": "tamesu",
        "meaning": "to try, to test"
    },
    {
        "japanese": "立派",
        "romaji": "rippa",
        "meaning": "fine, excellent"
    },
    {
        "japanese": "回す",
        "romaji": "mawasu",
        "meaning": "to turn, to rotate"
    },
    {
        "japanese": "なぜか",
        "romaji": "nazeka",
        "meaning": "for some reason"
    },
    {
        "japanese": "意見",
        "romaji": "iken",
        "meaning": "opinion"
    },
    {
        "japanese": "大量",
        "romaji": "tairyou",
        "meaning": "large quantity, great volume"
    },
    {
        "japanese": "提案",
        "romaji": "teian",
        "meaning": "proposal, proposition"
    },
    {
        "japanese": "責任",
        "romaji": "sekinin",
        "meaning": "responsibility, liability"
    },
    {
        "japanese": "抑える",
        "romaji": "osaeru",
        "meaning": "to hold back, to restrain"
    },
    {
        "japanese": "全力",
        "romaji": "zenryoku",
        "meaning": "with all of one's strength, at full capacity"
    },
    {
        "japanese": "伸ばす",
        "romaji": "nobasu",
        "meaning": "to stretch, to straighten"
    },
    {
        "japanese": "客",
        "romaji": "kyaku",
        "meaning": "customer, guest"
    },
    {
        "japanese": "王国",
        "romaji": "oukoku",
        "meaning": "kingdom, monarchy"
    },
    {
        "japanese": "抵抗",
        "romaji": "teikou",
        "meaning": "resistance, opposition"
    },
    {
        "japanese": "混乱",
        "romaji": "konran",
        "meaning": "disorder, chaos"
    },
    {
        "japanese": "条件",
        "romaji": "jouken",
        "meaning": "condition, item"
    },
    {
        "japanese": "迷惑",
        "romaji": "meiwaku",
        "meaning": "trouble, annoyance"
    },
    {
        "japanese": "例",
        "romaji": "rei",
        "meaning": "example"
    },
    {
        "japanese": "頼る",
        "romaji": "tayoru",
        "meaning": "to rely on, to depend on"
    },
    {
        "japanese": "完璧",
        "romaji": "kanpeki",
        "meaning": "flawless, perfect"
    },
    {
        "japanese": "日々",
        "romaji": "hibi",
        "meaning": "daily, every day"
    },
    {
        "japanese": "行為",
        "romaji": "koui",
        "meaning": "act, conduct"
    },
    {
        "japanese": "ともかく",
        "romaji": "tomokaku",
        "meaning": "at least, at any rate"
    },
    {
        "japanese": "減る",
        "romaji": "heru",
        "meaning": "to decrease, to diminish"
    },
    {
        "japanese": "嫌う",
        "romaji": "kirau",
        "meaning": "to dislike, to hate"
    },
    {
        "japanese": "知り合い",
        "romaji": "shiriai",
        "meaning": "acquaintance"
    },
    {
        "japanese": "思考",
        "romaji": "shikou",
        "meaning": "thinking, thought"
    },
    {
        "japanese": "解決",
        "romaji": "kaiketsu",
        "meaning": "solution, settlement"
    },
    {
        "japanese": "冷静",
        "romaji": "reisei",
        "meaning": "cool, calm"
    },
    {
        "japanese": "天",
        "romaji": "ten",
        "meaning": "sky, Heaven"
    },
    {
        "japanese": "いつの間にか",
        "romaji": "itsunomanika",
        "meaning": "before one knows, unnoticed"
    },
    {
        "japanese": "直す",
        "romaji": "naosu",
        "meaning": "to repair, to cure, to alter"
    },
    {
        "japanese": "常に",
        "romaji": "tsuneni",
        "meaning": "always, constantly"
    },
    {
        "japanese": "犯人",
        "romaji": "hannin",
        "meaning": "criminal, culprit"
    },
    {
        "japanese": "許可",
        "romaji": "kyoka",
        "meaning": "permission, approval"
    },
    {
        "japanese": "閉じる",
        "romaji": "tojiru",
        "meaning": "to close"
    },
    {
        "japanese": "重ねる",
        "romaji": "kasaneru",
        "meaning": "to put on top of something, to pile up"
    },
    {
        "japanese": "細い",
        "romaji": "hosoi",
        "meaning": "thin, narrow, slender"
    },
    {
        "japanese": "久しぶり",
        "romaji": "hisashiburi",
        "meaning": "for the first time in a while"
    },
    {
        "japanese": "目立つ",
        "romaji": "medatsu",
        "meaning": "to stand out, to be conspicuous"
    },
    {
        "japanese": "到着",
        "romaji": "touchaku",
        "meaning": "arrival"
    },
    {
        "japanese": "押さえる",
        "romaji": "osaeru",
        "meaning": "to hold down, to hold steady"
    },
    {
        "japanese": "通う",
        "romaji": "kayou",
        "meaning": "to go to and from, to frequent a place"
    },
    {
        "japanese": "殴る",
        "romaji": "naguru",
        "meaning": "to hit, to strike"
    },
    {
        "japanese": "広げる",
        "romaji": "hirogeru",
        "meaning": "to spread, to unfold"
    },
    {
        "japanese": "引っ張る",
        "romaji": "hipparu",
        "meaning": "to pull, to drag"
    },
    {
        "japanese": "いつまでも",
        "romaji": "itsumademo",
        "meaning": "endlessly, as long as one likes"
    },
    {
        "japanese": "間に合う",
        "romaji": "maniau",
        "meaning": "to be in time, to answer the purpose, can do without"
    },
    {
        "japanese": "了解",
        "romaji": "ryoukai",
        "meaning": "consent, understanding, roger that"
    },
    {
        "japanese": "番",
        "romaji": "ban",
        "meaning": "one's turn"
    },
    {
        "japanese": "戦争",
        "romaji": "sensou",
        "meaning": "war, battle"
    },
    {
        "japanese": "寒い",
        "romaji": "samui",
        "meaning": "cold (temperature)"
    },
    {
        "japanese": "見事",
        "romaji": "migoto",
        "meaning": "splendid, admirable"
    },
    {
        "japanese": "酒",
        "romaji": "sake",
        "meaning": "alcoholic drink, Japanese rice wine"
    },
    {
        "japanese": "恋人",
        "romaji": "koibito",
        "meaning": "lover, sweetheart"
    },
    {
        "japanese": "一切",
        "romaji": "issai",
        "meaning": "not at all, absolutely nothing"
    },
    {
        "japanese": "穴",
        "romaji": "ana",
        "meaning": "hole, cavity"
    },
    {
        "japanese": "依頼",
        "romaji": "irai",
        "meaning": "request, commission"
    },
    {
        "japanese": "中身",
        "romaji": "nakami",
        "meaning": "content, interior"
    },
    {
        "japanese": "多少",
        "romaji": "tashou",
        "meaning": "a little, somewhat"
    },
    {
        "japanese": "真実",
        "romaji": "shinjitsu",
        "meaning": "truth, reality"
    },
    {
        "japanese": "見た目",
        "romaji": "mitame",
        "meaning": "outward appearance"
    },
    {
        "japanese": "間違い",
        "romaji": "machigai",
        "meaning": "mistake, error"
    },
    {
        "japanese": "青い",
        "romaji": "aoi",
        "meaning": "blue"
    },
    {
        "japanese": "辛い",
        "romaji": "karai",
        "meaning": "spicy"
    },
    {
        "japanese": "辛い",
        "romaji": "tsurai",
        "meaning": "difficult, harsh"
    },
    {
        "japanese": "対応",
        "romaji": "taiou",
        "meaning": "correspondence, equivalence, response"
    },
    {
        "japanese": "光る",
        "romaji": "hikaru",
        "meaning": "to shine, to emit light"
    },
    {
        "japanese": "苦労",
        "romaji": "kurou",
        "meaning": "difficulty, hardship"
    },
    {
        "japanese": "通じる",
        "romaji": "tsuujiru",
        "meaning": "to pass, to communicate with"
    },
    {
        "japanese": "罪",
        "romaji": "tsumi",
        "meaning": "crime, sin"
    },
    {
        "japanese": "授業",
        "romaji": "jugyou",
        "meaning": "class, lesson"
    },
    {
        "japanese": "最悪",
        "romaji": "saiaku",
        "meaning": "worst, terrible"
    },
    {
        "japanese": "差",
        "romaji": "sa",
        "meaning": "difference"
    },
    {
        "japanese": "信用",
        "romaji": "shinyou",
        "meaning": "trust, credit"
    },
    {
        "japanese": "壊す",
        "romaji": "kowasu",
        "meaning": "to break, to destroy, to smash"
    },
    {
        "japanese": "式",
        "romaji": "shiki",
        "meaning": "ceremony"
    },
    {
        "japanese": "人形",
        "romaji": "ningyou",
        "meaning": "doll"
    },
    {
        "japanese": "結ぶ",
        "romaji": "musubu",
        "meaning": "to tie, to join"
    },
    {
        "japanese": "あんなに",
        "romaji": "annani",
        "meaning": "that much, such..."
    },
    {
        "japanese": "計画",
        "romaji": "keikaku",
        "meaning": "plan, project"
    },
    {
        "japanese": "囲む",
        "romaji": "kakomu",
        "meaning": "to enclose, to encircle"
    },
    {
        "japanese": "知識",
        "romaji": "chishiki",
        "meaning": "knowledge"
    },
    {
        "japanese": "切り",
        "romaji": "kiri",
        "meaning": "end, place to stop"
    },
    {
        "japanese": "注意",
        "romaji": "chuui",
        "meaning": "care, watch out"
    },
    {
        "japanese": "言い方",
        "romaji": "iikata",
        "meaning": "way of speaking, expression"
    },
    {
        "japanese": "経つ",
        "romaji": "tatsu",
        "meaning": "to pass, to elapse"
    },
    {
        "japanese": "背",
        "romaji": "se",
        "meaning": "height, stature"
    },
    {
        "japanese": "問う",
        "romaji": "tou",
        "meaning": "to ask, to inquire"
    },
    {
        "japanese": "恋",
        "romaji": "koi",
        "meaning": "love, romance"
    },
    {
        "japanese": "とんでもない",
        "romaji": "tondemonai",
        "meaning": "unthinkable, outrageous"
    },
    {
        "japanese": "中心",
        "romaji": "chuushin",
        "meaning": "center, middle"
    },
    {
        "japanese": "汗",
        "romaji": "ase",
        "meaning": "sweat"
    },
    {
        "japanese": "異常",
        "romaji": "ijou",
        "meaning": "extraordinary, exceptional"
    },
    {
        "japanese": "非常",
        "romaji": "hijou",
        "meaning": "emergency, calamity"
    },
    {
        "japanese": "膝",
        "romaji": "hiza",
        "meaning": "knee"
    },
    {
        "japanese": "わずか",
        "romaji": "wazuka",
        "meaning": "few, little"
    },
    {
        "japanese": "役",
        "romaji": "yaku",
        "meaning": "role, part"
    },
    {
        "japanese": "焦る",
        "romaji": "aseru",
        "meaning": "to feel pressured, to feel hurried"
    },
    {
        "japanese": "川",
        "romaji": "kawa",
        "meaning": "river, stream"
    },
    {
        "japanese": "悪魔",
        "romaji": "akuma",
        "meaning": "demon, devil"
    },
    {
        "japanese": "唯一",
        "romaji": "yuiitsu",
        "meaning": "(the) only, unique"
    },
    {
        "japanese": "もうすぐ",
        "romaji": "mousugu",
        "meaning": "soon, before long"
    },
    {
        "japanese": "中央",
        "romaji": "chuuou",
        "meaning": "center"
    },
    {
        "japanese": "突っ込む",
        "romaji": "tsukkomu",
        "meaning": "to thrust in, to dash into"
    },
    {
        "japanese": "技術",
        "romaji": "gijutsu",
        "meaning": "technology"
    },
    {
        "japanese": "素晴らしい",
        "romaji": "subarashii",
        "meaning": "splendid, excellent"
    },
    {
        "japanese": "単純",
        "romaji": "tanjun",
        "meaning": "simple, uncomplicated"
    },
    {
        "japanese": "穏やか",
        "romaji": "odayaka",
        "meaning": "calm, mild"
    },
    {
        "japanese": "撃つ",
        "romaji": "utsu",
        "meaning": "to fire, to shoot"
    },
    {
        "japanese": "拾う",
        "romaji": "hirou",
        "meaning": "to pick up, to find"
    },
    {
        "japanese": "完成",
        "romaji": "kansei",
        "meaning": "completion, finish"
    },
    {
        "japanese": "毒",
        "romaji": "doku",
        "meaning": "poison, harm"
    },
    {
        "japanese": "馬",
        "romaji": "uma",
        "meaning": "horse"
    },
    {
        "japanese": "覆う",
        "romaji": "oou",
        "meaning": "to cover, to hide"
    },
    {
        "japanese": "趣味",
        "romaji": "shumi",
        "meaning": "hobby"
    },
    {
        "japanese": "どうにか",
        "romaji": "dounika",
        "meaning": "somehow"
    },
    {
        "japanese": "何となく",
        "romaji": "nantonaku",
        "meaning": "for some reason"
    },
    {
        "japanese": "価値",
        "romaji": "kachi",
        "meaning": "value, merit"
    },
    {
        "japanese": "見守る",
        "romaji": "mimamoru",
        "meaning": "to watch, to keep watch over"
    },
    {
        "japanese": "安全",
        "romaji": "anzen",
        "meaning": "safety, security"
    },
    {
        "japanese": "連れてくる",
        "romaji": "tsuretekuru",
        "meaning": "to bring over, to bring along"
    },
    {
        "japanese": "そば",
        "romaji": "soba",
        "meaning": "side, vicinity"
    },
    {
        "japanese": "万",
        "romaji": "man",
        "meaning": "ten thousand"
    },
    {
        "japanese": "額",
        "romaji": "gaku",
        "meaning": "picture frame"
    },
    {
        "japanese": "受け止める",
        "romaji": "uketomeru",
        "meaning": "to&nbsp;catch, to&nbsp;receive"
    },
    {
        "japanese": "素敵",
        "romaji": "suteki",
        "meaning": "lovely, superb"
    },
    {
        "japanese": "正体",
        "romaji": "shoutai",
        "meaning": "true character, true form"
    },
    {
        "japanese": "あっさり",
        "romaji": "assari",
        "meaning": "lightly, easily, simply"
    },
    {
        "japanese": "吸う",
        "romaji": "suu",
        "meaning": "to smoke"
    },
    {
        "japanese": "鳴る",
        "romaji": "naru",
        "meaning": "to ring, to beep"
    },
    {
        "japanese": "研究",
        "romaji": "kenkyuu",
        "meaning": "research"
    },
    {
        "japanese": "まとめる",
        "romaji": "matomeru",
        "meaning": "to gather together, to put in order"
    },
    {
        "japanese": "別れる",
        "romaji": "wakareru",
        "meaning": "to separate, to part from"
    },
    {
        "japanese": "ふざける",
        "romaji": "fuzakeru",
        "meaning": "to mess around, to fool around"
    },
    {
        "japanese": "着替える",
        "romaji": "kigaeru",
        "meaning": "to change clothes"
    },
    {
        "japanese": "箱",
        "romaji": "hako",
        "meaning": "box, case"
    },
    {
        "japanese": "無言",
        "romaji": "mugon",
        "meaning": "silence, muteness"
    },
    {
        "japanese": "何で",
        "romaji": "nande",
        "meaning": "why, what for"
    },
    {
        "japanese": "裏切る",
        "romaji": "uragiru",
        "meaning": "to betray"
    },
    {
        "japanese": "焼く",
        "romaji": "yaku",
        "meaning": "to burn, to bake"
    },
    {
        "japanese": "怪我",
        "romaji": "kega",
        "meaning": "injury"
    },
    {
        "japanese": "門",
        "romaji": "mon",
        "meaning": "gate, entrance"
    },
    {
        "japanese": "不可能",
        "romaji": "fukanou",
        "meaning": "impossible"
    },
    {
        "japanese": "妻",
        "romaji": "tsuma",
        "meaning": "wife"
    },
    {
        "japanese": "時には",
        "romaji": "tokiniha",
        "meaning": "occasionally, at times"
    },
    {
        "japanese": "発言",
        "romaji": "hatsugen",
        "meaning": "speech"
    },
    {
        "japanese": "正確",
        "romaji": "seikaku",
        "meaning": "accurate, precise"
    },
    {
        "japanese": "認識",
        "romaji": "ninshiki",
        "meaning": "recognition, acknowledgment"
    },
    {
        "japanese": "速度",
        "romaji": "sokudo",
        "meaning": "velocity, speed"
    },
    {
        "japanese": "謎",
        "romaji": "nazo",
        "meaning": "mystery, puzzle"
    },
    {
        "japanese": "文字",
        "romaji": "moji",
        "meaning": "character, letter"
    },
    {
        "japanese": "吐く",
        "romaji": "haku",
        "meaning": "to spew, to vomit, to holler"
    },
    {
        "japanese": "鬼",
        "romaji": "oni",
        "meaning": "demon, ogre"
    },
    {
        "japanese": "刺激",
        "romaji": "shigeki",
        "meaning": "stimulus, stimulation"
    },
    {
        "japanese": "最も",
        "romaji": "mottomo",
        "meaning": "the most"
    },
    {
        "japanese": "制服",
        "romaji": "seifuku",
        "meaning": "uniform"
    },
    {
        "japanese": "爆発",
        "romaji": "bakuhatsu",
        "meaning": "blast, explosion"
    },
    {
        "japanese": "訓練",
        "romaji": "kunren",
        "meaning": "training, drill"
    },
    {
        "japanese": "振り向く",
        "romaji": "furimuku",
        "meaning": "to turn around, to look back"
    },
    {
        "japanese": "脱ぐ",
        "romaji": "nugu",
        "meaning": "to remove clothes, to take off"
    },
    {
        "japanese": "信頼",
        "romaji": "shinrai",
        "meaning": "trust, faith"
    },
    {
        "japanese": "寄る",
        "romaji": "yoru",
        "meaning": "to stop by, to drop by"
    },
    {
        "japanese": "飛ばす",
        "romaji": "tobasu",
        "meaning": "to fly, to launch in the air"
    },
    {
        "japanese": "貸す",
        "romaji": "kasu",
        "meaning": "to lend, to lease"
    },
    {
        "japanese": "パン",
        "romaji": "pan",
        "meaning": "bread"
    },
    {
        "japanese": "ありがたい",
        "romaji": "arigatai",
        "meaning": "welcome, grateful"
    },
    {
        "japanese": "赤",
        "romaji": "aka",
        "meaning": "red"
    },
    {
        "japanese": "大体",
        "romaji": "daitai",
        "meaning": "mostly"
    },
    {
        "japanese": "きちんと",
        "romaji": "kichinto",
        "meaning": "neatly, accurately"
    },
    {
        "japanese": "喉",
        "romaji": "nodo",
        "meaning": "throat"
    },
    {
        "japanese": "少々",
        "romaji": "shoushou",
        "meaning": "a little, a few"
    },
    {
        "japanese": "有名",
        "romaji": "yuumei",
        "meaning": "famous"
    },
    {
        "japanese": "船",
        "romaji": "fune",
        "meaning": "ship, boat"
    },
    {
        "japanese": "転がる",
        "romaji": "korogaru",
        "meaning": "to roll over, to tumble"
    },
    {
        "japanese": "切れる",
        "romaji": "kireru",
        "meaning": "to be able to cut, to run out, to expire"
    },
    {
        "japanese": "たった",
        "romaji": "tatta",
        "meaning": "only, merely"
    },
    {
        "japanese": "話題",
        "romaji": "wadai",
        "meaning": "topic of conversation"
    },
    {
        "japanese": "濡れる",
        "romaji": "nureru",
        "meaning": "to get wet"
    },
    {
        "japanese": "ついでに",
        "romaji": "tsuideni",
        "meaning": "on the way, while one's at it"
    },
    {
        "japanese": "呼び出す",
        "romaji": "yobidasu",
        "meaning": "to call someone to"
    },
    {
        "japanese": "確信",
        "romaji": "kakushin",
        "meaning": "firm belief, conviction"
    },
    {
        "japanese": "込める",
        "romaji": "komeru",
        "meaning": "to put in, to concentrate on"
    },
    {
        "japanese": "自覚",
        "romaji": "jikaku",
        "meaning": "awareness"
    },
    {
        "japanese": "空く",
        "romaji": "aku",
        "meaning": "to become available or vacant"
    },
    {
        "japanese": "空く",
        "romaji": "suku",
        "meaning": "to be empty, to become less crowded"
    },
    {
        "japanese": "警察",
        "romaji": "keisatsu",
        "meaning": "police"
    },
    {
        "japanese": "悲鳴",
        "romaji": "himei",
        "meaning": "shriek, scream"
    },
    {
        "japanese": "捕まえる",
        "romaji": "tsukamaeru",
        "meaning": "to arrest, to capture"
    },
    {
        "japanese": "早速",
        "romaji": "sassoku",
        "meaning": "immediately"
    },
    {
        "japanese": "お腹",
        "romaji": "onaka",
        "meaning": "stomach, belly"
    },
    {
        "japanese": "掃除",
        "romaji": "souji",
        "meaning": "cleaning"
    },
    {
        "japanese": "硬い",
        "romaji": "katai",
        "meaning": "hard, stiff"
    },
    {
        "japanese": "際",
        "romaji": "sai",
        "meaning": "occasion, time"
    },
    {
        "japanese": "漏らす",
        "romaji": "morasu",
        "meaning": "to give away, to let leak"
    },
    {
        "japanese": "面",
        "romaji": "men",
        "meaning": "surface, aspect"
    },
    {
        "japanese": "不満",
        "romaji": "fuman",
        "meaning": "dissatisfaction, discontent"
    },
    {
        "japanese": "驚き",
        "romaji": "odoroki",
        "meaning": "surprise, amazement"
    },
    {
        "japanese": "旅",
        "romaji": "tabi",
        "meaning": "journey, travel"
    },
    {
        "japanese": "絵",
        "romaji": "e",
        "meaning": "picture, drawing"
    },
    {
        "japanese": "組む",
        "romaji": "kumu",
        "meaning": "to pair up, to partner with"
    },
    {
        "japanese": "沈黙",
        "romaji": "chinmoku",
        "meaning": "reticence, silence"
    },
    {
        "japanese": "張る",
        "romaji": "haru",
        "meaning": "to strain, to be stretched"
    },
    {
        "japanese": "告白",
        "romaji": "kokuhaku",
        "meaning": "confession, admission"
    },
    {
        "japanese": "舐める",
        "romaji": "nameru",
        "meaning": "to lick"
    },
    {
        "japanese": "潰す",
        "romaji": "tsubusu",
        "meaning": "to crush, to smash"
    },
    {
        "japanese": "含める",
        "romaji": "fukumeru",
        "meaning": "to include"
    },
    {
        "japanese": "時期",
        "romaji": "jiki",
        "meaning": "time, season, period"
    },
    {
        "japanese": "活動",
        "romaji": "katsudou",
        "meaning": "activity"
    },
    {
        "japanese": "育てる",
        "romaji": "sodateru",
        "meaning": "to bring up, to breed"
    },
    {
        "japanese": "優秀",
        "romaji": "yuushuu",
        "meaning": "excellent, exceptional"
    },
    {
        "japanese": "予感",
        "romaji": "yokan",
        "meaning": "hunch, premonition"
    },
    {
        "japanese": "解く",
        "romaji": "toku",
        "meaning": "to solve"
    },
    {
        "japanese": "元々",
        "romaji": "motomoto",
        "meaning": "originally, by nature"
    },
    {
        "japanese": "溢れる",
        "romaji": "afureru",
        "meaning": "to overflow, to flood"
    },
    {
        "japanese": "発生",
        "romaji": "hassei",
        "meaning": "occurrence, happening"
    },
    {
        "japanese": "微妙",
        "romaji": "bimyou",
        "meaning": "subtle, delicate, sensitive, iffy"
    },
    {
        "japanese": "違い",
        "romaji": "chigai",
        "meaning": "difference, mistake"
    },
    {
        "japanese": "直後",
        "romaji": "chokugo",
        "meaning": "immediately after"
    },
    {
        "japanese": "地下",
        "romaji": "chika",
        "meaning": "underground"
    },
    {
        "japanese": "香り",
        "romaji": "kaori",
        "meaning": "perfume, fragrance"
    },
    {
        "japanese": "効く",
        "romaji": "kiku",
        "meaning": "to be effective"
    },
    {
        "japanese": "使用",
        "romaji": "shiyou",
        "meaning": "usage"
    },
    {
        "japanese": "道具",
        "romaji": "dougu",
        "meaning": "tool"
    },
    {
        "japanese": "願い",
        "romaji": "negai",
        "meaning": "wish, request"
    },
    {
        "japanese": "洗う",
        "romaji": "arau",
        "meaning": "to wash"
    },
    {
        "japanese": "手段",
        "romaji": "shudan",
        "meaning": "means, way"
    },
    {
        "japanese": "誤解",
        "romaji": "gokai",
        "meaning": "misunderstanding"
    },
    {
        "japanese": "応援",
        "romaji": "ouen",
        "meaning": "cheering"
    },
    {
        "japanese": "含む",
        "romaji": "fukumu",
        "meaning": "to contain, to include"
    },
    {
        "japanese": "当時",
        "romaji": "touji",
        "meaning": "at that time, at the present time"
    },
    {
        "japanese": "勝利",
        "romaji": "shouri",
        "meaning": "triumph, victory"
    },
    {
        "japanese": "降る",
        "romaji": "furu",
        "meaning": "to fall (e.g. rain)"
    },
    {
        "japanese": "雪",
        "romaji": "yuki",
        "meaning": "snow, snowfall"
    },
    {
        "japanese": "入り口",
        "romaji": "iriguchi",
        "meaning": "entrance"
    },
    {
        "japanese": "一方",
        "romaji": "ippou",
        "meaning": "one way"
    },
    {
        "japanese": "古い",
        "romaji": "furui",
        "meaning": "old"
    },
    {
        "japanese": "役に立つ",
        "romaji": "yakunitatsu",
        "meaning": "to be useful, to be helpful"
    },
    {
        "japanese": "懐かしい",
        "romaji": "natsukashii",
        "meaning": "longed-for, nostalgic"
    },
    {
        "japanese": "もしも",
        "romaji": "moshimo",
        "meaning": "if, if ever"
    },
    {
        "japanese": "才能",
        "romaji": "sainou",
        "meaning": "talent, ability"
    },
    {
        "japanese": "逃げ出す",
        "romaji": "nigedasu",
        "meaning": "to&nbsp;make a break for, to&nbsp;run off"
    },
    {
        "japanese": "様々",
        "romaji": "samazama",
        "meaning": "various, diverse"
    },
    {
        "japanese": "病院",
        "romaji": "byouin",
        "meaning": "hospital"
    },
    {
        "japanese": "比べる",
        "romaji": "kuraberu",
        "meaning": "to compare, to contrast"
    },
    {
        "japanese": "氷",
        "romaji": "koori",
        "meaning": "ice"
    },
    {
        "japanese": "狭い",
        "romaji": "semai",
        "meaning": "narrow, cramped"
    },
    {
        "japanese": "神様",
        "romaji": "kamisama",
        "meaning": "God, the divine"
    },
    {
        "japanese": "動揺",
        "romaji": "douyou",
        "meaning": "shaking, turbulence"
    },
    {
        "japanese": "長",
        "romaji": "chou",
        "meaning": "chief, head"
    },
    {
        "japanese": "なお",
        "romaji": "nao",
        "meaning": "still, in addition"
    },
    {
        "japanese": "物語",
        "romaji": "monogatari",
        "meaning": "story, tale"
    },
    {
        "japanese": "文句",
        "romaji": "monku",
        "meaning": "complaint"
    },
    {
        "japanese": "至る",
        "romaji": "itaru",
        "meaning": "to come to, to reach"
    },
    {
        "japanese": "魚",
        "romaji": "sakana",
        "meaning": "fish"
    },
    {
        "japanese": "鳥",
        "romaji": "tori",
        "meaning": "bird"
    },
    {
        "japanese": "映る",
        "romaji": "utsuru",
        "meaning": "to be reflected, to appear"
    },
    {
        "japanese": "一生",
        "romaji": "isshou",
        "meaning": "a lifetime"
    },
    {
        "japanese": "紙",
        "romaji": "kami",
        "meaning": "paper"
    },
    {
        "japanese": "申す",
        "romaji": "mousu",
        "meaning": "to be called..., to speak (humble form)"
    },
    {
        "japanese": "複雑",
        "romaji": "fukuzatsu",
        "meaning": "complicated, intricate"
    },
    {
        "japanese": "投げる",
        "romaji": "nageru",
        "meaning": "to throw, to abandon"
    },
    {
        "japanese": "出来事",
        "romaji": "dekigoto",
        "meaning": "occurrence, incident"
    },
    {
        "japanese": "部下",
        "romaji": "buka",
        "meaning": "subordinate"
    },
    {
        "japanese": "たっぷり",
        "romaji": "tappuri",
        "meaning": "fully, amply"
    },
    {
        "japanese": "実力",
        "romaji": "jitsuryoku",
        "meaning": "real ability, capability"
    },
    {
        "japanese": "左右",
        "romaji": "sayuu",
        "meaning": "right and left"
    },
    {
        "japanese": "選択",
        "romaji": "sentaku",
        "meaning": "choice, selection"
    },
    {
        "japanese": "調査",
        "romaji": "chousa",
        "meaning": "investigation, inquiry"
    },
    {
        "japanese": "例えば",
        "romaji": "tatoeba",
        "meaning": "for example"
    },
    {
        "japanese": "見送る",
        "romaji": "miokuru",
        "meaning": "to see (someone) off"
    },
    {
        "japanese": "もっとも",
        "romaji": "mottomo",
        "meaning": "quite right, reasonable"
    },
    {
        "japanese": "従う",
        "romaji": "shitagau",
        "meaning": "to follow, to obey"
    },
    {
        "japanese": "通す",
        "romaji": "toosu",
        "meaning": "to let pass, to run through"
    },
    {
        "japanese": "間違える",
        "romaji": "machigaeru",
        "meaning": "to mistake, to confuse"
    },
    {
        "japanese": "体力",
        "romaji": "tairyoku",
        "meaning": "stamina, endurance"
    },
    {
        "japanese": "果たす",
        "romaji": "hatasu",
        "meaning": "to accomplish, to carry out, to fulfill"
    },
    {
        "japanese": "騒ぐ",
        "romaji": "sawagu",
        "meaning": "to make a racket, to mess around"
    },
    {
        "japanese": "飛び込む",
        "romaji": "tobikomu",
        "meaning": "to dive into"
    },
    {
        "japanese": "増す",
        "romaji": "masu",
        "meaning": "to increase, to augment, to rise"
    },
    {
        "japanese": "ぶつかる",
        "romaji": "butsukaru",
        "meaning": "to hit, to bump into"
    },
    {
        "japanese": "思い出",
        "romaji": "omoide",
        "meaning": "recollections, memory"
    },
    {
        "japanese": "天井",
        "romaji": "tenjou",
        "meaning": "ceiling"
    },
    {
        "japanese": "兵士",
        "romaji": "heishi",
        "meaning": "soldier"
    },
    {
        "japanese": "満ちる",
        "romaji": "michiru",
        "meaning": "to fill, to become full"
    },
    {
        "japanese": "たまらない",
        "romaji": "tamaranai",
        "meaning": "can't stand, can't put up with"
    },
    {
        "japanese": "味わう",
        "romaji": "ajiwau",
        "meaning": "to taste, to appreciate"
    },
    {
        "japanese": "出かける",
        "romaji": "dekakeru",
        "meaning": "to go out"
    },
    {
        "japanese": "背負う",
        "romaji": "seou",
        "meaning": "to carry on one's back, to shoulder"
    },
    {
        "japanese": "揃う",
        "romaji": "sorou",
        "meaning": "to be (all) together"
    },
    {
        "japanese": "呼吸",
        "romaji": "kokyuu",
        "meaning": "breathing, respiration"
    },
    {
        "japanese": "真似",
        "romaji": "mane",
        "meaning": "imitation, mimicry"
    },
    {
        "japanese": "人気",
        "romaji": "ninki",
        "meaning": "popularity"
    },
    {
        "japanese": "偉い",
        "romaji": "erai",
        "meaning": "great, famous"
    },
    {
        "japanese": "いよいよ",
        "romaji": "iyoiyo",
        "meaning": "finally, at last"
    },
    {
        "japanese": "対象",
        "romaji": "taishou",
        "meaning": "target, object"
    },
    {
        "japanese": "整える",
        "romaji": "totonoeru",
        "meaning": "to arrange, to adjust"
    },
    {
        "japanese": "沈む",
        "romaji": "shizumu",
        "meaning": "to sink, to set"
    },
    {
        "japanese": "地上",
        "romaji": "chijou",
        "meaning": "above ground"
    },
    {
        "japanese": "用事",
        "romaji": "youji",
        "meaning": "things to do, errand, business"
    },
    {
        "japanese": "よる",
        "romaji": "yoru",
        "meaning": "to be caused by"
    },
    {
        "japanese": "反対",
        "romaji": "hantai",
        "meaning": "oppose, object"
    },
    {
        "japanese": "保つ",
        "romaji": "tamotsu",
        "meaning": "to preserve, to endure"
    },
    {
        "japanese": "歴史",
        "romaji": "rekishi",
        "meaning": "history"
    },
    {
        "japanese": "島",
        "romaji": "shima",
        "meaning": "island, isle"
    },
    {
        "japanese": "それほど",
        "romaji": "sorehodo",
        "meaning": "so much, that much"
    },
    {
        "japanese": "実に",
        "romaji": "jitsuni",
        "meaning": "truly, surely"
    },
    {
        "japanese": "恐れる",
        "romaji": "osoreru",
        "meaning": "to fear, to apprehend"
    },
    {
        "japanese": "あくまで",
        "romaji": "akumade",
        "meaning": "to the end, persistently"
    },
    {
        "japanese": "鼻",
        "romaji": "hana",
        "meaning": "nose"
    },
    {
        "japanese": "担当",
        "romaji": "tantou",
        "meaning": "person in charge"
    },
    {
        "japanese": "片手",
        "romaji": "katate",
        "meaning": "one hand"
    },
    {
        "japanese": "幼い",
        "romaji": "osanai",
        "meaning": "young, childish"
    },
    {
        "japanese": "学ぶ",
        "romaji": "manabu",
        "meaning": "to learn, to study"
    },
    {
        "japanese": "強引",
        "romaji": "gouin",
        "meaning": "overbearing, pushy"
    },
    {
        "japanese": "捲る",
        "romaji": "makuru",
        "meaning": "to turn up, to roll up (e.g. sleeves)"
    },
    {
        "japanese": "漏れる",
        "romaji": "moreru",
        "meaning": "to leak, to be disclosed"
    },
    {
        "japanese": "全体",
        "romaji": "zentai",
        "meaning": "whole, total"
    },
    {
        "japanese": "度",
        "romaji": "do",
        "meaning": "degree, extent"
    },
    {
        "japanese": "情けない",
        "romaji": "nasakenai",
        "meaning": "pathetic, shameful"
    },
    {
        "japanese": "太陽",
        "romaji": "taiyou",
        "meaning": "sun"
    },
    {
        "japanese": "甘える",
        "romaji": "amaeru",
        "meaning": "to depend on, to take advantage of"
    },
    {
        "japanese": "踏む",
        "romaji": "fumu",
        "meaning": "to step on, to tread on"
    },
    {
        "japanese": "印象",
        "romaji": "inshou",
        "meaning": "impression"
    },
    {
        "japanese": "死体",
        "romaji": "shitai",
        "meaning": "corpse, body"
    },
    {
        "japanese": "支配",
        "romaji": "shihai",
        "meaning": "control, management"
    },
    {
        "japanese": "現場",
        "romaji": "genba",
        "meaning": "actual spot, job site"
    },
    {
        "japanese": "絶望",
        "romaji": "zetsubou",
        "meaning": "despair, hopelessness"
    },
    {
        "japanese": "察する",
        "romaji": "sassuru",
        "meaning": "to sense, to guess"
    },
    {
        "japanese": "以来",
        "romaji": "irai",
        "meaning": "since"
    },
    {
        "japanese": "漂う",
        "romaji": "tadayou",
        "meaning": "to drift, to float"
    },
    {
        "japanese": "探る",
        "romaji": "saguru",
        "meaning": "to probe, to search into"
    },
    {
        "japanese": "最大",
        "romaji": "saidai",
        "meaning": "biggest, largest"
    },
    {
        "japanese": "下げる",
        "romaji": "sageru",
        "meaning": "to lower, to turn down"
    },
    {
        "japanese": "捕まる",
        "romaji": "tsukamaru",
        "meaning": "to be caught, to be arrested"
    },
    {
        "japanese": "戸惑う",
        "romaji": "tomadou",
        "meaning": "to be perplexed, to be bewildered"
    },
    {
        "japanese": "言い訳",
        "romaji": "iiwake",
        "meaning": "apology, excuse"
    },
    {
        "japanese": "証明",
        "romaji": "shoumei",
        "meaning": "proof, evidence"
    },
    {
        "japanese": "参る",
        "romaji": "mairu",
        "meaning": "to go, come (humble form)"
    },
    {
        "japanese": "見下ろす",
        "romaji": "miorosu",
        "meaning": "to look down, to overlook"
    },
    {
        "japanese": "燃える",
        "romaji": "moeru",
        "meaning": "to burn, to get fired up"
    },
    {
        "japanese": "たまる",
        "romaji": "tamaru",
        "meaning": "to accumulate, to store up"
    },
    {
        "japanese": "暴れる",
        "romaji": "abareru",
        "meaning": "to act violently, to rage about"
    },
    {
        "japanese": "越える",
        "romaji": "koeru",
        "meaning": "to go over, to go across, to go beyond"
    },
    {
        "japanese": "精神",
        "romaji": "seishin",
        "meaning": "mind, spirit"
    },
    {
        "japanese": "男子",
        "romaji": "danshi",
        "meaning": "boy, young man"
    },
    {
        "japanese": "宣言",
        "romaji": "sengen",
        "meaning": "declaration"
    },
    {
        "japanese": "挟む",
        "romaji": "hasamu",
        "meaning": "to hold between, to put between, to pinch"
    },
    {
        "japanese": "防ぐ",
        "romaji": "fusegu",
        "meaning": "to prevent, to defend"
    },
    {
        "japanese": "預ける",
        "romaji": "azukeru",
        "meaning": "to deposit, to entrust"
    },
    {
        "japanese": "限る",
        "romaji": "kagiru",
        "meaning": "to be limited to"
    },
    {
        "japanese": "責める",
        "romaji": "semeru",
        "meaning": "to blame"
    },
    {
        "japanese": "崩れる",
        "romaji": "kuzureru",
        "meaning": "to crumble, to collapse"
    },
    {
        "japanese": "一度も",
        "romaji": "ichidomo",
        "meaning": "(not) even once, (not) ever"
    },
    {
        "japanese": "ぼんやり",
        "romaji": "bonyari",
        "meaning": "vaguely, absent-mindedly"
    },
    {
        "japanese": "その内",
        "romaji": "sonouchi",
        "meaning": "before long, sooner or later"
    },
    {
        "japanese": "鏡",
        "romaji": "kagami",
        "meaning": "mirror"
    },
    {
        "japanese": "貫く",
        "romaji": "tsuranuku",
        "meaning": "to go through, to carry out"
    },
    {
        "japanese": "固まる",
        "romaji": "katamaru",
        "meaning": "to harden, to solidify"
    },
    {
        "japanese": "平和",
        "romaji": "heiwa",
        "meaning": "peace, harmony"
    },
    {
        "japanese": "意志",
        "romaji": "ishi",
        "meaning": "will, volition"
    },
    {
        "japanese": "下手",
        "romaji": "heta",
        "meaning": "bad at, poor"
    },
    {
        "japanese": "続き",
        "romaji": "tsuzuki",
        "meaning": "continuation, sequel"
    },
    {
        "japanese": "祈る",
        "romaji": "inoru",
        "meaning": "to pray"
    },
    {
        "japanese": "午後",
        "romaji": "gogo",
        "meaning": "afternoon, p.m."
    },
    {
        "japanese": "同様",
        "romaji": "douyou",
        "meaning": "similar"
    },
    {
        "japanese": "外れる",
        "romaji": "hazureru",
        "meaning": "to come undone, to be removed"
    },
    {
        "japanese": "歌う",
        "romaji": "utau",
        "meaning": "to sing"
    },
    {
        "japanese": "回",
        "romaji": "kai",
        "meaning": "times"
    },
    {
        "japanese": "固い",
        "romaji": "katai",
        "meaning": "stiff, tight"
    },
    {
        "japanese": "最強",
        "romaji": "saikyou",
        "meaning": "strongest"
    },
    {
        "japanese": "弾く",
        "romaji": "hiku",
        "meaning": "to strum (e.g. a guitar), to flick"
    },
    {
        "japanese": "正解",
        "romaji": "seikai",
        "meaning": "right answer, correct solution"
    },
    {
        "japanese": "きつい",
        "romaji": "kitsui",
        "meaning": "tight, tough"
    },
    {
        "japanese": "お陰",
        "romaji": "okage",
        "meaning": "help, thanks to"
    },
    {
        "japanese": "地獄",
        "romaji": "jigoku",
        "meaning": "hell"
    },
    {
        "japanese": "年齢",
        "romaji": "nenrei",
        "meaning": "age, years"
    },
    {
        "japanese": "病気",
        "romaji": "byouki",
        "meaning": "illness"
    },
    {
        "japanese": "携帯",
        "romaji": "keitai",
        "meaning": "cell phone"
    },
    {
        "japanese": "ますます",
        "romaji": "masumasu",
        "meaning": "increasingly"
    },
    {
        "japanese": "並べる",
        "romaji": "naraberu",
        "meaning": "to line up, to display, to set up"
    },
    {
        "japanese": "契約",
        "romaji": "keiyaku",
        "meaning": "contract, agreement"
    },
    {
        "japanese": "永遠",
        "romaji": "eien",
        "meaning": "eternity"
    },
    {
        "japanese": "不意に",
        "romaji": "fuini",
        "meaning": "suddenly, unexpectedly"
    },
    {
        "japanese": "呪い",
        "romaji": "noroi",
        "meaning": "curse, spell"
    },
    {
        "japanese": "組",
        "romaji": "kumi",
        "meaning": "school class"
    },
    {
        "japanese": "踊る",
        "romaji": "odoru",
        "meaning": "to dance"
    },
    {
        "japanese": "目覚める",
        "romaji": "mezameru",
        "meaning": "to wake (up), to come to one's senses"
    },
    {
        "japanese": "事故",
        "romaji": "jiko",
        "meaning": "accident, incident"
    },
    {
        "japanese": "袋",
        "romaji": "fukuro",
        "meaning": "bag, sack"
    },
    {
        "japanese": "派手",
        "romaji": "hade",
        "meaning": "showy, flashy"
    },
    {
        "japanese": "今更",
        "romaji": "imasara",
        "meaning": "now (when it's too late), at this stage"
    },
    {
        "japanese": "真っ直ぐ",
        "romaji": "massugu",
        "meaning": "straight ahead, straightforward"
    },
    {
        "japanese": "油断",
        "romaji": "yudan",
        "meaning": "inattention, carelessness"
    },
    {
        "japanese": "ぶつける",
        "romaji": "butsukeru",
        "meaning": "to bump"
    },
    {
        "japanese": "育つ",
        "romaji": "sodatsu",
        "meaning": "to be brought up, to grow"
    },
    {
        "japanese": "傷つく",
        "romaji": "kizutsuku",
        "meaning": "to get hurt"
    },
    {
        "japanese": "発する",
        "romaji": "hassuru",
        "meaning": "to emit, to radiate"
    },
    {
        "japanese": "終了",
        "romaji": "shuuryou",
        "meaning": "end, expiry"
    },
    {
        "japanese": "足音",
        "romaji": "ashioto",
        "meaning": "sound of footsteps"
    },
    {
        "japanese": "決意",
        "romaji": "ketsui",
        "meaning": "decision, resolution"
    },
    {
        "japanese": "感心",
        "romaji": "kanshin",
        "meaning": "admiration"
    },
    {
        "japanese": "飲み込む",
        "romaji": "nomikomu",
        "meaning": "to swallow, to grasp"
    },
    {
        "japanese": "仮に",
        "romaji": "karini",
        "meaning": "supposing that, even if"
    },
    {
        "japanese": "お菓子",
        "romaji": "okashi",
        "meaning": "sweets, snacks"
    },
    {
        "japanese": "染まる",
        "romaji": "somaru",
        "meaning": "to be dyed, to be tainted"
    },
    {
        "japanese": "笑い",
        "romaji": "warai",
        "meaning": "laughter, laugh"
    },
    {
        "japanese": "買い物",
        "romaji": "kaimono",
        "meaning": "shopping"
    },
    {
        "japanese": "歌",
        "romaji": "uta",
        "meaning": "song"
    },
    {
        "japanese": "庭",
        "romaji": "niwa",
        "meaning": "garden, yard"
    },
    {
        "japanese": "生き物",
        "romaji": "ikimono",
        "meaning": "living creature"
    },
    {
        "japanese": "特殊",
        "romaji": "tokushu",
        "meaning": "special, unique"
    },
    {
        "japanese": "連れて行く",
        "romaji": "tsureteiku",
        "meaning": "to take (a person) along"
    },
    {
        "japanese": "現状",
        "romaji": "genjou",
        "meaning": "present condition"
    },
    {
        "japanese": "大分",
        "romaji": "daibu",
        "meaning": "very, greatly"
    },
    {
        "japanese": "底",
        "romaji": "soko",
        "meaning": "bottom"
    },
    {
        "japanese": "学生",
        "romaji": "gakusei",
        "meaning": "student"
    },
    {
        "japanese": "丁寧",
        "romaji": "teinei",
        "meaning": "polite, careful"
    },
    {
        "japanese": "範囲",
        "romaji": "han'i",
        "meaning": "range, scope"
    },
    {
        "japanese": "テレビ",
        "romaji": "terebi",
        "meaning": "television"
    },
    {
        "japanese": "美人",
        "romaji": "bijin",
        "meaning": "beautiful woman"
    },
    {
        "japanese": "技",
        "romaji": "waza",
        "meaning": "skill"
    },
    {
        "japanese": "将来",
        "romaji": "shourai",
        "meaning": "one's future, in the future"
    },
    {
        "japanese": "記録",
        "romaji": "kiroku",
        "meaning": "record, documentation"
    },
    {
        "japanese": "大人しい",
        "romaji": "otonashii",
        "meaning": "tame, quiet, obedient, calm"
    },
    {
        "japanese": "骨",
        "romaji": "hone",
        "meaning": "bone"
    },
    {
        "japanese": "目標",
        "romaji": "mokuhyou",
        "meaning": "target, goal"
    },
    {
        "japanese": "肉体",
        "romaji": "nikutai",
        "meaning": "body, flesh"
    },
    {
        "japanese": "届ける",
        "romaji": "todokeru",
        "meaning": "to deliver, to give notice"
    },
    {
        "japanese": "足元",
        "romaji": "ashimoto",
        "meaning": "step, under foot"
    },
    {
        "japanese": "捜す",
        "romaji": "sagasu",
        "meaning": "to look for, to search for"
    },
    {
        "japanese": "わざと",
        "romaji": "wazato",
        "meaning": "on purpose"
    },
    {
        "japanese": "いかが",
        "romaji": "ikaga",
        "meaning": "how, would you like"
    },
    {
        "japanese": "布",
        "romaji": "nuno",
        "meaning": "cloth"
    },
    {
        "japanese": "種類",
        "romaji": "shurui",
        "meaning": "kind, species"
    },
    {
        "japanese": "満たす",
        "romaji": "mitasu",
        "meaning": "to fill, to satisfy"
    },
    {
        "japanese": "景色",
        "romaji": "keshiki",
        "meaning": "scenery"
    },
    {
        "japanese": "勇気",
        "romaji": "yuuki",
        "meaning": "courage, nerve"
    },
    {
        "japanese": "強化",
        "romaji": "kyouka",
        "meaning": "strengthening"
    },
    {
        "japanese": "加える",
        "romaji": "kuwaeru",
        "meaning": "to add, to include"
    },
    {
        "japanese": "言い出す",
        "romaji": "iidasu",
        "meaning": "to&nbsp;begin to say, to&nbsp;be the first to say, to&nbsp;propose"
    },
    {
        "japanese": "収まる",
        "romaji": "osamaru",
        "meaning": "to be settled (e.g. a dispute), to be contained within"
    },
    {
        "japanese": "組織",
        "romaji": "soshiki",
        "meaning": "organization, structure"
    },
    {
        "japanese": "隙間",
        "romaji": "sukima",
        "meaning": "crack, gap"
    },
    {
        "japanese": "本日",
        "romaji": "honjitsu",
        "meaning": "today"
    },
    {
        "japanese": "先日",
        "romaji": "senjitsu",
        "meaning": "the other day, a few days ago"
    },
    {
        "japanese": "月曜日",
        "romaji": "getsuyoubi",
        "meaning": "Monday"
    },
    {
        "japanese": "火曜日",
        "romaji": "kayoubi",
        "meaning": "Tuesday"
    },
    {
        "japanese": "水曜日",
        "romaji": "suiyoubi",
        "meaning": "Wednesday"
    },
    {
        "japanese": "木曜日",
        "romaji": "mokuyoubi",
        "meaning": "Thursday"
    },
    {
        "japanese": "金曜日",
        "romaji": "kinyoubi",
        "meaning": "Friday"
    },
    {
        "japanese": "土曜日",
        "romaji": "doyoubi",
        "meaning": "Saturday"
    },
    {
        "japanese": "日曜日",
        "romaji": "nichiyoubi",
        "meaning": "Sunday"
    },
    {
        "japanese": "一つ",
        "romaji": "hitotsu",
        "meaning": "one (thing)"
    },
    {
        "japanese": "二つ",
        "romaji": "futatsu",
        "meaning": "two (things)"
    },
    {
        "japanese": "三つ",
        "romaji": "mittsu",
        "meaning": "three (things)"
    },
    {
        "japanese": "四つ",
        "romaji": "yottsu",
        "meaning": "four (things)"
    },
    {
        "japanese": "五つ",
        "romaji": "itsutsu",
        "meaning": "five (things)"
    },
    {
        "japanese": "六つ",
        "romaji": "muttsu",
        "meaning": "six (things)"
    },
    {
        "japanese": "七つ",
        "romaji": "nanatsu",
        "meaning": "seven (things)"
    },
    {
        "japanese": "八つ",
        "romaji": "yattsu",
        "meaning": "eight (things)"
    },
    {
        "japanese": "九つ",
        "romaji": "kokonotsu",
        "meaning": "nine (things)"
    },
    {
        "japanese": "評価",
        "romaji": "hyouka",
        "meaning": "evaluation, appraisal, recognition"
    }
];

export default kaishiWords;
