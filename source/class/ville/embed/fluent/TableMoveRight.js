/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableMoveRight",
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

   var pathdregular = "M16.5 3c.28 0 .5.22.5.5v13a.5.5 0 0 1-1 0v-13c0-.28.22-.5.5-.5Zm-4.5.5v3.88a1.5 1.5 0 0 0-.41.62H8v4h3.59a1.5 1.5 0 0 0 .41.62v3.88a.5.5 0 0 1-.5.5H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h6.5c.28 0 .5.22.5.5ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm-3 8h3V8H4v4Zm0 1v2a1 1 0 0 0 1 1h2v-3H4Zm4 0v3h3v-3H8Zm3-9H8v3h3V4Zm1.65 7.15a.5.5 0 0 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 0 0-.7.7l.64.65H10.5a.5.5 0 0 0 0 1h2.8l-.65.65Z";
   var pathdfilled = "M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM8 8h3.59a1.5 1.5 0 0 0-.09.5h-1a1.5 1.5 0 1 0 0 3h1c0 .17.03.34.09.5H8V8Zm-5 7v-2h4v4H5a2 2 0 0 1-2-2Zm5 2v-4h4v3.5a.5.5 0 0 1-.5.5H8ZM3 8v4h4V8H3Zm9-1H8V3h3.5c.28 0 .5.22.5.5V7ZM3 7V5c0-1.1.9-2 2-2h2v4H3Zm9.65 4.15a.5.5 0 0 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 0 0-.7.7l.64.65H10.5a.5.5 0 0 0 0 1h2.8l-.65.65Z";
   
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