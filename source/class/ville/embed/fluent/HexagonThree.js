/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HexagonThree",
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

   var pathdregular = "M4.62 2.63a.25.25 0 0 1 .22-.13H8c.09 0 .17.05.21.13l1.59 2.75c.04.07.04.17 0 .24L8.22 8.37a.25.25 0 0 1-.21.13H4.84a.25.25 0 0 1-.22-.13L3.03 5.62a.25.25 0 0 1 0-.24l1.59-2.75Zm.22-1.13c-.45 0-.86.24-1.09.63L2.17 4.88c-.23.38-.23.86 0 1.24l1.58 2.75c.23.4.64.63 1.09.63H8c.44 0 .86-.24 1.08-.63l1.58-2.75c.23-.38.23-.86 0-1.24L9.1 2.13A1.25 1.25 0 0 0 8 1.5H4.84ZM12.6 7a.25.25 0 0 0-.22.13l-1.59 2.75a.25.25 0 0 0 0 .24l1.59 2.75c.04.08.13.13.22.13h3.17c.09 0 .17-.05.21-.13l1.59-2.75a.25.25 0 0 0 0-.24l-1.59-2.75a.25.25 0 0 0-.21-.13H12.6Zm-1.09-.37c.23-.4.64-.63 1.09-.63h3.17c.44 0 .86.24 1.08.63l1.58 2.75c.23.38.23.86 0 1.24l-1.58 2.75c-.22.4-.64.63-1.08.63H12.6c-.45 0-.86-.24-1.09-.63l-1.58-2.75a1.25 1.25 0 0 1 0-1.24l1.58-2.75ZM4.84 11.5a.25.25 0 0 0-.22.13l-1.59 2.75a.25.25 0 0 0 0 .24l1.59 2.75c.04.08.13.13.22.13H8c.09 0 .17-.05.21-.13l1.59-2.75a.25.25 0 0 0 0-.24l-1.59-2.75a.25.25 0 0 0-.21-.13H4.84Zm-1.09-.37c.23-.4.64-.63 1.09-.63H8c.44 0 .86.24 1.08.63l1.58 2.75c.23.38.23.86 0 1.24L9.1 17.87c-.22.4-.64.63-1.08.63H4.84c-.45 0-.86-.24-1.09-.63l-1.58-2.75a1.25 1.25 0 0 1 0-1.24l1.58-2.75Z";
   var pathdfilled = "M3.75 2.13c.23-.4.64-.63 1.09-.63H8c.44 0 .86.24 1.08.63l1.58 2.75c.23.38.23.86 0 1.24L9.1 8.87c-.22.4-.64.63-1.08.63H4.84c-.45 0-.86-.24-1.09-.63L2.17 6.12a1.25 1.25 0 0 1 0-1.24l1.58-2.75ZM12.6 6c-.45 0-.86.24-1.09.63L9.93 9.38c-.22.38-.22.86 0 1.24l1.58 2.75c.23.4.64.63 1.09.63h3.17c.44 0 .86-.24 1.08-.63l1.58-2.75c.23-.38.23-.86 0-1.24l-1.58-2.75A1.25 1.25 0 0 0 15.77 6H12.6Zm-8.85 5.13c.23-.4.64-.63 1.09-.63H8c.44 0 .86.24 1.08.63l1.58 2.75c.23.38.23.86 0 1.24L9.1 17.87c-.22.4-.64.63-1.08.63H4.84c-.45 0-.86-.24-1.09-.63l-1.58-2.75a1.25 1.25 0 0 1 0-1.24l1.58-2.75Z";
   
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