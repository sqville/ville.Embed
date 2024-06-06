/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTrending",
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

   var pathdregular = "M17.96 5.3a.5.5 0 0 0-.46-.3h-6a.5.5 0 0 0 0 1h4.8l-5.8 5.8-2.15-2.15a.5.5 0 0 0-.7 0l-5.5 5.5a.5.5 0 0 0 .7.7L8 10.71l2.15 2.14c.2.2.5.2.7 0L17 6.71v4.79a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.04-.2Z";
   var pathdfilled = "M17.94 5.46a.75.75 0 0 0-.7-.46h-5.49a.75.75 0 0 0 0 1.5h3.69l-4.94 4.94-1.97-1.97a.75.75 0 0 0-1.06 0l-5.25 5.25a.75.75 0 1 0 1.06 1.06L8 11.06l1.97 1.97c.3.3.77.3 1.06 0l5.47-5.47v3.69a.75.75 0 0 0 1.5 0v-5.5c0-.1-.02-.2-.06-.29Z";
   
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