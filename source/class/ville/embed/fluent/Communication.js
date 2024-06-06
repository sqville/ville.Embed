/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Communication",
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

   var pathdregular = "M10 4a7 7 0 0 0-4.95 11.95.5.5 0 0 1-.7.7 8 8 0 1 1 11.32 0 .5.5 0 0 1-.72-.7A7 7 0 0 0 10 4Zm0 3a4 4 0 0 0-2.83 6.82.5.5 0 1 1-.71.71A4.99 4.99 0 0 1 10 6a5 5 0 0 1 3.54 8.53.5.5 0 0 1-.71-.7A3.99 3.99 0 0 0 10 7Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-1 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z";
   var pathdfilled = "M3.5 11a6.5 6.5 0 1 1 11.1 4.6.75.75 0 1 0 1.06 1.05 8 8 0 1 0-11.33 0A.75.75 0 0 0 5.4 15.6 6.48 6.48 0 0 1 3.5 11Zm3 0a3.5 3.5 0 1 1 5.98 2.47.75.75 0 1 0 1.06 1.06A4.99 4.99 0 0 0 10 6a5 5 0 0 0-3.54 8.53.75.75 0 0 0 1.06-1.06A3.49 3.49 0 0 1 6.5 11ZM10 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z";
   
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