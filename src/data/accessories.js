const accessories = [
    {
        id: 1,
        name: "Берет \"Срібло\"",
        description: "Берет плетений спицями з тоненької сірої ниточки з люрексом. Аксесуар дуже легкий та додасть романтики у ваш образ.",
        images: [
            "beret_shalyk_09.jpg",
            "beret_shalyk_10.jpg"
        ],
        price: 200,
        link: 'beret_sriblo',
        category: "Аксесуари",
        similar: [
            {
                img: "beret_shalyk_01.jpg",
                price: 550,
                link: 'shalyk_beret_svitlyi_bezh'
            }
        ]
    },
    {
        id: 2,
        name: "Шалик та берет \"Світлий беж\"",
        description: "Берет та шалик, плетені спицями з тоненької бежевої ниточки з люрексом. Дуже м'які та пластичні. Набір гарно пасуватиме як до весняного, так і до осіннього образу, також підійде на теплу зиму.",
        images: [
            "beret_shalyk_01.jpg",
            "beret_shalyk_02.jpg",
            "beret_shalyk_03.jpg",
            "beret_shalyk_04.jpg",
            "beret_shalyk_05.jpg",
            "beret_shalyk_06.jpg",
            "beret_shalyk_07.jpg",
            "beret_shalyk_08.jpg"
        ],
        price: 550,
        link: 'shalyk_beret_svitlyi_bezh',
        category: "Аксесуари",
        similar: [
            {
                img: "beret_shalyk_09.jpg",
                price: 200,
                link: 'beret_sriblo'
            }
        ]
    },
    {
        id: 3,
        name: "Бактус \"Весняна зелень\"",
        description: "Виріб з напиленням весняного настрою - зелений пухнастий бактус. Плетений спицями з цікавої кольорової пряжі, можна носити і як шалик, і як хустку.",
        materials: "Бактус має фактурне легке плетіння, тож чудово пасуватиме до демісезонних образів.",
        images: [
            "zelenyi_baktus_01.jpg",
            "zelenyi_baktus_02.jpg",
            "zelenyi_baktus_03.jpg",
            "zelenyi_baktus_04.jpg",
            "zelenyi_baktus_05.jpg"
        ],
        price: 350,
        link: 'baktus_vesniana_zelen',
        category: "Аксесуари"
    },
    {
        id: 4,
        name: "Мітенки \"Оливкові коси\"",
        description: "Мітенки теплого оливкового кольору - плетені вручну з акрилової пряжі. Дуже м'які та приємні на дотик. Фактурні плетені коси прикрасять будь-який образ.",
        images: [
            "mitenky_olyvkovi_kosy_01.jpg",
            "mitenky_olyvkovi_kosy_02.jpg",
            "mitenky_olyvkovi_kosy_03.jpg",
            "mitenky_olyvkovi_kosy_04.jpg",
            "mitenky_olyvkovi_kosy_05.jpg"
        ],
        price: 180,
        link: 'mitenky_olyvkovi_kosy',
        category: "Аксесуари",
        similar: [
            {
                img: "mitenky_fakturni_sovy_01.jpg",
                price: 250,
                link: 'mitenky_fakturni_sovy'
            },
            {
                img: "mitenky_sovy_buzkovi_01.jpg",
                price: 270,
                link: 'mitenky_sovy_buzkovi'
            },
            {
                img: "mitenky_sovy_girchychni_01.jpg",
                price: 270,
                link: 'mitenky_sovy_girchychni'
            }
        ]
    },
    {
        id: 5,
        name: "Мітенки \"Фактурні сови\"",
        description: "Ці мітенки є найпопулярнішими серед моїх замовників. Сама ношу такі, але темно-зелені. Мітенки плетені вручну, мають два нашитих круглих гудзика-ока. М'якенькі, оригінальні, приємні на дотик і пасуватимуть під будь-яку куртку чи пальто.",
        images: [
            "mitenky_fakturni_sovy_01.jpg",
            "mitenky_fakturni_sovy_02.jpg",
            "mitenky_fakturni_sovy_03.jpg",
            "mitenky_fakturni_sovy_04.jpg",
            "mitenky_fakturni_sovy_05.jpg"
        ],
        price: 250,
        link: 'mitenky_fakturni_sovy',
        category: "Аксесуари",
        similar: [
            {
                img: "mitenky_olyvkovi_kosy_01.jpg",
                price: 180,
                link: 'mitenky_olyvkovi_kosy'
            },
            {
                img: "mitenky_sovy_buzkovi_01.jpg",
                price: 270,
                link: 'mitenky_sovy_buzkovi'
            },
            {
                img: "mitenky_sovy_girchychni_01.jpg",
                price: 270,
                link: 'mitenky_sovy_girchychni'
            }
        ]
    },
    {
        id: 6,
        name: "Рукавиці чоловічі \"Сірі коси\"",
        description: "Вовняні чоловічі рукавиці - до вашої уваги. Саме такі рукавиці у мого чоловіка, тож виріб проходить тестування і активно використовується.",
        materials: "Рукавиці плетені спицями, з пряжі, що містить великий відсоток вовни, але не є кусючою, тепла та приємна на дотик. Ниточка - меланжева, сіро-синюватого відтінку. Рукавиці мають отвір для вказівного пальця та не закритий верх великого пальця. Щоб можна було користуватись мобільним телефоном, не знімаючи рукавичку.",
        images: [
            "rukavytsi_cholovichi_siri_01.jpg",
            "rukavytsi_cholovichi_siri_02.jpg",
            "rukavytsi_cholovichi_siri_03.jpg",
            "rukavytsi_cholovichi_siri_04.jpg",
            "rukavytsi_cholovichi_siri_05.jpg",
            "rukavytsi_cholovichi_siri_06.jpg",
            "rukavytsi_cholovichi_siri_07.jpg",
            "rukavytsi_cholovichi_siri_08.jpg"
        ],
        price: 300,
        link: 'rukavytsi_siri_kosy',
        category: "Аксесуари",
        similar: [
            {
                img: "rukavytsi_mobilnogo_bila_khryzantema_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema'
            },
            {
                img: "rukavytsi_mobilnogo_smugasti_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_blakytno_zhovtyi_melanzh'
            }
        ]
    },
    {
        id: 7,
        name: "Рукавиці для мобільного \"Блакитно-жовтий меланж\"",
        description: "Рукавички плетені спицями вручну з пряжі зі значним вмістом вовни. Містять приємне поєднання пастельних відтінків блакитного, сірого, синього та жовтуватого. Рукавички мають не закриті великі пальці та отвори для вказівних пальців, для зручнішого користування мобільним в холодну погоду.",
        images: [
            "rukavytsi_mobilnogo_smugasti_01.jpg",
            "rukavytsi_mobilnogo_smugasti_02.jpg",
            "rukavytsi_mobilnogo_smugasti_03.jpg",
            "rukavytsi_mobilnogo_smugasti_04.jpg",
            "rukavytsi_mobilnogo_smugasti_05.jpg",
            "rukavytsi_mobilnogo_smugasti_06.jpg",
            "rukavytsi_mobilnogo_smugasti_07.jpg"
        ],
        price: 300,
        link: 'rukavytsi_mobilnogo_blakytno_zhovtyi_melanzh',
        category: "Аксесуари",
        similar: [
            {
                img: "rukavytsi_mobilnogo_bila_khryzantema_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema'
            },
            {
                img: "rukavytsi_cholovichi_siri_01.jpg",
                price: 300,
                link: 'rukavytsi_siri_kosy'
            }
        ]
    },
    {
        id: 8,
        name: "Мітенки \"Сніжна блакить\"",
        description: "Мітенки плетені вручну з акрилової блакитної пряжі. Мають виплетені спицями коси та нашиті дерев'яні ґудзики-сніжинки. Мітенки дуже м'які та приємні на дотик, пасуватимуть до ніжного зимового образу.",
        images: [
            "mitenky_snizhna_blakyt_01.jpg",
            "mitenky_snizhna_blakyt_02.jpg",
            "mitenky_snizhna_blakyt_03.jpg",
            "mitenky_snizhna_blakyt_04.jpg",
            "mitenky_snizhna_blakyt_05.jpg",
            "mitenky_snizhna_blakyt_06.jpg"
        ],
        price: 250,
        link: 'mitenky_snizhna_blakyt',
        category: "Аксесуари",
        similar: [
            {
                img: "mitenky_fioletovyi_melanzh_01.jpg",
                price: 250,
                link: 'mitenky_fioletovyi_melanzh'
            },
            {
                img: "mitenky_snizhne_zoloto_01.jpg",
                price: 250,
                link: 'mitenky_snizhne_zoloto'
            }
        ]
    },
    {
        id: 9,
        name: "Мітенки \"Фіолетовий меланж\"",
        description: "Мітенки плетені вручну з акрилової меланжевої пряжі бузково-рожевого відтінку. Мають виплетені спицями коси та нашиті дерев'яні ґудзики з намальованими на них сніжинками. Мітенки дуже м'які та приємні на дотик, пасуватимуть до ніжного зимового образу.",
        images: [
            "mitenky_fioletovyi_melanzh_01.jpg",
            "mitenky_fioletovyi_melanzh_02.jpg",
            "mitenky_fioletovyi_melanzh_03.jpg",
            "mitenky_fioletovyi_melanzh_04.jpg",
            "mitenky_fioletovyi_melanzh_05.jpg"
        ],
        price: 250,
        link: 'mitenky_fioletovyi_melanzh',
        category: "Аксесуари",
        similar: [
            {
                img: "mitenky_snizhna_blakyt_01.jpg",
                price: 250,
                link: 'mitenky_snizhna_blakyt'
            },
            {
                img: "mitenky_snizhne_zoloto_01.jpg",
                price: 250,
                link: 'mitenky_snizhne_zoloto'
            }
        ]
    },
    {
        id: 11,
        name: "Мітенки \"Сніжне золото\"",
        description: "Мітенки плетені вручну з акрилової меланжевої пряжі з вкрапленнями золотого люрексу. Мають виплетені спицями коси та нашиті дерев'яні ґудзики-сніжинки. Мітенки дуже м'які та приємні на дотик, пасуватимуть до ніжного зимового образу.",
        images: [
            "mitenky_snizhne_zoloto_01.jpg",
            "mitenky_snizhne_zoloto_02.jpg",
            "mitenky_snizhne_zoloto_03.jpg",
            "mitenky_snizhne_zoloto_04.jpg",
            "mitenky_snizhne_zoloto_05.jpg"
        ],
        price: 250,
        link: 'mitenky_snizhne_zoloto',
        category: "Аксесуари",
        similar: [
            {
                img: "mitenky_fioletovyi_melanzh_01.jpg",
                price: 250,
                link: 'mitenky_fioletovyi_melanzh'
            },
            {
                img: "mitenky_snizhna_blakyt_01.jpg",
                price: 250,
                link: 'mitenky_snizhna_blakyt'
            }
        ]
    },
    {
        id: 12,
        name: "Мітенки \"Три троянди\"",
        description: "Мітенки плетені вручну з акрилової м'якої пряжі. Мають ручну вишивку - квіти.",
        materials: "Пряжа, з якої виконано аксесуар - меланжева, в одній нитці поєднано блакитну, білу та сірувату ниточки.",
        images: [
            "mitenky_try_troyandy_01.jpg",
            "mitenky_try_troyandy_02.jpg",
            "mitenky_try_troyandy_03.jpg",
            "mitenky_try_troyandy_04.jpg"
        ],
        price: 300,
        link: 'mitenky_try_troyandy',
        category: "Аксесуари",
        similar: [
            {
                img: "rukavytsi_mobilnogo_bila_khryzantema_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema'
            },
            {
                img: "mitenky_bdzhilky_01.jpg",
                price: 300,
                link: 'mitenky_bdzhilky'
            }
        ]
    },
    {
        id: 13,
        name: "Мітенки \"Пухнастики\"",
        description: "Рукавички плетені вручну з дууже м'якої меланжевої пряжі з ворсом. Здалеку здаються білими, але насправді містять в собі дуже багато кольорьорових петельок та різноманітних фактур. Пухнасті, святкові та готові стати чудовим подарунком вам або вашим близьким.",
        images: [
            "rukavytsi_bili_puhnasti_01.jpg",
            "rukavytsi_bili_puhnasti_02.jpg",
            "rukavytsi_bili_puhnasti_03.jpg",
            "rukavytsi_bili_puhnasti_04.jpg",
            "rukavytsi_bili_puhnasti_05.jpg"
        ],
        price: 270,
        link: 'rukavytsi_pukhnastyky',
        category: "Аксесуари",
        similar: [
            {
                img: "rukavychky_zhakard_01.jpg",
                price: 270,
                link: 'rukavytsi_zhakard'
            }
        ]
    },
    {
        id: 14,
        name: "Мітенки \"Жакард\"",
        description: "Рукавички плетені вручну цікавим жакардовим плетінням. Виконані з акрилової пряжі молочного та бузкового меланжу. Виріб приємний на дотик, теплий та не кусючий. Пасуватиме як до куртки, так і до пальта.",
        images: [
            "rukavychky_zhakard_01.jpg",
            "rukavychky_zhakard_02.jpg",
            "rukavychky_zhakard_03.jpg",
            "rukavychky_zhakard_04.jpg",
            "rukavychky_zhakard_05.jpg"
        ],
        price: 270,
        link: 'rukavytsi_zhakard',
        category: "Аксесуари",
        similar: [
            {
                img: "rukavytsi_bili_puhnasti_01.jpg",
                price: 270,
                link: 'rukavytsi_pukhnastyky'
            }
        ]
    },
    {
        id: 15,
        name: "Мітенки \"Бджілки\"",
        description: "Аксесуар для любителів меду або комах! Мітенки з вишитими бджілками - що може ще більше нагадувати про літо прохолодними днями?",
        materials: "Виріб плетено з м'якої акрилової пряжі спицями, вишивка зроблена вручну, як і всі вироби Плетеного КоТа.",
        images: [
            "mitenky_bdzhilky_01.jpg",
            "mitenky_bdzhilky_02.jpg",
            "mitenky_bdzhilky_03.jpg",
            "mitenky_bdzhilky_04.jpg"
        ],
        price: 300,
        link: 'mitenky_bdzhilky',
        category: "Аксесуари",
        similar: [
            {
                img: "rukavytsi_mobilnogo_bila_khryzantema_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema'
            },
            {
                img: "mitenky_try_troyandy_01.jpg",
                price: 300,
                link: 'mitenky_try_troyandy'
            }
        ]
    },
    {
        id: 16,
        name: "Рукавиці для мобільного \"Біла хризантема\"",
        description: "Ця вишивка найбільше нагадує мені пізню білу хризантему у саду, що вже втратив яскраві осінні кольори та почав набувати зимових сірих тонів. Якщо ви любите спокійні відтіки та мінімалізм - ці рукавички для мобільного чудово вам пасуватимуть.",
        materials: "Ручне плетіння спицями та ручна вишивка. Розмір універсальний, завдяки плетінню \"гумка\" на долоні. Можна легко користуватись мобільним телефоном, не знімаючи рукавички.",
        images: [
            "rukavytsi_mobilnogo_bila_khryzantema_01.jpg",
            "rukavytsi_mobilnogo_bila_khryzantema_02.jpg",
            "rukavytsi_mobilnogo_bila_khryzantema_03.jpg",
            "rukavytsi_mobilnogo_bila_khryzantema_04.jpg",
            "rukavytsi_mobilnogo_bila_khryzantema_05.jpg",
            "rukavytsi_mobilnogo_bila_khryzantema_06.jpg"
        ],
        price: 350,
        link: 'rukavytsi_mobilnogo_bila_khryzantema',
        category: "Аксесуари",
        similar: [
            {
                img: "rukavytsi_mobilnogo_smugasti_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_blakytno_zhovtyi_melanzh'
            },
            {
                img: "rukavytsi_cholovichi_siri_01.jpg",
                price: 300,
                link: 'rukavytsi_siri_kosy'
            },
            {
                img: "mitenky_try_troyandy_01.jpg",
                price: 300,
                link: 'mitenky_try_troyandy'
            },
            {
                img: "mitenky_bdzhilky_01.jpg",
                price: 300,
                link: 'mitenky_bdzhilky'
            }
        ]
    },
    {
        id: 17,
        name: "Мітенки \"Бузкові сови\"",
        description: "Такі моделі мітенок ми вже мали в продажу, але, ніколи не було таких кольорів. Бузкові м'якенькі мітенки з маленькими совенятами - не лише зігріють, а й піднімуть настрій.",
        materials: "Матеріал: акрил та бісер.",
        images: [
            "mitenky_sovy_buzkovi_01.jpg",
            "mitenky_sovy_buzkovi_02.jpg",
            "mitenky_sovy_buzkovi_03.jpg",
            "mitenky_sovy_buzkovi_04.jpg"
        ],
        price: 270,
        link: 'mitenky_sovy_buzkovi',
        category: "Аксесуари",
        similar: [
            {
                img: "mitenky_olyvkovi_kosy_01.jpg",
                price: 180,
                link: 'mitenky_olyvkovi_kosy'
            },
            {
                img: "mitenky_fakturni_sovy_01.jpg",
                price: 250,
                link: 'mitenky_fakturni_sovy'
            },
            {
                img: "mitenky_sovy_girchychni_01.jpg",
                price: 270,
                link: 'mitenky_sovy_girchychni'
            }
        ]
    },
    {
        id: 18,
        name: "Мітенки \"Гірчичні сови\"",
        description: "Цей теплий та сонячний колір пасує всім, а зараз ще й - дуже модний. Гірчичні м'якенькі мітенки з маленькими совенятами - не лише зігріють, а й піднімуть настрій.",
        materials: "Матеріал: акрил та бісер.",
        images: [
            "mitenky_sovy_girchychni_01.jpg",
            "mitenky_sovy_girchychni_02.jpg",
            "mitenky_sovy_girchychni_03.jpg",
            "mitenky_sovy_girchychni_04.jpg",
            "mitenky_sovy_girchychni_05.jpg"
        ],
        price: 270,
        link: 'mitenky_sovy_girchychni',
        category: "Аксесуари",
        similar: [
            {
                img: "mitenky_olyvkovi_kosy_01.jpg",
                price: 180,
                link: 'mitenky_olyvkovi_kosy'
            },
            {
                img: "mitenky_fakturni_sovy_01.jpg",
                price: 250,
                link: 'mitenky_fakturni_sovy'
            },
            {
                img: "mitenky_sovy_buzkovi_01.jpg",
                price: 270,
                link: 'mitenky_sovy_buzkovi'
            }
        ]
    },
    {
        id: 21,
        name: "Зелений снуд і рукавиці",
        description: "Таке буває дуже не часто, але я не змогла розділити цей набір. Темно-зелений снуд та рукавиці для мобільного. М'які, теплі та фактурні аксесувари чудово виглядають разом. Ручна в'язка, приємний колір, пасуватиме і жінкам і чоловікам. Матеріал: акрил.",
        materials: "Розміри: снуд: довжина 24см, ширина 27см; рукавиці: M-L.",
        images: [
            "zelenyi_snud_rukavytsi_01.jpg",
            "zelenyi_snud_rukavytsi_02.jpg",
            "zelenyi_snud_rukavytsi_03.jpg",
            "zelenyi_snud_rukavytsi_04.jpg",
            "zelenyi_snud_rukavytsi_05.jpg",
            "zelenyi_snud_rukavytsi_06.jpg"
        ],
        price: 500,
        link: 'zelenyi_snud_rukavytsi',
        category: "Аксесуари",
        similar: [
            {
                img: "malynovyi_snud_01.jpg",
                price: 250,
                link: 'malynovyi_snud'
            },
            {
                img: "pomaranchevyi_snud_01.jpg",
                price: 200,
                link: 'pomaranchevyi_snud'
            },
            {
                img: "pomaranchevyi_snud_kosy_01.jpg",
                price: 200,
                link: 'pomaranchevyi_snud_kosy'
            }
        ]
    },
    {
        id: 22,
        name: "Малиновий снуд",
        description: "Яскравий, теплий, фактурний та схожий на комір від об'ємного светра. Малиновий меланжевий снуд - саме те, що потрібно взимку для вбереження шиї від морозів, а вас - від зимової сірості.",
        materials: "Матеріал: акрил.",
        images: [
            "malynovyi_snud_01.jpg",
            "malynovyi_snud_02.jpg",
            "malynovyi_snud_03.jpg",
            "malynovyi_snud_04.jpg",
            "malynovyi_snud_05.jpg",
            "malynovyi_snud_06.jpg"
        ],
        price: 250,
        link: 'malynovyi_snud',
        category: "Аксесуари",
        similar: [
            {
                img: "zelenyi_snud_rukavytsi_01.jpg",
                price: 500,
                link: 'zelenyi_snud_rukavytsi'
            },
            {
                img: "pomaranchevyi_snud_01.jpg",
                price: 200,
                link: 'pomaranchevyi_snud'
            },
            {
                img: "pomaranchevyi_snud_kosy_01.jpg",
                price: 200,
                link: 'pomaranchevyi_snud_kosy'
            }
        ]
    },
    {
        id: 23,
        name: "Помаранчевий снуд",
        description: "Цегляний-помаранчевий - один з моїх найюлюбленишіх відтінків помаранчевого. Тож цей неймовірний слуд - мій фаворит з наявних. Дуже м'який та теплий виріб, можна носити як закриваючи підборіддя, так і - відгортати ніби комір від светра.",
        materials: "Матеріал: акрил. Розміри: висота - 25см, довжина - розтягується.",
        images: [
            "pomaranchevyi_snud_01.jpg",
            "pomaranchevyi_snud_02.jpg",
            "pomaranchevyi_snud_03.jpg",
            "pomaranchevyi_snud_04.jpg",
            "pomaranchevyi_snud_05.jpg",
            "pomaranchevyi_snud_06.jpg"
        ],
        price: 200,
        link: 'pomaranchevyi_snud',
        category: "Аксесуари",
        similar: [
            {
                img: "zelenyi_snud_rukavytsi_01.jpg",
                price: 500,
                link: 'zelenyi_snud_rukavytsi'
            },
            {
                img: "malynovyi_snud_01.jpg",
                price: 250,
                link: 'malynovyi_snud'
            },
            {
                img: "pomaranchevyi_snud_kosy_01.jpg",
                price: 200,
                link: 'pomaranchevyi_snud_kosy'
            }
        ]
    },
    {
        id: 24,
        name: "Помаранчевий снуд з косами",
        description: "Цегляний-помаранчевий - один з моїх найюлюбленишіх відтінків помаранчевого. Тож цей неймовірний слуд - мій фаворит з наявних. Дуже м'який та теплий виріб, можна носити як закриваючи підборіддя, так і - відгортати ніби комір від светра.",
        materials: "Матеріал: акрил. Розміри: висота - 25см, ширина - 30см.",
        images: [
            "pomaranchevyi_snud_kosy_01.jpg",
            "pomaranchevyi_snud_kosy_02.jpg",
            "pomaranchevyi_snud_kosy_03.jpg",
            "pomaranchevyi_snud_kosy_04.jpg",
            "pomaranchevyi_snud_kosy_05.jpg",
            "pomaranchevyi_snud_kosy_06.jpg"
        ],
        price: 200,
        link: 'pomaranchevyi_snud_kosy',
        category: "Аксесуари",
        similar: [
            {
                img: "zelenyi_snud_rukavytsi_01.jpg",
                price: 500,
                link: 'zelenyi_snud_rukavytsi'
            },
            {
                img: "malynovyi_snud_01.jpg",
                price: 250,
                link: 'malynovyi_snud'
            },
            {
                img: "pomaranchevyi_snud_01.jpg",
                price: 200,
                link: 'pomaranchevyi_snud'
            }
        ]
    },
    {
        id: 25,
        name: "Зелені рукавиці \"Кольорові кола\"",
        description: "Найкраще для підкреслення темного глибокого кольору підійде якийсь яскравий кольоровий акцент. В цих рукавичках для мобільного їх - декілька. Гачковані кольрові плямки легко додадуть позитиву в ваш повсякденний образ.",
        materials: "Матеріал: акрил. Розмір: M-L.",
        images: [
            "zeleni_kolyorovi_kola_01.jpg",
            "zeleni_kolyorovi_kola_02.jpg",
            "zeleni_kolyorovi_kola_03.jpg"
        ],
        price: 300,
        link: 'zeleni_kolyorovi_kola',
        category: "Аксесуари",
        similar: [
            {
                img: "rukavytsi_mobilnogo_bila_khryzantema_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema'
            },
            {
                img: "rukavytsi_cholovichi_siri_01.jpg",
                price: 300,
                link: 'rukavytsi_siri_kosy'
            },
            {
                img: "rukavytsi_yaskravi_smuzhky_01.jpg",
                price: 300,
                link: 'rukavytsi_yaskravi_smuzhky'
            },
            {
                img: "rukavytsi_vovnyana_faktura_01.jpg",
                price: 330,
                link: 'rukavytsi_vovnyana_faktura'
            },
            {
                img: "rukavytsi_kolyorovi_kola_01.jpg",
                price: 300,
                link: 'rukavytsi_kolyorovi_kola'
            },
            {
                img: "rukavytsi_mobilnogo_smugasti_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_blakytno_zhovtyi_melanzh'
            },
            {
                img: "malynovi_smugasti_rukavytsi_01.jpg",
                price: 300,
                link: 'malynovi_smugasti_rukavytsi'
            }
        ]
    },
    {
        id: 26,
        name: "Рукавиці \"Кольорові кола\"",
        description: "Найкраще для підкреслення темного глибокого кольору підійде якийсь яскравий кольоровий акцент. В цих рукавичках для мобільного їх - декілька. Гачковані кольрові плямки легко додадуть позитиву в ваш повсякденний образ.",
        materials: "Матеріал: акрил. Розмір: M-L.",
        images: [
            "rukavytsi_kolyorovi_kola_01.jpg",
            "rukavytsi_kolyorovi_kola_02.jpg",
            "rukavytsi_kolyorovi_kola_03.jpg",
            "rukavytsi_kolyorovi_kola_04.jpg"
        ],
        price: 300,
        link: 'rukavytsi_kolyorovi_kola',
        category: "Аксесуари",
        similar: [
            {
                img: "rukavytsi_mobilnogo_bila_khryzantema_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema'
            },
            {
                img: "rukavytsi_cholovichi_siri_01.jpg",
                price: 300,
                link: 'rukavytsi_siri_kosy'
            },
            {
                img: "rukavytsi_yaskravi_smuzhky_01.jpg",
                price: 300,
                link: 'rukavytsi_yaskravi_smuzhky'
            },
            {
                img: "rukavytsi_vovnyana_faktura_01.jpg",
                price: 330,
                link: 'rukavytsi_vovnyana_faktura'
            },
            {
                img: "zeleni_kolyorovi_kola_01.jpg",
                price: 300,
                link: 'zeleni_kolyorovi_kola'
            },
            {
                img: "rukavytsi_mobilnogo_smugasti_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_blakytno_zhovtyi_melanzh'
            },
            {
                img: "malynovi_smugasti_rukavytsi_01.jpg",
                price: 300,
                link: 'malynovi_smugasti_rukavytsi'
            }
        ]
    },
    {
        id: 27,
        name: "Малинові смугасті рукавиці",
        description: "Скажемо \"НІ!\" сірості! Ці рукавички містять в собі все найліпше - фактурне цікаве плетіння та різномаїтття соковитих відтінків малини та смородини. Рукавички - ручної роботи, м'які та не колючі.",
        materials: "Матеріал: акрил. Розмір: L.",
        images: [
            "malynovi_smugasti_rukavytsi_01.jpg",
            "malynovi_smugasti_rukavytsi_02.jpg",
            "malynovi_smugasti_rukavytsi_03.jpg",
            "malynovi_smugasti_rukavytsi_04.jpg"
        ],
        price: 300,
        link: 'malynovi_smugasti_rukavytsi',
        category: "Аксесуари",
        similar: [
            {
                img: "rukavytsi_mobilnogo_bila_khryzantema_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema'
            },
            {
                img: "rukavytsi_cholovichi_siri_01.jpg",
                price: 300,
                link: 'rukavytsi_siri_kosy'
            },
            {
                img: "rukavytsi_yaskravi_smuzhky_01.jpg",
                price: 300,
                link: 'rukavytsi_yaskravi_smuzhky'
            },
            {
                img: "rukavytsi_vovnyana_faktura_01.jpg",
                price: 330,
                link: 'rukavytsi_vovnyana_faktura'
            },
            {
                img: "zeleni_kolyorovi_kola_01.jpg",
                price: 300,
                link: 'zeleni_kolyorovi_kola'
            },
            {
                img: "rukavytsi_kolyorovi_kola_01.jpg",
                price: 300,
                link: 'rukavytsi_kolyorovi_kola'
            },
            {
                img: "rukavytsi_mobilnogo_smugasti_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_blakytno_zhovtyi_melanzh'
            }
        ]
    },
    {
        id: 28,
        name: "Рукавиці \"Вовняна фактура\"",
        description: "Спеціальна пропозиція для любительниць вовняних аксесуарів! Рукавички зі значним вмістом натуральної вовни (в районі 80%), та ще й з шикарним фактурним орнаментом. Рукавички підійдуть на невеликий розмір руки, пасуватимуть як під пальто, так і під курточку, завдяки своєму класичному кольору та плетінню.",
        materials: "Матеріал: вовна. Розмір: S-M.",
        images: [
            "rukavytsi_vovnyana_faktura_01.jpg",
            "rukavytsi_vovnyana_faktura_02.jpg",
            "rukavytsi_vovnyana_faktura_03.jpg",
            "rukavytsi_vovnyana_faktura_04.jpg"
        ],
        price: 330,
        link: 'rukavytsi_vovnyana_faktura',
        category: "Аксесуари",
        similar: [
            {
                img: "rukavytsi_mobilnogo_bila_khryzantema_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema'
            },
            {
                img: "rukavytsi_cholovichi_siri_01.jpg",
                price: 300,
                link: 'rukavytsi_siri_kosy'
            },
            {
                img: "rukavytsi_yaskravi_smuzhky_01.jpg",
                price: 300,
                link: 'rukavytsi_yaskravi_smuzhky'
            },
            {
                img: "malynovi_smugasti_rukavytsi_01.jpg",
                price: 300,
                link: 'malynovi_smugasti_rukavytsi'
            },
            {
                img: "zeleni_kolyorovi_kola_01.jpg",
                price: 300,
                link: 'zeleni_kolyorovi_kola'
            },
            {
                img: "rukavytsi_kolyorovi_kola_01.jpg",
                price: 300,
                link: 'rukavytsi_kolyorovi_kola'
            },
            {
                img: "rukavytsi_mobilnogo_smugasti_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_blakytno_zhovtyi_melanzh'
            }
        ]
    },
    {
        id: 29,
        name: "Рукавиці \"Яскраві смужки\"",
        description: "Чорнобривці, свіжий мед, осіннє яскраве листя... А які асоціації викликають ці кольори у вас? Теплі та яскраві рукавички готові гріти та піднімати настрій!",
        materials: "Матеріал: акрил. Розмір: M-L.",
        images: [
            "rukavytsi_yaskravi_smuzhky_01.jpg",
            "rukavytsi_yaskravi_smuzhky_02.jpg",
            "rukavytsi_yaskravi_smuzhky_03.jpg",
            "rukavytsi_yaskravi_smuzhky_04.jpg"
        ],
        price: 300,
        link: 'rukavytsi_yaskravi_smuzhky',
        category: "Аксесуари",
        similar: [
            {
                img: "rukavytsi_mobilnogo_bila_khryzantema_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_bila_khryzantema'
            },
            {
                img: "rukavytsi_cholovichi_siri_01.jpg",
                price: 300,
                link: 'rukavytsi_siri_kosy'
            },
            {
                img: "rukavytsi_vovnyana_faktura_01.jpg",
                price: 330,
                link: 'rukavytsi_vovnyana_faktura'
            },
            {
                img: "malynovi_smugasti_rukavytsi_01.jpg",
                price: 300,
                link: 'malynovi_smugasti_rukavytsi'
            },
            {
                img: "zeleni_kolyorovi_kola_01.jpg",
                price: 300,
                link: 'zeleni_kolyorovi_kola'
            },
            {
                img: "rukavytsi_kolyorovi_kola_01.jpg",
                price: 300,
                link: 'rukavytsi_kolyorovi_kola'
            },
            {
                img: "rukavytsi_mobilnogo_smugasti_01.jpg",
                price: 350,
                link: 'rukavytsi_mobilnogo_blakytno_zhovtyi_melanzh'
            }
        ]
    }
]

export default accessories