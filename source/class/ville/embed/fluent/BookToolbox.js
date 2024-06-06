/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookToolbox",
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

   var pathdregular = "M12 3v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V3h.5c.83 0 1.5.67 1.5 1.5V6h-2v-.5a.5.5 0 0 0-1 0V6h-3v-.5a.5.5 0 0 0-1 0V6h-2V4.5c0-.83.67-1.5 1.5-1.5h.5Zm3.5-1h-2a.5.5 0 0 0-.5.5V3h3v-.5a.5.5 0 0 0-.5-.5ZM17 7h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 10 8.5V7h2v.5a.5.5 0 0 0 1 0V7h3v.5a.5.5 0 0 0 1 0V7ZM6 2h5.05v.04A2.5 2.5 0 0 0 9.5 3H6a1 1 0 0 0-1 1v11h10v-4h1v4.5a.5.5 0 0 1-.5.5H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2Z";
   var pathdfilled = "M12 3v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V3h.5c.83 0 1.5.67 1.5 1.5V6h-2v-.5a.5.5 0 0 0-1 0V6h-3v-.5a.5.5 0 0 0-1 0V6h-2V4.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5V3h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM17 7h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 10 8.5V7h2v.5a.5.5 0 0 0 1 0V7h3v.5a.5.5 0 0 0 1 0V7Zm-5.96-4.96.01-.04H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 1 0 0-1H6a1 1 0 0 1-1-1h10.5a.5.5 0 0 0 .5-.5V11h-4.5A2.5 2.5 0 0 1 9 8.5v-4a2.5 2.5 0 0 1 2.04-2.46Z";
   
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