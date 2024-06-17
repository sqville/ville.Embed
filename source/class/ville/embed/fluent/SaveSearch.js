/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SaveSearch",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 5c0-1.1.9-2 2-2h8.38a2 2 0 0 1 1.41.59l1.62 1.62A2 2 0 0 1 17 6.62V15a2 2 0 0 1-2 2h-2.88l-1-1H14v-4.5a.5.5 0 0 0-.5-.5h-3.26a4.53 4.53 0 0 0-.91-1h4.17c.83 0 1.5.67 1.5 1.5V16a1 1 0 0 0 1-1V6.62a1 1 0 0 0-.3-.7L14.1 4.28a1 1 0 0 0-.71-.29H13v2.5c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 6 6.5V4H5a1 1 0 0 0-1 1v4.76a4.52 4.52 0 0 0-1 .91V5Zm4-1v2.5c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5V4H7Zm3 9.5c0 .79-.26 1.51-.7 2.1l2.55 2.55a.5.5 0 0 1-.7.7L8.6 16.3a3.5 3.5 0 1 1 1.4-2.8Zm-6 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z",
    FILLED : "M3 5c0-1.1.9-2 2-2h1v3.5C6 7.33 6.67 8 7.5 8h4c.83 0 1.5-.67 1.5-1.5V3h.38a2 2 0 0 1 1.41.59l1.62 1.62A2 2 0 0 1 17 6.62V15a2 2 0 0 1-2 2v-5.5c0-.83-.67-1.5-1.5-1.5H9.33a4.5 4.5 0 0 0-6.33.67V5Zm7.56 10.44L12.12 17H14v-5.5a.5.5 0 0 0-.5-.5h-3.26a4.5 4.5 0 0 1 .32 4.44ZM12 3H7v3.5c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5V3Zm-2 10.5c0 .79-.26 1.51-.7 2.1l2.55 2.55a.5.5 0 0 1-.7.7L8.6 16.3a3.5 3.5 0 1 1 1.4-2.8Zm-6 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"
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