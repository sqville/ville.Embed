/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MentionBrackets",
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

   var pathdregular = "M4.5 3C3.67 3 3 3.67 3 4.5v11c0 .83.67 1.5 1.5 1.5h2a.5.5 0 0 1 0 1h-2A2.5 2.5 0 0 1 2 15.5v-11A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2Zm11 14c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1h2Zm-4-7a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM10 7.5c.56 0 1.08.19 1.5.5a.5.5 0 0 1 1 0v2.75a.75.75 0 0 0 1.5 0V10a4 4 0 1 0-4.24 4h.02a3.99 3.99 0 0 0 1.58-.23c.3-.1.64.11.64.43 0 .23-.14.45-.36.53A5 5 0 1 1 15 10v.75a1.75 1.75 0 0 1-3.2.98A2.5 2.5 0 0 1 7.5 10 2.5 2.5 0 0 1 10 7.5Z";
   var pathdfilled = "M4.75 2A2.75 2.75 0 0 0 2 4.75v10.5A2.75 2.75 0 0 0 4.75 18h1.5a.75.75 0 0 0 0-1.5h-1.5c-.69 0-1.25-.56-1.25-1.25V4.75c0-.69.56-1.25 1.25-1.25h1.5a.75.75 0 0 0 0-1.5h-1.5Zm7 5.25c.41 0 .75.34.75.75v2.75a.75.75 0 0 0 1.5 0V10a4 4 0 1 0-4.24 4 4.1 4.1 0 0 0 1.29-.13c.35-.1.75.05.89.39.17.43-.03.93-.47 1.05A5.5 5.5 0 1 1 15.5 10v.74c0 .46-.14.88-.37 1.24l-.13.3v-.13a2.25 2.25 0 0 1-3.58-.1 2.5 2.5 0 1 1-.37-4.33c.1-.28.38-.48.7-.48ZM10 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8-4.25A2.75 2.75 0 0 0 15.25 2h-1.5a.75.75 0 0 0 0 1.5h1.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25h-1.5a.75.75 0 0 0 0 1.5h1.5A2.75 2.75 0 0 0 18 15.25V4.75Z";
   
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