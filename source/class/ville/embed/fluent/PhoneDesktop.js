/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PhoneDesktop",
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

   var pathdregular = "M6 3h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9v1h3v2H9v1h5.5a.5.5 0 0 0 0-1H13v-2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3h1V4a1 1 0 0 1 1-1ZM4.5 15a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM2 9.5C2 8.67 2.67 8 3.5 8h3C7.33 8 8 8.67 8 9.5v7c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 2 16.5v-7ZM3.5 9a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-3Z";
   var pathdfilled = "M6 2a2 2 0 0 0-2 2v3h2.5A2.5 2.5 0 0 1 9 9.5V13h3v2H9v1h5.5a.5.5 0 0 0 0-1H13v-2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6ZM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-7C8 8.67 7.33 8 6.5 8h-3Zm.5 7.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z";
   
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