/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoPersonClock",
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

   var pathdregular = "M10 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM2 4.5C2 3.67 2.67 3 3.5 3h13c.83 0 1.5.67 1.5 1.5v5.76a5.5 5.5 0 0 0-1-.66V4.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h2.76c-.26.3-.48.64-.66 1H7.5a.5.5 0 0 0-.5.5V14h2.02a5.57 5.57 0 0 0 0 1H3.5A1.5 1.5 0 0 1 2 13.5v-9Zm17 10a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z";
   var pathdfilled = "M10 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2 4.5C2 3.67 2.67 3 3.5 3h13c.83 0 1.5.67 1.5 1.5v5.76a5.5 5.5 0 0 0-1-.66V4.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h2.76a5.48 5.48 0 0 0-1.24 4H3.5A1.5 1.5 0 0 1 2 13.5v-9Zm17 10a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z";
   
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