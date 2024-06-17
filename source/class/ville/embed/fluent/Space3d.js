/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Space3d",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm13 0a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3h12V6ZM4 12l1.14-2H4v2Zm.86.5h2.76l.72-2.5H6.29l-1.43 2.5Zm-.86 1v.5c0 1.1.9 2 2 2h.62l.72-2.5H4Zm4.38 0L7.66 16h4.68l-.72-2.5H8.38Zm4.28 0 .72 2.5H14a2 2 0 0 0 2-2v-.5h-3.34Zm2.48-1L13.7 10h-2.05l.72 2.5h2.76Zm-3.8 0-.72-2.5H9.38l-.72 2.5h2.68ZM16 12v-2h-1.14L16 12Z",
    FILLED : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6.5h-.71L14.86 10H16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4h1.14L3.7 12.5H3V6Zm0 8v-.5h4.34l-.82 2.86-.2.64H6a3 3 0 0 1-3-3Zm4.48 2.64.9-3.14h3.24l.9 3.13.1.37H7.37l.1-.36h.01Zm1.18-4.14h2.68l-.72-2.5H9.38l-.72 2.5Zm4.82 3.86-.82-2.86H17v.5a3 3 0 0 1-3 3h-.35l-.17-.63Zm-1.1-3.86h2.76L13.7 10h-2.05l.72 2.5Zm-7.52 0h2.76l.72-2.5H6.29l-1.43 2.5Z"
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