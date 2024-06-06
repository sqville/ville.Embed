/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonSearch",
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

   var pathdregular = "M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm7.87 10.8a8.53 8.53 0 0 1-3.97 1.17 1.5 1.5 0 0 0-.34-.53l-.44-.44a8.07 8.07 0 0 0 4.2-1.05A3.36 3.36 0 0 0 16 13a1 1 0 0 0-1-1H8.74c-.12-.36-.3-.7-.5-1H15a2 2 0 0 1 2 2c0 1.7-.83 2.97-2.13 3.8ZM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z";
   var pathdfilled = "M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm4.87 14.8a8.53 8.53 0 0 1-3.97 1.17 1.5 1.5 0 0 0-.34-.53l-2-2A4.48 4.48 0 0 0 8.24 11H15a2 2 0 0 1 2 2c0 1.7-.83 2.97-2.13 3.8ZM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z";
   
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