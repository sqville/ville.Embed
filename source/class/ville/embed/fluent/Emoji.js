/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Emoji",
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

   var pathdregular = "M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm10.5-1.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1.61 4.01a.5.5 0 1 0-.78.63 5 5 0 0 0 7.78 0 .5.5 0 1 0-.78-.63 4 4 0 0 1-6.22 0Z";
   var pathdfilled = "M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm-6.5-1.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm.39 4.01a4 4 0 0 0 6.22 0 .5.5 0 1 1 .78.63 5 5 0 0 1-7.78 0 .5.5 0 1 1 .78-.63Z";
   
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