/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Fluid",
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

   var pathdregular = "M8 4h5.5c.83 0 1.5.67 1.5 1.5V9h-1V5.5a.5.5 0 0 0-.5-.5H8V4ZM5 8v5.5c0 .28.22.5.5.5H9v1H5.5A1.5 1.5 0 0 1 4 13.5V8h1ZM2 3.5C2 2.67 2.67 2 3.5 2h2C6.33 2 7 2.67 7 3.5v2.04c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 2 5.54V3.5ZM3.5 3a.5.5 0 0 0-.5.5v2.04c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5h-2Zm6.5 8.5c0-.83.68-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5v-5Zm1.5-.5a.5.5 0 0 0-.5.5v5c0 .28.23.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z";
   var pathdfilled = "M2 3.5C2 2.67 2.67 2 3.5 2h2C6.33 2 7 2.67 7 3.5v2.04c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 2 5.54V3.5ZM8 4h5.5c.83 0 1.5.67 1.5 1.5V9h-1V5.5a.5.5 0 0 0-.5-.5H8V4ZM5 8v5.5c0 .28.22.5.5.5H9v1H5.5A1.5 1.5 0 0 1 4 13.5V8h1Zm6.5 2c-.82 0-1.5.67-1.5 1.5v5c0 .83.68 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5Z";
   
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