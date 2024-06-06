/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GiftCardMultiple",
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

   var pathdregular = "M4.75 4A2.75 2.75 0 0 0 2 6.75v5.5A2.75 2.75 0 0 0 4.75 15h8.5A2.75 2.75 0 0 0 16 12.25v-5.5A2.75 2.75 0 0 0 13.25 4h-8.5ZM3 12.25V10h3.3l-1.65 1.65a.5.5 0 0 0 .7.7L7 10.71V14H4.75C3.78 14 3 13.22 3 12.25ZM3 9V6.75C3 5.78 3.78 5 4.75 5H7v1.27A2 2 0 0 0 4.27 9H3Zm4 0H6a1 1 0 1 1 1-1v1Zm1 0V8a1 1 0 1 1 1 1H8Zm3-1a2 2 0 0 0-3-1.73V5h5.25c.97 0 1.75.78 1.75 1.75V9h-4.27A2 2 0 0 0 11 8Zm-.65 3.65L8.71 10H15v2.25c0 .97-.78 1.75-1.75 1.75H8v-3.3l1.65 1.65a.5.5 0 0 0 .7-.7ZM6.75 17c-.85 0-1.62-.39-2.12-1h8.62A3.75 3.75 0 0 0 17 12.25V6.63c.61.5 1 1.27 1 2.12v3.5A4.75 4.75 0 0 1 13.25 17h-6.5Z";
   var pathdfilled = "M4.75 4H7v2.27A2 2 0 0 0 4.27 9H2V6.75A2.75 2.75 0 0 1 4.75 4ZM2 12.25V10h4.3l-1.65 1.65a.5.5 0 0 0 .7.7L7 10.71V15H4.75A2.75 2.75 0 0 1 2 12.25ZM8 15h5.25A2.75 2.75 0 0 0 16 12.25V10H8.7l1.65 1.65a.5.5 0 0 1-.7.7L8 10.71V15Zm2.73-6H16V6.75A2.75 2.75 0 0 0 13.25 4H8v2.27A2 2 0 0 1 10.73 9ZM8 9V8a1 1 0 1 1 1 1H8ZM6 9h1V8a1 1 0 1 0-1 1Zm.75 8c-.85 0-1.62-.39-2.12-1h8.62A3.75 3.75 0 0 0 17 12.25V6.63c.61.5 1 1.27 1 2.12v3.5A4.75 4.75 0 0 1 13.25 17h-6.5Z";
   
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