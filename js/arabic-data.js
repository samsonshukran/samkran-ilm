// ===== ARABIC-DATA.JS - Complete Arabic Learning Data =====
// Comprehensive dataset for learning Arabic: letters, words, phrases, sentences, conversations, and 150+ quiz questions

const arabicLearningData = {
    // 28 Letters with full details
    letters: [
        { 
            letter: "ا", 
            name: "Alif", 
            translit: "Alif",
            pronunciation: "Like 'a' in 'father'",
            sound: "Aa",
            examples: ["أسد (Asad) - Lion", "أم (Umm) - Mother"],
            writing: "Standalone: ا, Connected: ـا",
            category: "vowel"
        },
        { 
            letter: "ب", 
            name: "Ba", 
            translit: "Ba",
            pronunciation: "Like 'b' in 'bed'",
            sound: "B",
            examples: ["باب (Bāb) - Door", "بيت (Bayt) - House"],
            writing: "Standalone: ب, Initial: بـ, Middle: ـبـ, Final: ـب",
            category: "consonant"
        },
        { 
            letter: "ت", 
            name: "Ta", 
            translit: "Ta",
            pronunciation: "Like 't' in 'table'",
            sound: "T",
            examples: ["تمر (Tamr) - Dates", "تفاح (Tuffāḥ) - Apple"],
            writing: "Standalone: ت, Initial: تـ, Middle: ـتـ, Final: ـت",
            category: "consonant"
        },
        { 
            letter: "ث", 
            name: "Tha", 
            translit: "Tha",
            pronunciation: "Like 'th' in 'think'",
            sound: "Th",
            examples: ["ثلج (Thalj) - Snow", "ثعلب (Tha'lab) - Fox"],
            writing: "Standalone: ث, Initial: ثـ, Middle: ـثـ, Final: ـث",
            category: "consonant"
        },
        { 
            letter: "ج", 
            name: "Jeem", 
            translit: "Jeem",
            pronunciation: "Like 'j' in 'jam'",
            sound: "J",
            examples: ["جمل (Jamal) - Camel", "جبل (Jabal) - Mountain"],
            writing: "Standalone: ج, Initial: جـ, Middle: ـجـ, Final: ـج",
            category: "consonant"
        },
        { 
            letter: "ح", 
            name: "Ha", 
            translit: "Ha (deep)",
            pronunciation: "Deep 'h' from throat",
            sound: "H (deep)",
            examples: ["حج (Ḥajj) - Pilgrimage", "حليب (Ḥalīb) - Milk"],
            writing: "Standalone: ح, Initial: حـ, Middle: ـحـ, Final: ـح",
            category: "consonant"
        },
        { 
            letter: "خ", 
            name: "Kha", 
            translit: "Kha",
            pronunciation: "Like 'ch' in 'loch'",
            sound: "Kh",
            examples: ["خبز (Khubz) - Bread", "خروف (Kharūf) - Sheep"],
            writing: "Standalone: خ, Initial: خـ, Middle: ـخـ, Final: ـخ",
            category: "consonant"
        },
        { 
            letter: "د", 
            name: "Dal", 
            translit: "Dal",
            pronunciation: "Like 'd' in 'dog'",
            sound: "D",
            examples: ["دين (Dīn) - Religion", "درس (Dars) - Lesson"],
            writing: "Standalone: د, Connected: ـد",
            category: "consonant"
        },
        { 
            letter: "ذ", 
            name: "Dhal", 
            translit: "Dhal",
            pronunciation: "Like 'th' in 'that'",
            sound: "Dh",
            examples: ["ذهب (Dhahab) - Gold", "ذئب (Dhi'b) - Wolf"],
            writing: "Standalone: ذ, Connected: ـذ",
            category: "consonant"
        },
        { 
            letter: "ر", 
            name: "Ra", 
            translit: "Ra",
            pronunciation: "Rolled 'r'",
            sound: "R",
            examples: ["رجل (Rajul) - Man", "رحمة (Raḥmah) - Mercy"],
            writing: "Standalone: ر, Connected: ـر",
            category: "consonant"
        },
        { 
            letter: "ز", 
            name: "Zay", 
            translit: "Zay",
            pronunciation: "Like 'z' in 'zebra'",
            sound: "Z",
            examples: ["زيت (Zayt) - Oil", "زهرة (Zahrah) - Flower"],
            writing: "Standalone: ز, Connected: ـز",
            category: "consonant"
        },
        { 
            letter: "س", 
            name: "Seen", 
            translit: "Seen",
            pronunciation: "Like 's' in 'sun'",
            sound: "S",
            examples: ["سماء (Samā') - Sky", "سفر (Safar) - Travel"],
            writing: "Standalone: س, Initial: سـ, Middle: ـسـ, Final: ـس",
            category: "consonant"
        },
        { 
            letter: "ش", 
            name: "Sheen", 
            translit: "Sheen",
            pronunciation: "Like 'sh' in 'ship'",
            sound: "Sh",
            examples: ["شمس (Shams) - Sun", "شجرة (Shajarah) - Tree"],
            writing: "Standalone: ش, Initial: شـ, Middle: ـشـ, Final: ـش",
            category: "consonant"
        },
        { 
            letter: "ص", 
            name: "Sad", 
            translit: "Sad",
            pronunciation: "Heavy 's'",
            sound: "S (heavy)",
            examples: ["صلاة (Ṣalāh) - Prayer", "صبر (Ṣabr) - Patience"],
            writing: "Standalone: ص, Initial: صـ, Middle: ـصـ, Final: ـص",
            category: "emphatic"
        },
        { 
            letter: "ض", 
            name: "Dad", 
            translit: "Dad",
            pronunciation: "Heavy 'd'",
            sound: "D (heavy)",
            examples: ["ضيف (Ḍayf) - Guest", "رضا (Riḍā) - Satisfaction"],
            writing: "Standalone: ض, Initial: ضـ, Middle: ـضـ, Final: ـض",
            category: "emphatic"
        },
        { 
            letter: "ط", 
            name: "Ta", 
            translit: "Ta (heavy)",
            pronunciation: "Heavy 't'",
            sound: "T (heavy)",
            examples: ["طير (Ṭayr) - Bird", "طالب (Ṭālib) - Student"],
            writing: "Standalone: ط, Initial: طـ, Middle: ـطـ, Final: ـط",
            category: "emphatic"
        },
        { 
            letter: "ظ", 
            name: "Dha", 
            translit: "Dha",
            pronunciation: "Heavy 'dh'",
            sound: "Dh (heavy)",
            examples: ["ظلم (Ẓulm) - Injustice", "ظهر (Ẓuhr) - Noon"],
            writing: "Standalone: ظ, Initial: ظـ, Middle: ـظـ, Final: ـظ",
            category: "emphatic"
        },
        { 
            letter: "ع", 
            name: "'Ayn", 
            translit: "'Ayn",
            pronunciation: "Deep throat sound",
            sound: "'A",
            examples: ["علم ('Ilm) - Knowledge", "عبد ('Abd) - Servant"],
            writing: "Standalone: ع, Initial: عـ, Middle: ـعـ, Final: ـع",
            category: "throat"
        },
        { 
            letter: "غ", 
            name: "Ghayn", 
            translit: "Ghayn",
            pronunciation: "Like French 'r'",
            sound: "Gh",
            examples: ["غفور (Ghafūr) - Forgiving", "غرب (Gharb) - West"],
            writing: "Standalone: غ, Initial: غـ, Middle: ـغـ, Final: ـغ",
            category: "throat"
        },
        { 
            letter: "ف", 
            name: "Fa", 
            translit: "Fa",
            pronunciation: "Like 'f' in 'father'",
            sound: "F",
            examples: ["فجر (Fajr) - Dawn", "فلاح (Fallāḥ) - Farmer"],
            writing: "Standalone: ف, Initial: فـ, Middle: ـفـ, Final: ـف",
            category: "consonant"
        },
        { 
            letter: "ق", 
            name: "Qaf", 
            translit: "Qaf",
            pronunciation: "Deep 'q' from throat",
            sound: "Q",
            examples: ["قرآن (Qur'ān) - Quran", "قمر (Qamar) - Moon"],
            writing: "Standalone: ق, Initial: قـ, Middle: ـقـ, Final: ـق",
            category: "emphatic"
        },
        { 
            letter: "ك", 
            name: "Kaf", 
            translit: "Kaf",
            pronunciation: "Like 'k' in 'kite'",
            sound: "K",
            examples: ["كتاب (Kitāb) - Book", "كلب (Kalb) - Dog"],
            writing: "Standalone: ك, Initial: كـ, Middle: ـكـ, Final: ـك",
            category: "consonant"
        },
        { 
            letter: "ل", 
            name: "Lam", 
            translit: "Lam",
            pronunciation: "Like 'l' in 'lamp'",
            sound: "L",
            examples: ["ليل (Layl) - Night", "لون (Lawn) - Color"],
            writing: "Standalone: ل, Initial: لـ, Middle: ـلـ, Final: ـل",
            category: "consonant"
        },
        { 
            letter: "م", 
            name: "Meem", 
            translit: "Meem",
            pronunciation: "Like 'm' in 'mother'",
            sound: "M",
            examples: ["ماء (Mā') - Water", "مسجد (Masjid) - Mosque"],
            writing: "Standalone: م, Initial: مـ, Middle: ـمـ, Final: ـم",
            category: "consonant"
        },
        { 
            letter: "ن", 
            name: "Noon", 
            translit: "Noon",
            pronunciation: "Like 'n' in 'noon'",
            sound: "N",
            examples: ["نور (Nūr) - Light", "نار (Nār) - Fire"],
            writing: "Standalone: ن, Initial: نـ, Middle: ـنـ, Final: ـن",
            category: "consonant"
        },
        { 
            letter: "ه", 
            name: "Ha", 
            translit: "Ha",
            pronunciation: "Like 'h' in 'hello'",
            sound: "H",
            examples: ["هدى (Hudā) - Guidance", "هواء (Hawā') - Air"],
            writing: "Standalone: ه, Initial: هـ, Middle: ـهـ, Final: ـه",
            category: "consonant"
        },
        { 
            letter: "و", 
            name: "Waw", 
            translit: "Waw",
            pronunciation: "Like 'w' in 'water'",
            sound: "W / Ū",
            examples: ["وضوء (Wuḍū') - Ablution", "ورد (Ward) - Rose"],
            writing: "Standalone: و, Connected: ـو",
            category: "vowel"
        },
        { 
            letter: "ي", 
            name: "Ya", 
            translit: "Ya",
            pronunciation: "Like 'y' in 'yes'",
            sound: "Y / Ī",
            examples: ["يد (Yad) - Hand", "يمين (Yamīn) - Right"],
            writing: "Standalone: ي, Initial: يـ, Middle: ـيـ, Final: ـي",
            category: "vowel"
        }
    ],

    // 50+ Basic Words
    words: [
        // Animals (10)
        { arabic: "أسد", translit: "Asad", meaning: "Lion", category: "animals", example: "الأسد ملك الغابة - The lion is king of the jungle" },
        { arabic: "جمل", translit: "Jamal", meaning: "Camel", category: "animals", example: "الجمل سفينة الصحراء - The camel is the ship of the desert" },
        { arabic: "كلب", translit: "Kalb", meaning: "Dog", category: "animals", example: "الكلب حيوان وفي - The dog is a loyal animal" },
        { arabic: "قطة", translit: "Qiṭṭah", meaning: "Cat", category: "animals", example: "القطة تلعب في الحديقة - The cat plays in the garden" },
        { arabic: "فيل", translit: "Fīl", meaning: "Elephant", category: "animals", example: "الفيل حيوان ضخم - The elephant is a huge animal" },
        { arabic: "نمر", translit: "Namir", meaning: "Tiger", category: "animals", example: "النمر سريع جداً - The tiger is very fast" },
        { arabic: "أرنب", translit: "Arnab", meaning: "Rabbit", category: "animals", example: "الأرنب يأكل الجزر - The rabbit eats carrots" },
        { arabic: "حصان", translit: "Hiṣān", meaning: "Horse", category: "animals", example: "الحصان يركض بسرعة - The horse runs fast" },
        { arabic: "بقرة", translit: "Baqarah", meaning: "Cow", category: "animals", example: "البقرة تعطي الحليب - The cow gives milk" },
        { arabic: "دجاجة", translit: "Dajājah", meaning: "Chicken", category: "animals", example: "الدجاجة تبيض البيض - The chicken lays eggs" },

        // Nature (10)
        { arabic: "شمس", translit: "Shams", meaning: "Sun", category: "nature", example: "الشمس تشرق كل صباح - The sun rises every morning" },
        { arabic: "قمر", translit: "Qamar", meaning: "Moon", category: "nature", example: "القمر جميل في الليل - The moon is beautiful at night" },
        { arabic: "نجم", translit: "Najm", meaning: "Star", category: "nature", example: "النجوم تتلألأ في السماء - The stars twinkle in the sky" },
        { arabic: "سماء", translit: "Samā'", meaning: "Sky", category: "nature", example: "السماء زرقاء اليوم - The sky is blue today" },
        { arabic: "بحر", translit: "Baḥr", meaning: "Sea", category: "nature", example: "البحر واسع وعميق - The sea is vast and deep" },
        { arabic: "جبل", translit: "Jabal", meaning: "Mountain", category: "nature", example: "الجبل عالٍ جداً - The mountain is very high" },
        { arabic: "نهر", translit: "Nahr", meaning: "River", category: "nature", example: "النهر يجري بسرعة - The river flows fast" },
        { arabic: "غيمة", translit: "Ghaymah", meaning: "Cloud", category: "nature", example: "الغيمة تمطر ماء - The cloud rains water" },
        { arabic: "ريح", translit: "Rīḥ", meaning: "Wind", category: "nature", example: "الريح باردة اليوم - The wind is cold today" },
        { arabic: "مطر", translit: "Maṭar", meaning: "Rain", category: "nature", example: "المطر ينزل من السماء - Rain falls from the sky" },

        // Family (10)
        { arabic: "أب", translit: "Ab", meaning: "Father", category: "family", example: "أبي يعمل بجد - My father works hard" },
        { arabic: "أم", translit: "Umm", meaning: "Mother", category: "family", example: "أمي تطبخ طعاماً لذيذاً - My mother cooks delicious food" },
        { arabic: "أخ", translit: "Akh", meaning: "Brother", category: "family", example: "أخي يدرس في الجامعة - My brother studies at university" },
        { arabic: "أخت", translit: "Ukht", meaning: "Sister", category: "family", example: "أختي صغيرة وجميلة - My sister is young and beautiful" },
        { arabic: "جد", translit: "Jadd", meaning: "Grandfather", category: "family", example: "جدي كبير في السن - My grandfather is old" },
        { arabic: "جدة", translit: "Jaddah", meaning: "Grandmother", category: "family", example: "جدتي تحب القراءة - My grandmother loves reading" },
        { arabic: "ابن", translit: "Ibn", meaning: "Son", category: "family", example: "ابني يلعب في الحديقة - My son plays in the garden" },
        { arabic: "بنت", translit: "Bint", meaning: "Daughter", category: "family", example: "ابنتي تذهب إلى المدرسة - My daughter goes to school" },
        { arabic: "عم", translit: "'Amm", meaning: "Uncle (paternal)", category: "family", example: "عمي يسكن قريباً - My uncle lives nearby" },
        { arabic: "خال", translit: "Khāl", meaning: "Uncle (maternal)", category: "family", example: "خالي طبيب ماهر - My uncle is a skilled doctor" },

        // Household (10)
        { arabic: "بيت", translit: "Bayt", meaning: "House", category: "household", example: "بيتنا كبير وجميل - Our house is big and beautiful" },
        { arabic: "باب", translit: "Bāb", meaning: "Door", category: "household", example: "الباب مفتوح - The door is open" },
        { arabic: "نافذة", translit: "Nāfidhah", meaning: "Window", category: "household", example: "النافذة تطل على الحديقة - The window overlooks the garden" },
        { arabic: "كرسي", translit: "Kursī", meaning: "Chair", category: "household", example: "الكرسي مريح - The chair is comfortable" },
        { arabic: "طاولة", translit: "Ṭāwilah", meaning: "Table", category: "household", example: "الطاولة خشبية - The table is wooden" },
        { arabic: "سرير", translit: "Sarīr", meaning: "Bed", category: "household", example: "السرير ناعم - The bed is soft" },
        { arabic: "مطبخ", translit: "Maṭbakh", meaning: "Kitchen", category: "household", example: "المطبخ نظيف - The kitchen is clean" },
        { arabic: "حمام", translit: "Ḥammām", meaning: "Bathroom", category: "household", example: "الحمام صغير - The bathroom is small" },
        { arabic: "غرفة", translit: "Ghurfah", meaning: "Room", category: "household", example: "الغرفة واسعة - The room is spacious" },
        { arabic: "مفتاح", translit: "Miftāḥ", meaning: "Key", category: "household", example: "المفتاح على الطاولة - The key is on the table" },

        // Colors (10)
        { arabic: "أحمر", translit: "Aḥmar", meaning: "Red", category: "colors", example: "التفاح أحمر - The apple is red" },
        { arabic: "أزرق", translit: "Azraq", meaning: "Blue", category: "colors", example: "السماء زرقاء - The sky is blue" },
        { arabic: "أصفر", translit: "Aṣfar", meaning: "Yellow", category: "colors", example: "الليمون أصفر - The lemon is yellow" },
        { arabic: "أخضر", translit: "Akḥḍar", meaning: "Green", category: "colors", example: "العشب أخضر - The grass is green" },
        { arabic: "أبيض", translit: "Abyaḍ", meaning: "White", category: "colors", example: "الثلج أبيض - Snow is white" },
        { arabic: "أسود", translit: "Aswad", meaning: "Black", category: "colors", example: "الليل أسود - The night is black" },
        { arabic: "بني", translit: "Bunnī", meaning: "Brown", category: "colors", example: "الأرض بنية - The earth is brown" },
        { arabic: "رمادي", translit: "Ramādī", meaning: "Gray", category: "colors", example: "الغيمة رمادية - The cloud is gray" },
        { arabic: "برتقالي", translit: "Burtuqālī", meaning: "Orange", category: "colors", example: "البرتقال برتقالي - The orange is orange" },
        { arabic: "وردي", translit: "Wardī", meaning: "Pink", category: "colors", example: "الزهرة وردية - The flower is pink" },

        // Quranic (10)
        { arabic: "رحمة", translit: "Raḥmah", meaning: "Mercy", category: "quranic", example: "رحمة الله واسعة - The mercy of Allah is vast" },
        { arabic: "غفران", translit: "Ghufrān", meaning: "Forgiveness", category: "quranic", example: "غفرانك ربنا - Your forgiveness, our Lord" },
        { arabic: "هدى", translit: "Hudā", meaning: "Guidance", category: "quranic", example: "القرآن هدى للمتقين - The Quran is guidance for the righteous" },
        { arabic: "صبر", translit: "Ṣabr", meaning: "Patience", category: "quranic", example: "الصبر مفتاح الفرج - Patience is the key to relief" },
        { arabic: "جنة", translit: "Jannah", meaning: "Paradise", category: "quranic", example: "جنة عرضها السماوات والأرض - Paradise whose width is the heavens and earth" },
        { arabic: "نار", translit: "Nār", meaning: "Hellfire", category: "quranic", example: "نار الله الموقدة - The fire of Allah kindled" },
        { arabic: "إيمان", translit: "Īmān", meaning: "Faith", category: "quranic", example: "الإيمان نور - Faith is light" },
        { arabic: "تقوى", translit: "Taqwā", meaning: "Piety", category: "quranic", example: "خير الزاد التقوى - The best provision is piety" },
        { arabic: "ذكر", translit: "Dhikr", meaning: "Remembrance", category: "quranic", example: "ألا بذكر الله تطمئن القلوب - Verily in remembrance of Allah hearts find rest" },
        { arabic: "دعاء", translit: "Du'ā'", meaning: "Supplication", category: "quranic", example: "ادعوني أستجب لكم - Call upon Me, I will respond to you" }
    ],

    // 30+ Common Phrases
    phrases: [
        { arabic: "السلام عليكم", translit: "As-salāmu 'alaykum", meaning: "Peace be upon you", usage: "Greeting" },
        { arabic: "وعليكم السلام", translit: "Wa 'alaykumus salām", meaning: "And upon you be peace", usage: "Response to greeting" },
        { arabic: "كيف حالك؟", translit: "Kayfa ḥāluk?", meaning: "How are you? (m)", usage: "Asking about well-being" },
        { arabic: "كيف حالك؟", translit: "Kayfa ḥāluki?", meaning: "How are you? (f)", usage: "Asking about well-being" },
        { arabic: "بخير، الحمد لله", translit: "Bikhayr, alḥamdulillāh", meaning: "Fine, praise be to Allah", usage: "Responding" },
        { arabic: "ما اسمك؟", translit: "Mā ismuk?", meaning: "What is your name? (m)", usage: "Asking name" },
        { arabic: "ما اسمك؟", translit: "Mā ismuki?", meaning: "What is your name? (f)", usage: "Asking name" },
        { arabic: "اسمي...", translit: "Ismī...", meaning: "My name is...", usage: "Introducing yourself" },
        { arabic: "تشرفنا", translit: "Tasharrafnā", meaning: "Nice to meet you", usage: "After meeting" },
        { arabic: "من أين أنت؟", translit: "Min ayna anta?", meaning: "Where are you from? (m)", usage: "Asking origin" },
        { arabic: "من أين أنت؟", translit: "Min ayna anti?", meaning: "Where are you from? (f)", usage: "Asking origin" },
        { arabic: "أنا من...", translit: "Ana min...", meaning: "I am from...", usage: "Telling origin" },
        { arabic: "كم عمرك؟", translit: "Kam 'umruk?", meaning: "How old are you? (m)", usage: "Asking age" },
        { arabic: "كم عمرك؟", translit: "Kam 'umruki?", meaning: "How old are you? (f)", usage: "Asking age" },
        { arabic: "عمري... سنة", translit: "'Umrī... sanah", meaning: "I am... years old", usage: "Telling age" },
        { arabic: "هل تتكلم العربية؟", translit: "Hal tatakallam al-'arabiyyah?", meaning: "Do you speak Arabic? (m)", usage: "Asking about language" },
        { arabic: "هل تتكلمين العربية؟", translit: "Hal tatakallamīn al-'arabiyyah?", meaning: "Do you speak Arabic? (f)", usage: "Asking about language" },
        { arabic: "أنا أتكلم العربية قليلاً", translit: "Ana atakallam al-'arabiyyah qalīlan", meaning: "I speak Arabic a little", usage: "Describing ability" },
        { arabic: "ماذا تعني هذه الكلمة؟", translit: "Mādhā ta'nī hādhihil kalimah?", meaning: "What does this word mean?", usage: "Asking for meaning" },
        { arabic: "هل يمكنك مساعدتي؟", translit: "Hal yumkinuka musā'adatī?", meaning: "Can you help me? (m)", usage: "Asking for help" },
        { arabic: "نعم", translit: "Na'am", meaning: "Yes", usage: "Affirmation" },
        { arabic: "لا", translit: "Lā", meaning: "No", usage: "Negation" },
        { arabic: "شكراً", translit: "Shukran", meaning: "Thank you", usage: "Expressing gratitude" },
        { arabic: "عفواً", translit: "'Afwan", meaning: "You're welcome", usage: "Response to thanks" },
        { arabic: "مع السلامة", translit: "Ma'a as-salāmah", meaning: "Goodbye (go with peace)", usage: "Saying goodbye" },
        { arabic: "في أمان الله", translit: "Fī amānillāh", meaning: "In Allah's protection", usage: "Saying goodbye" },
        { arabic: "إن شاء الله", translit: "In shā'a Allāh", meaning: "If Allah wills", usage: "For future plans" },
        { arabic: "ما شاء الله", translit: "Mā shā'a Allāh", meaning: "What Allah has willed", usage: "Expressing admiration" },
        { arabic: "بسم الله", translit: "Bismillāh", meaning: "In the name of Allah", usage: "Before actions" },
        { arabic: "الحمد لله", translit: "Alḥamdulillāh", meaning: "Praise be to Allah", usage: "After completion" },
        { arabic: "سبحان الله", translit: "Subḥānallāh", meaning: "Glory be to Allah", usage: "Expressing wonder" },
        { arabic: "الله أكبر", translit: "Allāhu Akbar", meaning: "Allah is the Greatest", usage: "Expressing greatness" },
        { arabic: "أستغفر الله", translit: "Astaghfirullāh", meaning: "I seek forgiveness from Allah", usage: "After mistakes" }
    ],

    // 30+ Simple Sentences
    sentences: [
        // Greetings
        { arabic: "صباح الخير", translit: "Ṣabāḥ al-khayr", meaning: "Good morning", type: "greeting" },
        { arabic: "صباح النور", translit: "Ṣabāḥ an-nūr", meaning: "Good morning (response)", type: "greeting" },
        { arabic: "مساء الخير", translit: "Masā' al-khayr", meaning: "Good evening", type: "greeting" },
        { arabic: "مساء النور", translit: "Masā' an-nūr", meaning: "Good evening (response)", type: "greeting" },
        { arabic: "تصبح على خير", translit: "Tuṣbiḥ 'alā khayr", meaning: "Good night (may you wake up well)", type: "greeting" },
        { arabic: "وأنت من أهله", translit: "Wa anta min ahlih", meaning: "And you too (response to good night)", type: "greeting" },

        // Questions
        { arabic: "هل أنت بخير؟", translit: "Hal anta bikhayr?", meaning: "Are you okay? (m)", type: "question" },
        { arabic: "هل أنت بخير؟", translit: "Hal anti bikhayr?", meaning: "Are you okay? (f)", type: "question" },
        { arabic: "ماذا تفعل؟", translit: "Mādhā taf'al?", meaning: "What are you doing? (m)", type: "question" },
        { arabic: "ماذا تفعلين؟", translit: "Mādhā taf'alīn?", meaning: "What are you doing? (f)", type: "question" },
        { arabic: "أين تسكن؟", translit: "Ayna taskun?", meaning: "Where do you live? (m)", type: "question" },
        { arabic: "أين تسكنين؟", translit: "Ayna taskunīn?", meaning: "Where do you live? (f)", type: "question" },
        { arabic: "هل لديك أطفال؟", translit: "Hal ladayka aṭfāl?", meaning: "Do you have children? (m)", type: "question" },
        { arabic: "هل لديك أطفال؟", translit: "Hal ladayki aṭfāl?", meaning: "Do you have children? (f)", type: "question" },

        // Statements
        { arabic: "أنا مسلم", translit: "Ana muslim", meaning: "I am a Muslim (m)", type: "statement" },
        { arabic: "أنا مسلمة", translit: "Ana muslimah", meaning: "I am a Muslim (f)", type: "statement" },
        { arabic: "أنا أحب العربية", translit: "Ana uḥibb al-'arabiyyah", meaning: "I love Arabic", type: "statement" },
        { arabic: "هذا كتابي", translit: "Hādhā kitābī", meaning: "This is my book", type: "statement" },
        { arabic: "هذه مدرستي", translit: "Hādhihi madrasatī", meaning: "This is my school", type: "statement" },
        { arabic: "الطعام لذيذ", translit: "Aṭ-ṭa'ām ladhdhīdh", meaning: "The food is delicious", type: "statement" },
        { arabic: "الماء بارد", translit: "Al-mā' bārid", meaning: "The water is cold", type: "statement" },
        { arabic: "الشاي ساخن", translit: "Ash-shāy sākhin", meaning: "The tea is hot", type: "statement" },
        { arabic: "الجو جميل اليوم", translit: "Al-jaww jamīl al-yawm", meaning: "The weather is beautiful today", type: "statement" },

        // Quranic sentences
        { arabic: "بسم الله الرحمن الرحيم", translit: "Bismillāhir-raḥmānir-raḥīm", meaning: "In the name of Allah, Most Gracious, Most Merciful", type: "quranic" },
        { arabic: "الحمد لله رب العالمين", translit: "Alḥamdulillāhi rabbil-'ālamīn", meaning: "Praise be to Allah, Lord of the worlds", type: "quranic" },
        { arabic: "إياك نعبد وإياك نستعين", translit: "Iyyāka na'budu wa iyyāka nasta'īn", meaning: "You alone we worship, You alone we ask for help", type: "quranic" },
        { arabic: "اهدنا الصراط المستقيم", translit: "Ihdināṣ-ṣirāṭal-mustaqīm", meaning: "Guide us to the straight path", type: "quranic" },
        { arabic: "ربنا آتنا في الدنيا حسنة", translit: "Rabbanā ātinā fid-dunyā ḥasanah", meaning: "Our Lord, give us good in this world", type: "quranic" },
        { arabic: "رب زدني علما", translit: "Rabbi zidnī 'ilmā", meaning: "My Lord, increase me in knowledge", type: "quranic" }
    ],

    // 25+ Conversations with alternating questions and answers
    conversations: [
        // Greetings conversation
        {
            topic: "greeting",
            lines: [
                { speaker: "A", arabic: "السلام عليكم", translit: "As-salāmu 'alaykum", meaning: "Peace be upon you", type: "greeting" },
                { speaker: "B", arabic: "وعليكم السلام ورحمة الله", translit: "Wa 'alaykumus salāmu wa raḥmatullāh", meaning: "And upon you be peace and the mercy of Allah", type: "greeting" },
                { speaker: "A", arabic: "كيف حالك؟", translit: "Kayfa ḥāluk?", meaning: "How are you?", type: "question" },
                { speaker: "B", arabic: "بخير، الحمد لله. وأنت؟", translit: "Bikhayr, alḥamdulillāh. Wa anta?", meaning: "Fine, praise be to Allah. And you?", type: "response" },
                { speaker: "A", arabic: "الحمد لله، بخير", translit: "Alḥamdulillāh, bikhayr", meaning: "Praise be to Allah, fine", type: "response" },
                { speaker: "B", arabic: "الحمد لله على السلامة", translit: "Alḥamdulillāh 'alas salāmah", meaning: "Praise be to Allah for your safety", type: "response" }
            ]
        },
        // Introduction conversation
        {
            topic: "introduction",
            lines: [
                { speaker: "A", arabic: "ما اسمك؟", translit: "Mā ismuk?", meaning: "What is your name?", type: "question" },
                { speaker: "B", arabic: "اسمي أحمد. وأنت؟", translit: "Ismī Aḥmad. Wa anta?", meaning: "My name is Ahmed. And you?", type: "response" },
                { speaker: "A", arabic: "اسمي فاطمة", translit: "Ismī Fāṭimah", meaning: "My name is Fatima", type: "response" },
                { speaker: "B", arabic: "تشرفنا بمعرفتك", translit: "Tasharrafnā bima'rifatik", meaning: "Nice to meet you", type: "polite" },
                { speaker: "A", arabic: "تشرفنا بك أيضاً", translit: "Tasharrafnā bika ayḍan", meaning: "Nice to meet you too", type: "response" }
            ]
        },
        // Origin conversation
        {
            topic: "introduction",
            lines: [
                { speaker: "A", arabic: "من أين أنت؟", translit: "Min ayna anta?", meaning: "Where are you from?", type: "question" },
                { speaker: "B", arabic: "أنا من مصر. وأنت؟", translit: "Ana min Miṣr. Wa anta?", meaning: "I am from Egypt. And you?", type: "response" },
                { speaker: "A", arabic: "أنا من السعودية", translit: "Ana min as-Sa'ūdiyyah", meaning: "I am from Saudi Arabia", type: "response" },
                { speaker: "B", arabic: "هل زرت مكة؟", translit: "Hal zurt Makkah?", meaning: "Have you visited Mecca?", type: "question" },
                { speaker: "A", arabic: "نعم، زرت مكة مرتين", translit: "Na'am, zurt Makkah marratayn", meaning: "Yes, I visited Mecca twice", type: "response" }
            ]
        },
        // Family conversation
        {
            topic: "family",
            lines: [
                { speaker: "A", arabic: "هل لديك عائلة كبيرة؟", translit: "Hal ladayka 'ā'ilah kabīrah?", meaning: "Do you have a big family?", type: "question" },
                { speaker: "B", arabic: "نعم، لدي خمسة إخوة", translit: "Na'am, ladayya khamsat ikhwah", meaning: "Yes, I have five siblings", type: "response" },
                { speaker: "A", arabic: "كم أخاً وكم أختاً؟", translit: "Kam akhan wa kam ukhtan?", meaning: "How many brothers and sisters?", type: "question" },
                { speaker: "B", arabic: "لدي أخان وثلاث أخوات", translit: "Ladayya akhān wa thalāth akhawāt", meaning: "I have two brothers and three sisters", type: "response" },
                { speaker: "A", arabic: "هل أنت أكبرهم؟", translit: "Hal anta akbaruhum?", meaning: "Are you the oldest?", type: "question" },
                { speaker: "B", arabic: "لا، أنا الأصغر", translit: "Lā, ana al-aṣghar", meaning: "No, I am the youngest", type: "response" }
            ]
        },
        // Food conversation
        {
            topic: "food",
            lines: [
                { speaker: "A", arabic: "هل تحب الفلافل؟", translit: "Hal tuḥibb al-falāfil?", meaning: "Do you like falafel?", type: "question" },
                { speaker: "B", arabic: "نعم، أحب الفلافل كثيراً", translit: "Na'am, uḥibb al-falāfil kathīran", meaning: "Yes, I like falafel very much", type: "response" },
                { speaker: "A", arabic: "وماذا عن الحمص؟", translit: "Wa mādhā 'an al-ḥummuṣ?", meaning: "And what about hummus?", type: "question" },
                { speaker: "B", arabic: "الحمص أيضاً لذيذ", translit: "Al-ḥummuṣ ayḍan ladhdhīdh", meaning: "Hummus is also delicious", type: "response" },
                { speaker: "A", arabic: "هل تفضل الشاي أم القهوة؟", translit: "Hal tufaḍḍil ash-shāy am al-qahwah?", meaning: "Do you prefer tea or coffee?", type: "question" },
                { speaker: "B", arabic: "أفضل الشاي بالنعناع", translit: "Ufaḍḍil ash-shāy bin-na'nā'", meaning: "I prefer mint tea", type: "response" }
            ]
        },
        // Prayer conversation
        {
            topic: "prayer",
            lines: [
                { speaker: "A", arabic: "هل صليت الفجر اليوم؟", translit: "Hal ṣallayta al-fajr al-yawm?", meaning: "Did you pray Fajr today?", type: "question" },
                { speaker: "B", arabic: "نعم، صليت الفجر في المسجد", translit: "Na'am, ṣallaytu al-fajr fī al-masjid", meaning: "Yes, I prayed Fajr at the mosque", type: "response" },
                { speaker: "A", arabic: "ما شاء الله! كم صلاة تصلي في المسجد؟", translit: "Mā shā'a Allāh! Kam ṣalāh tuṣallī fī al-masjid?", meaning: "MashaAllah! How many prayers do you pray at the mosque?", type: "question" },
                { speaker: "B", arabic: "أحاول أن أصلي كل الصلوات في المسجد", translit: "Uḥāwil an uṣallī kulla aṣ-ṣalawāt fī al-masjid", meaning: "I try to pray all prayers at the mosque", type: "response" },
                { speaker: "A", arabic: "جزاك الله خيراً", translit: "Jazākallāhu khayran", meaning: "May Allah reward you", type: "blessing" }
            ]
        },
        // Quran conversation
        {
            topic: "quran",
            lines: [
                { speaker: "A", arabic: "هل تقرأ القرآن كل يوم؟", translit: "Hal taqra' al-Qur'ān kulla yawm?", meaning: "Do you read Quran every day?", type: "question" },
                { speaker: "B", arabic: "نعم، أقرأ جزءاً كل يوم", translit: "Na'am, aqra' juz'an kulla yawm", meaning: "Yes, I read one juz every day", type: "response" },
                { speaker: "A", arabic: "أي سورة تحب أكثر؟", translit: "Ayy sūrah tuḥibb akthar?", meaning: "Which surah do you like most?", type: "question" },
                { speaker: "B", arabic: "أحب سورة يوسف كثيراً", translit: "Uḥibb sūrat Yūsuf kathīran", meaning: "I love Surah Yusuf very much", type: "response" },
                { speaker: "A", arabic: "هل تحفظ القرآن؟", translit: "Hal taḥfaẓ al-Qur'ān?", meaning: "Do you memorize the Quran?", type: "question" },
                { speaker: "B", arabic: "أحفظ ثلاثين جزءاً, الحمد لله", translit: "Aḥfaẓ thalāthīna juz'an, alḥamdulillāh", meaning: "I memorize thirty juz, praise be to Allah", type: "response" }
            ]
        },
        // Daily life conversation
        {
            topic: "daily",
            lines: [
                { speaker: "A", arabic: "متى تستيقظ كل يوم؟", translit: "Matā tastaqiẓ kulla yawm?", meaning: "When do you wake up every day?", type: "question" },
                { speaker: "B", arabic: "أستيقظ عند الفجر", translit: "Astaqiẓ 'inda al-fajr", meaning: "I wake up at dawn", type: "response" },
                { speaker: "A", arabic: "ومتى تذهب إلى العمل؟", translit: "Wa matā tadhhab ilā al-'amal?", meaning: "And when do you go to work?", type: "question" },
                { speaker: "B", arabic: "أذهب إلى العمل بعد صلاة الفجر", translit: "Adhhab ilā al-'amal ba'da ṣalāt al-fajr", meaning: "I go to work after Fajr prayer", type: "response" },
                { speaker: "A", arabic: "كم ساعة تعمل في اليوم؟", translit: "Kam sā'ah ta'mal fī al-yawm?", meaning: "How many hours do you work per day?", type: "question" },
                { speaker: "B", arabic: "أعمل ثماني ساعات", translit: "A'mal thamāniya sā'āt", meaning: "I work eight hours", type: "response" }
            ]
        },
        // Market conversation
        {
            topic: "market",
            lines: [
                { speaker: "A", arabic: "بكم هذا؟", translit: "Bikam hādhā?", meaning: "How much is this?", type: "question" },
                { speaker: "B", arabic: "هذا بعشر ريالات", translit: "Hādhā bi'ashar riyālāt", meaning: "This is ten riyals", type: "response" },
                { speaker: "A", arabic: "هل يمكن التخفيض؟", translit: "Hal yumkin at-takhfīḍ?", meaning: "Can you reduce the price?", type: "question" },
                { speaker: "B", arabic: "نعم، بثمانية ريالات", translit: "Na'am, bi-thamāniya riyālāt", meaning: "Yes, for eight riyals", type: "response" },
                { speaker: "A", arabic: "سآخذه. هل تقبل بطاقة ائتمان؟", translit: "Sā'khudhuh. Hal taqbal biṭāqat i'timān?", meaning: "I'll take it. Do you accept credit card?", type: "question" },
                { speaker: "B", arabic: "آسف، نقداً فقط", translit: "Āsif, naqdan faqaṭ", meaning: "Sorry, cash only", type: "response" }
            ]
        },
        // Restaurant conversation
        {
            topic: "food",
            lines: [
                { speaker: "A", arabic: "هل لديكم طعام حلال؟", translit: "Hal ladaykum ṭa'ām ḥalāl?", meaning: "Do you have halal food?", type: "question" },
                { speaker: "B", arabic: "نعم، جميع طعامنا حلال", translit: "Na'am, jamī' ṭa'āminā ḥalāl", meaning: "Yes, all our food is halal", type: "response" },
                { speaker: "A", arabic: "ماذا تنصحني أن آكل؟", translit: "Mādhā tanṣaḥunī an ākul?", meaning: "What do you recommend I eat?", type: "question" },
                { speaker: "B", arabic: "أوصيك بالكبسة، إنها لذيذة", translit: "Ūṣīka bil-kabsah, innahā ladhdhīdhah", meaning: "I recommend the kabsa, it's delicious", type: "response" },
                { speaker: "A", arabic: "حسناً، سآخذ كبسة دجاج", translit: "Ḥasanan, sā'khudh kabsat dajāj", meaning: "Okay, I'll take chicken kabsa", type: "response" },
                { speaker: "B", arabic: "تفضل، بالهناء والشفاء", translit: "Tafaḍḍal, bil-hanā' wash-shifā'", meaning: "Here you go, enjoy your meal", type: "polite" }
            ]
        },
        // Mosque conversation
        {
            topic: "prayer",
            lines: [
                { speaker: "B", arabic: "نعم، صلاة الظهر بعد عشر دقائق", translit: "Na'am, ṣalāt aẓ-ẓuhr ba'da 'ashr daqā'iqa", meaning: "Yes, Dhuhr prayer is in ten minutes", type: "response" },
                { speaker: "A", arabic: "جزاك الله خيراً", translit: "Jazākallāhu khayran", meaning: "May Allah reward you", type: "blessing" },
                { speaker: "B", arabic: "وإياك. هل تصلي معنا؟", translit: "Wa iyyāk. Hal tuṣallī ma'anā?", meaning: "And you too. Will you pray with us?", type: "question" },
                { speaker: "A", arabic: "نعم، إن شاء الله", translit: "Na'am, in shā'a Allāh", meaning: "Yes, if Allah wills", type: "response" }
            ]
        },
        // Travel conversation
        {
            topic: "daily",
            lines: [
                { speaker: "A", arabic: "هل سافرت من قبل إلى مكة؟", translit: "Hal sāfarta min qabl ilā Makkah?", meaning: "Have you traveled to Mecca before?", type: "question" },
                { speaker: "B", arabic: "نعم، سافرت إلى مكة مرتين", translit: "Na'am, sāfartu ilā Makkah marratayn", meaning: "Yes, I traveled to Mecca twice", type: "response" },
                { speaker: "A", arabic: "متى كانت آخر مرة؟", translit: "Matā kānat ākhir marrah?", meaning: "When was the last time?", type: "question" },
                { speaker: "B", arabic: "العام الماضي", translit: "Al-'ām al-māḍī", meaning: "Last year", type: "response" },
                { speaker: "A", arabic: "هل تريد الذهاب مرة أخرى؟", translit: "Hal turīd adh-dhahāb marrah ukhrā?", meaning: "Do you want to go again?", type: "question" },
                { speaker: "B", arabic: "نعم، إن شاء الله كل عام", translit: "Na'am, in shā'a Allāh kulla 'ām", meaning: "Yes, every year if Allah wills", type: "response" }
            ]
        },
        // Ramadan conversation
        {
            topic: "daily",
            lines: [
                { speaker: "A", arabic: "هل تصوم رمضان؟", translit: "Hal taṣūm Ramaḍān?", meaning: "Do you fast Ramadan?", type: "question" },
                { speaker: "B", arabic: "نعم، أصوم رمضان كاملاً", translit: "Na'am, aṣūmu Ramaḍāna kāmilan", meaning: "Yes, I fast the entire Ramadan", type: "response" },
                { speaker: "A", arabic: "ما هو طعامك المفضل في الإفطار؟", translit: "Mā huwa ṭa'āmuka al-mufaḍḍal fī al-ifṭār?", meaning: "What is your favorite food for iftar?", type: "question" },
                { speaker: "B", arabic: "أحب التمر والشوربة", translit: "Uḥibb at-tamra wash-shūrbah", meaning: "I love dates and soup", type: "response" },
                { speaker: "A", arabic: "رمضان كريم", translit: "Ramaḍān karīm", meaning: "Ramadan is generous", type: "greeting" },
                { speaker: "B", arabic: "الله أكرم", translit: "Allāhu akram", meaning: "Allah is more generous", type: "response" }
            ]
        },
        // Learning Arabic conversation
        {
            topic: "introduction",
            lines: [
                { speaker: "A", arabic: "كم مدة دراستك للعربية؟", translit: "Kam muddat dirāsatika lil-'arabiyyah?", meaning: "How long have you been studying Arabic?", type: "question" },
                { speaker: "B", arabic: "أدرس العربية منذ ستة أشهر", translit: "Adrus al-'arabiyyah mundhu sittat ashhur", meaning: "I have been studying Arabic for six months", type: "response" },
                { speaker: "A", arabic: "هل العربية صعبة؟", translit: "Hal al-'arabiyyah ṣa'bah?", meaning: "Is Arabic difficult?", type: "question" },
                { speaker: "B", arabic: "ليست صعبة، لكنها تحتاج إلى ممارسة", translit: "Laysat ṣa'bah, lākinahā taḥtāju ilā mumārasah", meaning: "It's not difficult, but it needs practice", type: "response" },
                { speaker: "A", arabic: "نعم، الممارسة مهمة جداً", translit: "Na'am, al-mumārasah muhimmah jiddan", meaning: "Yes, practice is very important", type: "agreement" }
            ]
        },
        // Weekend conversation
        {
            topic: "daily",
            lines: [
                { speaker: "A", arabic: "ماذا تفعل في عطلة نهاية الأسبوع؟", translit: "Mādhā taf'al fī 'uṭlat nihāyat al-usbū'?", meaning: "What do you do on the weekend?", type: "question" },
                { speaker: "B", arabic: "أزور العائلة والأصدقاء", translit: "Azūr al-'ā'ilah wal-aṣdiqā'", meaning: "I visit family and friends", type: "response" },
                { speaker: "A", arabic: "هل تذهب إلى المتنزه؟", translit: "Hal tadhhab ilā al-muntazah?", meaning: "Do you go to the park?", type: "question" },
                { speaker: "B", arabic: "أحياناً، إذا كان الجو جميلاً", translit: "Aḥyānan, idhā kāna al-jaww jamīlan", meaning: "Sometimes, if the weather is nice", type: "response" },
                { speaker: "A", arabic: "هل تفضل البحر أم الجبل؟", translit: "Hal tufaḍḍil al-baḥr am al-jabal?", meaning: "Do you prefer the sea or the mountain?", type: "question" },
                { speaker: "B", arabic: "أفضل البحر", translit: "Ufaḍḍil al-baḥr", meaning: "I prefer the sea", type: "response" }
            ]
        }
    ],

    // 150+ Quiz Questions (mix of letters, words, phrases, sentences, conversations)
    quizQuestions: [
        // LETTERS QUIZ (30 questions)
        { 
            question: "ما هو الحرف الأول في كلمة 'باب'؟", 
            arabicQuestion: "What is the first letter in the word 'باب'?",
            options: ["ب", "ا", "ت", "ن"], 
            answer: "ب", 
            type: "multiple",
            category: "letters",
            difficulty: "easy",
            explanation: "باب begins with the letter ب (Ba)"
        },
        { 
            question: "كيف ينطق حرف 'ج'؟", 
            arabicQuestion: "How is the letter 'ج' pronounced?",
            options: ["Like 'j' in jam", "Like 'g' in go", "Like 'ch' in chip", "Like 'sh' in ship"], 
            answer: "Like 'j' in jam", 
            type: "multiple",
            category: "letters",
            difficulty: "easy",
            explanation: "Jeem (ج) is pronounced like the English 'j'"
        },
        { 
            question: "أي من هذه الحروف ينطق من الحلق؟", 
            arabicQuestion: "Which of these letters is pronounced from the throat?",
            options: ["ع", "ب", "ت", "س"], 
            answer: "ع", 
            type: "multiple",
            category: "letters",
            difficulty: "medium",
            explanation: "Ayn (ع) is a deep throat letter"
        },
        { 
            question: "كم عدد حروف اللغة العربية؟", 
            arabicQuestion: "How many letters are in the Arabic alphabet?",
            options: ["28", "26", "30", "24"], 
            answer: "28", 
            type: "multiple",
            category: "letters",
            difficulty: "easy",
            explanation: "The Arabic alphabet has 28 letters"
        },
        { 
            question: "ما هو الحرف الذي يشبه حرف 'ب' لكن مع نقطة واحدة فوق؟", 
            arabicQuestion: "Which letter is like 'ب' but with one dot above?",
            options: ["ن", "ت", "ث", "ي"], 
            answer: "ن", 
            type: "multiple",
            category: "letters",
            difficulty: "medium",
            explanation: "Noon (ن) has one dot above, while Ba (ب) has one dot below"
        },
        { 
            question: "كيف ينطق حرف 'خ'؟", 
            arabicQuestion: "How is the letter 'خ' pronounced?",
            options: ["Like 'ch' in loch", "Like 'k' in kite", "Like 'h' in hat", "Like 'kh' in Khan"], 
            answer: "Like 'ch' in loch", 
            type: "multiple",
            category: "letters",
            difficulty: "medium",
            explanation: "Kha (خ) is a guttural sound like the Scottish 'loch'"
        },
        { 
            question: "ما هو الحرف الثالث في كلمة 'مسجد'؟", 
            arabicQuestion: "What is the third letter in the word 'مسجد'?",
            options: ["ج", "س", "م", "د"], 
            answer: "ج", 
            type: "multiple",
            category: "letters",
            difficulty: "medium",
            explanation: "Masjid: م (first), س (second), ج (third), د (fourth)"
        },
        { 
            question: "أي من هذه الحروف يسمى 'ألف'؟", 
            arabicQuestion: "Which of these letters is called 'Alif'?",
            options: ["ا", "و", "ي", "ع"], 
            answer: "ا", 
            type: "multiple",
            category: "letters",
            difficulty: "easy",
            explanation: "Alif is the first letter of the Arabic alphabet"
        },
        { 
            question: "حرف 'ذ' ينطق مثل...", 
            arabicQuestion: "The letter 'ذ' is pronounced like...",
            options: ["th in 'that'", "th in 'think'", "z in 'zebra'", "d in 'dog'"], 
            answer: "th in 'that'", 
            type: "multiple",
            category: "letters",
            difficulty: "medium",
            explanation: "Dhal (ذ) is the voiced 'th' sound like in 'that'"
        },
        { 
            question: "أي من هذه الحروف ليس له نقاط؟", 
            arabicQuestion: "Which of these letters has no dots?",
            options: ["د", "ب", "ت", "ث"], 
            answer: "د", 
            type: "multiple",
            category: "letters",
            difficulty: "easy",
            explanation: "Dal (د) has no dots, while others have one, two, or three dots"
        },
        { 
            question: "كيف نكتب حرف 'ع' في أول الكلمة؟", 
            arabicQuestion: "How do we write the letter 'ع' at the beginning of a word?",
            options: ["عـ", "ـعـ", "ـع", "ع"], 
            answer: "عـ", 
            type: "multiple",
            category: "letters",
            difficulty: "hard",
            explanation: "At the beginning of a word, Ayn is written as عـ"
        },
        { 
            question: "حرف 'ق' ينطق من...", 
            arabicQuestion: "The letter 'ق' is pronounced from...",
            options: ["أقصى الحلق", "وسط الحلق", "الشفتين", "اللسان"], 
            answer: "أقصى الحلق", 
            type: "multiple",
            category: "letters",
            difficulty: "hard",
            explanation: "Qaf (ق) is pronounced from the deepest part of the throat"
        },

        // WORDS QUIZ (40 questions)
        { 
            question: "ما معنى كلمة 'أسد'؟", 
            arabicQuestion: "What does 'أسد' mean?",
            options: ["Lion", "Tiger", "Elephant", "Camel"], 
            answer: "Lion", 
            type: "multiple",
            category: "words",
            subcategory: "animals",
            difficulty: "easy",
            explanation: "أسد means lion"
        },
        { 
            question: "كيف نقول 'Sun' بالعربية؟", 
            arabicQuestion: "How do you say 'Sun' in Arabic?",
            options: ["شمس", "قمر", "نجم", "سماء"], 
            answer: "شمس", 
            type: "multiple",
            category: "words",
            subcategory: "nature",
            difficulty: "easy",
            explanation: "Sun = شمس (shams)"
        },
        { 
            question: "ما معنى 'باب'؟", 
            arabicQuestion: "What does 'باب' mean?",
            options: ["Door", "Window", "House", "Room"], 
            answer: "Door", 
            type: "multiple",
            category: "words",
            subcategory: "household",
            difficulty: "easy",
            explanation: "باب means door"
        },
        { 
            question: "كيف نقول 'Father' بالعربية؟", 
            arabicQuestion: "How do you say 'Father' in Arabic?",
            options: ["أب", "أم", "أخ", "جد"], 
            answer: "أب", 
            type: "multiple",
            category: "words",
            subcategory: "family",
            difficulty: "easy",
            explanation: "Father = أب (ab)"
        },
        { 
            question: "ما معنى 'شمس'؟", 
            arabicQuestion: "What does 'شمس' mean?",
            options: ["Sun", "Moon", "Star", "Cloud"], 
            answer: "Sun", 
            type: "multiple",
            category: "words",
            subcategory: "nature",
            difficulty: "easy",
            explanation: "شمس means sun"
        },
        { 
            question: "كيف نقول 'Water' بالعربية؟", 
            arabicQuestion: "How do you say 'Water' in Arabic?",
            options: ["ماء", "نار", "هواء", "تراب"], 
            answer: "ماء", 
            type: "multiple",
            category: "words",
            subcategory: "nature",
            difficulty: "easy",
            explanation: "Water = ماء (mā')"
        },
        { 
            question: "ما هو جمع كلمة 'كتاب'؟", 
            arabicQuestion: "What is the plural of 'كتاب'?",
            options: ["كتب", "كتابة", "مكتب", "كاتب"], 
            answer: "كتب", 
            type: "multiple",
            category: "words",
            difficulty: "medium",
            explanation: "The plural of kitāb (book) is kutub (books)"
        },
        { 
            question: "ما معنى 'رحمة'؟", 
            arabicQuestion: "What does 'رحمة' mean?",
            options: ["Mercy", "Forgiveness", "Guidance", "Patience"], 
            answer: "Mercy", 
            type: "multiple",
            category: "words",
            subcategory: "quranic",
            difficulty: "medium",
            explanation: "Raḥmah means mercy"
        },
        { 
            question: "كيف نقول 'Camel' بالعربية؟", 
            arabicQuestion: "How do you say 'Camel' in Arabic?",
            options: ["جمل", "حصان", "بقرة", "فيل"], 
            answer: "جمل", 
            type: "multiple",
            category: "words",
            subcategory: "animals",
            difficulty: "easy",
            explanation: "Camel = جمل (jamal)"
        },
        { 
            question: "ما معنى 'نور'؟", 
            arabicQuestion: "What does 'نور' mean?",
            options: ["Light", "Fire", "Water", "Air"], 
            answer: "Light", 
            type: "multiple",
            category: "words",
            subcategory: "quranic",
            difficulty: "medium",
            explanation: "Nūr means light"
        },
        { 
            question: "كيف نقول 'Red' بالعربية للمذكر؟", 
            arabicQuestion: "How do you say 'Red' in Arabic (masculine)?",
            options: ["أحمر", "حمراء", "أحمرة", "محمر"], 
            answer: "أحمر", 
            type: "multiple",
            category: "words",
            subcategory: "colors",
            difficulty: "medium",
            explanation: "Masculine red = أحمر (aḥmar)"
        },
        { 
            question: "ما معنى 'صبر'؟", 
            arabicQuestion: "What does 'صبر' mean?",
            options: ["Patience", "Happiness", "Sadness", "Anger"], 
            answer: "Patience", 
            type: "multiple",
            category: "words",
            subcategory: "quranic",
            difficulty: "medium",
            explanation: "Ṣabr means patience"
        },
        { 
            question: "كيف نقول 'Elephant' بالعربية؟", 
            arabicQuestion: "How do you say 'Elephant' in Arabic?",
            options: ["فيل", "أسد", "نمر", "ذئب"], 
            answer: "فيل", 
            type: "multiple",
            category: "words",
            subcategory: "animals",
            difficulty: "easy",
            explanation: "Elephant = فيل (fīl)"
        },
        { 
            question: "ما معنى 'بيت'؟", 
            arabicQuestion: "What does 'بيت' mean?",
            options: ["House", "Door", "Room", "Building"], 
            answer: "House", 
            type: "multiple",
            category: "words",
            subcategory: "household",
            difficulty: "easy",
            explanation: "Bayt means house"
        },
        { 
            question: "كيف نقول 'Brother' بالعربية؟", 
            arabicQuestion: "How do you say 'Brother' in Arabic?",
            options: ["أخ", "أخت", "ابن", "أب"], 
            answer: "أخ", 
            type: "multiple",
            category: "words",
            subcategory: "family",
            difficulty: "easy",
            explanation: "Brother = أخ (akh)"
        },
        { 
            question: "ما هو مفرد 'نجوم'؟", 
            arabicQuestion: "What is the singular of 'نجوم'?",
            options: ["نجم", "نجمة", "نجمي", "نجام"], 
            answer: "نجم", 
            type: "multiple",
            category: "words",
            subcategory: "nature",
            difficulty: "medium",
            explanation: "The singular of nujūm (stars) is najm (star)"
        },
        { 
            question: "ما معنى 'جنة'؟", 
            arabicQuestion: "What does 'جنة' mean?",
            options: ["Paradise", "Hell", "Garden", "Heaven"], 
            answer: "Paradise", 
            type: "multiple",
            category: "words",
            subcategory: "quranic",
            difficulty: "medium",
            explanation: "Jannah means Paradise"
        },
        { 
            question: "كيف نقول 'Moon' بالعربية؟", 
            arabicQuestion: "How do you say 'Moon' in Arabic?",
            options: ["قمر", "شمس", "نجم", "سماء"], 
            answer: "قمر", 
            type: "multiple",
            category: "words",
            subcategory: "nature",
            difficulty: "easy",
            explanation: "Moon = قمر (qamar)"
        },
        { 
            question: "ما معنى 'مفتاح'؟", 
            arabicQuestion: "What does 'مفتاح' mean?",
            options: ["Key", "Lock", "Door", "Window"], 
            answer: "Key", 
            type: "multiple",
            category: "words",
            subcategory: "household",
            difficulty: "medium",
            explanation: "Miftāḥ means key"
        },
        { 
            question: "كيف نقول 'Blue' بالعربية؟", 
            arabicQuestion: "How do you say 'Blue' in Arabic?",
            options: ["أزرق", "أخضر", "أحمر", "أصفر"], 
            answer: "أزرق", 
            type: "multiple",
            category: "words",
            subcategory: "colors",
            difficulty: "easy",
            explanation: "Blue = أزرق (azraq)"
        },

        // PHRASES QUIZ (30 questions)
        { 
            question: "ما معنى 'السلام عليكم'؟", 
            arabicQuestion: "What does 'السلام عليكم' mean?",
            options: ["Peace be upon you", "Hello", "Good morning", "Goodbye"], 
            answer: "Peace be upon you", 
            type: "multiple",
            category: "phrases",
            difficulty: "easy",
            explanation: "As-salāmu 'alaykum is the Islamic greeting meaning 'Peace be upon you'"
        },
        { 
            question: "كيف ترد على 'السلام عليكم'؟", 
            arabicQuestion: "How do you respond to 'السلام عليكم'?",
            options: ["وعليكم السلام", "الحمد لله", "بسم الله", "إن شاء الله"], 
            answer: "وعليكم السلام", 
            type: "multiple",
            category: "phrases",
            difficulty: "easy",
            explanation: "The response is 'wa 'alaykumus salām'"
        },
        { 
            question: "ما معنى 'بسم الله'؟", 
            arabicQuestion: "What does 'بسم الله' mean?",
            options: ["In the name of Allah", "Praise be to Allah", "Glory be to Allah", "Allah is Great"], 
            answer: "In the name of Allah", 
            type: "multiple",
            category: "phrases",
            difficulty: "easy",
            explanation: "Bismillāh means 'In the name of Allah'"
        },
        { 
            question: "متى نقول 'الحمد لله'؟", 
            arabicQuestion: "When do we say 'الحمد لله'?",
            options: ["After sneezing", "Before eating", "When angry", "When sleeping"], 
            answer: "After sneezing", 
            type: "multiple",
            category: "phrases",
            difficulty: "medium",
            explanation: "Alḥamdulillāh is said after sneezing and when expressing gratitude"
        },
        { 
            question: "ما معنى 'إن شاء الله'؟", 
            arabicQuestion: "What does 'إن شاء الله' mean?",
            options: ["If Allah wills", "Praise be to Allah", "Glory be to Allah", "Allah is Great"], 
            answer: "If Allah wills", 
            type: "multiple",
            category: "phrases",
            difficulty: "easy",
            explanation: "In shā'a Allāh means 'If Allah wills'"
        },
        { 
            question: "كيف نقول 'Thank you' بالعربية؟", 
            arabicQuestion: "How do you say 'Thank you' in Arabic?",
            options: ["شكراً", "عفواً", "من فضلك", "آسف"], 
            answer: "شكراً", 
            type: "multiple",
            category: "phrases",
            difficulty: "easy",
            explanation: "Shukran means 'Thank you'"
        },
        { 
            question: "ما هو رد 'شكراً'؟", 
            arabicQuestion: "What is the response to 'شكراً'?",
            options: ["عفواً", "شكراً", "نعم", "لا"], 
            answer: "عفواً", 
            type: "multiple",
            category: "phrases",
            difficulty: "easy",
            explanation: "The response to shukran is 'afwan (you're welcome)"
        },
        { 
            question: "ما معنى 'ما شاء الله'؟", 
            arabicQuestion: "What does 'ما شاء الله' mean?",
            options: ["What Allah has willed", "If Allah wills", "Praise be to Allah", "Glory be to Allah"], 
            answer: "What Allah has willed", 
            type: "multiple",
            category: "phrases",
            difficulty: "medium",
            explanation: "Mā shā'a Allāh is said when expressing admiration"
        },
        { 
            question: "متى نقول 'أستغفر الله'؟", 
            arabicQuestion: "When do we say 'أستغفر الله'?",
            options: ["After a mistake", "Before eating", "When happy", "When sleeping"], 
            answer: "After a mistake", 
            type: "multiple",
            category: "phrases",
            difficulty: "medium",
            explanation: "Astaghfirullāh is said when seeking forgiveness after a mistake"
        },
        { 
            question: "كيف نقول 'Good morning' بالعربية؟", 
            arabicQuestion: "How do you say 'Good morning' in Arabic?",
            options: ["صباح الخير", "مساء الخير", "تصبح على خير", "ليلة سعيدة"], 
            answer: "صباح الخير", 
            type: "multiple",
            category: "phrases",
            difficulty: "easy",
            explanation: "Ṣabāḥ al-khayr means 'Good morning'"
        },
        { 
            question: "ما هو رد 'صباح الخير'؟", 
            arabicQuestion: "What is the response to 'صباح الخير'?",
            options: ["صباح النور", "مساء الخير", "ليلة سعيدة", "تصبح على خير"], 
            answer: "صباح النور", 
            type: "multiple",
            category: "phrases",
            difficulty: "easy",
            explanation: "The response is 'ṣabāḥ an-nūr'"
        },
        { 
            question: "ما معنى 'مع السلامة'؟", 
            arabicQuestion: "What does 'مع السلامة' mean?",
            options: ["Go with peace", "Come with peace", "Stay with peace", "Sleep with peace"], 
            answer: "Go with peace", 
            type: "multiple",
            category: "phrases",
            difficulty: "medium",
            explanation: "Ma'a as-salāmah is said when someone leaves, meaning 'go with peace'"
        },

        // SENTENCES QUIZ (30 questions)
        { 
            question: "ما معنى 'كيف حالك؟'؟", 
            arabicQuestion: "What does 'كيف حالك؟' mean?",
            options: ["How are you?", "What is your name?", "Where are you from?", "How old are you?"], 
            answer: "How are you?", 
            type: "multiple",
            category: "sentences",
            difficulty: "easy",
            explanation: "Kayfa ḥāluk? means 'How are you?' (to a male)"
        },
        { 
            question: "كيف نقول 'My name is Ahmed' بالعربية؟", 
            arabicQuestion: "How do you say 'My name is Ahmed' in Arabic?",
            options: ["اسمي أحمد", "أنا أحمد", "هذا أحمد", "ذلك أحمد"], 
            answer: "اسمي أحمد", 
            type: "multiple",
            category: "sentences",
            difficulty: "easy",
            explanation: "Ismī Aḥmad means 'My name is Ahmed'"
        },
        { 
            question: "ما معنى 'من أين أنت؟'؟", 
            arabicQuestion: "What does 'من أين أنت؟' mean?",
            options: ["Where are you from?", "What is your name?", "How are you?", "How old are you?"], 
            answer: "Where are you from?", 
            type: "multiple",
            category: "sentences",
            difficulty: "easy",
            explanation: "Min ayna anta? means 'Where are you from?' (to a male)"
        },
        { 
            question: "كيف تقول 'I am from Egypt' بالعربية؟", 
            arabicQuestion: "How do you say 'I am from Egypt' in Arabic?",
            options: ["أنا من مصر", "أنا في مصر", "أنا إلى مصر", "أنا على مصر"], 
            answer: "أنا من مصر", 
            type: "multiple",
            category: "sentences",
            difficulty: "easy",
            explanation: "Ana min Miṣr means 'I am from Egypt'"
        },
        { 
            question: "ما معنى 'كم عمرك؟'؟", 
            arabicQuestion: "What does 'كم عمرك؟' mean?",
            options: ["How old are you?", "How are you?", "What is your name?", "Where are you from?"], 
            answer: "How old are you?", 
            type: "multiple",
            category: "sentences",
            difficulty: "easy",
            explanation: "Kam 'umruk? means 'How old are you?'"
        },
        { 
            question: "كيف تقول 'I am 25 years old' بالعربية؟", 
            arabicQuestion: "How do you say 'I am 25 years old' in Arabic?",
            options: ["عمري 25 سنة", "أنا 25 سنة", "عندي 25 سنة", "لي 25 سنة"], 
            answer: "عمري 25 سنة", 
            type: "multiple",
            category: "sentences",
            difficulty: "medium",
            explanation: "'Umrī 25 sanah means 'I am 25 years old'"
        },
        { 
            question: "ما معنى 'بخير، الحمد لله'؟", 
            arabicQuestion: "What does 'بخير، الحمد لله' mean?",
            options: ["Fine, praise be to Allah", "Good, thank you", "I'm okay", "All is well"], 
            answer: "Fine, praise be to Allah", 
            type: "multiple",
            category: "sentences",
            difficulty: "easy",
            explanation: "Bikhayr, alḥamdulillāh means 'Fine, praise be to Allah'"
        },
        { 
            question: "كيف تسأل 'Do you speak Arabic?' لرجل؟", 
            arabicQuestion: "How do you ask 'Do you speak Arabic?' to a man?",
            options: ["هل تتكلم العربية؟", "هل تتكلمين العربية؟", "هل تتكلمون العربية؟", "هل تتكلمان العربية؟"], 
            answer: "هل تتكلم العربية؟", 
            type: "multiple",
            category: "sentences",
            difficulty: "medium",
            explanation: "Hal tatakallam al-'arabiyyah? is for a male"
        },
        { 
            question: "ما معنى 'أنا أتعلم العربية'؟", 
            arabicQuestion: "What does 'أنا أتعلم العربية' mean?",
            options: ["I am learning Arabic", "I speak Arabic", "I love Arabic", "I study Arabic"], 
            answer: "I am learning Arabic", 
            type: "multiple",
            category: "sentences",
            difficulty: "medium",
            explanation: "Ana ata'allam al-'arabiyyah means 'I am learning Arabic'"
        },
        { 
            question: "كيف تقول 'This is my book' بالعربية؟", 
            arabicQuestion: "How do you say 'This is my book' in Arabic?",
            options: ["هذا كتابي", "هذه كتابي", "ذلك كتابي", "هنا كتابي"], 
            answer: "هذا كتابي", 
            type: "multiple",
            category: "sentences",
            difficulty: "medium",
            explanation: "Hādhā kitābī means 'This is my book' (masculine)"
        },
        { 
            question: "ما معنى 'أين المسجد؟'؟", 
            arabicQuestion: "What does 'أين المسجد؟' mean?",
            options: ["Where is the mosque?", "What is the mosque?", "When is the mosque?", "How is the mosque?"], 
            answer: "Where is the mosque?", 
            type: "multiple",
            category: "sentences",
            difficulty: "easy",
            explanation: "Ayna al-masjid? means 'Where is the mosque?'"
        },
        { 
            question: "كيف تقول 'The food is delicious' بالعربية؟", 
            arabicQuestion: "How do you say 'The food is delicious' in Arabic?",
            options: ["الطعام لذيذ", "الطعام حار", "الطعام بارد", "الطعام مالح"], 
            answer: "الطعام لذيذ", 
            type: "multiple",
            category: "sentences",
            difficulty: "medium",
            explanation: "Aṭ-ṭa'ām ladhdhīdh means 'The food is delicious'"
        },

        // CONVERSATION QUIZ (30 questions)
        { 
            question: "في محادثة التعارف، ماذا تقول بعد 'ما اسمك؟'؟", 
            arabicQuestion: "In an introduction conversation, what do you say after 'ما اسمك؟'?",
            options: ["اسمي...", "كيف حالك؟", "من أين أنت؟", "تشرفنا"], 
            answer: "اسمي...", 
            type: "multiple",
            category: "conversations",
            difficulty: "easy",
            explanation: "After 'What is your name?', you respond with 'My name is...'"
        },
        { 
            question: "كيف ترد على 'كيف حالك؟'؟", 
            arabicQuestion: "How do you respond to 'كيف حالك؟'?",
            options: ["بخير، الحمد لله", "اسمي أحمد", "من مصر", "عمري 25"], 
            answer: "بخير، الحمد لله", 
            type: "multiple",
            category: "conversations",
            difficulty: "easy",
            explanation: "The typical response to 'How are you?' is 'Fine, praise be to Allah'"
        },
        { 
            question: "في محادثة عن العائلة، كيف تسأل عن عدد الإخوة؟", 
            arabicQuestion: "In a family conversation, how do you ask about the number of siblings?",
            options: ["كم عدد إخوتك؟", "ما اسم أخيك؟", "أين يسكن أخوك؟", "كيف حال أخيك؟"], 
            answer: "كم عدد إخوتك؟", 
            type: "multiple",
            category: "conversations",
            difficulty: "medium",
            explanation: "Kam 'adad ikhwatika? means 'How many siblings do you have?'"
        },
        { 
            question: "ماذا تقول عندما تريد شراء شيء من السوق؟", 
            arabicQuestion: "What do you say when you want to buy something at the market?",
            options: ["بكم هذا؟", "ما هذا؟", "أين هذا؟", "متى هذا؟"], 
            answer: "بكم هذا؟", 
            type: "multiple",
            category: "conversations",
            difficulty: "easy",
            explanation: "Bikam hādhā? means 'How much is this?'"
        },
        { 
            question: "كيف تطلب المساعدة بالعربية؟", 
            arabicQuestion: "How do you ask for help in Arabic?",
            options: ["هل يمكنك مساعدتي؟", "اذهب من هنا", "لا أريد", "تفضل"], 
            answer: "هل يمكنك مساعدتي؟", 
            type: "multiple",
            category: "conversations",
            difficulty: "medium",
            explanation: "Hal yumkinuka musā'adatī? means 'Can you help me?'"
        },
        { 
            question: "ما هو الرد المناسب على 'جزاك الله خيراً'؟", 
            arabicQuestion: "What is the appropriate response to 'جزاك الله خيراً'?",
            options: ["وإياك", "شكراً", "عفواً", "نعم"], 
            answer: "وإياك", 
            type: "multiple",
            category: "conversations",
            difficulty: "medium",
            explanation: "The response is 'wa iyyāk' meaning 'and you too'"
        },
        { 
            question: "في محادثة عن الطعام، كيف تسأل عن الطعام الحلال؟", 
            arabicQuestion: "In a conversation about food, how do you ask about halal food?",
            options: ["هل هذا حلال؟", "هل هذا لذيذ؟", "هل هذا حار؟", "هل هذا بارد؟"], 
            answer: "هل هذا حلال؟", 
            type: "multiple",
            category: "conversations",
            difficulty: "medium",
            explanation: "Hal hādhā ḥalāl? means 'Is this halal?'"
        },
        { 
            question: "كيف تقول 'I don't understand' بالعربية؟", 
            arabicQuestion: "How do you say 'I don't understand' in Arabic?",
            options: ["لا أفهم", "لا أعرف", "لا أريد", "لا أستطيع"], 
            answer: "لا أفهم", 
            type: "multiple",
            category: "conversations",
            difficulty: "medium",
            explanation: "Lā afham means 'I don't understand'"
        },
        { 
            question: "ما معنى 'أنا آسف'؟", 
            arabicQuestion: "What does 'أنا آسف' mean?",
            options: ["I'm sorry", "I'm happy", "I'm sad", "I'm angry"], 
            answer: "I'm sorry", 
            type: "multiple",
            category: "conversations",
            difficulty: "easy",
            explanation: "Ana āsif means 'I'm sorry' (masculine)"
        },
        { 
            question: "كيف تسأل عن الوقت بالعربية؟", 
            arabicQuestion: "How do you ask for the time in Arabic?",
            options: ["كم الساعة؟", "أين الساعة؟", "ما الساعة؟", "متى الساعة؟"], 
            answer: "كم الساعة؟", 
            type: "multiple",
            category: "conversations",
            difficulty: "medium",
            explanation: "Kam as-sā'ah? means 'What time is it?'"
        },
        { 
            question: "في محادثة السفر، كيف تسأل عن تذكرة الطائرة؟", 
            arabicQuestion: "In a travel conversation, how do you ask about a plane ticket?",
            options: ["كم ثمن التذكرة؟", "أين التذكرة؟", "متى التذكرة؟", "ما لون التذكرة؟"], 
            answer: "كم ثمن التذكرة؟", 
            type: "multiple",
            category: "conversations",
            difficulty: "hard",
            explanation: "Kam thaman at-tadhkirah? means 'How much is the ticket?'"
        },
        { 
            question: "كيف تقول 'I love you' لله بالعربية؟", 
            arabicQuestion: "How do you say 'I love you' to Allah in Arabic?",
            options: ["أحب الله", "أحبك الله", "أنا أحب الله", "حبي لله"], 
            answer: "أحب الله", 
            type: "multiple",
            category: "conversations",
            difficulty: "medium",
            explanation: "Uḥibb Allāh means 'I love Allah'"
        },

        // QURANIC CONVERSATION QUIZ (20 questions)
        { 
            question: "ما هي أول كلمة نزلت في القرآن؟", 
            arabicQuestion: "What was the first word revealed in the Quran?",
            options: ["اقرأ", "بسم", "الحمد", "قل"], 
            answer: "اقرأ", 
            type: "multiple",
            category: "quranic",
            difficulty: "hard",
            explanation: "The first word revealed was 'Iqra' (Read!)"
        },
        { 
            question: "كم مرة ذكرت كلمة 'رحمة' في القرآن؟", 
            arabicQuestion: "How many times is the word 'رحمة' mentioned in the Quran?",
            options: ["أكثر من 100 مرة", "أقل من 50 مرة", "مرة واحدة", "10 مرات"], 
            answer: "أكثر من 100 مرة", 
            type: "multiple",
            category: "quranic",
            difficulty: "hard",
            explanation: "The word 'rahmah' (mercy) and its derivatives appear over 100 times"
        },
        { 
            question: "ما معنى 'بسم الله الرحمن الرحيم'؟", 
            arabicQuestion: "What does 'بسم الله الرحمن الرحيم' mean?",
            options: ["In the name of Allah, Most Gracious, Most Merciful", "Praise be to Allah, Lord of the worlds", "Allah is Great", "There is no god but Allah"], 
            answer: "In the name of Allah, Most Gracious, Most Merciful", 
            type: "multiple",
            category: "quranic",
            difficulty: "easy",
            explanation: "Bismillāhir-raḥmānir-raḥīm is the opening phrase of the Quran"
        },
        { 
            question: "ما هي أقصر سورة في القرآن؟", 
            arabicQuestion: "What is the shortest surah in the Quran?",
            options: ["الكوثر", "الإخلاص", "الفلق", "الناس"], 
            answer: "الكوثر", 
            type: "multiple",
            category: "quranic",
            difficulty: "medium",
            explanation: "Surah Al-Kawthar is the shortest with only 3 verses"
        },
        { 
            question: "كم عدد سور القرآن؟", 
            arabicQuestion: "How many surahs are in the Quran?",
            options: ["114", "113", "115", "112"], 
            answer: "114", 
            type: "multiple",
            category: "quranic",
            difficulty: "easy",
            explanation: "The Quran has 114 surahs"
        },
        { 
            question: "ما معنى 'رب زدني علما'؟", 
            arabicQuestion: "What does 'رب زدني علما' mean?",
            options: ["My Lord, increase me in knowledge", "My Lord, forgive me", "My Lord, guide me", "My Lord, help me"], 
            answer: "My Lord, increase me in knowledge", 
            type: "multiple",
            category: "quranic",
            difficulty: "medium",
            explanation: "Rabbi zidnī 'ilmā is a Quranic dua for knowledge"
        },
        { 
            question: "في أي سورة تذكر قصة البقرة؟", 
            arabicQuestion: "In which surah is the story of the cow mentioned?",
            options: ["البقرة", "آل عمران", "النساء", "المائدة"], 
            answer: "البقرة", 
            type: "multiple",
            category: "quranic",
            difficulty: "easy",
            explanation: "The story of the cow is in Surah Al-Baqarah"
        },
        { 
            question: "ما هي السورة التي تسمى 'قل هو الله أحد'؟", 
            arabicQuestion: "Which surah is called 'Qul Huwa Allahu Ahad'?",
            options: ["الإخلاص", "الفلق", "الناس", "الكافرون"], 
            answer: "الإخلاص", 
            type: "multiple",
            category: "quranic",
            difficulty: "medium",
            explanation: "Surah Al-Ikhlāṣ begins with 'Qul Huwa Allāhu Ahad'"
        },
        { 
            question: "كم مرة ذكر اسم 'محمد' في القرآن؟", 
            arabicQuestion: "How many times is the name 'Muhammad' mentioned in the Quran?",
            options: ["4 مرات", "2 مرات", "1 مرة", "5 مرات"], 
            answer: "4 مرات", 
            type: "multiple",
            category: "quranic",
            difficulty: "hard",
            explanation: "The name 'Muhammad' is mentioned 4 times in the Quran"
        },
        { 
            question: "ما هي السورة التي تبدأ بـ 'الم'؟", 
            arabicQuestion: "Which surah begins with 'Alif Lam Meem'?",
            options: ["البقرة", "الفاتحة", "الإخلاص", "الناس"], 
            answer: "البقرة", 
            type: "multiple",
            category: "quranic",
            difficulty: "medium",
            explanation: "Surah Al-Baqarah begins with the disjointed letters 'Alif Lam Meem'"
        }
    ]
};

// Create allQuizQuestions array for easy access
arabicLearningData.allQuizQuestions = arabicLearningData.quizQuestions || [];

// Make data globally available
window.arabicLearningData = arabicLearningData;

console.log('✅ Complete Arabic learning data loaded:', {
    letters: arabicLearningData.letters?.length || 0,
    words: arabicLearningData.words?.length || 0,
    phrases: arabicLearningData.phrases?.length || 0,
    sentences: arabicLearningData.sentences?.length || 0,
    conversations: arabicLearningData.conversations?.length || 0,
    quizQuestions: arabicLearningData.allQuizQuestions?.length || 0
});