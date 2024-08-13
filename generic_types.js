"use strict";
// generic types
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(index) {
        return this.contents[index];
    }
}
const userNames = new StorageContainer();
userNames.addItem("George");
userNames.addItem("Bush");
console.log(userNames.getItem(0));
