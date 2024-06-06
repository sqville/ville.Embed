/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextHeader1",
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

   var pathdregular = "M16.55 4a.5.5 0 0 1 .45.5v11a.5.5 0 0 1-1 0V6.73a8.58 8.58 0 0 1-2.22 2.19.5.5 0 1 1-.56-.84 6.76 6.76 0 0 0 2.83-3.8.5.5 0 0 1 .5-.28ZM2.5 4c.28 0 .5.22.5.5V9h6V4.5a.5.5 0 1 1 1 0v11a.5.5 0 0 1-1 0V10H3v5.5a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5Z";
   var pathdfilled = "M16.57 3.82a.74.74 0 0 0-.8.1.75.75 0 0 0-.26.43 6.52 6.52 0 0 1-2.68 3.53.75.75 0 1 0 .84 1.24 8.77 8.77 0 0 0 1.83-1.65v8.03a.75.75 0 0 0 1.5 0V4.52a.75.75 0 0 0-.43-.7ZM3.5 4.5a.75.75 0 1 0-1.5 0v11a.75.75 0 0 0 1.5 0v-5h5v5a.75.75 0 0 0 1.5 0v-11a.75.75 0 1 0-1.5 0V9h-5V4.5Z";
   
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