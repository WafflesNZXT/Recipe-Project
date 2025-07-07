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
                "200g penne pasta", "1 can (400g) chopped tomatoes", "2 cloves garlic, minced",
                "1/2 tsp red pepper flakes (or more)", "2 tbsp olive oil", "Salt and black pepper to taste",
                "Fresh parsley for garnish"
            ],
            instructions: [
                "Cook pasta according to package directions until al dente.",
                "While pasta cooks, heat olive oil in a large skillet over medium heat.",
                "Add minced garlic and red pepper flakes; sauté for 1 minute until fragrant.",
                "Pour in chopped tomatoes, salt, and pepper. Bring to a simmer and cook for 10-15 minutes, allowing sauce to thicken slightly.",
                "Drain pasta, reserving about 1/2 cup of pasta water.",
                "Add cooked pasta to the sauce, tossing to combine. If needed, add a splash of reserved pasta water to reach desired consistency.",
                "Garnish with fresh parsley and serve hot."
            ]
        },
        {
            id: 2,
            name: "Mash Daal",
            description: "Mash daal, also known as urad dal or white lentil, is a protein-rich and often hearty lentil preparation popular in South Asian cuisine, typically made from split and husked black gram.",
            category: ["dinner", "lunch"],
            image: "images/mash-daal.jpg", // Make sure to have this image!
            ingredients: [
                "1 1/2 cups all-purpose flour", "2 tbsp sugar", "1 tbsp baking powder",
                "1/2 tsp salt", "1 1/4 cups milk", "1 large egg", "2 tbsp melted butter",
                "1 cup fresh blueberries"
            ],
            instructions: [
                "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
                "In a separate bowl, whisk together milk, egg, and melted butter.",
                "Pour the wet ingredients into the dry ingredients and stir until just combined (don't overmix, lumps are okay!). Gently fold in the blueberries.",
                "Heat a lightly oiled griddle or non-stick pan over medium heat.",
                "Pour 1/4 cup of batter per pancake onto the griddle. Cook for 2-3 minutes per side, or until golden brown and cooked through.",
                "Serve warm with maple syrup and extra blueberries."
            ]
        },
        {
            id: 3,
            name: "Beef Qeema",
            description: "Beef qeema is a flavorful and often spicy South Asian curry made from minced or ground beef, typically cooked with onions, tomatoes, ginger, garlic, and a blend of aromatic spices, often accompanied by peas or potatoes.",
            category: ["dinner", "lunch"],
            image: "images/beefqeema.png", // Make sure to have this image!
            ingredients: [
                "1 head romaine lettuce, chopped", "1 cup croutons", "1/2 cup grated Parmesan cheese",
                "For the dressing:", "1/2 cup mayonnaise", "2 tbsp lemon juice", "1 tbsp Dijon mustard",
                "1 clove garlic, minced", "1 tsp Worcestershire sauce", "Salt and black pepper to taste"
            ],
            instructions: [
                "In a small bowl, whisk together all dressing ingredients until smooth. Taste and adjust seasoning.",
                "In a large bowl, combine chopped romaine lettuce and croutons.",
                "Pour dressing over the lettuce and croutons, tossing gently to coat evenly.",
                "Sprinkle with grated Parmesan cheese and serve immediately."
            ]
        },
        {
            id: 4,
            name: "Chocalate Chip Pancakes",
            description: "Chocolate chip pancakes are a beloved breakfast treat featuring fluffy, golden pancakes studded with delightful pockets of melted chocolate.",
            category: ["breakfast"],
            image: "images/1500px-Banana-Chocolate-Chip-Pancakes-13-square-846x846.jpg",
            ingredients: [
                "1 cup of pancake flower", 
                "2 spoons of chocolate chips", 
                "5 spoons of water"
            ],
            instructions: [
                "In a bowl or mixer, whisk together the pancake flower, and water until you have a not too thick or thin consistency, thicker than water however.",
                "Then pour the mixture on to a pan, make sure to apply cooking spray/oil first to avoid sticking, and then way till many bubbles begin to form on the top, then flip."
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
            image: "/images/IMG_5120.jpg",
            ingredients: [
                "Chicken Boneless Thigh",
                "Masala"
            ],
            instructions: [
                "Cut chicken into cubes, bite-sized pieces.",
                "Marinate with masala."
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