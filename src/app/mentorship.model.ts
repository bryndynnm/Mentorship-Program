export class Event {

    constructor(
        public type: string,
        public description: string,
        public image: string,
        public date: string,
        public place: string,
        public numberOfParticipants: string
    ){}
}