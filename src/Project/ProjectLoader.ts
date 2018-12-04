export interface ProjectLoader{
  save(name:string,data:string):void;
  load(name:string):Promise<String>;
}
