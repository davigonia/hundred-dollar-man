// Humanities questions for The Hundred Dollar Man game
const humanitiesQuestions = [
    {
        "question": "What is the basic principle of economic exchange?",
        "answers": ["Trading value for value", "Keeping all resources for yourself"],
        "correct": 0
    },
    {
        "question": "How does bartering differ from using currency?",
        "answers": ["It requires a direct exchange of goods", "It always involves precious metals"],
        "correct": 0
    },
    {
        "question": "Why do farmers sell their produce at markets?",
        "answers": ["To convert goods into currency for other needs", "To decrease the amount of food available"],
        "correct": 0
    },
    {
        "question": "What function does money serve in an economy?",
        "answers": ["Medium of exchange and store of value", "Creating wealth from nothing"],
        "correct": 0
    },
    {
        "question": "Why is employment essential in a monetary economy?",
        "answers": ["It provides income to participate in the economy", "It prevents people from enjoying leisure"],
        "correct": 0
    },
    {
        "question": "Why was the Great Wall of China built?",
        "answers": ["To defend against northern invasions", "To create a tourist attraction"],
        "correct": 0
    },
    {
        "question": "What made Queen Elizabeth I a significant historical ruler?",
        "answers": ["Her long reign during England's Golden Age", "Her invention of the printing press"],
        "correct": 0
    },
    {
        "question": "What was Christopher Columbus seeking when he sailed west?",
        "answers": ["A trade route to Asia", "The lost city of Atlantis"],
        "correct": 0
    },
    {
        "question": "Why do many ancient cultures have flood myths?",
        "answers": ["They may reflect actual catastrophic flooding events", "They were copied from modern stories"],
        "correct": 0
    },
    {
        "question": "What was the purpose of Hammurabi's Code?",
        "answers": ["To establish written laws and punishments", "To teach people how to farm"],
        "correct": 0
    },
    {
        "question": "How did the Roman road system impact their empire?",
        "answers": ["It enabled rapid military movement and trade", "It prevented people from traveling"],
        "correct": 0
    },
    {
        "question": "Why did ancient cultures create myths about natural phenomena?",
        "answers": ["To explain events they couldn't scientifically understand", "To deliberately mislead people"],
        "correct": 0
    },
    {
        "question": "What role does prayer serve in many religions?",
        "answers": ["Communication with divine beings", "Physical exercise and fitness"],
        "correct": 0
    },
    {
        "question": "What did the construction of Angkor Wat demonstrate about Khmer civilization?",
        "answers": ["Their architectural skill and religious devotion", "Their preference for small buildings"],
        "correct": 0
    },
    {
        "question": "Why were religious texts written and preserved?",
        "answers": ["To maintain and spread religious teachings", "To keep secrets from followers"],
        "correct": 0
    },
    {
        "question": "What purpose do creation myths serve in cultures?",
        "answers": ["They explain origins and establish worldview", "They provide scientific explanations"],
        "correct": 0
    },
    {
        "question": "What is the significance of candles in religious ceremonies?",
        "answers": ["They symbolize light, purity, or divine presence", "They are the only source of heat"],
        "correct": 0
    },
    {
        "question": "Why is the Ganges River sacred in Hinduism?",
        "answers": ["It's believed to purify sins and aid salvation", "It's the shortest river in India"],
        "correct": 0
    },
    {
        "question": "What purpose does religious music serve in worship?",
        "answers": ["To express devotion and create community", "To drown out conversation"],
        "correct": 0
    },
    {
        "question": "Why were the Egyptian pyramids built?",
        "answers": ["As tombs to ensure pharaohs' afterlife journey", "As grain storage facilities"],
        "correct": 0
    },
    {
        "question": "What was the purpose of ancient Greek temples?",
        "answers": ["To house deities and serve as worship centers", "To provide housing for everyone"],
        "correct": 0
    },
    {
        "question": "How do religious practices influence daily life?",
        "answers": ["They provide moral frameworks and rituals", "They prevent scientific progress"],
        "correct": 0
    },
    {
        "question": "What is the purpose of meditation in Buddhism?",
        "answers": ["To develop mindfulness and insight", "To fall asleep more quickly"],
        "correct": 0
    },
    {
        "question": "Why is incense used in many religious ceremonies?",
        "answers": ["To create sacred atmosphere and symbolize prayers", "To cover up unpleasant smells"],
        "correct": 0
    },
    {
        "question": "What is the significance of circumambulation in religious practice?",
        "answers": ["Showing reverence by moving around a sacred object", "Getting physical exercise during worship"],
        "correct": 0
    },
    {
        "question": "How do Zen gardens function in Japanese Buddhism?",
        "answers": ["They aid meditation and represent larger landscapes", "They provide vegetables for monks"],
        "correct": 0
    },
    {
        "question": "What is the purpose of prayer beads in various religions?",
        "answers": ["To count prayers and maintain focus", "To serve as jewelry during ceremonies"],
        "correct": 0
    },
    {
        "question": "Why do some religious groups chant together?",
        "answers": ["To create unity and focus the mind", "To compete with other religious groups"],
        "correct": 0
    },
    {
        "question": "What is the cultural purpose of smudging with sage?",
        "answers": ["Spiritual cleansing and purification", "Flavoring food before eating"],
        "correct": 0
    },
    {
        "question": "Why are mountains often considered sacred spaces?",
        "answers": ["Their height symbolizes closeness to the heavens", "They are easy locations to access"],
        "correct": 0
    },
    {
        "question": "What is the significance of moon ceremonies in some cultures?",
        "answers": ["Connecting with natural cycles and energies", "Predicting the weather accurately"],
        "correct": 0
    },
    {
        "question": "How does firelight create psychological comfort?",
        "answers": ["It provides warmth and triggers relaxation responses", "It increases alertness and anxiety"],
        "correct": 0
    },
    {
        "question": "What literary purpose do hero myths serve?",
        "answers": ["They embody cultural values and inspire courage", "They document historical events accurately"],
        "correct": 0
    },
    {
        "question": "Why did ancient cultures create constellations and star myths?",
        "answers": ["To navigate, track seasons, and explain the cosmos", "To confuse other civilizations"],
        "correct": 0
    },
    {
        "question": "What do mythological creatures often symbolize?",
        "answers": ["Human qualities, fears, or natural forces", "Actual animals that went extinct"],
        "correct": 0
    },
    {
        "question": "Why did the ancient Greeks create the myth of Helios and his chariot?",
        "answers": ["To explain the sun's movement across the sky", "To design better transportation"],
        "correct": 0
    },
    {
        "question": "What is the central question of ethics?",
        "answers": ["How should people treat one another", "How to become wealthy quickly"],
        "correct": 0
    },
    {
        "question": "What does self-reflection contribute to personal growth?",
        "answers": ["Understanding of one's motivations and behaviors", "Avoiding all social interaction"],
        "correct": 0
    },
    {
        "question": "What was Aristotle exploring when he wrote about ethics?",
        "answers": ["How to live a virtuous and fulfilled life", "How to avoid all responsibilities"],
        "correct": 0
    },
    {
        "question": "What makes philosophical questions significant?",
        "answers": ["They examine fundamental aspects of existence", "They have simple, factual answers"],
        "correct": 0
    },
    {
        "question": "What is the purpose of cultural festivals?",
        "answers": ["To celebrate traditions and strengthen community", "To exclude outsiders from participating"],
        "correct": 0
    },
    {
        "question": "How does experiencing cuisine from another culture benefit us?",
        "answers": ["It broadens understanding of different traditions", "It proves our culture's food is superior"],
        "correct": 0
    },
    {
        "question": "Why is oral storytelling important in many cultures?",
        "answers": ["It preserves history and values across generations", "It prevents the need for writing"],
        "correct": 0
    },
    {
        "question": "What does a national flag typically represent?",
        "answers": ["Cultural identity, history, and values", "Military strength only"],
        "correct": 0
    },
    {
        "question": "How does traditional architecture reflect culture?",
        "answers": ["It adapts to environment and expresses cultural values", "It copies designs from other cultures"],
        "correct": 0
    },
    {
        "question": "What economic concept explains shortages?",
        "answers": ["Demand exceeding supply", "Prices being too high"],
        "correct": 0
    },
    {
        "question": "What psychological principle explains gratitude when receiving gifts?",
        "answers": ["Recognition of others' thoughtfulness", "Expectation of receiving more gifts"],
        "correct": 0
    },
    {
        "question": "What causes the fight-or-flight response during danger?",
        "answers": ["Adrenaline release preparing for action", "Logical analysis of the situation"],
        "correct": 0
    },
    {
        "question": "What psychological process occurs during grief?",
        "answers": ["Emotional processing of loss and change", "Immediate happiness and acceptance"],
        "correct": 0
    },
    {
        "question": "What motivates children's play behavior?",
        "answers": ["Natural drive to learn and develop skills", "Desire to avoid serious activities"],
        "correct": 0
    },
    {
        "question": "What drives altruistic behavior in humans?",
        "answers": ["Empathy and social connection", "Desire for personal gain only"],
        "correct": 0
    },
    {
        "question": "What happens psychologically when we experience frustration?",
        "answers": ["Emotional response to blocked goals", "Immediate problem-solving success"],
        "correct": 0
    },
    {
        "question": "What psychological need does applause fulfill?",
        "answers": ["Social validation and recognition", "The need to make noise"],
        "correct": 0
    },
    {
        "question": "Why was the Great Pyramid of Giza built?",
        "answers": ["As a tomb for Pharaoh Khufu", "As an astronomical observatory"],
        "correct": 0
    },
    {
        "question": "What was significant about Mesopotamian city-states?",
        "answers": ["They were the first urban civilizations", "They had no form of government"],
        "correct": 0
    },
    {
        "question": "What motivated the Age of Exploration in the 15th century?",
        "answers": ["Trade routes, resources, and spreading religion", "Tourism and leisure travel"],
        "correct": 0
    },
    {
        "question": "Why is the Battle of Hastings (1066) historically important?",
        "answers": ["It led to Norman rule of England", "It ended all warfare in Europe"],
        "correct": 0
    },
    {
        "question": "What was Cleopatra's strategic approach to ruling Egypt?",
        "answers": ["Forming alliances with Roman leaders", "Isolating Egypt from all other nations"],
        "correct": 0
    },
    {
        "question": "How did the Great Fire of London (1666) change the city?",
        "answers": ["It led to improved building regulations", "It caused the city to be abandoned"],
        "correct": 0
    },
    {
        "question": "What was revolutionary about the invention of the wheel?",
        "answers": ["It transformed transportation and machinery", "It made agriculture impossible"],
        "correct": 0
    },
    {
        "question": "What concept is central to Adam Smith's economic theory?",
        "answers": ["The invisible hand of the market", "Complete government control of industry"],
        "correct": 0
    },
    {
        "question": "How did the printing press change European society?",
        "answers": ["It democratized access to knowledge", "It restricted book ownership to the elite"],
        "correct": 0
    },
    {
        "question": "What was the significance of the Silk Road in history?",
        "answers": ["It facilitated cultural exchange between East and West", "It prevented contact between civilizations"],
        "correct": 0
    },
    {
        "question": "What philosophical concept did Socrates emphasize in his teaching?",
        "answers": ["Self-knowledge and questioning assumptions", "Accumulating material wealth"],
        "correct": 0
    },
    {
        "question": "How did the Industrial Revolution change society?",
        "answers": ["It shifted population from rural to urban areas", "It eliminated the need for human labor"],
        "correct": 0
    },
    {
        "question": "What was a key principle of Confucianism?",
        "answers": ["Social harmony through proper relationships", "Individual achievement above community needs"],
        "correct": 0
    },
    {
        "question": "Why was the development of writing systems significant?",
        "answers": ["It allowed knowledge to be preserved and transmitted", "It made verbal communication unnecessary"],
        "correct": 0
    },
    {
        "question": "What characterized the Renaissance as a historical period?",
        "answers": ["Revival of classical learning and artistic innovation", "Rejection of all ancient knowledge"],
        "correct": 0
    },
    {
        "question": "How did the concept of democracy develop in ancient Athens?",
        "answers": ["Through citizen participation in governance", "Through rule by hereditary kings"],
        "correct": 1
    }
]; 