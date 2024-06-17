/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CursorProhibited",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 5.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1ZM14.5 9c-.79 0-1.51-.26-2.1-.7l4.9-4.9A3.5 3.5 0 0 1 14.5 9Zm2.5 3.12-1.47-1.22c.4-.07.78-.19 1.14-.35l.97.8a1 1 0 0 1-.63 1.77h-5.6c-.43 0-.85.2-1.13.52l-3.52 4.07A1 1 0 0 1 5 17.06v-14a1 1 0 0 1 1.64-.77l2.48 2.05C9.04 4.7 9 5.1 9 5.5v.03L6 3.06v14l3.52-4.07a2.5 2.5 0 0 1 1.9-.87H17Z",
    FILLED : "M10 5.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1ZM14.5 9c-.79 0-1.51-.26-2.1-.7l4.9-4.9A3.5 3.5 0 0 1 14.5 9Zm0 2a5.5 5.5 0 0 1-5.38-6.66L6.64 2.29A1 1 0 0 0 5 3.06v14a1 1 0 0 0 1.76.65l3.52-4.07c.28-.33.7-.52 1.13-.52h5.6a1 1 0 0 0 .63-1.77l-.97-.8c-.66.3-1.4.45-2.17.45Z"
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