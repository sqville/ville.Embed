/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BarcodeScanner",
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

   var pathdregular = "M2 5.5A2.5 2.5 0 0 1 4.5 3h1a.5.5 0 0 1 0 1h-1C3.67 4 3 4.67 3 5.5v1a.5.5 0 0 1-1 0v-1Zm12-2c0-.28.22-.5.5-.5h1A2.5 2.5 0 0 1 18 5.5v1a.5.5 0 0 1-1 0v-1c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 0 1-.5-.5ZM2.5 13c.28 0 .5.22.5.5v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 0 1 0 1h-1A2.5 2.5 0 0 1 2 14.5v-1c0-.28.22-.5.5-.5Zm15 0c.28 0 .5.22.5.5v1a2.5 2.5 0 0 1-2.5 2.5h-1a.5.5 0 0 1 0-1h1c.83 0 1.5-.67 1.5-1.5v-1c0-.28.22-.5.5-.5Zm-12-7c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5Zm3.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2.5-.5c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5Zm3.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Z";
   var pathdfilled = "M2 5.75A2.75 2.75 0 0 1 4.75 3h.75a.75.75 0 0 1 0 1.5h-.75c-.69 0-1.25.56-1.25 1.25v.75a.75.75 0 0 1-1.5 0v-.75Zm11.75-2c0-.41.34-.75.75-.75h.75A2.75 2.75 0 0 1 18 5.75v.75a.75.75 0 0 1-1.5 0v-.75c0-.69-.56-1.25-1.25-1.25h-.75a.75.75 0 0 1-.75-.75Zm-11 9c.41 0 .75.34.75.75v.75c0 .69.56 1.25 1.25 1.25h.75a.75.75 0 0 1 0 1.5h-.75A2.75 2.75 0 0 1 2 14.25v-.75c0-.41.34-.75.75-.75Zm14.5 0c.41 0 .75.34.75.75v.75A2.75 2.75 0 0 1 15.25 17h-.75a.75.75 0 0 1 0-1.5h.75c.69 0 1.25-.56 1.25-1.25v-.75c0-.41.34-.75.75-.75ZM5.5 6c.41 0 .75.34.75.75v6.5a.75.75 0 0 1-1.5 0v-6.5c0-.41.34-.75.75-.75Zm3.75.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5ZM11.5 6c.41 0 .75.34.75.75v6.5a.75.75 0 0 1-1.5 0v-6.5c0-.41.34-.75.75-.75Zm3.75.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z";
   
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