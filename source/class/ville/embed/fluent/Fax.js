/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Fax",
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

   var pathdregular = "M5 4.5C5 3.67 5.67 3 6.5 3h7c.83 0 1.5.67 1.5 1.5V7h-1V4.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V8h5.5c-.22.3-.38.63-.45 1H5a1 1 0 0 0-1 1v5.5c0 .28.22.5.5.5h6.55c.07.37.23.7.45 1h-7A1.5 1.5 0 0 1 3 15.5V10c0-1.1.9-2 2-2V4.5Zm7 5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-6Zm1.5-.5a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-2Zm-7.88 1a.62.62 0 1 1 0 1.25.62.62 0 0 1 0-1.25Zm0 2.25a.62.62 0 1 1 0 1.25.62.62 0 0 1 0-1.25ZM8.5 13a.62.62 0 1 0-1.25 0 .62.62 0 0 0 1.25 0Zm-.63-3a.62.62 0 1 1 0 1.25.62.62 0 0 1 0-1.25Z";
   var pathdfilled = "M5 4.5C5 3.67 5.67 3 6.5 3h7c.83 0 1.5.67 1.5 1.5V7h-1V4.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V8h5.5c-.31.42-.5.94-.5 1.5v6c0 .56.19 1.08.5 1.5h-7A1.5 1.5 0 0 1 3 15.5V10c0-1.1.9-2 2-2V4.5Zm1.25 6.13a.62.62 0 1 0-1.25 0 .62.62 0 0 0 1.25 0Zm0 2.24a.62.62 0 1 0-1.25 0 .62.62 0 0 0 1.25 0Zm1.63-.5a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.24Zm.62-1.74a.62.62 0 1 0-1.25 0 .62.62 0 0 0 1.25 0Zm5-2.63c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-2Z";
   
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