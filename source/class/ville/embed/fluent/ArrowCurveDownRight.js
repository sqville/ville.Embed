/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowCurveDownRight",
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

   var pathdregular = "M6.74 2.93a.5.5 0 1 1 .52-.86 6.95 6.95 0 0 1 2.88 3.03c.6 1.28.86 2.86.86 4.9v6.3l3.15-3.15a.5.5 0 0 1 .7.7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L10 16.29V10c0-1.96-.25-3.38-.76-4.47a5.96 5.96 0 0 0-2.5-2.6Z";
   var pathdfilled = "M6.61 3.14a.75.75 0 1 1 .78-1.28 7.2 7.2 0 0 1 2.98 3.13c.63 1.33.88 2.96.88 5.01v5.44l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72V10c0-1.95-.25-3.32-.74-4.37a5.71 5.71 0 0 0-2.4-2.49Z";
   
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