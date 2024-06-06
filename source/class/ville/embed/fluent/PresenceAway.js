/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PresenceAway",
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

   var pathdregular = "M10 9.59V6a1 1 0 1 0-2 0V10c0 .27.1.52.3.7l3 3a1 1 0 1 0 1.4-1.4L10 9.58Zm-10 .4a10 10 0 1 1 20 0 10 10 0 0 1-20 0ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z";
   var pathdfilled = "M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-14V9.6l2.7 2.7a1 1 0 0 1-1.4 1.42l-3-3A1 1 0 0 1 8 10V6a1 1 0 1 1 2 0Z";
   
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