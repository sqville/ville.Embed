/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableDeleteColumn",
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

   var pathdregular = "M10.5 2.5a.5.5 0 0 0-1 0v4.88c.13.1.24.22.36.34l.14.15.14-.15c.12-.12.23-.24.36-.34V2.5Zm-1 15v-4.89c.13-.1.24-.23.36-.35l.14-.14.14.14c.12.12.23.24.36.35v4.89a.5.5 0 0 1-1 0ZM2 3.5c0-.28.22-.5.5-.5H4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2.5a.5.5 0 0 1 0-1H4a1 1 0 0 0 1-1v-2H2.5a.5.5 0 0 1 0-1H5V8H2.5a.5.5 0 0 1 0-1H5V5a1 1 0 0 0-1-1H2.5a.5.5 0 0 1-.5-.5Zm16 0a.5.5 0 0 0-.5-.5H16a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1.5a.5.5 0 0 0 0-1H16a1 1 0 0 1-1-1v-2h2.5a.5.5 0 0 0 0-1H15V8h2.5a.5.5 0 0 0 0-1H15V5a1 1 0 0 1 1-1h1.5a.5.5 0 0 0 .5-.5Zm-6.15 4.65a.5.5 0 0 0-.7 0L10 9.29 8.85 8.15a.5.5 0 1 0-.7.7L9.29 10l-1.14 1.15a.5.5 0 0 0 .7.7L10 10.71l1.15 1.14a.5.5 0 0 0 .7-.7L10.71 10l1.14-1.15a.5.5 0 0 0 0-.7Z";
   var pathdfilled = "M10.5 2.5a.5.5 0 0 0-1 0v4.88c.13.1.24.22.36.34l.14.15.14-.15c.12-.12.23-.24.36-.34V2.5Zm-1 15v-4.89c.13-.1.24-.23.36-.35l.14-.14.14.14c.12.12.23.24.36.35v4.89a.5.5 0 0 1-1 0ZM2 3.5c0-.28.22-.5.5-.5H4a2 2 0 0 1 2 2v2H2V3.5Zm0 13V13h4v2a2 2 0 0 1-2 2H2.5a.5.5 0 0 1-.5-.5ZM6 8v4H2V8h4Zm12-4.5a.5.5 0 0 0-.5-.5H16a2 2 0 0 0-2 2v2h4V3.5ZM14 13v2c0 1.1.9 2 2 2h1.5a.5.5 0 0 0 .5-.5V13h-4Zm-2.15-4.85a.5.5 0 0 0-.7 0L10 9.29 8.85 8.15a.5.5 0 1 0-.7.7L9.29 10l-1.14 1.15a.5.5 0 0 0 .7.7L10 10.71l1.15 1.14a.5.5 0 0 0 .7-.7L10.71 10l1.14-1.15a.5.5 0 0 0 0-.7ZM18 12V8h-4v4h4Z";
   
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