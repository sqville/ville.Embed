/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Pill",
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

   var pathdregular = "M8.85 13.15c.2.2.2.5 0 .7l-1.5 1.5c-.74.75-1.95.75-2.7 0A.5.5 0 0 1 5 14.5a.5.5 0 0 1 .35.15c.36.35.94.35 1.3 0l1.5-1.5c.2-.2.5-.2.7 0Zm2.3-10a4.04 4.04 0 1 1 5.7 5.7l-8 8a4.04 4.04 0 1 1-5.7-5.7l8-8Zm5 .7a3.04 3.04 0 0 0-4.3 0L8.21 7.5l4.29 4.3 3.65-3.65a3.04 3.04 0 0 0 0-4.3Zm-4.36 8.65L7.5 8.2l-3.65 3.65a3.04 3.04 0 0 0 4.3 4.3l3.64-3.65Z";
   var pathdfilled = "M11.15 3.15a4.04 4.04 0 1 1 5.7 5.7l-8 8a4.04 4.04 0 1 1-5.7-5.7l8-8Zm5 .7a3.04 3.04 0 0 0-4.3 0L8.21 7.5l4.29 4.3 3.65-3.65a3.04 3.04 0 0 0 0-4.3Zm-7.3 10.3a.5.5 0 0 0-.7 0l-1.5 1.5a.91.91 0 0 1-1.3 0 .5.5 0 0 0-.85.35c0 .14.06.27.15.36.75.74 1.96.74 2.7 0l1.5-1.5a.5.5 0 0 0 0-.71Z";
   
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