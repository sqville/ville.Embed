/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarDate",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.5 3A2.5 2.5 0 0 1 17 5.34v9.16a2.5 2.5 0 0 1-2.34 2.5H5.5A2.5 2.5 0 0 1 3 14.66V5.5A2.5 2.5 0 0 1 5.34 3h9.16ZM16 7H4v7.5c0 .78.6 1.42 1.36 1.5h9.14c.78 0 1.42-.6 1.5-1.36V7Zm-4.48 1.23c.53 0 .95.15 1.27.43.3.28.46.67.46 1.15 0 .28-.07.53-.21.75-.14.21-.34.39-.59.51.3.14.53.33.69.57.16.24.24.5.24.8 0 .5-.17.9-.5 1.2a2 2 0 0 1-1.36.44 2 2 0 0 1-1.36-.44 1.5 1.5 0 0 1-.5-1.2c0-.3.07-.57.24-.81.16-.24.38-.43.67-.56-.24-.12-.43-.3-.58-.51a1.33 1.33 0 0 1-.2-.75c0-.48.15-.87.46-1.15.31-.28.74-.43 1.27-.43ZM8.5 8.3V14h-.95V9.43l-1.4.48v-.8l2.22-.82h.13Zm3.01 3.17c-.27 0-.5.09-.66.26a.94.94 0 0 0-.25.68c0 .28.08.5.25.67a.9.9 0 0 0 .67.25.9.9 0 0 0 .67-.24.92.92 0 0 0 .24-.68c0-.28-.08-.5-.25-.68a.89.89 0 0 0-.67-.26Zm0-2.46a.74.74 0 0 0-.57.22.88.88 0 0 0-.2.63c0 .26.06.47.2.62.15.15.34.23.58.23.24 0 .43-.08.58-.23a.88.88 0 0 0 .2-.62.88.88 0 0 0-.2-.61.74.74 0 0 0-.58-.24Zm2.99-5h-9c-.78 0-1.42.6-1.5 1.36V6h12v-.5c0-.78-.6-1.42-1.36-1.5h-.14Z",
    FILLED : "M17 7v7.5a2.5 2.5 0 0 1-2.34 2.5H5.5A2.5 2.5 0 0 1 3 14.66V7h14Zm-5.48 1.23c-.53 0-.96.15-1.27.43-.31.28-.47.67-.47 1.15 0 .28.07.53.21.75.15.21.34.39.58.51-.29.13-.51.32-.67.56-.17.24-.25.51-.25.82 0 .5.17.9.51 1.19a2 2 0 0 0 1.36.44 2 2 0 0 0 1.35-.44c.34-.3.51-.7.51-1.2 0-.3-.08-.56-.24-.8a1.62 1.62 0 0 0-.69-.57c.25-.12.45-.3.59-.51.14-.22.21-.47.21-.75 0-.48-.15-.87-.46-1.15a1.82 1.82 0 0 0-1.27-.43ZM8.5 8.3h-.13l-2.21.82v.8l1.4-.48V14h.94V8.3Zm3.01 3.17c.28 0 .5.09.67.26.17.17.25.4.25.68 0 .3-.08.52-.24.68a.9.9 0 0 1-.67.24.9.9 0 0 1-.67-.25.91.91 0 0 1-.25-.67c0-.28.09-.5.25-.68a.88.88 0 0 1 .66-.26Zm0-2.46c.25 0 .44.08.58.24.15.16.22.36.22.6 0 .27-.07.48-.21.63a.75.75 0 0 1-.58.23.75.75 0 0 1-.58-.23.88.88 0 0 1-.2-.62c0-.27.06-.47.2-.63a.74.74 0 0 1 .58-.22Zm2.99-6A2.5 2.5 0 0 1 17 5.34V6H3v-.5A2.5 2.5 0 0 1 5.34 3h9.16Z"
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