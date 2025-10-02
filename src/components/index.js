import Header from "./header/Header";
import Footer from "./footer/Footer";
import HomePage from "./middle/Home";
import SideBar from "./sidebar/SideBar";
import { expand as Expand } from "../store/slices";   
import { collapse as Collapse } from "../store/slices";
import Timetable from "./TimeTable/Timetable";
import TTCard from "./TimeTable/TTCard";

export {
  Header,
  Footer,
  HomePage,
  SideBar,
  Expand,
  Collapse,
  TTCard,
  Timetable
};