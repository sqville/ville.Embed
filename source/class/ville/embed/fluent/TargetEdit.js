/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TargetEdit",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a5 5 0 0 1 10-.06l-1.15 1.15a4 4 0 1 0-2.76 2.76l-.82.82c-.1.1-.2.21-.29.33A5 5 0 0 1 5 10Zm5-7a7 7 0 0 1 6.93 6c.34-.02.69.02 1.02.12a8 8 0 1 0-8.94 8.82c0-.1.02-.2.05-.29l.17-.7A7 7 0 0 1 10 3Zm.98 12.38 4.83-4.83a1.87 1.87 0 0 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01Z",
    FILLED : "M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a5 5 0 0 1 10-.05l-2.42 2.4a3.5 3.5 0 1 0-.23.23l-2.08 2.09c-.1.1-.2.21-.28.33A5 5 0 0 1 5 10Zm5-6.5c3.28 0 5.99 2.43 6.43 5.59.5-.13 1.02-.12 1.52.03A8 8 0 1 0 9 17.93c0-.09.02-.18.05-.28l.3-1.19A6.5 6.5 0 0 1 10 3.5Zm.98 11.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01Z"
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