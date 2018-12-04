import { Project } from "./Project/Project";
import { Diagram } from "./Diagram/Diagram";
import { ClassObject } from "./Diagram/ClassObject";
import { HTMLDrawer } from "./Graphics/HTMLDrawer";

//first load project or make newlet project = new Project("index");
let diagram:Diagram = new Diagram();

let classToBeAdded:ClassObject = new ClassObject("MyClass");
classToBeAdded.setComment("This is my class");

diagram.add(classToBeAdded);

let htmlDrawer:HTMLDrawer = new HTMLDrawer(document.getElementById("centerPanel"));
htmlDrawer.draw(diagram);
