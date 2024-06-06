/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SlideGrid",
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

   var pathdregular = "M5 6a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5Zm3.5 1v1.5H5V7h3.5ZM4 11.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1.5Zm1 0V13h3.5v-1.5H5ZM11.5 6H15a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1ZM15 7h-3.5v1.5H15V7Zm-4.5 4.5a1 1 0 0 1 1-1H15a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1v-1.5Zm1 0V13H15v-1.5h-3.5ZM2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4Z";
   var pathdfilled = "M4 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Zm1 3.5a1 1 0 0 0-1 1V13a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1H5ZM10.5 7a1 1 0 0 1 1-1H15a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1V7Zm1 3.5a1 1 0 0 0-1 1V13a1 1 0 0 0 1 1H15a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1h-3.5ZM2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4Z";
   
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