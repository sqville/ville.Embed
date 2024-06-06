/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleTruckProfile",
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

   var pathdregular = "M2.04 4.75C2.04 3.78 2.83 3 3.8 3h8.46c.97 0 1.75.78 1.75 1.75V6h.88c.57 0 1.09.32 1.34.83l1.62 3.24c.1.2.16.43.16.67v3.76c0 .83-.67 1.5-1.5 1.5h-1.55a2.5 2.5 0 0 1-4.9 0h-1.1a2.5 2.5 0 0 1-4.9 0H3.8c-.96 0-1.75-.78-1.75-1.75v-9.5ZM10.05 15A2.5 2.5 0 0 1 13 13.05v-8.3a.75.75 0 0 0-.75-.75H3.79a.75.75 0 0 0-.75.75v9.5c0 .41.34.75.75.75h.26a2.5 2.5 0 0 1 4.9 0h1.1ZM14 13.5c.48.36.83.89.95 1.5h1.55a.5.5 0 0 0 .5-.5V11h-3v2.5Zm0-3.5h2.7l-1.37-2.72a.5.5 0 0 0-.45-.28H14v3Zm-7.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.5 1.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z";
   var pathdfilled = "M2.04 4.75C2.04 3.78 2.83 3 3.8 3h8.46c.97 0 1.75.78 1.75 1.75V6h.88c.57 0 1.09.32 1.34.83l1.62 3.24c.1.2.16.43.16.67v3.76c0 .83-.67 1.5-1.5 1.5h-1.55a2.5 2.5 0 0 1-4.9 0h-1.1a2.5 2.5 0 0 1-4.9 0H3.8c-.96 0-1.75-.78-1.75-1.75v-9.5ZM14 7v3h2.7l-1.37-2.72a.5.5 0 0 0-.45-.28H14Zm-7.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.5 1.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z";
   
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