/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Pentagon",
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

   var pathdregular = "M8.4 1.65a2.5 2.5 0 0 1 3.36 0l5.43 4.99c.73.67 1 1.7.68 2.64l-2.03 6.02a2.5 2.5 0 0 1-2.36 1.7H6.65c-1.05 0-2-.66-2.35-1.65L2.15 9.4a2.5 2.5 0 0 1 .67-2.7L8.4 1.65Zm2.69.74a1.5 1.5 0 0 0-2.03 0L3.5 7.44a1.5 1.5 0 0 0-.4 1.62l2.15 5.95c.21.6.78.99 1.4.99h6.84a1.5 1.5 0 0 0 1.42-1.02l2.02-6.02a1.5 1.5 0 0 0-.4-1.58l-5.43-4.99Z";
   var pathdfilled = "M11.76 1.66a2.5 2.5 0 0 0-3.37-.01L2.82 6.7a2.5 2.5 0 0 0-.67 2.7l2.15 5.95A2.5 2.5 0 0 0 6.65 17h6.83a2.5 2.5 0 0 0 2.36-1.7l2.03-6.02a2.5 2.5 0 0 0-.68-2.64l-5.43-4.98Z";
   
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