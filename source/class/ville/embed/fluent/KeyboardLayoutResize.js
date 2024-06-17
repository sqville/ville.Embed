/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.KeyboardLayoutResize",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 3.5c0-.28.22-.5.5-.5h7a.5.5 0 0 0 0-1h-7C2.67 2 2 2.67 2 3.5v4a.5.5 0 0 0 1 0v-4ZM3.5 9C2.67 9 2 9.67 2 10.5v6c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-8ZM3 10.5c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5v6a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-6ZM5.5 15a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0-2.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.5-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM17.5 9c.28 0 .5.22.5.5v7c0 .83-.67 1.5-1.5 1.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 0 .5-.5v-7c0-.28.22-.5.5-.5Zm-4-7a.5.5 0 0 0 0 1h2.8l-4.15 4.15a.5.5 0 0 0 .7.7L17 3.71V6.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5h-4Z",
    FILLED : "M3 3.5c0-.28.22-.5.5-.5h7a.5.5 0 0 0 0-1h-7C2.67 2 2 2.67 2 3.5v4a.5.5 0 0 0 1 0v-4ZM3.5 9C2.67 9 2 9.67 2 10.5v6c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-8Zm2 6h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Zm0-2.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2 .75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm3.5-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM17.5 9c.28 0 .5.22.5.5v7c0 .83-.67 1.5-1.5 1.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 0 .5-.5v-7c0-.28.22-.5.5-.5Zm-4-7a.5.5 0 0 0 0 1h2.8l-4.15 4.15a.5.5 0 0 0 .7.7L17 3.71V6.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5h-4Z"
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