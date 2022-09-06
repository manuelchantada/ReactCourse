export default class Meetup {

    key?: string;
    id?: string;
    image: string;
    title: string;
    address: string;
    description: string;

    constructor (key: string, id: string, image: string, title: string, address: string, description: string){
        this.key = key;
        this.id = id;
        this.image = image;
        this.title = title;
        this.address = address;
        this.description = description
    }

}
