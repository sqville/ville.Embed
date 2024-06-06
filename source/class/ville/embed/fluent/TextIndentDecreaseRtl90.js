/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextIndentDecreaseRtl90",
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

   var pathdregular = "M10 2c.28 0 .5.22.5.5v10a.5.5 0 0 1-1 0v-10c0-.28.22-.5.5-.5ZM6 5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm9 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm-6.15 9.65a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7L10 16.29l-1.15-1.14Z";
   var pathdfilled = "M10 2c.41 0 .75.34.75.75v9.5a.75.75 0 0 1-1.5 0v-9.5c0-.41.34-.75.75-.75ZM6.25 5.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Zm9 0a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Zm-6.22 9.47a.75.75 0 0 0-1.06 1.06l1.5 1.5c.3.3.77.3 1.06 0l1.5-1.5a.75.75 0 1 0-1.06-1.06l-.97.97-.97-.97Z";
   
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