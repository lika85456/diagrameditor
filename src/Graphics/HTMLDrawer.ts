import { Diagram, DiagramObject } from "../Diagram/Diagram";
import { ClassObject, Method } from "../Diagram/ClassObject";
import { ClassObjectHTMLDrawer } from "./HTML/ClassObjectHTMLDrawer";
import { InterfaceObject } from "../Diagram/InterfaceObject";
import { InterfaceObjectHTMLDrawer } from "./HTML/InterfaceObjectHTMLDrawer";
import { DiagramDrawer } from "./Drawer";

/**
 * Defines an object wich can return rendered html element
 * @return [description]
 */
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
    let objects = this.diagramObjectsToHTMLDrawable(diagram.getDiagramObjects());
    this.drawable.concat(objects);

    //TODO add other stuff in diagram...
  }

  private diagramObjectsToHTMLDrawable(diagramObjects:DiagramObject[]){
    let drawable = [];
    for(let i = 0;i<diagramObjects.length;i++)
    {
      drawable.push(this.getHTMLDrawableObj(diagramObjects[i]));
    }
    return drawable;
  }

  /**
   * This converts an DiagramObject to its drawable form
   * @param  obj [description]
   * @return     [description]
   */
  private getHTMLDrawableObj(obj:DiagramObject):HTMLDrawable{
    if(obj instanceof ClassObject) return new ClassObjectHTMLDrawer(obj);
    if(obj instanceof InterfaceObject) return new InterfaceObjectHTMLDrawer(obj);
  }

  public getHTMLDrawableElements():HTMLDrawable[]{
    return this.drawable;
  }
}

/**
 * This draws the diagram on some element...
 * @param rootElement [description]
 */
export class HTMLDrawer implements DiagramDrawer{

  constructor(private rootElement:HTMLElement){

  }

  public draw(diagram:Diagram):void{
    let rootElement = this.rootElement;
    let drawable = new HTMLDiagramAdapter(diagram).getHTMLDrawableElements();
    drawable.forEach((drawableElement:HTMLDrawable)=>{
      rootElement.append(drawableElement.getHTMLElement());
    });
  }


}
