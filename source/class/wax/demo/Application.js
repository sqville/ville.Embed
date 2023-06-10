/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "wax"
 * @external(ville/embed/iconicss.min.css)
 * @asset(wax/demo/*)
 */
qx.Class.define("wax.demo.Application",
{
  extend : qx.application.Standalone,

    /*
  *****************************************************************************
    PROPERTIES
  *****************************************************************************
  */

 properties :
 {
   demoMode :
   {
     check : ["desktop", "mobile"],
     init : "desktop"
   }
 },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    _blocker : null,
    
    _northBox : null,
    
    _westBox : null,
    
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }
      
      // >>> START of Base Scaffolding >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // >>> Base Scaffolding are objects common to all Wax - Franklin based apps  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      // App's Root
      var approot = this.getRoot();

      // Add a Blocker to the application's root for the Main Menu Popup
      this._blocker = new qx.ui.core.Blocker(approot).set({color: "black", opacity: .08});
      
      // App's main Container (Composite) with Dock Layout 
      var appcompdock = new qx.ui.container.Composite(new qx.ui.layout.Dock(0, 0)).set({backgroundColor: "transparent"});
      
      // Dock's North section (Canvas)
      var northhbox = this._northBox = new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({backgroundColor: "white", decorator : "topheader"});

      // Dock's West section (VBox)
      var westbox = this._westBox = new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({backgroundColor: "white", padding: [10,0,10,0], decorator : "leftside"});

      // Dock's Center section (Stack) === THE STACK ===
      var centerbox = new qx.ui.container.Stack().set({backgroundColor: "white", padding: 0});

      // phone/phonegap
      //if (qx.core.Environment.get("phonegap")) {
      var southbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(4)).set({alignY: "middle", padding: [0,4,0,4], decorator: "bottombar"});
      //}

      // West Scroll area to fit all menu items
      var scrollwest = new qx.ui.container.Scroll().set({scrollbarX: "off", minWidth: 230, padding: 0, margin: 0, contentPadding: [0,0,0,0]});

      // Center Scroll area to fit all content
      var scroll = new qx.ui.container.Scroll().set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});

      // === North Toolbar, Parts and Buttons ===
      var northtoolbar = new qx.ui.toolbar.ToolBar().set({backgroundColor: "white"});
      var mainmenupart = new qx.ui.toolbar.Part(); //Top-Left of the screen 
      var profilepart = new qx.ui.toolbar.Part(); // Top-Right of the screen

      // Icon Images
      var menuimage = "wax/demo/round-menu-24px.svg";
      var roundacct = "wax/demo/round-account_circle-24px.svg";
      var testimage = "wax/demo/test-image.svg";

      // Top-Left Button
      var mainmenubtnbutton = new qx.ui.toolbar.Button("MainMenu", menuimage).set({show: "icon"});

      // Top-Right MenuButton
      var profilemenubutton = new qx.ui.toolbar.MenuButton("ProfileMenu", roundacct).set({show: "icon", showArrow: false});
      
      // Main Menu Popup (VBox)
      var mainmenupopup = new qx.ui.popup.Popup().set({allowGrowY: true, padding: 10});
      mainmenupopup.setLayout(new qx.ui.layout.VBox(0));

      // Profile and Settings Menu and Menu Buttons
      var profilemenu = new qx.ui.menu.Menu().set({spacingX: 12});
      var switchmenubutton1 = new qx.ui.menu.Button("Switch to Mobile", "wax/demo/mobile_friendly-24px.svg").set({padding: 10});
      switchmenubutton1.getChildControl("icon").set({ width: 24, height: 24 });
      var aboutmenubutton1 = new qx.ui.menu.Button("About Wax", "wax/demo/info-24px.svg").set({padding: 10});
      aboutmenubutton1.getChildControl("icon").set({ width: 24, height: 24 });

      //create About Wax popup window
      var winAboutWax = this.__createDetailWindow();

      winAboutWax.getLayout().set({spacing: 20});
      winAboutWax.set({caption: "About Wax", contentPadding: 0, status: "Github repo coming soon"});
      var txtaboutwax = "Wax aims to be a rapid application development and prototyping tool/system. There's a spectrum of rapid-app-dev tools (or low-code tools) - Outsystems, Appian and Ionic on the high-end, Foundation, Gatsbyjs and SemanticUI on the other. Wax is currently not yet on this spectrum, but it does have an approach and supporting assets to begin the process of becoming a highly effective and useful app-dev/app-prototyping asset.<br><br><br>";
      txtaboutwax += "<span style='font-size: 16px;'>THE APPROACH (so far):</span><br><br>";
      txtaboutwax += "<b>Build Qooxdoo skeletons (and lots of them) that function on multiple devices or use case scenarios.</b> A typical use case - After meeting with the client and gathering initial requirements, the prototype developer generates an application using a skeleton (chosen from a long list of skeletons) that best meets the initial requirements. Just like website templates found on the web, Qooxdoo skeletons would encompass enough functionality to help produce a high fidelity prototype in a matter of a few days. There is the potential that a skeleton could also include mock data (json) and non-Qooxdoo scripts to set up a cloud backend (not yet proven out). Skeletons could even include non-Qooxdoo templates for native mobile frameworks such as React Native, Flutter and Felgo (easy to do since skeleton templates are just static files with mustache-like tags).<br><br>";
      txtaboutwax += "<b>Cut and paste components from a well-stocked and possibly specially-tailored demo browser application.</b> Just as we do today, we cut and paste code from examples into our apps. Properly constructed skeletons and documented demos could facilitate the rapid integration of components into any application (not yet proven out). Wax skeletons, and resulting applications would be divided out logically into three areas: Scaffolding, Wiring and Appearance. Scaffolding includes object creation, placement and initial configuration. Wiring involves application flow (mostly via event listener creation and assignment). Appearance is simple look and feel via theming and animations. Skeletons would include an appropriate amount of Appearance and animation code, but when the goal is to rapidly produce a high fidelity prototype Scaffolding and Wiring would be the top focus.<br><br>";
      txtaboutwax += "<b>Use other frameworks for native mobile applications, and sync changes made in the main Qooxdoo app with the produced (from a skeleton) native mobile framework project.</b> Converting Qooxdoo produced code to React Native code, for example, is relatively easy. Object hierarchy is taken from getObjectRegistry method of the Application (taken from Inspector application). UI objects and their properties can be easily mapped and organized (proven out to a small degree). The difficult part is how to best get the changes to (and from) the native mobile project. Using qooxdoo compiler would be ideal, but the compiler does not have access to the apps object hierarchy. The approach Wax would take is to mimic the manual means of producing code. The manual means goes something like this: Include InspectorModel.js file in a project. Add a control (Button) to execute the reading of the ObjectRegistry and translation to the target framework. Write the translation to the console (or a TextArea object). Cut and paste resulting code to the other project.  A more automated approach would be to include an Electronjs project/app in the skeleton for the user to run at any given time. Electronjs would then sync the resulting translation to the target native mobile project. This Electronjs, automated approach has not yet been proven out.<br><br><br>";
      txtaboutwax += "<span style='font-size: 16px;'>CONCLUSION:</span><br><br>";
      txtaboutwax += "Is Wax, or even the concept of Wax, a worthwhile endeavor? Can the needed productivity gains be met in order to call itself a rapid app-dev tool? Is the noted approach the right way forward? It completely leaves out any type of changes being made, or needed, to qooxdoo compiler. Red flag, or just using the simplest approach is the best approach, approach? This is all a head-scratcher for sure. Too many unknowns without enough time. Welcome to software solution development :-)<br><br><br>";
      txtaboutwax += "<span style='font-size: 16px;'>SPECIAL NOTE:</span><br><br>";
      txtaboutwax += "Skeletons and the demo browser are not new concepts to Qooxdoo. These features have been around since the beginning. The purpose of this writeup is to convey good-intent, thoughts and ideas on how to improve peoples work lives, and not meant to be critical or take credit for anything in anyway. The past and current qooxdoo core team have done, and are doing, phenomenal work. My thanks go out to them for making me look better than I really am - Cheers.";
      //var aboutbox = new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
      var aboutscroll = new qx.ui.container.Scroll().set({ allowStretchY: true, padding: 0, margin: 0, contentPadding: [0,24,0,24]});
      var waxatom = new qx.ui.basic.Atom(txtaboutwax,"wax/demo/ville_Wax.png").set({rich: true, iconPosition: "top", gap: 30, paddingTop: 30});
      waxatom.getChildControl("icon").set({scale: true, width: 300, height: 106});
      waxatom.getChildControl("label").set({wrap: true});
      aboutscroll.add(waxatom);

      winAboutWax.add(aboutscroll, {flex:1});
      var btnClosewinAbout = new qx.ui.form.Button("Close Window").set({marginBottom: 18, maxWidth: 300, alignX: "center", alignY: "middle"});
      //winAboutWax.add(new qx.ui.core.Spacer(30, 20), {flex: 1});
      winAboutWax.add(btnClosewinAbout);
      /*winAboutWax.addListener("execute", function(e) {
        winAboutWax.restore();
        winAboutWax.center();
        winAboutWax.show();
      }, this);*/
      btnClosewinAbout.addListener("execute", function(e) {
        winAboutWax.close();
      }, this);

      approot.addListener("resize", function(e){
        winAboutWax.center();
      }, this);

      aboutmenubutton1.addListener("execute", function(e) {
        winAboutWax.restore();
        winAboutWax.maximize();
        winAboutWax.center();
        winAboutWax.show();
      }, this);

      
      // Add Main Menu Popup Listeners
      mainmenubtnbutton.addListener("execute", function(e)
      {
        if (qx.core.Environment.get("browser.name") != "edge"){
          this._blocker.blockContent(mainmenubtnbutton.getZIndex());
        }
        mainmenupopup.show();
      }, this);
      mainmenupopup.addListener("disappear", function(e)
      {
        this._blocker.unblock();
      }, this);

      // Assemble all base pieces  
      scrollwest.add(westbox);
      scroll.add(centerbox);
      appcompdock.add(northhbox, {edge:"north"});
      appcompdock.add(scrollwest, {edge:"west"});
      appcompdock.add(scroll, {edge:"center"});
      approot.add(appcompdock, {edge: 0});
      profilemenu.add(switchmenubutton1);
      profilemenu.add(aboutmenubutton1);
      profilemenubutton.setMenu(profilemenu);

      var atmlogocurrentpage = new qx.ui.basic.Atom("Wax","wax/demo/Wax_demo_logo.svg").set({font: "hym-app-header", gap: 10, padding: 0, visibility: "hidden"});
      atmlogocurrentpage.getChildControl("icon").set({ scale: true, width: 48, height: 38 });
      mainmenupart.add(mainmenubtnbutton);
      profilepart.add(profilemenubutton);
      
      northtoolbar.add(mainmenupart);
      northtoolbar.addSpacer();
      northtoolbar.add(atmlogocurrentpage);
      northtoolbar.addSpacer();
      northtoolbar.add(profilepart);

      northhbox.add(northtoolbar, {left: 0, right: 0});

      appcompdock.add(southbox, {edge: "south"});

      // <<< END of Base Scaffolding <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

      // Add some simple ease in animation to the app's blocker
      var fadeinb = {duration: 300, timing: "ease", keyFrames : {
        0: {opacity: 0},
        100: {opacity: .08}
        }};

      this._blocker.addListener("blocked", function(e) {
        var domtable;
        if (domtable = this._blocker.getBlockerElement().getDomElement()) {
          qx.bom.element.Animation.animate(domtable, fadeinb);
        }
      }, this);



      // >>> Populate THE STACK >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Four page stack EXAMPLE
       // Dashboard Page with Flow layout
       // Overview Page with links to a Detail Page
       // Table to List Page - shows how the Table Widget converts to a List Widget for smaller screens
      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      var newapproachpage = new qx.ui.container.Composite().set({padding: [20,30]});
      var dashboardpage = new qx.ui.container.Composite().set({padding: [20,30]});
      var overviewpage = new qx.ui.container.Composite(new qx.ui.layout.VBox(10)).set({padding: [20,30]});
      var tablelistpage = new qx.ui.container.Composite().set({padding: [20,30]});
      
      newapproachpage.setLayout(new qx.ui.layout.VBox(10).set({alignX: "left"})); 
      var lblnewapproachheader = new qx.ui.basic.Label("New Approach").set({font: "control-header"});
      //simple description
      var lblnewapproachsimpledesc = new qx.ui.basic.Label("Theres a new approach. Each icon is its own object.").set({rich: true, wrap: true});



      //more structure
      dashboardpage.setLayout(new qx.ui.layout.VBox(10).set({alignX: "left"}));  

      // iConicss Icons
      // Top header
      var lbliconicssheader = new qx.ui.basic.Label("iConicss (Pure CSS Icons)").set({font: "control-header"});

      //simple description
      var lbliconicsssimpledesc = new qx.ui.basic.Label("iConicss by Viglino, is an icon set implemented in pure HTML and CSS. Below is just a subset of icons. Visit <b><a href='https://viglino.github.io/iconicss/?&page=icons' target='_blank'>iConicss Github site</a></b> for the full list of available icons.").set({rich: true, wrap: true});

      // Basic usage
      var lblsubheadsimple =  new qx.ui.basic.Label("Basic usage:").set({font: "headeratom", marginTop: 40});
      var lblsimpleembed = new qx.ui.basic.Label("Here, at its most <u>basic</u>, is a lone Embed object (named \"cube-o\"), sized at 3 (\"em\" per the template) and colored <span style='color: blue;'>blue</span>:").set({rich: true, wrap: true});
      var embedCubeo = new ville.embed.Embed({ name: "cube-o", size: 3, color: "blue" });
      var lblsimpleembedcode = new qx.ui.basic.Label("<span style='color:blue;'>new</span> <span style='color:green;'>ville.embed.Embed</span>({ name: <span style='color:maroon;'>\"cube-o\"</span>, size: <span style='color:green;'>3</span>, color: <span style='color:maroon;'>\"blue\"</span> });").set({rich: true, wrap: true, font: "monospace", backgroundColor: "#f2f2f2", padding: 6});

      // Use in a Button (requires patching)
      var lblsubheadbutton =  new qx.ui.basic.Label("Use in another widget:").set({font: "headeratom", marginTop: 40});
      var lblmoreembed = new qx.ui.basic.Label("To use the new widget in a Button <b>(qx.ui.form.Button)</b>, you need to first patch the Button's underlying Atom <b>(qx.ui.basic.Atom)</b>. Once patched, use the appropriate naming convention so that the Atom control knows to use the new ville.embed.Embed object instead of the qx.ui.basic.Image object:").set({rich: true, wrap: true});
      qx.Class.patch(qx.ui.basic.Atom, ville.embed.MAtomPatch);
      var btnembedcubeobutton = new qx.ui.form.Button('Click Me','data:text/json;{ "name": "cube-o", "size":3, "color":"blue" }').set({appearance: "testbutton", maxWidth: 200, alignX: "left", alignY: "middle"});
      var lblbuttonembedcode = new qx.ui.basic.Label("<span style='color:green;'>/* Patch Atom before creating the Button */</span><br>qx.Class.patch(qx.ui.basic.Atom, ville.embed.MAtomPatch);<br><span style='color:blue;'>new</span> <span style='color:green;'>qx.ui.form.Button(</span><span style='color:maroon;'>'Click Me','data:text/json;{ \"name\": \"cube-o\", \"size\": 3, \"color\": \"blue\" }'</span>);").set({rich: true, wrap: true, font: "monospace", backgroundColor: "#f2f2f2", padding: 6});
      
      btnembedcubeobutton.addListener("mouseover",function(e) {
        var icondom = this.getChildControl("icon").getContentElement().getDomElement();
        qx.bom.element.AnimationCss.animate(icondom, ville.embed.Manager.getInstance().animations["grow"], undefined);
      });      
      btnembedcubeobutton.addListener("mouseout",function(e) {
        var icondom = this.getChildControl("icon").getContentElement().getDomElement();
        qx.bom.element.AnimationCss.animateReverse(icondom, ville.embed.Manager.getInstance().animations["grow"], undefined);
      });


      // Some of my Favorite Icons
      var lblsubheaderFavs =  new qx.ui.basic.Label("A few of my favorite icons:").set({font: "headeratom", marginTop: 40});
      var dashboardiconflow = new qx.ui.container.Composite();
      var dashboardiconflowlayout = new qx.ui.layout.Flow(16,20,"left");
      dashboardiconflow.setLayout(dashboardiconflowlayout);
      //icons in Atoms
      var atmcoffeegrain = new qx.ui.basic.Atom("coffee-grain", 'data:text/json;{ "name": "coffee-grain", "size":3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmcoffee = new qx.ui.basic.Atom("coffee", 'data:text/json;{ "name": "coffee", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmshapes = new qx.ui.basic.Atom("shapes", 'data:text/json;{ "name": "shapes", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmconnection = new qx.ui.basic.Atom("connection", 'data:text/json;{ "name": "connection", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmclouddownload = new qx.ui.basic.Atom("cloud-download", 'data:text/json;{ "name": "cloud-download", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmfolderclose = new qx.ui.basic.Atom("folder-close", 'data:text/json;{ "name": "folder-close", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmtrumpet = new qx.ui.basic.Atom("trumpet", 'data:text/json;{ "name": "trumpet", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmfootball = new qx.ui.basic.Atom("football", 'data:text/json;{ "name": "football", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmrocket = new qx.ui.basic.Atom("rocket", 'data:text/json;{ "name": "rocket", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmgear = new qx.ui.basic.Atom("gear", 'data:text/json;{ "name": "gear", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmdrone = new qx.ui.basic.Atom("drone", 'data:text/json;{ "name": "drone", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmhtml5 = new qx.ui.basic.Atom("html5", 'data:text/json;{ "name": "html5", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmcss3 = new qx.ui.basic.Atom("css3", 'data:text/json;{ "name": "css3", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmjs = new qx.ui.basic.Atom("js", 'data:text/json;{ "name": "js", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmgoogledrivec = new qx.ui.basic.Atom("google-drive-c", 'data:text/json;{ "name": "google-drive-c", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmvisualcode = new qx.ui.basic.Atom("visual-code", 'data:text/json;{ "name": "visual-code", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmwolverinec = new qx.ui.basic.Atom("wolverine-c", 'data:text/json;{ "name": "wolverine-c", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmsuno = new qx.ui.basic.Atom("sun-o", 'data:text/json;{ "name": "sun-o", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmbinocular = new qx.ui.basic.Atom("binocular", 'data:text/json;{ "name": "binocular", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmbombshell = new qx.ui.basic.Atom("bombshell", 'data:text/json;{ "name": "bombshell", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmfoodpot = new qx.ui.basic.Atom("food-pot", 'data:text/json;{ "name": "food-pot", "size": 3 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmxsquare = new qx.ui.basic.Atom("x-square", 'data:text/json;{ "name": "x-square", "size": 3, "color": "red" }').set({iconPosition: "top", appearance: "icss-atom"});
      
      dashboardiconflow.add(atmcoffeegrain);
      dashboardiconflow.add(atmcoffee);
      dashboardiconflow.add(atmshapes);
      dashboardiconflow.add(atmconnection);
      dashboardiconflow.add(atmclouddownload);
      dashboardiconflow.add(atmfolderclose);
      dashboardiconflow.add(atmtrumpet);
      dashboardiconflow.add(atmfootball);
      dashboardiconflow.add(atmrocket);
      dashboardiconflow.add(atmgear);
      dashboardiconflow.add(atmdrone);
      dashboardiconflow.add(atmhtml5);
      dashboardiconflow.add(atmcss3);
      dashboardiconflow.add(atmjs);
      dashboardiconflow.add(atmgoogledrivec);
      dashboardiconflow.add(atmvisualcode);
      dashboardiconflow.add(atmwolverinec);
      dashboardiconflow.add(atmsuno);
      dashboardiconflow.add(atmbinocular);
      dashboardiconflow.add(atmbombshell);
      dashboardiconflow.add(atmfoodpot);
      dashboardiconflow.add(atmxsquare);

      // Assemble
      dashboardpage.add(lbliconicssheader);
      dashboardpage.add(lbliconicsssimpledesc);
      dashboardpage.add(lblsubheadsimple);
      dashboardpage.add(lblsimpleembed);
      dashboardpage.add(embedCubeo);
      dashboardpage.add(lblsimpleembedcode);
      dashboardpage.add(lblsubheadbutton);
      dashboardpage.add(lblmoreembed);
      dashboardpage.add(btnembedcubeobutton);
      dashboardpage.add(lblbuttonembedcode);
      dashboardpage.add(lblsubheaderFavs);
      dashboardpage.add(dashboardiconflow);


      // Second page marker  
      var lblfluentuiheader = new qx.ui.basic.Label("Fluent UI Web Icons (SVG)").set({font: "control-header"});
      
       //simple description
       var lblfluentsimpledesc = new qx.ui.basic.Label("Microsoft's Fluent UI web icons: <b><a href='https://developer.microsoft.com/en-us/fluentui#/controls/web/icon' target='_blank'>Fluent UI Web Icons</a></b> for the full list of available icons.").set({rich: true, wrap: true});

       // Basic usage
       var lblsubheadfuisimple =  new qx.ui.basic.Label("Basic usage:").set({font: "headeratom", marginTop: 40});
       var lblfuisimpleembed = new qx.ui.basic.Label("Here, at its most <u>basic</u>, is a lone Embed object (named \"fui-airtickets\"), sized 60 x 60, and colored <span style='color: blue;'>blue</span>:").set({rich: true, wrap: true});
       var embedfuiairticket = new ville.embed.Embed({ name: "fui-airtickets", color: "blue", width: 60, height: 60, allowGrowX: false });
       var lblsimplefuiembedcode = new qx.ui.basic.Label("<span style='color:blue;'>new</span> <span style='color:green;'>ville.embed.Embed</span>({ name: <span style='color:maroon;'>\"fui-airtickets\"</span>, width: <span style='color:green;'>60</span>, height: <span style='color:green;'>60</span>, color: <span style='color:maroon;'>\"blue\"</span> });").set({rich: true, wrap: true, font: "monospace", backgroundColor: "#f2f2f2", padding: 6});
 
       // Use in a Button (requires patching)
       var lblsubheadfuibutton =  new qx.ui.basic.Label("Use in another widget:").set({font: "headeratom", marginTop: 40});
       var lblmorefuiembed = new qx.ui.basic.Label("To use the new widget in a Button <b>(qx.ui.form.Button)</b>, you need to first patch the Button's underlying Atom <b>(qx.ui.basic.Atom)</b>. Once patched, use the appropriate naming convention so that the Atom control knows to use the new ville.embed.Embed object instead of the qx.ui.basic.Image object:").set({rich: true, wrap: true});
       var btnembedfuiairticketsbutton = new qx.ui.form.Button('Click Me','data:text/json;{ "name": "fui-airtickets", "color":"blue", "width": 60, "height": 60 }').set({appearance: "testbutton", maxWidth: 200, alignX: "left", alignY: "middle"});
       var lblbuttonfuiembedcode = new qx.ui.basic.Label("<span style='color:green;'>/* Patch Atom before creating the Button */</span><br>qx.Class.patch(qx.ui.basic.Atom, ville.embed.MAtomPatch);<br><span style='color:blue;'>new</span> <span style='color:green;'>qx.ui.form.Button(</span><span style='color:maroon;'>'Click Me','data:text/json;{ \"name\": \"fui-airtickets\", \"color\": \"blue\", \"width\": 60, \"height\": 60 }'</span>);").set({rich: true, wrap: true, font: "monospace", backgroundColor: "#f2f2f2", padding: 6});
       
       btnembedfuiairticketsbutton.addListener("mouseover",function(e) {
         var icondom = this.getChildControl("icon").getContentElement().getDomElement();
         qx.bom.element.AnimationCss.animate(icondom, ville.embed.Manager.getInstance().animations["grow"], undefined);
       });      
       btnembedfuiairticketsbutton.addListener("mouseout",function(e) {
         var icondom = this.getChildControl("icon").getContentElement().getDomElement();
         qx.bom.element.AnimationCss.animateReverse(icondom, ville.embed.Manager.getInstance().animations["grow"], undefined);
       });

      // Some of my Favorite Icons
      var lblsubheaderfuiFavs =  new qx.ui.basic.Label("A few of my favorite icons:").set({font: "headeratom", marginTop: 40});
      var fuiiconflow = new qx.ui.container.Composite();
      var fuiiconflowlayout = new qx.ui.layout.Flow(16,20,"left");
      fuiiconflow.setLayout(fuiiconflowlayout);
      var atmaccess = new qx.ui.basic.Atom("Access", 'data:text/json;{ "name": "fui-access", "color": "#AB2325", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmword = new qx.ui.basic.Atom("Word", 'data:text/json;{ "name": "fui-word", "color": "#1748A4", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmexcel = new qx.ui.basic.Atom("Excel", 'data:text/json;{ "name": "fui-excel", "color": "#12743B", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmppt = new qx.ui.basic.Atom("PowerPoint", 'data:text/json;{ "name": "fui-ppt", "color": "#EE3111", "width": 60, "height": 60, "allowGrowX": false }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmpub = new qx.ui.basic.Atom("Publisher", 'data:text/json;{ "name": "fui-pub", "color": "#007462", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmonenote = new qx.ui.basic.Atom("OneNote", 'data:text/json;{ "name": "fui-onenote", "color": "#420F6F", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmfuikey = new qx.ui.basic.Atom("Permissions Icon", 'data:text/json;{ "name": "fui-key", "width": 60, "height": 60, "allowGrowX": false }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmfuirelease = new qx.ui.basic.Atom("Release Definition", 'data:text/json;{ "name": "fui-release", "width": 60, "height": 60, "allowGrowX": false }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmfuishapes = new qx.ui.basic.Atom("Shapes", 'data:text/json;{ "name": "fui-shapes", "width": 60, "height": 60, "allowGrowX": false }').set({iconPosition: "top", appearance: "icss-atom"});

      fuiiconflow.add(atmaccess);
      fuiiconflow.add(atmword);
      fuiiconflow.add(atmexcel);
      fuiiconflow.add(atmppt);
      fuiiconflow.add(atmpub);
      fuiiconflow.add(atmonenote);
      fuiiconflow.add(atmfuikey);
      fuiiconflow.add(atmfuirelease);
      fuiiconflow.add(atmfuishapes);

      overviewpage.add(lblfluentuiheader);     
      overviewpage.add(lblfluentsimpledesc); 
      overviewpage.add(lblsubheadfuisimple); 
      overviewpage.add(lblfuisimpleembed); 
      overviewpage.add(embedfuiairticket);
      overviewpage.add(lblsimplefuiembedcode);
      overviewpage.add(lblsubheadfuibutton);
      overviewpage.add(lblmorefuiembed);
      overviewpage.add(btnembedfuiairticketsbutton);
      overviewpage.add(lblbuttonfuiembedcode);
      overviewpage.add(lblsubheaderfuiFavs);
      overviewpage.add(fuiiconflow);


      // Third page marker
      var tablelistvbox = new qx.ui.layout.VBox(10);
      tablelistpage.setLayout(tablelistvbox);

      // Third page marker  
      var lblmaterialheader = new qx.ui.basic.Label("Material Design Icons (SVG)").set({font: "control-header"});
            
      //simple description
      var lblmaterialsimpledesc = new qx.ui.basic.Label("Material Design icons: <b><a href='https://material.io/resources/icons/?style=baseline' target='_blank'>Material Design Icons</a></b> for the full list of available icons.").set({rich: true, wrap: true});

      // Basic usage
      var lblsubheadmaterialsimple =  new qx.ui.basic.Label("Basic usage:").set({font: "headeratom", marginTop: 40});
      var lblmaterialsimpleembed = new qx.ui.basic.Label("Same as Fluent UI Web Icons, just with different named embeds.").set({rich: true, wrap: true});

      // Use in a Button (requires patching)
      var lblsubheadmaterialbutton =  new qx.ui.basic.Label("Use in another widget:").set({font: "headeratom", marginTop: 40});
      var lblmorematerialembed = new qx.ui.basic.Label("Same as Fluent UI Web Icons, just with different named embeds.").set({rich: true, wrap: true});

      // Some of my Favorite Icons
      var lblsubheadermaterialFavs =  new qx.ui.basic.Label("A few examples:").set({font: "headeratom", marginTop: 40});
      var materialiconflow = new qx.ui.container.Composite();
      var materialiconflowlayout = new qx.ui.layout.Flow(16,20,"left");
      materialiconflow.setLayout(materialiconflowlayout);
      var atmevent = new qx.ui.basic.Atom("Event", 'data:text/json;{ "name": "material-event", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmbusiness = new qx.ui.basic.Atom("Business", 'data:text/json;{ "name": "material-business", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmbiotech = new qx.ui.basic.Atom("Biotech", 'data:text/json;{ "name": "material-biotech", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmbolt = new qx.ui.basic.Atom("Bolt", 'data:text/json;{ "name": "material-bolt", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
      
      materialiconflow.add(atmevent);
      materialiconflow.add(atmbusiness);
      materialiconflow.add(atmbiotech);
      materialiconflow.add(atmbolt);

      tablelistpage.add(lblmaterialheader);
      tablelistpage.add(lblmaterialsimpledesc);
      tablelistpage.add(lblsubheadmaterialsimple);
      tablelistpage.add(lblmaterialsimpleembed);
      tablelistpage.add(lblsubheadmaterialbutton);
      tablelistpage.add(lblmorematerialembed);
      tablelistpage.add(lblsubheadermaterialFavs);
      tablelistpage.add(materialiconflow);



      // Menu Page for phonegap only
      var menupage = new qx.ui.container.Composite(new qx.ui.layout.VBox(10, null, "separator-vertical")).set({padding: [60, 0, 0, 0]});
      var btnAbout = new qx.ui.form.Button("About Wax", "wax/demo/info-24px.svg").set({appearance : "hym-page-button"});
      var btnSwitchBack = new qx.ui.form.Button("Switch to Desktop", "wax/demo/desktop_windows-24px.svg").set({appearance : "hym-page-button"});
      var btnProfile = new qx.ui.form.Button("Profile", "wax/demo/edit-24px.svg").set({appearance : "hym-page-button"});
      var btnSettings = new qx.ui.form.Button("Settings", "wax/demo/outline-settings-24px.svg").set({appearance : "hym-page-button"});
      var btnLogout = new qx.ui.form.Button("Logout", "wax/demo/exit_to_app-24px.svg").set({appearance : "hym-page-button"});
      
      menupage.add(new qx.ui.basic.Label("WAX DEMO").set({paddingLeft: 20, textColor: "gray"}));
      menupage.add(btnSwitchBack);
      menupage.add(btnAbout);
      menupage.add(new qx.ui.basic.Label("ADDITIONAL FEATURES").set({paddingLeft: 20, paddingTop: 38, textColor: "gray"}));
      menupage.add(btnProfile);
      menupage.add(btnSettings);
      menupage.add(btnLogout);

    
      // Assemble - THE STACK 
      centerbox.add(dashboardpage);
      centerbox.add(overviewpage);
      centerbox.add(tablelistpage);
      centerbox.add(menupage);

      // Show the default page
      centerbox.setSelection([dashboardpage]);

      btnAbout.addListener("execute", function(e) {
        winAboutWax.restore();
        winAboutWax.maximize();
        winAboutWax.center();
        winAboutWax.show();
      }, this);

      // <<< END of THE STACK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      
      // >>> Populate the Main Menu and Popup Main Menu with content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Create Menu Buttons that will navigate the user through THE STACK Pages 
      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Populate westBox with content
      var atmleftnavheader = new qx.ui.basic.Atom("Wax Demo", "wax/demo/Wax_demo_logo.png").set({appearance: "header-atom", anonymous: true, focusable: false, selectable: false });
      atmleftnavheader.getChildControl("icon").set({ scale : true });
      westbox.add(atmleftnavheader);
      var tbtndashboardpage = new wax.demo.MenuButton("iConicss", "wax/demo/Css3_logo.svg", true );
      westbox.add(tbtndashboardpage);

      var tbtnSecondPage = new wax.demo.MenuButton("Fluent UI (SVG)", "wax/demo/fluent_globe.svg", true);
      westbox.add(tbtnSecondPage);

      var tbtnThirdPage = new wax.demo.MenuButton("Material (SVG)", "wax/demo/material_logo.svg", true);
      westbox.add(tbtnThirdPage);

      var westboxbuttongroup = new qx.ui.form.RadioGroup();
      westboxbuttongroup.add(tbtndashboardpage, tbtnSecondPage, tbtnThirdPage);
      
      // CLONE the above controls
      var atmmenuleftnavheader = atmleftnavheader.clone();
      atmmenuleftnavheader.getChildControl("icon").set({ scale : true });
      var tbtnmenudashboardpage = tbtndashboardpage.clone();
      tbtnmenudashboardpage.getChildControl("icon").set({ scale : true });
      var tbtnmenuSecondPage = tbtnSecondPage.clone();
      tbtnmenuSecondPage.getChildControl("icon").set({ scale : true });
      var tbtnmenuThirdPage = tbtnThirdPage.clone();
      tbtnmenuThirdPage.getChildControl("icon").set({ scale : true });

      // Add the clones to the Main Menu Popup
      mainmenupopup.add(atmmenuleftnavheader);
      mainmenupopup.add(tbtnmenudashboardpage);
      mainmenupopup.add(tbtnmenuSecondPage);
      mainmenupopup.add(tbtnmenuThirdPage);


      // Assign all the clones their own RadioGroup
      var mainmenubuttongroup = new qx.ui.form.RadioGroup();
      mainmenubuttongroup.add(tbtnmenudashboardpage, tbtnmenuSecondPage, tbtnmenuThirdPage);
      
      //***  CODE for applying popup fading in and out  ***//
      var fadeinleft = {duration: 300, timing: "ease-out", origin: "left top", keyFrames : {
        0: {opacity: 0, left: "-300px"},
        100: {opacity: 1, left: "0px"}
        }};

      mainmenupopup.addListener("appear", function(e) {
        var domtable = mainmenupopup.getContentElement().getDomElement();
        qx.bom.element.Animation.animate(domtable, fadeinleft);
      }, this);

      // <<< END of Main Menu and Main Menu Popup <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    
      // >>> Populate the Hybrid Mobile (hym) Main Menu  content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Create Menu Buttons that will navigate the user through THE STACK Pages 
      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Populate southbox with content
      var tbtndashboardpagehym = new wax.demo.MenuButton("iConicss", "wax/demo/Css3_logo.svg", true ).set({appearance: "mainmenubutton-hym", iconPosition: "top"});
      var tbtnoverviewpagehym = new wax.demo.MenuButton("Fluent UI", "wax/demo/fluent_globe.svg", true).set({appearance: "mainmenubutton-hym", iconPosition: "top"});
      var tbtnlistofitemspagehym = new wax.demo.MenuButton("Material", "wax/demo/material_logo.svg", true).set({appearance: "mainmenubutton-hym", iconPosition: "top"});
      var tbtnmenuhym = new wax.demo.MenuButton("Menu", menuimage, true).set({appearance: "mainmenubutton-hym", iconPosition: "top"});
      southbox.add(tbtndashboardpagehym, {flex: 1});
      southbox.add(tbtnoverviewpagehym, {flex: 1});
      southbox.add(tbtnlistofitemspagehym, {flex: 1});
      southbox.add(tbtnmenuhym, {flex: 1});

      southbox.setVisibility("excluded");

      // Assign all the clones their own RadioGroup
      var mainmenubuttongrouphym = new qx.ui.form.RadioGroup();
      mainmenubuttongrouphym.add(tbtndashboardpagehym, tbtnoverviewpagehym, tbtnlistofitemspagehym, tbtnmenuhym);

      // <<< END of Hybrid Mobil (hym) Main Menu and Main Menu Popup <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


      // >>> Wire all the Main Menu Buttons to THE STACK Pages (via Listeners) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Turn on all wax.demo.MenuButton listeners
      tbtndashboardpage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([dashboardpage]);
          mainmenubuttongroup.setSelection([tbtnmenudashboardpage]);
        }
      }, this);

      tbtnSecondPage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([overviewpage]);
          mainmenubuttongroup.setSelection([tbtnmenuSecondPage]);
        }
      }, this);

      tbtnThirdPage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([tablelistpage]);
          mainmenubuttongroup.setSelection([tbtnmenuThirdPage]);
        }
      }, this);

      // Popup menu buttons
      tbtnmenudashboardpage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([dashboardpage]);
          westboxbuttongroup.setSelection([tbtndashboardpage]);
          mainmenupopup.hide();
        }
      }, this);

      tbtnmenuSecondPage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([overviewpage]);
          westboxbuttongroup.setSelection([tbtnSecondPage]);

          dashboardpage.setVisibility("excluded");

          mainmenupopup.hide();
        }
      }, this);

      tbtnmenuThirdPage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([tablelistpage]);
          westboxbuttongroup.setSelection([tbtnThirdPage]);

          dashboardpage.setVisibility("excluded");

          mainmenupopup.hide();
        }
      }, this);

      // if Hybrid Mobile
      tbtndashboardpagehym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([dashboardpage]);
          atmlogocurrentpage.set({show: "both", label:"iConicss"});
        }
      }, this);

      tbtnoverviewpagehym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([overviewpage]);
          atmlogocurrentpage.set({show: "both", label:"Fluent UI"});
        }
      }, this);

      tbtnlistofitemspagehym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([tablelistpage]);
          atmlogocurrentpage.set({show: "both", label:"Material"});
        }
      }, this);

      tbtnmenuhym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([menupage]);
          atmlogocurrentpage.set({show: "both", label:"Menu"});
        }
      }, this);

      // Demo mode switching to Mobile
      switchmenubutton1.addListener("execute", function(e){
        this.setDemoMode("mobile");
        southbox.setVisibility("visible");
        scrollwest.setVisibility("excluded");
        profilemenubutton.setVisibility("hidden");
        mainmenupart.setVisibility("hidden");
        centerbox.setSelection([menupage]);
        atmlogocurrentpage.set({visibility: "visible", label:"Menu"});
        mainmenubuttongrouphym.setSelection([tbtnmenuhym]);
      }, this);

      // Demo mode switching back to desktop
      btnSwitchBack.addListener("execute", function(e){
        this.setDemoMode("desktop");
        southbox.setVisibility("excluded");
        profilemenubutton.setVisibility("visible");
        atmlogocurrentpage.setVisibility("hidden");
        mainmenupart.setVisibility("visible");
        centerbox.setSelection([dashboardpage]);
        mainmenubuttongroup.setSelection([tbtnmenudashboardpage]);
        westboxbuttongroup.setSelection([tbtndashboardpage]);
      }, this);


      // *** END of Wiring *************************************************************************

      
      // ====================================
      // =======  MediaQuery code  ========== 
      // ====================================

      var mq1 = new qx.bom.MediaQuery("screen and (min-width: 1024px)");

      mq1.on("change", function(e){
        if(mq1.isMatching() && this.getDemoMode()=="desktop"){
          scrollwest.setVisibility("visible"); 
          mainmenupart.setVisibility("excluded");
        }
        else {
          scrollwest.addListener("appear", function(e) {
            var domtable = scrollwest.getContentElement().getDomElement();
            qx.bom.element.Animation.animate(domtable, fadeinleft);
          }, this); 
          scrollwest.setVisibility("excluded");
          if (this.getDemoMode() == "desktop")
            mainmenupart.setVisibility("visible");
        }
      }, this);
      if (mq1.isMatching()) {
        scrollwest.setVisibility("visible"); 
        mainmenupart.setVisibility("excluded");
      }
      else {
        scrollwest.addListener("appear", function(e) {
          var domtable = scrollwest.getContentElement().getDomElement();
          qx.bom.element.Animation.animate(domtable, fadeinleft);
        }, this); 
        scrollwest.setVisibility("excluded"); 
        mainmenupart.setVisibility("visible");
      }

      var mq2 = new qx.bom.MediaQuery("screen and (min-width: 767px)");

      mq2.on("change", function(e){
        if(mq2.isMatching()){}
        else {}
      });

      if (mq2.isMatching()) {}
      else {}

    },


    __createDetailWindow : function()
    {
      // Create the Window
      var win = new qx.ui.window.Window("Detail Window").set({ appearance: "wax-window", allowMaximize : true, allowMinimize : false, modal: true, movable: true });
      win.setLayout(new qx.ui.layout.VBox(4));
      win.setShowStatusbar(true);
      win.setStatus("Generic Message"); 
      win.getChildControl("title").set({padding: [10,0,0,10]});

      return win;
    }
  }
});
