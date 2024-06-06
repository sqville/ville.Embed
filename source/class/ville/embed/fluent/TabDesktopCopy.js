/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TabDesktopCopy",
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

   var pathdregular = "M7.5 2A2.5 2.5 0 0 0 5 4.5v8A2.5 2.5 0 0 0 7.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 15.5 2h-8ZM17 4.5V5h-6.5a.5.5 0 0 1-.5-.5V3h5.5c.83 0 1.5.67 1.5 1.5Zm-8 0c0 .83.67 1.5 1.5 1.5H17v6.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 6 12.5v-8C6 3.67 6.67 3 7.5 3H9v1.5ZM12.5 18a2.5 2.5 0 0 0 2.45-2h-1.04c-.2.58-.76 1-1.41 1H6a3 3 0 0 1-3-3V7.5c0-.65.42-1.2 1-1.41V5.05A2.5 2.5 0 0 0 2 7.5V14a4 4 0 0 0 4 4h6.5Z";
   var pathdfilled = "M5 4.5A2.5 2.5 0 0 1 7.5 2H9v2.5c0 .83.67 1.5 1.5 1.5H18v6.5a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 5 12.5v-8Zm5 0V2h5.5A2.5 2.5 0 0 1 18 4.5V5h-7.5a.5.5 0 0 1-.5-.5ZM12.5 18a2.5 2.5 0 0 0 2.45-2H7.5A3.5 3.5 0 0 1 4 12.5V5.05A2.5 2.5 0 0 0 2 7.5V14a4 4 0 0 0 4 4h6.5Z";
   
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