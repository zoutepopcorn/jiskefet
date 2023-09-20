const EPISODES = {
	"hMwhdrjhFLU": "Sport op Stelten - Zwemster Mieke Stoop - Ruardi",
	"51nLLgMohmo": "Sport op stelten - Autoracing",
	"y9kiXOOupXw": "Het overlijden van Bep van Mokum - live op TV",
	"XLjhKusPsMk": "De Heeren van de Bruyne Ster - Afl. 1 - Het Nauw van Calais",
	"1zzPAguBgrI": "De Dames - De Verbouwing - Deel 2",
	"fBYOPny8K8I": "De Dames - De Verbouwing - Deel 1",
	"awjgwmdNr8w": "Jeuk aan me naad",
	"aGamrY8V1cg": "Brood voor de homo's",
	"35FkV8dSTfg": "NFTrecx presents 'WOMEN AND CULTURE'",
	"XJFwjkG5qV0": "De Perkse Diep - Het Kaasboertje",
	"rfrNZSkptK8": "Gewoon geil",
	"H8bfzN1arPQ": "Multilul - Hidden Sound System",
	"6MlzLRaLkt0": "Humor op het platteland",
	"I8dQIiD1WMI": "Oorlogshobby",
	"dSddW6XCdaE": "Een land naar keuze bombarderen",
	"i2naL0uF1-M": "T-shirt",
	"0jvzr4KJ8NQ": "Oboema - Wielrenner en de fluit",
	"_aGLa0bQcec": "De Houthakker",
	"leB1MHmMHM8": "St. Hubertusberg - De Zoon",
	"7izqtXAYUWE": "St. Hubertusberg - Nagel",
	"MblA9WLbbd0": "Tony van Heemschut - DJ",
	"LvpvJmNUbPk": "De Bevrijdingsdagparade",
	"C8WdGDNHUPQ": "Voetbalsupporters",
	"Mh9fTDWa3x4": "2022",
	"Qp7uYU1o3Bs": "Henkie Flits en Diego Maradona - Paparazzo",
	"mYm4oHgK5s4": "La Bohème",
	"HblF6reu264": "Geister 3",
	"6BLfhUrQyIQ": "Geister 2",
	"FC4qbAiblIg": "Geister 1",
	"dGlR5BnYEs0": "Flipje",
	"MLNK9_kYhDg": "Henkie Flits - Paparazzofotograaf - 1",
	"n9lueW8v0PA": "Oboema - voetbalsupporter",
	"Q9HMZDQUgPQ": "Voetbal en sportjournalistiek 2",
	"-1RmqrZCD8A": "Voetbal en sportjournalistiek 1 (Docu met Verschoor)",
	"dFvoWgQP46c": "De Duits-Nederlandse verhoudingen in het voetbal",
	"jKp372J3_XU": "Tony van Heemschut op de banjo",
	"oQBlFMUAp60": "De Ruimte - deel 2",
	"sOnSHqKezA4": "De Ruimte - deel 1",
	"hIoXh4Qf5cU": "Kokosmakronen van Alberts en zonen",
	"NZx3fN5CZ1U": "Falling, Waiting, Yawning",
	"FHpunRFaDJg": "Spitting Image",
	"7oJT86jrmDQ": "Prins Bernhard - Panda 2",
	"RSZyFYxAOGU": "Tering, het is uit met mijn verkering (ft. Oboema)",
	"tdWfo_B5rHA": "Leiden 1546 (Historische agenten)",
	"amfF1rVbC7c": "Op zoek naar Shirley van Dijk",
	"XfSWVLWopWY": "Justus de Broeckenaere - Belgisch acteur",
	"N96h9Yz2UGM": "Restaurant - Scheren",
	"TTeBkjDopag": "Vermeer en Tony van Heemschut",
	"_y1h2ncsB84": "De Festivalman - 's Nachts verliefd in bed",
	"v9mVHXAjV7w": "De Festivalman op Schiphol",
	"-29oTq1CBvs": "Sonny - Contactadvertentie",
	"wYFHzq60_IE": "Menopauze",
	"lIfH4tJqEr8": "Barscène",
	"s1Hl2r9ibvs": "Bankje in het park",
	"DpJfljc84OQ": "Verzetsstrijders",
	"vI4RAMHQVPE": "De Prijs",
	"dIu5YZQThck": "Halter hoeren",
	"-RFuLYFQv8g": "Baby Bonzo 5",
	"S23licT0hCA": "Multilul - Het Gala van de Gouden Lul",
	"tub7U8o1RKQ": "Intro voor aanvang",
	"Fziz4qKP8uU": "Baby Bonzo 4",
	"YE_Ahb5OPDY": "Botsauto's",
	"0ib-mB1GKBk": "Zsa Zsa Gabor",
	"LebWMX5GhSE": "De Skybox - Illusie",
	"r-wpHGuc5fQ": "De Skybox - Verschoor - Belspel 3",
	"onotOxNehbs": "Goeiesmorgens De Musical 5 - Peter",
	"l1HT4QFBEXw": "Goeiesmorgens De Musical 4",
	"ctkxXGlNl-k": "Goeiesmorgens De Musical 8",
	"bo1MPrFgLKA": "Goeiesmorgens De Musical 6 - Tampert",
	"SwcOZ64X4ak": "Goeiesmorgens De Musical 10",
	"IXO1OBuJjVQ": "Goeiesmorgens De Musical 2 - Gesmoorde kreet",
	"FzFgpi3wxws": "Goeiesmorgens De Musical 12",
	"Aw9fHaIPiBw": "Goeiesmorgens De Musical 7",
	"6RCm7mlLQGk": "Goeiesmorgens De Musical 11 - The Cards - Suzy",
	"WDB7LgaVFmc": "Goeiesmorgens De Musical 3 - Dicky Curtis",
	"FusbSUa9ui0": "Goeiesmorgens De Musical 9 - Bep van Mokum",
	"6WvnOmqtfj4": "Goeiesmorgens De Musical 1 - Tony van Heemschut",
	"x-WH8-Ty2VI": "In gemeenschap van goederen (Drie mannen in een boot) - deel 1",
	"Y-sqYlBfOwQ": "De straatartiest",
	"mwaoo1LCRFA": "Surfers bij een strandtent",
	"XYuxUTQdk8c": "Singer songwriter met Tony van Heemschut",
	"hL0j6mZ2ZfI": "Ze zijn er weer, de originele Jiskefet shirts. Bestel ze nu!",
	"9PCIDG7FHBo": "Mr. Mime - Vliegangst",
	"Sg9LGv2CO6g": "De Skybox - Integriteit",
	"u-YDFwwWEkg": "De Skybox - Verschoor - Belspel 2",
	"IbOGVxXDDoo": "De Skybox - Respect",
	"eQdEOHPq2rY": "Notaris Wilmots - Vakantiehuizen",
	"xMlFrZrAAYs": "Mr Mime en de dichters",
	"1SFp2EXFwIM": "De Doorstart",
	"wXfw9OKi4aU": "De Skybox - Liefde",
	"XsfK97wOKYY": "Theatermakers",
	"fPZoBGZsOb0": "Beroemde vertellers - Hell's Angel en Mariaverschijning",
	"3j-VH054z9M": "English Sports",
	"GlfnRIfqoGY": "De IJsmeester",
	"-OGj0yQy1rY": "In gemeenschap van goederen (Drie mannen in een boot) - deel 1",
	"fzLrs2CI7Ss": "De Dienst - De Skybox",
	"hh2-PtlTwJU": "De Compound - Wachten op J.P.",
	"d7-E_9jOnvI": "Bijpraten met Leo",
	"RPwUgrmIk8o": "De Skybox - Verschoor - Belspel 1",
	"D6_74X64D9Y": "Fragment uit een verhaal",
	"M91MvEivzRs": "De Perkse Diep - Zwaantje",
	"iOkS3oO7wJg": "Baby Bonzo 3",
	"tnjvvbMvPMQ": "Notaris Wilmots - Achtergelaten voertuigen",
	"y_ZANsVwxHE": "Tony van Heemschut in Las Vegas",
	"_-M7fVgv5Xw": "Tony van Heemschut - Show me the way",
	"W5BSfVRMUuU": "De Skybox - Gesprek met Verschoor",
	"sEz8Y2ZsAek": "De Skybox - Vertrouwen",
	"-YCnsm_n3pI": "Ik zoek een vrouw voor mijn broer",
	"9Xr2AfKvz7A": "Clown Gribus en het torhaantje",
	"VIJLONbTRJk": "Broccoli",
	"758empqVqR8": "Breekbare spullen",
	"ybn7DGwn_VU": "Henk Mul doet een megastunt",
	"rwmjpX2AbU0": "Suzy - De documentaire over The Cards - deel 1",
	"nntUMVrI-bc": "De Skybox - Een gesprek met Bep van Mokum",
	"bubs-cfWZxk": "Interview met Henk Mul en zijn manager",
	"OWZegNkvPxw": "Suzy - De documentaire over The Cards - deel 2",
	"Q4Bs_HQJAyg": "Mijn Club - Live",
	"Ii4qavBZO-8": "Baby Bonzo 2",
	"wa1NOpGRess": "Clowns doen een act met een vrijwilliger uit het publiek",
	"pp4_urAyknw": "Tante Poes en Jantje Haring - deel 2",
	"ghbUXqGsxTY": "Ondertitelmannetje (Turks ondertiteld en met doventolk)",
	"am-Qm-GuYCQ": "Tante Poes en Jantje Haring - deel 1",
	"KeLX2pYRn2Y": "Baby Bonzo 1",
	"sGzRU3NBlco": "Stichting Hulp - Scharende Kip caravan",
	"pVinoMl_YyM": "In gemeenschap van goederen (Drie mannen in een boot) - deel 2",
	"_D8CHXNAXTE": "Betweters",
	"g-Z4PAP6PK4": "Clowns interviewen de oppasser van de apenrots in Artis",
	"ROPobXPFvk8": "Darts",
	"bqMDERokT_s": "Interview met een acteur",
	"hthgWlOC7iM": "Luilebal",
	"MzT6qdWD240": "Anonieme ex-kindervriend",
	"a9c6D2UXgG8": "Gezichtzitten",
	"E2FvcFtLsQ4": "Engelen, een junk en een restaurant - 1",
	"MVjpl_-zorE": "Engelen, een junk en een restaurant - 2",
	"S4MPMdgwjkE": "Cowboy en de jongen",
	"os0KhShqT34": "Notaris Wilmots - Vermiste bagage",
	"k8E_z-C5jCA": "Cowboy gaat tanken",
	"nzpIw75wjHA": "Gesprek met een ober",
	"UeA_znGjrw4": "Multilul - Holistic Satellite System",
	"pKE-TeQhc5k": "The Late Show 2",
	"nq4aV9oeVJU": "The Late Show 1",
	"nX6NZEAHNNM": "Anton en de piloot 4",
	"XMxcXA_Xz0w": "Anton en de piloot 3",
	"vEToJF_Uqvk": "Anton en de piloot 2",
	"LFKDAaPYcuI": "Anton en de piloot 1",
	"LylM-jcSWzk": "Death Row",
	"1cTJDsE7PWc": "Gesprek in de auto",
	"l3LuPWSQmNM": "Multilul met LVGS en De Van Heemschuts",
	"YE8vQzQW4Eo": "St. Hubertusberg - Afscheid - 2",
	"bzZ9-X3UuvY": "St. Hubertusberg - Afscheid - 1",
	"NYTAWaWFlWg": "St. Hubertusberg - De Zoon - 2",
	"nf63lYBaZ-c": "St. Hubertusberg - De Zoon - 1",
	"88nj42r_f8w": "Multilul - Antwoordapparaat",
	"wyW3A6IQ568": "Dank je Partytime J.J. - 6",
	"PiLF65h-DG8": "St. Hubertusberg - De Nagel - 2",
	"EpSOF6IU_mI": "St. Hubertusberg - De Nagel - 1",
	"da40CRnqNjc": "Familiehereniging",
	"Ptd46X5pzww": "Ruiken aan Cultuur 2 - Ian McWright - Stand-up comedian",
	"1Iw9QTGeD6A": "St. Hubertusberg - Het uitje",
	"he_TSXUa7-c": "Mama liked the roses",
	"I_TlWGsM3gY": "Dank je Partytime J.J. - 5",
	"d6LNziJy_VE": "Dank je Partytime J.J. - 4",
	"gCL69UOVjlk": "Droomduiding",
	"xyHVqDcQufo": "Interview met Wim Schilder (Job Joris) over zijn carrière in de VS",
	"Sx_EfyL4RuE": "St. Hubertusberg - Tussen kunst en kitsch",
	"sHYG2cha1ok": "De Dierenwinkel - Goeienacht",
	"2YC1l-RtlzE": "Hier wordt niet gehinkeld!",
	"lWw3PS9CZvE": "Dank je Partytime J.J. - 3",
	"dBUPO2ZC6nM": "Warrige Henk en Swiebertje",
	"B6_MS7ibtRs": "Ruiken aan Cultuur 1 - Bernd Vliegen - Anglofiel",
	"ARM_5m1Ue2o": "Dank je Partytime J.J. - 2",
	"T7DoqwTUWyk": "Het Gala - Tom Herson en Ninke",
	"yksCbz9VTV8": "Het Gala - De Dierenverkoper draagt voor",
	"6mZ-KOplfZI": "Het Gala - Oboema en José",
	"U0JCJzrqCRc": "Het Wilde Westen - 3",
	"6jpqCQEhEwI": "Het Wilde Westen - 2",
	"dpB2QtH1EdE": "Het Wilde Westen - 1",
	"lL93LceBuHc": "St. Hubertusberg - Het Feest",
	"GRUq-5np4Fk": "De Dierenwinkel - De Brokkenpiloot",
	"o5TX7xuYY9E": "Het Toneelstuk",
	"3rDyNi0nBE0": "Willie - Brieven aan Capriccio - De Speelplaats",
	"pMPwwor0RDY": "Nächste Pudel bitte",
	"LSX0_WEI3rA": "Ontdek je plekje",
	"v9ZGWD1Vshs": "Oboema en José - Wedden",
	"nDWMEqTFnro": "De pannenkoeken zijn bruin - Op de set van Kapel Tamboer",
	"NgKg8FNuO2w": "Spaanse Humor - Matador met vrouw",
	"QW53UMQQjUU": "De Bob en Cor show",
	"yZOsL0tID7E": "Brieven aan Capriccio - Zo'n dag",
	"ClL4shijYzA": "Max Schmidt - Filmgeluiden maker",
	"6PZluNQKH3k": "St. Hubertusberg - De Stagiaire",
	"3sd46eA8caM": "Interview met Hans Hooft over zijn mening en zijn boek",
	"mqnvN8YsNrM": "Theo in z'n jonge jaren met krakersvrienden",
	"DZX_a7Y-S-s": "Bill is niet van hier",
	"RXgfoJCiEzo": "Multilul introduceert HMSS (Hidden Mind Switching System)",
	"yulGXn-5bKU": "De Dierenwinkel - Velgen",
	"Duuj0tFVXSI": "Willie - Brieven aan Capriccio - Verjaardag",
	"piTlKlEYEyw": "Willie - Ik ben veranderd",
	"_M8OQjarvI8": "Oboema en José - Honden",
	"YS1HjgtWmFk": "De Lerarenkamer - 1/2",
	"Whh6PsogVqI": "De Lerarenkamer - 2/2",
	"07kA6mRnPiA": "De auto inpakken",
	"-X-kqgRlZH0": "Line dance",
	"wKmtqovax1M": "Swiebertje, Zorro en Flipje",
	"_A9_qolDfQQ": "Het knippen van de schaar",
	"_650EoOkPAw": "Tour de Force - 1/3",
	"TpXAKk0_Q5E": "Tour de Force - 3/3",
	"ReyzWQ6gH0s": "Tour de Force - 2/3",
	"MRC9eKFHxDE": "C'est bon (neuken achter de heg)",
	"UTZ34V_yzMU": "De Dames in de kunstcommissie - De poppenspeler",
	"Sw43q7PKghw": "The Compound",
	"oCBTx_ViI1A": "Kerst met Theo (deel 1/3)",
	"hP4Q5C4K0kk": "Kerst met Theo (deel 3/3)",
	"KpZr3nl0IdA": "Kerst met Theo (deel 2/3)",
	"w_qQVBGwI5Y": "Loser in bar",
	"imXBANiwF3M": "Lullo's - In Oostenrijk 1/2",
	"AWBsx2NSYx0": "Lullo's - In Oostenrijk 2/2",
	"guyOMxKBxwk": "Debiteuren Crediteuren - Feest 2/2",
	"hFAGmrBIE90": "Debiteuren Crediteuren - Feest 1/2",
	"lD8G6WkGu68": "St. Hubertusberg - Sinterklaas 2/2",
	"6_fRFcm17xA": "St. Hubertusberg - Sinterklaas 1/2",
	"5JaCcFZ3AKQ": "Dr. Longhair - 3/3",
	"00EQnsmFacs": "Dr. Longhair - 2/3",
	"vIkC_DS4qT0": "Dr. Longhair - 1/3",
	"t2qFoEjVMGo": "Breekt mijn klomp (nou)",
	"h5Zyxp_1Lgg": "De Dames van de kunstcommissie - De filmmaker",
	"Duhiio892XQ": "De Dames in de kunstcommissie - Het script",
	"PtzMeNIX0eE": "Het 18e Kabouterettefestival",
	"NPCoZNYjKXA": "De Coureur",
	"dEqa0dzoex8": "Harry",
	"GTqIjTg6jUY": "‘n Muskietenpak",
	"jMK9-hGLNyI": "The Cards - Live",
	"GpQ-Nvpq3gc": "Wonderbaarlijke ontdekkingen 2",
	"6cNB3sh-pKI": "Wonderbaarlijke ontdekkingen 1 - Pizzabrommer en kabouters",
	"pK5NrI42rdQ": "Fred Wadding - 17e eeuws cabaret",
	"Why6vFFc-2c": "Marcella Luister - Kanariepietje en naai-adviezen",
	"tZclAuXZE3I": "Snelschilderen",
	"KKg4qbh-hOM": "Stichting Hulp - Lachspiegel - Asielzoekers",
	"bIpVrsiehRs": "Kees Kolf - Pauzefilmer",
	"bk4Ep_8pMQs": "Plastic Bertrand",
	"XBp47Vi-9N8": "De Dienst - Günther",
	"V1oIIesSJns": "Wolfgang en Günther - De Bevrijdingsrevue",
	"Q49Hq8Tnr4g": "Wolfgang en Günther - Interview over de bevrijdingsrevue",
	"5NFcMzZ8NOs": "Wolfgang en Günther - Die Jugend",
	"1lZTw3hKOAY": "Tampert - Der Musiker",
	"RoV5SCNTNLo": "Het Festival - Deel 2 - met Tony van Heemschut",
	"rBiAWiupjnA": "Wolfgang en Günther - Clown Power",
	"950fqEG3Gps": "De Dames van Stichting Hulp - Ham and Eggs",
	"MbnelseeUrk": "Wim Herson - Integreren / Hassan lied",
	"ltZbCIycQMs": "Genezeres Nysilena",
	"P28NzsBuEBs": "Dank je Partytime J.J. - 7",
	"m8Qto63EolY": "Het Festival - Deel 1",
	"qI5RSi__H4U": "Oboema en José - Ziek",
	"4qV84FvtggE": "Ramon Cortèz en de Paruanca (de Koffievogel)",
	"GvzeauSa9M8": "De Lullo's - Hé Lullo, heb je nog geneukt?",
	"DXsQKz6uLnU": "Tampert - Der Clown",
	"9k_36Uk4R-c": "Kerstens - De Derde Wereld",
	"yT7AeCj7s1M": "Kerstens - Kamphuijs zingt 'Henriëtte'",
	"JPTUaMdSOc0": "Tampert - Der Künstler",
	"SZpuKgiSOqk": "De Peters op het ijs",
	"Erk03So34ko": "De Dames - Stichting Hulp",
	"9neBKNW-NAc": "Heb jij gezegd dat ik een lul was?",
	"0g9pDl9-Uww": "De Dierenwinkel - De Fret",
	"iY18XNjPFMY": "Kerstens - Oboema en José - Kopspijkerspel",
	"KgEhU3gNyWo": "Kerstens - De Lullo's praten even bij 2",
	"nQDOqj9c9X8": "Kerstens - De Lullo's praten even bij 1",
	"1W6GVr1j-Rw": "De Skybox - Giorgio Mondata",
	"DHni3eGErAU": "Skybox - Vertrouwen",
	"ejlUp3AZVfY": "All Summer Long - Vicky and the Roundhouse",
	"wjTj2JHmOsA": "De Skybox - Wolfgang en Günther",
	"62JCSq5WCMo": "'Kijk op kunst' met twee schrijvers van de Flegma beweging",
	"Sp-QKb-mBxA": "Lullo's - Het Dispuutfeest",
	"lMeQr0b9cvI": "CD - Bull - Peter",
	"twrK42bXHGI": "CD - Bull - Toch mijn vrouw",
	"o1xUFZ79ZJU": "CD - Bull - Tampert",
	"hDJgjDvfKyM": "CD - Bull - Laat zien (Je rode rokje)",
	"VpLM8gkfyiY": "CD - Bull - Haar in m'n glas",
	"Ffsdyw5rhiU": "CD - Bull - All summer long",
	"2CNUBF19nVs": "CD - Bull - Hemel",
	"1vDu9JAJDFQ": "CD - Bull - Technofax",
	"sVMOYo4m9pM": "CD - Bull - Denise",
	"e5RSC8u0YjY": "CD - Bull - Mijn Club",
	"ZOLQzPWZmmk": "CD - Bull - Conchita",
	"H45-nq77KG0": "CD - Bull - It must be her",
	"FeQUrOb45fs": "CD - Bull - Zit, zit, zit, shit (bonustrack)",
	"7vniuP2N5Oc": "CD - Bull - Man die bakt",
	"1QWYgS7PDmU": "Tony van Heemschut's Kaaspourri",
	"L_6LJY1eh70": "CD - Volume 1 - Intro",
	"-qIThTXPmDw": "CD - Volume 1 - Vuur en Vlam",
	"aKEIFJY28kc": "CD - Volume 1 - Jeuk aan me naad",
	"_NGuCOSmCK4": "CD - Volume 1 - Intermezzo - Dieren",
	"V6SMhNJObJY": "CD - Volume 1 - Heel geen vogel",
	"4qz4R1v47sQ": "CD - Volume 1 - Oboema's Kerstwens",
	"FXb5fqSlmxI": "CD - Volume 1 - Intro Ik ben veranderd",
	"CWygp50xgds": "CD - Volume 1 - Ik ben veranderd",
	"QT_S7end1iw": "CD - Volume 1 - Wim van Susteren",
	"0UHDC1bb0sE": "CD - Volume 1 - Dankje Partytime, JJ!",
	"RtApAc2UdNI": "CD - Volume 1 - Tony van Heemschut",
	"irlf1qkPioo": "CD - Volume 1 - Als u even met mij meekijkt...",
	"dZzzoafVmp4": "CD - Volume 1 - Intermezzo",
	"-Ss9HxgO4eo": "CD - Volume 1 - Dierengedichten",
	"wROj2GMKQ94": "CD - Volume 1 - Geloof in het leven",
	"2TvaD2JbmJI": "De film van Oboema op het filmfestival",
	"2y5INJAj6Pw": "Filmfestival - De Gouden Kalf gooier",
	"Dz8lsS7o9ZY": "Adriaan van Dis en Sonja Barend over Jiskefet",
	"fgl_Wg5V6Ro": "Zomergasten - De Hoerenman",
	"9lF7ks0yVh8": "Informatie voor de vissers",
	"P1O5sUIXm78": "Oboema Sesetokoe - De man die bakt",
	"WPMUzz52wII": "Kotssex",
	"nJkE7QHQYLM": "Johnny en Willie - Boekwinkel (Open einde)",
	"KwJBEG218sI": "Cor en Marius met een motor en een tapijt",
	"aVtrNRHasBw": "De Inzicht-Milieu-Act van Cor en Marius",
	"yKl4CZaSetw": "Legendarische leeservaringen",
	"O0g3_sdxoSY": "Oboema ontmoet zijn broer Pepoya",
	"4__oSLc2dFM": "Johnny en Willie - Ballet",
	"QaQyUXL-TnA": "Prostitutie op het platteland",
	"sy7QY3tWL2o": "Tennisdames - Kalverliefde",
	"IJ7wqbUGr_Y": "Oboema en het Afrikaanse voetballertje",
	"GDEayWeta6Y": "Promo videoband en cd",
	"ImWS-GFK4-Q": "Spaanse mannen",
	"ZypAnsmwmOk": "Tony van Heemschut - Tango en Flamenco",
	"GarNug5nQAk": "Multilul - Loeki - Pitch 1",
	"TJ3Hper9Pr8": "Multilul - Loeki - Pitch 2",
	"fANYcl2upiQ": "Waaghalzen en Durfallen - Henk Mul",
	"mYvD_OwM5xg": "Multilul - Loeki de Leeuw",
	"Je05-_DqJ9w": "Mr. Mime en Loeki de Leeuw",
	"cfeJfalot24": "Leo is weer terug",
	"L1H8gepdxa8": "Chirurgen met een koe en een nachtbus",
	"495godzG5tI": "Oboema op een motor",
	"CPShIQ4EsHA": "Bruce Waddle - International Australian Open Wood and Craftsports Championships",
	"BKdUlphCXXU": "Henk Mul - Stunt geïnspireerd op Japan",
	"1xtdGMZdeBM": "Optreden in Thalia",
	"LblpHAMgaW4": "Henk Mul doet een megastunt",
	"RVpO9lDRc_k": "De Perkse Diep - Wie is Willem",
	"E0j31xkGv14": "De Dienst - Edgar",
	"jEtCce6uiY4": "Hurdun",
	"55WU5xhS0Jc": "De Heeren van de Bruyne Ster - Liefde en Dood",
	"OwOt6W-3_wc": "De Heeren van de Bruyne Ster - De Rechtspraak",
	"ED3BrBKNfXY": "De Heeren van de Bruyne Ster - Liefdesperikelen",
	"Pr5X-At5Kw4": "De Heeren van de Bruyne Ster - Het Fort",
	"PcrK9x6OBIg": "De Heeren van de Bruyne Ster - De Indiaan",
	"mLt4czceeAw": "De Heeren van de Bruyne Ster - De Jungle",
	"Yd7Wo3IBsEs": "De Heeren van de Bruyne Ster - De Opdracht",
	"KlENul6A-MY": "De Heeren van de Bruyne Ster - Het Vertrek",
	"29t8iSW-4gE": "De Heeren van de Bruyne Ster - Nauw van Calais - 22 april 1629",
	"oFv9uVyVa2g": "De Heeren van de Bruyne Ster - De rede van Guadeloupe - 29 April 1629",
	"Q2wXOj8c4ss": "Clowns - De Fontanelli's",
	"B9tb9pgAR4c": "Koken met Oboema",
	"GF0eYx-Y-Q8": "De Perkse Diep - Het verboden eiland",
	"OjF6HfvgAng": "Festen",
	"tTAM6_xfOUo": "Leon",
	"MLhgnnyxVl4": "Laughing",
	"8xj2DFeYkKU": "Lullo's - Haar in m'n glas",
	"g3Avgm80qVQ": "Lullo's - Escort",
	"82Oo_lIXONU": "Warrige Henk - Zieken",
	"29Z1gjpmEwg": "Debiteuren Crediteuren - Uit, goed voor u!",
	"BmGz9p7EByc": "Debiteuren Crediteuren - Raveneiland",
	"XY4Ej374xo4": "Een officier in huis",
	"la7jFEiys5c": "Debiteuren Crediteuren - Een schitterend ongeluk",
	"dXd-KBH-7Kc": "Debiteuren Crediteuren - Slecht geslapen",
	"_hU95sKPHRo": "De oogarts",
	"lP-B3NNEL2w": "Kampioen Droogneuken",
	"ESOenSHSY9k": "Notaris Wilmots - Vroegtijdig teruggekeerde families",
	"wtkuOeVjNr0": "De Perkse Diep - Een poets voor Perkstra",
	"PJhb00pA9GQ": "Cliniclowns op bezoek bij Verschoor",
	"9J_83cp7PUk": "Verschoor in het ziekenhuis",
	"DGKy6g83Xro": "Oboema wordt geïnterviewd en zingt een lied",
	"vM_l5nlo2nk": "De Dierenwinkel - Dierenbubbledouche",
	"vVdyPpHP3iM": "Het Dierenasiel",
	"HSRm16Gb0cg": "Clown met chauffeur",
	"BzWGiCJ6eHw": "De Dames - Kleur bekennen",
	"AegZAUOZ3KM": "Hopsa",
	"Xf6q8my7jpM": "Clowns bij de accountant",
	"xC5JQDHeS4M": "De Peters, Edgar en een eend in de disco",
	"_WdTILrffT4": "Beertje Colargol",
	"FaBpkNbZMrk": "Debiteuren Crediteuren - Griep",
	"Kf8cY2-iQOw": "De Peters op zoek",
	"Uk65v9BzYKs": "Zo Edgar, maak jij de Sint maar eens vrolijk!",
	"HzLq9dE3f6g": "De Dienst - Vakantie in een Bungalowpark",
	"-AfwABj7SvI": "Man voor caravan",
	"b3Cj66D7F34": "Op zoek naar Jim Morrison",
	"h2NV76aCSBI": "De Dienst - De Toneelgroep",
	"vD_gSc_O-fk": "Mijn verhaal - Leidsepleindelletje",
	"-KbjPFLYwGI": "Sportjournalisten over 'het spelletje'",
	"i9A074BVKpw": "Vrouwentheatergroep Céramique - Verder dan theater",
	"b9nP0_po8Kc": "Mijn verhaal - De acteur",
	"xBcV81t-uFI": "Ik zoek een vrouw voor mijn broer",
	"YcDaRgHF9-o": "Beantwoorde liefdes (vergeten hoerenhuizen)",
	"0FdY3Nfbm-Y": "Theater - Een voorstelling van en interview met Ina Zult",
	"kZnm-zfxtnA": "Masterclass",
	"I38c1YOA9cA": "Vergeten huurhuizen",
	"VaBLYPM6yG4": "Vanavond een aangepaste uitzending",
	"gH1YkBCjh7s": "Jazz",
	"XyU1J71OEGA": "De Festivalman",
	"2toJhOdq3go": "Trailer Quality Time",
	"vPfeJhhIx-g": "Beatrix en Koninginnedag 2000",
	"vTyPzvdqMPw": "Klussen met Sterren",
	"uLwa8LnPJD0": "Paaslezing",
	"0eb8LTjxCog": "Opgeheven spoorlijnen",
	"15BqxfAswok": "Myrthe, Ellis & Mariëtta",
	"x7gaaMpg9iw": "De illusionist",
	"VzeUL3SWwoM": "Dicky Curtis heeft een kind",
	"SYMuiRlLK9g": "Diego Maradona over Bep van Mokum",
	"LOpe4gjJaso": "Jiskefet promo 1990 - RAW - MXF",
	"MKB3IbIi-5w": "Hoezo",
	"blRlxmQILxM": "Tampert - Zu Spät (der Schwanz)",
	"ftA6Bp3QBJI": "Paulus de Boskabouter",
	"UipFZNBx5U4": "Schrijversportret",
	"4msOBhDPS7g": "Is het een man of is het een vrouw?",
	"TCuY8rnh4eI": "Ich Muß Schlafen",
	"NtiCv9nqv3A": "De Dames - Thema Wind",
	"bem5dz_SVK8": "Dierenwinkel Bloopers",
	"CKR29N_42C8": "Born in the USA",
	"MALAlAUZI2I": "Debiteuren Crediteuren - Glaasje op",
	"hbK1nqt8Yxw": "C'est Bon (neuken achter de heg)",
	"9xIOUJGJAHI": "Ons genoegen",
	"z5tJxUPMyd8": "Ik praat te hard",
	"EMIJuzrNeQg": "48 of 49",
	"aWTEgT2XHR4": "John heeft last van warme lul",
	"TydOklH9cok": "Cor en Marius",
	"CJVkcy4AyfA": "Debiteuren Crediteuren - Het staat in de sterren",
	"hTh1-hnevqk": "Pimmetje",
	"nnTj0MY4cCU": "De Bob en Cor Show met Cappricio",
	"DS3jHt-k6So": "Wolfgang en Günther - Neue Welle deel 2 (met de Peters)",
	"ay2Pk-cPy2g": "Johnny en Willy - De Accordeon 1974",
	"7pvfvdIXnSI": "Debiteuren Crediteuren - Flap",
	"dSLRk9FNvaU": "Stormtheater",
	"4zzLafL2644": "Moeder heeft een nieuwe vriend",
	"vICQl_5jNyg": "Oboema en José - Klussen",
	"fAPXaa9jweg": "St. Hubertusberg - Martha",
	"wHydF21TS90": "Theo - Hij verstaat je niet",
	"rjJDMy9spEw": "Debiteuren Crediteuren - Vakantieplannen",
	"YIAlg-v0EZQ": "Film Noir",
	"Uyqa0ZQ-Av0": "Drie mannen in een boot",
	"o03xFZw8DoU": "De Lullo's - Kater",
	"8M8JdMD5nAI": "Peters in het bos",
	"QGU2fEWjxwk": "Speed boat",
	"To-JmR9utWg": "Theo vertelt over zijn krakersverleden",
	"8Xqmp9BSkjM": "Mijn eigen vrouw (Gesmoorde kreet)",
	"UA7R7ve4_6c": "Leader - Baby Bonzo",
	"YdnnOt1DqUQ": "Leader - Bambi",
	"-Q_P5gFZaHU": "Leader",
	"Xkyfu0KHirw": "Voetbalsupporter",
	"6rQIyk4B99Q": "De Dames - Brood voor de homo's",
	"IjcO43lE_MQ": "Debiteuren Crediteuren - Rampenplan",
	"qHKRYOdDeZY": "De Dierenwinkel - Duitse Dieren",
	"AmWLu1F9ELc": "De Dierenwinkel - Dierenbowling",
	"DBf8USWCAf8": "De Dierenwinkel - Dierenbubbledouche",
	"sc0oK8B74go": "Geen beatrix",
	"-eQcs1jxbeg": "Tony van Heemschut - Gebakjes",
	"K0ri84P3Ki4": "De bewonderaar",
	"NYpuMR5KZS4": "Henk Mul met een lampje",
	"ptxzgZ2XJZw": "Debiteuren Crediteuren - Ruimtetaxi",
	"55RUqHGZpRM": "Stille nacht",
	"tXdw5uRzqoc": "De Ondergang (Adolf de Film)",
	"JrqCDHIWk_I": "Black and White Minstrels",
	"aExQ9U9KavM": "De Dierenwinkel - De Bunzing",
	"tXEffl_8N8w": "De Dierenwinkel - De Eilanden",
	"fXa_J7EHJlk": "Man In Zwembad",
	"hgQ210PTu-M": "Gene Zijde",
	"vPs74ZyGKD4": "Sport Op Stelten: de Tennisser",
	"xXWPrP7loBE": "Bep van Mokum - De Kogelslingeraar",
	"436aS4u87B0": "Bep van Mokum",
	"XYKHoBxRW3c": "De Chiquita's",
	"-CKLmVa_1fc": "Interview met Cowboy",
	"-iAGnYIMhbE": "Vrachtwagenchauffeur met moeder",
	"cTikimNO53E": "Drie Pak - Travoltas (deel 2)",
	"w0qderhDCTA": "Debiteuren Crediteuren - Nieuwe Haakjes",
	"fbyY4dvQKpI": "Theo en de Helmettes",
	"UhwVb908EyI": "De Dierenwinkel - De Naaktvisser",
	"dbXURtMsIyA": "Oboema en Jose - Voetbal",
	"SI1NhYS-RPc": "Lullo's - Boek",
	"KRGBPL3W0yQ": "Drie Pak - Travoltas (deel 1)",
	"lg5FTai3Gpg": "De Dienst - De Woning",
	"D9KJz_cw4jA": "Debiteuren Crediteuren - Tips Voor Op De Camping",
	"7acomKLmi2k": "Oboema en José - Cadeau",
	"pLb7BcHferM": "De Dierenwinkel - Muizenplaag",
	"KVxDQ3RYwjI": "Hippie",
	"fHynplBHL64": "De Lullo's - Vietnamees (met Bob Fosko en de Raggende Manne)",
	"261LRCjflrk": "Dank je Partytime J.J. - 1",
	"GL0lY1QS0WE": "De Dierenwinkel - Overval",
	"lsZnIXCsgJ8": "Vrouwen en Duitse Officier",
	"YuFlc2hO4WY": "Tips voor de auto",
	"MwL6sxyFRKE": "De Dames - Dubbele Laag",
	"LFEs7K4MdNo": "Johnny en Willy - De Camping",
	"O2LpVBNhDL8": "Vliegtuig",
	"f1sVDgy1NPE": "Spaanse Disco",
	"8qKOrFmkwzA": "Boekenweek met Peter Smulders en Tony van Heemschut",
	"OZ-Ei6Dw3BQ": "Ouwehoeren op vakantie",
	"WshXdgVggmU": "Komodovaranen",
	"T-fv5DTPJ0Y": "Autodidakt",
	"R9GrcOLXAUg": "De Dienst - Writers Block",
	"-EKR-sUt5MM": "De Dierenwinkel - De Vrouw",
	"DEh4L2MnvF8": "Dichter kopen?",
	"BYuUNk87-70": "Sint Hubertusberg - Afscheid",
	"hacdbKks9Eg": "Het Gelders Volksleger In Actie",
	"4czp7yhVjHw": "Tampert - Der Mordfall",
	"0K4lm2x4poA": "Brieven aan Capriccio - Nieuwjaarsgroet",
	"XyyQZ8kh6-s": "Welkom op het officiële Jiskefet kanaal!",
	"aM6bS1rmzXs": "Debiteuren Crediteuren - Winterwonderland",
	"kof7_uqygcI": "Johnny en Willie - De Wesp",
	"bqDYxdceKQA": "Skybox - Swap the Buzz",
	"Q59THp2wVb8": "Oboema en José - De bruiloft van de Witte Neger",
	"d2HMn28If4w": "De Witte Condor van de Andes",
	"y6V7j5hicNo": "Verschoor: Het Oude Stadion",
	"CdX270P2h8A": "Sport Op Stelten: De Coureur",
	"hJFJrZqck4U": "Drie Pak - Niet Meer Beroemd",
	"fgXbfMDx--w": "Stilstaan bij een standbeeld",
	"E_6d3JBBo4s": "English Sports",
	"Xjs4yOYwIgQ": "Poep Veulen Slingeren",
	"Fb3lleQ3KiQ": "Massagetafel",
	"VjQY65oxkS8": "Op Het Dak",
	"EmnGItjxcT0": "Multilul - Klukluk",
	"sL-5ONPFxkg": "Oboema en José - Honden",
	"a0M3L61dLz0": "De Dierenwinkel - Dierenpret",
	"L_Au4HA345w": "In de caravan",
	"VbIah4Ia7G0": "Lullo's - Ajax",
	"1T7_FpNv37g": "Wonderbaarlijke Ontdekkingen 3 - Emergendizer",
	"KEe4unQcHPE": "Waterbuik",
	"rC9CSz2loxk": "De Berenverkoper",
	"u1SLw5sAx0s": "Theo op het strand",
	"IDWCxrNzKmQ": "De Perkse Diep - Melk",
	"0cIfEBpvygQ": "De Dierenwinkel - Inspectie",
	"Tlm9ZVJFunU": "De Nieuwe Bal",
	"siq9Qcu-zxw": "Jan van Budel - Uithuilen",
	"ywSaXtK-2cQ": "Henk Mul - Hoe te gedragen in het veld",
	"3yLhCrUv1bw": "Bart van Pinksteren heeft een droom",
	"zEtQ0c2DCXU": "Melvin - Nederland",
	"6Sh3k-Bcdos": "The Cards - Suzy",
	"43YuS7BeInA": "Oboema - Riagg",
	"Ihd3pBrurLI": "De Peters - Kinderpindakaas",
	"XF-_Ft5TzAY": "Wolfgang en Günther - op het strand",
	"6iebOa879b0": "Johnny en Willie - Shoarmatent",
	"wZshFzIuldA": "Duiken",
	"bvIyrXuOsQk": "Diepte interview met Dicky Curtis",
	"UWFTzTKotxw": "Darts",
	"BsNdkMwtyK8": "Vla - The Cure",
	"Ym3YPsdXzlE": "De Dames - De Asielzoeker",
	"vZXxKkCZTX4": "Tony van Heemschut - Buitenlanders",
	"1bBQ36eMTGI": "Het Gelders Volksleger",
	"EQrRyL7MzM0": "De Norenhater",
	"Bdz34M-KCQY": "Tony van Heemschut - Live met band",
	"8eNVfT7A1Zc": "De Dierenwinkel - Gems",
	"-8VrWvJk8iA": "Buffie",
	"RWjMiyIZfE8": "Tennisdames in het Park",
	"7mL1Rud7Ys8": "Multilul - Geit",
	"K4r3srBJ7Ck": "Soccer dad - English subtitles",
	"eaneatejIPQ": "Oboema and José - English subtitles - Japan",
	"XX5ofPAqmuU": "Johnny en Willie - Poppenkast",
	"pTi5pMv6Ko4": "Raarrr",
	"r8QWhnRPdrA": "Ontluchten van de Balzak",
	"FDvTxpP1sN8": "Zalfman, Spoelbak",
	"DHUHOSqqiS0": "Eén Pak - Koekeloerus en Muizenmeisje",
	"zJ5MltqKhaQ": "De Lullo's - Manolo",
	"7jHnwMjzMpI": "Johnny en Willie - Kerstverhaal",
	"tVJBs4utxmk": "De Dierenwinkel - De Dierenfilm",
	"QFdYREs97uw": "Peter R. de Vries en Charlie da Silva",
	"fz4Z-OJwxgs": "Cor en Marius - de toendra, de taiga en de steppe",
	"bYZDJ5Y7wA4": "The Compound - Dromen van Jan Peter",
	"n7ipifSk4WE": "Prins Bernhard - Donald Duck",
	"5gYsLfYyHF8": "De Dienst - Schiphol",
	"lgfDyGZmeVE": "Oboema en José - Gierst",
	"sB745ZoCxNk": "Oboema en José - Nieuwjaar",
	"VgdTkNN1nVw": "Prins Bernhard - Panda 1",
	"SXGoALTfGL8": "Prostitutie",
	"x6jdDnyx3kk": "Wolfgang en Günther - Schnautzi der Wunderhund",
	"lGcPjpYZhoE": "Zuid Duitse humor",
	"KrIucEWhgks": "Oboema zoekt het even op",
	"YHJpMFLQinQ": "Oboema en José - Interview door Adriaan van Dis",
	"xaJ-pzXs1XE": "Wolfgang en Günther - Vergeven en vergeten",
	"u9CYq6oyHcU": "Henk Mul - Stunts voor op de camping",
	"DnTpQDwzdB4": "Oboema en José - Kunst",
	"lOfXGkXKKXY": "Dit is mijn club",
	"xu-d-4lAVE0": "Debiteuren Crediteuren - Feest",
	"A1og2uukcZc": "Treinenman",
	"1DnNRlTQ8jw": "Bowlingcentrum",
	"dXuVk7L_aBc": "Debiteuren Crediteuren - 1 april",
	"BE1m_WpCAt8": "Lullo's - Skybox",
	"QtrY7kk6knI": "De Skybox - Integriteit",
	"yJjMh-6SdKY": "Dit is mijn club - een ode aan Bep van Mokum",
	"17roMhz-mPo": "Kerst bij Theo (fragment)",
	"TSE-aV7whTs": "St. Hubertusberg - Koninginnedag",
	"F5abv3cUMcE": "Vrachtwagenchauffeur in een bar",
	"FuxAqs8aDTA": "Theo gaat een toespraak houden",
	"6XRIuq5q0a4": "De accountant geeft advies",
	"plsOzhwYECs": "Heb ik mijn lul misschien in het spelershome laten liggen?",
	"fPyEsMEGZpY": "Dicky Curtis",
	"oxWYQ-bTVOM": "De Dames - Ham and eggs",
	"ZrtbGcoccB4": "Lullo's - Kerstens, Dicky Curtis en Theo",
	"FCIhOnvmLbY": "Debiteuren Crediteuren - Op de camping (deel 2)",
	"WLwgrYeFFEs": "Debiteuren Crediteuren - Op de camping (deel 1)",
	"vEIoqa884rg": "Wolfgang en Günther - Neue Welle deel 1",
	"1NJudZuQ7FQ": "Debitoren Kreditoren",
	"3BfBbh-IrSw": "Debiteuren Crediteuren - Dat mag dus niet (Korfbal)",
	"v3Ys6AGerFw": "Vogels in het riet",
	"Z5OiFUZtJ88": "Lullo's - Bloopers",
	"CSpl6fgeKjQ": "Lullo's - Haar in mijn glas",
	"jN_oEu7GwSU": "Multilul - Bertje",
	"o9o8uhym8fk": "Multilul - Ik ben je naam effe kwijt",
	"nOYCCRffnbM": "De Dierenwinkel - Duitse Dieren",
	"VGdvhgLt1PM": "TechnoFax - Bunte Illustrierte",
	"YTn87MlbL2A": "Johnny en Willy - Burenruzie",
	"hZBHkJFcYII": "Debiteuren Crediteuren - Stiften",
	"gmEioot9u7M": "Debiteuren Crediteuren - Sinterklaas",
	"DoTuSvfGIG8": "Wiedergutmachungsschnitzel",
	"ZSrQ-_51nqM": "Inbouwcentrum",
	"w2G34_a05no": "Lullo's - Pizza",
	"Fo0xmeYn7IA": "De Barry Whites",
	"CUJDofKyZ_g": "Debiteuren Crediteuren - Bloopers",
	"zPJ8eDv-1N8": "Marokkaanse Bus",
	"qLpC5bJhNQE": "Leader",
	"IbCJsNjMbmM": "Theo legt het nog één keer uit.",
	"y4D-d9fXf3M": "Debitoren Kreditoren - De blooper versie",
	"EBKcSEdczkM": "Meneer de Vries komt een drukje doen",
	"cymAZ-HYvkQ": "Scheepskamelen",
	"CUmsUm0TwZo": "Voetbalvader",
	"QSSwn-RiVRE": "Gewoon geil",
	"61NorFSTUk4": "Heb jij gezegd dat ik een lul was?",
	"S5_p_TGS7tY": "Oboema en José - Japan",
	"FyFPTbD3yJg": "Oboema en José - Drank",
	"9rT5WDKq7vc": "Oboema Sesetokoe - De man die bakt",
	"5-3oNvJMYjQ": "Oboema in gesprek met drummer Rob Klerkx van Moke",
	"cSbE7yUCT_8": "Bèèèh"
}

const getEpisode = (id) => {
    return EPISODES[id];
}

const findEpisode = (search) => {
	const OUTPUT = [];
	for(const EPISODE of Object.entries(EPISODES)) {

	}
}

export {
	getEpisode
}