/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DoubleSwipeDown",
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

   var pathdregular = "M5.85 17.85a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 .7-.7L5 16.29V5.5a.5.5 0 0 1 1 0v10.8l2.15-2.15a.5.5 0 0 1 .7.7l-3 3Zm9 0a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 .7-.7L14 16.29V5.5a.5.5 0 0 1 1 0v10.8l2.15-2.15a.5.5 0 0 1 .7.7l-3 3ZM11 5.5c0 1.4.82 2.6 2 3.16V7.5a2.5 2.5 0 1 1 3 0v1.16a3.5 3.5 0 1 0-5-3.16ZM4 8.66a3.5 3.5 0 1 1 3 0V7.5a2.5 2.5 0 1 0-3 0v1.16Z";
   var pathdfilled = "M6.28 17.78c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06L5 15.44V5.75a.75.75 0 0 1 1.5 0v9.69l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5ZM2 5.75c0 1.44.81 2.69 2 3.32v-1.9a2.25 2.25 0 1 1 3.5 0v1.9A3.75 3.75 0 1 0 2 5.75Zm10.5 3.32a3.75 3.75 0 1 1 3.5 0v-1.9a2.25 2.25 0 1 0-3.5 0v1.9Zm2.28 8.71c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.22 1.22V5.75a.75.75 0 0 1 1.5 0v9.69l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5Z";
   
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