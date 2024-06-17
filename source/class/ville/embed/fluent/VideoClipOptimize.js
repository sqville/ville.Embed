/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoClipOptimize",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 6.5A3.5 3.5 0 0 1 6.5 3a.5.5 0 0 0 0-1A4.5 4.5 0 0 0 2 6.5a.5.5 0 0 0 1 0Zm5.26.56a.5.5 0 0 1 .5.02l4 2.5a.5.5 0 0 1 .02.84l-4 2.65a.5.5 0 0 1-.78-.42V7.5c0-.18.1-.35.26-.44ZM6.5 17A3.5 3.5 0 0 1 3 13.5a.5.5 0 0 0-1 0A4.5 4.5 0 0 0 6.5 18a.5.5 0 0 0 0-1ZM17 6.5A3.5 3.5 0 0 0 13.5 3a.5.5 0 0 1 0-1A4.5 4.5 0 0 1 18 6.5a.5.5 0 0 1-1 0ZM13.5 17a3.5 3.5 0 0 0 3.5-3.5.5.5 0 0 1 1 0 4.5 4.5 0 0 1-4.5 4.5.5.5 0 0 1 0-1ZM7 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7ZM5 7c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Z",
    FILLED : "M3 6.5A3.5 3.5 0 0 1 6.5 3a.5.5 0 0 0 0-1A4.5 4.5 0 0 0 2 6.5a.5.5 0 0 0 1 0ZM4 7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Zm2.5 10A3.5 3.5 0 0 1 3 13.5a.5.5 0 0 0-1 0A4.5 4.5 0 0 0 6.5 18a.5.5 0 0 0 0-1ZM17 6.5A3.5 3.5 0 0 0 13.5 3a.5.5 0 0 1 0-1A4.5 4.5 0 0 1 18 6.5a.5.5 0 0 1-1 0ZM13.5 17a3.5 3.5 0 0 0 3.5-3.5.5.5 0 0 1 1 0 4.5 4.5 0 0 1-4.5 4.5.5.5 0 0 1 0-1ZM8.26 7.06A.5.5 0 0 0 8 7.5v5.15a.5.5 0 0 0 .78.42l4-2.65a.5.5 0 0 0-.01-.84l-4-2.5a.5.5 0 0 0-.51-.02Z"
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