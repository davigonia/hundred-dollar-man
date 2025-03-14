// Science questions for The Hundred Dollar Man game
const scienceQuestions = [
    {
        "question": "Why does a kite fall back to the ground when the wind stops?",
        "answers": ["Gravity pulls it down", "Air resistance slows it down"],
        "correct": 0
    },
    {
        "question": "What happens to a toy car when you push it down a ramp?",
        "answers": ["It speeds up due to gravity", "It maintains constant speed"],
        "correct": 0
    },
    {
        "question": "Why can you see your face in a mirror?",
        "answers": ["Light reflects off the mirror", "The mirror creates an image"],
        "correct": 0
    },
    {
        "question": "If you drop a feather and a rock at the same time, why does the rock hit the ground first?",
        "answers": ["Air resistance affects the feather more", "The rock has more mass"],
        "correct": 0
    },
    {
        "question": "What makes a shadow appear on the wall when you stand in front of a lamp?",
        "answers": ["Your body blocks the light", "The wall absorbs the darkness"],
        "correct": 0
    },
    {
        "question": "Why does a ball roll farther on a smooth floor than a rough one?",
        "answers": ["Less friction on the smooth surface", "The ball bounces more on smooth floors"],
        "correct": 0
    },
    {
        "question": "When you turn off a lamp, why does the room get dark?",
        "answers": ["The light source stops emitting photons", "The darkness enters the room"],
        "correct": 0
    },
    {
        "question": "What happens to ice when you leave it in the sun?",
        "answers": ["It absorbs heat and melts", "It evaporates directly to gas"],
        "correct": 1
    },
    {
        "question": "Why does a puddle disappear on a hot day?",
        "answers": ["The water molecules become gas", "The ground absorbs all the water"],
        "correct": 0
    },
    {
        "question": "When you blow air into a balloon, what happens inside?",
        "answers": ["Air pressure increases", "The rubber stretches thinner"],
        "correct": 0
    },
    {
        "question": "What makes bubbles when you mix soap and water?",
        "answers": ["Soap molecules trap air", "Water molecules become round"],
        "correct": 0
    },
    {
        "question": "Why does a candle get shorter when it burns?",
        "answers": ["The wax turns into gas and heat", "The flame pushes the wax down"],
        "correct": 0
    },
    {
        "question": "What happens to salt when you stir it into a glass of water?",
        "answers": ["It dissolves into ions", "It breaks into smaller pieces"],
        "correct": 0
    },
    {
        "question": "Why does steam rise from a pot of hot water?",
        "answers": ["Hot water vapor is less dense than air", "The pot pushes the steam upward"],
        "correct": 0
    },
    {
        "question": "What keeps the Earth spinning around the sun?",
        "answers": ["Gravitational force", "Magnetic attraction"],
        "correct": 0
    },
    {
        "question": "Why do stars seem to twinkle when you look at them?",
        "answers": ["Earth's atmosphere distorts the light", "Stars pulse with energy"],
        "correct": 0
    },
    {
        "question": "What makes the moon glow at night?",
        "answers": ["It reflects sunlight", "It produces its own light"],
        "correct": 0
    },
    {
        "question": "Why does the Earth have day and night?",
        "answers": ["It rotates on its axis", "The sun moves around it"],
        "correct": 0
    },
    {
        "question": "What happens to the moon's shape when you watch it over many nights?",
        "answers": ["We see different portions illuminated by the sun", "The moon physically changes shape"],
        "correct": 0
    },
    {
        "question": "Why can you see planets in the sky with a telescope?",
        "answers": ["They reflect sunlight", "They emit their own light like stars"],
        "correct": 0
    },
    {
        "question": "Why does a swing slow down after you stop pushing it?",
        "answers": ["Friction and air resistance", "Gravity pulls it to a stop"],
        "correct": 0
    },
    {
        "question": "What happens when you throw a ball straight up in the air?",
        "answers": ["Gravity slows it down and brings it back", "Air pressure pushes it back down"],
        "correct": 0
    },
    {
        "question": "Why do you see colors when sunlight hits a prism?",
        "answers": ["Different wavelengths bend at different angles", "The prism adds color to white light"],
        "correct": 0
    },
    {
        "question": "What makes a bike move forward when you pedal?",
        "answers": ["Force transfers through the chain to the wheels", "The ground moves backward"],
        "correct": 0
    },
    {
        "question": "Why does a heavy box feel harder to lift than a light one?",
        "answers": ["It has more mass affected by gravity", "It has more volume"],
        "correct": 0
    },
    {
        "question": "What happens to light when it goes through a glass of water?",
        "answers": ["It refracts or bends", "It slows down permanently"],
        "correct": 0
    },
    {
        "question": "Why does a car need fuel to keep going?",
        "answers": ["Fuel provides chemical energy for motion", "Fuel reduces friction in the engine"],
        "correct": 0
    },
    {
        "question": "What happens to butter when you put it in a hot pan?",
        "answers": ["It changes from solid to liquid", "It releases stored energy"],
        "correct": 0
    },
    {
        "question": "Why does rain fall from clouds?",
        "answers": ["Water droplets become too heavy to stay suspended", "Clouds become too cold to hold water"],
        "correct": 0
    },
    {
        "question": "What happens when you mix oil and water?",
        "answers": ["They separate into layers", "They form a new compound"],
        "correct": 0
    },
    {
        "question": "Why do leaves blow around on a windy day?",
        "answers": ["Air molecules push against them", "Leaves are attracted to moving air"],
        "correct": 0
    },
    {
        "question": "What makes a rock smooth when you find it in a river?",
        "answers": ["Erosion from water and other rocks", "Chemical breakdown from minerals"],
        "correct": 0
    },
    {
        "question": "Why does snow form on a cold winter day?",
        "answers": ["Water vapor freezes in the atmosphere", "Rain freezes as it falls"],
        "correct": 0
    },
    {
        "question": "What happens when the sun heats the ocean?",
        "answers": ["Water evaporates into the atmosphere", "Salt content increases"],
        "correct": 0
    },
    {
        "question": "Why do clouds turn dark before a storm?",
        "answers": ["They contain more water droplets", "They block more sunlight"],
        "correct": 1
    },
    {
        "question": "What makes dirt hard when it dries after rain?",
        "answers": ["Water between soil particles evaporates", "Minerals in the soil crystallize"],
        "correct": 0
    },
    {
        "question": "Why does lightning flash during a thunderstorm?",
        "answers": ["Electrical discharge between clouds or ground", "Sunlight reflecting off raindrops"],
        "correct": 0
    },
    {
        "question": "What happens to a river when it rains a lot?",
        "answers": ["Water volume and flow rate increase", "Water temperature rises"],
        "correct": 0
    },
    {
        "question": "Why do mountains form on Earth?",
        "answers": ["Tectonic plates collide and push rock upward", "Erosion carves them from flat land"],
        "correct": 0
    },
    {
        "question": "What causes a valley to form between hills?",
        "answers": ["Erosion from water or ice", "Wind pushing the land down"],
        "correct": 0
    },
    {
        "question": "Why does the ocean have waves?",
        "answers": ["Wind transfers energy to the water surface", "The moon's gravity pulls the water up"],
        "correct": 0
    },
    {
        "question": "What happens when a river meets the ocean?",
        "answers": ["Freshwater mixes with saltwater", "The river stops flowing completely"],
        "correct": 0
    },
    {
        "question": "Why do deserts have little rainfall?",
        "answers": ["Geographic location and air circulation patterns", "The sand absorbs all moisture"],
        "correct": 0
    },
    {
        "question": "What is the difference between weather and climate?",
        "answers": ["Weather is short-term, climate is long-term pattern", "Weather affects small areas, climate affects continents"],
        "correct": 0
    },
    {
        "question": "How do islands form in the ocean?",
        "answers": ["Volcanic activity or coral reef growth", "Pieces of continent breaking off"],
        "correct": 0
    },
    {
        "question": "What causes earthquakes?",
        "answers": ["Sudden movement of tectonic plates", "Underground explosions of gas"],
        "correct": 0
    },
    {
        "question": "Why do different regions have different types of vegetation?",
        "answers": ["Climate, soil type, and rainfall patterns", "Random distribution of plant seeds"],
        "correct": 0
    },
    {
        "question": "How does sand form at beaches?",
        "answers": ["Rocks and shells break down over time", "Ocean deposits minerals on the shore"],
        "correct": 0
    },
    {
        "question": "Why does a wet shirt dry faster in the sun than in shade?",
        "answers": ["The sun provides more energy for evaporation", "Sunlight pulls water molecules away"],
        "correct": 0
    },
    {
        "question": "What happens inside a balloon when it expands?",
        "answers": ["Air molecules push against the walls", "The rubber creates more space"],
        "correct": 0
    },
    {
        "question": "Why does vinegar and baking soda create a fizzing reaction?",
        "answers": ["They form carbon dioxide gas", "They release stored heat energy"],
        "correct": 0
    },
    {
        "question": "What happens to snow in spring?",
        "answers": ["It absorbs heat and melts", "It compresses into the ground"],
        "correct": 0
    },
    {
        "question": "Why does a metal spoon feel colder than a wooden spoon at room temperature?",
        "answers": ["Metal conducts heat away from your hand faster", "Metal is naturally colder than wood"],
        "correct": 0
    },
    {
        "question": "What causes rust on iron objects?",
        "answers": ["Oxidation when iron reacts with oxygen", "Bacteria that eat the metal"],
        "correct": 0
    },
    {
        "question": "Why does the sun appear to move across the sky?",
        "answers": ["Earth's rotation", "The sun orbits around Earth"],
        "correct": 0
    },
    {
        "question": "What keeps planets in orbit around the sun?",
        "answers": ["The balance of gravity and inertia", "Magnetic fields from the sun"],
        "correct": 0
    },
    {
        "question": "Why do some stars appear brighter than others?",
        "answers": ["Their distance from Earth and actual brightness", "Their age and color"],
        "correct": 0
    },
    {
        "question": "What causes the phases of the moon?",
        "answers": ["The changing angle between the sun, moon and Earth", "Shadows from Earth covering parts of the moon"],
        "correct": 0
    },
    {
        "question": "Why does Mars appear reddish in the night sky?",
        "answers": ["Iron oxide (rust) on its surface", "Its hot surface temperature"],
        "correct": 0
    },
    {
        "question": "What causes day and night on Earth?",
        "answers": ["Earth's rotation on its axis", "The sun's movement around Earth"],
        "correct": 0
    },
    {
        "question": "What is the main function of plant roots?",
        "answers": ["Absorbing water and nutrients", "Producing oxygen through photosynthesis"],
        "correct": 0
    },
    {
        "question": "How do vaccines help prevent disease?",
        "answers": ["They train the immune system to recognize pathogens", "They kill all bacteria in the body"],
        "correct": 0
    },
    {
        "question": "What happens during a solar eclipse?",
        "answers": ["The moon blocks our view of the sun", "The sun moves behind Earth"],
        "correct": 0
    },
    {
        "question": "Why do objects float in water?",
        "answers": ["They are less dense than water", "They are magnetically repelled by water"],
        "correct": 0
    },
    {
        "question": "What is the primary source of energy for most ecosystems?",
        "answers": ["Sunlight", "Soil minerals"],
        "correct": 0
    },
    {
        "question": "How do sound waves travel?",
        "answers": ["By vibrating molecules in a medium", "Through empty space like light"],
        "correct": 1
    },
    {
        "question": "What causes the northern lights (aurora borealis)?",
        "answers": ["Solar particles interacting with Earth's magnetic field", "Light reflecting off polar ice"],
        "correct": 0
    },
    {
        "question": "Why do seasons change throughout the year?",
        "answers": ["Earth's tilted axis as it orbits the sun", "Varying distance between Earth and sun"],
        "correct": 0
    },
    {
        "question": "What is the function of DNA in living organisms?",
        "answers": ["Storing genetic information", "Directly producing energy for cells"],
        "correct": 0
    }
]; 