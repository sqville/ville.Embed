/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowCircleRight",
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

   var pathdregular = "m10.85 13.35 3-3a.5.5 0 0 0 0-.7l-3-3a.5.5 0 0 0-.7.7l2.14 2.15H6.5a.5.5 0 0 0 0 1h5.8l-2.15 2.15a.5.5 0 0 0 .7.7ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8 7a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z";
   var pathdfilled = "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.85-4.65a.5.5 0 0 1-.7-.7l2.14-2.15H6.5a.5.5 0 0 1 0-1h5.8l-2.15-2.15a.5.5 0 0 1 .7-.7l3 3c.2.2.2.5 0 .7l-3 3Z";
   
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