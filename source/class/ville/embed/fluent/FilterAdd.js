/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FilterAdd",
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

   var pathdregular = "M17 9.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5a.5.5 0 0 0-.15-.35ZM9.02 5H3.41a.5.5 0 0 0 .09 1h5.52a5.57 5.57 0 0 1 0-1Zm1.24 4H5.4a.5.5 0 0 0 .09 1h5.84c-.4-.28-.77-.62-1.08-1ZM7.4 13h5.09a.5.5 0 0 1 .09 1H7.5a.5.5 0 0 1-.09-1Z";
   var pathdfilled = "M17 9.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5a.5.5 0 0 0-.15-.35ZM9.02 5a5.57 5.57 0 0 0 .07 1.5H3.75a.75.75 0 0 1 0-1.5h5.27Zm1.46 4.25a5.5 5.5 0 0 0 2.38 1.5H5.75a.75.75 0 0 1 0-1.5h4.73Zm1.77 4.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h4.5Z";
   
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