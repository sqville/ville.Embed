/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CodeCircle",
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

   var pathdregular = "M11.96 6.2a.5.5 0 1 0-.92-.4l-3.5 8a.5.5 0 1 0 .92.4l3.5-8Zm-5.1 1.45c.19.2.19.5 0 .7L5.2 10l1.64 1.65a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2c.2-.2.5-.2.7 0Zm6.29.7a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L14.79 10l-1.64-1.65ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z";
   var pathdfilled = "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm9.96-3.8a.5.5 0 1 0-.92-.4l-3.5 8a.5.5 0 1 0 .92.4l3.5-8Zm-5.1 1.45a.5.5 0 0 0-.71 0l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L5.21 10l1.64-1.65a.5.5 0 0 0 0-.7Zm6.29.7L14.79 10l-1.64 1.65a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7Z";
   
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