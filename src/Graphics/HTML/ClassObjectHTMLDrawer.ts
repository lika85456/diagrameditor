import { ClassObject } from "../../Diagram/ClassObject";
import { HTMLDrawable } from "../HTMLDrawer";

export class ClassObjectHTMLDrawer implements HTMLDrawable{
  constructor(private obj:ClassObject){

  }

  public getHTMLElement():HTMLElement{
    throw "not implemented";
  }
}
