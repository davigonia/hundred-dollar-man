// Bildung questions for The Hundred Dollar Man game
const bildungQuestions = [
    {
        "question": "Which philosophical concept did Friedrich Nietzsche explore in 'Thus Spoke Zarathustra'?",
        "answers": ["The Übermensch (Superman)", "Categorical imperative"],
        "correct": 0,
        "explanation": "In 'Thus Spoke Zarathustra,' Nietzsche introduced the concept of the Übermensch or 'Superman' as an ideal higher type of human who has mastered self-overcoming and creates meaning in a world without inherent purpose."
    },
    {
        "question": "How did Goethe's 'Faust' reinterpret the traditional legend?",
        "answers": ["By portraying Faust's striving as ultimately redeemable", "By condemning intellectual curiosity as sinful"],
        "correct": 0,
        "explanation": "Goethe transformed the medieval Faust legend by portraying Faust's endless striving for knowledge and experience as ultimately redeemable, rather than damnable, reflecting Enlightenment values of human potential."
    },
    {
        "question": "What historical shift did Max Weber describe with his concept of 'disenchantment'?",
        "answers": ["The replacement of magical thinking with rational explanation", "The increasing role of religion in modern society"],
        "correct": 0,
        "explanation": "Weber's concept of 'disenchantment' (Entzauberung) describes the historical process in Western society where magical, mystical explanations of the world were gradually replaced by scientific, rational understanding through modernization."
    },
    {
        "question": "Which principle forms the foundation of Kant's moral philosophy?",
        "answers": ["The categorical imperative", "Utilitarianism"],
        "correct": 0,
        "explanation": "Kant's moral philosophy is founded on the categorical imperative, which states that one should act only according to that maxim by which you can at the same time will that it should become a universal law."
    },
    {
        "question": "What distinguishes Baroque music from Renaissance music?",
        "answers": ["Greater complexity and emotional expressiveness", "Simpler harmonies and religious purity"],
        "correct": 0,
        "explanation": "Baroque music (1600-1750) is characterized by greater complexity, emotional expressiveness, and ornate embellishments compared to Renaissance music, along with the development of opera and instrumental forms like the concerto."
    },
    {
        "question": "What was the significance of Copernicus's heliocentric model?",
        "answers": ["It displaced humans from the center of the universe", "It confirmed religious cosmology"],
        "correct": 0,
        "explanation": "Copernicus's heliocentric model, placing the sun rather than Earth at the center of the cosmos, initiated a profound shift in human self-understanding, displacing humanity from the center of creation and challenging religious cosmology."
    },
    {
        "question": "How did Adam Smith's 'invisible hand' concept influence economic thought?",
        "answers": ["It suggested markets self-regulate through individual self-interest", "It advocated for government control of markets"],
        "correct": 0,
        "explanation": "Smith's 'invisible hand' metaphor suggested that individuals pursuing their own self-interest in a free market would, as if guided by an invisible hand, promote the general welfare of society more effectively than through government intervention."
    },
    {
        "question": "What characterized the Enlightenment as an intellectual movement?",
        "answers": ["Emphasis on reason, science, and individual liberty", "Focus on religious authority and tradition"],
        "correct": 0,
        "explanation": "The Enlightenment (roughly 1715-1789) was characterized by an emphasis on reason, science, skepticism toward traditional religious authority, and the promotion of individual liberty, influencing political revolutions and modern democratic thought."
    },
    {
        "question": "What was the central argument of Simone de Beauvoir's 'The Second Sex'?",
        "answers": ["Women are made, not born", "Biological differences determine gender roles"],
        "correct": 0,
        "explanation": "In 'The Second Sex' (1949), de Beauvoir argued that 'one is not born, but rather becomes, a woman,' suggesting that female identity is socially constructed rather than biologically determined, laying groundwork for modern feminist theory."
    },
    {
        "question": "Which artistic movement emerged as a reaction against Enlightenment rationality?",
        "answers": ["Romanticism", "Cubism"],
        "correct": 0,
        "explanation": "Romanticism emerged in the late 18th century as a reaction against Enlightenment rationality, emphasizing emotion, individualism, imagination, and the sublimity of nature, influencing literature, art, music, and philosophy."
    },
    {
        "question": "What was the significance of Darwin's theory of evolution?",
        "answers": ["It provided a naturalistic explanation for biological diversity", "It confirmed religious accounts of creation"],
        "correct": 0,
        "explanation": "Darwin's theory of evolution by natural selection provided a naturalistic explanation for biological diversity and human origins, challenging religious creation accounts and fundamentally altering humanity's understanding of its place in nature."
    },
    {
        "question": "How did Freud's theories change our understanding of human behavior?",
        "answers": ["By proposing that unconscious forces drive much of human behavior", "By proving that rational thought controls all actions"],
        "correct": 0,
        "explanation": "Freud revolutionized understanding of human behavior by proposing that unconscious forces, including repressed desires and childhood experiences, drive much of human behavior, challenging the Enlightenment view of humans as primarily rational beings."
    },
    {
        "question": "What philosophical problem did Descartes address with 'Cogito, ergo sum'?",
        "answers": ["The possibility of radical doubt about existence", "The relationship between mind and body"],
        "correct": 0,
        "explanation": "With 'Cogito, ergo sum' ('I think, therefore I am'), Descartes addressed the philosophical problem of radical doubt, establishing that while one can doubt everything else, the very act of doubting proves the doubter's existence."
    },
    {
        "question": "What was the significance of Picasso's 'Les Demoiselles d'Avignon' in art history?",
        "answers": ["It helped launch Cubism and modern art", "It perfected Renaissance perspective techniques"],
        "correct": 0,
        "explanation": "Picasso's 'Les Demoiselles d'Avignon' (1907) was revolutionary in breaking with traditional perspective and representation, incorporating African mask influences, and helping launch Cubism and the development of modern art."
    },
    {
        "question": "How did Machiavelli's 'The Prince' differ from previous political philosophy?",
        "answers": ["It focused on practical politics rather than moral ideals", "It advocated for democratic governance"],
        "correct": 0,
        "explanation": "Machiavelli's 'The Prince' broke with previous political philosophy by focusing on practical politics rather than moral ideals, analyzing how power actually works rather than how it should work, and separating political effectiveness from ethical considerations."
    },
    {
        "question": "What concept did Hannah Arendt explore in her analysis of totalitarianism?",
        "answers": ["The banality of evil", "The necessity of strong leadership"],
        "correct": 0,
        "explanation": "In her analysis of totalitarianism, particularly in 'Eichmann in Jerusalem,' Arendt explored 'the banality of evil'—how ordinary people can commit atrocities through bureaucratic thoughtlessness rather than inherent monstrosity."
    },
    {
        "question": "How did Einstein's theory of relativity change our understanding of physics?",
        "answers": ["It showed that space and time are interconnected and relative", "It proved that Newton's laws were completely wrong"],
        "correct": 0,
        "explanation": "Einstein's theory of relativity revolutionized physics by showing that space and time are interconnected dimensions that can stretch or compress depending on motion and gravity, rather than being absolute as in Newtonian physics."
    },
    {
        "question": "What was the central thesis of Beauvoir's existentialist ethics?",
        "answers": ["Freedom requires acknowledging our responsibility to others", "Individual freedom is the only absolute value"],
        "correct": 0,
        "explanation": "Beauvoir's existentialist ethics centered on the thesis that authentic freedom requires acknowledging our responsibility to others and recognizing that our actions affect their freedom, rejecting both absolute individualism and deterministic systems."
    },
    {
        "question": "How did Bach's music exemplify Baroque compositional techniques?",
        "answers": ["Through complex counterpoint and harmonic structures", "Through simple melodies with minimal ornamentation"],
        "correct": 0,
        "explanation": "Bach's music exemplified Baroque compositional techniques through its complex counterpoint (multiple independent melodic lines), rich harmonic structures, ornate embellishments, and the perfect balance of mathematical precision with emotional expressiveness."
    },
    {
        "question": "What was the core idea of Plato's Theory of Forms?",
        "answers": ["That abstract forms represent perfect reality, while physical objects are imperfect copies", "That physical reality is all that exists"],
        "correct": 0,
        "explanation": "Plato's Theory of Forms proposed that the material world is merely a shadow of the true reality—a realm of perfect, eternal, and unchanging Forms or Ideas that can only be comprehended through philosophical reasoning rather than sensory perception."
    },
    {
        "question": "How did Rousseau's view of human nature differ from Hobbes'?",
        "answers": ["Rousseau believed humans are naturally good but corrupted by society", "Rousseau agreed with Hobbes that humans are naturally violent"],
        "correct": 0,
        "explanation": "Rousseau argued that humans in their natural state are inherently good and peaceful ('noble savages'), corrupted only by civilization and property, whereas Hobbes believed human life without society would be 'solitary, poor, nasty, brutish, and short.'"
    },
    {
        "question": "What revolutionary perspective did Kant introduce in his 'Copernican Revolution' in philosophy?",
        "answers": ["That the mind actively structures our experience of the world", "That all knowledge comes from sensory experience"],
        "correct": 0,
        "explanation": "Kant's 'Copernican Revolution' in philosophy inverted traditional epistemology by proposing that rather than our knowledge conforming to objects, objects must conform to our cognitive faculties—the mind actively structures our experience through innate categories of understanding."
    },
    {
        "question": "What did Marx mean by 'the alienation of labor'?",
        "answers": ["Workers becoming estranged from the products of their work and their own human nature", "Workers becoming more specialized in their skills"],
        "correct": 0,
        "explanation": "Marx's concept of 'alienation of labor' described how industrial capitalism separates workers from the products they create, the process of production, their human creative potential, and ultimately from other people—reducing human beings to commodities in the labor market."
    },
    {
        "question": "How did Impressionism challenge academic painting traditions?",
        "answers": ["By focusing on capturing momentary light effects rather than detailed realism", "By emphasizing geometric abstraction"],
        "correct": 0,
        "explanation": "Impressionism challenged academic painting traditions by rejecting studio-produced, carefully finished works in favor of outdoor painting that captured fleeting effects of light and atmosphere with visible brushstrokes, everyday subjects, and an emphasis on visual perception over idealization."
    },
    {
        "question": "What key insight did Virginia Woolf develop in her literary technique?",
        "answers": ["The stream of consciousness to represent inner psychological reality", "The use of detailed plot structures to advance narratives"],
        "correct": 0,
        "explanation": "Woolf developed the stream of consciousness technique to represent the flow of thoughts and feelings that constitute inner psychological reality, shifting emphasis from external plot to the subjective experience of time, memory, and perception in works like 'Mrs. Dalloway' and 'To the Lighthouse.'"
    },
    {
        "question": "What was Galileo's most significant contribution to the scientific method?",
        "answers": ["Emphasizing mathematical measurement and experimental verification", "Relying on Aristotelian logical deduction"],
        "correct": 0,
        "explanation": "Galileo's most significant contribution to the scientific method was his insistence on mathematical measurement and experimental verification of hypotheses rather than relying on philosophical reasoning alone, famously demonstrated in his experiments with falling bodies and inclined planes."
    },
    {
        "question": "How did Hegel's dialectical method conceptualize historical progress?",
        "answers": ["As a process of thesis, antithesis, and synthesis", "As a cyclical pattern of rise and decline"],
        "correct": 0,
        "explanation": "Hegel's dialectical method conceptualized historical progress as driven by the conflict between a thesis and its antithesis, resulting in a synthesis that preserves elements of both while transcending their limitations—a process he saw operating throughout human history, thought, and culture."
    },
    {
        "question": "What philosophical position did Sartre advance with his statement 'existence precedes essence'?",
        "answers": ["Humans have no predetermined nature but define themselves through choices", "Human nature is fixed at birth"],
        "correct": 0,
        "explanation": "With 'existence precedes essence,' Sartre advanced the existentialist position that humans have no predetermined purpose or nature but instead define themselves through their choices and actions, creating their own meaning in a universe without inherent purpose."
    },
    {
        "question": "How did Beethoven's work mark the transition from Classical to Romantic music?",
        "answers": ["By expanding emotional expressiveness while maintaining Classical forms", "By rejecting Classical structures entirely"],
        "correct": 0,
        "explanation": "Beethoven bridged Classical and Romantic periods by initially working within Classical forms while gradually expanding their emotional range, harmonic complexity, and personal expressiveness, particularly evident in his middle and late periods where innovation increasingly transcended conventional structures."
    },
    {
        "question": "What distinguishes tragedy as defined by Aristotle?",
        "answers": ["The fall of a noble character through a flaw, producing catharsis", "The triumph of good over evil"],
        "correct": 0,
        "explanation": "Aristotle defined tragedy as the imitation of an action involving the fall of a noble but flawed protagonist (hamartia), arousing pity and fear in the audience, and resulting in emotional purification or catharsis—a structure exemplified by Greek plays like 'Oedipus Rex.'"
    },
    {
        "question": "What was the central insight of Heisenberg's Uncertainty Principle?",
        "answers": ["Certain pairs of physical properties cannot be precisely measured simultaneously", "All physical measurements can be infinitely precise with proper equipment"],
        "correct": 0,
        "explanation": "Heisenberg's Uncertainty Principle revealed that at quantum levels, certain pairs of physical properties (like position and momentum) cannot be simultaneously measured with arbitrary precision—not due to technical limitations but as a fundamental feature of reality itself."
    },
    {
        "question": "How did Claude Lévi-Strauss apply structuralism to anthropology?",
        "answers": ["By identifying binary oppositions underlying cultural myths and practices", "By focusing on individual psychological motivations"],
        "correct": 0,
        "explanation": "Lévi-Strauss applied structuralism to anthropology by proposing that cultural myths, kinship systems, and practices across different societies are organized according to universal patterns of binary oppositions (raw/cooked, nature/culture) reflecting the structure of the human mind itself."
    },
    {
        "question": "What concept did John Locke introduce with his 'tabula rasa'?",
        "answers": ["That humans are born without innate ideas, gaining knowledge through experience", "That humans possess innate knowledge from birth"],
        "correct": 0,
        "explanation": "With his concept of 'tabula rasa' (blank slate), Locke proposed that humans are born without innate ideas and that all knowledge comes from sensory experience and reflection upon that experience—a foundation for empiricism that challenged Cartesian rationalism and influenced education theory."
    },
    {
        "question": "What was revolutionary about Stravinsky's 'The Rite of Spring'?",
        "answers": ["Its dissonant harmonies, complex rhythms, and primitive power", "Its return to traditional melodic structures"],
        "correct": 0,
        "explanation": "'The Rite of Spring' (1913) revolutionized music through its aggressive dissonance, pulsing asymmetrical rhythms, and jarring orchestration that evoked primitive ritual rather than refined emotion—causing a famous riot at its premiere and marking a decisive break with Romantic musical traditions."
    },
    {
        "question": "How did Marshall McLuhan's 'the medium is the message' change media theory?",
        "answers": ["By arguing that communication technologies themselves reshape society", "By focusing exclusively on content analysis"],
        "correct": 0,
        "explanation": "McLuhan's 'the medium is the message' transformed media theory by asserting that the form of a medium embeds itself in the message, creating a symbiotic relationship where the medium influences how the message is perceived and has broader effects on society than content alone."
    },
    {
        "question": "What was the significance of Gödel's Incompleteness Theorems in mathematics?",
        "answers": ["They proved that any consistent mathematical system is necessarily incomplete", "They demonstrated that all mathematical truths can be proven"],
        "correct": 0,
        "explanation": "Gödel's Incompleteness Theorems fundamentally limited mathematical ambition by proving that in any consistent formal mathematical system complex enough to include basic arithmetic, there will always exist true statements that cannot be proven within that system—challenging the completeness of mathematical knowledge."
    },
    {
        "question": "How did Spinoza's conception of God differ from traditional religious views?",
        "answers": ["He identified God with nature and natural laws", "He emphasized God's transcendence and separate existence"],
        "correct": 0,
        "explanation": "Spinoza radically departed from traditional theism by identifying God with nature (Deus sive Natura), seeing the divine not as a personal being who intervenes in the world but as the immanent, necessary substance and laws of the universe itself—a view that led to his excommunication from the Jewish community."
    },
    {
        "question": "What was distinctive about Joyce's 'Ulysses' as a modernist novel?",
        "answers": ["Its experimental techniques mapping a single day to Homer's epic", "Its straightforward chronological narrative"],
        "correct": 0,
        "explanation": "Joyce's 'Ulysses' epitomized literary modernism through its radical experimentation with narrative perspectives, stream of consciousness, parody of literary styles, and mythical method that mapped a single day in Dublin to Homer's epic—redefining the possibilities of the novel as a form."
    },
    {
        "question": "How did Schopenhauer characterize the fundamental nature of reality?",
        "answers": ["As blind, purposeless Will underlying all phenomena", "As a rational, benevolent order"],
        "correct": 0,
        "explanation": "Schopenhauer characterized the fundamental reality behind appearances as an irrational, purposeless cosmic Will—a blind striving force that manifests in all phenomena, generates endless suffering through unfulfilled desire, and can be temporarily escaped only through aesthetic contemplation or ascetic renunciation."
    },
    {
        "question": "What philosophical tradition did Wittgenstein challenge with his later work?",
        "answers": ["The view that language directly represents reality", "The idea that philosophy should be practical"],
        "correct": 0,
        "explanation": "In his later work, particularly 'Philosophical Investigations,' Wittgenstein challenged the view that language directly represents reality (which he himself had advocated in his earlier work), instead arguing that meaning emerges from use in social 'language games.'"
    }
]; 