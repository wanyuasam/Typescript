// generic types
class StorageContainer<T>{
   private contents: T[];

   constructor(){
    this.contents = [];
   }

   addItem(item:T) : void{
    this.contents.push();
   }
   getItem(index: number): T | undefined{
    return this.contents[index]
   }
}