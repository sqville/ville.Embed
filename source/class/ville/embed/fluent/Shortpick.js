/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Shortpick",
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

   var pathdregular = "M7 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.5a.5.5 0 0 0 0-1H7V3h.5a.5.5 0 0 0 0-1H7Zm2.5 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h.5v2h-.5a.5.5 0 0 0 0 1h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-.5Zm-3 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM5 7.5a.5.5 0 0 0-1 0v8A2.5 2.5 0 0 0 6.5 18h7a2.5 2.5 0 0 0 2.5-2.5v-8a.5.5 0 0 0-1 0v8c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 15.5v-8ZM7 12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H7Zm0 1h6v2H7v-2ZM6 8a1 1 0 0 1 1-1h.5a.5.5 0 0 1 0 1H7v2h.5a.5.5 0 0 1 0 1H7a1 1 0 0 1-1-1V8Zm3-.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3 0c0-.28.22-.5.5-.5h.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.5a.5.5 0 0 1 0-1h.5V8h-.5a.5.5 0 0 1-.5-.5Zm-3 3c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z";
   var pathdfilled = "M7 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.5a.5.5 0 0 0 0-1H7V3h.5a.5.5 0 0 0 0-1H7Zm2.5 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h.5v2h-.5a.5.5 0 0 0 0 1h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-.5Zm-3 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-5 2c.28 0 .5.22.5.5v8c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-8a.5.5 0 0 1 1 0v8a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-8c0-.28.22-.5.5-.5ZM7 12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H7ZM6 8a1 1 0 0 1 1-1h.5a.5.5 0 0 1 0 1H7v2h.5a.5.5 0 0 1 0 1H7a1 1 0 0 1-1-1V8Zm3-.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3 0c0-.28.22-.5.5-.5h.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.5a.5.5 0 0 1 0-1h.5V8h-.5a.5.5 0 0 1-.5-.5Zm-3 3c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z";
   
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