/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DoubleTapSwipeDown",
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

   var pathdregular = "M10.35 17.85a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 .7-.7l2.15 2.14V7.5a.5.5 0 0 1 1 0v8.8l2.15-2.15a.5.5 0 0 1 .7.7l-3 3ZM4.5 7.5a5.5 5.5 0 0 0 4 5.3v-1.06a4.5 4.5 0 1 1 3 0v1.05a5.5 5.5 0 1 0-7-5.29Zm2 0c0 1.4.82 2.6 2 3.16V9.5a2.5 2.5 0 1 1 3 0v1.16a3.5 3.5 0 1 0-5-3.16Z";
   var pathdfilled = "M10.53 17.78c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V7.75a.75.75 0 1 1 1.5 0v7.69l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5ZM4.25 7.5a5.75 5.75 0 0 0 4 5.48v-1.6a4.25 4.25 0 1 1 3.5 0v1.6a5.75 5.75 0 1 0-7.5-5.48Zm2.5 0c0 1.15.6 2.16 1.5 2.74V7.5a1.75 1.75 0 1 1 3.5.13V10.24a3.25 3.25 0 1 0-5-2.74Z";
   
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