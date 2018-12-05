import { ClassObject, Method } from "../../Diagram/ClassObject";
import { ObjectHTMLDrawer } from "./ObjectHTMLDrawer";

export class ClassObjectHTMLDrawer extends ObjectHTMLDrawer{

  public static TITLE = "Class";

  constructor(private obj:ClassObject){
    super();
  }

  public getHTMLElement():HTMLElement{
    let base = this.getBaseElement();
    base.append(this.getTitle());

    let getMethod = this.getMethod;
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
    title.innerHTML = ClassObjectHTMLDrawer.TITLE;
    title.setAttribute("class","object_title");
    return title;
  }
}
