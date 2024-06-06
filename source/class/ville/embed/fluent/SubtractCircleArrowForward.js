/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SubtractCircleArrowForward",
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

   var pathdregular = "M5.5 8.5a.5.5 0 0 0 0 1h6.7c.24-.11.5-.2.75-.28a.5.5 0 0 0-.45-.72h-7Zm10.5.7V9a7 7 0 1 0-6.8 7c.1.34.23.67.39.98L9 17a8 8 0 1 1 7.98-7.41A5.46 5.46 0 0 0 16 9.2Zm-6 5.3a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm5.4-2.6c.2-.2.5-.2.7 0l1.75 1.75a.5.5 0 0 1 0 .7L16.1 16.1a.5.5 0 0 1-.7-.7l.9-.9h-1.55c-.97 0-1.75.78-1.75 1.75v.25a.5.5 0 0 1-1 0v-.25a2.75 2.75 0 0 1 2.75-2.75h1.54l-.9-.9a.5.5 0 0 1 0-.7Z";
   var pathdfilled = "M16.98 9.59 17 9a8 8 0 1 0-7.41 7.98A5.48 5.48 0 0 1 12.2 9.5H5.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 .45.72 5.5 5.5 0 0 1 4.03.37ZM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm5.4-2.6c.2-.2.5-.2.7 0l1.75 1.75a.5.5 0 0 1 0 .7L16.1 16.1a.5.5 0 0 1-.7-.7l.9-.9h-1.55c-.97 0-1.75.78-1.75 1.75v.25a.5.5 0 0 1-1 0v-.25a2.75 2.75 0 0 1 2.75-2.75h1.54l-.9-.9a.5.5 0 0 1 0-.7Z";
   
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