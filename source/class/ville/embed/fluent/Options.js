/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Options",
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

   var pathdregular = "M14.95 5a2.5 2.5 0 0 0-4.9 0H2.5a.5.5 0 0 0 0 1h7.55a2.5 2.5 0 0 0 4.9 0h2.55a.5.5 0 0 0 0-1h-2.55ZM12.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-2.55 7a2.5 2.5 0 0 0-4.9 0H2.5a.5.5 0 0 0 0 1h2.55a2.5 2.5 0 0 0 4.9 0h7.55a.5.5 0 0 0 0-1H9.95ZM7.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z";
   var pathdfilled = "M17.25 5h-2.36a2.5 2.5 0 0 0-4.78 0H2.75a.75.75 0 0 0 0 1.5h7.36a2.5 2.5 0 0 0 4.78 0h2.36a.75.75 0 0 0 0-1.5Zm-14.5 8.5a.75.75 0 0 0 0 1.5h2.36a2.5 2.5 0 0 0 4.78 0h7.36a.75.75 0 0 0 0-1.5H9.89a2.5 2.5 0 0 0-4.78 0H2.75Z";
   
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