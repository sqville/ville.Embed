/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "wax"
 * @asset(wax/demo/*)
 * @usefont(Providence)
 */
qx.Class.define("wax.demo.ApplicationMaterial",
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

    _iconListItems : [],

    _iconListCount : "",
    
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

      qx.Class.include(qx.ui.core.Widget, wax.demo.MWidget);

      // *** Mixins to enable embed features
      qx.Class.include(qx.ui.basic.Atom, ville.embed.MEmbed);
      qx.Class.include(qx.ui.basic.Image, ville.embed.MImage);

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
      var appcompdocklayout = new qx.ui.layout.Dock().set({sort: "x"});
      var appcompdock = new qx.ui.container.Composite(appcompdocklayout).set({backgroundColor: "transparent"});
      //dock.setSort("x");
      
      // Dock's North section (Canvas)
      var northhbox = this._northBox = new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({backgroundColor: "white", decorator : "topheader"});

      // Dock's West section (VBox)
      var westbox = this._westBox = new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({padding: [10,0,10,0], decorator : "leftside"});

      // Dock's Center section (Stack) === THE STACK ===
      var centerbox = new qx.ui.container.Stack().set({backgroundColor: "white", padding: 0});

      // phone
      var southbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(4)).set({alignY: "middle", padding: [0,4,0,4], decorator: "bottombar"});

      // West Scroll area to fit all menu items
      var scrollwest = new qx.ui.container.Scroll().set({decorator: "westboxbg", scrollbarX: "off", minWidth: 120, padding: 0, margin: 0, contentPadding: [0,0,0,6]});

      // Center Scroll area to fit all content
      var scroll = new qx.ui.container.Scroll().set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});

      // === North Toolbar, Parts and Buttons ===
      var northtoolbar = new qx.ui.toolbar.ToolBar().set({backgroundColor : "white"});
      var mainmenupart = new qx.ui.toolbar.Part(); //Top-Left of the screen 
      var profilepart = new qx.ui.toolbar.Part(); // Top-Right of the screen

      // Icon Images
      var menuimage = "wax/demo/round-menu-24px.svg";
      var roundacct = "wax/demo/round-account_circle-24px.svg";

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
      //var txtaboutwax = 'Demo application built with ville.Wax<br><b>One code base, all platforms.</b><br>Project Github page: <a target="_blank" href="https://github.com/sqville/ville.Wax">https://github.com/sqville/ville.Wax</a>';
      //var aboutbox = new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
      var aboutscroll = new qx.ui.container.Scroll().set({ allowStretchY: true, padding: 0, margin: 0, contentPadding: [0,24,0,24]});
      var waxatom = new qx.ui.basic.Atom("","wax/demo/ville_Wax.png").set({show: "icon", center: true, iconPosition: "top", gap: 30, paddingTop: 30});
      //waxatom.getChildControl("label").set({alignX: "center", alignY: "middle"});
      var lblbuiltwith = new qx.ui.basic.Label("Demo application built with ville.Wax.").set({font: "headeratom", alignX: "center", alignY: "middle"});
      var lblvillewaxblurb = new qx.ui.basic.Label("One code base, all platforms.").set({font: "headeratom", alignX: "center", alignY: "middle"});
      var lblvillewaxproj = new qx.ui.basic.Label('Project Github page: <a target="_blank" href="https://github.com/sqville/ville.Wax">https://github.com/sqville/ville.Wax</a>').set({rich: true, alignX: "center", alignY: "middle"});
      var aboutcontainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(4));
      aboutcontainer.add(waxatom);
      aboutcontainer.add(lblbuiltwith);
      aboutcontainer.add(lblvillewaxblurb);
      aboutcontainer.add(lblvillewaxproj);
      aboutscroll.add(aboutcontainer);

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

      var atmtopmdiheader = new qx.ui.basic.Atom("Material Design Icons (MDI)").set({font: "control-header"});
      
      northtoolbar.add(mainmenupart);
      northtoolbar.addSpacer();
      northtoolbar.add(atmtopmdiheader);
      northtoolbar.addSpacer();
      //northtoolbar.add(atmlogocurrentpage);
      //northtoolbar.addSpacer();
      northtoolbar.add(profilepart);

      northhbox.add(northtoolbar, {left: 0, right: 0});

      //appcompdock.add(southbox, {edge: "south"});

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
      // Three page stack
       // Top Page
       // Second Page
       // Third Page
      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      var toppage = new qx.ui.container.Composite().set({padding: [20,30]});
      var secondpage = new qx.ui.container.Composite(new qx.ui.layout.VBox(10)).set({padding: [20,30]});
      var thirdpage = new qx.ui.container.Composite().set({padding: [20,30]});

      //more structure
      toppage.setLayout(new qx.ui.layout.VBox(10).set({alignX: "left"}));
      
      var toppagescroll = new wax.demo.scroll.Scroll().set({overflow: ["hidden", "auto"], padding: 0, margin: 0, contentPadding: [0,0,0,0]});

      toppagescroll.add(toppage);

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

      // Third page marker  
      //var lblmdiheader = new qx.ui.basic.Label("Material Design Icons (SVG)").set({font: "control-header"});
            
      //simple description
      var lblsubheadmdistart =  new qx.ui.basic.Label("Source project:").set({font: "headeratom", marginTop: 10});
      var lblmdisimpledesc = new qx.ui.basic.Label("Material design icons, SVG source by Templarian - <a href='https://github.com/Templarian/MaterialDesign-SVG' target='_blank'>Material Design Icons.</a> For the full list of available icons see the <a href='https://pictogrammers.com/library/mdi/' target='_blank'>Pictogrammers website.</a>").set({rich: true, wrap: true});

      // Basic usage
      var lblsubheadmdisimple =  new qx.ui.basic.Label("Basic usage:").set({font: "headeratom", marginTop: 40});
      var lblmdisimpleembed = new qx.ui.basic.Label("Here, at its most <u>basic</u>, is a lone Embed object, sized 40 x 40, and colored <span style='color: blue;'>blue</span>:").set({rich: true, wrap: true});
      var embedmdiacctclock = new ville.embed.material.AccountClock(40, "blue");
      var lblsimplemdiembedcode = new qx.ui.basic.Label("var <span style='color:green;'>mdiaccountclock</span> = <span style='color:blue;'>new</span> <span style='color:green;'>ville.embed.material.AccountClock</span>(40, \"blue\");").set({rich: true, wrap: true, font: "monospace", backgroundColor: "#f2f2f2", padding: 6});
      var lbllaststatement = new qx.ui.basic.Label("Behind the scenes, the object's constructor sets initial values using - setWidth(size) setHeight(size) and setTextColor(color)");

      // Use in a Button
      var lblsubheadmdibutton =  new qx.ui.basic.Label("Use in another widget:").set({font: "headeratom", marginTop: 40});
      var lblmoremdiembed = new qx.ui.basic.Label("To use the new widget in a Button <b>(qx.ui.form.Button)</b>, you need to first enhance the Button's underlying Atom <b>(qx.ui.basic.Atom)</b>. Once enhanced, add the icon object to the Atom based control:").set({rich: true, wrap: true});
      var embedmdiacctclock2 = new ville.embed.material.AccountClock(30, "blue", "outlined");
      var btnembedmdiacctclockebutton = new qx.ui.form.Button('Click Me').set({appearance: "testbutton", embed: embedmdiacctclock2, allowGrowX: false, padding: [10, 14], gap: 10, alignX: "left", alignY: "middle"});
      var lblbuttonmdiembedcode = new qx.ui.basic.Label("<span style='color:green;'>/* Include the Embed Mixin before creating the Button */</span><br>qx.Class.include(<span style='color:green;'>qx.ui.basic.Atom, ville.embed.MEmbed</span>);<br><span style='color:blue;'>new</span> <span style='color:green;'>qx.ui.form.Button(</span><span style='color:maroon;'>'Click Me'</span>).set({ embed : <span style='color:green;'>mdiaccountclock</span> });").set({rich: true, wrap: true, font: "monospace", backgroundColor: "#f2f2f2", padding: 6});

      btnembedmdiacctclockebutton.addListener("mouseover",function(e) {
        var icondom = embedmdiacctclock2.getContentElement().getDomElement();
        qx.bom.element.AnimationCss.animate(icondom, animationGrow, undefined);
      });      
      btnembedmdiacctclockebutton.addListener("mouseout",function(e) {
        var icondom = embedmdiacctclock2.getContentElement().getDomElement();
        qx.bom.element.AnimationCss.animateReverse(icondom, animationGrow, undefined);
      });

      toppage.add(lblsubheadmdistart);
      toppage.add(lblmdisimpledesc);
      toppage.add(lblsubheadmdisimple);
      toppage.add(lblmdisimpleembed);
      toppage.add(embedmdiacctclock);
      toppage.add(lblsimplemdiembedcode);
      toppage.add(lbllaststatement);
      toppage.add(lblsubheadmdibutton);
      toppage.add(lblmoremdiembed);
      toppage.add(btnembedmdiacctclockebutton);
      toppage.add(lblbuttonmdiembedcode);
      

      // Second page marker  
      var secondpagescroll = new qx.ui.container.Scroll().set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});
      secondpagescroll.add(secondpage);

      // List filters
      var btnfiltershowall = new qx.ui.form.ToggleButton("All").set({appearance: "mdi-toggle-button-filter", allowGrowX: false, padding: [6, 22]});
      btnfiltershowall.setUserData("filterkey", "all");
      var btnfiltershowfilledonly = new qx.ui.form.ToggleButton("Filled only").set({appearance: "mdi-toggle-button-filter", allowGrowX: false});
      btnfiltershowfilledonly.setUserData("filterkey", "filledonly");
      var btnfiltershowoutlineonly = new qx.ui.form.ToggleButton("Outline only").set({appearance: "mdi-toggle-button-filter", allowGrowX: false});
      btnfiltershowoutlineonly.setUserData("filterkey", "outlinedonly");
      var btnfiltershowbundled = new qx.ui.form.ToggleButton("Bundled only").set({appearance: "mdi-toggle-button-filter", allowGrowX: false});
      btnfiltershowbundled.setUserData("filterkey", "bundledonly");
      
      var mdiiconflow = new qx.ui.container.Composite();
      var mdiiconflowlayout = new qx.ui.layout.Flow(16,20,"left");
      mdiiconflow.setLayout(mdiiconflowlayout);

      var filterlayout = new qx.ui.layout.HBox();
      filterlayout.setSpacing(6);
      var filterbox = new qx.ui.container.Composite(filterlayout);

      var filterbtngroup = new qx.ui.form.RadioGroup();
      filterbtngroup.add(btnfiltershowall, btnfiltershowfilledonly, btnfiltershowoutlineonly, btnfiltershowbundled);

      filterbox.add(new qx.ui.basic.Label("Filters:"));
      filterbox.add(btnfiltershowall);
      filterbox.add(btnfiltershowfilledonly);
      filterbox.add(btnfiltershowoutlineonly);
      filterbox.add(btnfiltershowbundled);
      
      


      // common props
      var svgsize = 40;
      var atmprops = { iconPosition: "top", appearance: "icss-atom"};
      var arrembeds = [];

      // php generated
      var memdAbTestingFilled = new ville.embed.material.AbTestingFilled(svgsize, null, "AbTestingFilled");
      arrembeds.push(memdAbTestingFilled);
      var memdAbacusFilled = new ville.embed.material.AbacusFilled(svgsize, null, "AbacusFilled");
      arrembeds.push(memdAbacusFilled);
      var memdAbjadArabicFilled = new ville.embed.material.AbjadArabicFilled(svgsize, null, "AbjadArabicFilled");
      arrembeds.push(memdAbjadArabicFilled);
      var memdAbjadHebrewFilled = new ville.embed.material.AbjadHebrewFilled(svgsize, null, "AbjadHebrewFilled");
      arrembeds.push(memdAbjadHebrewFilled);
      var memdAbugidaDevanagariFilled = new ville.embed.material.AbugidaDevanagariFilled(svgsize, null, "AbugidaDevanagariFilled");
      arrembeds.push(memdAbugidaDevanagariFilled);
      var memdAbugidaThaiFilled = new ville.embed.material.AbugidaThaiFilled(svgsize, null, "AbugidaThaiFilled");
      arrembeds.push(memdAbugidaThaiFilled);
      var memdAccessPointCheckFilled = new ville.embed.material.AccessPointCheckFilled(svgsize, null, "AccessPointCheckFilled");
      arrembeds.push(memdAccessPointCheckFilled);
      var memdAccessPointMinusFilled = new ville.embed.material.AccessPointMinusFilled(svgsize, null, "AccessPointMinusFilled");
      arrembeds.push(memdAccessPointMinusFilled);
      var memdAccessPointNetworkOffFilled = new ville.embed.material.AccessPointNetworkOffFilled(svgsize, null, "AccessPointNetworkOffFilled");
      arrembeds.push(memdAccessPointNetworkOffFilled);
      var memdAccessPointNetworkFilled = new ville.embed.material.AccessPointNetworkFilled(svgsize, null, "AccessPointNetworkFilled");
      arrembeds.push(memdAccessPointNetworkFilled);
      var memdAccessPointOffFilled = new ville.embed.material.AccessPointOffFilled(svgsize, null, "AccessPointOffFilled");
      arrembeds.push(memdAccessPointOffFilled);
      var memdAccessPointPlusFilled = new ville.embed.material.AccessPointPlusFilled(svgsize, null, "AccessPointPlusFilled");
      arrembeds.push(memdAccessPointPlusFilled);
      var memdAccessPointRemoveFilled = new ville.embed.material.AccessPointRemoveFilled(svgsize, null, "AccessPointRemoveFilled");
      arrembeds.push(memdAccessPointRemoveFilled);
      var memdAccessPointFilled = new ville.embed.material.AccessPointFilled(svgsize, null, "AccessPointFilled");
      arrembeds.push(memdAccessPointFilled);
      var memdAccountAlert = new ville.embed.material.AccountAlert(svgsize, null, null, "AccountAlert");
      arrembeds.push(memdAccountAlert);
      var memdAccountArrowDown = new ville.embed.material.AccountArrowDown(svgsize, null, null, "AccountArrowDown");
      arrembeds.push(memdAccountArrowDown);
      var memdAccountArrowLeft = new ville.embed.material.AccountArrowLeft(svgsize, null, null, "AccountArrowLeft");
      arrembeds.push(memdAccountArrowLeft);
      var memdAccountArrowRight = new ville.embed.material.AccountArrowRight(svgsize, null, null, "AccountArrowRight");
      arrembeds.push(memdAccountArrowRight);
      var memdAccountArrowUp = new ville.embed.material.AccountArrowUp(svgsize, null, null, "AccountArrowUp");
      arrembeds.push(memdAccountArrowUp);
      var memdAccountBadge = new ville.embed.material.AccountBadge(svgsize, null, null, "AccountBadge");
      arrembeds.push(memdAccountBadge);
      var memdAccountBoxEditOutline = new ville.embed.material.AccountBoxEditOutline(svgsize, null, "AccountBoxEditOutline");
      arrembeds.push(memdAccountBoxEditOutline);
      var memdAccountBoxMinusOutline = new ville.embed.material.AccountBoxMinusOutline(svgsize, null, "AccountBoxMinusOutline");
      arrembeds.push(memdAccountBoxMinusOutline);
      var memdAccountBoxMultiple = new ville.embed.material.AccountBoxMultiple(svgsize, null, null, "AccountBoxMultiple");
      arrembeds.push(memdAccountBoxMultiple);
      var memdAccountBox = new ville.embed.material.AccountBox(svgsize, null, null, "AccountBox");
      arrembeds.push(memdAccountBox);
      var memdAccountBoxPlusOutline = new ville.embed.material.AccountBoxPlusOutline(svgsize, null, "AccountBoxPlusOutline");
      arrembeds.push(memdAccountBoxPlusOutline);
      var memdAccountCancel = new ville.embed.material.AccountCancel(svgsize, null, null, "AccountCancel");
      arrembeds.push(memdAccountCancel);
      var memdAccountCard = new ville.embed.material.AccountCard(svgsize, null, null, "AccountCard");
      arrembeds.push(memdAccountCard);
      var memdAccountCash = new ville.embed.material.AccountCash(svgsize, null, null, "AccountCash");
      arrembeds.push(memdAccountCash);
      var memdAccountCheck = new ville.embed.material.AccountCheck(svgsize, null, null, "AccountCheck");
      arrembeds.push(memdAccountCheck);
      var memdAccountChildCircleFilled = new ville.embed.material.AccountChildCircleFilled(svgsize, null, "AccountChildCircleFilled");
      arrembeds.push(memdAccountChildCircleFilled);
      var memdAccountChild = new ville.embed.material.AccountChild(svgsize, null, null, "AccountChild");
      arrembeds.push(memdAccountChild);
      var memdAccountCircle = new ville.embed.material.AccountCircle(svgsize, null, null, "AccountCircle");
      arrembeds.push(memdAccountCircle);
      var memdAccountClock = new ville.embed.material.AccountClock(svgsize, null, null, "AccountClock");
      arrembeds.push(memdAccountClock);

      // GridList container
      var girdlist1 = new wax.demo.GridList().set({
        allowStretchX: true, 
        allowStretchY: true,
        selectionMode: "single", 
        enableInlineFind: true
      });

      // loop
      arrembeds.forEach((embed) => {
        var atmlabel = embed.getTitle().replace("<title>","").replace("</title>","");
        // var atmembed = new qx.ui.basic.Atom(atmlabel).set(atmprops);
        var liembed = new qx.ui.form.ListItem(atmlabel).set(atmprops);
        liembed.setEmbed(embed);
        // regular flow container
        // mdiiconflow.add(atmembed);
        girdlist1.add(liembed);
      });

      this._iconListItems = girdlist1.getChildren();

      filterbtngroup.addListener("changeValue", function (e) {
        var filtercount = 0;
        switch (e.getData().getUserData("filterkey")) {
          case "all":
            this._iconListItems.forEach((iconli) => iconli.setVisibility("visible"));
            this._iconListCount.setValue("Count: " + this._iconListItems.length);
            break;
          case "outlinedonly":
            this._iconListItems.forEach((iconli) => {
              if(iconli.getLabel().endsWith('Outline')) {
                iconli.setVisibility("visible");
                ++filtercount;
              }
              else
                iconli.setVisibility("excluded");
            });  
            this._iconListCount.setValue("Count: " + filtercount);
            break;
          case "filledonly":
            this._iconListItems.forEach((iconli) => {
              if(iconli.getLabel().endsWith('Filled')) {
                iconli.setVisibility("visible");
                ++filtercount;
              }
              else
                iconli.setVisibility("excluded");
            }); 
            this._iconListCount.setValue("Count: " + filtercount); 
            break;
          case "bundledonly":
            this._iconListItems.forEach((iconli) => {
              var iconliembd = iconli.getEmbed();
              if (iconliembd.constructor.PATH)
                iconli.setVisibility("excluded");
              else {
                iconli.setVisibility("visible");
                ++filtercount;
              }
            });  
            this._iconListCount.setValue("Count: " + filtercount);
            break;
        }
      }, this);

      var lblsubheadermdicount = this._iconListCount = new qx.ui.basic.Label("Count: " + arrembeds.length).set({font: "headeratom", alignX: "left", alignY: "middle"});
      var lblfindfeature = new qx.ui.basic.Label("(Use the browser's Find feature to search the list)").set({font: "findmessage", textAlign: "right", alignY: "middle"});
      var countfind = new qx.ui.container.Composite(new qx.ui.layout.HBox(20)).set({allowGrowX: true});
      countfind.add(lblsubheadermdicount, {flex: 1});
      countfind.add(lblfindfeature, {flex: 1});

      secondpage.add(filterbox);
      secondpage.add(countfind);
      secondpage.add(girdlist1, {flex: 1});
      



      // Third page marker
      var thirdpagevbox = new qx.ui.layout.VBox(4);
      thirdpage.setLayout(thirdpagevbox);

      var thirdpagescroll = new qx.ui.container.Scroll().set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});
      thirdpagescroll.add(thirdpage);

      var atmthirdpageheader = new qx.ui.basic.Atom("ville.Embed").set({show: "both", appearance: "header-atom-about", anonymous: true, focusable: false, selectable: false });
      var lblvilleembedblurb = new qx.ui.basic.Label("Making images, icons and graphics dynamic").set({font: "embedblurb", alignX: "center", alignY: "middle"});
      var lblvilleembedproj = new qx.ui.basic.Label('Github: <a target="_blank" href="https://github.com/sqville/ville.Embed">https://github.com/sqville/ville.Embed</a>').set({rich: true, alignX: "center", alignY: "middle"});
      var lblvilleembedsource = new qx.ui.basic.Label('SVG source by Templarian').set({font: "headeratom", paddingTop: 22, rich: true, alignX: "center", alignY: "middle"});
      var lblvilleembedsource2 = new qx.ui.basic.Label('Github: <a href="https://github.com/Templarian/MaterialDesign-SVG" target="_blank">Material Design Icons.</a>').set({rich: true, alignX: "center", alignY: "middle"});
      var lblvilleembedpictogrammers = new qx.ui.basic.Label("For the full list of available icons, visit the <a href='https://pictogrammers.com/library/mdi/' target='_blank'>Pictogrammers website.</a>").set({rich: true, alignX: "center", alignY: "middle"});
      var lblvilleembedsourceversion = new qx.ui.basic.Label("ville.Embed's mdi source v7.4.47 (7/19/2024)").set({rich: true, alignX: "center", alignY: "middle"});
      var lblvillewaxdemoembedvr = new qx.ui.basic.Label('Wax Demo for ville.Embed').set({font: "headeratom", paddingTop: 22, rich: true, alignX: "center", alignY: "middle"});
      var lblvillewaxdemoembedcurrentvr = new qx.ui.basic.Label('Current - v0.9.0').set({rich: true, alignX: "center", alignY: "middle"});
      var lblvillewaxdemoembednextvr = new qx.ui.basic.Label('Next - v1.0.0 - to include:').set({rich: true, alignX: "center", alignY: "middle"});
      var lblvillewaxdemoembednextvr2 = new qx.ui.basic.Label('- Dark/Light theme switching<br> - Icon detail popup').set({rich: true, alignX: "center", alignY: "middle"});

      thirdpage.add(atmthirdpageheader);
      thirdpage.add(lblvilleembedblurb);
      thirdpage.add(lblvilleembedproj);
      thirdpage.add(lblvilleembedsource);
      thirdpage.add(lblvilleembedsource2);
      thirdpage.add(lblvilleembedpictogrammers);
      thirdpage.add(lblvilleembedsourceversion);
      thirdpage.add(lblvillewaxdemoembedvr);
      thirdpage.add(lblvillewaxdemoembedcurrentvr);
      thirdpage.add(lblvillewaxdemoembednextvr);
      thirdpage.add(lblvillewaxdemoembednextvr2);


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

      var menupagescroll = new qx.ui.container.Scroll().set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});

      menupagescroll.add(menupage);

    
      // Assemble - THE STACK 
      centerbox.add(toppagescroll);
      centerbox.add(secondpagescroll);
      centerbox.add(thirdpagescroll);
      //centerbox.add(menupagescroll);

      // Show the default page
      centerbox.setSelection([toppagescroll]);

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
      var atmleftnavheader = new qx.ui.basic.Atom("ville.Embed").set({appearance: "header-atom", anonymous: true, focusable: false, selectable: false });
      atmleftnavheader.setShow("both");
      //atmleftnavheader.getChildControl("icon").set({ scale : true });
      westbox.add(atmleftnavheader);
      var tbtntoppage = new wax.demo.MenuButton("Usage", "wax/demo/sdk_24.svg", true).set({iconPosition: "top"});
      westbox.add(tbtntoppage);
      
      var tbtnsecondpage = new wax.demo.MenuButton("Icons", "wax/demo/shapes_24.svg", true ).set({iconPosition: "top"});
      westbox.add(tbtnsecondpage);

      var tbtnthirdpage = new wax.demo.MenuButton("About", "wax/demo/award_star_24.svg", true).set({iconPosition: "top"});
      westbox.add(tbtnthirdpage);

      westbox.add(new qx.ui.core.Spacer(), {flex: 1});
      var btntheme = new qx.ui.form.ToggleButton().set({appearance: "mdi-button-theme-toggle", show: "icon"});
      westbox.add(btntheme);

      var westboxbuttongroup = new qx.ui.form.RadioGroup();
      westboxbuttongroup.add(tbtntoppage, tbtnsecondpage, tbtnthirdpage);

      
      // CLONE the above controls
      var atmmenuleftnavheader = atmleftnavheader.clone();
      //atmmenuleftnavheader.getChildControl("icon").set({ scale : true });
      var tbtnmenutoppage = tbtntoppage.clone();
      tbtnmenutoppage.getChildControl("icon").set({ scale : true });
      var tbtnmenusecondpage = tbtnsecondpage.clone();
      tbtnmenusecondpage.getChildControl("icon").set({ scale : true });
      var tbtnmenuthirdpage = tbtnthirdpage.clone();
      tbtnmenuthirdpage.getChildControl("icon").set({ scale : true });

      // Add the clones to the Main Menu Popup
      mainmenupopup.add(atmmenuleftnavheader);
      mainmenupopup.add(tbtnmenutoppage);
      mainmenupopup.add(tbtnmenusecondpage);
      mainmenupopup.add(tbtnmenuthirdpage);


      // Assign all the clones their own RadioGroup
      var mainmenubuttongroup = new qx.ui.form.RadioGroup();
      mainmenubuttongroup.add(tbtnmenutoppage, tbtnmenusecondpage, tbtnmenuthirdpage);
      
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
      var tbtntoppagehym = new wax.demo.MenuButton("iConicss", "wax/demo/Css3_logo.svg", true ).set({appearance: "mainmenubutton-hym", iconPosition: "top"});
      var tbtnsecondpagehym = new wax.demo.MenuButton("Fluent UI", "wax/demo/fluent_globe.svg", true).set({appearance: "mainmenubutton-hym", iconPosition: "top"});
      var tbtnthirdpagehym = new wax.demo.MenuButton("Material", "wax/demo/material_logo.svg", true).set({appearance: "mainmenubutton-hym", iconPosition: "top"});
      var tbtnmenuhym = new wax.demo.MenuButton("Menu", menuimage, true).set({appearance: "mainmenubutton-hym", iconPosition: "top"});
      southbox.add(tbtntoppagehym, {flex: 1});
      southbox.add(tbtnsecondpagehym, {flex: 1});
      southbox.add(tbtnthirdpagehym, {flex: 1});
      //southbox.add(tbtnmenuhym, {flex: 1});

      southbox.setVisibility("excluded");

      // Assign all the clones their own RadioGroup
      var mainmenubuttongrouphym = new qx.ui.form.RadioGroup();
      mainmenubuttongrouphym.add(tbtntoppagehym, tbtnsecondpagehym, tbtnthirdpagehym);

      // <<< END of Hybrid Mobil (hym) Main Menu and Main Menu Popup <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


      // >>> Wire all the Main Menu Buttons to THE STACK Pages (via Listeners) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Turn on all wax.demo.MenuButton listeners
      tbtntoppage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([toppagescroll]);
          mainmenubuttongroup.setSelection([tbtnmenutoppage]);
        }
      }, this);

      tbtnsecondpage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([secondpagescroll]);
          mainmenubuttongroup.setSelection([tbtnmenusecondpage]);
        }
      }, this);

      tbtnthirdpage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([thirdpagescroll]); 
          mainmenubuttongroup.setSelection([tbtnmenuthirdpage]); 
        }
      }, this);

      // Popup menu buttons
      tbtnmenutoppage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([toppagescroll]);
          westboxbuttongroup.setSelection([tbtntoppage]);
          mainmenupopup.hide();
        }
      }, this);

      tbtnmenusecondpage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([secondpagescroll]);
          westboxbuttongroup.setSelection([tbtnsecondpage]);
          mainmenupopup.hide();
        }
      }, this);

      tbtnmenuthirdpage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([thirdpagescroll]);
          westboxbuttongroup.setSelection([tbtnthirdpage]);
          mainmenupopup.hide();
        }
      }, this);

      // if Hybrid Mobile
      tbtntoppagehym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([toppagescroll]);
          atmlogocurrentpage.set({show: "both", label:"iConicss"});
        }
      }, this);

      tbtnsecondpagehym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([secondpagescroll]);
          atmlogocurrentpage.set({show: "both", label:"Fluent UI"});
        }
      }, this);

      tbtnthirdpagehym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([thirdpagescroll]);
          atmlogocurrentpage.set({show: "both", label:"Material"});
        }
      }, this);

      /*tbtnmenuhym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([menupage]);
          atmlogocurrentpage.set({show: "both", label:"Menu"});
        }
      }, this);*/

      // Demo mode switching to Mobile
      switchmenubutton1.addListener("execute", function(e){
        this.setDemoMode("mobile");
        southbox.setVisibility("visible");
        scrollwest.setVisibility("excluded");
        profilemenubutton.setVisibility("hidden");
        mainmenupart.setVisibility("hidden");
        centerbox.setSelection([menupagescroll]);
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
        centerbox.setSelection([toppagescroll]);
        mainmenubuttongroup.setSelection([tbtnmenutoppage]);
        westboxbuttongroup.setSelection([tbtntoppage]);
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
