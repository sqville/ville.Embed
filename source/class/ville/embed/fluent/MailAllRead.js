/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailAllRead",
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

   var pathdregular = "M8.76 2.06a.5.5 0 0 1 .48 0l5.7 3.07A2 2 0 0 1 16 6.9v5.6a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5V6.9a2 2 0 0 1 1.05-1.77l5.71-3.07Zm.24 1L3.53 6.03a1 1 0 0 0-.32.26L9 8.95l5.79-2.67a1 1 0 0 0-.32-.26L9 3.07Zm6 4.22L9.21 9.95a.5.5 0 0 1-.42 0L3 7.28v5.22c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7.28ZM6.5 17a2.5 2.5 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-6c.6.46 1 1.18 1 2v4a4.5 4.5 0 0 1-4.5 4.5h-7Z";
   var pathdfilled = "M6.5 17a2.5 2.5 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-6c.6.46 1 1.18 1 2v4a4.5 4.5 0 0 1-4.5 4.5h-7ZM9.24 2.06a.5.5 0 0 0-.48 0l-5.7 3.07a2 2 0 0 0-.76.71l.42.2L9 8.95l6.28-2.89.41-.22a2 2 0 0 0-.74-.7L9.24 2.06ZM16 6.8l-.26.14a.5.5 0 0 1-.03.01l-6.5 3a.5.5 0 0 1-.42 0l-6.5-3h-.01L2 6.8V12.5A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5V6.8Z";
   
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