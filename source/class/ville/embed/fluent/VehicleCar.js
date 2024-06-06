/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleCar",
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

   var pathdregular = "M13.86 3c1.2 0 2.22.84 2.45 2.01l.2.99h.74c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-.44l.11.56A1.5 1.5 0 0 1 18 9.5v5c0 .83-.67 1.5-1.5 1.5H16v1a1 1 0 1 1-2 0v-1H6v1a1 1 0 1 1-2 0v-1h-.5A1.5 1.5 0 0 1 2 14.5v-5c0-.68.46-1.26 1.08-1.44l.11-.56h-.44a.75.75 0 0 1 0-1.5h.74l.2-.99A2.5 2.5 0 0 1 6.14 3h7.72Zm2.64 6h-13a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5ZM6 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-.14-7H6.14c-.72 0-1.33.5-1.47 1.2L4.1 8h11.78l-.56-2.8A1.5 1.5 0 0 0 13.86 4Z";
   var pathdfilled = "M6 16v1a1 1 0 1 1-2 0v-1h2Zm10 0v1a1 1 0 1 1-2 0v-1h2ZM13.86 3c1.2 0 2.22.84 2.45 2.01l.2.99h.74c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-.44l.11.56A1.5 1.5 0 0 1 18 9.5v4c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 13.5v-4c0-.68.46-1.26 1.08-1.44l.11-.56h-.44a.75.75 0 0 1 0-1.5h.74l.2-.99A2.5 2.5 0 0 1 6.14 3h7.72ZM6 10.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM13.86 4H6.14c-.72 0-1.33.5-1.47 1.2L4.1 8h11.78l-.56-2.8A1.5 1.5 0 0 0 13.86 4Z";
   
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