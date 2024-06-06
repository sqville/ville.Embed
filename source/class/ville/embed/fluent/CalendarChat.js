/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarChat",
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

   var pathdregular = "M5.5 16h3.7c.08.27.18.52.29.77l-.07.23H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5Zm0-12C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5h-9Zm5.06 12.68-.54 1.8c-.1.3.2.6.5.5l1.8-.54a4.5 4.5 0 1 0-1.76-1.75ZM12.5 16a.5.5 0 0 1 0-1h2a.5.5 0 1 1 0 1h-2Zm0-3h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1 0-1Z";
   var pathdfilled = "M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3h-9ZM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17h3.92l.07-.23A5.48 5.48 0 0 1 14.5 9c.9 0 1.75.22 2.5.6V7Zm-7 7.5c0 .8.2 1.54.56 2.18l-.54 1.8c-.1.3.2.6.51.5l1.79-.54A4.5 4.5 0 1 0 10 14.5Zm2.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 1 1 0-1Zm-.5 2.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z";
   
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