/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Checkbox1",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8c.77 0 1.47-.29 2-.76v-.83c-.22.08-.44.1-.67.08A2 2 0 0 1 14 16H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5.75l.6-.45c.12-.1.26-.16.4-.21V6a3 3 0 0 0-3-3H6Zm7.85 4.85a.5.5 0 0 0-.7-.7L8.5 11.79l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5Zm3.87 4.2a.5.5 0 0 1 .28.45v5a.5.5 0 0 1-1 0v-4l-1.2.9a.5.5 0 0 1-.6-.8l2-1.5a.5.5 0 0 1 .52-.05Z",
    FILLED : "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8c.77 0 1.47-.29 2-.76v-.83a1.5 1.5 0 0 1-1.4-2.61l2-1.5c.12-.1.26-.16.4-.21V6a3 3 0 0 0-3-3H6Zm7.85 4.85-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 4.65-4.64a.5.5 0 0 1 .7.7Zm3.87 4.2a.5.5 0 0 1 .28.45v5a.5.5 0 0 1-1 0v-4l-1.2.9a.5.5 0 0 1-.6-.8l2-1.5a.5.5 0 0 1 .52-.05Z"
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