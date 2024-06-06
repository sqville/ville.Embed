/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Games",
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

   var pathdregular = "M6 7.5a.5.5 0 0 1 1 0V9h1.5a.5.5 0 0 1 0 1H7v1.5a.5.5 0 0 1-1 0V10H4.5a.5.5 0 0 1 0-1H6V7.5Zm9 .5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 9.5A5.5 5.5 0 0 1 7.5 4h5a5.5 5.5 0 1 1 0 11h-5A5.5 5.5 0 0 1 2 9.5ZM7.5 5a4.5 4.5 0 0 0 0 9h5a4.5 4.5 0 1 0 0-9h-5Z";
   var pathdfilled = "M7.5 4a5.5 5.5 0 1 0 0 11h5a5.5 5.5 0 1 0 0-11h-5ZM6 7.5a.5.5 0 0 1 1 0V9h1.5a.5.5 0 0 1 0 1H7v1.5a.5.5 0 0 1-1 0V10H4.5a.5.5 0 0 1 0-1H6V7.5Zm9 .5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
   
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