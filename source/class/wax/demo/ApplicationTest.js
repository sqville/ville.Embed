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
      //var airticketsicon = new ville.embed.fluent.AirTickets(60, 60, "blue");
      //var airticketsicon2 = new ville.embed.fluent.AirTickets2(50, 50, "red");

      //var button1 = new qx.ui.form.Button('Embeded SVG').set({ embed : airticketsicon2 });

      // Create a button with an SVG embed for the icon
      var cubeoicon = new ville.embed.iconicss.CubeO(2);
      var button2 = new qx.ui.form.Button("iConicss cube-o").set({ appearance: "testiconicssbutton", embed : cubeoicon, padding : [8, 14], gap : 12 });

      // Calendar Month for fluent theme
      var iconCalendarMonth = new ville.embed.fluent.CalendarMonth().set({ width: 40, height: 40 });
      var button3 = new qx.ui.form.Button("Fluent Calendar Month Regular and Filled").set({ appearance: "testbutton", embed : iconCalendarMonth });

      var button4 = new qx.ui.form.Button("Clip path Button").set({ appearance: "clippybutton" });

      // ComboBox to show use of MImage mixin
      var comboBox1 = new qx.ui.form.ComboBox().set({width: 250, allowStretchX: false, allowStretchY: false});
      // fill the combo box with some stuff
      for (var i = 1; i < 6; i++) {
        var tempItem = new qx.ui.form.ListItem(
          "2^ " + i + " = " + Math.pow(2, i)
        );
        //.set({appearance: "combobox-listitem"});
        comboBox1.add(tempItem);
      }

      //var fontimage = new qx.ui.basic.Image("@testthis");

      // Document is the application root
      var doc = this.getRoot();

      // Add button to document at fixed coordinates
      //doc.add(button1, {left: 50, top: 40});

      //doc.add(fontimage, {left : 250, top: 40});

      doc.add(button2, {left: 50, top: 150});

      doc.add(button3, {left: 50, top: 250});

      doc.add(button4, {left: 50, top: 350});

      doc.add(comboBox1, {left: 350, top: 350});
    }
  }
});