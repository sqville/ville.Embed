/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Dishwasher",
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

   var pathdregular = "M6 3a3 3 0 0 0-3 3v2h13v6a2 2 0 0 1-2 2H6v.09c.43.15.76.48.91.91H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm10 3v1H4V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2Zm-8.5-.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.5 0c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM2.5 9a.5.5 0 0 0-.5.5v2a2.5 2.5 0 0 0 2 2.45V17h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H5v-3.05a2.5 2.5 0 0 0 2-2.45v-2a.5.5 0 0 0-.5-.5h-4Z";
   var pathdfilled = "M6 3a3 3 0 0 0-3 3v2h14V6a3 3 0 0 0-3-3H6Zm8 14H6.91a1.5 1.5 0 0 0-.91-.91v-1.43a3.5 3.5 0 0 0 2-3.16v-2c0-.17-.03-.34-.09-.5H17v5a3 3 0 0 1-3 3ZM6.75 6.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM10 5.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM2.5 9a.5.5 0 0 0-.5.5v2a2.5 2.5 0 0 0 2 2.45V17h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H5v-3.05a2.5 2.5 0 0 0 2-2.45v-2a.5.5 0 0 0-.5-.5h-4Z";
   
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