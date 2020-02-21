export default class CookBookService {
    data = [
        {
            id: 1,
            name: 'Pancakes',
            description: 'To make batter you need the following',
            data: '19 February 2020'
        },
        {
            id: 2,
            name: 'Pancakes',
            description: 'To make batter you need the following',
            data: '19 February 2020'
        },
        {
            id: 3,
            name: 'Pancakes',
            description: 'To make batter you need the following',
            data: '19 February 2020'
        }
    ];
    getBooks(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 1250);
        });
    }
}