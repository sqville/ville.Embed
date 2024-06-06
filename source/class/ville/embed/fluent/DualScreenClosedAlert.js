/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DualScreenClosedAlert",
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

   var pathdregular = "M10.5 5a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.32.88h-8a.5.5 0 0 1-.32-.88L10.5 7V5Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1ZM6 6h3.5V5H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a2 2 0 0 0 2-2v-3.05a2.52 2.52 0 0 1-1 0V15a1 1 0 0 1-1 1H6V6Z";
   var pathdfilled = "M10.5 5a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.32.88h-8a.5.5 0 0 1-.32-.88L10.5 7V5Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Zm-4-4.46-.97.82A1.5 1.5 0 0 0 9.5 10h1.52l.12.33A2.5 2.5 0 0 0 14 11.95V15a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.5v1.54Z";
   
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