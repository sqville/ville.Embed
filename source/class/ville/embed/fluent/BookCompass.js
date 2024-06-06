/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookCompass",
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

   var pathdregular = "M4 16V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2ZM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4Zm-5 .5c.28 0 .5.22.5.5v1.06a2 2 0 0 1 .74 3.5l1.22 2.74a.5.5 0 0 1-.92.4l-1.21-2.73a2.01 2.01 0 0 1-.66 0L8.46 12.7a.5.5 0 1 1-.92-.4l1.22-2.73a2 2 0 0 1 .74-3.5V5c0-.28.22-.5.5-.5Zm-.5 2.63a1 1 0 1 0 1 1.74 1 1 0 0 0-1-1.74Z";
   var pathdfilled = "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm6 .5a.5.5 0 0 0-.5.5v1.06a2 2 0 0 0-.74 3.5L7.54 12.3a.5.5 0 0 0 .92.4l1.21-2.73a2.01 2.01 0 0 0 .66 0l1.21 2.73a.5.5 0 1 0 .92-.4l-1.22-2.73a2 2 0 0 0-.74-3.5V5a.5.5 0 0 0-.5-.5Zm-.5 2.63a1 1 0 1 0 1 1.74 1 1 0 0 0-1-1.74Z";
   
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