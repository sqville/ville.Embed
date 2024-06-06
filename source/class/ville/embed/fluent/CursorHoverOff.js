/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CursorHoverOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7L3.39 4.1A2 2 0 0 0 2 6v7c0 1.1.9 2 2 2h5v-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.3l5.7 5.7v6.8a.5.5 0 0 0 .91.29l1.57-2.25 2.78.43 1.89 1.88a.5.5 0 0 0 .7-.7l-15-15Zm11.22 12.62-1.74-.26a.5.5 0 0 0-.49.2l-.84 1.2v-4.2l3.07 3.06Zm2.84.01A2 2 0 0 0 18 13V6a2 2 0 0 0-2-2H6.12l1 1H16a1 1 0 0 1 1 1v7a1 1 0 0 1-.89 1l.8.78Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7L3.39 4.1A2 2 0 0 0 2 6v7c0 1.1.9 2 2 2h5v-4.5c0-.23.05-.45.15-.65l.85.86v6.79a.5.5 0 0 0 .91.29l1.57-2.25 2.78.43 1.89 1.88a.5.5 0 0 0 .7-.7l-8-8-7-7Zm11.22 12.62-1.74-.26a.5.5 0 0 0-.49.2l-.84 1.2v-4.2l3.07 3.06Zm2.84.01A2 2 0 0 0 18 13V6a2 2 0 0 0-2-2H6.12l10.79 10.78Z";
   
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