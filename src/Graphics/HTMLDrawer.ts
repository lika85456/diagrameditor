import { Diagram, DiagramObject } from "../Diagram/Diagram";
import { ClassObject } from "../Diagram/ClassObject";
import { ClassObjectHTMLDrawer } from "./HTML/ClassObjectHTMLDrawer";

export interface HTMLDrawable{
  getHTMLElement():HTMLElement;
}

/**
 * addapts normal Diagram to diagram wich can deliver HTMLDrawable elements
 * @param rootElement [description]
 */
export class HTMLDiagramAdapter{
  private drawable:HTMLDrawable[] = [];
  constructor(private diagram:Diagram){
    let diagramObjects = diagram.getDiagramObjects();
    for(let i = 0;i<diagramObjects.length;i++)
    {
      this.drawable.push(this.getHTMLDrawableObj(diagramObjects[i]));
    }
  }

  private getHTMLDrawableObj(obj:DiagramObject):HTMLDrawable{
    if(obj instanceof ClassObject) return new ClassObjectHTMLDrawer(obj);
  }
}

export class HTMLDrawer{

  constructor(private rootElement:HTMLElement){

  }

  public draw(diagram:Diagram):void{
    let drawable
  }
}
