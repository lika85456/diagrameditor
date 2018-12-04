import { ProjectLoader } from "./ProjectLoader";
import { Diagram } from "../Diagram/Diagram";

export class Project{

  private diagram:Diagram;

  constructor(public name:string){

  }

  public save(projectLoader:ProjectLoader){
    throw "not implemented";
  }

  public load(projectLoader:ProjectLoader){
    throw "not implemented";
  }

  public getDiagram():Diagram{
    return this.diagram;
  }
}
