/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DualScreenDesktop",
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

   var pathdregular = "M4 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v2h1a.5.5 0 0 1 0 1h-2v-4h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H4V4Zm-2 6c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6Zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.5V9H4Zm6 8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7.5v8H10Zm-1-2h.5a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1Zm-5 .5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5Z";
   var pathdfilled = "M4 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v2h1a.5.5 0 0 1 0 1h-2v-6a3 3 0 0 0-3-3H4V4Zm6 14H7.5V8H10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2ZM4 8h2.5v10H4a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2Zm5.5 7a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1h-.5Zm-6 .5c0 .28.22.5.5.5h.5a.5.5 0 0 0 0-1H4a.5.5 0 0 0-.5.5Z";
   
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