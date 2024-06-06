/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AlertBadge",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M10 2c1.09 0 2.11.28 3 .77-.26.23-.47.5-.64.8A5.16 5.16 0 0 0 10 3a4.9 4.9 0 0 0-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V8a3 3 0 0 0 1-.17v3.57l.92 2.22a1 1 0 0 1 .06.17l.01.08.01.13a1 1 0 0 1-.75.97l-.11.02L16 15h-3.5v.17a2.5 2.5 0 0 1-5 0V15H4a1 1 0 0 1-.26-.03l-.13-.04a1 1 0 0 1-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0 1 10 2Zm1.5 13h-3v.15a1.5 1.5 0 0 0 1.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15Zm1.7-10.89A2 2 0 0 1 15 3a2 2 0 1 1-1.8 1.11Z";
   var pathdfilled = "M12.45 16a2.5 2.5 0 0 1-4.9 0h4.9ZM10 2c1.09 0 2.11.28 3 .77a3 3 0 0 0 3 5.06v3.58l.95 2.59.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 0 1-.74-.76v-.12l.04-.12L4 11.4V7.57A5.9 5.9 0 0 1 10 2Zm5 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});