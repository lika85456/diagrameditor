import { Diagram } from "../Diagram/Diagram";

/**
 * Only supposed to draw a diagram. Nothing more :)
 * @param diagram [description]
 */
export interface Drawer{
  draw(diagram:Diagram):void;
}
