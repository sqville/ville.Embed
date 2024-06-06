/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageTable",
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

   var pathdregular = "M11 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2h2V4Zm1 0v2h6V4H7Zm7 0v2h2a2 2 0 0 0-2-2Zm2 3h-2v6h2V7Zm0 7h-2v2a2 2 0 0 0 2-2Zm-3 2v-2H7v2h6Zm-7 0v-2H4c0 1.1.9 2 2 2Zm-2-3h2V7H4v6Zm3-6v6h.3l1.5-1.5a1.7 1.7 0 0 1 2.4 0l1.5 1.5h.3V7H7Zm4.29 6-.8-.8a.7.7 0 0 0-.98 0l-.8.8h2.58Z";
   var pathdfilled = "M6 3a3 3 0 0 0-3 3h3V3ZM3 7v6h3V7H3Zm4-1h6V3H7v3Zm7-3v3h3a3 3 0 0 0-3-3Zm3 4h-3v6h3V7Zm0 7h-3v3a3 3 0 0 0 3-3Zm-4 3v-3H7v3h6Zm-7 0v-3H3a3 3 0 0 0 3 3ZM7 7v6h.3l1.5-1.5a1.7 1.7 0 0 1 2.4 0l1.5 1.5h.3V7H7Zm4 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm.29 5H8.71l.8-.8a.7.7 0 0 1 .98 0l.8.8Z";
   
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