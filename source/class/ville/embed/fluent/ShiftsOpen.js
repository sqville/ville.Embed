/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShiftsOpen",
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

   var pathdregular = "M4 5.5C4 4.67 4.67 4 5.5 4h2a.5.5 0 0 0 0-1h-2A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h2a.5.5 0 0 0 0-1h-2A1.5 1.5 0 0 1 4 14.5v-9ZM12.5 3a.5.5 0 0 0 0 1h2c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-2a.5.5 0 0 0 0 1h2a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-2ZM10 5.5a.5.5 0 0 0-1 0v5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1H10V5.5Z";
   var pathdfilled = "M4.5 5.75c0-.69.56-1.25 1.25-1.25H7.5a.75.75 0 0 0 0-1.5H5.75A2.75 2.75 0 0 0 3 5.75v8.5A2.75 2.75 0 0 0 5.75 17H7.5a.75.75 0 0 0 0-1.5H5.75c-.69 0-1.25-.56-1.25-1.25v-8.5Zm8-2.75a.75.75 0 0 0 0 1.5h1.75c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H12.5a.75.75 0 0 0 0 1.5h1.75A2.75 2.75 0 0 0 17 14.25v-8.5A2.75 2.75 0 0 0 14.25 3H12.5Zm-2 2.75a.75.75 0 0 0-1.5 0v4.5c0 .41.34.75.75.75h3.5a.75.75 0 0 0 0-1.5H10.5V5.75Z";
   
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