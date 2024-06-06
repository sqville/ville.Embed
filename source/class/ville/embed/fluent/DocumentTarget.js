/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentTarget",
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

   var pathdregular = "M6 2a2 2 0 0 0-2 2v6.26l.02-.01c.1-.54.47-.99.98-1.16V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1H9.24c-.25.38-.56.71-.91 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM6 10.5a.5.5 0 0 0-1 0v.54A3.5 3.5 0 0 0 2.04 14H1.5a.5.5 0 0 0 0 1h.54A3.5 3.5 0 0 0 5 17.96v.54a.5.5 0 0 0 1 0v-.54A3.5 3.5 0 0 0 8.96 15h.54a.5.5 0 0 0 0-1h-.54A3.5 3.5 0 0 0 6 11.04v-.54Zm2 4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z";
   var pathdfilled = "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H8.33a4.5 4.5 0 0 0 1.42-2.02 1.5 1.5 0 0 0 0-2.96 4.51 4.51 0 0 0-2.77-2.77 1.5 1.5 0 0 0-2.96 0H4V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM6 10.5a.5.5 0 0 0-1 0v.54A3.5 3.5 0 0 0 2.04 14H1.5a.5.5 0 0 0 0 1h.54A3.5 3.5 0 0 0 5 17.96v.54a.5.5 0 0 0 1 0v-.54A3.5 3.5 0 0 0 8.96 15h.54a.5.5 0 0 0 0-1h-.54A3.5 3.5 0 0 0 6 11.04v-.54Zm2 4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z";
   
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