/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentLandscapeSplitHint",
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

   var pathdregular = "M3 6a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H4a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V6Zm6.5-2a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5H16a2 2 0 0 0 2-2V9.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 12.59 4H9.5Zm.5 11V5h2v3.5c0 .83.67 1.5 1.5 1.5H17v4a1 1 0 0 1-1 1h-6Zm3.5-6a.5.5 0 0 1-.5-.5V5.2L16.8 9h-3.3ZM3 14a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 1 0v.5Zm0-5.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Zm3-4c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM6.5 15a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z";
   var pathdfilled = "M3 6a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H4a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V6Zm1 9a1 1 0 0 1-1-1v-.5a.5.5 0 0 0-1 0v.5c0 1.1.9 2 2 2h.5a.5.5 0 0 0 0-1H4ZM2.5 8c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0v-3c0-.28.22-.5.5-.5Zm4-4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 15.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm6-7V4h-1.5a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5H16a2 2 0 0 0 2-2v-4h-4.5A1.5 1.5 0 0 1 12 8.5Zm1 0V4.06c.24.07.47.2.65.38l3.91 3.91c.18.18.31.4.38.65H13.5a.5.5 0 0 1-.5-.5Z";
   
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