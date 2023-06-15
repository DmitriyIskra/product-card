export default class Generator {
    constructor() {
        this.gen = function* generator() {
            for(let i = 0; i < Infinity; i += 1) {
                yield i
            }
        }
    }
}

