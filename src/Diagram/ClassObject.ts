import { DiagramObject } from "./Diagram";

export class ClassObject extends DiagramObject{
  private methods:Method[] = [];

  constructor(private name:string){
    super();
  }

  public addMethod(method:Method){
    this.methods.push(method);
  }

  public removeMethod(method:Method){
    let i = this.methods.indexOf(method);
    if(i!=-1)
      this.removeMethodAt(i);
  }

  public removeMethodAt(index:number){
    this.methods.splice(index,1);
  }
}

export class Method{
  private comment:string;

  constructor(public name:string,public isPublic:boolean=true){

  }

  public getComment():string{
    return this.comment;
  }

  public setComment(comment:string){
    this.comment = comment;
  }
}
