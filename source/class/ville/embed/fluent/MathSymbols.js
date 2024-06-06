/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MathSymbols",
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

   var pathdregular = "M5 5v2.5a.5.5 0 0 0 1 0V5h2.5a.5.5 0 0 0 0-1H6V1.5a.5.5 0 0 0-1 0V4H2.5a.5.5 0 0 0 0 1H5Zm6-.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5ZM8.85 16.15 6.21 13.5l2.64-2.65a.5.5 0 0 0-.7-.7L5.5 12.79l-2.65-2.64a.5.5 0 0 0-.7.7l2.64 2.65-2.64 2.65a.5.5 0 0 0 .7.7l2.65-2.64 2.65 2.64a.5.5 0 0 0 .7-.7ZM11.5 13a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm4-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z";
   var pathdfilled = "M4.75 5.25v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2ZM11 4.5c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 11 4.5Zm-8.78 6.78 2.22 2.22-2.22 2.22a.75.75 0 1 0 1.06 1.06l2.22-2.22 2.22 2.22a.75.75 0 0 0 1.06-1.06L6.56 13.5l2.22-2.22a.75.75 0 1 0-1.06-1.06L5.5 12.44l-2.22-2.22a.75.75 0 1 0-1.06 1.06Zm9.53 1.47a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM15.5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z";
   
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