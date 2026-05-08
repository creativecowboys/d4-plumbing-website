/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Products from './pages/Products';
import Services from './pages/Services';
import PlumberTallapoosaGA from './pages/PlumberTallapoosaGA';
import PlumberVillaRicaGA from './pages/PlumberVillaRicaGA';
import PlumberCarrolltonGA from './pages/PlumberCarrolltonGA';
import PlumberDouglasvilleGA from './pages/PlumberDouglasvilleGA';
import PlumberBremenGA from './pages/PlumberBremenGA';
import PlumberDallasGA from './pages/PlumberDallasGA';
import PlumberHiramGA from './pages/PlumberHiramGA';
import PlumberLithiaSpringsGA from './pages/PlumberLithiaSpringsGA';
import PlumberAustellGA from './pages/PlumberAustellGA';
import PlumberMabletonGA from './pages/PlumberMabletonGA';
import PlumberPowderSpringsGA from './pages/PlumberPowderSpringsGA';
import PlumberRockmartGA from './pages/PlumberRockmartGA';
import PlumberBuchananGA from './pages/PlumberBuchananGA';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "Contact": Contact,
    "Home": Home,
    "Locations": Locations,
    "Products": Products,
    "Services": Services,
    "plumber-tallapoosa-ga": PlumberTallapoosaGA,
    "plumber-villa-rica-ga": PlumberVillaRicaGA,
    "plumber-carrollton-ga": PlumberCarrolltonGA,
    "plumber-douglasville-ga": PlumberDouglasvilleGA,
    "plumber-bremen-ga": PlumberBremenGA,
    "plumber-dallas-ga": PlumberDallasGA,
    "plumber-hiram-ga": PlumberHiramGA,
    "plumber-lithia-springs-ga": PlumberLithiaSpringsGA,
    "plumber-austell-ga": PlumberAustellGA,
    "plumber-mableton-ga": PlumberMabletonGA,
    "plumber-powder-springs-ga": PlumberPowderSpringsGA,
    "plumber-rockmart-ga": PlumberRockmartGA,
    "plumber-buchanan-ga": PlumberBuchananGA,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};