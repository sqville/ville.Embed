/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentPrint",
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

   var pathdregular = "M6 2a2 2 0 0 0-2 2v5.05c.16-.03.33-.05.5-.05H5V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-3.27A2 2 0 0 1 9 18h5a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM4.5 10c-.83 0-1.5.67-1.5 1.5v.5h-.5c-.83 0-1.5.67-1.5 1.5V16a1 1 0 0 0 1 1h1v.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V17h1a1 1 0 0 0 1-1v-2.5c0-.83-.67-1.5-1.5-1.5H8v-.5c0-.83-.67-1.5-1.5-1.5h-2ZM7 12H4v-.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v.5Zm-2.5 4h2c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1c0-.28.22-.5.5-.5Z";
   var pathdfilled = "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9a2 2 0 0 0 2-2v-2.5a2.5 2.5 0 0 0-2.04-2.46A2.5 2.5 0 0 0 6.5 9h-2c-.17 0-.34.02-.5.05V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM4.5 10c-.83 0-1.5.67-1.5 1.5v.5h-.5c-.83 0-1.5.67-1.5 1.5V16a1 1 0 0 0 1 1h1v.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V17h1a1 1 0 0 0 1-1v-2.5c0-.83-.67-1.5-1.5-1.5H8v-.5c0-.83-.67-1.5-1.5-1.5h-2ZM7 12H4v-.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v.5Zm-2.5 4h2c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1c0-.28.22-.5.5-.5Z";
   
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