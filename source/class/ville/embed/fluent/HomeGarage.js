/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HomeGarage",
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

   var pathdregular = "m9.67 3.13-5.5 4.96a.5.5 0 0 0-.17.37v7.04c0 .28.22.5.5.5H6v-4.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5V16h1.5a.5.5 0 0 0 .5-.5V8.46a.5.5 0 0 0-.17-.37l-5.5-4.96a.5.5 0 0 0-.66 0ZM4.5 17A1.5 1.5 0 0 1 3 15.5V8.46c0-.43.18-.83.5-1.11L9 2.39a1.5 1.5 0 0 1 2 0l5.5 4.96c.32.28.5.68.5 1.1v7.05c0 .83-.67 1.5-1.5 1.5h-11Zm8.5-1v-2H7v2h6Zm0-4.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V13h6v-1.5Z";
   var pathdfilled = "M11 2.39a1.5 1.5 0 0 0-2 0L3.5 7.35c-.32.28-.5.68-.5 1.1v7.05c0 .83.67 1.5 1.5 1.5H6v-4.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5V17h1.5c.83 0 1.5-.67 1.5-1.5V8.46c0-.43-.18-.83-.5-1.11L11 2.39ZM13 14v-1.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V14h6Zm-6 1h6v2H7v-2Z";
   
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