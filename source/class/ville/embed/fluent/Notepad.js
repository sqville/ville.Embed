/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Notepad",
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

   var pathdregular = "M7.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM7 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-1-11a.5.5 0 0 0-.5.5V3h-.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h6a.5.5 0 0 0 .35-.15l4-4a.5.5 0 0 0 .15-.35v-9c0-.83-.67-1.5-1.5-1.5H14v-.5a.5.5 0 0 0-1 0V3h-2.5v-.5a.5.5 0 0 0-1 0V3H7v-.5a.5.5 0 0 0-.5-.5Zm8 2c.28 0 .5.22.5.5V13h-2.5c-.83 0-1.5.67-1.5 1.5V17H5.5a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5h9Zm-.2 10L12 16.3v-1.8c0-.28.22-.5.5-.5h1.8Z";
   var pathdfilled = "M7 2.5a.5.5 0 0 0-1 0V3h-.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5H11v-3.5c0-.83.67-1.5 1.5-1.5H16V4.5c0-.83-.67-1.5-1.5-1.5H14v-.5a.5.5 0 0 0-1 0V3h-2.5v-.5a.5.5 0 0 0-1 0V3H7v-.5Zm0 5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM7 13.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm8.69.5H12.5a.5.5 0 0 0-.5.5v3.19l.15-.13 3.41-3.41.13-.15Z";
   
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