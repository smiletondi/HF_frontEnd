const initState = {
    shops: [
        {id: 1, distance: 5, name: "Aswak Salam", imageUrl: ""},
        {id: 2, distance: 4, name: "Boutique Golf Maroc", imageUrl: ""},
        {id: 3, distance: 23, name: "Sophie Paris Maroc", imageUrl: ""},
        {id: 4, distance: 125, name: "La Fabrique", imageUrl: ""},
        {id: 5, distance: 45, name: "Celio", imageUrl: ""},
        {id: 6, distance: 23, name: "Orchestra", imageUrl: ""},
        {id: 7, distance: 42, name: "Inkasa", imageUrl: ""},
        {id: 8, distance: 87, name: "Souk", imageUrl: ""},
    ]
};

const shopReducer = (state = initState, action) => {
    return state;
};

export default shopReducer;