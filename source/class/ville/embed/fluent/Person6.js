/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Person6",
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

   var pathdregular = "M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3 13a2 2 0 0 1 2-2h9.05c-.3.29-.54.63-.71 1H5A1 1 0 0 0 4 13c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 10 17c1.1 0 2.13-.15 3-.43 0 .34.06.68.16 1-.96.29-2.03.43-3.16.43a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm12 .5a1.5 1.5 0 0 1 2.63-1 .5.5 0 0 0 .74-.65A2.5 2.5 0 0 0 14 13.5v3a2.5 2.5 0 1 0 1-2v-1Zm1.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z";
   var pathdfilled = "M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-3 7a2 2 0 0 1 2-2h9.05A3.49 3.49 0 0 0 13 13.5v3c0 .37.06.73.16 1.06-.96.3-2.03.44-3.16.44a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm12 .5a1.5 1.5 0 0 1 2.63-1 .5.5 0 0 0 .74-.65A2.5 2.5 0 0 0 14 13.5v3a2.5 2.5 0 1 0 1-2v-1Zm1.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z";
   
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