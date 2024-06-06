/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableResizeColumn",
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

   var pathdregular = "M7.35 8.15c.2.2.2.5 0 .7l-.64.65h6.58l-.64-.65a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H6.71l.64.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0ZM17 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6Zm-4-2v3c.36 0 .72.13 1 .38V4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2v-3.38a1.5 1.5 0 0 1-1 .38v3H7v-3a1.5 1.5 0 0 1-1-.38V16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2v3.38A1.5 1.5 0 0 1 7 7V4h6Z";
   var pathdfilled = "M14 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3v-4.38l.06-.06 1.5-1.5a1.5 1.5 0 0 0 0-2.12l-1.5-1.5a1.6 1.6 0 0 0-.06-.06V3Zm-1 0v4a1.5 1.5 0 0 0-1.5 1.5h-3A1.5 1.5 0 0 0 7 7V3h6Zm-4.94 9.56c-.3.3-.68.44-1.06.44v4h6v-4a1.5 1.5 0 0 1-1.5-1.5h-3c0 .38-.15.77-.44 1.06ZM6 17v-4.38a1.55 1.55 0 0 1-.06-.06l-1.5-1.5a1.5 1.5 0 0 1 0-2.12l1.5-1.5.06-.06V3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Zm1.35-8.85c.2.2.2.5 0 .7l-.64.65h6.58l-.64-.65a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H6.71l.64.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0Z";
   
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