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

      // *** Mixins to enable embed features
      qx.Class.include(qx.ui.basic.Atom, ville.embed.MEmbed);

      // *** Icons using CSS clip-path
      //qx.Class.include(qx.ui.decoration.Decorator, ville.embed.MClipPath);
      
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
      var scrollwest = new qx.ui.container.Scroll().set({scrollbarX: "off", minWidth: 220, padding: 0, margin: 0, contentPadding: [0,0,0,10]});

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
      winAboutWax.set({ width: 430, height: 460, contentPadding: 0});
      var txtaboutwax = 'Project Github page: <a target="_blank" href="https://github.com/sqville/ville.Embed">https://github.com/sqville/ville.Embed</a>';
      //var aboutbox = new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
      var aboutscroll = new qx.ui.container.Scroll().set({ allowStretchY: true, padding: 0, margin: 0, contentPadding: [0,24,0,24]});
      var waxatom = new qx.ui.basic.Atom(txtaboutwax,"wax/demo/ville_Wax.png").set({rich: true, iconPosition: "top", gap: 30, paddingTop: 30});
      waxatom.getChildControl("label").set({wrap: true});
      aboutscroll.add(waxatom);

      winAboutWax.add(aboutscroll, {flex:1});
      var btnClosewinAbout = new qx.ui.form.Button("Close Window").set({marginBottom: 18, maxWidth: 300, alignX: "center", alignY: "middle"});
      //winAboutWax.add(new qx.ui.core.Spacer(30, 20), {flex: 1});
      winAboutWax.add(btnClosewinAbout);

      btnClosewinAbout.addListener("execute", function(e) {
        winAboutWax.close();
      }, this);

      approot.addListener("resize", function(e){
        winAboutWax.center();
      }, this);

      aboutmenubutton1.addListener("execute", function(e) {
        winAboutWax.restore();
        //winAboutWax.maximize();
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
      //scroll.add(centerbox);
      appcompdock.add(northhbox, {edge:"north"});
      appcompdock.add(scrollwest, {edge:"west"});
      //appcompdock.add(scroll, {edge:"center"});
      appcompdock.add(centerbox, {edge:"center"});
      approot.add(appcompdock, {edge: 0});
      //profilemenu.add(switchmenubutton1);
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
      
      var dashboardscrollstackpage = new qx.ui.container.Scroll().set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});

      dashboardscrollstackpage.add(dashboardpage);

      // iConicss Icons
      // Top header
      var lbliconicssheader = new qx.ui.basic.Label("iConicss (Pure CSS Icons)").set({font: "control-header"});

      //simple description
      var lbliconicsssimpledesc = new qx.ui.basic.Label("iConicss by Viglino, is an icon set implemented in pure HTML and CSS. Below is just a subset of icons. Visit <b><a href='https://viglino.github.io/iconicss/?&page=icons' target='_blank'>iConicss Github site</a></b> for the full list of available icons.").set({rich: true, wrap: true});

      // Basic usage
      var lblsubheadsimple =  new qx.ui.basic.Label("Basic usage:").set({font: "headeratom", marginTop: 40});
      var lblsimpleembed = new qx.ui.basic.Label("Here, at its most <u>basic</u>, is a lone Embed iConicss object, sized at 3 (\"em\" per the template) and colored <span style='color: blue;'>blue</span>:").set({rich: true, wrap: true});
      var embedCubeo = new ville.embed.iconicss.CubeO(3, "blue");
      var lblsimpleembedcode = new qx.ui.basic.Label("var <span style='color:green;'>cubeoicon</span> = <span style='color:blue;'>new</span> <span style='color:green;'>ville.embed.iconicss.CubeO</span>(<span style='color:green;'>3</span>, <span style='color:maroon;'>\"blue\"</span>);").set({rich: true, wrap: true, font: "monospace", backgroundColor: "#f2f2f2", padding: 6});

      // Use in a Button (requires patching)
      var lblsubheadbutton =  new qx.ui.basic.Label("Use in another widget:").set({font: "headeratom", marginTop: 40});
      var lblmoreembed = new qx.ui.basic.Label("To use the new widget in a Button <b>(qx.ui.form.Button)</b>, you need to first enhance the Button's underlying Atom <b>(qx.ui.basic.Atom)</b>. Once enhanced, add the icon object to the Atom based control:").set({rich: true, wrap: true});
      var cubeoicon = new ville.embed.iconicss.CubeO(2);
      var btnembedcubeobutton = new qx.ui.form.Button('Click Me').set({appearance: "testiconicssbutton", embed : cubeoicon, allowGrowX: false, padding: [10, 14], gap: 10, alignX: "left", alignY: "middle"});
      var lblbuttonembedcode = new qx.ui.basic.Label("<span style='color:green;'>/* Include the Embed Mixin before creating the Button */</span><br>qx.Class.include(<span style='color:green;'>qx.ui.form.Button, ville.embed.MEmbed</span>);<br><span style='color:blue;'>new</span> <span style='color:green;'>qx.ui.form.Button(</span><span style='color:maroon;'>'Click Me'</span>).set({ embed : <span style='color:green;'>cubeoicon</span> });").set({rich: true, wrap: true, font: "monospace", backgroundColor: "#f2f2f2", padding: 6});
      
      var animationGrow = {
        duration: 150,
        keyFrames : 
        {
          0 : {scale: 1},
          100 : {scale: 1.1}
        },
        keep : 100,
        timing: "ease-out"
      };
      
      btnembedcubeobutton.addListener("mouseover",function(e) {
        var icondom = cubeoicon.getContentElement().getDomElement();
        qx.bom.element.AnimationCss.animate(icondom, animationGrow, undefined);
      });      
      btnembedcubeobutton.addListener("mouseout",function(e) {
        var icondom = cubeoicon.getContentElement().getDomElement();
        qx.bom.element.AnimationCss.animateReverse(icondom, animationGrow, undefined);
      });
      
      // Some of my Favorite Icons
      var lblsubheaderFavs =  new qx.ui.basic.Label("A few of my favorite icons:").set({font: "headeratom", marginTop: 40});
      var dashboardiconflow = new qx.ui.container.Composite();
      var dashboardiconflowlayout = new qx.ui.layout.Flow(16,20,"left");
      dashboardiconflow.setLayout(dashboardiconflowlayout);
      
      //icons in Atoms
      var atmcoffeegrain = new qx.ui.basic.Atom("coffee-grain").set({ appearance: "icss-atom", embed: new ville.embed.iconicss.CoffeeGrain(3) });
      var atmcoffee = new qx.ui.basic.Atom("coffee").set({ appearance: "icss-atom", embed: new ville.embed.iconicss.Coffee(3) });
      var atmfootball = new qx.ui.basic.Atom("football").set({ appearance: "icss-atom", embed: new ville.embed.iconicss.Football(3) });
      var atmshapes = new qx.ui.basic.Atom("shapes").set({ appearance: "icss-atom", embed: new ville.embed.iconicss.Shapes(3) });
      var atmrocket = new qx.ui.basic.Atom("rocket").set({ appearance: "icss-atom", embed: new ville.embed.iconicss.Rocket(3) });
      var atmwolverinec = new qx.ui.basic.Atom("wolverine").set({ appearance: "icss-atom", embed: new ville.embed.iconicss.Wolverine(3) });
      var atmsuno = new qx.ui.basic.Atom("sun-o").set({ appearance: "icss-atom", embed: new ville.embed.iconicss.SunO(3) });

      dashboardiconflow.add(atmcoffee);
      dashboardiconflow.add(atmcoffeegrain);
      dashboardiconflow.add(atmfootball);
      dashboardiconflow.add(atmshapes);
      dashboardiconflow.add(atmrocket);
      dashboardiconflow.add(atmwolverinec);
      dashboardiconflow.add(atmsuno);

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
      var overviewscrollstackpage = new qx.ui.container.Scroll().set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});
      overviewscrollstackpage.add(overviewpage);

      var lblfluentuiheader = new qx.ui.basic.Label("Fluent UI Web Icons (SVG)").set({font: "control-header"});
      
       //simple description
       var lblfluentsimpledesc = new qx.ui.basic.Label("Microsoft's Fluent UI web icons: <b><a href='https://react.fluentui.dev/?path=/docs/icons-overview--default' target='_blank'>Fluent UI Web Icons</a></b> for the full list of available icons.").set({rich: true, wrap: true});

       // Basic usage
       var lblsubheadfuisimple =  new qx.ui.basic.Label("Basic usage:").set({font: "headeratom", marginTop: 40});
       var lblfuisimpleembed = new qx.ui.basic.Label("Here, at its most <u>basic</u>, is a lone Embed object, sized 40 x 40, and colored <span style='color: blue;'>blue</span>:").set({rich: true, wrap: true});
       var embedfuiairplanetakeoffalone = new ville.embed.fluent.AirplaneTakeOff().set({ width: 40, height: 40, textColor: "blue" });
       var lblsimplefuiembedcode = new qx.ui.basic.Label("var <span style='color:green;'>fuiairplanetakeoff</span> = <span style='color:blue;'>new</span> <span style='color:green;'>ville.embed.fluent.AirplaneTakeOff</span>().set({ width: 40, height: 40, textColor: \"blue\" });").set({rich: true, wrap: true, font: "monospace", backgroundColor: "#f2f2f2", padding: 6});
 
       // Use in a Button (requires patching)
       var lblsubheadfuibutton =  new qx.ui.basic.Label("Use in another widget:").set({font: "headeratom", marginTop: 40});
       var lblmorefuiembed = new qx.ui.basic.Label("To use the new widget in a Button <b>(qx.ui.form.Button)</b>, you need to first enhance the Button's underlying Atom <b>(qx.ui.basic.Atom)</b>. Once enhanced, add the icon object to the Atom based control:").set({rich: true, wrap: true});
       var embedfuiairplanetakeoff = new ville.embed.fluent.AirplaneTakeOff().set({ width: 30, height: 30, textColor: "blue" });
       var btnembedfuiairplanebutton = new qx.ui.form.Button('Click Me').set({appearance: "testbutton", embed: embedfuiairplanetakeoff, allowGrowX: false, padding: [10, 14], gap: 10, alignX: "left", alignY: "middle"});
       var lblbuttonfuiembedcode = new qx.ui.basic.Label("<span style='color:green;'>/* Include the Embed Mixin before creating the Button */</span><br>qx.Class.include(<span style='color:green;'>qx.ui.basic.Atom, ville.embed.MEmbed</span>);<br><span style='color:blue;'>new</span> <span style='color:green;'>qx.ui.form.Button(</span><span style='color:maroon;'>'Click Me'</span>).set({ embed : <span style='color:green;'>fuiairplanetakeoff</span> });").set({rich: true, wrap: true, font: "monospace", backgroundColor: "#f2f2f2", padding: 6});
       
       
       btnembedfuiairplanebutton.addListener("mouseover",function(e) {
         var icondom = embedfuiairplanetakeoff.getContentElement().getDomElement();
         qx.bom.element.AnimationCss.animate(icondom, animationGrow, undefined);
       });      
       btnembedfuiairplanebutton.addListener("mouseout",function(e) {
         var icondom = embedfuiairplanetakeoff.getContentElement().getDomElement();
         qx.bom.element.AnimationCss.animateReverse(icondom, animationGrow, undefined);
       });
       
       

      // Some of my Favorite Icons
      var lblsubheaderfuiFavs =  new qx.ui.basic.Label("A few of my favorite icons:").set({font: "headeratom", marginTop: 40});
      var fuiiconflow = new qx.ui.container.Composite();
      var fuiiconflowlayout = new qx.ui.layout.Flow(16,20,"left");
      fuiiconflow.setLayout(fuiiconflowlayout);
      
      var atmbeach = new qx.ui.basic.Atom("Beach").set({iconPosition: "top", appearance: "icss-atom", embed: new ville.embed.fluent.Beach().set({ width: 40, height: 40 })});
  
      fuiiconflow.add(atmbeach);

      overviewpage.add(lblfluentuiheader);     
      overviewpage.add(lblfluentsimpledesc); 
      overviewpage.add(lblsubheadfuisimple); 
      overviewpage.add(lblfuisimpleembed); 
      overviewpage.add(embedfuiairplanetakeoffalone);
      overviewpage.add(lblsimplefuiembedcode);
      overviewpage.add(lblsubheadfuibutton);
      overviewpage.add(lblmorefuiembed);
      overviewpage.add(btnembedfuiairplanebutton);
      overviewpage.add(lblbuttonfuiembedcode);
      overviewpage.add(lblsubheaderfuiFavs);
      overviewpage.add(fuiiconflow);


      // Third page marker
      var tablelistvbox = new qx.ui.layout.VBox(10);
      tablelistpage.setLayout(tablelistvbox);

      var tablelistscrollstackpage = new qx.ui.container.Scroll().set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});
      tablelistscrollstackpage.add(tablelistpage);

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
      
      var embedmuiacctcircle = new ville.embed.material.AccountCircle().set({ width: 40, height: 40 });
      var atmacctcircle = new qx.ui.basic.Atom("Account Circle").set({ iconPosition: "top", appearance: "icss-atom", embed: embedmuiacctcircle });
      /*
     
      var atmbusiness = new qx.ui.basic.Atom("Business", 'data:text/json;{ "name": "material-business", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmbiotech = new qx.ui.basic.Atom("Biotech", 'data:text/json;{ "name": "material-biotech", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
      var atmbolt = new qx.ui.basic.Atom("Bolt", 'data:text/json;{ "name": "material-bolt", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
      
      
      materialiconflow.add(atmbusiness);
      materialiconflow.add(atmbiotech);
      materialiconflow.add(atmbolt);
      */
      materialiconflow.add(atmacctcircle);

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

      var menuscrollstackpage = new qx.ui.container.Scroll().set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});

      menuscrollstackpage.add(menupage);

    
      // Assemble - THE STACK 
      centerbox.add(dashboardscrollstackpage);
      centerbox.add(overviewscrollstackpage);
      centerbox.add(tablelistscrollstackpage);
      centerbox.add(menuscrollstackpage);

      // Show the default page
      centerbox.setSelection([dashboardscrollstackpage]);

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
      atmleftnavheader.setShow("label");
      //atmleftnavheader.getChildControl("icon").set({ scale : true });
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
      //atmmenuleftnavheader.getChildControl("icon").set({ scale : true });
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
          centerbox.setSelection([dashboardscrollstackpage]);
          mainmenubuttongroup.setSelection([tbtnmenudashboardpage]);
        }
      }, this);

      tbtnSecondPage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([overviewscrollstackpage]);
          mainmenubuttongroup.setSelection([tbtnmenuSecondPage]);
        }
      }, this);

      tbtnThirdPage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([tablelistscrollstackpage]);
          mainmenubuttongroup.setSelection([tbtnmenuThirdPage]);
        }
      }, this);

      // Popup menu buttons
      tbtnmenudashboardpage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([dashboardscrollstackpage]);
          westboxbuttongroup.setSelection([tbtndashboardpage]);
          mainmenupopup.hide();
        }
      }, this);

      tbtnmenuSecondPage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([overviewscrollstackpage]);
          westboxbuttongroup.setSelection([tbtnSecondPage]);

          //dashboardpage.setVisibility("excluded");

          //mainmenupopup.hide();
        }
      }, this);

      tbtnmenuThirdPage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([tablelistscrollstackpage]);
          westboxbuttongroup.setSelection([tbtnThirdPage]);

          //dashboardpage.setVisibility("excluded");

          //mainmenupopup.hide();
        }
      }, this);

      // if Hybrid Mobile
      tbtndashboardpagehym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([dashboardscrollstackpage]);
          atmlogocurrentpage.set({show: "both", label:"iConicss"});
        }
      }, this);

      tbtnoverviewpagehym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([overviewscrollstackpage]);
          atmlogocurrentpage.set({show: "both", label:"Fluent UI"});
        }
      }, this);

      tbtnlistofitemspagehym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([tablelistscrollstackpage]);
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
        centerbox.setSelection([menuscrollstackpage]);
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
        centerbox.setSelection([dashboardscrollstackpage]);
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
      var win = new qx.ui.window.Window().set({ appearance: "wax-window", allowMaximize : true, allowMinimize : false, modal: true, movable: true });
      win.setLayout(new qx.ui.layout.VBox(4));
      //win.getChildControl("title").set({padding: [10,0,0,10]});

      return win;
    }
  }
});
