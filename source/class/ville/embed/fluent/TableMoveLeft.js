/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableMoveLeft",
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

   var pathdregular = "M3.5 17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Zm4.5-.5v-3.88a1.55 1.55 0 0 0 .41-.62H12V8H8.41A1.5 1.5 0 0 0 8 7.38V3.5c0-.28.22-.5.5-.5H15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8.5a.5.5 0 0 1-.5-.5Zm5-.5h2a1 1 0 0 0 1-1v-2h-3v3Zm3-8h-3v4h3V8Zm0-1V5a1 1 0 0 0-1-1h-2v3h3Zm-4 0V4H9v3h3Zm-3 9h3v-3H9v3ZM7.35 8.85a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65H9.5a.5.5 0 0 0 0-1H6.7l.65-.65Z";
   var pathdfilled = "M3 16.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0v13Zm9-4.5H8.41c.06-.16.09-.33.09-.5h1a1.5 1.5 0 0 0 0-3h-1c0-.17-.03-.34-.09-.5H12v4Zm5-7v2h-4V3h2a2 2 0 0 1 2 2Zm-5-2v4H8V3.5c0-.28.22-.5.5-.5H12Zm5 9V8h-4v4h4Zm-9 1h4v4H8.5a.5.5 0 0 1-.5-.5V13Zm9 0v2a2 2 0 0 1-2 2h-2v-4h4ZM7.35 8.85a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65H9.5a.5.5 0 0 0 0-1H6.7l.65-.65Z";
   
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