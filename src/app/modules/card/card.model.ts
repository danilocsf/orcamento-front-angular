export class Card {
    constructor(
        public id?: number,
        public cardOwner?: string,
        public cardNumber?: string,
        public active?: Boolean
    ) {
        this.active = true;
    }
}
