/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentToolbox",
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

   var pathdregular = "M6 2a2 2 0 0 0-2 2v4.27A2 2 0 0 1 5 8V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-1v1h1a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM4 12v-1.5C4 9.67 4.67 9 5.5 9h2c.83 0 1.5.67 1.5 1.5V12h1.5c.83 0 1.5.67 1.5 1.5V15H9v-.5a.5.5 0 0 0-1 0v.5H5v-.5a.5.5 0 0 0-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H4Zm1-1.5V12h3v-1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM9 16h3v1.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 1 17.5V16h3v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z";
   var pathdfilled = "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H13v-5a2 2 0 0 0-2-2h-1v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-1 .27V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM4 12v-1.5C4 9.67 4.67 9 5.5 9h2c.83 0 1.5.67 1.5 1.5V12h1.5c.83 0 1.5.67 1.5 1.5V15H9v-.5a.5.5 0 0 0-1 0v.5H5v-.5a.5.5 0 0 0-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H4Zm1-1.5V12h3v-1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM9 16h3v1.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 1 17.5V16h3v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z";
   
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