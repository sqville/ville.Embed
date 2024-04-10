/* ************************************************************************

   Copyright: 2023

   License: MIT license

   Authors: sqville

************************************************************************ */

qx.Class.define("wax.demo.ApplicationTest",
{
  extend : qx.application.Standalone,

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main ()
    {
      // Call super class
      super();

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

      // Adds "html" and "clippath" properties for embeding svg content via appearance themes
      qx.Class.include(qx.ui.basic.Image, ville.embed.MImage);

      // *** Icons using CSS clip-path in a decorator entry
      qx.Class.include(qx.ui.decoration.Decorator, ville.embed.MClipPath);
 
      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // Create a button with an SVG embed for the icon
      var cubeoicon = new ville.embed.iconicss.CubeO(2);
      var button2 = new qx.ui.form.Button("iConicss cube-o").set({ appearance: "testiconicssbutton", embed : cubeoicon, padding : [8, 14], gap : 12 });

      // Calendar Month for fluent theme
      var iconCalendarMonth = new ville.embed.fluent.CalendarMonth().set({ width: 40, height: 40 });
      var button3 = new qx.ui.form.Button("Fluent Calendar Month Regular and Filled").set({ appearance: "testbutton", embed : iconCalendarMonth });

      var button4 = new qx.ui.form.Button("Clip path Button").set({ appearance: "clippybutton" });

      // ComboBox to show use of MImage mixin
      var lblcbclippath = new qx.ui.basic.Label("ComboBox button icon using clipPath:");
      var comboBox1 = new qx.ui.form.ComboBox().set({width: 250});
      //comboBox1.getChildControl("textfield").setHeight(60);
      // fill the combo box with some stuff
      for (var i = 1; i < 6; i++) {
        var tempItem = new qx.ui.form.ListItem(
          "2^ " + i + " = " + Math.pow(2, i)
        );
        //.set({appearance: "combobox-listitem"});
        comboBox1.add(tempItem);
      }

      var svgimage1 = new qx.ui.basic.Image().set({ width: 100, height: 100, html: wax.demo.theme.Image.GiftOpenRegular });

      var animationGrow = {
        duration: 150,
        keyFrames : 
        {
          0 : {scale: 1, color: "currentColor"},
          100 : {scale: 1.1, color: "blue"}
        },
        keep : 100,
        timing: "ease-out"
      };
      
      svgimage1.addListener("mouseover",function(e) {
        this.setHtml(wax.demo.theme.Image.GiftOpenFilled);
        var icondom = this.getContentElement().getDomElement();
        qx.bom.element.AnimationCss.animate(icondom, animationGrow, undefined);
      });      
      svgimage1.addListener("mouseout",function(e) {
        this.setHtml(wax.demo.theme.Image.GiftOpenRegular);
        var icondom = this.getContentElement().getDomElement();
        qx.bom.element.AnimationCss.animateReverse(icondom, animationGrow, undefined);
      });

      var clippathimage = new qx.ui.basic.Image().set({ width: 30, height: 30, backgroundColor: "black", clipPath: wax.demo.theme.Image.CPGiftOpenRegular });
      
      // Document is the application root
      var doc = this.getRoot();

      doc.add(button2, {left: 50, top: 70});

      doc.add(button3, {left: 50, top: 170});

      doc.add(button4, {left: 50, top: 270});

      doc.add(lblcbclippath, {left: 280, top: 255});

      doc.add(comboBox1, {left: 280, top: 280});

      doc.add(svgimage1, {left: 50, top: 350});

      doc.add(clippathimage, {left: 180, top: 350});
    }
  }
});