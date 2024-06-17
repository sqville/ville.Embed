/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextHeader2",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.5 4c.28 0 .5.22.5.5V9h6V4.5a.5.5 0 0 1 1 0v11a.5.5 0 0 1-1 0V10H3v5.5a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5Zm12 1A2.54 2.54 0 0 0 12 7.5a.5.5 0 0 1-1 0C11 5.75 12.45 4 14.5 4c1.24 0 2.4.57 3.05 1.54.66 1 .71 2.33-.12 3.72-.42.7-1 1.24-1.62 1.71-.3.24-.62.46-.92.67l-.14.1c-.26.18-.52.35-.77.54-1.01.75-1.78 1.51-1.95 2.72h5.47a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5c0-2 1.17-3.13 2.4-4.03.25-.19.52-.38.79-.56l.13-.09c.3-.21.6-.42.88-.64.57-.43 1.04-.89 1.37-1.44.67-1.1.56-2.02.14-2.65A2.64 2.64 0 0 0 14.5 5Z",
    FILLED : "M3.5 4.5a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0v-5h5v5a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-1.5 0V9h-5V4.5Zm11.25.75A2.3 2.3 0 0 0 12.5 7.5a.75.75 0 0 1-1.5 0 3.8 3.8 0 0 1 3.75-3.75c1.4 0 2.48.8 2.97 1.91.5 1.11.41 2.5-.33 3.73a6.18 6.18 0 0 1-1.52 1.6l-.82.62-.07.04c-.3.22-.58.43-.85.65-.9.72-1.57 1.45-1.8 2.45h4.92a.75.75 0 0 1 0 1.5H11.5a.75.75 0 0 1-.75-.75c0-2.1 1.23-3.4 2.44-4.37l.9-.69.07-.04.78-.59c.53-.42.93-.8 1.17-1.2.5-.85.52-1.71.24-2.34a1.68 1.68 0 0 0-1.6-1.02Z"
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