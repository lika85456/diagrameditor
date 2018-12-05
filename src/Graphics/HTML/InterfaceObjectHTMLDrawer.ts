import { ClassObject, Method } from "../../Diagram/ClassObject";
import { HTMLDrawable } from "../HTMLDrawer";
import { InterfaceObject } from "../../Diagram/InterfaceObject";
import { ObjectHTMLDrawer } from "./ObjectHTMLDrawer";

export class InterfaceObjectHTMLDrawer extends ObjectHTMLDrawer{

  public static TITLE = "<< Interface >>";

  constructor(private obj:InterfaceObject){
    super();
  }

  public getHTMLElement(): HTMLElement {
    let base = super.getBaseElement();
    base.append(this.getTitle());

    let getMethod = super.getMethod;
    this.obj.getMethods().forEach((method:Method)=>{
      base.append(getMethod(method));
    });

    return base;
  }

  /**
   * Creates HTML element for title
   * @return [description]
   */
  private getTitle():HTMLElement{
    let title = document.createElement("h3");
    title.innerHTML = InterfaceObjectHTMLDrawer.TITLE;
    title.setAttribute("class","interface_title");
    return title;
  }
}
