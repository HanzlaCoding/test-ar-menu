// Best publicly available premium GLB models, each unique per item
const menuData = [
    {
        id: 1,
        name: 'Special Beef Burger',
        description: 'Angus beef patty, caramelized onions, aged cheddar & truffle aioli',
        price: 1850,
        category: 'Burgers',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
        // Avocado — premium food model from Khronos
        modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb',
        badge: "Chef's Pick",
        rating: 4.9,
    },
    {
        id: 2,
        name: 'Smoked Chicken Wrap',
        description: 'Hickory-smoked chicken, avocado, swiss cheese & chipotle ranch',
        price: 1650,
        category: 'Burgers',
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&h=400&fit=crop',
        // WaterBottle — premium PBR model from Khronos
        modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/WaterBottle/glTF-Binary/WaterBottle.glb',
        badge: null,
        rating: 4.7,
    },
    {
        id: 3,
        name: 'Lava Cake',
        description: 'Warm Belgian chocolate fondant with vanilla bean ice cream',
        price: 1200,
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop',
        // Corset — ornate, decorative premium model
        modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/IridescenceLamp/glTF-Binary/IridescenceLamp.glb',
        badge: 'Bestseller',
        rating: 4.8,
    },
    {
        id: 4,
        name: 'Tiramisu',
        description: 'Classic mascarpone layers, espresso-soaked ladyfingers & cocoa dust',
        price: 1100,
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop',
        // Toy Car — fun, detailed PBR model
        modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/ToyCar/glTF-Binary/ToyCar.glb',
        badge: null,
        rating: 4.6,
    },
    {
        id: 5,
        name: 'Matcha Latte',
        description: 'Ceremonial-grade matcha, oat milk & honey drizzle',
        price: 750,
        category: 'Drinks',
        image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&h=400&fit=crop',
        // AntiqueCameraModel — premium detailed model
        modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AntiqueCamera/glTF-Binary/AntiqueCamera.glb',
        badge: 'New',
        rating: 4.5,
    },
    {
        id: 6,
        name: 'Iced Caramel Macchiato',
        description: 'Double espresso, vanilla syrup, caramel drizzle & cold foam',
        price: 850,
        category: 'Drinks',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop',
        // SheenChair — upscale interior object
        modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SheenChair/glTF-Binary/SheenChair.glb',
        badge: null,
        rating: 4.4,
    },
    {
        id: 7,
        name: 'Truffle Margherita',
        description: 'San Marzano tomato, buffalo mozzarella & black truffle oil',
        price: 2200,
        category: 'Mains',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop',
        // DragonAttenuation — visually stunning premium model
        modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DragonAttenuation/glTF-Binary/DragonAttenuation.glb',
        badge: 'Premium',
        rating: 4.9,
    },
    {
        id: 8,
        name: 'Grilled Salmon Bowl',
        description: 'Atlantic salmon, quinoa, edamame & sesame ginger glaze',
        price: 2400,
        category: 'Mains',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop',
        // Astronaut — iconic detailed model for AR
        modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
        badge: null,
        rating: 4.7,
    },
];

export const categories = ['All', 'Burgers', 'Desserts', 'Drinks', 'Mains'];

export default menuData;
