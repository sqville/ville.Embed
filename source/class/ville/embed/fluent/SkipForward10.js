/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SkipForward10",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 3.5a.5.5 0 1 0-1 0v2.2A8 8 0 0 0 2.84 7.45a.5.5 0 1 0 .9.44 7 7 0 0 1 12-.89H12.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5v-4Zm-6.5 7.63c.4-.7 1.07-1.13 2-1.13.94 0 1.6.44 2 1.13.37.65.5 1.5.5 2.37 0 .86-.13 1.72-.5 2.37-.4.7-1.06 1.13-2 1.13-.93 0-1.6-.44-2-1.13-.37-.65-.5-1.5-.5-2.37 0-.86.13-1.72.5-2.37Zm.87.5A3.87 3.87 0 0 0 11 13.5c0 .8.12 1.44.37 1.87.23.4.57.63 1.13.63.57 0 .9-.23 1.13-.63.25-.43.37-1.08.37-1.87 0-.8-.12-1.44-.37-1.87-.23-.4-.56-.63-1.13-.63-.56 0-.9.23-1.13.63ZM8 10.5a.5.5 0 0 0-.78-.42l-1.5 1a.5.5 0 1 0 .56.84l.72-.49v5.07a.5.5 0 0 0 1 0v-6Z",
    FILLED : "M15.73 5.63V3.75a.75.75 0 0 1 1.5 0v3.5c0 .41-.33.75-.75.75h-4a.75.75 0 0 1 0-1.5h2.03a6.3 6.3 0 0 0-4.78-2.25 6.45 6.45 0 0 0-5.65 3.54.83.83 0 0 1-.73.46c-.54 0-.91-.53-.67-1.01a7.93 7.93 0 0 1 7.05-4.49c2.4 0 4.54 1.12 6 2.88ZM12.5 17c1.88 0 2.5-1.57 2.5-3.5s-.62-3.5-2.5-3.5c-1.87 0-2.5 1.57-2.5 3.5s.63 3.5 2.5 3.5Zm.68-1.81a.59.59 0 0 1-.22.22.94.94 0 0 1-.46.09.94.94 0 0 1-.46-.09.59.59 0 0 1-.21-.22 3.38 3.38 0 0 1-.33-1.69c0-.85.15-1.4.32-1.69a.59.59 0 0 1 .22-.22c.07-.04.2-.09.46-.09s.4.05.46.09c.07.04.14.1.22.22.18.3.32.84.32 1.69s-.14 1.4-.32 1.69Zm-4.93-4.44a.75.75 0 0 0-1.24-.57l-1.75 1.5a.75.75 0 1 0 .98 1.14l.51-.44v3.87a.75.75 0 0 0 1.5 0v-5.5Z"
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