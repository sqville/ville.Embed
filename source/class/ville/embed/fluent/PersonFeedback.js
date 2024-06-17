/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonFeedback",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.5 12c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5c0-.83.67-1.5 1.5-1.5h7Zm0 1h-7a.5.5 0 0 0-.5.5v.5c0 1.44 1.43 3 4 3 2.57 0 4-1.56 4-3v-.5a.5.5 0 0 0-.5-.5ZM7 5.5A2.75 2.75 0 1 1 7 11a2.75 2.75 0 0 1 0-5.5ZM16 2a2 2 0 0 1 2 1.85V6a2 2 0 0 1-1.85 2H14.5l-1.2 1.6a1 1 0 0 1-1.78-.38l-.01-.1V9l-.01-1.07-.08-.01a2 2 0 0 1-1.4-1.6l-.01-.17L10 6V4a2 2 0 0 1 1.85-2H16ZM7 6.5A1.75 1.75 0 1 0 7 10a1.75 1.75 0 0 0 0-3.5ZM16 3h-4a1 1 0 0 0-1 .88V6a1 1 0 0 0 .88 1h.62v2L14 7h2a1 1 0 0 0 1-.88V4a1 1 0 0 0-.88-1H16Z",
    FILLED : "M10.5 12c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5c0-.83.67-1.5 1.5-1.5h7ZM7 5.5A2.75 2.75 0 1 1 7 11a2.75 2.75 0 0 1 0-5.5ZM16 2a2 2 0 0 1 2 1.85V6a2 2 0 0 1-1.85 2H14.5l-1.2 1.6a1 1 0 0 1-1.78-.38l-.01-.1V9l-.01-1.07-.08-.01a2 2 0 0 1-1.4-1.6l-.01-.17L10 6V4a2 2 0 0 1 1.85-2H16Z"
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