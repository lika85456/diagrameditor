import { HTMLDrawable } from "../HTMLDrawer";
import { Method } from "../../Diagram/ClassObject";

export abstract class ObjectHTMLDrawer implements HTMLDrawable{

  abstract getHTMLElement(): HTMLElement;

  protected getBaseElement():HTMLElement{
    let element = document.createElement("div");
    element.setAttribute("class","html_object");
    return element;
  }

  /**
   * Creates HTML element for a method
   * @param  method [description]
   * @return        [description]
   */
  protected getMethod(method:Method):HTMLElement{
    let title = document.createElement("div");
    title.innerHTML = method.name;
    title.setAttribute("class","object_method");
    return title;
  }
}
