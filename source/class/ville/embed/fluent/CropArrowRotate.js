/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CropArrowRotate",
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

   var pathdregular = "M3.8 6.73A7 7 0 0 1 15.75 6H14a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.84a7.99 7.99 0 0 0-13.58.93.5.5 0 1 0 .89.46ZM6 14H4.25a7 7 0 0 0 11.94-.73.5.5 0 0 1 .89.46 8 8 0 0 1-13.58.94v1.83a.5.5 0 0 1-1 0v-3c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1Zm1.5-9c.28 0 .5.22.5.5V11a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V13H9a2 2 0 0 1-2-2V8H5.5a.5.5 0 0 1 0-1H7V5.5c0-.28.22-.5.5-.5Zm4.5 6V9a1 1 0 0 0-1-1H9V7h2a2 2 0 0 1 2 2v2h-1Z";
   var pathdfilled = "M10 3a7 7 0 0 0-6.13 3.62.75.75 0 1 1-1.31-.73A8.5 8.5 0 0 1 16.5 4.52V3.25a.75.75 0 0 1 1.5 0v3c0 .41-.34.75-.75.75h-3a.75.75 0 0 1 0-1.5h1.11A6.98 6.98 0 0 0 10 3ZM3.5 16.75v-1.27a8.48 8.48 0 0 0 13.94-1.37.75.75 0 1 0-1.3-.73 7 7 0 0 1-11.5 1.12h1.11a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0ZM7 7H5.75a.75.75 0 0 0 0 1.5H7v2.25C7 11.99 8 13 9.25 13h2.25v1.25a.75.75 0 0 0 1.5 0V13h1.25a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 0-1.5 0V7Zm4.5 3.5V9.25a.75.75 0 0 0-.75-.75H9.5V7h1.25C11.99 7 13 8 13 9.25v1.25h-1.5Z";
   
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