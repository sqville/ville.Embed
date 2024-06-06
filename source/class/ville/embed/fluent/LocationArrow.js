/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LocationArrow",
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

   var pathdregular = "M17.93 3.36a1 1 0 0 0-1.3-1.3L2.65 7.47a1 1 0 0 0 .1 1.9l5.98 1.57a.5.5 0 0 1 .35.35l1.58 5.97a1 1 0 0 0 1.9.1l5.38-13.99ZM17 3 11.6 17l-1.57-5.97a1.5 1.5 0 0 0-1.07-1.07L3 8.39 17 3Z";
   var pathdfilled = "M16.64 2.07a1 1 0 0 1 1.29 1.3l-5.38 13.99a1 1 0 0 1-1.9-.1l-1.58-5.98a.5.5 0 0 0-.35-.35L2.74 9.35a1 1 0 0 1-.1-1.9l14-5.38Z";
   
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