/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ProductionCheckmark",
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

   var pathdregular = "M5 3.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Zm6.5-.5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm.5 3V4h2v2h-2ZM2 12a4 4 0 0 1 4-4h8a4 4 0 0 1 3.33 1.78A5.47 5.47 0 0 0 14 9H6a3 3 0 1 0 0 6h3.02c.03.34.1.68.19 1H6a4 4 0 0 1-4-4Zm8-1a1 1 0 0 1 .23.03 5.5 5.5 0 0 0-.93 1.68A1 1 0 0 1 10 11Zm-4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm13 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.85-1.85-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0-.7-.7Z";
   var pathdfilled = "M5 3.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Zm6.5-.5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm.5 3V4h2v2h-2ZM6 8a4 4 0 1 0 0 8h3.2a5.5 5.5 0 0 1 .1-3.29A1 1 0 0 1 10 11a1 1 0 0 1 .23.03 5.49 5.49 0 0 1 7.1-1.25A4 4 0 0 0 14 8H6Zm0 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm13 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.85-1.85-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0-.7-.7Z";
   
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