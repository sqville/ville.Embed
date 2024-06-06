/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Connected",
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

   var pathdregular = "M5.88 6.59a2.5 2.5 0 1 1 .7-.7L8.63 7.9a2.49 2.49 0 0 1 2.76 0l2.03-2.03a2.5 2.5 0 1 1 .7.7L12.1 8.63a2.49 2.49 0 0 1 0 2.76l2.03 2.03a2.5 2.5 0 1 1-.7.7l-2.04-2.02a2.49 2.49 0 0 1-2.76 0L6.6 14.12a2.5 2.5 0 1 1-.7-.7l2.02-2.04a2.49 2.49 0 0 1 0-2.76L5.88 6.6ZM6 4.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm11 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM4.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM11.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z";
   var pathdfilled = "M7 4.5c0 .51-.15.98-.41 1.38L8.62 7.9a2.49 2.49 0 0 1 2.76 0l2.03-2.03a2.5 2.5 0 1 1 .7.7L12.1 8.63a2.49 2.49 0 0 1 0 2.76l2.03 2.03a2.5 2.5 0 1 1-.7.7l-2.04-2.02a2.49 2.49 0 0 1-2.76 0L6.6 14.12a2.5 2.5 0 1 1-.7-.7l2.02-2.04a2.49 2.49 0 0 1 0-2.76L5.88 6.6A2.5 2.5 0 1 1 7 4.5Z";
   
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