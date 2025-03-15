// Arts questions for The Hundred Dollar Man game
const artsQuestions = [
    {
        "question": "What technique makes the Mona Lisa's smile appear mysterious?",
        "answers": ["Leonardo's sfumato blending technique", "The subject's direct eye contact"],
        "correct": 0
    },
    {
        "question": "Why is Michelangelo's David considered a Renaissance masterpiece?",
        "answers": ["It captures ideal human proportions and emotion", "It was the first marble statue ever created"],
        "correct": 0
    },
    {
        "question": "What is Rembrandt best known for in his paintings?",
        "answers": ["Dramatic use of light and shadow", "Bright, vibrant color palettes"],
        "correct": 0
    },
    {
        "question": "What makes landscape photography powerful as an art form?",
        "answers": ["Capturing fleeting moments of natural beauty", "Using only black and white film"],
        "correct": 0
    },
    {
        "question": "How does black and white photography create visual impact?",
        "answers": ["By emphasizing contrast, form and texture", "By making all subjects appear older"],
        "correct": 0
    },
    {
        "question": "Why is architectural photography important?",
        "answers": ["It documents cultural heritage and design", "It makes buildings appear larger"],
        "correct": 0
    },
    {
        "question": "What element makes portrait photography emotionally powerful?",
        "answers": ["Capturing genuine expression and connection", "Using only professional models"],
        "correct": 0
    },
    {
        "question": "How does rhythm affect how we experience music?",
        "answers": ["It creates patterns that engage our bodies", "It determines if music is happy or sad"],
        "correct": 0
    },
    {
        "question": "What quality makes piano music sound delicate or gentle?",
        "answers": ["Soft dynamics and legato phrasing", "Fast tempo and high notes"],
        "correct": 0
    },
    {
        "question": "What is the purpose of percussion in ensemble music?",
        "answers": ["To provide rhythm and textural contrast", "To make the music quieter"],
        "correct": 0
    },
    {
        "question": "Why do certain folk songs endure for generations?",
        "answers": ["They express universal emotions and cultural identity", "They use complex musical techniques"],
        "correct": 0
    },
    {
        "question": "How do composers translate visual art into music?",
        "answers": ["By creating sounds that evoke similar emotions", "By literally spelling the painting's name in notes"],
        "correct": 0
    },
    {
        "question": "What does concert photography aim to capture?",
        "answers": ["The energy and emotion of live performance", "The technical equipment being used"],
        "correct": 0
    },
    {
        "question": "Why did Renaissance artists paint religious scenes on church ceilings?",
        "answers": ["To teach biblical stories to the illiterate", "To hide the artwork from invaders"],
        "correct": 0
    },
    {
        "question": "How can you identify an authentic Renaissance painting?",
        "answers": ["Techniques like perspective and realistic human forms", "Bright neon colors and abstract shapes"],
        "correct": 0
    },
    {
        "question": "What technique did Pointillist artists like Seurat use?",
        "answers": ["Small dots of color that blend visually", "Long, continuous brushstrokes"],
        "correct": 0
    },
    {
        "question": "What purpose did historical battle paintings serve?",
        "answers": ["To document events and glorify victories", "To promote peace between nations"],
        "correct": 0
    },
    {
        "question": "Why did ancient Greeks create sculptures of their gods?",
        "answers": ["To honor deities and display ideal beauty", "To practice their carving techniques"],
        "correct": 0
    },
    {
        "question": "When would an artist choose a fine-tipped brush?",
        "answers": ["For painting intricate details", "For covering large background areas"],
        "correct": 0
    },
    {
        "question": "What makes charcoal a popular drawing medium?",
        "answers": ["Its ability to create rich tones and be blended", "Its permanent, waterproof quality"],
        "correct": 0
    },
    {
        "question": "How does a potter's wheel help in creating ceramics?",
        "answers": ["It allows for symmetrical shaping while clay spins", "It automatically decorates the pottery"],
        "correct": 0
    },
    {
        "question": "Why is pencil preferred for preliminary sketches?",
        "answers": ["It can be easily erased and adjusted", "It never fades over time"],
        "correct": 0
    },
    {
        "question": "What is the purpose of mixing colors on a palette?",
        "answers": ["To create custom hues and consistent color", "To use less paint on the canvas"],
        "correct": 0
    },
    {
        "question": "What is the main technique in woodcarving?",
        "answers": ["Removing material to reveal a form", "Adding pieces to build up a shape"],
        "correct": 0
    },
    {
        "question": "Why do painters apply multiple layers of paint?",
        "answers": ["To build depth, texture and richness", "To make the painting dry faster"],
        "correct": 0
    },
    {
        "question": "How does percussion create excitement in music?",
        "answers": ["Through dynamic rhythms and patterns", "By playing as quietly as possible"],
        "correct": 0
    },
    {
        "question": "What principle guides architectural design of skyscrapers?",
        "answers": ["Balance of form and function", "Making buildings as short as possible"],
        "correct": 0
    },
    {
        "question": "Why are traditional textiles important cultural artifacts?",
        "answers": ["They preserve patterns and techniques of a culture", "They are always made of synthetic materials"],
        "correct": 0
    },
    {
        "question": "What makes Van Gogh's 'Starry Night' distinctive?",
        "answers": ["Swirling brushstrokes creating movement", "Photorealistic depiction of stars"],
        "correct": 0
    },
    {
        "question": "How did Cubism change how artists depicted subjects?",
        "answers": ["By showing multiple perspectives simultaneously", "By making everything perfectly proportional"],
        "correct": 0
    },
    {
        "question": "Why are prehistoric cave paintings significant?",
        "answers": ["They show early human creative expression", "They were created using modern paint"],
        "correct": 0
    },
    {
        "question": "What was the purpose of royal portraits in history?",
        "answers": ["To display power and authority", "To create accurate medical records"],
        "correct": 0
    },
    {
        "question": "What characterized Renaissance art compared to Medieval art?",
        "answers": ["Realistic perspective and human anatomy", "Simple, flat figures with gold backgrounds"],
        "correct": 0
    },
    {
        "question": "Why did Monet paint the same scenes at different times?",
        "answers": ["To capture changing light and atmosphere", "Because he forgot he had already painted them"],
        "correct": 0
    },
    {
        "question": "What was unique about Georgia O'Keeffe's flower paintings?",
        "answers": ["Their large scale and abstract qualities", "Their scientifically accurate botanical details"],
        "correct": 0
    },
    {
        "question": "What statement was Andy Warhol making with his repeated images?",
        "answers": ["Commentary on mass production and celebrity", "That he couldn't think of new subjects"],
        "correct": 0
    },
    {
        "question": "What makes Japanese woodblock prints distinctive?",
        "answers": ["Bold outlines and stylized natural elements", "Photorealistic detail and shading"],
        "correct": 0
    },
    {
        "question": "What properties make chalk useful for preliminary sketches?",
        "answers": ["It's easily blended and erased", "It's permanent and waterproof"],
        "correct": 0
    },
    {
        "question": "Why might an artist choose ink for drawing?",
        "answers": ["For bold, permanent lines with high contrast", "For soft, subtle shading effects"],
        "correct": 0
    },
    {
        "question": "What technique is used to prepare clay for pottery?",
        "answers": ["Wedging to remove air bubbles", "Freezing to increase hardness"],
        "correct": 0
    },
    {
        "question": "Why would a painter use a rag while painting?",
        "answers": ["To create texture or remove excess paint", "To completely erase mistakes"],
        "correct": 0
    },
    {
        "question": "What gives a flute its characteristic sound?",
        "answers": ["Air vibrating across an opening", "Strings being plucked inside"],
        "correct": 0
    },
    {
        "question": "Why do traditional pottery designs vary between cultures?",
        "answers": ["They reflect local materials and cultural symbolism", "They are randomly created without meaning"],
        "correct": 0
    },
    {
        "question": "What engineering principle makes arch bridges strong?",
        "answers": ["Distribution of weight along the curve", "Using as little material as possible"],
        "correct": 0
    },
    {
        "question": "When would an artist choose a soft-bristled brush?",
        "answers": ["For smooth blending and delicate details", "For creating rough textures"],
        "correct": 0
    },
    {
        "question": "What color theory principle explains why red and green create contrast?",
        "answers": ["They are complementary colors on the color wheel", "They are the same color in different shades"],
        "correct": 0
    },
    {
        "question": "Why is charcoal popular for figure drawing?",
        "answers": ["It creates rich tones and expressive lines", "It never smudges or blends"],
        "correct": 0
    },
    {
        "question": "What property makes clay suitable for pottery?",
        "answers": ["Plasticity when wet and hardness when fired", "Resistance to being shaped by hand"],
        "correct": 0
    },
    {
        "question": "What is the primary tool of a stone sculptor?",
        "answers": ["Chisels of various sizes", "Paintbrushes and palette knives"],
        "correct": 0
    },
    {
        "question": "How does adding water affect acrylic paint?",
        "answers": ["Makes it more transparent and fluid", "Makes it thicker and more opaque"],
        "correct": 0
    },
    {
        "question": "What elements make music evoke happiness?",
        "answers": ["Major keys and upbeat tempos", "Minor keys and slow tempos"],
        "correct": 0
    },
    {
        "question": "How do dancers communicate narrative without words?",
        "answers": ["Through movement, expression and choreography", "By speaking quietly while dancing"],
        "correct": 0
    },
    {
        "question": "What makes public sculpture impactful in urban spaces?",
        "answers": ["Scale and interaction with surroundings", "Being as small and hidden as possible"],
        "correct": 0
    },
    {
        "question": "How do actors create believable characters?",
        "answers": ["Through emotional connection and physical embodiment", "By always playing themselves"],
        "correct": 0
    },
    {
        "question": "What is the cultural significance of ceremonial masks?",
        "answers": ["They represent spirits or transform the wearer", "They are purely decorative objects"],
        "correct": 0
    },
    {
        "question": "What makes quilting both artistic and functional?",
        "answers": ["Combines design elements with practical warmth", "Uses only synthetic modern materials"],
        "correct": 0
    },
    {
        "question": "How do landscape painters create a sense of tranquility?",
        "answers": ["Through harmonious composition and soft colors", "By including as many details as possible"],
        "correct": 0
    },
    {
        "question": "What art movement did Salvador Dalí belong to?",
        "answers": ["Surrealism", "Impressionism"],
        "correct": 0
    },
    {
        "question": "What distinguishes Baroque music from Renaissance music?",
        "answers": ["More complex harmonies and ornamentation", "Simpler melodies and fewer instruments"],
        "correct": 0
    },
    {
        "question": "Why is the Bauhaus movement significant in design history?",
        "answers": ["It united art with functional design and industry", "It rejected all modern technology"],
        "correct": 0
    },
    {
        "question": "What technique gives stained glass windows their color?",
        "answers": ["Metal oxides added during glass creation", "Paint applied to clear glass after installation"],
        "correct": 0
    },
    {
        "question": "How did jazz influence other music genres?",
        "answers": ["Through improvisation and syncopated rhythms", "By eliminating all traditional structures"],
        "correct": 0
    },
    {
        "question": "What makes film an art form distinct from photography?",
        "answers": ["The addition of time, movement and sound", "The use of digital rather than analog technology"],
        "correct": 0
    },
    {
        "question": "Why is negative space important in visual composition?",
        "answers": ["It creates balance and emphasizes the subject", "It allows artists to use less paint or materials"],
        "correct": 0
    },
    {
        "question": "What characterized Art Nouveau as a design movement?",
        "answers": ["Organic forms inspired by nature", "Strict geometric patterns and symmetry"],
        "correct": 1
    },
    {
        "question": "How does theater differ from film as a performance medium?",
        "answers": ["Live interaction between performers and audience", "Ability to show multiple locations easily"],
        "correct": 0
    }
]; 