/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Heart",
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

   var pathdregular = "m10.5 16.8 6.24-6.3a4.4 4.4 0 0 0-.02-6.19 4.3 4.3 0 0 0-6.13-.01l-.6.6-.6-.61a4.3 4.3 0 0 0-6.13-.02 4.4 4.4 0 0 0 .02 6.2l6.27 6.33c.26.27.69.27.95 0ZM11.3 5a3.3 3.3 0 0 1 4.71.02 3.4 3.4 0 0 1 .02 4.78l-6 6.06-6.04-6.1a3.4 3.4 0 0 1-.02-4.78 3.3 3.3 0 0 1 4.7.01l.97.97c.2.2.51.2.7 0L11.3 5Z";
   var pathdfilled = "M9.39 4.29a4.3 4.3 0 0 0-6.13-.02 4.4 4.4 0 0 0 .02 6.2l6.27 6.33c.26.27.69.27.95 0l6.24-6.3a4.4 4.4 0 0 0-.02-6.19 4.3 4.3 0 0 0-6.13-.01l-.6.6-.6-.61Z";
   
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