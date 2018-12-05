/**
 * Handles adding diagram objects, removing, conneting etc.
 */
export class Diagram{
  private objects:DiagramObject[] = [];
  constructor(){

  }

  public add(obj:DiagramObject):void{
    this.objects.push(obj);
  }

  public getDiagramObjects():DiagramObject[]{
    return this.objects;
  }
}

/**
 * Contains only logic and data. NO RENDERING
 */
export abstract class DiagramObject{
  private comment:string;
  private position:{x:number,y:number};
  private size:{width:number,height:number};

  public getComment():string{
    return this.comment;
  }

  public setComment(comment:string){
    this.comment = comment;
  }

  public getPosition():{x:number,y:number}{
    return this.position;
  }

  public setPosition(pos:{x:number,y:number}){
    this.position = pos;
  }

  public getSize():{width:number,height:number}{
    return this.size;
  }

  public setSize(siz:{width:number,height:number}){
    this.size = siz;
  }

}

/*
WHAT TO DO WHEN ADDING NEW OBJECTS?
1) create DiagramObject
2) create DiagramObjectDrawer
3) add to DiagramAdapter in Drawer
 */
