/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LockMultiple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9 3a2 2 0 0 1 2 2v1H7V5c0-1.1.9-2 2-2ZM6 5v1h-.5C4.67 6 4 6.67 4 7.5v6c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5H12V5a3 3 0 1 0-6 0ZM5 7.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v6a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-6ZM7.5 17a1.5 1.5 0 0 1-1.41-1h6.41a2.5 2.5 0 0 0 2.5-2.5V8.09c.58.2 1 .76 1 1.41v4a3.5 3.5 0 0 1-3.5 3.5h-5ZM9 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    FILLED : "M9 3a2 2 0 0 1 2 2v1H7V5c0-1.1.9-2 2-2Zm3 3V5a3 3 0 1 0-6 0v1h-.5C4.67 6 4 6.67 4 7.5v6c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5H12ZM6.09 16c.2.58.76 1 1.41 1h5a3.5 3.5 0 0 0 3.5-3.5v-4c0-.65-.42-1.2-1-1.41v5.41a2.5 2.5 0 0 1-2.5 2.5H6.1ZM10 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
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