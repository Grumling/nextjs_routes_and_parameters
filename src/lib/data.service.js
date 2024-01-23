
export const fetchProducts = async () => {

    let products = [
        {
            title : "Product A",
        },
        {
            title : "Product B",
        }
    ]   

    return products;

};



export const fetchHorses = async () => {

    let horses = [
        {
            title : "Aldabaran",
        },
        {
            title : "Tristan",
        }
    ]   

    return horses;

};

export const fetchHorsesByTitle = async (title) => {

    let horses = [
        {
            title : "Aldabaran",
        },
        {
            title : "Tristan",
        }
    ]   

    let horse = horses.filter((horse) => horse.title === title)



    return horse;

};
