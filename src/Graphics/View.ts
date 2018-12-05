import { Diagram } from "../Diagram/Diagram";

/**
 * Extends drawer for having a camera - resizing, transition
 */
export class View{

  private scale:number = 1;
  private transitionX = 0;
  private transitionY = 0;
  private diagramElement:HTMLElement;


  constructor(private rootElement:HTMLElement,private diagramElement:HTMLElement){
    this.diagramElement = document.createElement("div");
    this.diagramElement.setAttribute("class","diagram_element");
    this.element.append(this.diagramElement);
  }

  /**
   * Updates diagramElement with current scale & transform
   * @return [description]
   */
  public update(){
    this.diagramElement.setAttribute("left",this.transitionX+"");
    this.diagramElement.setAttribute("top",this.transitionY+"");
  }

  public scaleTransform(x:number,y:number){
    this.transform(x*(1/this.scale),y*(1/this.scale));
  }

  public transform(x:number,y:number){
    this.transitionX+=x;
    this.transitionY+=y;
    this.update();
  }
}
