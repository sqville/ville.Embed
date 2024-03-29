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

      // *** Mixin ville.upload Appearances and Decorations with current theme
      qx.Class.include(qx.ui.basic.Atom, ville.embed.MAtom);

      // *** FreeStyleCss testing
      qx.Class.include(qx.ui.decoration.Decorator, ville.embed.MClipPath);
 
      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // Create a button with an SVG embed for the icon
      var airticketsicon = new ville.embed.fluent.AirTickets(60, 60, "blue");
      var airticketsicon2 = new ville.embed.fluent.AirTickets2().set({width: 50, height: 50, textColor: "red"});

      var button1 = new qx.ui.form.Button('Embeded SVG').set({ appearance: "testbutton", embed : airticketsicon2 });

      // Create a button with an SVG embed for the icon
      var cubeoicon = new ville.embed.iconicss.CubeO(3, "green");
      var button2 = new qx.ui.form.Button('Embeded Cube').set({ embed : cubeoicon });

      // Calendar Month for fluent theme
      var iconCalendarMonthRegular = new ville.embed.fluent.CalendarMonthRegular().set({width: 20, height: 20, textColor: "red"});
      var button3 = new qx.ui.form.Button('Default').set({ appearance: "testbutton", embed : iconCalendarMonthRegular });

      var button4 = new qx.ui.form.Button("Clip path Button").set({ appearance: "clippy" });

      // Document is the application root
      var doc = this.getRoot();

      // Add button to document at fixed coordinates
      doc.add(button1, {left: 50, top: 40});

      doc.add(button2, {left: 50, top: 150});

      doc.add(button3, {left: 50, top: 280});

      doc.add(button4, {left: 50, top: 360});
    }
  }
});