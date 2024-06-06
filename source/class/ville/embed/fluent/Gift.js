/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Gift",
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

   var pathdregular = "M12 2a2.5 2.5 0 0 1 2 4h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5V11a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a2.5 2.5 0 1 1 4-3c.46-.6 1.18-1 2-1Zm-2.5 9H5v4.5c0 .83.67 1.5 1.5 1.5h3v-6Zm5.5 0h-4.5v6h3c.83 0 1.5-.67 1.5-1.5V11ZM9.5 7H4v3h5.5V7ZM16 7h-5.5v3H16V7Zm-4-4c-.83 0-1.5.67-1.5 1.5V6H12a1.5 1.5 0 0 0 0-3ZM8 3a1.5 1.5 0 0 0-.14 3H9.5V4.36A1.5 1.5 0 0 0 8 3Z";
   var pathdfilled = "M9.5 11v7h-3A2.5 2.5 0 0 1 4 15.66V11h5.5Zm6.5 0v4.5a2.5 2.5 0 0 1-2.34 2.5H10.5v-7H16Zm-4-9a2.5 2.5 0 0 1 2 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.5V6h-1v4H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a2.5 2.5 0 1 1 4-3c.46-.6 1.18-1 2-1Zm0 1c-.83 0-1.5.67-1.5 1.5V6H12a1.5 1.5 0 0 0 0-3ZM8 3a1.5 1.5 0 0 0-.14 3H9.5V4.36A1.5 1.5 0 0 0 8 3Z";
   
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