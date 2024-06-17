/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SkipForward30",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.5 3c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 1 1 0-1h3.25a7 7 0 0 0-12.01.89.5.5 0 1 1-.9-.44A8 8 0 0 1 16 5.7V3.5c0-.28.22-.5.5-.5Zm-3 7c-.93 0-1.6.44-2 1.13-.37.65-.5 1.5-.5 2.37 0 .86.13 1.72.5 2.37.4.7 1.07 1.13 2 1.13.94 0 1.6-.44 2-1.13.37-.65.5-1.5.5-2.37 0-.86-.13-1.72-.5-2.37a2.18 2.18 0 0 0-2-1.13ZM12 13.5c0-.8.12-1.44.37-1.87.23-.4.57-.63 1.13-.63.57 0 .9.23 1.13.63.25.43.37 1.08.37 1.87 0 .8-.12 1.44-.37 1.87-.23.4-.56.63-1.13.63-.56 0-.9-.23-1.13-.63A3.87 3.87 0 0 1 12 13.5Zm-6.85-1.9c.19.2.5.2.7 0h.02l.07-.07A2.56 2.56 0 0 1 7.5 11c.6 0 .98.16 1.2.35.22.19.31.42.3.64 0 .4-.4 1.01-1.5 1.01a.5.5 0 0 0 0 1c1.1 0 1.5.6 1.5 1.01a.8.8 0 0 1-.3.64c-.22.19-.6.35-1.2.35a2.56 2.56 0 0 1-1.65-.6.5.5 0 0 0-.7 0c-.34.33 0 .7 0 .7a3.37 3.37 0 0 0 .18.16A3.56 3.56 0 0 0 7.5 17c.78 0 1.4-.21 1.85-.59.44-.37.67-.9.65-1.42a1.89 1.89 0 0 0-.8-1.49c.5-.37.79-.9.8-1.49a1.8 1.8 0 0 0-.65-1.42A2.8 2.8 0 0 0 7.5 10a3.56 3.56 0 0 0-2.34.88v.01h-.01a.5.5 0 0 0 0 .71Zm.7 3.8Z",
    FILLED : "M15.73 5.63V3.75a.75.75 0 0 1 1.5 0v3.5c0 .41-.33.75-.75.75h-4a.75.75 0 0 1 0-1.5h2.03a6.3 6.3 0 0 0-4.78-2.25 6.45 6.45 0 0 0-5.65 3.54.83.83 0 0 1-.73.46c-.54 0-.91-.53-.67-1.01a7.93 7.93 0 0 1 7.05-4.49c2.4 0 4.54 1.12 6 2.88ZM4.97 10.72a.75.75 0 0 0 1.06 1.07v-.01l.07-.06a2.3 2.3 0 0 1 1.4-.47c.56 0 .88.15 1.04.3.16.13.22.29.22.43-.01.24-.26.77-1.26.77a.75.75 0 0 0 0 1.5c1 0 1.25.53 1.26.77 0 .14-.06.3-.22.44s-.48.29-1.04.29a2.3 2.3 0 0 1-1.46-.53h-.01a.75.75 0 0 0-1.06 1.06c-.28-.28 0 0 0 0h.01l.01.02a2.03 2.03 0 0 0 .19.16 3.8 3.8 0 0 0 2.33.8c.81-.01 1.5-.24 2-.66a2.05 2.05 0 0 0 .08-3.1 2.05 2.05 0 0 0-.07-3.1 3.05 3.05 0 0 0-2.02-.65 3.8 3.8 0 0 0-2.5.95l-.02.01ZM16 13.5c0 2.07-.62 3.75-2.5 3.75-1.87 0-2.5-1.68-2.5-3.75 0-2.07.63-3.75 2.5-3.75 1.88 0 2.5 1.68 2.5 3.75Zm-1.5 0c0-.93-.15-1.56-.35-1.9a.67.67 0 0 0-.23-.26.8.8 0 0 0-.42-.09.8.8 0 0 0-.42.09.67.67 0 0 0-.23.26c-.2.34-.35.97-.35 1.9 0 .93.15 1.56.35 1.9.09.16.17.23.23.26a.8.8 0 0 0 .42.09.8.8 0 0 0 .42-.09c.07-.03.15-.1.23-.26.2-.34.35-.97.35-1.9Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
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
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});