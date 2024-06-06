/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ListBar",
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

   var pathdregular = "M5 3a2 2 0 0 0-2 2v1a2 2 0 0 0 .68 1.5A2 2 0 0 0 3 9v2a2 2 0 0 0 .68 1.5A2 2 0 0 0 3 14v1c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-1a2 2 0 0 0-.68-1.5A2 2 0 0 0 17 11V9a2 2 0 0 0-.68-1.5A2 2 0 0 0 17 6V5a2 2 0 0 0-2-2H5ZM4 14a1 1 0 0 1 1-1h2v3H5a1 1 0 0 1-1-1v-1Zm4 2v-3h7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8Zm0-4V8h7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8ZM7 8v4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2Zm0-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2v3Zm1 0V4h7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8Z";
   var pathdfilled = "M8 17h7.5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5H8v4Zm0-5h7.5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5H8v4ZM7 8v4H4.5A1.5 1.5 0 0 1 3 10.5v-1C3 8.67 3.67 8 4.5 8H7Zm1-1h7.5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5H8v4ZM7 3v4H4.5A1.5 1.5 0 0 1 3 5.5v-1C3 3.67 3.67 3 4.5 3H7Zm0 10v4H4.5A1.5 1.5 0 0 1 3 15.5v-1c0-.83.67-1.5 1.5-1.5H7Z";
   
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