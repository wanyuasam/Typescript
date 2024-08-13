// generic types
class StorageContainer<T>{
   private contents: T[];

   constructor(){
    this.contents = [];
   }

   addItem(item:T) : void{
    this.contents.push(item);
   }
   getItem(index: number): T | undefined{
    return this.contents[index];
   }
}

const userNames = new StorageContainer<string>();
userNames.addItem("George");
userNames.addItem("Bush");
console.log(userNames.getItem(0));
