/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowCircleUpRight",
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

   var pathdregular = "M12.85 7.14A.5.5 0 0 0 12.5 7h-5a.5.5 0 0 0 0 1h3.8l-4.15 4.15a.5.5 0 0 0 .7.7L12 8.71v3.79a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.14-.35ZM10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm7 8a7 7 0 1 0-14 0 7 7 0 0 0 14 0Z";
   var pathdfilled = "M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm2.85-10.86A.5.5 0 0 0 12.5 7h-5a.5.5 0 0 0 0 1h3.8l-4.15 4.15a.5.5 0 0 0 .7.7L12 8.71v3.79a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.14-.35Z";
   
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