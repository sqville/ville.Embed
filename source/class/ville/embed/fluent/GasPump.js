/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GasPump",
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

   var pathdregular = "M5 4.5V17h8V4.5c0-.83-.67-1.5-1.5-1.5h-5C5.67 3 5 3.67 5 4.5Zm9 11V17h.5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1H4V4.5A2.5 2.5 0 0 1 6.5 2h5A2.5 2.5 0 0 1 14 4.5v9a1.5 1.5 0 0 0 3 0V9.17c0-.33-.1-.64-.3-.9L15.6 6.8a.5.5 0 0 1 .8-.6l1.1 1.47c.32.43.5.96.5 1.5v4.33a2.5 2.5 0 0 1-4 2Zm-8-11v4c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5ZM7 5h4v3H7V5Z";
   var pathdfilled = "M4 17V4.5A2.5 2.5 0 0 1 6.5 2h5A2.5 2.5 0 0 1 14 4.5v9a1.5 1.5 0 0 0 3 0V9.17c0-.33-.1-.64-.3-.9L15.6 6.8a.5.5 0 0 1 .8-.6l1.1 1.47c.32.43.5.96.5 1.5v4.33a2.5 2.5 0 0 1-4 2V17h.5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1H4ZM6.5 4a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5Z";
   
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