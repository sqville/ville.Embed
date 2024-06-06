/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Important",
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

   var pathdregular = "M10 3a2 2 0 0 0-2 2c0 2.07.75 4.91 1.18 6.4.1.36.44.6.82.6.39 0 .71-.24.82-.6C11.25 9.94 12 7.1 12 5a2 2 0 0 0-2-2ZM7 5a3 3 0 0 1 6 0c0 2.25-.79 5.21-1.22 6.69-.24.8-.97 1.31-1.78 1.31s-1.54-.52-1.78-1.31C7.8 10.2 7 7.23 7 5Zm3 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z";
   var pathdfilled = "M10 2a3 3 0 0 0-3 3c0 2.23.79 5.2 1.22 6.69.24.79.97 1.31 1.78 1.31s1.54-.52 1.78-1.31C12.2 10.2 13 7.25 13 5a3 3 0 0 0-3-3Zm0 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z";
   
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