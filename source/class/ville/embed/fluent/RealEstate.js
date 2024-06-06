/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.RealEstate",
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

   var pathdregular = "M2 3.5A1.5 1.5 0 0 1 4.91 3H16.5a1.5 1.5 0 0 1 .5 2.92V13a3 3 0 0 1-3 3H7c-.77 0-1.47-.29-2-.76v2.01c0 .41-.34.75-.75.75h-1.5a.75.75 0 0 1-.75-.75V3.5ZM16 13V6H5v7c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2ZM4 5h12.5a.5.5 0 0 0 0-1H4v-.5a.5.5 0 0 0-1 0V17h1V5Zm3.5 4.95v2.56c0 .27.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1c0 .27.22.5.5.5h1a.5.5 0 0 0 .5-.5V9.95a1 1 0 0 0-.34-.74l-2.33-2.07a.5.5 0 0 0-.66 0L7.84 9.2a1 1 0 0 0-.34.74Z";
   var pathdfilled = "M2 3a1 1 0 0 1 2 0h13a1 1 0 1 1 0 2H4v12.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V3Zm3 3.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 5 13.5v-7Zm3 7c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-2.55a1 1 0 0 0-.34-.75l-2.33-2.07a.5.5 0 0 0-.66 0L8.34 10.2a1 1 0 0 0-.34.75v2.55Z";
   
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