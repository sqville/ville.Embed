/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ColorBackground",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 10.66v2.84A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4H9.48l.67.67c.1.1.2.22.28.33h5.07c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5v-1.84l-1-1ZM5 1.5a.5.5 0 0 1 1 0v1.17a2 2 0 0 1 1.32.59l2.12 2.12a2 2 0 0 1 0 2.83l-2.83 2.83a2 2 0 0 1-2.82 0L1.66 8.9a2 2 0 0 1 0-2.82L4.5 3.26A2 2 0 0 1 5 2.89V1.5Zm0 4V4.16L2.66 6.5h6.32a1 1 0 0 0-.25-.41L6.61 3.96A1 1 0 0 0 6 3.68V5.5a.5.5 0 0 1-1 0Zm-2.92 2c0 .26.1.51.3.7l2.11 2.13a1 1 0 0 0 1.42 0L8.73 7.5H2.08Zm8.08.93.22-.26a.5.5 0 0 1 .74 0l.22.26c.12.15.29.38.46.64.31.5.7 1.23.7 1.93 0 1-.67 2-1.75 2S9 12 9 11c0-.7.39-1.44.7-1.93.17-.26.34-.49.46-.64Zm.59.88c-.07.09-.14.19-.2.3-.31.47-.55 1-.55 1.39 0 .3.1.57.25.75.13.17.3.25.5.25s.37-.08.5-.25c.15-.18.25-.46.25-.75 0-.4-.24-.92-.55-1.4l-.2-.3Z",
    FILLED : "m2 10.66 1.08 1.08a3 3 0 0 0 4.24 0l.68-.68c.03 1.34.96 2.94 2.75 2.94 1.82 0 2.75-1.65 2.75-3 0-1.01-.53-1.96-.86-2.47-.2-.3-.38-.55-.52-.72l-.01-.02-.22-.26-.02-.03a1.5 1.5 0 0 0-.85-.48 3 3 0 0 0-.87-2.35L9.48 4h6.02A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5v-2.84ZM5 1.5a.5.5 0 0 1 1 0v1.17a2 2 0 0 1 1.32.59l2.12 2.12a2 2 0 0 1 0 2.83l-2.83 2.83a2 2 0 0 1-2.82 0L1.66 8.9a2 2 0 0 1 0-2.82L4.5 3.26A2 2 0 0 1 5 2.89V1.5Zm0 4V4.16L2.66 6.5h6.32a1 1 0 0 0-.25-.41L6.61 3.96A1 1 0 0 0 6 3.68V5.5a.5.5 0 0 1-1 0Zm-2.92 2c0 .26.1.51.3.7l2.11 2.13a1 1 0 0 0 1.42 0L8.73 7.5H2.08Zm8.3.67-.22.26c-.12.15-.29.38-.46.64C9.4 9.57 9 10.3 9 11c0 1 .67 2 1.75 2s1.75-1 1.75-2c0-.7-.39-1.44-.7-1.93a8.13 8.13 0 0 0-.46-.64l-.22-.26a.5.5 0 0 0-.74 0Zm.17 1.44c.06-.11.13-.21.2-.3l.2.3c.31.47.55 1 .55 1.39 0 .3-.1.57-.25.75a.62.62 0 0 1-.5.25.62.62 0 0 1-.5-.25A1.21 1.21 0 0 1 10 11c0-.4.24-.92.55-1.4Z"
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