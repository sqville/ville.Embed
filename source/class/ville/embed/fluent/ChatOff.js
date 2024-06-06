/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChatOff",
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

   var pathdregular = "M4 4.7 2.15 2.86a.5.5 0 1 1 .7-.7L4.71 4l.7.7 9.88 9.88.7.71 1.86 1.86a.5.5 0 0 1-.7.7L15.29 16a7.97 7.97 0 0 1-8.9 1.14l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10c0-2.03.76-3.88 2-5.3Zm10.58 10.6-3.61-3.62a.5.5 0 0 1-.38.31l-.09.01h-3a.5.5 0 0 1-.09-1H10.3l-2-2h-.8a.5.5 0 0 1-.18-.97L4.71 5.42a6.97 6.97 0 0 0-.82 8 .5.5 0 0 1 .07.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 0 1 .19-.01l.09.02.09.04a6.97 6.97 0 0 0 8-.82Z";
   var pathdfilled = "M4 4.7 2.15 2.86a.5.5 0 1 1 .7-.7L4.71 4 16 15.3l1.85 1.85a.5.5 0 0 1-.7.7L15.29 16a7.97 7.97 0 0 1-8.9 1.14l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10c0-2.03.76-3.88 2-5.3Zm6.97 6.98-.68-.68H7.41a.5.5 0 0 0 0 1H10.59a.5.5 0 0 0 .38-.32ZM8.29 9l-.97-.97a.5.5 0 0 0 .09.96L7.5 9h.8Z";
   
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