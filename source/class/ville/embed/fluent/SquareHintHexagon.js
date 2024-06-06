/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SquareHintHexagon",
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

   var pathdregular = "M5.5 3a.5.5 0 0 1 0 1C4.67 4 4 4.67 4 5.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 5.5 3ZM17 5.5a.5.5 0 0 1-1 0c0-.83-.67-1.5-1.5-1.5a.5.5 0 0 1 0-1A2.5 2.5 0 0 1 17 5.5Zm-3 11c0 .28.22.5.5.5a2.5 2.5 0 0 0 2.5-2.5.5.5 0 0 0-1 0c0 .83-.67 1.5-1.5 1.5a.5.5 0 0 0-.5.5Zm-11-2a.5.5 0 0 1 1 0c0 .83.67 1.5 1.5 1.5a.5.5 0 0 1 0 1A2.5 2.5 0 0 1 3 14.5Zm.5-6A.5.5 0 0 0 3 9v2a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5ZM16 9a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V9ZM9 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9Zm-.5 13.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5Zm-.3-9.37A.25.25 0 0 1 8.42 7h3.17c.09 0 .17.05.21.13l1.59 2.75c.04.07.04.17 0 .24l-1.59 2.75a.25.25 0 0 1-.21.13H8.42a.25.25 0 0 1-.22-.13l-1.59-2.75a.25.25 0 0 1 0-.24L8.2 7.13ZM8.42 6c-.45 0-.86.24-1.09.63L5.75 9.38c-.23.38-.23.86 0 1.24l1.58 2.75c.23.4.64.63 1.09.63h3.17c.44 0 .86-.24 1.08-.63l1.58-2.75c.23-.38.23-.86 0-1.24l-1.58-2.75A1.25 1.25 0 0 0 11.59 6H8.42Z";
   var pathdfilled = "M5.5 3a.5.5 0 0 1 0 1C4.67 4 4 4.67 4 5.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 5.5 3ZM17 5.5a.5.5 0 0 1-1 0c0-.83-.67-1.5-1.5-1.5a.5.5 0 0 1 0-1A2.5 2.5 0 0 1 17 5.5Zm-3 11c0 .28.22.5.5.5a2.5 2.5 0 0 0 2.5-2.5.5.5 0 0 0-1 0c0 .83-.67 1.5-1.5 1.5a.5.5 0 0 0-.5.5Zm-11-2a.5.5 0 0 1 1 0c0 .83.67 1.5 1.5 1.5a.5.5 0 0 1 0 1A2.5 2.5 0 0 1 3 14.5Zm.5-6A.5.5 0 0 0 3 9v2a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5ZM16 9a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V9ZM9 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9Zm-.5 13.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5ZM7.33 6.63c.23-.4.64-.63 1.09-.63h3.17c.44 0 .86.24 1.08.63l1.58 2.75c.23.38.23.86 0 1.24l-1.58 2.75c-.22.4-.64.63-1.08.63H8.42c-.45 0-.86-.24-1.09-.63l-1.58-2.75a1.25 1.25 0 0 1 0-1.24l1.58-2.75Z";
   
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