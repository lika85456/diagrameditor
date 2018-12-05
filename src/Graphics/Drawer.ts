import { Diagram } from "../Diagram/Diagram";

export interface DiagramDrawer{
  draw(diagram:Diagram):void;
}
