/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Send",
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

   var pathdregular = "M2.18 2.11a.5.5 0 0 1 .54-.06l15 7.5a.5.5 0 0 1 0 .9l-15 7.5a.5.5 0 0 1-.7-.58L3.98 10 2.02 2.63a.5.5 0 0 1 .16-.52Zm2.7 8.39-1.61 6.06L16.38 10 3.27 3.44 4.88 9.5h6.62a.5.5 0 1 1 0 1H4.88Z";
   var pathdfilled = "M2.72 2.05a.5.5 0 0 0-.7.58l1.5 5.62c.05.19.2.33.4.36l6.85 1.14c.28.05.28.45 0 .5l-6.85 1.14a.5.5 0 0 0-.4.36l-1.5 5.62a.5.5 0 0 0 .7.58l15-7.5a.5.5 0 0 0 0-.9l-15-7.5Z";
   
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