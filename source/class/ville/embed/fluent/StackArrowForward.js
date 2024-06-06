/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StackArrowForward",
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

   var pathdregular = "M14.5 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm1.6-7.1a.5.5 0 0 0-.7.7l.9.9h-1.55A2.75 2.75 0 0 0 12 7.25v.25a.5.5 0 0 0 1 0v-.25c0-.97.78-1.75 1.75-1.75h1.54l-.9.9a.5.5 0 0 0 .71.7l1.76-1.75a.5.5 0 0 0 0-.7L16.1 2.9ZM14 11v-.02c-.34-.03-.68-.1-1-.19V11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5.2c.1-.35.24-.68.4-1H4a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2Zm1-.02c.34-.03.68-.1 1-.19V11a4 4 0 0 1-4 4H6a2 2 0 0 1-1.73-1H12a3 3 0 0 0 3-3v-.02Zm3-1.24c-.3.26-.64.48-1 .66v.6a5 5 0 0 1-5 5H6.27c.34.6.99 1 1.73 1h4a6 6 0 0 0 6-6V9.74Z";
   var pathdfilled = "M14.5 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm1.6-7.1a.5.5 0 0 0-.7.7l.9.9h-1.55A2.75 2.75 0 0 0 12 7.25v.25a.5.5 0 0 0 1 0v-.25c0-.97.78-1.75 1.75-1.75h1.54l-.9.9a.5.5 0 0 0 .71.7l1.76-1.75a.5.5 0 0 0 0-.7L16.1 2.9ZM4 3h5.6a5.5 5.5 0 0 0 4.4 7.98V11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Zm11 7.98c.34-.03.68-.1 1-.19V11a4 4 0 0 1-4 4H6a2 2 0 0 1-1.73-1H12a3 3 0 0 0 3-3v-.02Zm3-1.24c-.3.26-.64.48-1 .66v.6a5 5 0 0 1-5 5H6.27c.34.6.99 1 1.73 1h4a6 6 0 0 0 6-6V9.74Z";
   
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