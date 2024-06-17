/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookOpenMicrophone",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 16c-.46.6-1.18 1-2 1H3.5A1.5 1.5 0 0 1 2 15.5v-11C2 3.67 2.67 3 3.5 3H8c.82 0 1.54.4 2 1 .46-.6 1.18-1 2-1h4.5c.83 0 1.5.67 1.5 1.5v7c0-.82-.4-1.54-1-2v-5a.5.5 0 0 0-.5-.5H12c-.83 0-1.5.67-1.5 1.5v9c0 .52.27.99.68 1.25.13.45.32.86.57 1.24A2.5 2.5 0 0 1 10 16ZM3 4.5v11c0 .28.22.5.5.5H8c.83 0 1.5-.67 1.5-1.5v-9C9.5 4.67 8.83 4 8 4H3.5a.5.5 0 0 0-.5.5Zm14.43 11.6c.35-.44.57-1 .57-1.6a.5.5 0 0 1 1 0 3.5 3.5 0 0 1-3 3.46v.54a.5.5 0 0 1-1 0v-.54a3.49 3.49 0 0 1-3-3.46.5.5 0 0 1 1 0 2.49 2.49 0 0 0 2.5 2.5 2.5 2.5 0 0 0 1.93-.9ZM14 11.5a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1-3 0v-3Z",
    FILLED : "M10 16.14c-.5.53-1.21.86-2 .86H3.75C2.78 17 2 16.22 2 15.25V4.75C2 3.78 2.78 3 3.75 3H8c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h4.25c.97 0 1.75.78 1.75 1.75v6.75a2.5 2.5 0 0 0-1.5-2.3V4.76a.25.25 0 0 0-.25-.25H12c-.69 0-1.25.56-1.25 1.25v8.5c0 .3.1.58.28.8.09.7.34 1.37.72 1.94a2.74 2.74 0 0 1-1.75-.85ZM3.5 4.75v10.5c0 .14.11.25.25.25H8c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 0 0-.25.25Zm13.93 11.34c.35-.43.57-.98.57-1.59a.5.5 0 0 1 1 0 3.5 3.5 0 0 1-3 3.46v.54a.5.5 0 0 1-1 0v-.54a3.49 3.49 0 0 1-3-3.46.5.5 0 0 1 1 0 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 1.93-.9ZM15.5 16a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 3 0v3c0 .83-.67 1.5-1.5 1.5Z"
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