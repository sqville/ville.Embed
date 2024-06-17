/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Gavel",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.44 5.28a1.5 1.5 0 0 0 .23 2.31l1.76 1.18-5.85 5.86a1.98 1.98 0 1 0 2.8 2.8l5.85-5.86 1.18 1.76c.53.79 1.64.9 2.3.23l2.85-2.84a1.5 1.5 0 0 0-.19-2.28l-3.31-2.39a.5.5 0 0 1-.12-.11l-2.38-3.31a1.5 1.5 0 0 0-2.28-.19L6.44 5.28Zm4.22 5.44-6 6a.98.98 0 0 1-1.37-1.39l5.99-5.99.74.5c.06.04.1.08.14.14l.5.74ZM7.22 6.76a.5.5 0 0 1-.07-.77l2.84-2.84a.5.5 0 0 1 .76.06l.56.79-3.29 3.3-.8-.54Zm1.65 1.1 3.04-3.04 1.22 1.7c.1.14.21.25.34.35l1.7 1.22-3.03 3.04-1.15-1.71a1.5 1.5 0 0 0-.41-.41L8.87 7.86ZM16 8.7l.79.56a.5.5 0 0 1 .06.76L14 12.85a.5.5 0 0 1-.77-.07l-.53-.8 3.3-3.3Zm-4 7.81c0-.28.22-.5.5-.5h3a.5.5 0 1 1 0 1h2a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1h2a.5.5 0 0 1-.5-.5Z",
    FILLED : "M6.67 7.59a1.5 1.5 0 0 1-.23-2.3l2.84-2.85a1.5 1.5 0 0 1 2.28.19l.47.65L7.3 8.01l-.63-.42Zm1.48 1 4.47-4.49 1.33 1.84a.5.5 0 0 0 .1.11l1.85 1.33-4.48 4.47-1.26-1.87a.5.5 0 0 0-.14-.14L8.15 8.58Zm3.84 4.11 4.73-4.73.65.47c.75.54.84 1.63.19 2.28l-2.84 2.84a1.5 1.5 0 0 1-2.31-.23l-.42-.63Zm-3.8-2.89L2.4 15.6a1.41 1.41 0 1 0 2 2l5.78-5.78-.8-1.2-1.2-.8ZM12 16.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h2a.5.5 0 0 1 0 1h-7a.5.5 0 1 1 0-1h2a.5.5 0 0 1-.5-.5Z"
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