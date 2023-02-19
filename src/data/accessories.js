const accessories = [
    {
        id: 2,
        name: 'Шалик та берет "Світлий беж"',
        description:
            "Берет та шалик, плетені спицями з тоненької бежевої ниточки з люрексом. Дуже м'які та пластичні. Набір гарно пасуватиме як до весняного, так і до осіннього образу, також підійде на теплу зиму.",
        images: [
            'beret_shalyk_01.jpg',
            'beret_shalyk_02.jpg',
            'beret_shalyk_03.jpg',
            'beret_shalyk_04.jpg',
            'beret_shalyk_05.jpg',
            'beret_shalyk_06.jpg',
            'beret_shalyk_07.jpg',
            'beret_shalyk_08.jpg',
        ],
        price: 550,
        link: 'shalyk_beret_svitlyi_bezh',
        category: 'Одяг',
    },
    {
        id: 3,
        name: 'Бактус "Весняна зелень"',
        description:
            'Виріб з напиленням весняного настрою - зелений пухнастий бактус. Плетений спицями з цікавої кольорової пряжі, можна носити і як шалик, і як хустку.',
        materials: 'Бактус має фактурне легке плетіння, тож чудово пасуватиме до демісезонних образів.',
        images: [
            'zelenyi_baktus_01.jpg',
            'zelenyi_baktus_02.jpg',
            'zelenyi_baktus_03.jpg',
            'zelenyi_baktus_04.jpg',
            'zelenyi_baktus_05.jpg',
        ],
        price: 350,
        link: 'baktus_vesniana_zelen',
        category: 'Одяг',
    },
    {
        id: 4,
        name: 'Мітенки "Оливкові коси"',
        description:
            "Мітенки теплого оливкового кольору - плетені вручну з акрилової пряжі. Дуже м'які та приємні на дотик. Фактурні плетені коси прикрасять будь-який образ.",
        images: [
            'mitenky_olyvkovi_kosy_01.jpg',
            'mitenky_olyvkovi_kosy_02.jpg',
            'mitenky_olyvkovi_kosy_03.jpg',
            'mitenky_olyvkovi_kosy_04.jpg',
            'mitenky_olyvkovi_kosy_05.jpg',
        ],
        price: 180,
        link: 'mitenky_olyvkovi_kosy',
        category: 'Одяг',
        similar: [
            {
                img: 'mitenky_sovy_buzkovi_01.jpg',
                price: 270,
                link: 'mitenky_sovy_buzkovi',
            },
        ],
    },
    {
        id: 9,
        name: 'Мітенки "Фіолетовий меланж"',
        description:
            "Мітенки плетені вручну з акрилової меланжевої пряжі бузково-рожевого відтінку. Мають виплетені спицями коси та нашиті дерев'яні ґудзики з намальованими на них сніжинками. Мітенки дуже м'які та приємні на дотик, пасуватимуть до ніжного зимового образу.",
        images: [
            'mitenky_fioletovyi_melanzh_01.jpg',
            'mitenky_fioletovyi_melanzh_02.jpg',
            'mitenky_fioletovyi_melanzh_03.jpg',
            'mitenky_fioletovyi_melanzh_04.jpg',
            'mitenky_fioletovyi_melanzh_05.jpg',
        ],
        price: 250,
        link: 'mitenky_fioletovyi_melanzh',
        category: 'Одяг',
        similar: [
            {
                img: 'mitenky_snizhne_zoloto_01.jpg',
                price: 250,
                link: 'mitenky_snizhne_zoloto',
            },
        ],
    },
    {
        id: 11,
        name: 'Мітенки "Сніжне золото"',
        description:
            "Мітенки плетені вручну з акрилової меланжевої пряжі з вкрапленнями золотого люрексу. Мають виплетені спицями коси та нашиті дерев'яні ґудзики-сніжинки. Мітенки дуже м'які та приємні на дотик, пасуватимуть до ніжного зимового образу.",
        images: [
            'mitenky_snizhne_zoloto_01.jpg',
            'mitenky_snizhne_zoloto_02.jpg',
            'mitenky_snizhne_zoloto_03.jpg',
            'mitenky_snizhne_zoloto_04.jpg',
            'mitenky_snizhne_zoloto_05.jpg',
        ],
        price: 250,
        link: 'mitenky_snizhne_zoloto',
        category: 'Одяг',
        similar: [
            {
                img: 'mitenky_fioletovyi_melanzh_01.jpg',
                price: 250,
                link: 'mitenky_fioletovyi_melanzh',
            },
        ],
    },
    {
        id: 14,
        name: 'Мітенки "Жакард"',
        description:
            'Рукавички плетені вручну цікавим жакардовим плетінням. Виконані з акрилової пряжі молочного та бузкового меланжу. Виріб приємний на дотик, теплий та не кусючий. Пасуватиме як до куртки, так і до пальта.',
        images: [
            'rukavychky_zhakard_01.jpg',
            'rukavychky_zhakard_02.jpg',
            'rukavychky_zhakard_03.jpg',
            'rukavychky_zhakard_04.jpg',
            'rukavychky_zhakard_05.jpg',
        ],
        price: 270,
        link: 'rukavytsi_zhakard',
        category: 'Одяг',
    },
    {
        id: 16,
        name: 'Рукавиці для мобільного "Біла хризантема"',
        description:
            'Ця вишивка найбільше нагадує мені пізню білу хризантему у саду, що вже втратив яскраві осінні кольори та почав набувати зимових сірих тонів. Якщо ви любите спокійні відтіки та мінімалізм - ці рукавички для мобільного чудово вам пасуватимуть.',
        materials:
            'Ручне плетіння спицями та ручна вишивка. Розмір універсальний, завдяки плетінню "гумка" на долоні. Можна легко користуватись мобільним телефоном, не знімаючи рукавички.',
        images: [
            'rukavytsi_mobilnogo_bila_khryzantema_01.jpg',
            'rukavytsi_mobilnogo_bila_khryzantema_02.jpg',
            'rukavytsi_mobilnogo_bila_khryzantema_03.jpg',
            'rukavytsi_mobilnogo_bila_khryzantema_04.jpg',
            'rukavytsi_mobilnogo_bila_khryzantema_05.jpg',
            'rukavytsi_mobilnogo_bila_khryzantema_06.jpg',
        ],
        price: 350,
        link: 'rukavytsi_mobilnogo_bila_khryzantema',
        category: 'Одяг',
        similar: [
            {
                img: 'rukavytsi-mobilnogo-cholovichi-siri-01.jpg',
                price: 330,
                link: 'rukavytsi-mobilnogo-cholovichi-siri',
            },
        ],
    },
    {
        id: 17,
        name: 'Мітенки "Бузкові сови"',
        description:
            "Такі моделі мітенок ми вже мали в продажу, але, ніколи не було таких кольорів. Бузкові м'якенькі мітенки з маленькими совенятами - не лише зігріють, а й піднімуть настрій.",
        materials: 'Матеріал: акрил та бісер.',
        images: [
            'mitenky_sovy_buzkovi_01.jpg',
            'mitenky_sovy_buzkovi_02.jpg',
            'mitenky_sovy_buzkovi_03.jpg',
            'mitenky_sovy_buzkovi_04.jpg',
        ],
        price: 270,
        link: 'mitenky_sovy_buzkovi',
        category: 'Одяг',
        similar: [
            {
                img: 'mitenky_olyvkovi_kosy_01.jpg',
                price: 180,
                link: 'mitenky_olyvkovi_kosy',
            },
            {
                img: 'mitenky-kotyky-hirchychni-01.jpg',
                price: 300,
                link: 'mitenky-kotyky-hirchychni',
            },
        ],
    },
    {
        id: 21,
        name: 'Зелений снуд і рукавиці',
        description:
            "Таке буває дуже не часто, але я не змогла розділити цей набір. Темно-зелений снуд та рукавиці для мобільного. М'які, теплі та фактурні аксесувари чудово виглядають разом. Ручна в'язка, приємний колір, пасуватиме і жінкам і чоловікам. Матеріал: акрил.",
        materials: 'Розміри: снуд: довжина 24см, ширина 27см; рукавиці: M-L.',
        images: [
            'zelenyi_snud_rukavytsi_01.jpg',
            'zelenyi_snud_rukavytsi_02.jpg',
            'zelenyi_snud_rukavytsi_03.jpg',
            'zelenyi_snud_rukavytsi_04.jpg',
            'zelenyi_snud_rukavytsi_05.jpg',
            'zelenyi_snud_rukavytsi_06.jpg',
        ],
        price: 500,
        link: 'zelenyi_snud_rukavytsi',
        category: 'Одяг',
        similar: [
            {
                img: 'malynovyi_snud_01.jpg',
                price: 250,
                link: 'malynovyi_snud',
            },
            {
                img: 'pomaranchevyi_snud_01.jpg',
                price: 200,
                link: 'pomaranchevyi_snud',
            },
            {
                img: 'pomaranchevyi_snud_kosy_01.jpg',
                price: 200,
                link: 'pomaranchevyi_snud_kosy',
            },
            {
                img: 'rukavytsi-mobilnogo-cholovichi-siri-01.jpg',
                price: 330,
                link: 'rukavytsi-mobilnogo-cholovichi-siri',
            },
        ],
    },
    {
        id: 22,
        name: 'Малиновий снуд',
        description:
            "Яскравий, теплий, фактурний та схожий на комір від об'ємного светра. Малиновий меланжевий снуд - саме те, що потрібно взимку для вбереження шиї від морозів, а вас - від зимової сірості.",
        materials: 'Матеріал: акрил.',
        images: [
            'malynovyi_snud_01.jpg',
            'malynovyi_snud_02.jpg',
            'malynovyi_snud_03.jpg',
            'malynovyi_snud_04.jpg',
            'malynovyi_snud_05.jpg',
            'malynovyi_snud_06.jpg',
        ],
        price: 250,
        link: 'malynovyi_snud',
        category: 'Одяг',
        similar: [
            {
                img: 'zelenyi_snud_rukavytsi_01.jpg',
                price: 500,
                link: 'zelenyi_snud_rukavytsi',
            },
            {
                img: 'pomaranchevyi_snud_01.jpg',
                price: 200,
                link: 'pomaranchevyi_snud',
            },
            {
                img: 'pomaranchevyi_snud_kosy_01.jpg',
                price: 200,
                link: 'pomaranchevyi_snud_kosy',
            },
        ],
    },
    {
        id: 23,
        name: 'Помаранчевий снуд',
        description:
            "Цегляний-помаранчевий - один з моїх найюлюбленишіх відтінків помаранчевого. Тож цей неймовірний слуд - мій фаворит з наявних. Дуже м'який та теплий виріб, можна носити як закриваючи підборіддя, так і - відгортати ніби комір від светра.",
        materials: 'Матеріал: акрил. Розміри: висота - 25см, довжина - розтягується.',
        images: [
            'pomaranchevyi_snud_01.jpg',
            'pomaranchevyi_snud_02.jpg',
            'pomaranchevyi_snud_03.jpg',
            'pomaranchevyi_snud_04.jpg',
            'pomaranchevyi_snud_05.jpg',
            'pomaranchevyi_snud_06.jpg',
        ],
        price: 200,
        link: 'pomaranchevyi_snud',
        category: 'Одяг',
        similar: [
            {
                img: 'zelenyi_snud_rukavytsi_01.jpg',
                price: 500,
                link: 'zelenyi_snud_rukavytsi',
            },
            {
                img: 'malynovyi_snud_01.jpg',
                price: 250,
                link: 'malynovyi_snud',
            },
            {
                img: 'pomaranchevyi_snud_kosy_01.jpg',
                price: 200,
                link: 'pomaranchevyi_snud_kosy',
            },
        ],
    },
    {
        id: 24,
        name: 'Помаранчевий снуд з косами',
        description:
            "Цегляний-помаранчевий - один з моїх найюлюбленишіх відтінків помаранчевого. Тож цей неймовірний слуд - мій фаворит з наявних. Дуже м'який та теплий виріб, можна носити як закриваючи підборіддя, так і - відгортати ніби комір від светра.",
        materials: 'Матеріал: акрил. Розміри: висота - 25см, ширина - 30см.',
        images: [
            'pomaranchevyi_snud_kosy_01.jpg',
            'pomaranchevyi_snud_kosy_02.jpg',
            'pomaranchevyi_snud_kosy_03.jpg',
            'pomaranchevyi_snud_kosy_04.jpg',
            'pomaranchevyi_snud_kosy_05.jpg',
            'pomaranchevyi_snud_kosy_06.jpg',
        ],
        price: 200,
        link: 'pomaranchevyi_snud_kosy',
        category: 'Одяг',
        similar: [
            {
                img: 'zelenyi_snud_rukavytsi_01.jpg',
                price: 500,
                link: 'zelenyi_snud_rukavytsi',
            },
            {
                img: 'malynovyi_snud_01.jpg',
                price: 250,
                link: 'malynovyi_snud',
            },
            {
                img: 'pomaranchevyi_snud_01.jpg',
                price: 200,
                link: 'pomaranchevyi_snud',
            },
        ],
    },
    {
        id: 25,
        name: 'Зелені рукавиці "Кольорові кола"',
        description:
            'Найкраще для підкреслення темного глибокого кольору підійде якийсь яскравий кольоровий акцент. В цих рукавичках для мобільного їх - декілька. Гачковані кольрові плямки легко додадуть позитиву в ваш повсякденний образ.',
        materials: 'Матеріал: акрил. Розмір: M-L.',
        images: ['zeleni_kolyorovi_kola_01.jpg', 'zeleni_kolyorovi_kola_02.jpg', 'zeleni_kolyorovi_kola_03.jpg'],
        price: 300,
        link: 'zeleni_kolyorovi_kola',
        category: 'Одяг',
        similar: [
            {
                img: 'rukavytsi_mobilnogo_bila_khryzantema_01.jpg',
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema',
            },
            {
                img: 'rukavytsi_yaskravi_smuzhky_01.jpg',
                price: 300,
                link: 'rukavytsi_yaskravi_smuzhky',
            },
            {
                img: 'rukavytsi_vovnyana_faktura_01.jpg',
                price: 330,
                link: 'rukavytsi_vovnyana_faktura',
            },
            {
                img: 'rukavytsi_kolyorovi_kola_01.jpg',
                price: 300,
                link: 'rukavytsi_kolyorovi_kola',
            },
            {
                img: 'malynovi_smugasti_rukavytsi_01.jpg',
                price: 300,
                link: 'malynovi_smugasti_rukavytsi',
            },
            {
                img: 'rukavytsi-mobilnogo-cholovichi-siri-01.jpg',
                price: 330,
                link: 'rukavytsi-mobilnogo-cholovichi-siri',
            },
        ],
    },
    {
        id: 26,
        name: 'Рукавиці "Кольорові кола"',
        description:
            'Найкраще для підкреслення темного глибокого кольору підійде якийсь яскравий кольоровий акцент. В цих рукавичках для мобільного їх - декілька. Гачковані кольрові плямки легко додадуть позитиву в ваш повсякденний образ.',
        materials: 'Матеріал: акрил. Розмір: M-L.',
        images: [
            'rukavytsi_kolyorovi_kola_01.jpg',
            'rukavytsi_kolyorovi_kola_02.jpg',
            'rukavytsi_kolyorovi_kola_03.jpg',
            'rukavytsi_kolyorovi_kola_04.jpg',
        ],
        price: 300,
        link: 'rukavytsi_kolyorovi_kola',
        category: 'Одяг',
        similar: [
            {
                img: 'rukavytsi_mobilnogo_bila_khryzantema_01.jpg',
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema',
            },
            {
                img: 'rukavytsi_yaskravi_smuzhky_01.jpg',
                price: 300,
                link: 'rukavytsi_yaskravi_smuzhky',
            },
            {
                img: 'rukavytsi_vovnyana_faktura_01.jpg',
                price: 330,
                link: 'rukavytsi_vovnyana_faktura',
            },
            {
                img: 'zeleni_kolyorovi_kola_01.jpg',
                price: 300,
                link: 'zeleni_kolyorovi_kola',
            },
            {
                img: 'malynovi_smugasti_rukavytsi_01.jpg',
                price: 300,
                link: 'malynovi_smugasti_rukavytsi',
            },
            {
                img: 'rukavytsi-mobilnogo-cholovichi-siri-01.jpg',
                price: 330,
                link: 'rukavytsi-mobilnogo-cholovichi-siri',
            },
        ],
    },
    {
        id: 27,
        name: 'Малинові смугасті рукавиці',
        description:
            'Скажемо "НІ!" сірості! Ці рукавички містять в собі все найліпше - фактурне цікаве плетіння та різномаїтття соковитих відтінків малини та смородини. Рукавички - ручної роботи, м\'які та не колючі.',
        materials: 'Матеріал: акрил. Розмір: L.',
        images: [
            'malynovi_smugasti_rukavytsi_01.jpg',
            'malynovi_smugasti_rukavytsi_02.jpg',
            'malynovi_smugasti_rukavytsi_03.jpg',
            'malynovi_smugasti_rukavytsi_04.jpg',
        ],
        price: 300,
        link: 'malynovi_smugasti_rukavytsi',
        category: 'Одяг',
        similar: [
            {
                img: 'rukavytsi_mobilnogo_bila_khryzantema_01.jpg',
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema',
            },
            {
                img: 'rukavytsi_yaskravi_smuzhky_01.jpg',
                price: 300,
                link: 'rukavytsi_yaskravi_smuzhky',
            },
            {
                img: 'rukavytsi_vovnyana_faktura_01.jpg',
                price: 330,
                link: 'rukavytsi_vovnyana_faktura',
            },
            {
                img: 'zeleni_kolyorovi_kola_01.jpg',
                price: 300,
                link: 'zeleni_kolyorovi_kola',
            },
            {
                img: 'rukavytsi_kolyorovi_kola_01.jpg',
                price: 300,
                link: 'rukavytsi_kolyorovi_kola',
            },
        ],
    },
    {
        id: 28,
        name: 'Рукавиці "Вовняна фактура"',
        description:
            'Спеціальна пропозиція для любительниць вовняних аксесуарів! Рукавички зі значним вмістом натуральної вовни (в районі 80%), та ще й з шикарним фактурним орнаментом. Рукавички підійдуть на невеликий розмір руки, пасуватимуть як під пальто, так і під курточку, завдяки своєму класичному кольору та плетінню.',
        materials: 'Матеріал: вовна. Розмір: S-M.',
        images: [
            'rukavytsi_vovnyana_faktura_01.jpg',
            'rukavytsi_vovnyana_faktura_02.jpg',
            'rukavytsi_vovnyana_faktura_03.jpg',
            'rukavytsi_vovnyana_faktura_04.jpg',
        ],
        price: 330,
        link: 'rukavytsi_vovnyana_faktura',
        category: 'Одяг',
        similar: [
            {
                img: 'rukavytsi_mobilnogo_bila_khryzantema_01.jpg',
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema',
            },
            {
                img: 'rukavytsi_yaskravi_smuzhky_01.jpg',
                price: 300,
                link: 'rukavytsi_yaskravi_smuzhky',
            },
            {
                img: 'malynovi_smugasti_rukavytsi_01.jpg',
                price: 300,
                link: 'malynovi_smugasti_rukavytsi',
            },
            {
                img: 'zeleni_kolyorovi_kola_01.jpg',
                price: 300,
                link: 'zeleni_kolyorovi_kola',
            },
            {
                img: 'rukavytsi_kolyorovi_kola_01.jpg',
                price: 300,
                link: 'rukavytsi_kolyorovi_kola',
            },
        ],
    },
    {
        id: 29,
        name: 'Рукавиці "Яскраві смужки"',
        description:
            'Чорнобривці, свіжий мед, осіннє яскраве листя... А які асоціації викликають ці кольори у вас? Теплі та яскраві рукавички готові гріти та піднімати настрій!',
        materials: 'Матеріал: акрил. Розмір: M-L.',
        images: [
            'rukavytsi_yaskravi_smuzhky_01.jpg',
            'rukavytsi_yaskravi_smuzhky_02.jpg',
            'rukavytsi_yaskravi_smuzhky_03.jpg',
            'rukavytsi_yaskravi_smuzhky_04.jpg',
        ],
        price: 300,
        link: 'rukavytsi_yaskravi_smuzhky',
        category: 'Одяг',
        similar: [
            {
                img: 'rukavytsi_mobilnogo_bila_khryzantema_01.jpg',
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema',
            },
            {
                img: 'rukavytsi_vovnyana_faktura_01.jpg',
                price: 330,
                link: 'rukavytsi_vovnyana_faktura',
            },
            {
                img: 'malynovi_smugasti_rukavytsi_01.jpg',
                price: 300,
                link: 'malynovi_smugasti_rukavytsi',
            },
            {
                img: 'zeleni_kolyorovi_kola_01.jpg',
                price: 300,
                link: 'zeleni_kolyorovi_kola',
            },
            {
                img: 'rukavytsi_kolyorovi_kola_01.jpg',
                price: 300,
                link: 'rukavytsi_kolyorovi_kola',
            },
        ],
    },
    {
        id: 30,
        name: 'Майка з мереживним низом',
        description:
            'Ідеальний варіант літнього одягу - укорочена майка ручного плетіння з американською проймою. Саме такі майки легко комбінуються з будь-яким низом, дуже зручні в повсякденному носінні та стануть невід‘ємною частиною вашого гардеробу. А якщо ви вже маєте одяг подібного силуету - варто придивитись до майок від Плетеного КоТа, бо всі наші вироби - ручна робота, унікальність та апсайклінг.',
        materials:
            'Матеріал цього виробу - легенький та м‘який меланжевий акрил. Мереживний цікавий низ завжди додасть майці унікальності. Тож для сумнівів не час, бо літо таке швидкоплинне. Матеріали: акрил. Розмір: S-M. Параметри моделі: зріст - 168см, об‘єм грудей - 87см, об‘єм талії - 70см, об‘єм стегон - 98см.',
        images: [
            'maika-merezhyvnyi-nyz-01.jpg',
            'maika-merezhyvnyi-nyz-02.jpg',
            'maika-merezhyvnyi-nyz-03.jpg',
            'maika-merezhyvnyi-nyz-04.jpg',
            'maika-merezhyvnyi-nyz-05.jpg',
            'maika-merezhyvnyi-nyz-06.jpg',
        ],
        price: 600,
        link: 'maika-merezhyvnyi-nyz',
        category: 'Одяг',
        similar: [
            {
                img: 'maika-melanzh-koliorovyi-01.jpg',
                price: 650,
                link: 'maika-melanzh-koliorovyi',
            },
            {
                img: 'maika-merezhyvna-synia-01.jpg',
                price: 650,
                link: 'maika-merezhyvna-synia',
            },
            {
                img: 'maika-melanzh-rozhevyi-01.jpg',
                price: 650,
                link: 'maika-melanzh-rozhevyi',
            },
        ],
    },
    {
        id: 31,
        name: 'Майка кольоровий меланж',
        description:
            'Фаворитка з усіх наявних наразі майок - саме ця. Лишень погляньте на ці кольори! Меланжева кольорова ниточка містить в собі неймовірне поєднання кольорів, а візерунок плетіння додає фактурності цьому виробу та робить його ідеальним. Це саме той момент, коли майка не надто яскрава, але не помітити її важко.',
        materials:
            'Матеріали: акрил. Розмір: S-M. Параметри моделі: зріст - 168см, об‘єм грудей - 87см, об‘єм талії - 70см, об‘єм стегон - 98см.',
        images: [
            'maika-melanzh-koliorovyi-01.jpg',
            'maika-melanzh-koliorovyi-02.jpg',
            'maika-melanzh-koliorovyi-03.jpg',
            'maika-melanzh-koliorovyi-04.jpg',
            'maika-melanzh-koliorovyi-05.jpg',
        ],
        price: 650,
        link: 'maika-melanzh-koliorovyi',
        category: 'Одяг',
        similar: [
            {
                img: 'maika-merezhyvnyi-nyz-01.jpg',
                price: 600,
                link: 'maika-merezhyvnyi-nyz',
            },
            {
                img: 'maika-merezhyvna-synia-01.jpg',
                price: 650,
                link: 'maika-merezhyvna-synia',
            },
            {
                img: 'maika-melanzh-rozhevyi-01.jpg',
                price: 650,
                link: 'maika-melanzh-rozhevyi',
            },
        ],
    },
    {
        id: 32,
        name: 'Майка синя мереживна',
        description:
            'Неймовірний колір неба перед зливою та фактурний орнамент поєднує в собі ця маєчка. Виріб ручної роботи легко доповнить джинси, брюки чи спідницю та підійде як на щодень, так і до свята, варто лиш додати прикрас.',
        materials:
            'Матеріали: акрил. Розмір: S-M. Параметри моделі: зріст - 168см, об‘єм грудей - 87см, об‘єм талії - 70см, об‘єм стегон - 98см.',
        images: [
            'maika-merezhyvna-synia-01.jpg',
            'maika-merezhyvna-synia-02.jpg',
            'maika-merezhyvna-synia-03.jpg',
            'maika-merezhyvna-synia-04.jpg',
            'maika-merezhyvna-synia-05.jpg',
            'maika-merezhyvna-synia-06.jpg',
        ],
        price: 650,
        link: 'maika-merezhyvna-synia',
        category: 'Одяг',
        similar: [
            {
                img: 'maika-merezhyvnyi-nyz-01.jpg',
                price: 600,
                link: 'maika-merezhyvnyi-nyz',
            },
            {
                img: 'maika-melanzh-koliorovyi-01.jpg',
                price: 650,
                link: 'maika-melanzh-koliorovyi',
            },
            {
                img: 'maika-melanzh-rozhevyi-01.jpg',
                price: 650,
                link: 'maika-melanzh-rozhevyi',
            },
        ],
    },
    {
        id: 33,
        name: 'Майка рожевий меланж',
        description:
            'Легка та приємна до тіла, наче рожева хмаринка. Майка з повітряним орнаментом чудово прикрасить ваше літо та додасть романтики до будь-якого образу.',
        materials:
            'Матеріали: акрил. Розмір: S-M. Параметри моделі: зріст - 168см, об‘єм грудей - 87см, об‘єм талії - 70см, об‘єм стегон - 98см.',
        images: [
            'maika-melanzh-rozhevyi-01.jpg',
            'maika-melanzh-rozhevyi-02.jpg',
            'maika-melanzh-rozhevyi-03.jpg',
            'maika-melanzh-rozhevyi-04.jpg',
            'maika-melanzh-rozhevyi-05.jpg',
        ],
        price: 650,
        link: 'maika-melanzh-rozhevyi',
        category: 'Одяг',
        similar: [
            {
                img: 'maika-merezhyvnyi-nyz-01.jpg',
                price: 600,
                link: 'maika-merezhyvnyi-nyz',
            },
            {
                img: 'maika-melanzh-koliorovyi-01.jpg',
                price: 650,
                link: 'maika-melanzh-koliorovyi',
            },
            {
                img: 'maika-merezhyvna-synia-01.jpg',
                price: 650,
                link: 'maika-merezhyvna-synia',
            },
        ],
    },
    {
        id: 34,
        name: 'Мітенки-котики гірчичні',
        description:
            'Мітенки-котики приємного гірчичного кольору 100% піднімуть настрій та додадуть сонячного настрою! Ручне плетіння та вишивка, м\'яка пряжа та універсальний розмір, завдяки платенню "гумка" на долоні.',
        materials: 'Матеріали: акрил з невеликим відсотком бавовни.',
        images: [
            'mitenky-kotyky-hirchychni-01.jpg',
            'mitenky-kotyky-hirchychni-02.jpg',
            'mitenky-kotyky-hirchychni-03.jpg',
            'mitenky-kotyky-hirchychni-04.jpg',
        ],
        price: 300,
        link: 'mitenky-kotyky-hirchychni',
        category: 'Одяг',
        similar: [
            {
                img: 'mitenky_sovy_buzkovi_01.jpg',
                price: 270,
                link: 'mitenky_sovy_buzkovi',
            },
        ],
    },
    {
        id: 36,
        name: 'Рукавиці для мобільного сірі',
        description:
            'Рукавиці з м\'якої меланжевої пряжі кількох відтінків сірого - однозначно пасуватимуть і до класичного пальто і до пухової куртки. Рукавички мають отвори для вказівного та великого пальців, тож можна легко користуватись телефоном, не знімаючи їх щоразу. Плетений вручну орнамент "косичка" додає виробу фактури та більш цікавого вигляду. Розмір цих рукавичок може бути на жіночий L, або на чоловічу руку середнього розміру.',
        materials: 'Матеріали: акрил з 15% вовни. Розмір L.',
        images: [
            'rukavytsi-mobilnogo-cholovichi-siri-01.jpg',
            'rukavytsi-mobilnogo-cholovichi-siri-02.jpg',
            'rukavytsi-mobilnogo-cholovichi-siri-03.jpg',
            'rukavytsi-mobilnogo-cholovichi-siri-04.jpg',
            'rukavytsi-mobilnogo-cholovichi-siri-05.jpg',
            'rukavytsi-mobilnogo-cholovichi-siri-06.jpg',
        ],
        price: 330,
        link: 'rukavytsi-mobilnogo-cholovichi-siri',
        category: 'Одяг',
        similar: [
            {
                img: 'rukavytsi_mobilnogo_bila_khryzantema_01.jpg',
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema',
            },
            {
                img: 'rukavytsi_yaskravi_smuzhky_01.jpg',
                price: 300,
                link: 'rukavytsi_yaskravi_smuzhky',
            },
            {
                img: 'rukavytsi_vovnyana_faktura_01.jpg',
                price: 330,
                link: 'rukavytsi_vovnyana_faktura',
            },
            {
                img: 'rukavytsi_kolyorovi_kola_01.jpg',
                price: 300,
                link: 'rukavytsi_kolyorovi_kola',
            },
            {
                img: 'malynovi_smugasti_rukavytsi_01.jpg',
                price: 300,
                link: 'malynovi_smugasti_rukavytsi',
            },
        ],
    },
]

export default accessories
