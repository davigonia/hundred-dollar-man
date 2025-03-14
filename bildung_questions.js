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
        "question": "What philosophical tradition did Wittgenstein challenge with his later work?",
        "answers": ["The view that language directly represents reality", "The idea that philosophy should be practical"],
        "correct": 0,
        "explanation": "In his later work, particularly 'Philosophical Investigations,' Wittgenstein challenged the view that language directly represents reality (which he himself had advocated in his earlier work), instead arguing that meaning emerges from use in social 'language games.'"
    }
]; 