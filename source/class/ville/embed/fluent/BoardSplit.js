/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BoardSplit",
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

   var pathdregular = "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm1 4v4c0 1.1.9 2 2 2h5v-6H4Zm7-1V4H6a2 2 0 0 0-2 2v3h7Zm1 7h2a2 2 0 0 0 2-2v-1h-4v3Zm4-9V6a2 2 0 0 0-2-2h-2v3h4Zm0 1h-4v4h4V8Z";
   var pathdfilled = "M6 3a3 3 0 0 0-3 3v3h8V3H6Zm5 7H3v4a3 3 0 0 0 3 3h5v-7Zm3 7h-2v-4h5v1a3 3 0 0 1-3 3Zm3-5h-5V8h5v4Zm0-5h-5V3h2a3 3 0 0 1 3 3v1Z";
   
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