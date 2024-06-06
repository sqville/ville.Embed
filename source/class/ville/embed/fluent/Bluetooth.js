/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Bluetooth",
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

   var pathdregular = "M9.3 2.04a.5.5 0 0 1 .55.1l4 4a.5.5 0 0 1-.02.74L10.26 10l3.57 3.12a.5.5 0 0 1 .02.73l-4 4A.5.5 0 0 1 9 17.5v-6.4l-3.17 2.78a.5.5 0 0 1-.66-.76L8.74 10 5.17 6.88a.5.5 0 0 1 .66-.76L9 8.9V2.5c0-.2.12-.38.3-.46Zm.7 9.06v5.2l2.77-2.78L10 11.1Zm0-2.2 2.77-2.42L10 3.7V8.9Z";
   var pathdfilled = "M9.46 2.06c.28-.12.6-.05.82.16l4 4a.75.75 0 0 1-.06 1.11L10.94 10l3.28 2.67a.75.75 0 0 1 .06 1.11l-4 4A.75.75 0 0 1 9 17.25v-5.67l-2.78 2.25a.75.75 0 0 1-.94-1.16L8.56 10 5.28 7.33a.75.75 0 1 1 .94-1.16L9 8.42V2.75c0-.3.18-.58.46-.7Zm1.04 9.52v3.86l2.13-2.13-2.13-1.73Zm0-3.16 2.13-1.73-2.13-2.13v3.86Z";
   
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