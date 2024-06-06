/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageCopy",
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

   var pathdregular = "M8.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v6c0 .37.1.72.28 1.02L9.79 9.5a1.71 1.71 0 0 1 2.42 0l3.51 3.52A2 2 0 0 0 16 12V6a2 2 0 0 0-2-2H8Zm7.02 9.72-3.52-3.51a.71.71 0 0 0-1 0l-3.52 3.51A2 2 0 0 0 8 14h6a2 2 0 0 0 1.02-.28ZM12 17a3 3 0 0 0 2.24-1H7.5A3.5 3.5 0 0 1 4 12.5V5.76A3 3 0 0 0 3 8v4.5A4.5 4.5 0 0 0 7.5 17H12Z";
   var pathdfilled = "M5 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6c0 .65-.2 1.25-.55 1.74L12.2 9.5a1.71 1.71 0 0 0-2.42 0l-4.24 4.24A2.99 2.99 0 0 1 5 12V6Zm3.5 1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 2.7 4.24 4.25c-.5.34-1.1.55-1.74.55H8c-.65 0-1.25-.2-1.74-.55l4.24-4.24a.71.71 0 0 1 1 0Zm2.74 5.8A3 3 0 0 1 12 17H7.5A4.5 4.5 0 0 1 3 12.5V8a3 3 0 0 1 1-2.24v6.74A3.5 3.5 0 0 0 7.5 16h6.74Z";
   
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