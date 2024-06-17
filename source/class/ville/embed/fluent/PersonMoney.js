/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonMoney",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A8.46 8.46 0 0 0 9 17.96v-1a7.42 7.42 0 0 1-3.33-1A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h11.73A2 2 0 0 0 15 11H5Zm14 3.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Zm-1 3v-1c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5Zm0-3a.5.5 0 0 1-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1Zm-6.5-.5a.5.5 0 0 1-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1Zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    FILLED : "M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A8.46 8.46 0 0 0 9 17.96V14c0-1.1.9-2 2-2h5.73A2 2 0 0 0 15 11H5Zm14 3.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Zm-1 3v-1c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5Zm0-3a.5.5 0 0 1-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1Zm-6.5-.5a.5.5 0 0 1-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1Zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
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