/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTrendingWrench",
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

   var pathdregular = "M16.5 3c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V4.7l-4.65 4.65a.5.5 0 0 1-.7 0L9 7.71l-5.15 5.14a.5.5 0 0 1-.7-.7l5.5-5.5a.5.5 0 0 1 .7 0L11 8.29 15.3 4h-2.8a.5.5 0 0 1 0-1h4Zm-.4 6.71c.26-.26.16-.7-.2-.74a3.5 3.5 0 0 0-3.71 4.66l-2.72 2.7a1.5 1.5 0 0 0 2.13 2.13l2.7-2.71a3.5 3.5 0 0 0 4.66-3.7c-.04-.37-.48-.48-.74-.22l-.97.97a1.5 1.5 0 1 1-2.12-2.12l.97-.97Z";
   var pathdfilled = "M16.75 3a.75.75 0 0 1 .75.75v4.5c0 .26-.14.5-.34.63a1.38 1.38 0 0 0-1.15-.9H16V5.56l-4.22 4.22c-.3.3-.77.3-1.06 0L9 8.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06l5.25-5.25c.3-.3.77-.3 1.06 0l1.72 1.72 3.69-3.69h-2.69a.75.75 0 0 1 0-1.5h4.5Zm-.65 6.71c.26-.26.16-.7-.2-.74a3.5 3.5 0 0 0-3.71 4.66l-2.72 2.7a1.5 1.5 0 0 0 2.13 2.13l2.7-2.71a3.5 3.5 0 0 0 4.66-3.7c-.04-.37-.48-.48-.74-.22l-.97.97a1.5 1.5 0 1 1-2.12-2.12l.97-.97Z";
   
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