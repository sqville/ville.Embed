/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarToday",
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

   var pathdregular = "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-3v-1h3c.83 0 1.5-.67 1.5-1.5V7H4v7.5c0 .83.67 1.5 1.5 1.5h3v1h-3A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5ZM11 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.88 5.07a.5.5 0 0 1-.7.06l-.68-.56v3.93a.5.5 0 1 1-1 0v-3.93l-.68.56a.5.5 0 0 1-.64-.76l1.5-1.25a.5.5 0 0 1 .64 0l1.5 1.25c.21.17.24.49.06.7Z";
   var pathdfilled = "M10 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 4.5V7H3v7.5A2.5 2.5 0 0 0 5.5 17h3v-1.75a1.5 1.5 0 0 1-.98-2.64h.01l1.5-1.25a1.5 1.5 0 0 1 1.94 0l1.5 1.25a1.5 1.5 0 0 1-.97 2.64V17h3a2.5 2.5 0 0 0 2.5-2.5ZM12 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5-3.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5Zm-5.82 8.63a.5.5 0 0 0 .64-.76l-1.5-1.25a.5.5 0 0 0-.64 0l-1.5 1.25a.5.5 0 1 0 .64.76l.68-.56v3.93a.5.5 0 1 0 1 0v-3.93l.68.56Z";
   
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