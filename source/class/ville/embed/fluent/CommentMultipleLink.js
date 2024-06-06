/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CommentMultipleLink",
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

   var pathdregular = "M14.39 4.11A3.5 3.5 0 0 1 17 7.5v3.54c.35.05.69.15 1 .3V7.5A4.5 4.5 0 0 0 13.5 3h-7c-.82 0-1.54.4-2 1h9a3.54 3.54 0 0 1 .89.11ZM16 7.5V11h-1V7.5c0-.83-.67-1.5-1.5-1.5h-9C3.67 6 3 6.67 3 7.5v6c0 .83.67 1.5 1.5 1.5H6v2l2.73-2h.3c.06.35.16.69.3 1h-.27l-2.47 1.8A1 1 0 0 1 5 17v-1h-.5A2.5 2.5 0 0 1 2 13.5v-6A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5ZM12.5 12a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z";
   var pathdfilled = "M17 7.5A3.5 3.5 0 0 0 13.5 4h-9c.46-.6 1.18-1 2-1h7A4.5 4.5 0 0 1 18 7.5v3.84a3.47 3.47 0 0 0-1-.3V7.5ZM9.06 16h.28a3.5 3.5 0 0 1 3.16-5H16V7.5A2.5 2.5 0 0 0 13.5 5h-9A2.5 2.5 0 0 0 2 7.5v6A2.5 2.5 0 0 0 4.5 16H5v1a1 1 0 0 0 1.59.8L9.06 16Zm3.44-4a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z";
   
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