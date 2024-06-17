/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SkipBack10",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 3.5a.5.5 0 1 1 1 0v2.2a8 8 0 0 1 13.16 1.75.5.5 0 1 1-.9.44 7 7 0 0 0-12-.89H7.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4Zm5 7a.5.5 0 0 0-.78-.42l-1.5 1a.5.5 0 0 0 .56.84l.72-.49v5.07a.5.5 0 0 0 1 0v-6Zm4.5-.5c-.93 0-1.6.44-2 1.13-.37.65-.5 1.5-.5 2.37 0 .86.13 1.72.5 2.37.4.7 1.07 1.13 2 1.13.94 0 1.6-.44 2-1.13.38-.65.5-1.5.5-2.37 0-.86-.12-1.72-.5-2.37a2.18 2.18 0 0 0-2-1.13ZM11 13.5c0-.8.13-1.44.37-1.87.23-.4.57-.63 1.13-.63.57 0 .9.23 1.13.63.25.43.37 1.08.37 1.87 0 .8-.12 1.44-.37 1.87-.22.4-.56.63-1.13.63-.56 0-.9-.23-1.13-.63A3.87 3.87 0 0 1 11 13.5Z",
    FILLED : "M4 5.63V3.75a.75.75 0 0 0-1.5 0v3.5c0 .41.34.75.75.75h4a.75.75 0 0 0 0-1.5H5.23A6.3 6.3 0 0 1 10 4.25c2.4 0 4.53 1.41 5.65 3.54.15.28.43.46.73.46.54 0 .91-.53.67-1.01A7.93 7.93 0 0 0 10 2.75a7.77 7.77 0 0 0-6 2.88Zm4.25 5.12a.75.75 0 0 0-1.24-.57l-1.75 1.5a.75.75 0 1 0 .98 1.14l.51-.44v3.87a.75.75 0 0 0 1.5 0v-5.5ZM15 13.5c0 1.93-.63 3.5-2.5 3.5-1.88 0-2.5-1.57-2.5-3.5s.63-3.5 2.5-3.5c1.88 0 2.5 1.57 2.5 3.5Zm-1.5 0c0-.85-.15-1.4-.32-1.69a.59.59 0 0 0-.22-.22.94.94 0 0 0-.46-.09.94.94 0 0 0-.46.09.59.59 0 0 0-.22.22c-.17.3-.32.84-.32 1.69s.15 1.4.32 1.69c.08.12.15.18.22.22.07.04.2.09.46.09s.39-.05.46-.09c.07-.04.14-.1.22-.22.17-.3.32-.84.32-1.69Z"
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