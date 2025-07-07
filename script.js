document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const recipeGrid = document.querySelector('.recipe-grid');

    // --- Sample Recipe Data (you'd ideally fetch this from an API or JSON file) ---
    const recipes = [
        {
            id: 1,
            name: "Biryani",
            description: "Biryani is an aromatic, layered rice dish from the Indian subcontinent, typically featuring spiced meat and small amounts of vegetables.",
            category: "dinner",
            image: "images/biryani.jpg",
            ingredients: [
                "Basmati Rice",
                "Chicken/Mutton/Lamb",
                "Ginger/Garlic Past",
                "Onion",
                "Bay Leaves, Cardomonm, Cloves, Cumin Seeds",
                "Turmeric Powder, Red Chili Powder (adjust to your spice preference), Coriander Powder, Cumin Powder.",
                "Saffron"
            ],
            instructions: [
                 "Wash and soak basmati rice for 30 minutes, then drain.",
                "In a large pot or heavy-bottomed pan, heat ghee or oil.",
                "Add thinly sliced onions and fry until deeply golden brown and crispy. Remove half for garnish.",
                "To the remaining onions, add ginger-garlic paste and whole spices (bay leaves, cardamom, cinnamon, cloves, star anise, shahi jeera). Sauté for 1-2 minutes until fragrant.",
                "Add chicken/meat pieces and brown them on all sides.",
                "Stir in yogurt, ground spices (turmeric, red chili, coriander, cumin, garam masala/biryani masala), and salt. Cook until meat is tender and gravy thickens, stirring occasionally.",
                "Meanwhile, par-boil the soaked rice: bring a large pot of water to a rolling boil with salt. Add the drained rice and cook until about 70% done (it should still have a bite). Drain immediately.",
                "Layer the biryani: In a large, heavy-bottomed pot, spread half of the par-boiled rice. Top with the cooked meat and gravy. Sprinkle with fresh mint and coriander leaves, and some of the fried onions.",
                "Add the remaining rice on top. Drizzle with saffron milk (if using) and the rest of the mint, coriander, and fried onions.",
                "Cover the pot tightly with a lid (you can seal with dough for a traditional dum) and cook on very low heat for 20-30 minutes, allowing flavors to meld and rice to fully cook.",
                "Gently fluff the biryani with a fork before serving."
            ]
        },
        {
            id: 2,
            name: "Mash Daal",
            description: "Mash daal, also known as urad dal or white lentil, is a protein-rich and often hearty lentil preparation popular in South Asian cuisine, typically made from split and husked black gram.",
            category: ["dinner", "lunch"],
            image: "images/mash-daal.jpg", // Make sure to have this image!
            ingredients: [
                 "1 cup Mash Daal (Split Urad Dal, skinless)",
                 "3 cups water (for cooking daal, adjust as needed)",
                 "1 large onion, finely chopped",
                 "2 medium tomatoes, chopped or pureed",
                 "1 tbsp ginger paste",
                 "1 tbsp garlic paste",
                 "2-3 green chilies, slit or chopped (adjust to taste)",
                 "1/2 tsp turmeric powder",
                 "1 tsp red chili powder (adjust to taste)",
                 "1 tbsp coriander powder",
                 "1/2 tsp cumin powder",
                 "1/2 tsp garam masala",
                 "1/4 cup cooking oil or ghee",
                 "Salt to taste",
                 "Fresh coriander leaves, chopped (for garnish)",
                 "Fresh ginger, julienned (for garnish)",
                 "For Tarka (Tempering):",
                 "2 tbsp ghee or oil",
                 "2-3 cloves garlic, thinly sliced",
                 "1/2 tsp cumin seeds",
                 "2-3 whole dried red chilies",
                 "Pinch of asafoetida (hing, optional)"
            ],
            instructions: [
                "Wash Mash Daal thoroughly under running water until the water runs clear. Soak it in fresh water for at least 30 minutes, then drain.",
                "In a large pot or pressure cooker, heat oil or ghee over medium heat.",
                "Add finely chopped onions and sauté until they turn light golden brown.",
                "Stir in ginger paste and garlic paste. Cook for 1-2 minutes until fragrant.",
                "Add chopped tomatoes and green chilies. Cook, stirring, until tomatoes soften and oil begins to separate.",
                "Add turmeric powder, red chili powder, coriander powder, cumin powder, and salt. Mix well and cook the spices for 2-3 minutes, adding a splash of water if needed to prevent burning.",
                "Add the drained Mash Daal to the pot and mix well with the spices.",
                "Pour in 3 cups of water (or enough to cover the daal by about an inch). Bring to a boil, then reduce heat to low, cover, and simmer for 20-30 minutes, or until the daal is tender but still holds its shape. (If using a pressure cooker, cook for 1 whistle, then simmer for 5-7 minutes).",
                "Once cooked, stir in garam masala and half of the fresh chopped coriander.",
                "Prepare the Tarka (Tempering): In a separate small pan, heat ghee or oil.",
                "Add sliced garlic and fry until golden brown. Then add cumin seeds and whole dried red chilies. Cook until fragrant (add asafoetida if using).",
                "Pour the hot tarka directly over the cooked daal. Stir gently.",
                "Garnish with the remaining fresh coriander and julienned fresh ginger. Serve hot with roti or rice."
            ]
        },
        {
            id: 3,
            name: "Beef Qeema",
            description: "Beef qeema is a flavorful and often spicy South Asian curry made from minced or ground beef, typically cooked with onions, tomatoes, ginger, garlic, and a blend of aromatic spices, often accompanied by peas or potatoes.",
            category: ["dinner", "lunch"],
            image: "images/beefqeema.png", // Make sure to have this image!
            ingredients: [
                "500g (1 lb) beef mince/ground beef",
                "2 large onions, finely chopped",
                "2 tomatoes, chopped or pureed",
                "1 tbsp ginger paste",
                "1 tbsp garlic paste",
                "2-3 green chilies, slit or chopped (adjust to taste)",
                "1/2 cup yogurt (optional, for tenderizing and richness)",
                "1/2 tsp turmeric powder",
                "1 tsp red chili powder (adjust to taste)",
                "1 tbsp coriander powder",
                "1 tsp cumin powder",
                "1/2 tsp garam masala",
                "1/4 cup cooking oil or ghee",
                "Salt to taste",
                "Fresh coriander leaves, chopped (for garnish)",
                "Fresh ginger, julienned (for garnish)",
                "Water as needed"
            ],
            instructions: [
                "Heat oil or ghee in a large pan or pot over medium heat.",
                "Add finely chopped onions and sauté until golden brown.",
                "Stir in ginger paste and garlic paste. Cook for 1-2 minutes until fragrant, being careful not to burn.",
                "Add the beef mince. Cook, breaking it up with a spoon, until it changes color and any released water dries up.",
                "Stir in chopped or pureed tomatoes, green chilies, turmeric powder, red chili powder, coriander powder, cumin powder, and salt. Mix well.",
                "Cover the pot and cook on medium-low heat for 10-15 minutes, or until tomatoes soften and oil starts to separate, stirring occasionally.",
                "If using, add yogurt and mix well. Cook for another 5-7 minutes, or until the yogurt water dries up and the oil separates again.",
                "Add about 1/4 to 1/2 cup of water (or as needed for desired consistency). Bring to a simmer, then cover and cook on low heat for 15-20 minutes, or until the beef mince is completely tender.",
                "Stir in garam masala. Cook for another 2-3 minutes.",
                "Garnish with fresh chopped coriander leaves and julienned fresh ginger before serving hot with naan, roti, or rice."
            ]
        },
        {
            id: 4,
            name: "Chocalate Chip Pancakes",
            description: "Chocolate chip pancakes are a beloved breakfast treat featuring fluffy, golden pancakes studded with delightful pockets of melted chocolate.",
            category: ["breakfast"],
            image: "images/1500px-Banana-Chocolate-Chip-Pancakes-13-square-846x846.jpg",
            ingredients: [
                "1 cup all-purpose flour",
                "1/4 cup unsweetened cocoa powder",
                "2-3 tablespoons granulated sugar (adjust to taste)",
                "1 teaspoon baking powder",
                "1/2 teaspoon baking soda",
                "1/4 teaspoon salt",
                "1 cup milk (dairy or non-dairy)",
                "1 large egg",
                "2 tablespoons melted butter or vegetable oil",
                "Optional: 1/2 cup chocolate chips (for extra chocolatey goodness)",
                "Butter or oil for cooking the pancakes"
            ],
            instructions: [
                "In a large bowl, whisk together the dry ingredients: all-purpose flour, unsweetened cocoa powder, granulated sugar, baking powder, baking soda, and salt.",
                "In a separate medium bowl, whisk together the wet ingredients: milk, large egg, and vanilla extract.",
                "Pour the melted butter or vegetable oil into the wet ingredients and whisk until combined.",
                "Add the wet ingredient mixture to the dry ingredients. Stir gently with a spoon or whisk until just combined. A few lumps are fine; do not overmix, as this can make the pancakes tough.",
                "If using, gently fold in the chocolate chips.",
                "Heat a lightly oiled or buttered non-stick griddle or large pan over medium-low to medium heat.",
                "Pour about 1/4 to 1/3 cup of batter per pancake onto the hot griddle.",
                "Cook for 2-4 minutes per side, or until bubbles appear on the surface, the edges look set, and the pancake is golden brown underneath. Flip and cook for another 1-2 minutes until cooked through.",
                "Serve hot with your favorite toppings like syrup, whipped cream, or fresh berries."
            ],
        },
        {
            id: 5,
            name: "Chai",
            description: "Pakistani chai is a robust and invigorating brew, featuring strong black tea leaves (patti) simmered with milk and aromatic cardamom, creating a comforting and full-bodied beverage.",
            category: ["drinks/beverages"],
            image: "images/IMG_5014.jpg",
            ingredients: [
                "1 1/4 cups water",
                "1 cup* whole milk",
                "1 1/2 tsp (or 2 black teabags) loose tea-leaves (I use Tapal Danedar or Ahmad Tea)",
                "1-2 cardamom pods"
            ],
            instructions: [
                "Place water in a saucepan over high heat. Once it comes to a boil, add tea-leaves or tea bag and cardamom. Reduce the heat to medium and gently allow this to simmer for a minute or two.",
                "Add the milk and raise the heat back to high (or allow the milk to come to a simmer on its own). ",
                "As it begins to boil, the chai will rise in the saucepan. Remove the pan from heat before it reaches the top of the saucepan. Do this a few times to really develop the flavor while using a ladle to scoop and pour back the chai. Alternately, once it comes to a boil, lower the heat and allow it to simmer to desired strength (~3-5 minutes).",
                "Pour this chai through a small sieve into your favorite cups and sweeten using sugar or honey."
            ]
        },
        {
            id: 6,
            name: "Chicken Boti: Barbequed",
            description: "Chicken Boti Barbequed, often characterized by its vibrant orange or reddish hue, consists of succulent, bite-sized chicken pieces marinated in a flavorful blend of spices, then grilled or barbecued to perfection, resulting in a tender and smoky delight.",
            category: ["lunch", "dinner"],
            image: "images/IMG_5120.jpg",
            ingredients: [
                "500g (about 1 lb) boneless chicken (thighs or breast), cut into bite-sized pieces",
                "1/4 - 1/2 cup thick yogurt (Greek yogurt or hung curd works best)",
                "1 tbsp ginger paste",
                "1 tbsp garlic paste",
                "1-2 green chilies, minced or pasted (adjust to taste)",
                "1 tsp red chili powder (Kashmiri chili powder for color, or regular for heat)",
                "1 tsp coriander powder",
                "1/2 tsp cumin powder",
                "1/2 tsp turmeric powder",
                "1/2 tsp garam masala",
                "1/4 tsp black pepper powder",
                "1-2 tbsp lemon juice",
                "Salt to taste",
                "1 tbsp oil or melted ghee (for marinade)",
                "Optional: Pinch of orange or red food color (for vibrant color)",
                "Optional: 1/4 tsp chaat masala (for garnish/sprinkle after cooking)",
                "Optional: Fresh coriander leaves, chopped (for garnish)"
            ],
            instructions: [
                "Wash the chicken pieces thoroughly and pat them completely dry. This helps the marinade stick better.",
                "In a large bowl, combine the thick yogurt, ginger paste, garlic paste, minced green chilies, red chili powder, coriander powder, cumin powder, turmeric powder, garam masala, black pepper, lemon juice, salt, and oil (and food color if using). Mix everything together to form a smooth marinade.",
                "Add the dried chicken pieces to the marinade. Toss well to ensure every piece is evenly coated. Cover the bowl and marinate in the refrigerator for at least 4 hours, or preferably overnight, for best flavor and tenderness.",
                "If using wooden skewers, soak them in water for at least 30 minutes before threading the chicken to prevent them from burning.",
                "Preheat your grill, barbecue, or oven broiler to medium-high heat. If using a pan, heat a lightly oiled pan over medium-high heat.",
                "Thread the marinated chicken pieces onto skewers, making sure not to overcrowd them so they cook evenly.",
                "Grill, barbecue, or broil the chicken skewers, turning occasionally, for 10-15 minutes, or until the chicken is cooked through, tender, and has a beautiful charred exterior. Cooking time will vary based on heat and chicken piece size.",
                "Serve hot, optionally sprinkled with chaat masala, and garnished with fresh coriander and lemon wedges."
            ]
        },
        {
            id: 7,
            name: "Classic Chicken 65",
            description: "Classic Chicken 65 is a spicy and crispy deep-fried chicken appetizer from South India, renowned for its vibrant red color and fiery flavor profile.",
            category: ["lunch", "dinner"],
            image: "images/IMG_5255.jpg",
            ingredients: [
                "Boneless Chicken Thigh",
                "Ginger-Garlic Paste",
                "Yogurt (Dahi)",
                "Spices: Red chili powder (for heat and color), turmeric powder, garam masala, cumin powder, coriander powder.",
                "All-purpose flour (maida) and cornstarch (cornflour) for the crispy coating.",
                "Curry leaves",
                "Green Chillies",
                "Oil for deep frying"
            ],
            instructions: [
                "Marinate the Chicken: Combine the bite-sized chicken pieces with ginger-garlic paste, yogurt, all the dry spices (red chili powder, turmeric, garam masala, cumin, coriander), salt, and black pepper. Mix well and let it marinate for at least 30 minutes (or longer in the fridge).",
                "Coat the Chicken: Add all-purpose flour and cornstarch to the marinated chicken and mix until each piece is evenly coated.",
                "Deep Fry: Heat oil in a deep pan or wok. Once hot, carefully add the coated chicken pieces in batches, ensuring not to overcrowd the pan. Fry until golden brown and crispy, and the chicken is cooked through. Remove and drain on paper towels.",
                "Temper (Optional but Recommended): In a separate pan, heat a small amount of oil. Add mustard seeds (if using), then green chilies and curry leaves. Sauté briefly until fragrant. You can also add a pinch of red chili powder or lemon juice at this stage.",
                "Serve: Toss the fried chicken with the tempering (if made) and serve hot, often garnished with fresh coriander or lemon wedges.",
            ]
        },
        // Add more recipes here!
    ];

    // --- Functions ---

    // Function to render recipes
    function renderRecipes(filteredRecipes) {
        recipeGrid.innerHTML = ''; // Clear existing recipes
        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement('article');
            recipeCard.classList.add('recipe-card');
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h2>${recipe.name}</h2>
                <p class="description">${recipe.description}</p>
                <div class="details">
                    <div class="ingredients">
                        <h3>Ingredients:</h3>
                        <ul>
                            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="instructions">
                        <h3>Instructions:</h3>
                        <ol>
                            ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                        </ol>
                    </div>
                </div>
                <button class="view-recipe-btn" data-recipe-id="${recipe.id}">View Recipe</button>
            `;
            recipeGrid.appendChild(recipeCard);
        });

        // Attach event listeners to newly created buttons
        attachViewRecipeListeners();
    }

    // Function to filter and search recipes
    // Inside your script.js, update filterAndSearchRecipes function
function filterAndSearchRecipes() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value; // Still gets a single value

    const filtered = recipes.filter(recipe => {
        const matchesSearch = recipe.name.toLowerCase().includes(searchTerm) ||
                              recipe.description.toLowerCase().includes(searchTerm) ||
                              recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm));

        // --- IMPORTANT CHANGE FOR CATEGORY MATCHING ---
        const matchesCategory = selectedCategory === 'all' ||
                                recipe.category.includes(selectedCategory); // Check if the recipe's category array includes the selected single category
        // --- END IMPORTANT CHANGE ---

        return matchesSearch && matchesCategory;
    });
    renderRecipes(filtered);
}

    // Function to toggle recipe details
    function attachViewRecipeListeners() {
        document.querySelectorAll('.view-recipe-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const card = event.target.closest('.recipe-card');
                const details = card.querySelector('.details');
                const ingredients = card.querySelector('.ingredients');
                const instructions = card.querySelector('.instructions');

                if (ingredients.style.display === 'none' || ingredients.style.display === '') {
                    ingredients.style.display = 'block';
                    instructions.style.display = 'block';
                    event.target.textContent = 'Hide Recipe';
                } else {
                    ingredients.style.display = 'none';
                    instructions.style.display = 'none';
                    event.target.textContent = 'View Recipe';
                }
            });
        });
    }

    // --- Event Listeners ---
    searchInput.addEventListener('input', filterAndSearchRecipes);
    categoryFilter.addEventListener('change', filterAndSearchRecipes);
    clearFiltersBtn.addEventListener('click', () => {
        searchInput.value = '';
        categoryFilter.value = 'all';
        filterAndSearchRecipes();
    });

    // Initial render of all recipes
    renderRecipes(recipes);
});
