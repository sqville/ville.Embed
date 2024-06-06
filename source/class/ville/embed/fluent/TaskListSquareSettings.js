/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TaskListSquareSettings",
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

   var pathdregular = "M9.35 6.4c.2.2.2.5 0 .7L7.6 8.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 1 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0Zm0 5.7a.5.5 0 0 0-.7-.7l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75ZM11 7a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H11ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6a5.5 5.5 0 0 0-1-.4V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h3.2c.1.35.24.68.4 1H6a3 3 0 0 1-3-3V6Zm7.63 7.92a2 2 0 0 0 1.43-2.48l-.15-.56c.25-.2.53-.36.82-.5l.34.36a2 2 0 0 0 2.9 0l.33-.34c.3.14.58.31.83.52l-.12.42a2 2 0 0 0 1.45 2.52l.35.08a4.6 4.6 0 0 1 .01 1.02l-.46.12a2 2 0 0 0-1.43 2.47l.16.56c-.26.2-.53.36-.82.5l-.34-.36a2 2 0 0 0-2.91 0l-.32.35c-.3-.14-.58-.31-.84-.52l.13-.42a2 2 0 0 0-1.46-2.52l-.34-.08a4.62 4.62 0 0 1-.01-1.02l.45-.12Zm4.87.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z";
   var pathdfilled = "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6A5.5 5.5 0 0 1 17 9.6V6a3 3 0 0 0-3-3H6Zm3.35 3.4c.2.2.2.5 0 .7L7.6 8.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 1 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0Zm-.7 5a.5.5 0 0 1 .7.7L7.6 13.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41ZM11 8a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 0 1H11Zm-.37 5.92a2 2 0 0 0 1.43-2.48l-.15-.56c.25-.2.53-.36.82-.5l.34.36a2 2 0 0 0 2.9 0l.33-.34c.3.14.58.31.83.52l-.12.42a2 2 0 0 0 1.45 2.52l.35.08a4.6 4.6 0 0 1 .01 1.02l-.46.12a2 2 0 0 0-1.43 2.47l.16.56c-.26.2-.53.36-.82.5l-.34-.36a2 2 0 0 0-2.91 0l-.32.35c-.3-.14-.58-.31-.84-.52l.13-.42a2 2 0 0 0-1.46-2.52l-.34-.08a4.62 4.62 0 0 1-.01-1.02l.45-.12Zm4.87.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z";
   
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