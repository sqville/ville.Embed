/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.RibbonAdd",
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

   var pathdregular = "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5ZM9 2c.4 0 .79.04 1.17.11-.23.29-.42.6-.59.92a5 5 0 1 0 3.54 7.8c.35.09.71.14 1.08.16a6.03 6.03 0 0 1-1.2 1.48v5.03a.5.5 0 0 1-.75.43L9 16.08l-3.25 1.85A.5.5 0 0 1 5 17.5v-5.03A5.98 5.98 0 0 1 9 2Zm0 12c-1.1 0-2.12-.3-3-.8v3.44l2.75-1.57a.5.5 0 0 1 .5 0L12 16.64V13.2c-.88.5-1.9.8-3 .8Z";
   var pathdfilled = "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm-6 2c0-1.28.44-2.45 1.17-3.39A6 6 0 1 0 14.2 11 5.5 5.5 0 0 1 9 5.5ZM9 15c1.49 0 2.87-.46 4-1.25v3.75a.5.5 0 0 1-.8.4L9 16l-3.2 1.9a.5.5 0 0 1-.8-.4v-3.75A6.97 6.97 0 0 0 9 15Z";
   
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