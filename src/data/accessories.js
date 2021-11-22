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
            },
            {
                img: "mitenky_kotyky_chorni_01.jpg",
                price: 250,
                link: 'mitenky_kotyky_chorni'
            },
            {
                img: "mitenky_kotyky_girchychni_01.jpg",
                price: 250,
                link: 'mitenky_kotyky_girchychni'
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
            },
            {
                img: "mitenky_kotyky_chorni_01.jpg",
                price: 250,
                link: 'mitenky_kotyky_chorni'
            },
            {
                img: "mitenky_kotyky_girchychni_01.jpg",
                price: 250,
                link: 'mitenky_kotyky_girchychni'
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
                img: "mitenky_snizhynky_01.jpg",
                price: 250,
                link: 'mitenky_snizhynky'
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
                img: "mitenky_snizhynky_01.jpg",
                price: 250,
                link: 'mitenky_snizhynky'
            },
            {
                img: "mitenky_snizhne_zoloto_01.jpg",
                price: 250,
                link: 'mitenky_snizhne_zoloto'
            }
        ]
    },
    {
        id: 10,
        name: "Мітенки \"Сніжинки\"",
        description: "Мітенки плетені вручну з акрилової меланжевої пряжі бузково-рожевого відтінку. Мають виплетені спицями коси та нашиті дерев'яні ґудзики з намальованими на них сніжинками. Мітенки дуже м'які та приємні на дотик, пасуватимуть до ніжного зимового образу.",
        images: [
            "mitenky_snizhynky_01.jpg",
            "mitenky_snizhynky_02.jpg",
            "mitenky_snizhynky_03.jpg"
        ],
        price: 250,
        link: 'mitenky_snizhynky',
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
                img: "mitenky_snizhynky_01.jpg",
                price: 250,
                link: 'mitenky_snizhynky'
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
            },
            {
                img: "mitenky_kotyky_chorni_01.jpg",
                price: 250,
                link: 'mitenky_kotyky_chorni'
            },
            {
                img: "mitenky_kotyky_girchychni_01.jpg",
                price: 250,
                link: 'mitenky_kotyky_girchychni'
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
            },
            {
                img: "mitenky_kotyky_chorni_01.jpg",
                price: 250,
                link: 'mitenky_kotyky_chorni'
            },
            {
                img: "mitenky_kotyky_girchychni_01.jpg",
                price: 250,
                link: 'mitenky_kotyky_girchychni'
            }
        ]
    },
    {
        id: 19,
        name: "Мітенки \"Чорні котики\"",
        description: "І у мене і моєї мами є по чорній кішці, тож у Плетеному КоТі просто мали з'явитись чорні мітенки-котики. Бо ми не віримо в прикмети, а віримо, що чорні коти приносять лише тепло та затишок.",
        materials: "Ручне плетіння та вишивка, пряжа - акрил.",
        images: [
            "mitenky_kotyky_chorni_01.jpg",
            "mitenky_kotyky_chorni_01.jpg",
            "mitenky_kotyky_chorni_01.jpg",
            "mitenky_kotyky_chorni_01.jpg"
        ],
        price: 250,
        link: 'mitenky_kotyky_chorni',
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
            },
            {
                img: "mitenky_sovy_girchychni_01.jpg",
                price: 270,
                link: 'mitenky_sovy_girchychni'
            },
            {
                img: "mitenky_kotyky_girchychni_01.jpg",
                price: 250,
                link: 'mitenky_kotyky_girchychni'
            }
        ]
    },
    {
        id: 20,
        name: "Мітенки \"Гірчичні котики\"",
        description: "Мітенки-котики гірчичного кольору 100% піднімуть настрій та додадуть тепла у ваш зимовий день.",
        materials: "Ручне плетіння та вишивка, пряжа - акрил.",
        images: [
            "mitenky_kotyky_girchychni_01.jpg",
            "mitenky_kotyky_girchychni_02.jpg",
            "mitenky_kotyky_girchychni_03.jpg",
            "mitenky_kotyky_girchychni_04.jpg"
        ],
        price: 250,
        link: 'mitenky_kotyky_girchychni',
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
            },
            {
                img: "mitenky_sovy_girchychni_01.jpg",
                price: 270,
                link: 'mitenky_sovy_girchychni'
            },
            {
                img: "mitenky_kotyky_chorni_01.jpg",
                price: 250,
                link: 'mitenky_kotyky_chorni'
            }
        ]
    },
]

export default accessories