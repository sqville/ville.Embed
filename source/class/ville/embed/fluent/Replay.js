/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Replay",
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

   var pathdregular = "M3 6.5v-3a.5.5 0 0 1 1 0v1.2a7.98 7.98 0 0 1 7.94-2.46A8 8 0 1 1 2 9.48a.5.5 0 1 1 1 .07A6.97 6.97 0 0 0 3 10a7 7 0 1 0 1.25-4H6a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5Zm4.5 1.47c0-.93.98-1.54 1.81-1.12l4.04 2.03c.92.47.92 1.77 0 2.24l-4.04 2.03a1.25 1.25 0 0 1-1.81-1.12V7.97Zm1.36-.23a.25.25 0 0 0-.36.23v4.06c0 .19.2.31.36.23l4.04-2.04a.25.25 0 0 0 0-.44L8.86 7.74Z";
   var pathdfilled = "M3 6.5v-3a.5.5 0 0 1 1 0v1.2a7.98 7.98 0 0 1 7.94-2.46A8 8 0 1 1 2 9.48a.5.5 0 1 1 1 .07A6.97 6.97 0 0 0 3 10a7 7 0 1 0 1.25-4H6a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5Zm4.5 1.47c0-.93.98-1.54 1.81-1.12l4.04 2.03c.92.47.92 1.77 0 2.24l-4.04 2.03a1.25 1.25 0 0 1-1.81-1.12V7.97Z";
   
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